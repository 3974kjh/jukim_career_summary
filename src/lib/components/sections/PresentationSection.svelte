<script lang="ts">
	import type { Presentation } from '$lib/types';
	import Section from '../common/Section.svelte';
	import { Presentation as PresentationIcon, Calendar, MapPin, ExternalLink } from 'lucide-svelte';

	interface Props {
		presentations: Presentation[];
	}

	let { presentations }: Props = $props();
</script>

<Section title="PRESENTATION" id="presentations">
	{#snippet children()}
		<div class="space-y-4">
			{#each presentations as presentation}
				<div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
					<div class="flex items-start gap-4">
						<div class="rounded-lg bg-purple-100 p-3">
							<PresentationIcon class="h-5 w-5 text-purple-600" />
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-start justify-between gap-4">
								<h3 class="text-lg font-semibold text-gray-900">{presentation.title}</h3>
								{#if presentation.link}
									<a
										href={presentation.link}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-600 hover:text-blue-700"
									>
										<ExternalLink class="h-5 w-5" />
									</a>
								{/if}
							</div>
							<div class="mb-2 flex flex-wrap gap-3 text-sm text-gray-600">
								<div class="flex items-center gap-1">
									<Calendar class="h-4 w-4" />
									<span>{presentation.date}</span>
								</div>
								<div class="flex items-center gap-1">
									<MapPin class="h-4 w-4" />
									<span>{presentation.venue}</span>
								</div>
							</div>
							{#if presentation.description}
								<p class="text-sm text-gray-600">{presentation.description}</p>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/snippet}
</Section>

