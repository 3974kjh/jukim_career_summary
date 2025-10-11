# 프로젝트 구조

이 문서는 프로젝트의 전체 구조와 각 파일/폴더의 역할을 설명합니다.

## 디렉토리 구조

```
career_summary/
├── src/
│   ├── lib/                          # 재사용 가능한 라이브러리
│   │   ├── components/               # Svelte 컴포넌트
│   │   │   ├── common/              # 공통 컴포넌트
│   │   │   │   ├── Section.svelte           # 섹션 래퍼 컴포넌트
│   │   │   │   └── ProfileImage.svelte      # 프로필 이미지 컴포넌트
│   │   │   ├── ui/                  # UI 컴포넌트
│   │   │   │   ├── ExperienceCard.svelte   # 경력 카드
│   │   │   │   ├── SkillGroup.svelte       # 스킬 그룹
│   │   │   │   ├── SkillBadge.svelte       # 스킬 뱃지
│   │   │   │   └── LinkButton.svelte       # 링크 버튼
│   │   │   └── sections/            # 페이지 섹션
│   │   │       ├── ProfileSection.svelte        # 프로필 섹션
│   │   │       ├── IntroduceSection.svelte      # 소개 섹션
│   │   │       ├── SkillSection.svelte          # 기술 섹션
│   │   │       ├── ExperienceSection.svelte     # 경력 섹션
│   │   │       ├── EducationSection.svelte      # 학력 섹션
│   │   │       ├── PresentationSection.svelte   # 발표 섹션
│   │   │       ├── EtcSection.svelte            # 기타 섹션
│   │   │       └── ArticleSection.svelte        # 아티클 섹션
│   │   ├── data/                     # 데이터
│   │   │   └── resume.ts                    # 이력서 데이터
│   │   ├── utils/                    # 유틸리티 함수
│   │   │   └── techIcons.ts                 # 기술 스택 아이콘 설정
│   │   ├── assets/                   # 에셋 파일
│   │   │   └── favicon.svg
│   │   ├── types.ts                  # TypeScript 타입 정의
│   │   └── index.ts                  # 라이브러리 exports
│   ├── routes/                       # SvelteKit 라우트
│   │   ├── +layout.svelte           # 전역 레이아웃
│   │   └── +page.svelte             # 메인 페이지
│   ├── app.css                       # 전역 스타일
│   ├── app.d.ts                      # 앱 타입 정의
│   └── app.html                      # HTML 템플릿
├── static/                           # 정적 파일
│   └── robots.txt
├── eslint.config.js                  # ESLint 설정
├── svelte.config.js                  # Svelte 설정
├── tsconfig.json                     # TypeScript 설정
├── vite.config.ts                    # Vite 설정
├── package.json                      # 패키지 설정
├── README.md                         # 프로젝트 소개
├── USAGE_GUIDE.md                    # 사용 가이드
├── EXAMPLES.md                       # 예제 모음
└── PROJECT_STRUCTURE.md              # 이 문서
```

## 주요 파일 설명

### 컴포넌트

#### Common Components (공통)

**Section.svelte**
- 모든 섹션의 기본 래퍼
- 제목, 부제목, 콘텐츠 영역 제공
- Props: `title`, `subtitle?`, `id?`, `children`

**ProfileImage.svelte**
- 프로필 이미지 표시
- 이미지가 없을 경우 플레이스홀더 표시
- Props: `src?`, `alt`, `size?` ('sm'|'md'|'lg')

#### UI Components (UI 요소)

**ExperienceCard.svelte**
- 경력 정보를 카드 형태로 표시
- 회사명, 기간, 직책, 성과, 기술 스택 포함
- Props: `experience: Experience`

**SkillGroup.svelte**
- 카테고리별 기술 스택 그룹
- Props: `skill: Skill`

**SkillBadge.svelte**
- 개별 기술 뱃지
- 기술명에 따라 동적으로 색상 적용
- Props: `skill: string`

**LinkButton.svelte**
- 아이콘과 레이블이 있는 링크 버튼
- Props: `href`, `icon?`, `label?`, `external?`

#### Section Components (섹션)

각 섹션 컴포넌트는 해당 영역의 데이터를 받아서 표시합니다.

- **ProfileSection**: 프로필 정보와 연락처
- **IntroduceSection**: 자기소개 텍스트
- **SkillSection**: 기술 스택 그리드
- **ExperienceSection**: 경력 리스트
- **EducationSection**: 학력 정보
- **PresentationSection**: 발표/강연 이력
- **EtcSection**: 기타 활동 (수상, 자격증 등)
- **ArticleSection**: 작성 글 목록

### 데이터 및 타입

**types.ts**
```typescript
// 모든 데이터 타입 정의
interface Profile { ... }
interface Skill { ... }
interface Experience { ... }
interface Education { ... }
interface Presentation { ... }
interface Article { ... }
interface EtcItem { ... }
```

**data/resume.ts**
```typescript
// 실제 이력서 데이터
export const profile: Profile = { ... }
export const skills: Skill[] = [ ... ]
export const experiences: Experience[] = [ ... ]
// ...
```

**utils/techIcons.ts**
```typescript
// 기술 스택별 색상 설정
export const techIconMap: Record<string, TechIconConfig> = { ... }
export function getTechIconConfig(techName: string): TechIconConfig
```

### 라우트

**+layout.svelte**
- 전역 레이아웃
- 메타데이터, 파비콘 설정
- app.css import

**+page.svelte**
- 메인 페이지
- 모든 섹션 컴포넌트 조합
- 네비게이션 바
- 푸터

### 스타일

**app.css**
- TailwindCSS import
- 전역 스타일
- 프린트 미디어 쿼리
- 폰트 설정

### 설정 파일

**svelte.config.js**
- SvelteKit 설정
- Adapter 설정

**vite.config.ts**
- Vite 빌드 설정
- SvelteKit 플러그인

**tsconfig.json**
- TypeScript 컴파일러 옵션
- Path alias 설정 ($lib)

**eslint.config.js**
- ESLint 규칙
- Svelte 플러그인

## 컴포넌트 계층 구조

```
+page.svelte (메인 페이지)
├── ProfileSection
│   ├── ProfileImage
│   └── LinkButton (여러 개)
├── IntroduceSection
│   └── Section
├── SkillSection
│   └── Section
│       └── SkillGroup (여러 개)
│           └── SkillBadge (여러 개)
├── ExperienceSection
│   └── Section
│       └── ExperienceCard (여러 개)
│           └── SkillBadge (여러 개)
├── PresentationSection
│   └── Section
├── EducationSection
│   └── Section
├── EtcSection
│   └── Section
└── ArticleSection
    └── Section
```

## 데이터 흐름

```
resume.ts (데이터 정의)
    ↓
+page.svelte (데이터 import)
    ↓
Section Components (props로 데이터 전달)
    ↓
UI Components (세부 데이터 표시)
```

## 스타일링 전략

### TailwindCSS 유틸리티 클래스

모든 스타일은 TailwindCSS 유틸리티 클래스를 사용합니다.

**색상 팔레트:**
- Primary: Blue (blue-50 ~ blue-700)
- Secondary: Purple (purple-50 ~ purple-700)
- Success: Green (green-50 ~ green-700)
- Warning: Orange (orange-50 ~ orange-700)
- Error: Red (red-50 ~ red-700)
- Neutral: Gray (gray-50 ~ gray-900)

**반응형 브레이크포인트:**
- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상

**일관된 간격:**
- 섹션 간: `mb-12` (48px)
- 카드 간: `space-y-6` (24px)
- 요소 간: `gap-4` (16px)

## 확장 가능한 구조

### 새 섹션 추가하기

1. `src/lib/types.ts`에 타입 정의
2. `src/lib/components/sections/`에 컴포넌트 생성
3. `src/lib/data/resume.ts`에 데이터 추가
4. `src/lib/index.ts`에 export 추가
5. `src/routes/+page.svelte`에 컴포넌트 사용

### 새 UI 컴포넌트 추가하기

1. `src/lib/components/ui/`에 컴포넌트 생성
2. Props 인터페이스 정의
3. `src/lib/index.ts`에 export 추가
4. 필요한 곳에서 import하여 사용

### 스타일 테마 변경하기

1. 각 컴포넌트의 색상 클래스 수정
2. `techIcons.ts`의 색상 매핑 수정
3. 일관성 유지를 위해 전체 컴포넌트에 동일한 색상 적용

## 빌드 및 배포

### 개발 모드
```bash
npm run dev
# http://localhost:5173
```

### 프로덕션 빌드
```bash
npm run build
# build/ 폴더에 결과물 생성
```

### 타입 체크
```bash
npm run check
```

### 린트
```bash
npm run lint
```

### 포맷팅
```bash
npm run format
```

## 성능 최적화

### 이미지 최적화
- WebP 포맷 사용 권장
- 적절한 크기로 리사이징
- lazy loading 고려

### 코드 스플리팅
- SvelteKit이 자동으로 처리
- 동적 import 사용 가능

### CSS 최적화
- TailwindCSS가 사용하지 않는 클래스 제거
- 프로덕션 빌드 시 자동 최적화

## 접근성

### ARIA 레이블
- 주요 섹션에 적절한 id 부여
- 네비게이션 링크에 의미있는 텍스트

### 키보드 네비게이션
- 모든 링크와 버튼 접근 가능
- Focus 스타일 적용

### 시맨틱 HTML
- 적절한 heading 계층
- section, nav, main, footer 태그 사용

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 라이선스

MIT License

---

더 자세한 정보가 필요하시면 다른 문서를 참고하세요:
- [README.md](./README.md) - 프로젝트 개요
- [USAGE_GUIDE.md](./USAGE_GUIDE.md) - 사용법
- [EXAMPLES.md](./EXAMPLES.md) - 예제 코드

