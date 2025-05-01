<script lang="ts">
	import ProjectPageTitle from '$lib/components/ProjectPageTitle.svelte';
	import ProjectBackButton from '$lib/components/ProjectBackButton.svelte';
</script>

<style>
    img {
        max-height: 500px;
    }
</style>

<div class="container mx-auto px-8 text-color-ctrl">
	<ProjectPageTitle title="One Handed Mobile Menu" />

	<p class="pt-8 text-center">Mobile websites have their menu on the top.<br>Nice to look at but not handy to
		use.<br>Phones
		gotten way to big to use them with one hand.</p>

	<div class="container mx-auto pt-8 pb-4 md:py-8 grid grid-cols-1 md-grid-cols-2 xl-grid-cols-4 gap-8">
		<img src="/one-handed-mobile-menu/one.png" alt="One Handed Mobile Menu 1" loading="lazy"
			 class="rounded-xl mx-auto" />
		<img src="/one-handed-mobile-menu/two.png" alt="One Handed Mobile Menu 2" loading="lazy"
			 class="rounded-xl mx-auto" />
		<img src="/one-handed-mobile-menu/three.png" alt="One Handed Mobile Menu 3" loading="lazy"
			 class="rounded-xl mx-auto" />
		<img src="/one-handed-mobile-menu/four.png" alt="One Handed Mobile Menu 4" loading="lazy"
			 class="rounded-xl mx-auto" />
	</div>

	<p class="text-center pb-8">
		I will not pursue this idea further:<br>
		1. Menu will take up too much space in the middle of the page. You could hide it but doing a fancy gesture
		everytime to get the menu will annoy the user.<br>2. Learning: The content displayed on a site is more important
		than the menu which got me there.<br><br>Drawn on iPad with Procreate.</p>

	<ProjectBackButton />

</div>
