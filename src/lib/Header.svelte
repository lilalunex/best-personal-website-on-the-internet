<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Menu from '$lib/Menu.svelte';
	import { onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	const mainBackgroundCookie: string = 'mainBackground';

	let html: HTMLElement;
	let darkMode: boolean = false;
	let biggerTextMode: boolean = false;
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

		if (screen.width < 1280) {
			toggleMainClass();
		}
	});

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
</style>

<header>
	<hr>
	<div class="container relative mx-auto pt-4 pb-4 xl:pt-8 xl:pb-8 flex items-center xl:px-4">
		<div class="mx-auto">
			<Menu />
		</div>

		<div class="absolute right-4 hidden xl:flex gap-4">
			<button on:click={toggleMainClass} class="border-earthy-brown border-2 rounded-xl py-2 px-4">
				Toggle BG
			</button>
			<button on:click={() => (showModsDesktop = !showModsDesktop)}
					class="border-earthy-brown border-2 rounded-xl py-2 px-4">
				More Mods
			</button>
		</div>

		{#if showModsDesktop}
			<div class="absolute top-42 right-4 hidden xl:block z-1" transition:fade>
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
	</div>
	<hr>
</header>
