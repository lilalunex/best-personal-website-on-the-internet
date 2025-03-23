<script lang="ts">
    export let closeMenu: () => void;

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Dev", href: "/dev" },
        { name: "Partner", href: "/partner" },
        { name: "Ad-Space", href: "/adspace" },
        { name: "Peace", href: "/peace" },
    ];
</script>

<ul class="text-center flex flex-col xl:flex-row gap-8 text-2xl">
    {#each menuItems as item}
        <li><a href={item.href} class="text-3xl xl:text-2l text-shadow-[1px_1px_0_white] hover:underline" on:click={closeMenu}>{item.name}</a></li>
    {/each}
</ul>
