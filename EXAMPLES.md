# 사용 예제

이 문서는 컴포넌트를 재사용하는 다양한 예제를 제공합니다.

## 목차

1. [개별 컴포넌트 사용](#개별-컴포넌트-사용)
2. [커스텀 페이지 만들기](#커스텀-페이지-만들기)
3. [데이터 동적 로딩](#데이터-동적-로딩)
4. [다국어 지원](#다국어-지원)
5. [테마 토글](#테마-토글)

---

## 개별 컴포넌트 사용

### ExperienceCard 단독 사용

```svelte
<script lang="ts">
	import { ExperienceCard } from '$lib';
	import type { Experience } from '$lib';

	const experience: Experience = {
		company: '테크 컴퍼니',
		period: '2023. 01 ~ 현재',
		duration: '2년',
		position: '시니어 개발자',
		description: '웹 서비스 개발',
		achievements: ['성과 1', '성과 2'],
		skills: ['React', 'TypeScript'],
		current: true
	};
</script>

<ExperienceCard {experience} />
```

### SkillSection만 표시하기

```svelte
<script lang="ts">
	import { SkillSection } from '$lib';
	import type { Skill } from '$lib';

	const mySkills: Skill[] = [
		{
			category: 'Frontend',
			items: ['React', 'Svelte', 'Vue.js']
		},
		{
			category: 'Backend',
			items: ['Node.js', 'Express', 'NestJS']
		}
	];
</script>

<SkillSection skills={mySkills} />
```

---

## 커스텀 페이지 만들기

### 간단한 포트폴리오 페이지

`src/routes/portfolio/+page.svelte`:

```svelte
<script lang="ts">
	import { ProfileSection, SkillSection, ExperienceSection } from '$lib';
	import type { Profile, Skill, Experience } from '$lib';

	const profile: Profile = {
		name: '홍길동',
		email: 'hong@example.com',
		links: {
			github: 'https://github.com/username'
		}
	};

	const skills: Skill[] = [
		{ category: 'Frontend', items: ['React', 'TypeScript'] }
	];

	const experiences: Experience[] = [
		{
			company: '회사명',
			period: '2023 ~ 현재',
			duration: '2년',
			position: '개발자',
			description: '설명',
			achievements: [],
			skills: ['React'],
			current: true
		}
	];
</script>

<div class="container mx-auto p-8">
	<ProfileSection {profile} />
	<SkillSection {skills} />
	<ExperienceSection {experiences} />
</div>
```

### 특정 섹션만 포함한 미니 이력서

```svelte
<script lang="ts">
	import { Section, ExperienceCard } from '$lib';
	import type { Experience } from '$lib';

	const recentExperience: Experience = {
		// ... 데이터
	};
</script>

<Section title="최근 경력" id="recent">
	{#snippet children()}
		<ExperienceCard experience={recentExperience} />
	{/snippet}
</Section>
```

---

## 데이터 동적 로딩

### API에서 데이터 가져오기

`src/routes/+page.ts`:

```typescript
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/resume');
	const data = await response.json();

	return {
		profile: data.profile,
		skills: data.skills,
		experiences: data.experiences
		// ...
	};
};
```

`src/routes/+page.svelte`:

```svelte
<script lang="ts">
	import { ProfileSection } from '$lib';
	
	let { data } = $props();
</script>

<ProfileSection profile={data.profile} />
```

### 로컬 JSON 파일에서 로드

`static/resume.json`:

```json
{
	"profile": {
		"name": "홍길동",
		"email": "hong@example.com"
	},
	"skills": [
		{
			"category": "Frontend",
			"items": ["React", "Svelte"]
		}
	]
}
```

`+page.ts`:

```typescript
export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/resume.json');
	return await response.json();
};
```

---

## 다국어 지원

### i18n 설정 예제

`src/lib/i18n/translations.ts`:

```typescript
export const translations = {
	ko: {
		introduce: '소개',
		skills: '기술',
		experience: '경력',
		education: '학력'
	},
	en: {
		introduce: 'Introduce',
		skills: 'Skills',
		experience: 'Experience',
		education: 'Education'
	}
};
```

`src/lib/stores/locale.ts`:

```typescript
import { writable } from 'svelte/store';

export const locale = writable<'ko' | 'en'>('ko');
```

`+page.svelte`:

```svelte
<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { translations } from '$lib/i18n/translations';
	
	const t = $derived(translations[$locale]);
</script>

<h2>{t.introduce}</h2>
```

---

## 테마 토글

### 다크모드 추가

`src/lib/stores/theme.ts`:

```typescript
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedTheme = browser ? localStorage.getItem('theme') ?? 'light' : 'light';

export const theme = writable<'light' | 'dark'>(storedTheme);

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
```

`+layout.svelte`:

```svelte
<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Moon, Sun } from 'lucide-svelte';
	
	function toggleTheme() {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	}
</script>

<button onclick={toggleTheme} class="fixed right-4 top-4">
	{#if $theme === 'light'}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>
```

`tailwind.config.js`:

```javascript
export default {
	darkMode: 'class',
	// ...
};
```

다크모드 스타일 적용:

```svelte
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
	<!-- 컨텐츠 -->
</div>
```

---

## 고급 예제

### 프린트 최적화 버전

```svelte
<script lang="ts">
	let isPrintMode = $state(false);
	
	function togglePrintMode() {
		isPrintMode = !isPrintMode;
	}
</script>

<button onclick={togglePrintMode} class="no-print">
	{isPrintMode ? '일반 모드' : '프린트 모드'}
</button>

<div class:print-optimized={isPrintMode}>
	<!-- 컨텐츠 -->
</div>

<style>
	.print-optimized {
		max-width: 210mm;
		font-size: 12pt;
	}
</style>
```

### 애니메이션 추가

```svelte
<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { ExperienceCard } from '$lib';
	
	let experiences = $state([]);
</script>

{#each experiences as experience, i (experience.company)}
	<div in:fly={{ y: 50, delay: i * 100 }}>
		<ExperienceCard {experience} />
	</div>
{/each}
```

### 검색 기능 추가

```svelte
<script lang="ts">
	import { ExperienceSection } from '$lib';
	import type { Experience } from '$lib';
	
	let searchQuery = $state('');
	let allExperiences: Experience[] = [...]; // 전체 경력
	
	const filteredExperiences = $derived(
		allExperiences.filter(exp => 
			exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
			exp.description.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<input
	type="search"
	bind:value={searchQuery}
	placeholder="경력 검색..."
	class="mb-4 w-full rounded-lg border p-2"
/>

<ExperienceSection experiences={filteredExperiences} />
```

---

## 컴포넌트 확장

### 커스텀 ExperienceCard

기존 컴포넌트를 래핑하여 확장:

```svelte
<script lang="ts">
	import { ExperienceCard } from '$lib';
	import type { Experience } from '$lib';
	
	interface Props {
		experience: Experience;
		showDetails?: boolean;
	}
	
	let { experience, showDetails = false }: Props = $props();
	let expanded = $state(showDetails);
</script>

<div>
	<button onclick={() => expanded = !expanded}>
		{expanded ? '접기' : '펼치기'}
	</button>
	
	{#if expanded}
		<ExperienceCard {experience} />
	{/if}
</div>
```

### 추가 정보가 있는 SkillBadge

```svelte
<script lang="ts">
	import { SkillBadge } from '$lib';
	
	interface Props {
		skill: string;
		level?: number; // 1-5
	}
	
	let { skill, level }: Props = $props();
</script>

<div class="flex items-center gap-2">
	<SkillBadge {skill} />
	{#if level}
		<div class="flex gap-0.5">
			{#each Array(5) as _, i}
				<div 
					class="h-2 w-2 rounded-full"
					class:bg-blue-500={i < level}
					class:bg-gray-300={i >= level}
				/>
			{/each}
		</div>
	{/if}
</div>
```

---

더 많은 예제와 패턴이 필요하시면 GitHub Issues에 요청해주세요!

