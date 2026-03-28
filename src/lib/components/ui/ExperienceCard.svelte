<script lang="ts">
	import type { Experience } from '$lib/types';
	import { getExperienceDurationLabel } from '$lib/utils/careerDuration';
	import { Briefcase, Calendar, Building2 } from 'lucide-svelte';
	import ProjectDetailCard from './ProjectDetailCard.svelte';

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();

	const durationLabel = $derived(getExperienceDurationLabel(experience));
</script>

<div class="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
	{#if experience.current}
		<div class="absolute right-4 top-4">
			<span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
				재직중
			</span>
		</div>
	{/if}

	<div class="mb-6">
		<div class="mb-3 flex items-start gap-3">
			<div class="rounded-lg bg-blue-100 p-2.5">
				<Building2 class="h-5 w-5 text-blue-600" />
			</div>
			<div>
				<h3 class="mb-1 text-2xl font-bold text-gray-900">{experience.company}</h3>
				<div class="flex flex-wrap gap-3 text-sm text-gray-600">
					<div class="flex items-center gap-1">
						<Calendar class="h-4 w-4" />
						<span>{experience.totalPeriod}</span>
					</div>
					<div class="flex items-center gap-1">
						<Briefcase class="h-4 w-4" />
						<span>{durationLabel}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="space-y-4">
		{#each experience.projects as project}
			<ProjectDetailCard {project} />
		{/each}
	</div>
</div>

