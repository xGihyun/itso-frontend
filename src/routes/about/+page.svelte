<script>
	import { itsoBannerFull, itsoLogo, itsoLogoName, javaCodeImg, netProgImg, pcDisImg, softDevImg, webDevImg } from '$lib/assets/images';
	import Footer from '$lib/components/Footer.svelte';

	let innerWidth = 0
    let innerHeight = 0
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	class="border-image-slice border-gradient h-40 md:h-56 lg:h-72 border-b-8 z-20 block lg:hidden"
>
	<img src={itsoBannerFull} alt="IT Skills Olympics" class="object-cover w-full h-full" />
</div>
<div class="px-padding py-10 max-w-5xl mx-auto">
	<div class="flex justify-center p-4">
	<img src={innerWidth < 760 ? itsoLogo : itsoLogoName} alt="ITSO Logo" class={`${innerWidth < 760 ? "w-60 h-70" : "w-full h-full"} `}>
	</div>
	<p class="text-justify">
		<strong>IT Skills Olympics</strong> is an annual event of the <strong>University of Makati's College of Computing and Information Sciences</strong>. This event celebrates
		the best and brightest young minds in the field of information technology. This prestigious
		competition is open to students from all over the country, and features a variety of challenging
		tasks in areas such as programming, cybersecurity, web page design, and more. 
		
		This year's competition is expected to be even more competitive than ever before, with new challenges and a
		greater focus on real-world problem solving. The IT Olympics is a great way to celebrate the
		achievements of excellent IT students and to inspire the next generation of innovators. 
	</p>

	<div class="flex justify-center align-middle p-5">
		<span class="text-3xl font-bold">CATEGORIES</span>
		</div>

	<div class="grid grid-rows-1 lg:grid-cols-2 lg:grid-flow-row gap-4">
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Java Programming</span>
			<img src={javaCodeImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Website Design</span>
			<img src={webDevImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">PC Assembly / Disassembly</span>
			<img src={pcDisImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">.NET Programming</span>
			<img src={netProgImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden lg:col-span-2">
			<span class="transition-all group-hover:font-bold text-xl z-20">And more...</span>
			<img src={softDevImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
	</div>

    <Footer />

</div>
