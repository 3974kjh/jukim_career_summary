# 경력기술서 (Career Summary)

재사용 가능한 Svelte 컴포넌트로 구축된 현대적이고 반응형 경력기술서 웹사이트입니다.

## 📚 문서 빠른 링크

| 문서 | 설명 | 추천 대상 |
|------|------|-----------|
| **[빠른 시작 (5분)](./GETTING_STARTED.md)** | 가장 빠르게 시작하기 | 🚀 모든 사용자 |
| [상세 가이드](./USAGE_GUIDE.md) | 모든 기능 설명 | 📖 커스터마이징 필요시 |
| [예제 모음](./EXAMPLES.md) | 고급 사용법 | 💡 확장 개발시 |
| [프로젝트 구조](./PROJECT_STRUCTURE.md) | 기술 문서 | 🔧 개발자 |
| [기여 가이드](./CONTRIBUTING.md) | 기여 방법 | 🤝 기여자 |
| [변경 이력](./CHANGELOG.md) | 버전 히스토리 | 📋 업데이트 확인 |
| [전체 요약](./SUMMARY.md) | 프로젝트 요약 | ✨ 개요 파악 |

> 💡 **처음이신가요?** [빠른 시작 가이드](./GETTING_STARTED.md)를 먼저 읽어보세요!

## 🎯 특징

- **컴포넌트 기반 구조**: 각 섹션이 독립적인 재사용 가능한 컴포넌트로 구성
- **타입 안전성**: TypeScript를 활용한 타입 안전한 데이터 관리
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 레이아웃
- **인쇄 최적화**: CSS 미디어 쿼리를 통한 인쇄용 스타일 적용
- **현대적인 UI**: TailwindCSS를 활용한 깔끔하고 전문적인 디자인
- **아이콘 지원**: Lucide Icons를 활용한 직관적인 UI

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 pnpm

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 열기
# http://localhost:5173
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── lib/
│   ├── components/
│   │   ├── common/          # 공통 컴포넌트
│   │   │   ├── Section.svelte
│   │   │   └── ProfileImage.svelte
│   │   ├── ui/              # UI 컴포넌트
│   │   │   ├── ExperienceCard.svelte
│   │   │   ├── SkillGroup.svelte
│   │   │   ├── SkillBadge.svelte
│   │   │   └── LinkButton.svelte
│   │   └── sections/        # 섹션 컴포넌트
│   │       ├── ProfileSection.svelte
│   │       ├── IntroduceSection.svelte
│   │       ├── SkillSection.svelte
│   │       ├── ExperienceSection.svelte
│   │       ├── EducationSection.svelte
│   │       ├── PresentationSection.svelte
│   │       ├── EtcSection.svelte
│   │       └── ArticleSection.svelte
│   ├── data/
│   │   └── resume.ts        # 경력 데이터
│   ├── types.ts             # TypeScript 타입 정의
│   └── index.ts             # 라이브러리 내보내기
└── routes/
    └── +page.svelte         # 메인 페이지
```

## 🎨 커스터마이징

### 1. 개인 정보 수정

`src/lib/data/resume.ts` 파일을 열어 본인의 정보로 수정하세요:

```typescript
export const profile: Profile = {
	name: '홍길동',                    // 이름을 수정하세요
	email: 'hong@example.com',         // 이메일을 수정하세요
	phone: '010-1234-5678',            // 전화번호를 수정하세요
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		blog: 'https://blog.example.com',
		wiki: 'https://wiki.example.com'
	},
	// image: '/path/to/your/profile-image.jpg' // 주석 해제하고 경로 설정
};
```

### 2. 프로필 이미지 추가

프로필 이미지를 추가하려면:

1. 이미지 파일을 `static/` 폴더에 복사 (예: `static/profile.jpg`)
2. `resume.ts`에서 이미지 경로 설정:

```typescript
export const profile: Profile = {
	// ... 다른 정보
	image: '/profile.jpg'  // static 폴더 기준 경로
};
```

### 3. 경력 정보 수정

`resume.ts`의 각 섹션을 수정하여 본인의 경력을 입력하세요:

- `introduce`: 자기소개
- `skills`: 기술 스택
- `experiences`: 경력 사항
- `educations`: 학력
- `presentations`: 발표 경력
- `etcItems`: 기타 활동
- `articles`: 작성한 글

### 4. 스타일 커스터마이징

TailwindCSS를 사용하므로 각 컴포넌트의 클래스를 수정하여 스타일을 변경할 수 있습니다.

색상 테마를 변경하려면 컴포넌트의 색상 클래스를 수정하세요:
- `bg-blue-500` → `bg-purple-500` (보라색으로 변경)
- `text-blue-600` → `text-green-600` (초록색으로 변경)

## 🧩 재사용 가능한 컴포넌트

모든 컴포넌트는 독립적으로 재사용 가능합니다:

```svelte
<script>
	import { SkillSection, ExperienceCard } from '$lib';
	import type { Skill, Experience } from '$lib';

	const mySkills: Skill[] = [
		{ category: 'Frontend', items: ['React', 'Svelte'] }
	];
</script>

<SkillSection skills={mySkills} />
```

## 📱 반응형 디자인

- **모바일**: 단일 컬럼 레이아웃
- **태블릿**: 2컬럼 그리드 (스킬 섹션)
- **데스크톱**: 3컬럼 그리드 (스킬 섹션)

## 🖨️ 인쇄 지원

브라우저의 인쇄 기능을 사용하여 PDF로 변환할 수 있습니다:
1. `Ctrl/Cmd + P`로 인쇄 대화상자 열기
2. "PDF로 저장" 선택
3. 여백과 배경 그래픽 옵션 조정

## 🛠️ 기술 스택

- **프레임워크**: SvelteKit
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **아이콘**: Lucide Icons
- **빌드 도구**: Vite

## 📝 라이선스

MIT License

## 🤝 기여

이슈와 풀 리퀘스트는 언제든 환영합니다!

## 📞 문의

질문이나 제안사항이 있으시면 이슈를 등록해주세요.
