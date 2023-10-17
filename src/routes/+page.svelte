<script lang="ts">
	import { itsoBanner, itsoLogo } from '$lib/assets/images';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	let itsoLogoImg: HTMLElement;
	let itsoBannerImg: HTMLElement;

	onMount(async () => {
		anime({
			targets: itsoBannerImg,
			opacity: 0,
			duration: 0
		});

		await anime({
			targets: itsoLogoImg,
			scale: [0, 1],
			easing: "easeOutExpo",
			duration: 2000
		}).finished;

		

		anime({
			targets: itsoLogoImg,
			translateY: "-50px",
			easing: "easeInOutExpo",
			opacity: [0],
		});

		await anime({
			targets: itsoBannerImg,
			translateY: ["50px", "0"],
			easing: "easeInOutExpo",
			opacity: [1],
		}).finished;


		itsoLogoImg.remove();
	});

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

<section class="absolute flex flex-col w-full justify-center items-center px-padding h-[calc(100vh-1rem)] min-h-[45rem] lg:min-h-[50rem] -translate-y-10">
	<img bind:this={itsoLogoImg} src={itsoLogo} alt="IT Skills Olympics" draggable="false" class="relative w-64" />
	
</section>

<section bind:this={itsoBannerImg}
	class="flex flex-col w-full justify-center items-center px-padding relative h-[calc(100vh-4rem)] min-h-[45rem] lg:min-h-[50rem] "
>
	<img  src={itsoBanner} alt="IT Skills Olympics" draggable="false" />

	<a
		href="/register"
		type="button"
		class="bg-gradient-to-r from-rose-400 to-purple-700 mt-10 px-4 py-2 rounded-full tracking-widest hover:scale-105 transition-transform duration-200"
		>Register Now</a
	>


	<div class="pt-10">
	<span>Powered by:</span>
	<img src="https://seeklogo.com/images/C/cebuana-lhuillier-logo-0D85FD19C8-seeklogo.com.png" alt="" srcset="">
	</div>

</section>

<section>
</section>
