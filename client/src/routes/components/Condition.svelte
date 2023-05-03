<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import { createEventDispatcher } from 'svelte';

	export let index: number;
	export let value: string = '';

	const dispatch = createEventDispatcher();

	function deleteCondition() {
		dispatch('deleteCondition', index);
	}
</script>

<div class="columns margins">
	<div>
		<Textfield bind:value label="Trailing Icon">
			<Icon class="material-icons" slot="trailingIcon" on:click={deleteCondition} />
			<HelperText slot="helper">検索するスポットを入力してください</HelperText>
		</Textfield>
	</div>
</div>
