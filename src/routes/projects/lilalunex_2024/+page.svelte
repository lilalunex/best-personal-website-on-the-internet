<script lang="ts">
	import ProjectPageTitle from '$lib/components/ProjectPageTitle.svelte';
	import ProjectBackButton from '$lib/components/ProjectBackButton.svelte';
</script>

<div class="container mx-auto px-8 text-color-ctrl">
	<ProjectPageTitle title="2024 Website" />

	<p class="pt-8 text-center">
		I couldn't manage to get remix running on the path /2024/.<br>
		So... here are two images:
	</p>

	<div class="container mx-auto pt-8 pb-4 md:py-8 grid grid-cols-1 xl-grid-cols-2 items-center gap-8">
		<a href="/lilalunex_2024/desktop.png">
			<img src="/lilalunex_2024/desktop.png"
				 alt="One Handed Mobile Menu 1"
				 loading="lazy"
				 class="rounded-xl mx-auto"
			/>
		</a>
		<a href="/lilalunex_2024/mobile.png">
			<img src="/lilalunex_2024/mobile.png"
				 alt="One Handed Mobile Menu 2"
				 loading="lazy"
				 class="rounded-xl mx-auto"
			/>
		</a>
	</div>

	<ProjectBackButton />

</div>