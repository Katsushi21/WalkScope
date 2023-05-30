<script lang="ts">
	import Map from './components/Map.svelte';
	import CityCondition from './components/CityCondition.svelte';
	import ConditionList from './components/ConditionList.svelte';
	import Setting from './components/Setting.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Walk Scope</title>
</svelte:head>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<Map />
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<CityCondition cityList={data.props.cityList} />
			<ConditionList />
			<li class="divider" />
			<Setting />
		</ul>
	</div>
</div>
