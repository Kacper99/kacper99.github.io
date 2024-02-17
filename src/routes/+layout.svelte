<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<head>
	<title>Kacper Martela</title>
</head>

<body class="h-screen bg-gray-200 px-2 py-1">
	<Header />
	<slot />
</body>
