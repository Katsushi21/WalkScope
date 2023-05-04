<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let index: number;
	export let value: string = '';

	const dispatch = createEventDispatcher();

	function deleteCondition(index: number) {
		dispatch('deleteCondition', index);
	}
</script>

<div class="p4">
	<div />
	<input bind:value type="text" placeholder="Type here" class="input w-full max-w-xs" />
</div>
