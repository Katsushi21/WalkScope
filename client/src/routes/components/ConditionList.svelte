<script lang="ts">
	import CityCondition from './CityCondition.svelte';
	import Condition from './Condition.svelte';

	type Conditions = {
		city: string;
		condition: string[];
	};

	let conditions: Conditions = { city: '', condition: ['0', '1', '2'] };

	const deleteCondition = (index: number): void => {
		conditions.condition.splice(index, 1);
		conditions = conditions;
	};
</script>

<CityCondition city={conditions.city} />

{#each conditions.condition as value, index}
	<Condition {index} {value} on:deleteCondition={() => deleteCondition(index)} />
{/each}
