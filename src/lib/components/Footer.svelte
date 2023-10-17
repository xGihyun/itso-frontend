<script lang="ts">

	import { ccisLogo, itsoLogo, umakLogo } from "$lib/assets/images";

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
    
    <span>Be the <strong>REVOLUTION</strong>. Be the <strong>INNOVATION</strong>. Be the <strong>FUTURE</strong>.</span>
    <div class="flex flex-row gap-2">
        <img src={umakLogo} class="w-14" alt="">
        <img src={ccisLogo} class="w-14" alt="">
        <img src={itsoLogo} class="w-14" alt="">
    </div>

</div>