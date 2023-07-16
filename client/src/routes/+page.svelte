<script lang="ts">
	import Map from './components/Map.svelte';
	import SideMenu from './components/SideMenu.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Walk Radius</title>
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<Map />
		<label
			for="my-drawer-2"
			class="btn btn-outline btn-primary drawer-button absolute top-4 left-4 lg:hidden"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</label>
	</div>
	<div class="drawer-side">
		<SideMenu />
	</div>
</div>
