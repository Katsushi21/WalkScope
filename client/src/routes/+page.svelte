<script>
	import SideMenu from './components/SideMenu.svelte';
	import Map from './components/Map.svelte';
</script>

<svelte:head>
	<title>Walk Scope</title>
</svelte:head>

<div class="flex">
	<div class="w-1/4">
		<SideMenu />
	</div>
	<div class="w-3/4">
		<Map />
	</div>
</div>
