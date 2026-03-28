<script lang="ts">
	import Section from '../common/Section.svelte';

	interface Props {
		content: string;
		updatedDate?: string;
	}

	let { content, updatedDate }: Props = $props();
</script>

<Section title="INTRODUCE" id="introduce">
	<div class="rounded-lg bg-gray-50 p-6">
		<div class="prose prose-gray max-w-none">
			<p class="whitespace-pre-line text-gray-700 leading-relaxed">{content}</p>
		</div>
		{#if updatedDate}
			<p class="mt-4 text-sm text-gray-500">Latest Updated {updatedDate}</p>
		{/if}
	</div>
</Section>

