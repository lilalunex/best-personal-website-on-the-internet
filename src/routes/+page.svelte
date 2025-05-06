<script lang="ts">
	import { onMount } from 'svelte';

	let titleText: string = 'Relax, Breath & Move.';

	onMount(() => {
		if (Math.random() < 0.0821) {
			titleText = 'Lost in Translation';
		}
	});

	function mailContactMe() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex Contact Me';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}
</script>

<style>
    @import '$lib/styles/breathing-circle.css';

    img {
        max-width: 260px;
    }
</style>

<div>

	<div class="container mx-auto px-8">
		<h1 class="title text-center xl:underline breathing-title text-[28px] xl:text-[64px] text-shadow-[1px_1px_0_black] xl:text-shadow-[2px_2px_0_black]">
			{titleText}</h1>
		<p class="text-center breathing-title text-15px xl:text-3xl text-shadow-[1px_1px_0_black] xl:text-shadow-[1px_1px_0_black]">
			A somewhat different developer website.</p>
		<div class="breathing-circle-wrapper flex items-center justify-center relative">
			<div class="inner-breathing-circle absolute"></div>
			<div class="inner-breathing-circle absolute"></div>
			<div class="breathing-circle absolute"></div>
			<span id="breathing-text" class="breathing-text absolute pt-21">breathe in</span>
		</div>

		<div class="text-center pt-10 pb-18 xl:py-8">
			<h3 class="text-xl font-semibold">
				<button onclick="{mailContactMe}"
						class="bg-warm-beige btn relative overflow-hidden border-2 border-deeper-brown rounded-full px-16 py-8 mb-8 bg-body text-deeper-brown transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]">
					<span
						class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Contact me</span>
				</button>
			</h3>
		</div>
	</div>

	<div class="container mx-auto px-8 text-center text-color-ctrl">

		<div class="text-center">
			<h2 class="italic text-4xl pt-8">Mindful & Intentional</h2>
			<p class="text-2xl pt-8 leading-8">
				The machines are there to make our lives easier. Not to replace them.<br>
				Don't forget in our hasty technology times to take some time to breathe.<br>
				Don't ask yourself what gadget you can get next - look around what you can reduce in your
				life.
			</p>
		</div>

		<div class="pt-8 text-center">
			<h2 class="italic text-4xl pt-8">The faster the world moves, the slower I go.</h2>
			<p class="text-2xl pt-8 leading-8">
				Are you currently using a digital device out of habit to kill time?<br> Don't think about which gadget
				you can get next. Take a moment to consider what you can let go of.<br> Touch the grass with your feet
				from time to time.
			</p>
		</div>

		<div class="pt-4 text-center">
			<h2 class="italic text-4xl pt-8">Peace.</h2>
			<img src="/lotus.png" alt="Lotus" class="mx-auto pt-8">
		</div>
	</div>

</div>