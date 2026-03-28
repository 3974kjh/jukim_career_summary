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

	/** 성과 문자열이 `@근거`로 시작하면 들여쓰기·보조 스타일 적용(표시 시 키워드는 제거) */
	const RATIONALE_KEYWORD = '@근거';

	function isRationaleLine(text: string): boolean {
		return text.trimStart().startsWith(RATIONALE_KEYWORD);
	}

	function achievementBodyForDisplay(text: string): string {
		const t = text.trimStart();
		if (!t.startsWith(RATIONALE_KEYWORD)) return text;
		return t.slice(RATIONALE_KEYWORD.length).replace(/^\s+/, '');
	}

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
		<div
			class="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-5 text-gray-600"
		>
			<Calendar class="h-4 w-4 shrink-0 text-gray-500" />
			<span class="font-medium tabular-nums leading-5 text-gray-600">{project.period}</span>
			<span class="shrink-0 text-gray-300" aria-hidden="true">·</span>
			<span class="min-w-0 leading-5 text-gray-500">{project.position}</span>
		</div>
		<p class="mb-3 text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
			{project.description}
		</p>
		{#if project.workSplit}
			<div class="mb-3 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
				<p class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
					업무 비중
				</p>
				<div class="grid w-full grid-cols-2 items-baseline gap-x-2 gap-y-1">
					<span class="min-w-0 justify-self-start text-left"
						>프론트엔드 개발 <span class="font-semibold tabular-nums text-blue-700"
							>{project.workSplit.frontend}%</span
						></span
					>
					<span class="min-w-0 justify-self-end text-right"
						>백엔드 개발 <span class="font-semibold tabular-nums text-green-600"
							>{project.workSplit.backend}%</span
						></span
					>
				</div>
				<div class="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-gray-100">
					<div
						class="h-full bg-blue-500 transition-[width]"
						style="width: {project.workSplit.frontend}%"
						aria-hidden="true"
					></div>
					<div
						class="h-full bg-green-500 transition-[width]"
						style="width: {project.workSplit.backend}%"
						aria-hidden="true"
					></div>
				</div>
			</div>
		{/if}
	</div>

	{#if project.achievements.length > 0}
		<ul class="mb-4 space-y-2">
			{#each project.achievements as achievement}
				<li
					class="flex gap-2 text-sm {isRationaleLine(achievement)
						? 'ml-6 border-l-2 border-gray-200 pl-4 text-gray-600'
						: 'text-gray-700'}"
				>
					{#if !isRationaleLine(achievement)}
						<span class="shrink-0 text-blue-600">•</span>
					{/if}
					<span class="min-w-0 {isRationaleLine(achievement) ? 'block' : ''}">
						{#each parseTextWithLinks(achievementBodyForDisplay(achievement)) as part}
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

