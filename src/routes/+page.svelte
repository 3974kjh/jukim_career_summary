<script lang="ts">
	import { browser } from '$app/environment';
	import ProfileSection from '$lib/components/sections/ProfileSection.svelte';
	import IntroduceSection from '$lib/components/sections/IntroduceSection.svelte';
	import SkillSection from '$lib/components/sections/SkillSection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
	import EducationSection from '$lib/components/sections/EducationSection.svelte';
	import ArticleSection from '$lib/components/sections/ArticleSection.svelte';
	import PersonalProjectsSection from '$lib/components/sections/PersonalProjectsSection.svelte';

	import { profile, introduce, skills, experiences, educations, articles } from '$lib/data/resume';
	import { personalProjectCategories } from '$lib/data/personalProjects';
	import { getTotalCareerLabel } from '$lib/utils/careerDuration';
	import { FileDown } from 'lucide-svelte';

	const totalCareerLabel = $derived(getTotalCareerLabel(experiences));

	function savePageAsPdf() {
		if (!browser) return;
		window.print();
	}
</script>

<svelte:head>
	<title>{profile.name} - Career Summary</title>
	<meta name="description" content="{profile.name}의 경력기술서" />
</svelte:head>

<div class="min-h-screen bg-gray-50 print:min-h-0 print:bg-white">
	<!-- Header/Navigation -->
	<nav class="no-print sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
		<div class="container mx-auto px-4">
			<div class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
				<h1 class="text-xl font-bold text-gray-900">{`${profile.name} - 경력기술서`}</h1>
				<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-x-6">
					<a href="#introduce" class="text-gray-600 hover:text-gray-900">소개</a>
					<a href="#skills" class="text-gray-600 hover:text-gray-900">기술</a>
					<a href="#experience" class="text-gray-600 hover:text-gray-900">경력</a>
					<a href="#education" class="text-gray-600 hover:text-gray-900">학력</a>
					<a href="#personal-projects" class="text-gray-600 hover:text-gray-900">개인 프로젝트</a>
					<a href="#articles" class="text-gray-600 hover:text-gray-900">아티클</a>
					<button
						type="button"
						class="no-print inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 font-medium text-gray-800 shadow-sm hover:bg-gray-50"
						onclick={savePageAsPdf}
					>
						<FileDown class="h-4 w-4 shrink-0" aria-hidden="true" />
						PDF 다운로드
					</button>
				</div>
			</div>
		</div>
	</nav>

	<!-- PDF/인쇄 전용 머리글 (화면에서는 숨김) -->
	<header
		class="hidden print:mb-3 print:block print:border-b-2 print:border-gray-300 print:pb-2 print:pt-0"
	>
		<div class="container mx-auto max-w-5xl px-4 print:max-w-none print:px-0">
			<div class="flex justify-start">
				<p class="text-lg font-bold tracking-tight text-gray-900">{profile.name} - 경력기술서</p>
			</div>
			<p class="mt-0.5 text-left text-xs text-gray-500">Career Summary</p>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto px-4 py-8 print:max-w-none print:px-0 print:py-0">
		<div class="mx-auto max-w-5xl print:max-w-none">
			<!-- Profile -->
			<ProfileSection {profile} />

			<!-- Introduce -->
			<IntroduceSection content={introduce.content} updatedDate={introduce.updatedDate} />

			<!-- Skills -->
			<SkillSection {skills} />

			<!-- Experience -->
			<ExperienceSection {experiences} totalDuration={totalCareerLabel} />

			<!-- Education -->
			<EducationSection {educations} />

			<!-- Personal projects -->
			<PersonalProjectsSection categories={personalProjectCategories} />

			<!-- Articles -->
			<ArticleSection {articles} />
		</div>
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-200 bg-white py-8 print:mt-2 print:border-t-0 print:py-0 print:pt-2 print:text-xs">
		<div class="container mx-auto px-4 text-center text-sm text-gray-600 print:max-w-none">
			<p>© 2025 {profile.name}. All rights reserved.</p>
			<p class="no-print mt-2">Built with SvelteKit & TailwindCSS</p>
		</div>
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
