<script lang="ts">
	import CityCondition from './CityCondition.svelte';
	import RadiusCondition from './RadiusCondition.svelte';
	import ConditionList from './ConditionList.svelte';
	import SearchButton from './SearchButton.svelte';
</script>

<form method="POST" action="/search">
	<CityCondition />
	<RadiusCondition />
	<ConditionList />
	<SearchButton />
</form>
