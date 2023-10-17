<script>
	import { goto } from "$app/navigation";
	import { javaCodeImg, webDevImg, pcDisImg, netProgImg, digiElecImg, cyberSecImg, androidProductivity, androidFinanceImg, androidIotImg, androidGameImg, itQuizImg, compNetImg, itsoLogo, umakLogo, ccisLogo } from "$lib/assets/images";
	import Footer from "$lib/components/Footer.svelte";

</script>
<section class="px-padding py-10 max-w-5xl mx-auto">
    <div class="flex justify-center items-center p-5">
        <img src={itsoLogo} alt="" class="w-40">
    </div>
    <div class="flex flex-col gap-2 justify-center items-center">
        <span class="text-4xl font-bold">IT Olympics Categories</span>
        <span>Get ready to unleash your skills in these categories provided by the IT Olympics.</span>
    </div>

    <div class="grid grid-rows-1 lg:grid-cols-2 lg:grid-flow-row gap-4 pt-5">
        <div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/JAVA-PROGRAMMING.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">Java Programming</span>
			<img src={javaCodeImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/WEB-PAGE-DESIGN.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">Webpage Design</span>
			<img src={webDevImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/PC-DISASSEMBLYASSEMBLY.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">PC Assembly / Disassembly</span>
			<img src={pcDisImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
		<div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/NET-PROGRAMMING.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">.NET Programming</span>
			<img src={netProgImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/DIGITAL-ELECTRONICS.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">Digital Electronics</span>
			<img src={digiElecImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/CYBERSECURITY.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">Cybersecurity</span>
			<img src={cyberSecImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        on:click={() => goto("/docx/ANDROID-APPS.docx")}
        >
			<span class="transition-all group-hover:font-bold text-xl z-20">Android App Dev't (Productivity)</span>
			<img src={androidProductivity} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div on:click={() => goto("/docx/ANDROID-APPS.docx")} class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Android App Dev't (Microfinance)</span>
			<img src={androidFinanceImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div on:click={() => goto("/docx/ANDROID-APPS.docx")} class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Android App Dev't (IoT)</span>
			<img src={androidIotImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div on:click={() => goto("/docx/ANDROID-APPS.docx")} class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Android App Dev't (Game Dev't)</span>
			<img src={androidGameImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div on:click={() => goto("/docx/QUIZ-BEE.docx")} class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">IT Quiz Bee</span>
			<img src={itQuizImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
        <div on:click={() => goto("/docx/COMPUTER-NETWORKING.docx")} class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
			<span class="transition-all group-hover:font-bold text-xl z-20">Computer Networking</span>
			<img src={compNetImg} class="absolute z-10 transition-all brightness-50 group-hover:brightness-75" alt="" srcset="">
		</div>
    </div>

    <Footer />
    
</section>