<script lang="ts">
    let isOpen = {
        future: false,
        present: false,
        past: false,
        ideas: false
    };

    const expandAll = () => {
        isOpen = {
            future: true,
            present: true,
            past: true,
            ideas: true
        };
    };

    const collapseAll = () => {
        isOpen = {
            future: false,
            present: false,
            past: false,
            ideas: false
        };
    };
</script>

<!--    <div class="bg-warm-beige dark:bg-darkreader-warm-beige">-->
<div>
    <div class="container mx-auto py-8 md:py-16 px-8">
        <h1 class="title text-center underline breathing-title text-[48px] xl:text-[64px] text-shadow-[2px_1px_0_black]">
            Projects
        </h1>

        <div class="flex items-center justify-center pt-8 gap-8">
            <button class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] dark:darkreader-earthy-brown"
                    on:click={expandAll}>
                <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-button-hover-underline-1 before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Expand all</span>
            </button>
            <button class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] dark:darkreader-earthy-brown"
                    on:click={collapseAll}>
                <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-button-hover-underline-1 before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Collapse all</span>
            </button>
        </div>

        <div class="my-8 md:my-16 border-2 border-button-ctrl-2 rounded-xl text-color-ctrl dark:text-darkreader-earthy-brown">
            <h2>
                <button class="relative cursor-pointer text-2xl pl-8 py-4 w-full text-left flex justify-between items-center"
                        on:click={() => isOpen.future = !isOpen.future}>
                    Future
                    <span class={`absolute right-4 bottom-3.5 text-5xl transition-transform duration-300 transform ${isOpen.future ? 'rotate-45' : ''}`}>+</span>
                </button>
            </h2>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.future ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4"><span class="fw-bold">[ ]</span> The Coworking Hub</p>
                    <p class="pt-4"><span class="fw-bold">[ ]</span> <span class="italic">Make this page better looking...</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="my-8 md:my-16 border-2 border-button-ctrl-2 rounded-xl text-color-ctrl dark:text-darkreader-earthy-brown">
            <h2>
                <button class="relative cursor-pointer text-2xl pl-8 py-4 w-full text-left flex justify-between items-center"
                        on:click={() => isOpen.present = !isOpen.present}>
                    Present<span
                        class={`absolute right-4 bottom-3.5 text-5xl transition-transform duration-300 transform ${isOpen.present ? 'rotate-45' : ''}`}>+</span>
                </button>
            </h2>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.present ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
                 aria-expanded={isOpen.present}>
                <div class="ml-8 pb-8">
                    <p class="pt-4">
                        <span class="fw-bold">[ ]</span> Casino Simulation - <a
                            href="https://lilalunex.dev/casino-simulation/index.php"
                            class="color-project-link-ctrl dark:color-darkreader-earthy-brown hover:underline underline">Playable
                        here</a> - Github
                        Repository:<a href="https://github.com/lilalunex/casino-simulation/"
                                      class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">This
                        Tab</a><a
                            href="https://github.com/lilalunex/casino-simulation/"
                            class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">New
                        Tab</a>
                    </p>
                    <p class="pt-4">
                        <span class="fw-bold">[ ]</span> This website you currently on - Github
                        Repository:<a href="https://github.com/lilalunex/best-personal-website-on-the-internet/"
                                      class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">This
                        Tab</a><a
                            href="https://github.com/lilalunex/best-personal-website-on-the-internet/"
                            class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">New
                        Tab</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="my-8 md:my-16 border-2 border-button-ctrl-2 rounded-xl text-color-ctrl dark:text-darkreader-earthy-brown">
            <h2>
                <button class="relative cursor-pointer text-2xl pl-8 py-4 w-full text-left flex justify-between items-center"
                        on:click={() => isOpen.past = !isOpen.past}>
                    Past
                    <span class={`absolute right-4 bottom-3.5 text-5xl transition-transform duration-300 transform ${isOpen.past ? 'rotate-45' : ''}`}>+</span>
                </button>
            </h2>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.past ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4"><span class="fw-bold">[X]</span> Idea: One handed mobile menu:
                        <a href="/projects/one-handed-mobile-menu"
                           class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">Show
                            me</a>
                    </p>
                    <p class="pt-4"><span class="fw-bold">[X]</span> 2024 Website - Used learning Remix (React
                        Framework) -
                        <a href="/projects/lilalunex_2024"
                           class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">Show
                            me</a>
                    </p>
                    <p class="pt-4"><span class="fw-bold">[X]</span> 2023 Website - Used learning VueJS -
                        <a href="https://lilalunex.dev/first-vue-website/index.html"
                           class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">This
                            Tab</a>
                        <a href="https://lilalunex.dev/first-vue-website/index.html" target="_blank"
                           class="color-project-link-ctrl dark:color-darkreader-earthy-brown ml-4 hover:underline underline">New
                            Tab</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="my-8 border-2 border-button-ctrl-2 rounded-xl text-color-ctrl dark:text-darkreader-earthy-brown">
            <h2>
                <button class="relative cursor-pointer text-2xl pl-8 py-4 w-full text-left flex justify-between items-center"
                        on:click={() => isOpen.ideas = !isOpen.ideas}>
                    Ideas
                    <span class={`absolute right-4 bottom-3.5 text-5xl transition-transform duration-300 transform ${isOpen.ideas ? 'rotate-45' : ''}`}>+</span>
                </button>
            </h2>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.ideas ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4">- GUI for Casino Simulation -> release as actual game
                        (Go directly all in and it with Rust...?)</p>
                    <p class="pt-4">- Socialize Browser MMO - Idea come from to have something to
                        play with your friends at the evenning. A game where you can just hop in without much this
                        and
                        that.</p>
                    <p class="pt-4">- Nexx <span class="italic">(Psst... super secret)</span></p>
                    <p class="pt-4">- Image Repeater</p>
                </div>
            </div>
        </div>
    </div>
</div>
