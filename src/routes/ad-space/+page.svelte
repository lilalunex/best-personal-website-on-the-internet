<script>
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';

	function mailAdMe1() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex AdSpace1';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}

	function mailAdMe2() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex AdSpace2';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}

	function mailAdMe3() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex AdSpace3';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}
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
				<button onclick="{mailAdMe1}"
						class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] bg-button-ctrl">
						<span
							class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Mail me about it</span>
				</button>
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
				<button onclick="{mailAdMe2}"
						class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] bg-button-ctrl">
						<span
							class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Mail me about it</span>
				</button>
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
				<button onclick="{mailAdMe3}"
						class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] bg-button-ctrl">
						<span
							class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Mail me about it</span>
				</button>
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