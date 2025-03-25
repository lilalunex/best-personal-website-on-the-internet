<script>
    import {onMount} from "svelte";

    let titleText = "Relax, Breath & Move.";

    onMount(() => {
        if (Math.random() < 0.0821) {
            titleText = "Lost in Translation";
        }
    });
</script>

<style>
    @import '$lib/styles/breathing-circle.css';
</style>

<div class="dark" style="display: none;"></div>
<!--    <div class="bg-warm-beige dark:bg-darkreader-warm-beige">-->
<div class="">
    <div class="container mx-auto py-8 md:py-16 px-8">
        <h1 class="title text-center underline breathing-title dark:darkreader-golden-tan text-[48px] xl:text-[64px] text-shadow-[2px_1px_0_black]">
            {titleText}</h1>
        <div class="breathing-circle-wrapper flex items-center justify-center relative">
            <div class="inner-breathing-circle absolute"></div>
            <div class="inner-breathing-circle absolute"></div>
            <div class="breathing-circle absolute"></div>
            <span id="breathing-text" class="breathing-text absolute pt-21">breathe in</span>
        </div>
        <div class="text-center py-12">
            <h3 class="text-xl font-semibold">
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Contact Me"
                   class="btn relative overflow-hidden border-2 border-deeper-brown rounded-full px-16 py-8 mb-8 bg-body text-deeper-brown transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]">
                    <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Contact me</span>
                </a>
            </h3>
        </div>
    </div>
</div>