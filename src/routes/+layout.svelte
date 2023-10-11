<script lang="ts">
	import { RingGradient } from '$lib/assets/custom';
	import { Navbar } from '$lib/components';
	import '../app.css';
</script>

<Navbar />

<div class="flex h-screen w-full flex-col overflow-auto pt-16 relative">
	<div class="-z-50 fixed">
		<div
			class="fixed top-52 -left-[calc(34rem-10%)] blur-[7rem] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-amber-600 via-rose-500 to-indigo-900"
		/>
		<div
			class="fixed top-60 -left-[calc(35rem-10%)] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-amber-600 via-rose-500 to-indigo-900"
		/>

		<!-- <div -->
		<!-- 	class="fixed top-60 -left-[20rem] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-amber-600 via-rose-500 to-indigo-900" -->
		<!-- /> -->

		<div
			class="flex fixed -bottom-80 lg:-bottom-72 -left-[calc(10rem-20%)] blur-[7rem] opacity-75 justify-center items-center w-80 h-80 rounded-full bg-gradient-to-b from-amber-400 via-rose-500 to-purple-600 drop-shadow-ring"
		/>
		<!-- <div -->
		<!-- 	class="flex fixed -bottom-20 -left-44 justify-center items-center w-80 h-80 rounded-full bg-gradient-to-b from-amber-400 via-rose-500 to-purple-600 drop-shadow-ring" -->
		<!-- /> -->

		<RingGradient
			id="ring-1"
			svg="-bottom-40 -left-60 lg:-bottom-40 lg:-left-56 w-[26rem] h-[26rem]"
			circle="stroke-[0.8rem]"
			from="stop-color:#ff6347"
			to="stop-color:#8a2be2"
		/>
		<div
			class="fixed -top-96 -left-[calc(4rem-10%)] opacity-50 blur-[7rem] flex justify-center items-center w-[28rem] h-[28rem] rounded-full bg-gradient-to-b from-blue-950 to-cyan-300"
		/>
		<div
			class="fixed -top-80 -left-[calc(4rem-10%)] opacity-10 flex justify-center items-center w-[28rem] h-[28rem] rounded-full bg-gradient-to-b from-blue-950 to-cyan-300"
		/>

		<div
			class="fixed top-10 -right-[calc(38rem-15%)] opacity-50 blur-[7rem] flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-cyan-300 to-blue-950"
		/>
		<div
			class="fixed top-20 -right-[calc(38rem-15%)] opacity-50 flex justify-center items-center w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-cyan-300 to-blue-950"
		/>

		<div
			class="fixed -bottom-[32rem] lg:-bottom-[25rem] -right-[calc(20rem-20%)] opacity-75 blur-[7rem] flex justify-center items-center w-[32rem] h-[32rem] rounded-full bg-gradient-to-b from-pink-300 via-purple-900 to-purple-950"
		/>
		<div
			class="fixed -bottom-[30rem] lg:-bottom-[25rem] -right-[calc(16rem-15%)] opacity-25 flex justify-center items-center w-[32rem] h-[32rem] rounded-full bg-gradient-to-b from-pink-300 via-purple-900 to-purple-950"
		/>

		<RingGradient
			id="ring-2"
			svg="-bottom-40 -right-[21rem] lg:-bottom-20 lg:-right-72 w-[32rem] h-[32rem]"
			circle="stroke-[0.85rem]"
			from="stop-color:#04D9E7"
			to="stop-color:#1B277A"
		/>
		<!-- <div -->
		<!-- 	class="flex fixed -bottom-10 -right-72 justify-center items-center w-[30rem] h-[30rem] rounded-full bg-gradient-to-b from-cyan-300 to-blue-950 shadow-ring" -->
		<!-- /> -->
	</div>

	<main class="h-full">
		<slot />
	</main>
</div>
