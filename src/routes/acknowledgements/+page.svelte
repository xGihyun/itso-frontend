<script lang="ts">
	import { ccisLogo, gioImg, jamImg, makatiCityLogo, umakLogo } from "$lib/assets/images";
	import Footer from "$lib/components/Footer.svelte";


</script>

<main class="absolute flex flex-col justify-center items-center h-[90vh] w-full p-10 gap-10">
    
    <div class="flex flex-col justify-center items-center">
        <span class="font-bold text-4xl text-center">Meet the Developers</span>
        <span class="text-center">The IT Skills Olympics Website wouldn't be possible without the following people</span>
    </div>


    <div class="flex flex-row justify-center items-center gap-10 lg:gap-28">

        <div class="flex flex-col items-center gap-5">
            <img class="rounded-full w-64 object-fit bg-white" src={gioImg} alt="">
            
            <div class="flex flex-col items-center">
                <span class="font-bold text-center">Mr. GIORDAN MATTHEW NUEZ</span>
                <span class="italic">Lead Developer</span>
                <span class="text-sm italic">Full-Stack Lead</span>
                <span class="text-sm italic pt-3">B. Sc. in Computer Science</span>
            </div>
        </div>

        <div class="flex flex-col items-center gap-5">
            <img class="rounded-full w-64 object-fit bg-white" src={jamImg} alt="">

            <div class="flex flex-col items-center">
                <span class="font-bold text-center">Mr. JAM EMMANUEL VILLAROSA</span>
                <span class="italic">UI/UX Developer</span>
                <span class="text-sm italic">Front-End Developer</span>
                <span class="text-sm italic pt-3">B. Sc. in Computer Science</span>
            </div>
        </div>
        

    </div>

    <div class="flex flex-col items-center gap-2">
        <span>Visit <a class="transition-colors hover:text-indigo-400" href="https://umak.edu.ph">umak.edu.ph</a></span>
        <div class="flex flex-row gap-2">
            <img src={makatiCityLogo} class="w-14" alt="">
            <img src={umakLogo} class="w-14" alt="">
            <img src={ccisLogo} class="w-14" alt="">
        </div>
    </div>
</main>