<script lang="ts">
	import type { PersonalProject, PersonalProjectCategory } from '$lib/types';
	import Section from '../common/Section.svelte';
	import { Github, Globe, ExternalLink } from 'lucide-svelte';

	interface Props {
		categories: PersonalProjectCategory[];
	}

	let { categories }: Props = $props();

	const totalProjectCount = $derived(categories.reduce((sum, cat) => sum + cat.projects.length, 0));

	function implLabel(p: PersonalProject): string {
		if (p.implementation === 'direct') return '직접 구현';
		if (p.implementation === 'vibe') return '바이브 코딩';
		return '직접 + 바이브 혼합';
	}

	function implClass(p: PersonalProject): string {
		if (p.implementation === 'direct')
			return 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200';
		if (p.implementation === 'vibe') return 'bg-violet-50 text-violet-800 ring-1 ring-violet-200';
		return 'bg-amber-50 text-amber-900 ring-1 ring-amber-200';
	}
</script>

<Section title="PERSONAL PROJECTS" subtitle="개인 프로젝트" id="personal-projects">
	<div
		class="mb-8 rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50/90 to-white px-4 py-4 sm:px-5 print:mb-4 print:py-3"
	>
		<p class="mb-4 text-base font-semibold text-gray-900">
			총
			<span class="text-blue-700 tabular-nums">{totalProjectCount}</span>
			개 프로그램 개발
		</p>
		<p class="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase">
			기술 스택 · 구현 방식
		</p>
		<dl class="space-y-2.5 text-sm">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
				<dt class="shrink-0 font-medium text-gray-700 sm:w-32">웹 프로그램</dt>
				<dd class="text-gray-600">Svelte, SvelteKit, TypeScript, Tailwind CSS, Python (FastAPI)</dd>
			</div>
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
				<dt class="shrink-0 font-medium text-gray-700 sm:w-32">크롬 익스텐션</dt>
				<dd class="text-gray-600">JavaScript, Svelte</dd>
			</div>
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
				<dt class="shrink-0 font-medium text-gray-700 sm:w-32">매크로</dt>
				<dd class="text-gray-600">Python (Selenium)</dd>
			</div>
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
				<dt class="shrink-0 font-medium text-gray-700 sm:w-32">게임</dt>
				<dd class="text-gray-600">Python (pygame), JavaScript (Three.js, phaser3)</dd>
			</div>
		</dl>
		<div class="mt-4 border-t border-gray-200/80 pt-3 text-sm text-gray-600">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
				<dt class="shrink-0 font-medium text-gray-700 sm:w-32">바이브 코딩</dt>
				<dd class="text-gray-600">Cursor (Opus 4.6, Sonnet 4.6)</dd>
			</div>
		</div>
	</div>

	<div class="space-y-10 print:space-y-4">
		{#each categories as cat (cat.id)}
			<div>
				<h3
					class="mb-4 flex flex-wrap items-baseline gap-x-2 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900 print:mb-2 print:border-0 print:pb-0 print:text-base"
				>
					<span>{cat.title}</span>
					<span class="text-base font-normal text-gray-500">({cat.projects.length}개)</span>
				</h3>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each cat.projects as project (project.githubUrl)}
						<article
							class="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
						>
							<div class="mb-2 flex flex-wrap items-start justify-between gap-2">
								<h4 class="min-w-0 flex-1 text-base leading-snug font-semibold text-gray-900">
									{project.title}
								</h4>
								<span
									class="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium {implClass(
										project
									)}"
								>
									{implLabel(project)}
								</span>
							</div>

							{#if project.description}
								<p class="mb-3 text-sm leading-relaxed text-gray-600">
									{project.description}
								</p>
							{/if}

							<div class="mb-3 flex flex-wrap gap-1.5">
								{#each project.stack as tech, i (`${project.githubUrl}-stack-${i}`)}
									<span class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
										{tech}
									</span>
								{/each}
							</div>

							<div class="mt-auto flex flex-wrap gap-3 pt-1 text-sm">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="external noopener noreferrer"
									class="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600"
								>
									<Github class="h-4 w-4" />
									GitHub
									<ExternalLink class="h-3 w-3 opacity-70" />
								</a>
								{#if project.deployUrl}
									<a
										href={project.deployUrl}
										target="_blank"
										rel="external noopener noreferrer"
										class="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600"
									>
										<Globe class="h-4 w-4" />
										배포
										<ExternalLink class="h-3 w-3 opacity-70" />
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Section>
