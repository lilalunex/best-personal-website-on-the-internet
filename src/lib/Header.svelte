<script lang="ts">
    import {fade} from "svelte/transition";
    import {createEventDispatcher} from "svelte";
    import Menu from '$lib/Menu.svelte';
    import {onMount} from "svelte";
    // import { removePreloadScreen} from "$lib/js/preload-screen";
    // import '$lib/styles/preload-screen.css';

    const dispatch = createEventDispatcher();
    const mainBackgroundCookie = "mainBackground";

    let html: HTMLElement;
    let darkMode = false;
    let menuOpen = false;
    let body: DOMTokenList;
    let showModsDesktop = false;
    let showModsMobile = false;
    let blendMode = 0;
    let mixMode = 0;

    onMount(() => {
        html = document.documentElement;
        body = document.body.classList;
        darkMode = localStorage.getItem("darkMode") === "true";

        updateTheme();
    });

    function toggleMenu() {
        menuOpen = !menuOpen;

        if (menuOpen) {
            body.add('no-scroll');
        } else {
            body.remove('no-scroll');
        }
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem("darkMode", String(darkMode));
        updateTheme();
    }

    function updateTheme() {
        if (darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }

    function toggleMainClass() {
        dispatch('toggleMainClass');
        let temp = localStorage.getItem(mainBackgroundCookie)
        if (temp == "true") {
            localStorage.setItem(mainBackgroundCookie, "false");
        } else {
            localStorage.setItem(mainBackgroundCookie, "true");
        }
    }

    function toggleModsDesktop() {
        showModsDesktop = !showModsDesktop;
    }

    function toggleModsMobile() {
        showModsMobile = !showModsMobile;
    }

    function backgroundBlendMode(direction: number) {
        html.classList.remove("blend" + blendMode);
        blendMode = (blendMode + direction + 16) % 16;
        html.classList.add("blend" + blendMode);
    }

    function backgroundMixMode(direction: number) {
        html.classList.remove("mix" + mixMode);
        mixMode = (mixMode + direction + 7) % 7;
        html.classList.add("mix" + mixMode);
    }

    function resetBackground() {
        html.classList.remove("mix" + mixMode);
        html.classList.remove("blend" + blendMode);
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

    .mods-container-mobile.show {
        height: 150px;
    }
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

        <div class="absolute right-8 hidden xl:flex gap-4">
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
            <button on:click={toggleModsDesktop} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                More Mods
            </button>
        </div>

        {#if showModsDesktop}
            <div class="absolute top-30 right-8" transition:fade>
                <div class="flex gap-4">
                    <div>
                        <p class="text-center">Blend Mode</p>
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
                        <p class="text-center">Mix Mode</p>
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
                        Reset
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
            <button on:click={toggleModsMobile} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
                More Mods
            </button>
        </div>

        <div class="mods-container-mobile text-center pt-4 {showModsMobile ? 'show' : ''}">
            <div class="flex items-center justify-center gap-4">
                <div>
                    <p class="text-center">Blend Mode</p>
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
                    <p class="text-center">Mix Mode</p>
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
                            aria-label="Increase mix mode">
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
                    Reset
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
            <Menu closeMenu={toggleMenu}/>
        </div>
    {/if}
    <hr>
</header>
