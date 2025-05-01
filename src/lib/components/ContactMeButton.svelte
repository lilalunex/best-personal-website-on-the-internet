<script lang="ts">
	export let link: string = '';
	export let text: string = '';
	export let ariaLabel: string = '';

	function mailContactMe() {
		const user = 'lunex';
		const domain = 'lilalunex.dev';
		const subject = 'Lilalunex Contact Me';
		const email = `${user}@${domain}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}
</script>

<button
	onclick="{mailContactMe}"
	class="bg-button-ctrl border-deeper-brown border-2 rounded-xl px-8 py-4 relative overflow-hidden transition-all duration-300 ease-in-out shadow-md group hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)] text-color-ctrl">
					<span
						class="relative inline-block before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-deeper-brown before:opacity-100 before:transition-all before:duration-300 before:origin-center group-hover:before:left-0 group-hover:before:w-full">Contact me</span>
</button>