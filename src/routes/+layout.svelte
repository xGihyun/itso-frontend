<script lang="ts">
	import { ROUTES } from '$lib';
	import '../app.css';
</script>

<header>
	<nav class="w-full">
		<div class="flex gap-4">
			{#each ROUTES as route, idx (idx)}
				<a href={route.path}>{route.name}</a>
			{/each}
		</div>
	</nav>
</header>

<slot />
