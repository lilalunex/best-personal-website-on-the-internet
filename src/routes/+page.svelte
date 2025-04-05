<script lang="ts">
    import {onMount} from "svelte";

    let titleText: string = "Relax, Breath & Move.";

    onMount(() => {
        if (Math.random() < 0.0821) {
            titleText = "Lost in Translation";
        }
    });
</script>

<style>
    @import '$lib/styles/breathing-circle.css';

    /*.dev-image {*/
    /*    max-height: 400px;*/
    /*}*/
</style>

<div class="dark" style="display: none;"></div>
<!--    <div class="bg-warm-beige dark:bg-darkreader-warm-beige">-->
<div>
    <div class="container mx-auto py-8 md:py-16 px-8">

        <h1 class="title text-center underline breathing-title dark:darkreader-golden-tan text-[48px] xl:text-[64px] text-shadow-[2px_1px_0_black]">
            {titleText}</h1>
        <div class="breathing-circle-wrapper flex items-center justify-center relative">
            <div class="inner-breathing-circle absolute"></div>
            <div class="inner-breathing-circle absolute"></div>
            <div class="breathing-circle absolute"></div>
            <span id="breathing-text" class="breathing-text absolute pt-21">breathe in</span>
        </div>

        <div class="text-center py-18">
            <h3 class="text-xl font-semibold">
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Contact Me"
                   class="btn relative overflow-hidden border-2 border-deeper-brown rounded-full px-16 py-8 mb-8 bg-body text-deeper-brown transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]">
                    <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Contact me</span>
                </a>
            </h3>
        </div>
    </div>

<!--    <div class="mx-auto py-8 md:py-16 px-8">-->
<!--        <div class="container mx-auto grid grid-cols-1 md-grid-cols-5 md:gap-8">-->
<!--            <div class="col-span-3 flex flex-col justify-center ch-65 ml-auto order-2 md:order-1 pb-6 xl:pb-0">-->
<!--                <h2 class="h2-color-ctrl text-shadow-[2px_2px_0_black] text-center text-[32px] xl:text-[48px]">Hiiiii~~</h2>-->
<!--                <p class="pt-6 text-color-ctrl">-->
<!--                    I’m Lunex, a (web) developer based in Germany. Eager to explore new technologies beyond my current-->
<!--                    expertise, using platforms like <a href="https://www.boot.dev/" target="_blank" class="underline">boot.dev</a>.-->
<!--                    <br><br>-->
<!--                    I have experience as a full-stack developer working with WordPress, TYPO3, and Shopware 6. While-->
<!--                    I’ve worked across the stack, frontend development has always been my strongest area.-->
<!--                </p>-->
<!--                <div class="text-center pt-8">-->
<!--                    <a href="/dev" aria-label="Dev Page"-->
<!--                       class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-6 py-2 text-color-ctrl dark:darkreader-earthy-brown">/dev</a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-span-2 pb-6 xl:pb-0 order-1 md:order-2">-->
<!--                <img src="/dev/dev4.jpeg" alt="Profile of Lunex in Tokyo"-->
<!--                     class="dev-image rounded-xl border-4 border-golden-tan">-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

</div>