<script>
    function goBack() {
        window.history.back();
    }
</script>

<style>
    img {
        max-height: 500px;
    }
</style>

<main>
    <div class="bg-warm-beige">
        <div class="container mx-auto py-8 md:py-16 px-8">
            <h2 class="title text-center underline color-golden-tan text-[32px] xl:text-[48px] text-shadow-[2px_1px_0_black]">
                One Handed Mobile Menu
            </h2>

            <p class="pt-8 text-center">Mobile websites have their menu on the top.<br>Nice to look at but not handy to
                use.<br>Phones
                gotten way to big to use them with one hand.</p>

            <div class="container mx-auto pt-8 pb-4 md:py-8 grid grid-cols-1 md-grid-cols-2 xl-grid-cols-4 gap-8">
                <img src="/one-handed-mobile-menu/one.png" alt="One Handed Mobile Menu 1" loading="lazy"
                     class="rounded-xl mx-auto"/>
                <img src="/one-handed-mobile-menu/two.png" alt="One Handed Mobile Menu 2" loading="lazy"
                     class="rounded-xl mx-auto"/>
                <img src="/one-handed-mobile-menu/three.png" alt="One Handed Mobile Menu 3" loading="lazy"
                     class="rounded-xl mx-auto"/>
                <img src="/one-handed-mobile-menu/four.png" alt="One Handed Mobile Menu 4" loading="lazy"
                     class="rounded-xl mx-auto"/>
            </div>

            <p class="text-center pb-8">I will not pursue this idea further:<br>1. Menu will take up too much space in
                the
                middle of the page. You could hide it but doing a fancy gesture everytime to get the menu will annoy the
                user.<br>2. Learning: The content displayed on a site is more important than the menu which got me
                there.<br><br>Drawn on iPad with Procreate.</p>

            <div class="text-center pt-8">
                <button on:click={goBack} class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">
                    <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="inline">
                        <path d="M15 19L8 12L15 5" stroke="black" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Back to Projects
                </button>
            </div>

        </div>
    </div>
</main>
