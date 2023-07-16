<script lang="ts">
	import CityCondition from './CityCondition.svelte';
	import RadiusCondition from './RadiusCondition.svelte';
	import ConditionList from './ConditionList.svelte';
	import SearchButton from './SearchButton.svelte';
</script>

<form method="POST" action="/search">
	<CityCondition cityList={data.props.cityList} />
	<RadiusCondition />
	<ConditionList />
	<SearchButton />
</form>
