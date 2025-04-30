<script lang="ts">
	import FooterLink from '$lib/FooterLink.svelte';
	import { onMount } from 'svelte';
	import { setGAConsent, resetGoogleAnalytics } from '$lib/js/google-analytics';
	import { breathingCircle } from '$lib/js/breathing-circle';
		import Project from '$lib/Project.svelte';

	// @ts-ignore
	const buildTimestamp: number = __BUILD_TIMESTAMP__;

	let showBackToTop: boolean = false;
	let showUnixTimestamp: boolean = true;
	let timestampHumanReadable: string = new Date(buildTimestamp * 1000).toLocaleString();

	onMount(() => {
		breathingCircle();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleScroll = () => {
		showBackToTop = window.scrollY > 600;
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	function mailContactMe() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex Mail Me';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}

	// function mailFeedback() {
	// 	const user = 'lunex';
	// 	const domain = 'lilalunex.dev';
	// 	const subject = 'Lilalunex Feedback';
	// 	const email = `${user}@${domain}`;
	// 	window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	// }
</script>

<footer>
	<hr>
	<div class="pt-8 text-center">
		<p>This website is better on a desktop.</p>
	</div>
	<div
		class="container mx-auto pt-8 pb-4 md:pb-8 grid grid-cols-1 md-grid-cols-3 xl-grid-cols-3 text-footer-link dark:text-darkreader-earthy-brown">
		<div class="text-center flex flex-col gap-4 pb-4 md:pb-0">
			<div>
				<button on:click={() => mailContactMe()} class="hover:underline">Contact</button>
			</div>
<!--			<div>-->
<!--				<button on:click={() => mailFeedback()} class="hover:underline">Feedback</button>-->
<!--			</div>-->
			<div>
				<a href="/footer/credits"
				   class="hover:underline">Credits</a>
			</div>
		</div>
		<div class="text-center flex flex-col items-center gap-4 pb-4 md:pb-0">
			<FooterLink name="GitHub" link="https://github.com/lilalunex" />
			<FooterLink name="LinkedIn" link="https://www.linkedin.com/in/lilalunex/" />
			<FooterLink name="Instagram" link="https://www.instagram.com/lilalunex" />
			<FooterLink name="YouTube" link="https://www.youtube.com/@lilalunex" />
		</div>
		<div class="text-center flex flex-col justify-end gap-4 pb-4 md:pb-0">
			<div><a href="/footer/legalnotice" class="hover:underline">Legal Notice</a></div>
			<div><a href="/footer/privacy" class="hover:underline">Privacy Policy</a></div>
			<div>
				<button on:click={() => resetGoogleAnalytics()} on:touchstart={() => resetGoogleAnalytics()}
						class="hover:underline">
					Reset Google Analytics choice
				</button>
			</div>
		</div>
	</div>
	<div class="flex justify-center flex-col items-center py-2 text-footer-link dark:text-darkreader-earthy-brown">
		<button on:click={() => showUnixTimestamp = !showUnixTimestamp}>
			<small>build on:
				{#if showUnixTimestamp}{buildTimestamp}{:else}{timestampHumanReadable}{/if}
			</small>
		</button>
	</div>
	<!--    <hr>-->
</footer>

<aside id="kekse" aria-labelledby="cookie-heading"
	   class="border-3 dark:border-darkreader-golden-tan rounded-2xl border-golden-tan dark:bg-darkreader-soft-cream text-footer-link dark:text-darkreader-earthy-brown">
	<div class="p-2 md:p-8">
		<h3 id="cookie-heading" class="text-center">Google Analytics</h3>
		<p class="italic text-center pt-4">Give me your juicy Cookies ...</p>
		<div class="flex justify-between pt-8 md:pt-8 gap-2 md:gap-16">
			<div>
				<button on:click={() => setGAConsent("true")}
						class="bg-bg-button-1 border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-footer-link dark:darkreader-earthy-brown">
					<span
						class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Accept</span>
				</button>
			</div>
			<div>
				<button on:click={() => setGAConsent("false")}
						class="bg-bg-button-1 border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-footer-link dark:darkreader-earthy-brown">
					<span
						class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Decline</span>
				</button>
			</div>
		</div>
	</div>
</aside>

<button
	class="xl:hidden bg-bg-button-1 border-deeper-brown border-2 rounded-xl px-4 py-4 overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-footer-link dark:darkreader-earthy-brown fixed bottom-8 right-8 {showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}"
	on:click={scrollToTop}
	aria-label="Back to Top"
>
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"
		 stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up" viewBox="0 0 24 24">
		<path d="M12 19V6M5 13l7-7 7 7"></path>
	</svg>
</button>
