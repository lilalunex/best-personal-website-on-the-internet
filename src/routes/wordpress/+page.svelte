<script lang="ts">
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';
	import MailButton from '$lib/components/MailButton.svelte';
	import WPService from '$lib/components/WPService.svelte';

	let envJobsActive: boolean = import.meta.env['VITE_JOBS'] === 'true';
	let showBadge = true;
</script>

<style>

</style>

<div class="container mx-auto px-8 text-color-ctrl">
	<SubPageTitle title="WordPress" />

	<div class="container xl:relative text-center text-color-ctrl">
		<div class="xl:absolute right-32 top--18">
			<div class="fw-bold text-black text-xl pb-1">
				Current Availability:
			</div>
			{#if envJobsActive}
				<div
					class="inline-flex items-center rounded-xl bg-green-500 px-3 py-1 text-white fw-bold text-shadow-[1px_1px_0_black]">
					Accepting Jobs
				</div>
			{:else}
				<div
					class="inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-white fw-bold text-shadow-[1px_1px_0_black]">
					Not accepting Jobs
				</div>
			{/if}
		</div>
	</div>

	<!--{#if showBadge}-->
	<!--	<div class="container relative">-->
	<!--		<div class="absolute right-0">-->
	<!--			<button-->
	<!--				on:click={() => (showBadge = false)}-->
	<!--				class="absolute right&#45;&#45;5 top&#45;&#45;6 text-white font-bold hover:text-gray-300 focus:outline-none rounded-full px-3 text-3xl pb-1 bg-black"-->
	<!--				aria-label="Close">-->
	<!--				×-->
	<!--			</button>-->
	<!--			{#if envJobsActive}-->
	<!--				<div-->
	<!--					class="inline-flex items-center rounded-xl bg-green-500 px-4 py-2 text-white fw-bold text-shadow-[1px_1px_0_black]">-->
	<!--					Currently accepting Jobs-->
	<!--				</div>-->
	<!--			{:else}-->
	<!--				<div-->
	<!--					class="inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-white fw-bold text-shadow-[1px_1px_0_black]">-->
	<!--					Currently not accepting Jobs-->
	<!--				</div>-->
	<!--			{/if}-->
	<!--		</div>-->
	<!--	</div>-->
	<!--{/if}-->

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="underline text-4xl pt-8">
			Pricing
		</h2>
		<p class="pt-4 text-5xl">
			69,- € / hr
		</p>
		<p class="pt-4">
			No VAT due to small business regulation<br>
			Transparent pricing with no hidden costs.
		</p>
		<div class="pt-12">
			<MailButton subject="wp" text="Hire me" ariaLabel="Hire me button" />
		</div>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="underline text-4xl pt-8">
			What's WordPress
		</h2>
		<h3 class="text-2xl pt-4">
			The World's Most Popular Content Management System
		</h3>
		<p class="pt-6 text-center">
			WordPress is a user-friendly Content Management System (CMS) that allows you to manage your website without
			technical knowledge. With over 40% of all websites worldwide, WordPress is the preferred choice for
			businesses, blogs, and online shops.
		</p>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="underline text-4xl pt-8">
			My Services
		</h2>
		<div class="pt-12 grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-8">
			<WPService img="consulting.png" title="Consulting"
					   text="Professional consulting for your WordPress projects. We analyze your requirements and develop custom solutions." />
			<WPService img="template.png" title="Template Development"
					   text="Custom WordPress themes and templates that perfectly match your brand and needs." />
			<WPService img="cmsdev.png" title="CMS Development"
					   text="Development of custom WordPress plugins and extensions to enhance your website's functionality." />
			<WPService img="wptraining.png" title="WordPress Training"
					   text="Comprehensive training to help you manage your WordPress site independently." />

			<WPService img="backup.png" title="Backup Services"
					   text="Automatic and manual backups to ensure your data is always safe." />
			<WPService img="programming.png" title="Programming"
					   text="Custom programming solutions for WordPress websites, including plugin development and feature enhancements." />
			<WPService img="troubleshooting.png" title="Troubleshooting"
					   text="Fast and effective resolution of WordPress issues and technical problems." />
			<WPService img="woocommerce.png" title="WooCommerce"
					   text="Professional setup and customization of WooCommerce for your online shop with WordPress." />
		</div>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="text-4xl pt-8 underline">
			Why me
		</h2>
		<p class="pt-6 ch-65">
			Many agencies charge high monthly fees for services you often don't need. In reality, the costs for a domain and web hosting are quite modest. Typically just a third per year of what other agencies charge per month.
		</p>
		<p class="pt-6 ch-65">
			I have the experience of working at agencies. So I don't lack of knowledge in that regard. But since you hire me as a self agent now, I can deliver you the same quality for a cheaper price.
		</p>
	</div>

	<!--	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">-->
	<!--		<h2 class="text-4xl pt-8">-->
	<!--			Opinion on AI-->
	<!--		</h2>-->
	<!--		<p class="pt-4 text-5xl">-->
	<!--  TODO -->
	<!--		</p>-->
	<!--	</div>-->

	<div class="pt-16 flex justify-center">
		<MailButton subject="wp" text="Hire me" ariaLabel="Hire me button" />
	</div>
</div>