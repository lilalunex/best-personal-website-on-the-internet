<script lang="ts">
    import HeaderComponent from "$lib/Header.svelte";
    import FooterComponent from "$lib/Footer.svelte";
    import 'uno.css';
    import '@unocss/reset/tailwind.css';
    import '$lib/styles/global.css';
    import '$lib/styles/breathing-title.css';
    import { setContext } from 'svelte';

    const Header = HeaderComponent;
    const Footer = FooterComponent;

    let mainElement: HTMLElement;

    function toggleMainClass() {
        mainElement.classList.toggle('bg-ctrl');
    }

    setContext('mainElement', mainElement);
</script>

<svelte:component this={Header} on:toggleMainClass={toggleMainClass} />

<main bind:this={mainElement}>
    <slot />
</main>

<svelte:component this={Footer} />
