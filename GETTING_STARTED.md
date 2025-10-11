# 빠른 시작 가이드

이 가이드를 따라하면 5분 안에 나만의 경력기술서를 만들 수 있습니다! 🚀

## 📋 준비물

- Node.js 18.x 이상
- 텍스트 에디터 (VS Code 추천)
- 터미널

## 🎯 3단계로 시작하기

### 1단계: 프로젝트 실행 (1분)

터미널을 열고 다음 명령어를 실행하세요:

```bash
# 프로젝트 폴더로 이동
cd career_summary

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:5173 을 열면 샘플 경력기술서가 보입니다! ✨

### 2단계: 기본 정보 수정 (2분)

`src/lib/data/resume.ts` 파일을 열고 본인의 정보로 수정하세요:

```typescript
export const profile: Profile = {
	name: '본인 이름',           // 여기를 수정!
	email: 'your@email.com',     // 여기를 수정!
	phone: '010-XXXX-XXXX',
	links: {
		github: 'https://github.com/username',    // 여기를 수정!
		blog: 'https://blog.example.com'
	}
};
```

파일을 저장하면 브라우저가 자동으로 새로고침됩니다! 🔄

### 3단계: 자기소개 작성 (2분)

같은 파일에서 `introduce` 부분을 수정하세요:

```typescript
export const introduce = {
	content: `본인의 자기소개를 여기에 작성하세요.

여러 문단으로 나눌 수 있습니다.

전문성과 강점을 어필하세요.`,
	updatedDate: '2025. 10. 11'
};
```

## 🎨 커스터마이징

### 프로필 이미지 추가

1. 이미지를 `static/` 폴더에 복사 (예: `profile.jpg`)
2. `resume.ts`에서 주석 해제:
   ```typescript
   image: '/profile.jpg'
   ```

### 기술 스택 수정

```typescript
export const skills: Skill[] = [
	{
		category: 'Frontend',
		items: ['React', 'Vue.js', 'Svelte']  // 본인의 기술로 변경
	},
	// 카테고리 추가 가능
];
```

### 경력 추가

```typescript
export const experiences: Experience[] = [
	{
		company: '회사명',
		period: '2023. 01 ~ 현재',
		duration: '2년',
		position: '직책',
		description: '담당 업무',
		achievements: [
			'성과 1',
			'성과 2'
		],
		skills: ['React', 'Node.js'],
		current: true  // 재직중이면 true
	}
];
```

## 📱 미리보기

개발 서버를 실행하면:
- 자동 새로고침 ✅
- 핫 모듈 교체 ✅
- TypeScript 타입 체크 ✅

## 🚀 배포하기

### Vercel로 배포 (가장 쉬움)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify로 배포

```bash
# 빌드
npm run build

# build 폴더를 Netlify에 업로드
```

## ❓ 자주 묻는 질문

**Q: 어떤 섹션을 숨길 수 있나요?**
A: `src/routes/+page.svelte`에서 해당 섹션 컴포넌트를 주석 처리하세요.

```svelte
<!-- <PresentationSection {presentations} /> -->
```

**Q: 색상을 변경하고 싶어요**
A: 각 컴포넌트의 TailwindCSS 클래스를 수정하세요.
예: `bg-blue-50` → `bg-purple-50`

**Q: PDF로 내보내려면?**
A: 브라우저에서 `Ctrl/Cmd + P` → "PDF로 저장"

**Q: 모바일에서도 잘 보이나요?**
A: 네! 완전 반응형으로 제작되었습니다.

## 📚 더 알아보기

- [상세 사용 가이드](./USAGE_GUIDE.md) - 모든 기능 설명
- [예제 모음](./EXAMPLES.md) - 고급 사용 예제
- [프로젝트 구조](./PROJECT_STRUCTURE.md) - 기술 문서

## 🆘 도움이 필요하신가요?

1. [README.md](./README.md) 확인
2. [Issues](https://github.com/yourrepo/issues) 검색
3. 새 이슈 생성

## 🎉 완성!

축하합니다! 이제 나만의 경력기술서가 준비되었습니다.

### 다음 단계
- [ ] 모든 섹션 작성 완료하기
- [ ] 프로필 이미지 추가하기
- [ ] 색상 테마 커스터마이징
- [ ] 배포하기

---

좋은 경력기술서 만들기를 응원합니다! 💪

