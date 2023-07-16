<script lang="ts">
	import SearchForm from './SearchForm.svelte';
	import Setting from './Setting.svelte';
</script>

<label for="my-drawer-2" class="drawer-overlay" />
<ul class="menu p-4 w-80 h-full bg-base-100 text-base-content">
	<SearchForm />
	<li class="divider" />
	<Setting />
</ul>
