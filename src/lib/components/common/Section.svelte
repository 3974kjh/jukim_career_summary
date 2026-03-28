<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subtitle?: string;
		id?: string;
		children: Snippet;
	}

	let { title, subtitle, id, children }: Props = $props();
</script>

<section {id} class="mb-12 scroll-mt-20">
	<div class="mb-6 border-b-2 border-gray-200 pb-3">
		<h2 class="text-2xl font-bold text-gray-900">
			{title}
			{#if subtitle}
				<span class="ml-3 text-base font-normal text-gray-500">{subtitle}</span>
			{/if}
		</h2>
	</div>
	<div class="space-y-6">
		{@render children()}
	</div>
</section>

