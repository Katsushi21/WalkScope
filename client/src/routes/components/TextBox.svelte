<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let focused = false;
	let value: string | null = null;
	let dirty = false;
	let invalid = false;
	$: disabled = focused || !value || !dirty || invalid;

	function clickHandler() {
		alert(`Sending to ${value}!`);
		value = null;
		dirty = false;
	}
</script>

<div class="margins">
	<Textfield
		type="email"
		bind:dirty
		bind:invalid
		updateInvalid
		bind:value
		label="To"
		style="min-width: 250px;"
		input$autocomplete="email"
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		withTrailingIcon={!disabled}
	>
		<svelte:fragment slot="trailingIcon">
			{#if !disabled}
				<Icon class="material-icons" role="button" on:click={clickHandler}>send</Icon>
			{/if}
		</svelte:fragment>
		<HelperText validationMsg slot="helper">That's not a valid email address.</HelperText>
	</Textfield>
</div>

<pre class="status">Focused: {focused}, Dirty: {dirty}, Invalid: {invalid}, Value: {value}</pre>
