<script>
	const { data } = $props();
</script>

{#if data.countries.length < 1}
	<h1>No countries in table, add one</h1>
{:else}
	<pre>{JSON.stringify(data.countries, null, 4)}</pre>
{/if}
