<script lang="ts">
	export let closeMenu: () => void = () => {
	};

	const menuItems = [
		{ img: '/menu/home.png', name: 'Home', href: '/' },
		{ img: '/menu/projects.png', name: 'Projects', href: '/projects' },
		{ img: '/menu/dev.png', name: 'Dev', href: '/dev' },
		{ img: '/menu/partners.png', name: 'Partners', href: '/partners' },
		{ img: '/menu/adspace.png', name: 'Ad-Space', href: '/ad-space' }
	];
</script>

<style>
    img {
        max-height: 90px;
    }
</style>

<nav aria-label="Main menu">
	<ul class="flex gap-2 md:gap-8 mr-4 md:mr-0">
		{#each menuItems as item (item.name)}
			<li>
				<a href={item.href} on:click={closeMenu}>
					<img src="{item.img}" alt="Menupoint {item.name}">
				</a>
			</li>
		{/each}
	</ul>
</nav>
