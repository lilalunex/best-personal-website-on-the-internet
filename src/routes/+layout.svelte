<script lang="ts">
    import HeaderComponent from "$lib/Header.svelte";
    import FooterComponent from "$lib/Footer.svelte";
    import 'uno.css';
    import '@unocss/reset/tailwind.css';

    const Header = HeaderComponent;
    const Footer = FooterComponent;
</script>

<svelte:head>
    <link rel="stylesheet" href="/src/lib/styles/global.css" />
</svelte:head>

<svelte:component this={Header} />

<main>
    <slot />
</main>

<svelte:component this={Footer} />
