<script lang="ts">
	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';
	import HelperText from '@smui/textfield/helper-text';
	import { createEventDispatcher } from 'svelte';

	export let index: number;
	export let value: string = '';

	const dispatch = createEventDispatcher();

	function deleteCondition(index: number) {
		dispatch('deleteCondition', index);
	}
</script>

<div class="columns margins">
	<div>
		<Textfield bind:value label="Trailing Icon">
			<div style="display: flex; align-items: center;">
				<IconButton class="material-icons" ripple={false} on:click={() => deleteCondition(index)}
					>delete</IconButton
				>
			</div>
			<HelperText slot="helper">検索するスポットを入力してください</HelperText>
		</Textfield>
	</div>
</div>
