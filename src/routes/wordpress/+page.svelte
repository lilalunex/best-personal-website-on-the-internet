<script>
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';
	import MailButton from '$lib/components/MailButton.svelte';
	import WPService from '$lib/components/WPService.svelte';
</script>

<div class="container mx-auto px-8 text-color-ctrl">
	<SubPageTitle title="WordPress" />

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
			WordPress is a user-friendly Content Management System (CMS) that allows you to manage your website without technical knowledge. With over 40% of all websites worldwide, WordPress is the preferred choice for businesses, blogs, and online shops.
		</p>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="underline text-4xl pt-8">
			My Services
		</h2>
		<div class="pt-12 grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-8">
			<WPService img="consulting.png" title="Consulting" text="Professional consulting for your WordPress projects. We analyze your requirements and develop custom solutions." />
			<WPService title="Template Development" text="Custom WordPress themes and templates that perfectly match your brand and needs." />
			<WPService title="CMS Development" text="Development of custom WordPress plugins and extensions to enhance your website's functionality." />
			<WPService title="WordPress Training" text="Comprehensive training to help you manage your WordPress site independently." />

			<WPService title="Backup Services" text="Automatic and manual backups to ensure your data is always safe." />
			<WPService title="Programming" text="Custom programming solutions for WordPress websites, including plugin development and feature enhancements." />
			<WPService title="Troubleshooting" text="Fast and effective resolution of WordPress issues and technical problems." />
			<WPService title="WooCommerce" text="Professional setup and customization of WooCommerce for your online shop with WordPress." />
		</div>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="text-4xl pt-8">
			Why me
		</h2>
		<p class="pt-4 text-5xl">
			69,- € / hr
		</p>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="text-4xl pt-8">
			My Motivation
		</h2>
		<p class="pt-4 text-5xl">
			69,- € / hr
		</p>
	</div>

	<div class="pt-18 flex flex-col justify-center items-center text-color-ctrl text-center">
		<h2 class="text-4xl pt-8">
			Opinion on AI
		</h2>
		<p class="pt-4 text-5xl">
			69,- € / hr
		</p>
	</div>

	<div class="pt-16 flex justify-center">
		<MailButton subject="wp" text="Hire me" ariaLabel="Hire me button" />
	</div>
</div>