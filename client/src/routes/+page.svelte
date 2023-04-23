<script>
	import SideMenu from './SideMenu.svelte';
	import Map from './Map.svelte';
</script>

<svelte:head>
	<title>Walk Scope</title>
</svelte:head>

<div class="flex">
	<div id="sidemenu" class="w-1/4">
		<SideMenu />
	</div>
	<div id="map" class="w-3/4">
		<Map />
	</div>
</div>
