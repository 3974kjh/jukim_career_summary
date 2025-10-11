# Cloudflare Pages 배포 가이드

이 문서는 SvelteKit 경력기술서 프로젝트를 Cloudflare Pages에 배포하는 방법을 안내합니다.

## 📋 사전 준비

### 1. Cloudflare 계정
- [Cloudflare](https://dash.cloudflare.com/sign-up)에서 무료 계정 생성
- 이메일 인증 완료

### 2. Git 저장소
프로젝트를 Git 저장소에 푸시해야 합니다.

```bash
# Git 초기화 (아직 안했다면)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Career summary project"

# GitHub 저장소에 푸시
git remote add origin https://github.com/YOUR_USERNAME/career_summary.git
git push -u origin main
```

## 🚀 배포 방법

### 방법 1: Cloudflare Dashboard를 통한 배포 (추천)

#### 1단계: Cloudflare Pages 접속
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 로그인
2. 왼쪽 메뉴에서 **"Workers & Pages"** 선택
3. **"Create application"** 버튼 클릭
4. **"Pages"** 탭 선택
5. **"Connect to Git"** 선택

#### 2단계: Git 저장소 연결
1. GitHub 계정 연동 (처음이라면 권한 승인 필요)
2. 배포할 저장소 선택: `career_summary`
3. **"Begin setup"** 클릭

#### 3단계: 빌드 설정

다음 설정값을 입력하세요:

| 설정 항목 | 값 |
|----------|-----|
| **Project name** | `career-summary` (원하는 이름) |
| **Production branch** | `main` |
| **Framework preset** | `SvelteKit` |
| **Build command** | `npm run build` |
| **Build output directory** | `.svelte-kit/cloudflare` |

#### 4단계: 환경 변수 (선택사항)
환경 변수가 필요한 경우 추가:
- 현재 프로젝트는 환경 변수 없이 작동

#### 5단계: 배포
1. **"Save and Deploy"** 클릭
2. 빌드 과정 모니터링 (약 1-2분 소요)
3. 배포 완료! 🎉

배포 완료 후 URL 형식:
```
https://career-summary.pages.dev
```

### 방법 2: Wrangler CLI를 통한 배포

#### 1단계: Wrangler 설치
```bash
npm install -g wrangler
```

#### 2단계: Cloudflare 로그인
```bash
wrangler login
```
브라우저가 열리면 승인

#### 3단계: 빌드
```bash
npm run build
```

#### 4단계: 배포
```bash
npx wrangler pages deploy .svelte-kit/cloudflare
```

프로젝트 이름 입력 요청 시:
```
career-summary
```

## 🔧 프로젝트 설정

### adapter-cloudflare 설정 완료 ✅

`svelte.config.js`가 이미 Cloudflare용으로 설정되어 있습니다:

```javascript
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
  kit: {
    adapter: adapter()
  }
};
```

### 빌드 확인

로컬에서 빌드 테스트:

```bash
npm run build
```

빌드 성공 시 `.svelte-kit/cloudflare` 폴더가 생성됩니다.

### 미리보기

로컬에서 프로덕션 빌드 미리보기:

```bash
npm run preview
```

## 📝 배포 후 작업

### 1. 커스텀 도메인 설정 (선택)

Cloudflare Dashboard에서:
1. 프로젝트 선택
2. **"Custom domains"** 탭
3. **"Set up a custom domain"** 클릭
4. 도메인 입력 및 DNS 설정

### 2. 자동 배포 설정

이미 자동으로 설정됨:
- `main` 브랜치에 푸시하면 자동 배포
- Pull Request 생성 시 미리보기 배포 자동 생성

### 3. 빌드 훅 (선택)

특정 이벤트에 빌드 트리거:
1. **"Settings"** > **"Builds & deployments"**
2. **"Build hooks"** 섹션
3. Webhook URL 생성

## 🎯 배포 체크리스트

배포 전 확인사항:

- [ ] `git push`로 최신 코드가 GitHub에 있음
- [ ] `npm run build`가 로컬에서 성공
- [ ] `package.json`에 `@sveltejs/adapter-cloudflare` 포함
- [ ] `svelte.config.js`가 cloudflare adapter 사용
- [ ] static 폴더의 이미지들이 커밋됨
- [ ] 프로필 이미지 경로가 올바름 (`/images/selfieImage.png`)

## 📊 Cloudflare Pages 장점

### 무료 플랜 제공
- ✅ 무제한 대역폭
- ✅ 무제한 요청
- ✅ 자동 HTTPS
- ✅ DDoS 보호
- ✅ 전 세계 CDN

### 성능
- ⚡ 엣지에서 실행 (빠른 응답)
- 🌍 글로벌 배포
- 🔒 자동 SSL 인증서

### 개발자 경험
- 🔄 Git 푸시 시 자동 배포
- 🔍 PR 미리보기
- 📊 분석 대시보드
- 🔧 간편한 환경 변수 관리

## 🐛 문제 해결

### 빌드 실패

**증상**: 배포 시 빌드 에러

**해결책**:
```bash
# 로컬에서 빌드 테스트
npm run build

# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 이미지가 안 보임

**증상**: 배포 후 이미지가 표시되지 않음

**해결책**:
1. 이미지가 `static/` 폴더에 있는지 확인
2. Git에 커밋되었는지 확인
3. 경로가 `/`로 시작하는지 확인
   ```typescript
   image: '/images/selfieImage.png' ✅
   image: 'images/selfieImage.png' ❌
   ```

### 404 에러

**증상**: 특정 경로에서 404 에러

**해결책**:
- SvelteKit은 자동으로 라우팅 처리
- `static/` 폴더의 파일만 직접 접근 가능

### 빌드 타임아웃

**증상**: 빌드가 너무 오래 걸림

**해결책**:
```bash
# package.json의 dependencies 확인
# devDependencies는 빌드에 포함 안됨
```

## 📱 모바일 테스트

배포 후 다양한 기기에서 테스트:
- 📱 iPhone Safari
- 🤖 Android Chrome
- 💻 Desktop Chrome/Firefox/Safari

Cloudflare Pages는 자동으로 반응형 제공!

## 🔄 업데이트 배포

코드 수정 후 배포:

```bash
# 1. 코드 수정
# 2. Git에 커밋
git add .
git commit -m "Update: 경력 정보 추가"

# 3. 푸시 (자동으로 배포됨)
git push origin main

# 4. Cloudflare Dashboard에서 배포 진행 상황 확인
```

## 🎉 완료!

축하합니다! 경력기술서가 전 세계에서 접근 가능합니다.

### 배포 URL 공유
```
https://career-summary.pages.dev
또는
https://your-custom-domain.com
```

### 다음 단계
1. ✅ SNS/LinkedIn에 공유
2. ✅ 이력서에 URL 추가
3. ✅ 정기적으로 업데이트
4. ✅ Google Analytics 추가 (선택)

---

## 📚 참고 자료

- [Cloudflare Pages 공식 문서](https://developers.cloudflare.com/pages/)
- [SvelteKit Cloudflare 어댑터](https://kit.svelte.dev/docs/adapter-cloudflare)
- [Cloudflare Workers 문서](https://developers.cloudflare.com/workers/)

궁금한 점이 있으면 [Cloudflare 커뮤니티](https://community.cloudflare.com/)에서 질문하세요!

