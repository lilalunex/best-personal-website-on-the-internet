<script>
    function goBack() {
        window.history.back();
    }
</script>

<div class="dark:bg-darkreader-warm-beige text-color-ctrl dark:text-darkreader-earthy-brown">
    <div class="container mx-auto py-8 md:py-16 px-8">
        <h2 class="title text-center underline breathing-title text-[32px] xl:text-[48px] text-shadow-[2px_1px_0_black]">
            2024 Website
        </h2>

        <p class="pt-8 text-center">
            I couldn't manage to get remix running on the path /2024/.<br>
            So... here are two images:
        </p>

        <div class="container mx-auto pt-8 pb-4 md:py-8 grid grid-cols-1 xl-grid-cols-2 items-center gap-8">
            <a href="/lilalunex_2024/desktop.png"><img src="/lilalunex_2024/desktop.png" alt="One Handed Mobile Menu 1"
                                                       loading="lazy" class="rounded-xl mx-auto"/></a>
            <a href="/lilalunex_2024/mobile.png"><img src="/lilalunex_2024/mobile.png" alt="One Handed Mobile Menu 2"
                                                      loading="lazy" class="rounded-xl mx-auto"/></a>
        </div>

        <div class="text-center pt-8 text-color-ctrl dakr:text-darkreader-earthy-brown">
            <button on:click={goBack} class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">
                <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="inline">
                    <path d="M15 19L8 12L15 5" stroke="#704a3b" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                Back to Projects
            </button>
        </div>

    </div>
</div>
