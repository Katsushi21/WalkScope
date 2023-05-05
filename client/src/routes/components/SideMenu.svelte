<script>
	import ConditionList from './ConditionList.svelte';
	import Setting from './Setting.svelte';
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<div class="h-9/10">
				<ConditionList />
			</div>
			<div class="divider" />

			<div class="fixed bottom-0">
				<Setting />
			</div>
		</ul>
	</div>
</div>
