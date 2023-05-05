<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let index: number;
	export let value: string = '';

	const dispatch = createEventDispatcher();

	function deleteCondition(index: number) {
		dispatch('deleteCondition', index);
	}
</script>

<div class="flex">
	<input bind:value type="text" class="input w-3/4 max-w-xs" />
	<button class="btn btn-circle btn-outline" on:click={() => deleteCondition(index)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
</div>
