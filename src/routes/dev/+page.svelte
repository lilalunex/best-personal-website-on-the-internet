<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import SubPageTitle from '$lib/components/SubPageTitle.svelte';
	import Button from '$lib/components/Button.svelte';
	import MailButton from '$lib/components/MailButton.svelte';

	let images = [
		'/dev/dev1.jpg',
		'/dev/dev2.jpg',
		'/dev/dev3.jpg',
		'/dev/dev4.jpeg'
	];

	let randomImage: string = images[0];
	let showImage: boolean = true;
	let lastIndex: number = 0;

	onMount(() => {
		setInterval(() => {
			showImage = false;
			setTimeout(() => {
				let randomIndex;
				do {
					randomIndex = Math.floor(Math.random() * images.length);
				} while (randomIndex === lastIndex);

				lastIndex = randomIndex;
				randomImage = images[randomIndex];
				showImage = true;
			}, 500);
		}, 9000);
	});
</script>

<style>
    figure {
        max-width: 400px;
    }
</style>

<div class="container mx-auto px-8 text-color-ctrl">
	<SubPageTitle title="Dev" />

	<div class="grid grid-cols-1 xl-grid-cols-2 gap-8 pt-8">
		<div class="text-center xl:text-right xl:flex flex-col justify-center md:align-items-end">
			<h1 class="text-3xl">Lunex Edakumi</h1>
			<p class="text-xl xl:text-2xl">Yet another Web Developer</p>
			<div class="flex flex-col md:flex-row ml-auto pt-8 gap-8 justify-center text-black items-center">
				<Button
					link="https://github.com/lilalunex"
					text="GitHub"
					ariaLabel="GitHub Profile"
				/>
				<Button
					link="https://www.linkedin.com/in/lilalunex/"
					text="LinkedIn"
					ariaLabel="LinkedIn Profile"
				/>
				<Button
					link="https://www.boot.dev/u/lilalunex"
					text="Boot.dev"
					ariaLabel="Boot.dev Profile"
				/>
			</div>
		</div>
		<div class="text-center xl:text-left">
			<figure class="mx-auto xl:mr-auto xl:ml-0">
				{#if showImage}
					<img src={randomImage} alt="Developer"
						 class="rounded-3xl mx-auto xl:mx-0 border-4 border-golden-tan"
						 transition:fade={{ duration: 500 }} />
				{/if}
				<figcaption class="caption text-center pt-2">Picture: <a href="/partners">Sergej Dukkardt</a>
				</figcaption>
			</figure>
		</div>
	</div>

	<div class="grid grid-cols-1 md-grid-cols-2 xl-grid-cols-3 gap-8 pt-16">
		<div class="grid grid-cols-2 gap-4">
			<div class="text-xl text-right">
				<p class="fw-bold">Technology</p>
				<p>HTML</p>
				<p>CSS</p>
				<p>JavaScript</p>
				<p>PHP</p>
				<p>MySQL</p>
				<p>Python</p>
			</div>
			<div class="text-xl text-left">
				<p class="fw-bold">Experience</p>
				<p>7+ years</p>
				<p>5+ years</p>
				<p>4+ years</p>
				<p>3+ years</p>
				<p>4+ years</p>
				<p>
					<a href="https://www.boot.dev/u/lilalunex" class="underline">Boot.dev certificate</a>
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="text-xl text-right">
				<p class="fw-bold">CMS</p>
				<p>Templating</p>
				<p>WordPress</p>
				<p>WooCommerce</p>
				<p>TYPO3</p>
				<p>Shopware 6</p>
				<br>
			</div>
			<div class="text-xl text-left">
				<p class="fw-bold">Experience</p>
				<p>3+ years</p>
				<p>3+ years</p>
				<p>2+ years</p>
				<p>2+ years</p>
				<p>1+ years</p>
				<br>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="text-xl text-right">
				<p class="fw-bold">Frameworks</p>
				<p>Bootstrap</p>
				<p>TailwindCSS</p>
				<p>UnoCSS</p>
				<p>VueJS</p>
				<p>Remix</p>
				<p>Svelte</p>
			</div>
			<div class="text-xl text-left">
				<p class="fw-bold">Experience</p>
				<p>3+ years</p>
				<p>2+ years</p>
				<p>This Website</p>
				<p>1 year</p>
				<p>One Project</p>
				<p>This Website</p>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-16">
		<div>
			<div>
				<p class="fw-bold text-center">My Choices</p>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="text-xl text-right">
					<p>OS</p>
					<p>IDE</p>
					<p>Tools</p>
					<p>Learning</p>
				</div>
				<div class="text-xl text-left">
					<p>macOS</p>
					<p>intelliJ, Neovim</p>
					<p>Alfred</p>
					<p><a href="boot.dev" target="_blank" class="underline">boot.dev</a>
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="text-xl text-right">
				<p class="fw-bold">Language</p>
				<p>German</p>
				<p>English</p>
				<p>Russian</p>
				<p>Japanaese</p>
			</div>
			<div class="text-xl text-left">
				<p class="fw-bold">Proficiency</p>
				<p>Native</p>
				<p>Fluent</p>
				<p>Intermediate</p>
				<p>Basic</p>
			</div>
		</div>
	</div>

	<div>
		<div class="text-center pb-8 pt-16 text-black">
			<MailButton
				subject="Contact Me"
				text="Contact me"
				ariaLabel="Contact me"
			/>
		</div>
	</div>
	<div class="text-center">
		<br>
		<p class="ch-65 mx-auto">
			On one way or the other I had to do with:<br>
			LLMs, CI/CD, jQuery, Ninox CRM, Make (formally: Integromat), Java, Python, Confluence, NPM,
			Composer,
			GitKraken, Drupal, Shopify, JTL, PostCSS, Windows/Apple/Free Office Programs, PostgresQL, Django,
			Ionic, React Native, Angular, Atomic Design, IBM Carbon, Turbo C, NodeJS,
			10 finger typing, optimizing workflow, improve OS usage, nixOS for Container, Docker, Shopware 5,
			Symfony, REST, API, SASS, SCSS, LESS, Ubuntu, Oracle DB, Microsoft Access
		</p>
	</div>
</div>