<script lang="ts">
	import type { Skill } from '$lib/types';
	import Section from '../common/Section.svelte';
	import SkillGroup from '../ui/SkillGroup.svelte';

	interface Props {
		skills: Skill[];
	}

	let { skills }: Props = $props();
</script>

<Section title="SKILL" id="skills">
	{#snippet children()}
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each skills as skill}
				<SkillGroup {skill} />
			{/each}
		</div>
	{/snippet}
</Section>

