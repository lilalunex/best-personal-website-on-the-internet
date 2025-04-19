<script lang="ts">
	export let imgSrc: string = '';
	export let imgAlt: string = '';
	export let title: string = '';
	export let desc: string = '';
	export let i1: string = '';
	export let i1c: string = '';
	export let i2: string = '';
	export let i2c: string = '';
	export let linkTest: string = '';
	export let linkUrl: string = '';
	export let git: string = '';
</script>

<style>
    @media (min-width: 1280px) {
        img {
            height: 280px;
        }
    }

    p {
        min-height: 81px;
    }
</style>

<div class="rounded-3xl rounded-xl border-4 border-golden-tan p-6 xl:p-8 bg-warm-beige">
	<div class="flex justify-center items-center">
		{#if imgSrc === "lotus.png"}
			<img src="{imgSrc}" alt="{imgAlt}" class="p-6">
		{:else}
			<img src="{imgSrc}" alt="{imgAlt}">
		{/if}
	</div>
	<h3 class="pb-4 pt-8">{title}</h3>
	<p>{desc}</p>
	{#if i1 || (linkTest && linkUrl)}
		<div class="flex flex-col xl:flex-row items-start pt-6 pb-2 gap-2">
			{#if i1}
				<span class="py-2 px-4 rounded-xl" style={i1c ? `background-color: ${i1c}` : ''}>{i1}</span>
			{/if}
			{#if git}
				<a href="{git}" class="py-2 pl-2 underline">Git Repo</a>
			{/if}
			{#if linkTest && linkUrl}
				<a href="{linkUrl}" class="py-2 pl-2 underline">{linkTest}</a>
			{/if}
			{#if i2}
				<span class="py-2 px-4 rounded-xl" style={i2c ? `background-color: ${i2c}` : ''}>{i2}</span>
			{/if}
		</div>
	{/if}

</div>