<script lang="ts">
	import type { Article } from '$lib/types';
	import Section from '../common/Section.svelte';
	import { FileText, Calendar, ExternalLink } from 'lucide-svelte';

	interface Props {
		articles: Article[];
	}

	let { articles }: Props = $props();
</script>

<Section title="ARTICLE" id="articles">
	{#snippet children()}
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<ul class="space-y-3">
				{#each articles as article}
					<li class="flex items-start gap-3 text-sm">
						<FileText class="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
						<div class="flex-1">
							<span class="text-gray-500">({article.date})</span>
							{#if article.link}
								<a
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
									class="ml-2 text-gray-700 hover:text-blue-600"
								>
									{article.title}
									<ExternalLink class="ml-1 inline h-3 w-3" />
								</a>
							{:else}
								<span class="ml-2 text-gray-700">{article.title}</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/snippet}
</Section>

