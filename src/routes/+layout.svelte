<script lang="ts">
	import HeaderComponent from '$lib/layout/Header.svelte';
	import FooterComponent from '$lib/layout/Footer.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import '$lib/styles/global.css';
	import '$lib/styles/breathing-title.css';
	import { onMount } from 'svelte';

	const Header: typeof HeaderComponent = HeaderComponent;
	const Footer: typeof FooterComponent = FooterComponent;
	const mainBackgroundCookie: string = 'mainBackground';

	let mainElement: HTMLElement;
	let mainBackground: string = 'true';

	onMount(() => {
		let temp = localStorage.getItem(mainBackgroundCookie);

		if (temp == null) {
			localStorage.setItem(mainBackgroundCookie, mainBackground);
		} else if (temp == 'false') {
			mainElement.classList.toggle('bg-ctrl');
		}
	});

	function toggleMainClass() {
		if (mainElement) {
			mainElement.classList.toggle('bg-ctrl');
		}
	}
</script>

<svelte:component this={Header} on:toggleMainClass={toggleMainClass} />

<main bind:this={mainElement} class="py-8 md:py-16">
	<slot />
</main>

<svelte:component this={Footer} />
