<script lang="ts">
	import { RingGradient } from '$lib/assets/custom';
	import anime from 'animejs';
	import { SvelteComponent, onMount } from 'svelte';
import { flip } from 'svelte/animate';

	let ring1: Element;
	let ring2: Element;

	onMount(async () => {


		await anime({
			targets: [ring1],
			translateY: ["1200px", "900px"],
			easing: 'easeOutSine',
			duration: 2000,
		}).finished;

		anime({
			targets: [ring1],
			translateY: ["900px", "890px"],
			easing: 'easeInOutSine',
			duration: 2000,
			direction: "alternate",
			loop: true,
			autoplay: true
		})
	});

	export let styles: string = '';
</script>

<div class={`-z-50 fixed ${styles}`}>
	<div
		class="fixed top-52 -left-[calc(34rem-10%)] blur-[7rem] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-amber-600 via-rose-500 to-indigo-900"
	/>
	<div
		class="fixed top-60 -left-[calc(35rem-10%)] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-amber-600 via-rose-500 to-indigo-900"
	/>

	<div
		class="flex fixed -bottom-80 lg:-bottom-72 -left-[calc(10rem-20%)] blur-[7rem] opacity-75 justify-center items-center w-80 h-80 rounded-full bg-gradient-to-b from-amber-400 via-rose-500 to-purple-600 drop-shadow-ring"
	/>

	<RingGradient
		bind={ring1}
		id="ring-1"
		svg="animate-float delay-500 -bottom-48 -left-[calc(22rem-15%)] lg:-bottom-40 lg:-left-56 w-[26rem] h-[26rem]"
		circle="stroke-[0.5rem] lg:stroke-[0.8rem]"
		from="stop-color:#ff6347"
		to="stop-color:#8a2be2"/>
	<div
		class="animate-[floating_2.6s_ease-in-out_infinite] fixed -top-96 -left-[calc(4rem-10%)] opacity-50 blur-[7rem] flex justify-center items-center w-[28rem] h-[28rem] rounded-full bg-gradient-to-b from-blue-950 to-cyan-300"
	/>
	<div
		class="animate-[floating_2.1s_ease-in-out_infinite] delay-[1000ms] fixed -top-80 -left-[calc(4rem-10%)] opacity-10 flex justify-center items-center w-[28rem] h-[28rem] rounded-full bg-gradient-to-b from-blue-950 to-cyan-300"
	/>

	<div
		class="animate-[floating_2.5s_ease-in-out_infinite] fixed top-10 -right-[calc(38rem-15%)] opacity-50 blur-[7rem] flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-cyan-300 to-blue-950"
	/>
	<div
		class="animate-[floating_2.5s_ease-in-out_infinite] fixed top-20 -right-[calc(38rem-15%)] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-cyan-300 to-blue-950"
	/>

	<div
		class="animate-[floating_1.5s_ease-in-out_infinite] fixed -bottom-[32rem] lg:-bottom-[25rem] -right-[calc(20rem-20%)] opacity-75 blur-[7rem] flex justify-center items-center w-[32rem] h-[32rem] rounded-full bg-gradient-to-b from-pink-300 via-purple-900 to-purple-950"
	/>
	<div
		class="animate-[floating_2s_ease-in-out_infinite] delay-[1500ms] fixed -bottom-[30rem] lg:-bottom-[25rem] -right-[calc(16rem-15%)] opacity-25 flex justify-center items-center w-[32rem] h-[32rem] rounded-full bg-gradient-to-b from-pink-300 via-purple-900 to-purple-950"
	/>

	<RingGradient
		bind={ring2}
		id="ring-2"
		svg="animate-float -bottom-40 -right-[calc(26rem-15%)] lg:-bottom-20 lg:-right-72 w-[32rem] h-[32rem]"
		circle="stroke-[0.55rem] lg:stroke-[0.85rem]"
		from="stop-color:#04D9E7"
		to="stop-color:#1B277A"
	/>
</div>
