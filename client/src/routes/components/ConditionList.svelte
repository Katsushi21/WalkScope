<script lang="ts">
  import type { Conditions } from '../../../$types';
	import Condition from './Condition.svelte';

	let conditions: Conditions = [];
</script>

{#each conditions as condition}
	<Condition {condition.city} {condition.Condition} />
{/each}
