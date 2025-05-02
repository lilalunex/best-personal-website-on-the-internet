<script>
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';
	import MailButton from '$lib/components/MailButton.svelte';
</script>

<style>
    .own-adspace {
        border-width: 3px;
        border-style: dotted;
        border-color: grey;
        border-radius: 50px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<div class="container mx-auto px-8 text-color-ctrl">
	<SubPageTitle title="Ad-Space" />

	<div class="own-adspace py-24 my-8">
		<div class="text-center">
			<p class="text-2xl">Ad-Space 1 / 3</p>
			<p class="pt-4">
				Buy this Ad-Space*
			</p>
			<div class="pt-16">
				<MailButton
					subject="AdSpace1"
					text="Mail me about it"
					ariaLabel="Lilalunex AdSpace1"
				/>
			</div>
		</div>
	</div>

	<div class="own-adspace py-24 my-8">
		<div class="text-center">
			<p class="text-2xl">Ad-Space 2 / 3</p>
			<p class="pt-4">
				Buy this Ad-Space*
			</p>
			<div class="pt-16">
				<MailButton
					subject="AdSpace2"
					text="Mail me about it"
					ariaLabel="Lilalunex AdSpace2"
				/>
			</div>
		</div>
	</div>

	<div class="own-adspace py-24 my-8">
		<div class="text-center">
			<p class="text-2xl">Ad-Space 3 / 3</p>
			<p class="pt-4">
				Buy this Ad-Space*
			</p>
			<div class="pt-16">
				<MailButton
					subject="AdSpace3"
					text="Mail me about it"
					ariaLabel="Lilalunex AdSpace3"
				/>
			</div>
		</div>
	</div>

	<div class="py-8">
		<div class="text-center">
			<p class="pt-4">
				*Display a different image on mobile & desktop, one title, one subtitle, a brief description & a
				link. No embedding of scripts. The images will be saved on this server and not loaded externally.
			</p>
		</div>
	</div>
</div>