<script lang="ts">
	export let circle: string = 'stroke-[1rem]';
	export let svg: string = 'top-0 left-0 w-80 h-80';
	export let from: string = 'stop-color:#ff6347';
	export let to: string = 'stop-color:#8a2be2';
	export let id: string;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="100"
	height="100"
	viewBox="0 0 100 100"
	class={`drop-shadow-ring ${svg} fixed`}
>
	<defs>
		<linearGradient {id} x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" style={from} />
			<stop offset="100%" style={to} />
		</linearGradient>
	</defs>
	<circle
		cx="50"
		cy="50"
		r="30"
		fill="none"
		stroke={`url(#${id})`}
		class={circle}
		stroke-width="10"
	/>
	<circle cx="50" cy="50" r="20" fill="none" stroke="none" />
</svg>
