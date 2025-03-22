<script lang="ts">
    import Menu from '$lib/Menu.svelte';

    let menuOpen = false;

    function toggleMenu() {
        console.log('hi');
        menuOpen = !menuOpen;
    }
</script>

<header>
    <hr>
    <nav class="container mx-auto py-8 flex justify-between items-center px-4">
        <button class="xl:hidden p-2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige rounded-xl px-16"
                on:click={toggleMenu}>
            {menuOpen ? '' : '☰ MENU ☰'}
        </button>

        <div class="hidden xl:flex mx-auto">
            <Menu closeMenu={() => {}}/>
        </div>
    </nav>

    {#if menuOpen}
        <div class="mobile-nav-wrapper fixed inset-0 flex flex-col justify-center items-center text-2xl gap-6 transition-all duration-300 z-50">
            <button class="flex justify-center absolute top-9 p-2 left-1/2 -translate-x-1/2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige rounded-xl px-16 whitespace-nowrap"
                    on:click={toggleMenu}>☰ CLOSE ☰</button>
            <Menu closeMenu={toggleMenu}/>
        </div>
    {/if}
    <hr>
</header>
