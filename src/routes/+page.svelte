<script lang="ts">
	import { itsoBanner } from '$lib/assets/images';
</script>

<!-- <div> -->
<!-- 	<div class="text-amber-400"> -->
<!-- 		<span class="font-gt-walsheim-pro-medium">12</span> -->
<!-- 		<span class="font-gt-walsheim-pro-medium uppercase">th</span> -->
<!-- 	</div> -->
<!---->
<!-- 	<div> -->
<!-- 		<span class="text-9xl">IT</span> -->
<!-- 		<div> -->
<!-- 			<span class="uppercase font-gt-walsheim-pro-medium">skills</span> -->
<!-- 			<span class="uppercase font-gt-walsheim-pro-medium text-amber-400">olympics</span> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!---->
<!-- 	<p>The IT Innovators' Gauntlet: Forging Ahead the Future of Technology</p> -->
<!-- </div> -->
<!---->

<section
	class="flex flex-col w-full justify-center items-center px-padding relative h-screen min-h-[45rem] lg:min-h-[50rem] pt-16"
>
	<img src={itsoBanner} alt="IT Skills Olympics" draggable="false" />

	<a
		href="/register"
		type="button"
		class="bg-gradient-to-r from-rose-400 to-purple-700 mt-10 px-4 py-2 rounded-full tracking-widest hover:scale-105 transition-transform duration-200"
		>Register Now</a
	>
</section>
