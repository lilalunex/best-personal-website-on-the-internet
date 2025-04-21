<script lang="ts">
	import Project from '$lib/Project.svelte';
</script>

<div>
	<div class="container mx-auto py-8 xl:py-16 px-8">
		<h1 class="title text-center underline breathing-title text-[48px] xl:text-[64px] text-shadow-[2px_1px_0_black]">
			Projects
		</h1>

		<div class="pt-8 grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8">

			<Project imgSrc="projects/lnxevo.png" imgAlt="Lunex Evolution" title="Lunex Evolution"
					 desc="My WordPress Services. Never went live because I learned again, that I am not a guy for being self employed."
					 i1="React" i1c="#57C4DC" i2="IBM Carbon" i2c="#97C1FF"
			/>

			<Project imgSrc="lotus.png" imgAlt="Casino Simulation" title="Casino Simulation"
					 desc="Started to deepen PHP knowledge. Still a lot of ideas open. Next step would be making this an actual (good looking) game."
					 i1="PHP" i1c="#8993BE" linkTest="Play here"
					 linkUrl="https://lilalunex.dev/casino-simulation/index.php"
					 git="https://github.com/lilalunex/casino-simulation"
			/>

			<Project imgSrc="projects/website2025.png" imgAlt="2025 Website"
					 title="2025 Website"
					 desc="The website you are currently on. Going through a lot of changes and ideas."
					 i1="Svelte" i1c="#FF3E00" git="https://github.com/lilalunex/best-personal-website-on-the-internet"
			/>

			<Project imgSrc="one-handed-mobile-menu/three.png" imgAlt="One handed mobile menu"
					 title="One handed mobile menu"
					 desc="I am a very aware when I use technology. I disliked a lot the way we navigate through mobile menus. So I came up with this."
					 i1="Idea" i1c="#DD00DD" linkTest="Read more" linkUrl="/projects/one-handed-mobile-menu"
			/>

			<Project imgSrc="lilalunex_2024/desktop.png" imgAlt="2024 Website" title="2024 Website"
					 desc="I liked this one. Turned out to be pretty good looking on mobile. I didn't put much time into that."
					 i1="Remix (React)" i1c="#719ACC" linkTest="Read more" linkUrl="/projects/lilalunex_2024"
			/>

			<Project imgSrc="projects/website2023.png" imgAlt="2023 Website" title="2023 Website"
					 desc="Started back then to learn VueJS."
					 i1="Vue" i1c="#42B883" linkTest="Visit here"
					 linkUrl="https://lilalunex.dev/first-vue-website/index.html"
			/>

		</div>

		<h2 class="pt-16 breathing-title underline color-golden-tan text-[32px] xl:text-[48px] text-shadow-[2px_1px_0_black] text-center">
			Ideas
		</h2>

		<div class="pt-8 grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8">

			<Project imgSrc="lotus.png" imgAlt="Project Placeholder" title="Lunex Leveling System"
					 desc="An idea to track your progress what you want to learn or get done. Enjoying to do a Python project after the boot.dev course."
					 i1="Python" i1c="#306998" git="https://github.com/lilalunex/lunex-leveling-system"
			/>

			<Project imgSrc="lotus.png" imgAlt="Project Placeholder" title="Nexx"
					 desc="
					 	Sharing content to all your friends / followers. Mainly as an exercise for me to create a fullstack app. But I do feel like there can something bigger to this.
					 "
			/>

			<Project imgSrc="lotus.png" imgAlt="Project Placeholder" title="The Coworking Hub"
					 desc="An idea for an website about coworking. Showing the world about pomodoro timer, coworking twitch streams to find communities / body doubling and provide other similar resources."
			/>

		</div>

	</div>
</div>
