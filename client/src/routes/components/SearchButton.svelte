<script lang="ts">
	import IconButton from '@smui/icon-button';
	let clicked = 0;
</script>

<div style="display: flex; align-items: center;">
	<IconButton class="material-icons" on:click={() => clicked++}>search</IconButton>
</div>
