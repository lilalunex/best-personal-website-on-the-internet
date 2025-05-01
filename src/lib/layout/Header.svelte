<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Menu from '$lib/layout/Menu.svelte';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const mainBackgroundCookie: string = 'mainBackground';

	let html: HTMLElement;
	let biggerTextMode: boolean = false;
	let body: DOMTokenList;

	onMount(() => {
		html = document.documentElement;
		body = document.body.classList;
		biggerTextMode = localStorage.getItem('biggerTextMode') === 'true';
		if (biggerTextMode) {
			html.classList.add('text-color-ctrl-bigger-text');
		}

		if (screen.width < 1280) {
			toggleMainClass();
		}
	});

	function toggleMainClass() {
		dispatch('toggleMainClass');
		let temp = localStorage.getItem(mainBackgroundCookie);
		if (temp == 'true') {
			localStorage.setItem(mainBackgroundCookie, 'false');
		} else {
			localStorage.setItem(mainBackgroundCookie, 'true');
		}
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
		</div>
	</div>
	<hr>
</header>
