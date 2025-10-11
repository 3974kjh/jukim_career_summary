<script lang="ts">
	import type { Skill } from '$lib/types';
	import SkillBadge from './SkillBadge.svelte';

	interface Props {
		skill: Skill;
	}

	let { skill }: Props = $props();
</script>

<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
	<h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">
		{skill.category}
	</h4>
	<div class="flex flex-wrap gap-2">
		{#each skill.items as item}
			<SkillBadge skill={item} />
		{/each}
	</div>
</div>

