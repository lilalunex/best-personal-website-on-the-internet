<script lang="ts">
	export let closeMenu: () => void = () => {
	};

	const menuItems = [
		{ img: '/menu/home.png', alt: 'Home Menu', href: '/' },
		{ img: '/menu/projects.png', alt: 'Projects Menu', href: '/projects' },
		{ img: '/menu/dev.png', alt: 'Dev Menu', href: '/dev' },
		{ img: '/menu/wp.png', alt: 'WordPress Menu', href: '/wordpress' },
		{ img: '/menu/partners.png', alt: 'Partners Menu', href: '/partners' },
		{ img: '/menu/adspace.png', alt: 'Ad-Space Menu', href: '/ad-space' }
	];
</script>

<style>
    img {
        max-height: 90px;
    }
</style>

<nav aria-label="Main menu">
	<ul class="flex gap-2 md:gap-8 mr-4 md:mr-0">
		{#each menuItems as item}
			<li>
				<a href={item.href} on:click={closeMenu}>
					<img src="{item.img}" alt="{item.alt}">
				</a>
			</li>
		{/each}
	</ul>
</nav>
