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

<section {id} class="mb-12 scroll-mt-20 print:mb-4">
	<!-- 화면: 구역 구분 / 인쇄: 얇은 구분만 두고 이어서 나열 -->
	<div
		class="mb-6 border-b-2 border-gray-200 pb-3 print:mb-2 print:border-b print:border-gray-300 print:pb-1"
	>
		<h2
			class="text-2xl font-bold text-gray-900 print:text-sm print:font-semibold print:text-gray-800"
		>
			{title}
			{#if subtitle}
				<span class="ml-3 text-base font-normal text-gray-500 print:text-xs print:text-gray-600"
					>{subtitle}</span
				>
			{/if}
		</h2>
	</div>
	<div class="space-y-6 print:space-y-3">
		{@render children()}
	</div>
</section>
