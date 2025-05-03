<script lang="ts">
	export let title: string = '';
	export let text: string = '';
	export let img: string = '';
</script>

<style>
	img {
		max-height: 90px;
	}
</style>

<div class="p-8 rounded-3xl rounded-xl border-4 border-golden-tan bg-warm-beige text-center">
	<img src="wp/{img}" alt="{title}" class="mx-auto">
	<h3 class="pt-4 text-2xl">
		{title}
	</h3>
	<p class="pt-6">
		{text}
	</p>
</div>