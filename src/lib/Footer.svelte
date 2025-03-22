<script lang="ts">
    import {onMount} from "svelte";
    import {setGAConsent, resetGoogleAnalytics} from "$lib/js/google-analytics";
    import {breathingCircle} from "$lib/js/breathing-circle";

    onMount(() => {
        breathingCircle();
    });
</script>

<style>
    @import '$lib/styles/cookies-banner.css';
</style>

<footer>
    <hr>
    <div class="container mx-auto py-8 grid grid-cols-1 md-grid-cols-4 xl-grid-cols-4">
        <div class="text-center flex flex-col gap-4">
            <div>
                <button on:click={() => resetGoogleAnalytics()}>Reset Google Analytics choice</button>
            </div>
        </div>
        <div class="text-center flex flex-col gap-4">
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Mail Me">Contact</a>
            </div>
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Feedback">Feedback</a>
            </div>
        </div>
        <div class="text-center flex flex-col gap-4 items-center">
            <div class="flex">
                <a href="https://github.com/lilalunex" aria-label="GitHub Profile">Github</a>
                <a href="https://github.com/lilalunex" target="_blank" aria-label="Open GitHub in new tab">
                    <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -4 24 24"
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
                <a href="https://www.linkedin.com/in/lilalunex/" aria-label="LinkedIn Profile">LinkedIn</a>
                <a href="https://www.linkedin.com/in/lilalunex/" target="_blank" aria-label="Open LinkedIn in new tab">
                    <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -4 24 24"
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
                <a href="https://www.instagram.com/lilalunex" aria-label="Instagram Profile">Instagram</a>
                <a href="https://www.instagram.com/lilalunex" target="_blank" aria-label="Open Instagram in new tab">
                    <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -4 24 24"
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
        <div class="text-center flex flex-col gap-4 justify-end">
            <div>Imprint</div>
            <div>Privacy Policy</div>
        </div>
    </div>
    <hr>
</footer>

<aside id="cookies-banner" aria-labelledby="cookie-heading" class="border-3 border-golden-tan rounded-2xl show hide">
    <div class="p-8">
        <h3 id="cookie-heading" class="text-center">Google Analytics</h3>
        <div class="flex justify-between pt-12 gap-16">
            <div>
                <button on:click={() => setGAConsent(true)}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">Accept
                </button>
            </div>
            <div>
                <button on:click={() => setGAConsent(false)}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">Decline
                </button>
            </div>
        </div>
    </div>
</aside>