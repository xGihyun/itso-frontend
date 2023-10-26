<script lang="ts">

	import { ccisLogo, itsoLogo, umakLogo } from "$lib/assets/images";
    import Fa from "svelte-fa";
    import { faFacebook } from "@fortawesome/free-brands-svg-icons";
	import { goto } from "$app/navigation";

    export let disableRegisterButton: boolean = false;

</script>
<div class="flex flex-col gap-2 justify-center items-center pt-5">
    {#if !disableRegisterButton}
        <a
        href="/register"
        type="button"
        class="bg-gradient-to-r from-rose-400 to-purple-700 mt-10 px-4 py-2 rounded-full tracking-widest hover:scale-105 transition-transform duration-200"
        >Register Now</a
    >
    {/if}
    
    <span class="text-center">Be the <strong>REVOLUTION</strong>. Be the <strong>INNOVATION</strong>. Be the <strong>FUTURE</strong>.</span>
    <div class="flex flex-row gap-2">
        <img src={umakLogo} class="w-14" alt="">
        <img src={ccisLogo} class="w-14" alt="">
        <img src={itsoLogo} class="w-14" alt="">
    </div>

    <div class="flex flex-row gap-2 justify-center items-center py-2 ">
        <span class="text-sm">Developed by the <strong>College of Computing and Information Sciences</strong></span>
        <span class="text-sm">|</span>
        <span class="text-sm transition-all hover:text-indigo-400 hover:underline" on:click={() => goto("acknowledgements")}>Acknowledgements</span>
    </div>
</div>