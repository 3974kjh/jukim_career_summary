<script lang="ts">
	import ProfileSection from '$lib/components/sections/ProfileSection.svelte';
	import IntroduceSection from '$lib/components/sections/IntroduceSection.svelte';
	import SkillSection from '$lib/components/sections/SkillSection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
	import EducationSection from '$lib/components/sections/EducationSection.svelte';
	import ArticleSection from '$lib/components/sections/ArticleSection.svelte';

	import {
		profile,
		introduce,
		skills,
		experiences,
		educations,
		articles,
		totalExperienceDuration
	} from '$lib/data/resume';
</script>

<svelte:head>
	<title>{profile.name} - Career Summary</title>
	<meta name="description" content="{profile.name}의 경력기술서" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header/Navigation -->
	<nav class="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
		<div class="container mx-auto px-4">
			<div class="flex items-center justify-between py-4">
				<h1 class="text-xl font-bold text-gray-900">{`${profile.name} - 경력기술서`}</h1>
				<div class="flex gap-6 text-sm">
					<a href="#introduce" class="text-gray-600 hover:text-gray-900">소개</a>
					<a href="#skills" class="text-gray-600 hover:text-gray-900">기술</a>
					<a href="#experience" class="text-gray-600 hover:text-gray-900">경력</a>
					<a href="#education" class="text-gray-600 hover:text-gray-900">학력</a>
					<a href="#articles" class="text-gray-600 hover:text-gray-900">아티클</a>
				</div>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="container mx-auto px-4 py-8">
		<div class="mx-auto max-w-5xl">
			<!-- Profile -->
			<ProfileSection {profile} />

			<!-- Introduce -->
			<IntroduceSection content={introduce.content} updatedDate={introduce.updatedDate} />

			<!-- Skills -->
			<SkillSection {skills} />

			<!-- Experience -->
			<ExperienceSection {experiences} totalDuration={totalExperienceDuration} />

			<!-- Education -->
			<EducationSection {educations} />

			<!-- Articles -->
			<ArticleSection {articles} />
		</div>
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-200 bg-white py-8">
		<div class="container mx-auto px-4 text-center text-sm text-gray-600">
			<p>© 2025 {profile.name}. All rights reserved.</p>
			<p class="mt-2">Built with SvelteKit & TailwindCSS</p>
		</div>
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
