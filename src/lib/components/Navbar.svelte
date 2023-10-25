<script lang="ts">
	import { ROUTES } from '$lib';
	import { ccisLogo, itsoLogo, itsoLogoName } from '$lib/assets/images';
</script>

<header class="fixed top-0 left-0 z-[100] w-full">
	<nav
		class="w-full flex h-16 px-padding relative items-center bg-background shadow-rect justify-between border-image-slice border-gradient border-b-2"
	>
		<a href="/" class="flex flex-row gap-2">
			<img
				src={ccisLogo}
				class="object-cover max-h-full h-12"
				alt="IT Skills Olympics"
				draggable="false"
			/>
			<img
				src={itsoLogo}
				class="object-cover max-h-full h-12"
				alt="IT Skills Olympics"
				draggable="false"
			/>
		</a>
		<div class="flex gap-4 md:gap-10">
			{#each ROUTES as route, idx (idx)}
				<div class="group">
					<a href={route.path} class="transition-all duration-200 text-md font-normal group-hover:font-bold group-hover:text-yellow-200">{route.name}</a>
					<div class="transition-all duration-200 w-0 group-hover:w-[100%] h-[2px] bg-yellow-200"></div>
				</div>
			{/each}
		</div>
	</nav>
</header>
