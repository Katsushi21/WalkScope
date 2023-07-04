<script lang="ts">
	const radiusList: number[] = [];
	for (let num = 100; num <= 2000; num += 100) {
		radiusList.push(num);
	}
</script>

<div class="join">
	<button class="btn join-item">半径</button>
	<select class="select select-primary join-item">
		{#each radiusList as radius}
			<option value={radius}>{radius}</option>
		{/each}
	</select>
	<button class="btn join-item">m以内</button>
</div>
