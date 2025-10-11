<script lang="ts">
	import type { ProjectDetail } from '$lib/types';
	import { Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-svelte';
	import SkillBadge from './SkillBadge.svelte';

	interface Props {
		project: ProjectDetail;
	}

	let { project }: Props = $props();
	
	// 각 추가 섹션의 펼침/접기 상태 관리
	let expandedSections = $state<Record<number, boolean>>({});
	
	function toggleSection(index: number) {
		expandedSections[index] = !expandedSections[index];
	}

	// URL을 감지하고 링크로 변환하는 함수
	function parseTextWithLinks(text: string): Array<{ type: 'text' | 'link'; content: string }> {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		const parts: Array<{ type: 'text' | 'link'; content: string }> = [];
		let lastIndex = 0;
		let match;

		while ((match = urlRegex.exec(text)) !== null) {
			// URL 앞의 텍스트
			if (match.index > lastIndex) {
				parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
			}
			// URL
			parts.push({ type: 'link', content: match[0] });
			lastIndex = match.index + match[0].length;
		}

		// 남은 텍스트
		if (lastIndex < text.length) {
			parts.push({ type: 'text', content: text.slice(lastIndex) });
		}

		return parts.length > 0 ? parts : [{ type: 'text', content: text }];
	}
</script>

<div class="rounded-lg border-l-4 border-blue-500 bg-gray-50 p-5">
	<div class="mb-3">
		<div class="mb-2 flex items-center gap-2 text-sm text-gray-600">
			<Calendar class="h-4 w-4" />
			<span class="font-medium">{project.period}</span>
		</div>
		<h4 class="mb-2 text-lg font-semibold text-gray-900">{project.position}</h4>
		<p class="mb-3 text-gray-700">{project.description}</p>
	</div>

	{#if project.achievements.length > 0}
		<ul class="mb-4 space-y-2">
			{#each project.achievements as achievement}
				<li class="flex gap-2 text-sm text-gray-700">
					<span class="text-blue-600">•</span>
					<span>
						{#each parseTextWithLinks(achievement) as part}
							{#if part.type === 'link'}
								<a
									href={part.content}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline"
								>
									{part.content}
									<ExternalLink class="inline h-3 w-3" />
								</a>
							{:else}
								{part.content}
							{/if}
						{/each}
					</span>
				</li>
			{/each}
		</ul>
	{/if}

	{#if project.skills.length > 0}
		<div class="mb-4 border-t border-gray-200 pt-3">
			<p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
				관련 사용 스택
			</p>
			<div class="flex flex-wrap gap-2">
				{#each project.skills as skill}
					<SkillBadge {skill} />
				{/each}
			</div>
		</div>
	{/if}

	{#if project.additionalSections && project.additionalSections.length > 0}
		<div class="space-y-2 border-t border-gray-200 pt-3">
			{#each project.additionalSections as section, index}
				<div class="rounded border border-gray-200 bg-white">
					<button
						onclick={() => toggleSection(index)}
						class="flex w-full items-center justify-between px-4 py-2 text-left transition-colors hover:bg-gray-50"
					>
						<span class="text-sm font-medium text-gray-700">{section.title}</span>
						{#if expandedSections[index]}
							<ChevronUp class="h-4 w-4 text-gray-500" />
						{:else}
							<ChevronDown class="h-4 w-4 text-gray-500" />
						{/if}
					</button>
					
					{#if expandedSections[index]}
						<div class="border-t border-gray-200 px-4 py-3">
							<p class="whitespace-pre-line text-sm text-gray-600">
								{#each parseTextWithLinks(section.content) as part}
									{#if part.type === 'link'}
										<a
											href={part.content}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline"
										>
											{part.content}
											<ExternalLink class="inline h-3 w-3" />
										</a>
									{:else}
										{part.content}
									{/if}
								{/each}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

