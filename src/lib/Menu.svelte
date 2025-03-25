<script lang="ts">
    export let closeMenu: () => void;

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Dev", href: "/dev" },
        { name: "Partners", href: "/partners" },
        { name: "Ad-Space", href: "/ad-space" }
    ];
</script>

<ul class="text-center flex flex-col xl:flex-row gap-8 text-2xl">
    {#each menuItems as item}
        <li>
            <a href={item.href}
               class="relative text-3xl xl:text-2xl text-shadow-[1px_1px_0_white]
        dark:text-white dark:text-shadow-[1px_1px_0_black]
        transition-all duration-300 ease-in-out
        before:content-[''] before:absolute before:left-1/2 before:bottom-0
        before:w-0 before:h-[2px] before:bg-black before:opacity-0
        before:transition-all before:duration-300 before:origin-bottom
        hover:before:left-0 hover:before:w-full hover:before:opacity-100
        dark:before:bg-white dark:hover:before:bg-white"
               on:click={closeMenu}>
                {item.name}
            </a>
        </li>


    {/each}
</ul>
