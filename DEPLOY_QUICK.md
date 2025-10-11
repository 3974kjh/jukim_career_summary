# 빠른 Cloudflare Pages 배포 가이드 🚀

## 📋 3단계로 배포하기

### 1️⃣ GitHub에 푸시

```bash
# Git 초기화 (아직 안했다면)
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit"

# GitHub 저장소 생성 후
git remote add origin https://github.com/YOUR_USERNAME/career_summary.git
git push -u origin main
```

### 2️⃣ Cloudflare Pages에서 배포

#### A. 웹 대시보드 방법 (추천) 👍

1. **[Cloudflare Dashboard](https://dash.cloudflare.com/)** 접속
2. **Workers & Pages** 클릭
3. **Create application** → **Pages** → **Connect to Git**
4. GitHub 저장소 선택
5. 다음 설정 입력:

```
Framework preset: SvelteKit
Build command: npm run build
Build output directory: build
```

6. **Save and Deploy** 클릭!

완료! 약 2분 후 `https://YOUR-PROJECT.pages.dev`에서 확인 가능합니다.

#### B. CLI 방법 (선택사항)

wrangler CLI 사용 시:

```bash
# wrangler 설치 (처음만)
npm install -g wrangler

# 로그인
wrangler login

# 빌드
npm run build

# 배포
wrangler pages deploy build
```

## ✅ 체크리스트

배포 전 확인:
- [ ] Git 저장소에 푸시 완료
- [ ] `npm run build` 로컬 빌드 테스트 성공
- [ ] 프로필 이미지가 `static/images/` 폴더에 있음

## 🎯 배포 URL

배포 완료 후:
```
https://career-summary.pages.dev
```

## 🔄 업데이트 방법

```bash
git add .
git commit -m "Update"
git push
```

푸시하면 자동으로 재배포됩니다!

## 💡 팁

- **무료**: 무제한 대역폭, 자동 HTTPS
- **빠름**: 전 세계 CDN
- **자동**: Git 푸시 = 자동 배포

---

더 자세한 내용은 [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)를 참고하세요!

