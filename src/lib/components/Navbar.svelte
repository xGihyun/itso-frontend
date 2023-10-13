<script lang="ts">
	import { ROUTES } from '$lib';
	import { itsoLogoName } from '$lib/assets/images';
</script>

<header class="fixed top-0 left-0 z-[100] w-full">
	<nav
		class="w-full flex h-16 px-padding relative items-center bg-background shadow-rect justify-between border-image-slice border-gradient border-b-2"
	>
		<a href="/">
			<img
				src={itsoLogoName}
				class="object-cover max-h-full h-12"
				alt="IT Skills Olympics"
				draggable="false"
			/>
		</a>
		<div class="flex gap-4 md:gap-10">
			{#each ROUTES as route, idx (idx)}
				<a href={route.path} class="text-md">{route.name}</a>
			{/each}
		</div>
	</nav>
</header>
