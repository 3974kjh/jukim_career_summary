# 기여 가이드

경력기술서 프로젝트에 기여해 주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 행동 강령

이 프로젝트는 모든 기여자가 존중받는 환경을 유지하기 위해 다음 원칙을 따릅니다:

- 서로를 존중하고 배려합니다
- 건설적인 피드백을 제공합니다
- 다양한 관점을 환영합니다
- 초보자를 돕고 격려합니다

## 기여 방법

### 버그 리포트

버그를 발견하셨나요? 다음 정보와 함께 이슈를 등록해주세요:

1. **버그 설명**: 무엇이 잘못되었나요?
2. **재현 방법**: 어떻게 버그를 재현할 수 있나요?
3. **예상 동작**: 어떻게 동작해야 하나요?
4. **환경 정보**:
   - OS: [예: macOS 14.0]
   - 브라우저: [예: Chrome 120]
   - Node 버전: [예: 20.10.0]
5. **스크린샷**: 가능하다면 첨부해주세요

### 기능 제안

새로운 기능을 제안하고 싶으신가요?

1. 먼저 기존 이슈를 검색해서 중복이 없는지 확인하세요
2. 이슈를 생성하고 다음 정보를 포함하세요:
   - **문제 상황**: 어떤 문제를 해결하나요?
   - **제안 솔루션**: 어떻게 해결할 수 있나요?
   - **대안**: 다른 방법을 고려했나요?
   - **추가 컨텍스트**: 관련된 다른 정보가 있나요?

### 코드 기여

#### 시작하기

1. **Fork** 저장소
2. **Clone** your fork
   ```bash
   git clone https://github.com/your-username/career_summary.git
   cd career_summary
   ```
3. **Install** 의존성
   ```bash
   npm install
   ```
4. **Create** 브랜치
   ```bash
   git checkout -b feature/amazing-feature
   ```

#### 개발

1. **코드 작성**
   - 기존 코드 스타일을 따르세요
   - TypeScript를 사용하세요
   - 컴포넌트는 재사용 가능하게 작성하세요

2. **테스트**
   ```bash
   npm run check  # 타입 체크
   npm run lint   # 린트 체크
   ```

3. **커밋**
   - 명확한 커밋 메시지를 작성하세요
   - 커밋 메시지 형식:
     ```
     feat: 새로운 기능 추가
     fix: 버그 수정
     docs: 문서 수정
     style: 코드 포맷팅
     refactor: 코드 리팩토링
     test: 테스트 추가
     chore: 기타 변경사항
     ```

   예시:
   ```bash
   git commit -m "feat: Add dark mode toggle component"
   git commit -m "fix: Resolve mobile layout issue in SkillSection"
   git commit -m "docs: Update USAGE_GUIDE with new examples"
   ```

4. **Push**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Pull Request**
   - GitHub에서 Pull Request를 생성하세요
   - PR 템플릿을 작성해주세요
   - 리뷰어의 피드백에 응답해주세요

#### 코드 스타일 가이드

**TypeScript**
```typescript
// ✅ Good
interface Props {
	name: string;
	age?: number;
}

// ❌ Bad
interface Props {
	name: any;
	age: number | undefined;
}
```

**Svelte Components**
```svelte
<!-- ✅ Good -->
<script lang="ts">
	interface Props {
		title: string;
	}
	
	let { title }: Props = $props();
</script>

<!-- ❌ Bad -->
<script>
	export let title;
</script>
```

**TailwindCSS**
```svelte
<!-- ✅ Good: 의미있는 클래스 조합 -->
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">

<!-- ❌ Bad: 인라인 스타일 -->
<div style="display: flex; padding: 24px;">
```

#### 컴포넌트 작성 가이드

1. **Props 타입 정의**
   ```typescript
   interface Props {
   	required: string;
   	optional?: number;
   }
   ```

2. **재사용 가능하게**
   - 하드코딩된 값 피하기
   - Props로 커스터마이징 가능하게
   - 적절한 기본값 제공

3. **접근성 고려**
   - 시맨틱 HTML 사용
   - ARIA 레이블 추가
   - 키보드 네비게이션 지원

4. **문서화**
   - JSDoc 주석 추가
   - Props 설명 작성
   - 사용 예제 제공

### 문서 기여

문서 개선도 큰 도움이 됩니다!

- 오타 수정
- 예제 추가
- 설명 개선
- 번역 추가

## 프로젝트 구조 이해

기여하기 전에 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)를 읽어보세요.

주요 디렉토리:
```
src/
├── lib/
│   ├── components/    # 컴포넌트
│   ├── data/         # 데이터
│   ├── utils/        # 유틸리티
│   └── types.ts      # 타입
└── routes/           # 페이지
```

## Pull Request 체크리스트

PR을 제출하기 전에 확인하세요:

- [ ] 코드가 린트 체크를 통과하나요?
- [ ] 타입 체크를 통과하나요?
- [ ] 변경사항이 문서화되었나요?
- [ ] 커밋 메시지가 명확한가요?
- [ ] 브레이킹 체인지가 있다면 명시했나요?

## 코드 리뷰 프로세스

1. **자동 체크**: GitHub Actions가 자동으로 린트, 타입 체크 실행
2. **코드 리뷰**: 메인테이너가 코드 리뷰
3. **피드백**: 필요한 경우 수정 요청
4. **승인**: 리뷰 완료 후 머지

## 질문이 있나요?

- GitHub Issues에 질문하기
- 기존 이슈와 PR 확인하기
- README.md와 문서 읽어보기

## 인정과 감사

모든 기여자는 프로젝트의 일부가 됩니다. 감사합니다! 🎉

---

다시 한번, 기여해 주셔서 감사합니다!

