<script lang="ts">
	import type { Experience } from '$lib/types';
	import Section from '../common/Section.svelte';
	import ExperienceCard from '../ui/ExperienceCard.svelte';

	interface Props {
		experiences: Experience[];
		totalDuration?: string;
	}

	let { experiences, totalDuration }: Props = $props();
</script>

<Section title="EXPERIENCE" subtitle={totalDuration} id="experience">
	<div class="space-y-6">
		{#each experiences as experience (experience.company + experience.startedAt)}
			<ExperienceCard {experience} />
		{/each}
	</div>
</Section>

