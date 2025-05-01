<script lang="ts">
	function goBack() {
		window.history.back();
	}
</script>

<div class="text-center pt-8 text-color-ctrl">
	<button on:click={goBack} class="bg-muted-sand border-deeper-brown border-2 rounded-xl px-8 py-4">
		<svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			 class="inline">
			<path d="M15 19L8 12L15 5"
				  stroke="#704a3b"
				  stroke-width="2"
				  stroke-linecap="round"
				  stroke-linejoin="round"
			/>
		</svg>
		Back to Projects
	</button>
</div>