<script>
	import SideMenu from './components/SideMenu.svelte';
	import Map from './components/Map.svelte';
</script>

<svelte:head>
	<title>Walk Scope</title>
</svelte:head>

<div class="flex">
	<div class="w-1/5">
		<SideMenu />
	</div>
	<div class="w-4/5">
		<Map />
	</div>
</div>
