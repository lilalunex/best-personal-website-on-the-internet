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

<main>
    <div class="container mx-auto py-8 md:py-16 px-8">
        <h1 class="title text-center underline color-golden-tan text-[48px] xl:text-[64px] text-shadow-[2px_1px_0_black]">
            Projects
        </h1>

        <div class="flex items-center justify-center pt-8 gap-8">
            <button class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4" on:click={expandAll}>Expand
                all
            </button>
            <button class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4" on:click={collapseAll}>
                Collapse all
            </button>
        </div>

        <div class="my-8 md:my-16 border-2 border-golden-tan rounded-xl">
            <button class="cursor-pointer text-2xl pl-8 py-4" on:click={() => isOpen.future = !isOpen.future} aria-expanded={isOpen.future}>
                Future {isOpen.future ? "-" : "+"}
            </button>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.future ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4"><span class="fw-bold">[ ]</span> The Coworking Hub</p>
                </div>
            </div>
        </div>

        <div class="my-8 md:my-16 border-2 border-golden-tan rounded-xl">
            <button class="cursor-pointer text-2xl pl-8 py-4" on:click={() => isOpen.present = !isOpen.present}>
                Present {isOpen.present ? "-" : "+"}
            </button>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.present ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} aria-expanded={isOpen.present}>
                <div class="ml-8 pb-8">
                    <p class="pt-4">
                        <span class="fw-bold">[ ]</span> Casino Simulation - Soon online and playable (in a web version)
                        on this website - Started to deepen PHP knowledge - Github
                        Repository:<a href="https://github.com/lilalunex/casino-simulation/"
                                      class="color-earthy-brown ml-4">This Tab</a><a
                            href="https://github.com/lilalunex/casino-simulation/" class="color-earthy-brown ml-4">New
                        Tab</a>
                    </p>
                    <p class="pt-4">
                        <span class="fw-bold">[ ]</span> The Website you currently on (2025 Website)
                    </p>
                </div>
            </div>
        </div>

        <div class="my-8 md:my-16 border-2 border-golden-tan rounded-xl">
            <button class="cursor-pointer text-2xl pl-8 py-4" on:click={() => isOpen.past = !isOpen.past} aria-expanded={isOpen.past}>
                Past {isOpen.past ? "-" : "+"}
            </button>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.past ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4"><a href="/projects/one-handed-mobile-menu"><span class="fw-bold">[X]</span> One
                        handed mobile menu:</a>
                        <a href="https://lilalunex.github.io/" class="color-earthy-brown ml-4">This Tab</a>
                    </p>
                    <p class="pt-4"><span class="fw-bold">[X]</span> 2024 Website - Used learning Remix (React Framework)</p>
                    <p class="pt-4"><span class="fw-bold">[X]</span> 2023 Website - Used learning VueJS -
                        <a href="https://lilalunex.dev/first-vue-website/index.html" class="color-earthy-brown ml-4">This Tab</a>
                        <a href="https://lilalunex.dev/first-vue-website/index.html" target="_blank" class="color-earthy-brown ml-4">New
                            Tab</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="my-8 md:my-16 border-2 border-golden-tan rounded-xl">
            <button class="cursor-pointer text-2xl pl-8 py-4" on:click={() => isOpen.ideas = !isOpen.ideas} aria-expanded={isOpen.ideas}>
                Ideas {isOpen.ideas ? "-" : "+"}
            </button>

            <div class={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen.ideas ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div class="ml-8 pb-8">
                    <p class="pt-4 italic">- Make this page better looking...
                    </p>
                    <p class="pt-4">- GUI for Casino Simulation -> release as actual game
                        (Go directly all in and it with Rust...?)</p>
                    <p class="pt-4">- Socialize MMO - Idea come from to have something to
                        play with your friends at the evenning. A game where you can just hop in without much this and
                        that.</p>
                </div>
            </div>
        </div>
    </div>
</main>
