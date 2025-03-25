<script lang="ts">
    import HeaderComponent from "$lib/Header.svelte";
    import FooterComponent from "$lib/Footer.svelte";
    import 'uno.css';
    import '@unocss/reset/tailwind.css';
    import '$lib/styles/global.css';

    const Header = HeaderComponent;
    const Footer = FooterComponent;
</script>

<svelte:component this={Header} />

<!--<main>-->
    <slot />
<!--</main>-->

<svelte:component this={Footer} />
