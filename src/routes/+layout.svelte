<script lang="ts">
    import HeaderComponent from "$lib/Header.svelte";
    import FooterComponent from "$lib/Footer.svelte";
    import 'uno.css';
    import '@unocss/reset/tailwind.css';
    import '$lib/styles/global.css';
    import '$lib/styles/breathing-title.css';
    import {onMount} from "svelte";

    const Header = HeaderComponent;
    const Footer = FooterComponent;
    const mainBackgroundCookie = "mainBackground";

    let mainElement: HTMLElement;
    let mainBackground = "true";

    onMount(() => {
        let temp = localStorage.getItem(mainBackgroundCookie);

        if (temp == null) {
            localStorage.setItem(mainBackgroundCookie, mainBackground)
        } else if (temp == "false") {
            mainElement.classList.toggle('bg-ctrl');
        }
    });

    function toggleMainClass() {
        if (mainElement) {
            mainElement.classList.toggle('bg-ctrl');
        }
    }
</script>

<svelte:component this={Header} on:toggleMainClass={toggleMainClass}/>

<main bind:this={mainElement}>
    <slot/>
</main>

<svelte:component this={Footer}/>
