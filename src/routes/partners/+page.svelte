<script lang="ts">
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<style>
    img {
        max-height: 400px;
    }

    a {
        min-width: 240px;
        text-align: center;
    }
</style>

<div class="container mx-auto px-8 text-center text-color-ctrl">
	<SubPageTitle title="Partners" />
	<div class="grid xl:flex justify-center pt-16 pb-8">
		<div class="flex flex-col justify-center items-center">
			<img src="/partners/dukkart.png" alt="Dukkart Digital"
				 class="mx-auto xl:ml-auto xl:mr-8 rounded-3xl rounded-xl border-4 border-golden-tan">
		</div>
		<div class="flex flex-col justify-center items-center">
			<p class="text-3xl pt-8">DukkArt Digital</p>
			<p class="text-2xl pt-2 pb-4">Photographer. Media Creator. Rental-studio.</p>
			<Button
				link="http://dukkart.de"
				text="Photograpy-Website"
				ariaLabel="Dukkart Photograpy-Website"
				minWidth="240px"
				target="_blank"
			/>
			<Button
				link="http://dreamstudiobadoeynhausen.de"
				text="Rental-Studio"
				ariaLabel="Dreamstudio Bad Oeynhausen Rental-Studio"
				minWidth="240px"
				target="_blank"
			/>
			<Button
				link="https://www.instagram.com/dukkart/"
				text="Instagram"
				ariaLabel="Dukkart Instagram"
				minWidth="240px"
				target="_blank"
			/>
		</div>
	</div>

	<div class="grid xl:flex justify-center pt-16 pb-8">
		<div class="flex flex-col justify-center items-center order-2 xl:order-1">
			<p class="text-3xl pt-8">Reza Jaxon</p>
			<p class="text-2xl pt-2 pb-4">Dancer. Graffiti Artist. Designer.</p>
			<Button
				link="https://shibuy.art/"
				text="Art-Website"
				ariaLabel="Shiburt Art Website"
				minWidth="240px"
				target="_blank"
			/>
			<Button
				link="https://www.instagram.com/salvador_jaxon/"
				text="Instagram"
				ariaLabel="Reza Jaxon Instagram"
				minWidth="240px"
				target="_blank"
			/>
		</div>
		<div class="order-1 xl:order-2">
			<img src="/partners/jaxon.png" alt="Reza Jaxon"
				 class="rounded-3xl mx-auto xl:ml-8 rounded-xl border-4 border-golden-tan">
		</div>
	</div>

</div>
