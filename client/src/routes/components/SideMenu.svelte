<script>
	import ConditionList from './ConditionList.svelte';
	import Setting from './Setting.svelte';
</script>

<div class="drawer-side">
	<label for="sidemenu" class="drawer-overlay" />
	<ul class="menu p-4 bg-base-100 text-base-content">
		<ConditionList />
		<div class="divider" />
		<div class="fixed bottom-4">
			<Setting />
		</div>
	</ul>
</div>
