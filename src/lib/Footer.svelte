<script lang="ts">
    import {onMount} from "svelte";
    import {setGAConsent, resetGoogleAnalytics} from "$lib/js/google-analytics";
    import {breathingCircle} from "$lib/js/breathing-circle";

    let showBackToTop = false;

    // @ts-ignore
    const buildTimestamp = __BUILD_TIMESTAMP__;

    onMount(() => {
        breathingCircle();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    const handleScroll = () => {
        showBackToTop = window.scrollY > 600;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
</script>

<style>
    @import '$lib/styles/cookies-banner.css';
</style>

<footer>
    <hr>
    <div class="container mx-auto pt-8 pb-4 md:pb-8 grid grid-cols-1 md-grid-cols-3 xl-grid-cols-3 text-earthy-brown dark:text-darkreader-earthy-brown">
        <div class="text-center flex flex-col gap-4 pb-4 md:pb-0">
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Mail Me"
                   class="hover:underline">Contact</a>
            </div>
            <div>
                <a href="mailto:&#108;&#117;&#110;&#101;&#120;&#64;&#108;&#105;&#108;&#97;&#108;&#117;&#110;&#101;&#120;&#46;&#100;&#101;&#118;?subject=Lilalunex Feedback"
                   class="hover:underline">Feedback</a>
            </div>
            <div>
                <a href="/footer/credits"
                   class="hover:underline">Credits</a>
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
            <div>
                <button on:click={() => resetGoogleAnalytics()} on:touchstart={() => resetGoogleAnalytics()} class="hover:underline">
                    Reset Google Analytics choice
                </button>
            </div>
            <div><a href="/footer/imprint" class="hover:underline">Imprint</a></div>
            <div><a href="/footer/privacy" class="hover:underline">Privacy Policy</a></div>
        </div>
    </div>
    <div class="flex justify-center items-center py-2 text-earthy-brown dark:text-darkreader-earthy-brown">
        <small>build on: {buildTimestamp}</small>
    </div>
    <hr>
</footer>

<aside id="cookies-banner" aria-labelledby="cookie-heading"
       class="border-3 border-golden-tan dark:border-darkreader-golden-tan rounded-2xl show hide bg-soft-cream dark:bg-darkreader-soft-cream text-earthy-brown dark:text-darkreader-earthy-brown">
    <div class="p-4 md:p-8">
        <h3 id="cookie-heading" class="text-center">Google Analytics</h3>
        <div class="flex justify-between pt-8 md:pt-12 gap-4 md:gap-16">
            <div>
                <button on:click={() => setGAConsent("true")}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-earthy-brown dark:darkreader-earthy-brown">
                    <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Accept</span>
                </button>
            </div>
            <div>
                <button on:click={() => setGAConsent("false")}
                        class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-earthy-brown dark:darkreader-earthy-brown">
                    <span class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Decline</span>
                </button>
            </div>
        </div>
    </div>
</aside>

<button
        class="xl:hidden bg-muted-sand border-deeper-brown border-2 rounded-xl px-4 py-4 overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-earthy-brown dark:darkreader-earthy-brown fixed bottom-8 right-8 {showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}"
        on:click={scrollToTop}
        aria-label="Back to Top"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up" viewBox="0 0 24 24">
        <path d="M12 19V6M5 13l7-7 7 7"></path>
    </svg>
</button>