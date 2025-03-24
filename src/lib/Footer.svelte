<script lang="ts">
    import {onMount} from "svelte";
    import {setGAConsent, resetGoogleAnalytics} from "$lib/js/google-analytics";
    import {breathingCircle} from "$lib/js/breathing-circle";

    const buildTimestamp = __BUILD_TIMESTAMP__;

    onMount(() => {
        breathingCircle();
    });
</script>

<style>
    @import '$lib/styles/cookies-banner.css';
</style>

<footer>
    <hr>
    <div class="container mx-auto pt-8 pb-4 md:pb-8 grid grid-cols-1 md-grid-cols-4 xl-grid-cols-4 text-2xl md:text-lg">
        <div class="text-center flex flex-col gap-4 pb-4 md:pb-0">
            <div>
                <button on:click={() => resetGoogleAnalytics()} class="hover:underline">Reset Google Analytics choice
                </button>
            </div>
        </div>
        <div class="text-center flex flex-col gap-4 pb-4 md:pb-0">
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Mail Me"
                   class="hover:underline">Contact</a>
            </div>
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Feedback"
                   class="hover:underline">Feedback</a>
            </div>
        </div>
        <div class="text-center flex flex-col items-center gap-4 pb-4 md:pb-0">
            <div class="flex">
                <a href="https://github.com/lilalunex" aria-label="GitHub Profile" class="hover:underline">GitHub</a>
                <a href="https://github.com/lilalunex" target="_blank" aria-label="Open GitHub in new tab">
                    <svg class="ml-4 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 24 20"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M15 3h6v6"></path>
                        <path d="M21 3L10 14"></path>
                        <path d="M5 5v14"></path>
                        <path d="M5 19h14"></path>
                    </svg>
                </a>
            </div>
            <div class="flex">
                <a href="https://www.linkedin.com/in/lilalunex/" aria-label="LinkedIn Profile" class="hover:underline">LinkedIn</a>
                <a href="https://www.linkedin.com/in/lilalunex/" target="_blank" aria-label="Open LinkedIn in new tab">
                    <svg class="ml-4 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 24 20"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M15 3h6v6"></path>
                        <path d="M21 3L10 14"></path>
                        <path d="M5 5v14"></path>
                        <path d="M5 19h14"></path>
                    </svg>
                </a>
            </div>
            <div class="flex">
                <a href="https://www.instagram.com/lilalunex" aria-label="Instagram Profile" class="hover:underline">Instagram</a>
                <a href="https://www.instagram.com/lilalunex" target="_blank" aria-label="Open Instagram in new tab">
                    <svg class="ml-4 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 24 20"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M15 3h6v6"></path>
                        <path d="M21 3L10 14"></path>
                        <path d="M5 5v14"></path>
                        <path d="M5 19h14"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="text-center flex flex-col justify-end gap-4 pb-4 md:pb-0">
            <div><a href="/footer/imprint" class="hover:underline">Imprint</a></div>
            <div><a href="/footer/privacy" class="hover:underline">Privacy Policy</a></div>
        </div>
    </div>
    <div class="flex justify-center items-center py-2">
        <small>build on: {buildTimestamp}</small>
    </div>
    <hr>
</footer>

<aside id="cookies-banner" aria-labelledby="cookie-heading" class="border-3 border-golden-tan rounded-2xl show hide">
    <div class="p-4 md:p-8">
        <h3 id="cookie-heading" class="text-center text-3xl">Google Analytics</h3>
        <div class="flex justify-between pt-8 md:pt-12 gap-4 md:gap-16">
            <div>
                <button on:click={() => setGAConsent("true")}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">Accept
                </button>
            </div>
            <div>
                <button on:click={() => setGAConsent("false")}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">Decline
                </button>
            </div>
        </div>
    </div>
</aside>