<script>
	let links = [
		{ name: 'About', url: '/about' },
		{ name: 'Experience', url: '/experience' },
		{ name: 'Projects', url: '/projects' },
		{ name: 'Blog', url: '/blog' }
	];
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1em;
    }
</style>

<nav>
	<div>Kacper Martela</div>
	<ul>
		{#each links as link}
			<li><a href={link.url}>{link.name}</a></li>
		{/each}
	</ul>
</nav>
