<script>
	import ConditionList from './ConditionList.svelte';
	import Setting from './Setting.svelte';
</script>

<div class="drawer drawer-mobile">
	<input id="sidemenu" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<label for="sidemenu" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="sidemenu" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<ConditionList />
			<div class="divider" />
			<div class="fixed bottom-4 w-full">
				<Setting />
			</div>
		</ul>
	</div>
</div>
