<script>
	let links = [
		{ name: 'About', url: '/about' },
		{ name: 'Experience', url: '/experience' },
		{ name: 'Projects', url: '/projects' },
		{ name: 'Blog', url: '/blog' }
	];
</script>

<nav class="flex justify-between">
	<a href="/" class="text-lg font-bold">Kacper Martela</a>
	<ul class="flex space-x-4">
		{#each links as link}
			<li>
				<a href={link.url} class="text-blue-500 hover:text-blue-800 hover:underline">{link.name}</a>
			</li>
		{/each}
	</ul>
</nav>
