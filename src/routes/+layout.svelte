<script>
	import { enhance } from '$app/forms';
	let { children } = $props();
</script>

<nav>
	<form method="POST" action="?/add" use:enhance>
		<button type="submit">Add new country</button>
	</form>
	<form method="POST" action="?/delete" use:enhance>
		<button type="submit">Delete all</button>
	</form>
</nav>

{@render children()}

<style>
	nav {
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}
</style>
