# 빠른 참조 가이드

자주 사용하는 명령어와 수정 방법을 한눈에 보기 위한 치트시트입니다.

## 🚀 명령어

```bash
# 개발 서버 실행
npm run dev

# 타입 체크
npm run check

# 린트 체크
npm run lint

# 코드 포맷팅
npm run format

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📝 빠른 수정 가이드

### 이름/이메일 변경
📁 `src/lib/data/resume.ts` 1-10번째 줄
```typescript
export const profile: Profile = {
	name: '여기를 수정',
	email: 'your@email.com',
	// ...
};
```

### 자기소개 변경
📁 `src/lib/data/resume.ts` 15번째 줄
```typescript
export const introduce = {
	content: `자기소개를 여기에`,
	// ...
};
```

### 기술 스택 변경
📁 `src/lib/data/resume.ts` 30번째 줄
```typescript
export const skills: Skill[] = [
	{ category: '카테고리명', items: ['기술1', '기술2'] }
];
```

### 경력 추가
📁 `src/lib/data/resume.ts` 60번째 줄
```typescript
export const experiences: Experience[] = [
	{
		company: '회사명',
		period: '2023. 01 ~ 현재',
		// ...
	}
];
```

### 프로필 이미지 추가
1. 이미지를 `static/` 폴더에 복사
2. 📁 `src/lib/data/resume.ts`
```typescript
export const profile: Profile = {
	// ...
	image: '/your-image.jpg'  // 이 줄 추가
};
```

### 섹션 숨기기
📁 `src/routes/+page.svelte`
```svelte
<!-- 주석 처리로 섹션 숨김 -->
<!-- <PresentationSection {presentations} /> -->
```

### 색상 변경
각 컴포넌트에서 TailwindCSS 클래스 수정:
- `bg-blue-50` → `bg-purple-50`
- `text-blue-700` → `text-purple-700`

## 📂 주요 파일 위치

| 파일 | 경로 | 용도 |
|------|------|------|
| 데이터 | `src/lib/data/resume.ts` | 모든 개인 정보 |
| 메인 페이지 | `src/routes/+page.svelte` | 레이아웃 구성 |
| 스타일 | `src/app.css` | 전역 스타일 |
| 타입 | `src/lib/types.ts` | TypeScript 타입 |

## 🎨 색상 코드

```typescript
// Primary Colors
blue-50, blue-100, blue-700    // 파란색
purple-50, purple-100, purple-700  // 보라색
green-50, green-100, green-700   // 초록색
orange-50, orange-100, orange-700  // 주황색
gray-50, gray-100, gray-700     // 회색
```

## 🔧 컴포넌트 Import

```typescript
// 개별 컴포넌트
import { SkillSection } from '$lib';

// 타입
import type { Skill } from '$lib';

// 데이터
import { skills } from '$lib';
```

## 📱 반응형 브레이크포인트

```css
/* Mobile first */
.class { }                    /* 모든 화면 */
.sm:class { }                 /* 640px 이상 */
.md:class { }                 /* 768px 이상 */
.lg:class { }                 /* 1024px 이상 */
```

## 🖨️ 프린트/PDF

1. `Ctrl/Cmd + P` 열기
2. "PDF로 저장" 선택
3. 옵션 조정:
   - 여백: 없음
   - 배경 그래픽: 체크
   - 용지 크기: A4

## 🚀 배포 플랫폼

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# build 폴더 업로드
```

### GitHub Pages
1. adapter-static 설정
2. `npm run build`
3. build 폴더 배포

## ❓ 문제 해결

### 개발 서버가 안 열려요
```bash
# 포트가 사용 중일 수 있습니다
npm run dev -- --port 3000
```

### 타입 에러가 나요
```bash
npm run check
# 에러 메시지 확인 후 수정
```

### 스타일이 안 먹혀요
```bash
# TailwindCSS가 제대로 로드되는지 확인
# app.css의 @import 'tailwindcss' 확인
```

### 이미지가 안 보여요
- `static/` 폴더에 이미지가 있는지 확인
- 경로가 `/image.jpg` 형식인지 확인

## 📊 프로젝트 구조 (한눈에)

```
career_summary/
├── 📄 문서들 (8개)
├── ⚙️ 설정 파일들
└── src/
    ├── lib/
    │   ├── components/ (14개)
    │   ├── data/resume.ts ← 여기를 수정!
    │   ├── types.ts
    │   └── utils/
    └── routes/
        ├── +layout.svelte
        └── +page.svelte ← 레이아웃 조정
```

## 💡 꿀팁

### 빠른 개발
1. `resume.ts`만 수정하면 대부분 완성
2. 저장하면 자동 새로고침
3. 타입스크립트가 자동완성 제공

### 프로필 이미지 최적화
- 크기: 400x400px
- 포맷: WebP (가장 작음)
- 용량: 200KB 이하

### 성능 팁
- 이미지는 static 폴더 사용
- 불필요한 섹션은 주석 처리
- 빌드 후 Lighthouse로 확인

### SEO 개선
`+page.svelte`에서 메타 태그 수정:
```svelte
<svelte:head>
	<title>이름 - 직책</title>
	<meta name="description" content="설명" />
</svelte:head>
```

## 🎯 체크리스트

시작할 때:
- [ ] `npm install` 실행
- [ ] `npm run dev` 실행
- [ ] 브라우저에서 확인

개인화:
- [ ] 이름/이메일 수정
- [ ] 자기소개 작성
- [ ] 기술 스택 입력
- [ ] 경력 사항 추가
- [ ] 학력 정보 입력
- [ ] 프로필 이미지 추가

배포 전:
- [ ] 모든 정보 검토
- [ ] `npm run check` 통과
- [ ] `npm run build` 성공
- [ ] 프린트 테스트
- [ ] 모바일에서 확인

## 🔗 유용한 링크

| 링크 | 용도 |
|------|------|
| [Svelte 문서](https://svelte.dev) | Svelte 학습 |
| [TailwindCSS 문서](https://tailwindcss.com) | 스타일링 |
| [Lucide Icons](https://lucide.dev) | 아이콘 검색 |
| [TypeScript 문서](https://typescriptlang.org) | 타입 관련 |

---

**더 자세한 내용은 [USAGE_GUIDE.md](./USAGE_GUIDE.md)를 참고하세요!**

