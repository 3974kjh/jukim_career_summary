<script lang="ts">
	import type { Education } from '$lib/types';
	import Section from '../common/Section.svelte';
	import { GraduationCap, Calendar } from 'lucide-svelte';

	interface Props {
		educations: Education[];
	}

	let { educations }: Props = $props();
</script>

<Section title="EDUCATION" id="education">
	{#snippet children()}
		<div class="space-y-4">
			{#each educations as education}
				<div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
					<div class="flex items-start gap-4">
						<div class="rounded-lg bg-blue-100 p-3">
							<GraduationCap class="h-6 w-6 text-blue-600" />
						</div>
						<div class="flex-1">
							<h3 class="mb-1 text-lg font-bold text-gray-900">{education.school}</h3>
							<p class="mb-2 text-gray-700">{education.degree}</p>
							{#if education.major}
								<p class="mb-2 text-sm text-gray-600">{education.major}</p>
							{/if}
							<div class="flex items-center gap-1 text-sm text-gray-500">
								<Calendar class="h-4 w-4" />
								<span>{education.period}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/snippet}
</Section>

