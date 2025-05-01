<script lang="ts">
	export let name: string = '';
	export let link: string = '';
</script>

<div class="flex">
	<a href="{link}" aria-label="Instagram Profile" class="hover:underline">{name}</a>
	<a href="{link}" target="_blank" aria-label="Open Instagram in new tab">
		<svg class="ml-4 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
			 viewBox="0 0 24 20"
			 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
			 stroke-linejoin="round">
			<path d="M15 3h6v6"></path>
			<path d="M21 3L10 14"></path>
			<path d="M5 5v14"></path>
			<path d="M5 19h14"></path>
		</svg>
	</a>
</div>