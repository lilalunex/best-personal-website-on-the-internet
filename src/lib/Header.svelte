<script lang="ts">
    import {fade} from "svelte/transition";
    import {createEventDispatcher} from "svelte";
    import Menu from '$lib/Menu.svelte';
    import {onMount} from "svelte";
    // import { removePreloadScreen} from "$lib/js/preload-screen";
    // import '$lib/styles/preload-screen.css';

    const dispatch = createEventDispatcher();
    const mainBackgroundCookie: string = "mainBackground";

    let html: HTMLElement;
    // let darkMode: boolean = false;
    let biggerTextMode: boolean = false;
    let menuOpen: boolean = false;
    let body: DOMTokenList;
    let showModsDesktop: boolean = false;
    let showModsMobile: boolean = false;
    let showCV: boolean = false;
    let blendMode: number = 0;
    let mixMode: number = 0;

    onMount(() => {
        html = document.documentElement;
        body = document.body.classList;
        // darkMode = localStorage.getItem("darkMode") === "true";
        biggerTextMode = localStorage.getItem("biggerTextMode") === "true";
        if (biggerTextMode) {
            html.classList.add("text-color-ctrl-bigger-text");
        }

        // updateTheme();
    });

    function toggleMenu() {
        menuOpen = !menuOpen;

        if (menuOpen) {
            body.add('no-scroll');
        } else {
            body.remove('no-scroll');
        }
    }

    // function toggleDarkMode() {
    //     darkMode = !darkMode;
    //     localStorage.setItem("darkMode", String(darkMode));
    //     updateTheme();
    // }

    // function updateTheme() {
    //     if (darkMode) {
    //         html.classList.add("dark");
    //     } else {
    //         html.classList.remove("dark");
    //     }
    // }

    function toggleMainClass() {
        dispatch('toggleMainClass');
        let temp = localStorage.getItem(mainBackgroundCookie)
        if (temp == "true") {
            localStorage.setItem(mainBackgroundCookie, "false");
        } else {
            localStorage.setItem(mainBackgroundCookie, "true");
        }
    }

    function backgroundBlendMode(direction: number) {
        html.classList.remove("blend" + blendMode);
        blendMode = (blendMode + direction + 16) % 16;
        html.classList.add("blend" + blendMode);
    }

    function backgroundMixMode(direction: number) {
        html.classList.remove("mix" + mixMode);
        mixMode = (mixMode + direction + 4) % 4;
        html.classList.add("mix" + mixMode);
    }

    function resetBackground() {
        html.classList.remove("mix" + mixMode);
        html.classList.remove("blend" + blendMode);
        blendMode = 0;
        mixMode = 0;
    }

    function toggleBiggerText() {
        if (!biggerTextMode) {
            html.classList.add("text-color-ctrl-bigger-text");
        } else {
            html.classList.remove("text-color-ctrl-bigger-text");
        }
        biggerTextMode = !biggerTextMode;
        localStorage.setItem("biggerTextMode", String(biggerTextMode));
    }
</script>

<style>
    hr {
        border-top: 2px solid var(--golden-tan);
        border-bottom: 2px solid var(--golden-tan);
    }

    .btn-ctrl {
        min-width: 260px;
    }

    .mods-container-mobile {
        height: 0;
        transition: height 0.3s ease-in-out;
        overflow: hidden;
    }

    /*noinspection CssUnusedSymbol */
    .mods-container-mobile.show {
        height: 240px;
    }

    /*img.lang {*/
    /*    max-height: 36px;*/
    /*}*/

    /*img.cv {*/
    /*    max-height: 60px;*/
    /*}*/
</style>

<!--<div id="preload-screen"></div>-->

<header>
    <hr>
    <nav class="container mx-auto pt-8 pb-0 xl:pb-8 flex justify-between items-center px-4 relative">
        <button
                class="btn-ctrl xl:hidden p-2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige rounded-xl px-16 text-black dark:text-white dark:text-shadow-[1px_1px_0_black]"
                on:click={toggleMenu}>
            {menuOpen ? '' : '☰ MENU ☰'}
        </button>

        <div class="hidden xl:flex mx-auto">
            <Menu closeMenu={() => {}}/>
        </div>

<!--        <div class="absolute left-18 hidden xl:flex gap-4">-->
<!--            <div class="flex justify-center items-center">-->
<!--                <button on:click={() => (showCV = !showCV)}>-->
<!--                    <img src="/meta/cv.png" alt="American Language" class="cv">-->
<!--                    <span class="text-3xl absolute top-7 left-6">CV</span>-->
<!--                </button>-->

<!--                {#if showCV}-->
<!--                    <div class="ml-8" transition:fade>-->
<!--                        <a href="/downloads/CV.pdf">-->
<!--                            <img src="/meta/usa.png" alt="American Language" class="ml-2 lang inline">-->
<!--                        </a>-->
<!--                        <a href="/downloads/CV_GER.pdf">-->
<!--                            <img src="/meta/ger.png" alt="German Language" class="ml-2 lang inline">-->
<!--                        </a>-->
<!--                    </div>-->
<!--                {/if}-->

<!--            </div>-->
<!--        </div>-->

        <div class="absolute right-4 hidden xl:flex gap-4">
            <!--            <button on:click={toggleDarkMode}>-->
            <!--                {@html darkMode-->
            <!--                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
            <!--  <circle cx="12" cy="12" r="5"/>-->
            <!--  <line x1="12" y1="1" x2="12" y2="3"/>-->
            <!--  <line x1="12" y1="21" x2="12" y2="23"/>-->
            <!--  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>-->
            <!--  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>-->
            <!--  <line x1="1" y1="12" x2="3" y2="12"/>-->
            <!--  <line x1="21" y1="12" x2="23" y2="12"/>-->
            <!--  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>-->
            <!--  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>-->
            <!--</svg>`-->
            <!--                    : `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
            <!--  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>-->
            <!--</svg>`}-->
            <!--            </button>-->
            <button on:click={toggleMainClass} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                Toggle BG
            </button>
            <button on:click={() => (showModsDesktop = !showModsDesktop)}
                    class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                More Mods
            </button>
        </div>

        {#if showModsDesktop}
            <div class="absolute top-30 right-4 hidden xl:block z-1" transition:fade>
                <div class="flex gap-4">
                    <div>
                        <p class="text-center">Blend Mode ({blendMode})</p>
                        <button on:click={() => backgroundBlendMode(-1)}
                                class="border-earthy-brown border-2 rounded-xl py-2 px-4"
                                aria-label="Decrease blend mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 18l-6-6 6-6"></path>
                            </svg>
                        </button>
                        <button on:click={() => backgroundBlendMode(1)}
                                class="border-earthy-brown border-2 rounded-xl py-2 px-4"
                                aria-label="Increase blend mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 6l6 6-6 6"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p class="text-center">Mix Mode ({mixMode})</p>
                        <button on:click={() => backgroundMixMode(-1)}
                                class="border-earthy-brown border-2 rounded-xl py-2 px-4"
                                aria-label="Decrease mix mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 18l-6-6 6-6"></path>
                            </svg>
                        </button>
                        <button on:click={() => backgroundMixMode(1)}
                                class="border-earthy-brown border-2 rounded-xl py-2 px-4"
                                aria-label="Decrease mix mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 6l6 6-6 6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex justify-center pt-4">
                    <button on:click={resetBackground}
                            class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                        Reset Blend & Mix Mode
                    </button>
                </div>
                <div class="flex justify-center pt-4">
                    <button on:click={toggleBiggerText} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                        <span class="">Toggle Font Weight</span>
                    </button>
                </div>
            </div>
        {/if}

    </nav>
    <div class="py-8 xl:hidden">
        <!--            <button on:click={toggleDarkMode}>-->
        <!--                {@html darkMode-->
        <!--                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
        <!--      <circle cx="12" cy="12" r="5"/>-->
        <!--      <line x1="12" y1="1" x2="12" y2="3"/>-->
        <!--      <line x1="12" y1="21" x2="12" y2="23"/>-->
        <!--      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>-->
        <!--      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>-->
        <!--      <line x1="1" y1="12" x2="3" y2="12"/>-->
        <!--      <line x1="21" y1="12" x2="23" y2="12"/>-->
        <!--      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>-->
        <!--      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>-->
        <!--    </svg>`-->
        <!--                    : `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
        <!--      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>-->
        <!--    </svg>`}-->
        <!--            </button>-->
        <div class="flex gap-4 justify-center items-center">
            <button on:click={toggleMainClass} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                Toggle BG
            </button>
            <button on:click={() => (showModsMobile = !showModsMobile)}
                    class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                More Mods
            </button>
        </div>

        <div class="xl:hidden mods-container-mobile text-center pt-4 {showModsMobile ? 'show' : ''}">
            <div class="flex items-center justify-center gap-4 w-full">
                <div class="flex flex-col items-center">
                    <p class="text-center">Blend Mode ({blendMode})</p>
                    <div class="flex flex-row gap-2">
                        <button on:click={() => backgroundBlendMode(-1)}
                                class="border-earthy-brown border-2 rounded-xl py-2 w-12 h-12 flex justify-center items-center"
                                aria-label="Decrease blend mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                 class="w-6 h-6">
                                <path d="M14 18l-6-6 6-6"></path>
                            </svg>
                        </button>
                        <button on:click={() => backgroundBlendMode(1)}
                                class="border-earthy-brown border-2 rounded-xl p-2 w-12 h-12 flex justify-center items-center"
                                aria-label="Decrease blend mode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                 class="w-6 h-6">
                                <path d="M10 6l6 6-6 6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!--                <div class="flex flex-col items-center">-->
                <!--                    <p class="text-center">Mix Mode</p>-->
                <!--                    <div class="flex flex-row gap-2">-->
                <!--                        <button on:click={() => backgroundMixMode(-1)}-->
                <!--                                class="border-earthy-brown border-2 rounded-xl p-2 w-12 h-12 flex justify-center items-center"-->
                <!--                                aria-label="Decrease mix mode">-->
                <!--                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"-->
                <!--                                 fill="none"-->
                <!--                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"-->
                <!--                                 class="w-6 h-6">-->
                <!--                                <path d="M14 18l-6-6 6-6"></path>-->
                <!--                            </svg>-->
                <!--                        </button>-->
                <!--                        <button on:click={() => backgroundMixMode(1)}-->
                <!--                                class="border-earthy-brown border-2 rounded-xl p-2 w-12 h-12 flex justify-center items-center"-->
                <!--                                aria-label="Increase mix mode">-->
                <!--                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"-->
                <!--                                 fill="none"-->
                <!--                                 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"-->
                <!--                                 class="w-6 h-6">-->
                <!--                                <path d="M10 6l6 6-6 6"></path>-->
                <!--                            </svg>-->
                <!--                        </button>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
            <div class="flex justify-center pt-4">
                <button on:click={resetBackground} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                    Reset Blend & Mix Mode
                </button>
            </div>
            <div class="flex justify-center pt-4">
                <button on:click={toggleBiggerText} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                    <span class="">Toggle Font Weight</span>
                </button>
            </div>
        </div>
    </div>

    {#if menuOpen}
        <div class="mobile-nav-wrapper fixed inset-0 flex flex-col justify-center items-center text-2xl gap-6 transition-all duration-300 z-50">
            <button class="btn-ctrl flex justify-center absolute top-9 p-2 left-1/2 -translate-x-1/2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige rounded-xl px-16 whitespace-nowrap dark:text-shadow-[1px_1px_0_black] dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige text-black dark:text-white"
                    on:click={toggleMenu}>☰ CLOSE ☰
            </button>
            <div class="absolute top-30">
<!--                <div class="flex justify-center items-center">-->
<!--                    <button on:click={() => (showCV = !showCV)}>-->
<!--                        <img src="/meta/cv.png" alt="American Language" class="cv">-->
<!--                        <span class="text-3xl absolute top-7 left-6">CV</span>-->
<!--                    </button>-->

<!--                    {#if showCV}-->
<!--                        <div class="ml-8" transition:fade>-->
<!--                            <a href="/downloads/CV.pdf">-->
<!--                                <img src="/meta/usa.png" alt="American Language" class="ml-2 lang inline">-->
<!--                            </a>-->
<!--                            <a href="/downloads/CV_GER.pdf">-->
<!--                                <img src="/meta/ger.png" alt="German Language" class="ml-2 lang inline">-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    {/if}-->

<!--                </div>-->
                <!--            <button on:click={toggleDarkMode}>-->
                <!--                {@html darkMode-->
                <!--                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
                <!--  <circle cx="12" cy="12" r="5"/>-->
                <!--  <line x1="12" y1="1" x2="12" y2="3"/>-->
                <!--  <line x1="12" y1="21" x2="12" y2="23"/>-->
                <!--  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>-->
                <!--  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>-->
                <!--  <line x1="1" y1="12" x2="3" y2="12"/>-->
                <!--  <line x1="21" y1="12" x2="23" y2="12"/>-->
                <!--  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>-->
                <!--  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>-->
                <!--</svg>`-->
                <!--                    : `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
                <!--  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>-->
                <!--</svg>`}-->
                <!--            </button>-->
            </div>
            <div class="pt-24">
                <Menu closeMenu={toggleMenu}/>
            </div>
        </div>
    {/if}
    <hr>
</header>
