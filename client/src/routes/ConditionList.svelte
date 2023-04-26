<script lang="ts">
	import Condition from './Condition.svelte';

	type Condition = {
		condition: string[];
	};
	type Conditions = {
		city: string;
		conditions: Condition[];
	};
	let conditions: Conditions = [];
</script>

{#each conditions as condition}
	<Condition {condition.city} {condition.Condition} />
{/each}
