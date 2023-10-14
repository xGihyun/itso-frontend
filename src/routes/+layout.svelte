<script lang="ts">
	import { Background, Navbar } from '$lib/components';
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<Navbar />

<div class="flex w-full flex-col relative">
	<Background
		styles={`${
			$page.url.pathname !== '/' ? 'opacity-20' : 'opacity-100'
		} md:opacity-100 transition-opacity duration-300`}
	/>
	<main class="overflow-x-hidden pt-16">
		<slot />
	</main>
</div>
