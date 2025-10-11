# 사용 가이드

이 문서는 경력기술서를 개인화하는 방법을 단계별로 안내합니다.

## 목차

1. [기본 정보 수정](#1-기본-정보-수정)
2. [프로필 이미지 추가](#2-프로필-이미지-추가)
3. [자기소개 작성](#3-자기소개-작성)
4. [기술 스택 추가](#4-기술-스택-추가)
5. [경력 사항 작성](#5-경력-사항-작성)
6. [학력 정보 추가](#6-학력-정보-추가)
7. [발표 경력 추가](#7-발표-경력-추가)
8. [기타 활동 추가](#8-기타-활동-추가)
9. [아티클 목록 추가](#9-아티클-목록-추가)
10. [스타일 커스터마이징](#10-스타일-커스터마이징)

---

## 1. 기본 정보 수정

`src/lib/data/resume.ts` 파일을 열고 `profile` 객체를 수정하세요.

```typescript
export const profile: Profile = {
	name: '본인의 이름',
	email: 'your-email@example.com',
	phone: '010-XXXX-XXXX', // 선택사항
	links: {
		github: 'https://github.com/username',
		linkedin: 'https://linkedin.com/in/username',
		blog: 'https://blog.example.com',
		wiki: 'https://wiki.example.com',
		facebook: 'https://facebook.com/username' // 선택사항
	}
};
```

### 필수 필드
- `name`: 이름
- `email`: 이메일 주소

### 선택 필드
- `phone`: 전화번호
- `links.*`: 각 소셜 링크 (필요한 것만 포함)
- `image`: 프로필 이미지 경로

---

## 2. 프로필 이미지 추가

### 방법 1: Static 폴더 사용 (권장)

1. 이미지 파일을 `static/` 폴더에 복사
   ```
   static/
   └── profile.jpg  ← 여기에 이미지 추가
   ```

2. `resume.ts`에서 이미지 경로 설정
   ```typescript
   export const profile: Profile = {
		// ...
		image: '/profile.jpg'
   };
   ```

### 방법 2: Assets 폴더 사용

1. 이미지를 `src/lib/assets/` 폴더에 추가
2. 이미지를 import하여 사용
   ```typescript
   import profileImage from '$lib/assets/profile.jpg';
   
   export const profile: Profile = {
		// ...
		image: profileImage
   };
   ```

### 이미지 권장 사양
- **크기**: 400x400px 이상
- **비율**: 1:1 (정사각형)
- **포맷**: JPG, PNG, WebP
- **용량**: 500KB 이하 권장

---

## 3. 자기소개 작성

`introduce` 객체를 수정하여 자기소개를 작성하세요.

```typescript
export const introduce = {
	content: `첫 번째 문단입니다.

두 번째 문단입니다. (빈 줄로 구분)

세 번째 문단입니다.`,
	updatedDate: '2025. 10. 11'
};
```

### 팁
- 여러 문단을 작성할 때는 빈 줄로 구분
- 줄바꿈은 자동으로 처리됩니다
- 너무 길지 않게 3-5문단 정도가 적당합니다

---

## 4. 기술 스택 추가

`skills` 배열에 본인의 기술 스택을 추가하세요.

```typescript
export const skills: Skill[] = [
	{
		category: '카테고리 이름',
		items: ['기술1', '기술2', '기술3']
	},
	{
		category: 'Frontend',
		items: ['React', 'Vue.js', 'Svelte', 'TypeScript']
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Python', 'Django', 'PostgreSQL']
	}
];
```

### 카테고리 예시
- Languages
- Frontend
- Backend
- Database
- DevOps & Tools
- Mobile
- Testing
- Design Tools

---

## 5. 경력 사항 작성

`experiences` 배열에 경력을 추가하세요. 최신 경력부터 작성하는 것이 일반적입니다.

```typescript
export const experiences: Experience[] = [
	{
		company: '회사명',
		period: '2023. 01 ~ 현재',
		duration: '2년 9개월',
		position: '직책/직급',
		description: '담당 업무에 대한 간단한 설명',
		achievements: [
			'주요 성과 1',
			'주요 성과 2',
			'주요 성과 3'
		],
		skills: ['사용한', '기술', '스택'],
		current: true  // 현재 재직중이면 true
	},
	{
		company: '이전 회사',
		period: '2021. 03 ~ 2022. 12',
		duration: '1년 10개월',
		position: '직책',
		description: '업무 설명',
		achievements: [
			'성과 1',
			'성과 2'
		],
		skills: ['React', 'Node.js'],
		current: false
	}
];
```

### 작성 팁
- **구체적인 숫자 포함**: "성능 40% 개선", "사용자 1만명 증가"
- **기술적 깊이**: 사용한 기술과 해결한 문제를 명확히
- **비즈니스 임팩트**: 기술이 비즈니스에 준 영향 설명

---

## 6. 학력 정보 추가

```typescript
export const educations: Education[] = [
	{
		school: '대학교 이름',
		period: '2015. 03 ~ 2019. 02',
		degree: '학사 졸업',
		major: '전공명'  // 선택사항
	},
	{
		school: '고등학교 이름',
		period: '2012. 03 ~ 2015. 02',
		degree: '졸업'
	}
];
```

---

## 7. 발표 경력 추가

```typescript
export const presentations: Presentation[] = [
	{
		title: '발표 제목',
		date: '2024. 09',
		venue: '행사명',
		description: '발표에 대한 간단한 설명',  // 선택사항
		link: 'https://slides.example.com'  // 선택사항
	}
];
```

---

## 8. 기타 활동 추가

수상 경력, 자격증, 커뮤니티 활동 등을 추가하세요.

```typescript
export const etcItems: EtcItem[] = [
	{
		title: '활동 제목',
		period: '2024. 01 ~ 현재',
		description: '활동 내용 설명'
	},
	{
		title: '자격증명',
		period: '2023. 06',
		description: '발급 기관 및 세부 정보'
	}
];
```

---

## 9. 아티클 목록 추가

블로그 포스트나 작성한 글을 추가하세요.

```typescript
export const articles: Article[] = [
	{
		title: '글 제목',
		date: '2024.10.05',
		link: 'https://blog.example.com/post-url'  // 선택사항
	},
	{
		title: '다른 글 제목',
		date: '2024.09.20'
	}
];
```

---

## 10. 스타일 커스터마이징

### 색상 테마 변경

주 색상을 변경하려면 컴포넌트의 Tailwind 클래스를 수정하세요.

예: `SkillBadge.svelte`의 파란색을 보라색으로 변경
```svelte
<!-- 기존 -->
<span class="... bg-blue-50 ... text-blue-700 ... hover:bg-blue-100">

<!-- 변경 -->
<span class="... bg-purple-50 ... text-purple-700 ... hover:bg-purple-100">
```

### 폰트 변경

`src/app.css`의 font-family를 수정하세요.

```css
body {
	font-family: 'Pretendard', -apple-system, sans-serif;
}
```

외부 폰트 사용 시 `src/routes/+layout.svelte`에 링크 추가:

```svelte
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
</svelte:head>
```

### 레이아웃 간격 조정

`+page.svelte`의 섹션 간격을 조정하세요:

```svelte
<!-- Section.svelte에서 -->
<section class="mb-12">  ← 이 값을 변경 (mb-8, mb-16 등)
```

---

## 자주 묻는 질문 (FAQ)

### Q: 특정 섹션을 숨기고 싶어요
A: `+page.svelte`에서 해당 컴포넌트를 주석 처리하거나 삭제하세요.

```svelte
<!-- <PresentationSection {presentations} /> -->
```

### Q: 섹션 순서를 변경하고 싶어요
A: `+page.svelte`에서 컴포넌트의 순서를 변경하세요.

### Q: 프로필 이미지 크기를 변경하고 싶어요
A: `ProfileSection.svelte`의 `ProfileImage` 컴포넌트에 size prop을 전달하세요.

```svelte
<ProfileImage src={profile.image} alt={profile.name} size="md" />
```
- 옵션: `"sm"`, `"md"`, `"lg"` (기본값)

### Q: PDF로 내보내고 싶어요
A: 브라우저의 인쇄 기능 사용:
1. Ctrl/Cmd + P
2. "PDF로 저장" 선택
3. 여백을 "없음"으로 설정
4. "배경 그래픽" 체크

### Q: 배포는 어떻게 하나요?
A: 다양한 방법이 있습니다:

**Vercel (권장)**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# build 폴더를 Netlify에 업로드
```

**GitHub Pages**
```bash
# svelte.config.js에서 adapter-static 설정
npm run build
# build 폴더를 GitHub Pages에 배포
```

---

## 도움이 필요하신가요?

- GitHub Issues에 질문을 남겨주세요
- 예제를 참고하여 작성해보세요
- README.md의 기술 스택 문서를 확인하세요

좋은 경력기술서 만들기를 응원합니다! 🎉

