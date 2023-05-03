<script lang="ts">
	import CityCondition from './CityCondition.svelte';
	import Condition from './Condition.svelte';

	type Conditions = {
		city: string;
		condition: string[];
	};

	let conditions: Conditions = { city: '', condition: ['string'] };

	const deleteCondition = (e: CustomEvent<number>): void => {
		conditions.condition = conditions.condition.slice(e.detail);
	};
</script>

<CityCondition city={conditions.city} />

{#each conditions.condition as value, index}
	<Condition {index} {value} on:deleteCondition{deleteCondition} />
{/each}
