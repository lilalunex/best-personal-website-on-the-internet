<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Menu from '$lib/Menu.svelte';
	import { onMount } from 'svelte';
	// import { removePreloadScreen} from "$lib/js/preload-screen";
	// import '$lib/styles/preload-screen.css';
	// import SunIcon from '$lib/icons/SunIcon.svelte';
	// import MoonIcon from '$lib/icons/MoonIcon.svelte';

	const dispatch = createEventDispatcher();
	const mainBackgroundCookie: string = 'mainBackground';

	let html: HTMLElement;
	let darkMode: boolean = false;
	let biggerTextMode: boolean = false;
	let menuOpen: boolean = false;
	let body: DOMTokenList;
	let showModsDesktop: boolean = false;
	let blendMode: number = 0;
	let mixMode: number = 0;

	onMount(() => {
		html = document.documentElement;
		body = document.body.classList;
		darkMode = localStorage.getItem('darkMode') === 'true';
		biggerTextMode = localStorage.getItem('biggerTextMode') === 'true';
		if (biggerTextMode) {
			html.classList.add('text-color-ctrl-bigger-text');
		}

		updateTheme();
	});

	function toggleMenu() {
		menuOpen = !menuOpen;

		if (menuOpen) {
			body.add('no-scroll');
		} else {
			body.remove('no-scroll');
		}
	}

	// function toggleDarkMode() {
	// 	darkMode = !darkMode;
	// 	localStorage.setItem('darkMode', String(darkMode));
	// 	updateTheme();
	// }

	function updateTheme() {
		if (darkMode) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}

	function toggleMainClass() {
		dispatch('toggleMainClass');
		let temp = localStorage.getItem(mainBackgroundCookie);
		if (temp == 'true') {
			localStorage.setItem(mainBackgroundCookie, 'false');
		} else {
			localStorage.setItem(mainBackgroundCookie, 'true');
		}
	}

	function backgroundBlendMode(direction: number) {
		html.classList.remove('blend' + blendMode);
		blendMode = (blendMode + direction + 16) % 16;
		html.classList.add('blend' + blendMode);
	}

	function backgroundMixMode(direction: number) {
		html.classList.remove('mix' + mixMode);
		mixMode = (mixMode + direction + 4) % 4;
		html.classList.add('mix' + mixMode);
	}

	function resetBackground() {
		html.classList.remove('mix' + mixMode);
		html.classList.remove('blend' + blendMode);
		blendMode = 0;
		mixMode = 0;
	}

	function toggleBiggerText() {
		if (!biggerTextMode) {
			html.classList.add('text-color-ctrl-bigger-text');
		} else {
			html.classList.remove('text-color-ctrl-bigger-text');
		}
		biggerTextMode = !biggerTextMode;
		localStorage.setItem('biggerTextMode', String(biggerTextMode));
	}
</script>

<style>
    hr {
        border-top: 2px solid var(--golden-tan);
        border-bottom: 2px solid var(--golden-tan);
    }

    .btn-ctrl {
        min-width: 200px;
    }

    /*noinspection CssUnusedSymbol */
    .mods-container-mobile.show {
        height: 240px;
    }
</style>

<!--<div id="preload-screen"></div>-->

<header>
	<hr>
	<nav class="container mx-auto pt-4 pb-4 xl:pt-8 xl:pb-8 flex justify-between items-center xl:px-4 relative">

		<!-- mobile -->
		<div class="xl:hidden mx-auto">
<!--			<button on:click={toggleMainClass} class="border-deeper-brown border-2 rounded-xl py-2 px-4 top-4 left-2 absolute text-10px xl:text-2xl">-->
<!--				Toggle<br/>BG-->
<!--			</button>-->
			<button
				class="btn-ctrl xl:hidden py-2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige rounded-xl text-black dark:text-white dark:text-shadow-[1px_1px_0_black]"
				on:click={toggleMenu}>
				{menuOpen ? '' : 'MENU'}
			</button>
<!--			<button on:click={toggleDarkMode} class="border-deeper-brown border-2 rounded-xl py-2 px-4 text-2xl">-->
<!--				{#if darkMode}-->
<!--					<SunIcon size={26} />-->
<!--				{:else}-->
<!--					<MoonIcon width={26} height={26} />-->
<!--				{/if}-->
<!--			</button>-->
		</div>

		<!-- desktop -->
		<div class="hidden xl:flex mx-auto">
			<Menu />
		</div>

		<div class="absolute right-4 hidden xl:flex gap-4">
<!--			<button on:click={toggleDarkMode}>-->
<!--				{#if darkMode}-->
<!--					<SunIcon size={32} />-->
<!--				{:else}-->
<!--					<MoonIcon size={32} />-->
<!--				{/if}-->
<!--			</button>-->
			<button on:click={toggleMainClass} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
				Toggle BG
			</button>
			<button on:click={() => (showModsDesktop = !showModsDesktop)}
					class="border-earthy-brown border-2 rounded-xl py-2 px-4">
				More Mods
			</button>
		</div>

		{#if showModsDesktop}
			<div class="absolute top-30 right-4 hidden xl:block z-1" transition:fade>
				<div class="flex gap-4">
					<div>
						<p class="text-center">Blend Mode ({blendMode})</p>
						<button on:click={() => backgroundBlendMode(-1)}
								class="border-earthy-brown border-2 rounded-xl py-2 px-4"
								aria-label="Decrease blend mode">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
								 fill="none"
								 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 18l-6-6 6-6"></path>
							</svg>
						</button>
						<button on:click={() => backgroundBlendMode(1)}
								class="border-earthy-brown border-2 rounded-xl py-2 px-4"
								aria-label="Increase blend mode">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
								 fill="none"
								 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<path d="M10 6l6 6-6 6"></path>
							</svg>
						</button>
					</div>
					<div>
						<p class="text-center">Mix Mode ({mixMode})</p>
						<button on:click={() => backgroundMixMode(-1)}
								class="border-earthy-brown border-2 rounded-xl py-2 px-4"
								aria-label="Decrease mix mode">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
								 fill="none"
								 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 18l-6-6 6-6"></path>
							</svg>
						</button>
						<button on:click={() => backgroundMixMode(1)}
								class="border-earthy-brown border-2 rounded-xl py-2 px-4"
								aria-label="Decrease mix mode">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 16 16"
								 fill="none"
								 stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<path d="M10 6l6 6-6 6"></path>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex justify-center pt-4">
					<button on:click={resetBackground}
							class="border-earthy-brown border-2 rounded-xl py-2 px-4">
						Reset Blend & Mix Mode
					</button>
				</div>
				<div class="flex justify-center pt-4">
					<button on:click={toggleBiggerText} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
						<span class="">Toggle Font Weight</span>
					</button>
				</div>
			</div>
		{/if}

	</nav>

	{#if menuOpen}
		<div
			class="mobile-nav-wrapper fixed inset-0 flex flex-col justify-center items-center text-2xl gap-6 transition-all duration-300 z-50">
			<button
				class="top-5 left-1/2 -translate-x-1/2 absolute btn-ctrl xl:hidden py-2 text-2xl mx-auto text-shadow-[1px_1px_0_white] border-2 border-golden-tan bg-warm-beige dark:border-darkreader-golden-tan dark:bg-darkreader-warm-beige rounded-xl text-black dark:text-white dark:text-shadow-[1px_1px_0_black]"
				on:click={toggleMenu}>CLOSE
			</button>
			<!--			<div class="absolute top-30">-->
			<!--				<button on:click={toggleDarkMode}>-->
			<!--					{#if darkMode}-->
			<!--						<SunIcon size={32} />-->
			<!--					{:else}-->
			<!--						<MoonIcon size={32} />-->
			<!--					{/if}-->
			<!--				</button>-->
			<!--			</div>-->

			<!--			<div class="pt-24">-->

			<div>
				<Menu closeMenu={toggleMenu} />
			</div>
		</div>
	{/if}
	<hr>
</header>
