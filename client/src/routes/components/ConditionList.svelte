<script lang="ts">
	import CityCondition from './CityCondition.svelte';
	import ScopeCondition from './ScopeCondition.svelte';
	import Condition from './Condition.svelte';
	import AddConditionButton from './AddConditionButton.svelte';

	type Conditions = {
		city: string;
		condition: string[];
		scope: number;
	};

	let conditions: Conditions = { city: 'yokohama', condition: ['0', '1', '2'], scope: 100 };

	const deleteCondition = (index: number): void => {
		conditions.condition.splice(index, 1);
		conditions = conditions;
	};
	const addCondition = (): void => {
		conditions.condition.push('');
		conditions = conditions;
	};
</script>

<CityCondition city={conditions.city} />
<ScopeCondition scope={conditions.scope} />
{#each conditions.condition as value, index}
	<Condition {index} {value} on:deleteCondition={() => deleteCondition(index)} />
{/each}
{#if conditions.condition.length < 5}
	<AddConditionButton on:addCondition={addCondition} />
{/if}
