<script lang="ts">
    import Menu from '$lib/Menu.svelte';
    import {onMount} from "svelte";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    let darkMode = false;

    onMount(() => {
        // darkMode = localStorage.getItem("darkMode") === "true" || (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("darkMode") === null);
        darkMode = localStorage.getItem("darkMode") === "true";

        updateTheme();
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem("darkMode", String(darkMode));
        updateTheme();
    }

    function updateTheme() {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
</script>

<style>
    hr {
        border-top: 2px solid var(--golden-tan);
        border-bottom: 2px solid var(--golden-tan);
    }
</style>

<header>
    <hr>
    <nav class="container mx-auto py-8 flex justify-between items-center px-4 relative">
        <button
                class="xl:hidden p-2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige rounded-xl px-16 text-black dark:text-white dark:text-shadow-[1px_1px_0_black]"
                on:click={toggleMenu}>
            {menuOpen ? '' : '☰ MENU ☰'}
        </button>

        <div class="hidden xl:flex mx-auto">
            <Menu closeMenu={() => {}}/>
        </div>

        <button on:click={toggleDarkMode} class="absolute right-32">
            {@html darkMode
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`}
        </button>

    </nav>


    {#if menuOpen}
        <div class="mobile-nav-wrapper fixed inset-0 flex flex-col justify-center items-center text-2xl gap-6 transition-all duration-300 z-50">
            <button class="flex justify-center absolute top-9 p-2 left-1/2 -translate-x-1/2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige rounded-xl px-16 whitespace-nowrap dark:text-shadow-[1px_1px_0_black] dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige text-black dark:text-white"
                    on:click={toggleMenu}>☰ CLOSE ☰
            </button>
            <Menu closeMenu={toggleMenu}/>
            <!--            <button on:click={toggleDarkMode}>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>-->
        </div>
    {/if}
    <hr>
</header>
