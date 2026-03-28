import type { Profile, Skill, Experience, Education, Article } from '$lib/types';

export const profile: Profile = {
	name: '김준형',
	email: '42.4.jukim@gmail.com',
	phone: '010-6686-3974',
	links: {
		github: 'https://github.com/3974kjh',
		blog: 'https://blog.naver.com/3974kjh'
	},
	image: '/images/selfieImage.png' // static 폴더에 이미지를 추가하고 주석을 해제하세요
};

export const introduce = {
	content: `응용프로그램 개발을 시작으로 현재는 웹서비스 풀스택 개발을 진행하고 있습니다.

SvelteKit 환경에서 Svelte와 TypeScript, Tailwind CSS를 주력으로 프론트엔드 개발에 좀 더 집중하고 있고, Spring Boot 기반 백엔드 개발 경험이 있습니다.

사용자의 편의성과 사용성을 더 좋게 하기 위해 고민하는 것을 즐기다보니 프론트엔드 개발에 관심이 많으며, 유지보수나 추가 확장기능 구현을 대비한 확장성있고 공통화된 로직 설계를 즐겨합니다.

가까운 목표를 향해 가기 위해선 스스로의 노력이 중요할 수 있지만 긴 호흡으로 먼 목표를 향해 가기위해선 혼자만의 노력으론 불가능하다는 것을 잘 알고있습니다.

팀과 함께 성장하고 또한 팀에게 좋은 영향력을 줄 수 있는 개발자가 되는 것이 저의 모토입니다.`,
	updatedDate: '2026. 03. 28'
};

export const skills: Skill[] = [
	{
		category: 'Used Language',
		items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'C']
	},
	{
		category: 'Frontend',
		items: ['Svelte', 'SvelteKit', 'Vue.js', 'Vuex', 'TailwindCSS', 'Node.js', 'WPF']
	},
	{
		category: 'Backend',
		items: ['Spring Boot', 'Java', 'FastAPI', 'Python', 'C#', '.NET']
	},
	{
		category: 'Database',
		items: ['PostgreSQL', 'MongoDB', 'MySQL']
	},
	{
		category: 'Tools & IDEs',
		items: ['Git', 'Jenkins', 'VS Code', 'Jira', 'Slack', 'Visual Studio', 'cursor']
	},
	{
		category: 'AI',
		items: ['claude', 'perplexity', 'manus', 'ollama (used local)']
	}
];

export const experiences: Experience[] = [
	{
		company: '오스템임플란트',
		totalPeriod: '2022. 02 ~ 현재',
		startedAt: '2022-02-01',
		current: true,
		projects: [
			{
				period: '2026. 01 ~ 현재',
				position: 'PMS 웹개발팀 진료 메인 개발자',
				description:
					'KIMES 2026 전시 프로그램 출품 대응, 통합테스트 기반 오류·개선 반영 및 로직 리팩터링',
				workSplit: { frontend: 100, backend: 0 },
				achievements: [
					'2026년 3월 19일~22일 KIMES 전시 출품을 위해 필요한 기능을 정리·구현하고 통합테스트 수행',
					'통합테스트·전시 대비 과정에서 발견된 오류·개선 건 반영 개발 및 관련 로직 리팩터링'
				],
				skills: ['Svelte', 'SvelteKit', 'TypeScript', 'TailwindCSS'],
				additionalSections: [
					{
						title: '참고 링크',
						content:
							'프로그램 소개: https://drhippo.co.kr/\nKIMES 전시: https://www.kimes.kr/ko/exhibitor/detail/1128147103_2026_kor'
					}
				]
			},
			{
				period: '2025. 07 ~ 2025. 12',
				position: 'MPMS EMR 개발팀 진료 메인 개발자',
				description:
					'차별화 EMR(그룹처방·도킹·레이아웃)과 안정적 운영을 위한 로직 설계, Hippocrates2 진료 영역 Svelte 5 전환 및 개인 프로젝트로 역량 보강',
				workSplit: { frontend: 95, backend: 5 },
				achievements: [
					'그룹처방(Y/P/G/R) 도입으로 처방 추가 경로가 늘며 분기·중복이 커진 부분을, 처방Grid·HippoButton·이전진료기록·HippoPA 등 4가지 유입을 아우르도록 함수 공통화·로직 일반화',
					'그룹처방 UI·데이터: 아이콘·툴팁, grid에 노출할 처방과 제외할 처방 분리, 전처리·후처리·저장 정합성, 하위 처방 속성 일괄 적용 규칙을 구현·보완',
					'HippoMode·ClassicMode 과별특화 영역과 ClassicMode Editor에 DockView를 적용하고, 패널 사이즈·위치를 .svelte.ts에 정의한 $effect로 상태관리하여 실시간 동기화해 저장·복원 시 일관되게 읽을 수 있도록 공통화',
					'ClassicMode 2단 레이아웃에서 에디터·상병 Grid·처방 Grid·하단 버튼 영역 높이를 조절하는 splitbar 데이터도 동일 패턴으로 동기화해 확장 가능한 레이아웃 설계',
					'진료 VOC·Svelte 5 마이그레이션 이후 테스트 오류를 일정 내 일괄 수정, 회의에서 확정된 VOC 개선 과제를 일괄 구현',
					'진료 관련 컴포넌트 Svelte 4→5 일괄 마이그레이션: runes에 맞게 구조를 재설계하고, DOM 반영을 위한 불필요한 재할당·tick 남용을 줄여 정합성과 동작 품질 개선',
					'@근거 ① $state·$derived·$effect 등 룬으로, 바뀐 부분만 골라서 화면을 갱신하는 쪽에 가깝게 동작하고, 룬을 컴포넌트 밖에서도 써 상태 로직을 분리·재사용하기 쉬움 ② 반응형 여부가 명시되어 어떤 값이 다시 그리기를 유발하는지 읽기 쉽고, onMount 등과 달리 부수효과를 $effect 계열로 일관되게 관리 ③ 큰 리스트·테이블에서 일부만 바뀔 때 나머지를 불필요하게 다시 그리지 않도록 컴파일러가 추적·최적화 ④ $props·$bindable 등으로 props·이벤트 경계가 분명해져 타입 추론·컴포넌트 인터페이스 관리에 유리 ⑤ 런타임 반응성 모델이 통일되어 SvelteKit SSR/CSR 혼용 등에서도 같은 패턴으로 상태를 다루기 좋음 — 위를 종합해 전환',
					'개인 프로젝트: 주식관리 웹(모의투자·차트·볼린저·골든크로스·AI 예측 지표), JSON Parser(반복값 제거·실패 시 줄·사유 검증), 네이버 증권 기반 실시간 주가 크롬 익스텐션 신규 구현'
				],
				skills: [
					'Svelte',
					'SvelteKit',
					'TypeScript',
					'TailwindCSS'
				],
				additionalSections: [
					{
						title: '기여한 점',
						content:
							'최근 6개월간 Hippocrates2에 666개 commit 기여(웹개발팀 13인 평균 288개 대비 약 2.3배).\nsvelte-splitpanes 검토 후 진료 메인 페이지에 적용. 도킹 구현을 위해 5개 라이브러리를 검토한 뒤 dockview 채택, JS 기반 dockview를 Svelte 5에서 쓰기 위한 공통 컴포넌트·커스텀 기능 구현.\n진료 VOC 오류에 빠르게 대응하고 상병·처방 Grid 기능을 고도화했으며, 진료 관련 컴포넌트 Svelte 5 전환을 마무리함.\n\n개인 프로젝트: https://github.com/3974kjh/finance_website\nhttps://github.com/3974kjh/perfect_json_parse\nhttps://github.com/3974kjh/watch_stock_extension'
					},
					{
						title: '성장한 점',
						content:
							'Svelte 4로 안정적으로 동작하던 진료 컴포넌트를 Svelte 5로 옮기며 문법·관점 변화에 맞춰 구조를 다시 잡아야 하는 부담이 컸고, 재설계 과정에서 새 버그가 날까 걱정되기도 했습니다. 진행하면서 과도하거나 불필요한 변수·함수가 많았던 부분을 정리하며 로직 결함을 보완했고, 공통화·함수 관점 설계로 전환해 구조를 단순하고 확장 가능하게 다듬었습니다.\n\n“지금 잘 돌아가는 코드”가 곧 “손댈 필요 없는 코드”는 아니라는 점을 체감했고, 불안에 머무르기보다 “어떻게 해낼지”에 가까이 가는 태도가 더 나은 결과로 이어진다고 느꼈습니다. dockview를 팀이 쓰기 쉬운 Svelte 5 컴포넌트로 감싸며 props·콜백·함수명을 사용자 입장에서 맞추는 연습을 했고, 나만 아는 코드가 아니라 읽고 확장하기 쉬운 코드로 기여하는 쪽으로 한 단계 나아갔다고 생각합니다.'
					},
					{
						title: '개선할 점',
						content:
							'맡은 업무에 몰입하며 주변·팀 상황을 살피는 비중은 부족했습니다. 프로젝트는 개인 역량만으로 완성되기보다 구성원 간 시너지가 맞을 때 성과가 난다고 봅니다. 앞으로는 주기적으로 팀 상황을 확인하고, 동료가 설계나 오류 해결에 막힐 때 먼저 다가가 원인을 함께 정리·해결하고, 배운 점을 공유해 팀 전체의 생산성과 학습 속도에 기여하겠습니다.'
					}
				]
			},
			{
				period: '2025. 01 ~ 2025. 06',
				position: 'MPMS EMR 개발팀 진료 메인 개발자',
				description:
					'내과, 소아청소년과를 대상으로 한 의원급 EMR 클라우드 웹 서비스의 진료 파트를 메인으로 프론트엔드 개발 담당',
				workSplit: { frontend: 95, backend: 5 },
				achievements: [
					'10개의 실제 운영중인 의원에 개발한 프로젝트를 배포하여 각 병원에게 VOC를 수집하여 진료업무 관련 이슈 해결',
					'진료 메인: 팝업으로도 쓸 수 있게 화면을 나누고, 컴포넌트 간 공유 데이터는 Svelte store 한곳에서 읽고 갱신하도록 일괄 정리'
				],
				skills: ['Svelte', 'SvelteKit', 'Axios', 'TailwindCSS'],
				additionalSections: [
					{
						title: '아쉬운 점',
						content:
							'VOC를 통해 진료 메인 화면의 대부분 구조를 변경하게 되었는데, 다양하고 복잡한 기능을 구현하기 위해 기존 진료 화면에 구현되어 있던 각 컴포넌트들이 유기적으로 엮여있던 부분이 많아 어려움이 있었습니다. VOC 요구사항 또는 기획의 방향성 변동에 의해 언제 내가 짰던 컴포넌트가 다르게 변경될 수도 있다는 것을 예상하고 좀 더 일반화하여 로직을 짰어야 했는데 그러지 못한 점이 아쉽습니다.'
					},
					{
						title: '부족한 점',
						content:
							'클라우드에 front, back, db 서버를 올리고 관리하는 점과 여러 트래픽이 몰렸을 때, 데이터 유실이나 정합성에 이슈가 생기지 않게 관리하는 방법과 같은 전반적인 운영에 대한 지식이 부족합니다.'
					},
					{
						title: '잘한 점',
						content:
							'진료업무에 부여된 다양한 통합테스트 결함, VOC 결함 및 요구사항들을 모두 기한을 넘기지 않고 당일 내에 처리하여 다른 업무(제증명)의 이슈사항들을 도와줌으로 인해 팀 자체의 일정 지연을 막는데 기여를 하였습니다.\n복잡한 진료 메인 설계를 뒤업거나 새로 개선해야하는 작업들을 맡았는데, 큰 이슈 없이 잘 마무리 지었습니다.\n프로젝트의 공통적인 부분들(팝업 동작, 툴팁 동작)에 발생할 수 있는 오류들을 주도적으로 수정하는 적극성을 띄었습니다.'
					},
					{
						title: '성장한 점',
						content:
							'개인 프로젝트 3개를 진행하고 배포도 실제 해보면서 개인적으로 많은 성장이 있었습니다.\n\n1. 각 플랫폼과 운영체제, 브라우저마다 UI가 깨지는 이슈들을 고려하여 설계\n2. 요청 횟수를 최대한 줄이기 위해 front에서 캐시매니져와 같은 class를 구현하여 지정한 특정 시간 넘지 않았다면 바로바로 데이터 갱신이 필요하지 않는 항목들은 Backend 요청을 하지 않고 캐시에 있는 값을 사용하도록 설계\n3. 크롬 익스텐션에 배포하기 위해 manifest.json 및 rollup.config 구조 이해 및 작성법 학습\n4. 빠른 시일 내 신규 프로젝트를 구현할 수 있다는 자신감 상승'
					}
				]
			},
			{
				period: '2024. 07 ~ 2024. 12',
				position: 'MPMS EMR 개발팀 진료 메인 개발자',
				description: '진료 페이지 핵심 기능 개발 및 실시간 동기화 시스템 구축',
				workSplit: { frontend: 95, backend: 5 },
				achievements: [
					'진료 페이지의 메인 컴포넌트 개발 및 로직 개선처리',
					'데스크에서 바뀐 환자 상태를 진료·다른 화면의 브라우저에 실시간으로 맞추기 위해 Redis pub/sub과 WebSocket을 연동',
					'@근거 클라우드에서 앱 서버가 여러 대이면, 사용자마다 붙는 서버가 달라질 수 있습니다. 한 서버에서만 발생한 변경을 다른 서버에 연결된 브라우저까지 곧바로 알리기 어렵기 때문에, 먼저 Redis pub/sub으로 모든 서버에 같은 이벤트를 알리고, 각 서버가 자기 쪽 WebSocket으로 해당 화면에만 밀어 주는 방식으로 구성했습니다.'
				],
				skills: ['Svelte', 'SvelteKit', 'Axios', 'TailwindCSS', 'Redis', 'WebSocket'],
				additionalSections: [
					{
						title: '기여한 점',
						content:
							'적은 진료 개발인원으로 지연없이 일정을 모두 소화하여 업무에 차질이 생기지 않도록 수행하였음.\n구현 난이도가 있는 업무(개인정보 동의서 입력 및 출력 팝업, HippoMode, HippoSearch, 진료화면배치설정)를 다수 받았지만 무리없이 소화함.\n공통적으로 이슈가 발생되었던 항목들(HippoGuide, 공통팝업 esc입력 시 동시에 종료되는 이슈, 공통팝업이 모두 같은 z-index라 의도하지 않은 동작하는 이슈, 화면이 벗어난 곳에서 툴팁 사라지는 이슈)도 미리 개선.\n평균 대비 높은 코드 기여도로 실제 Hippo2 프로젝트에 많은 기여를 함.'
					},
					{
						title: '아쉬운 점',
						content: '역량의 120%를 발휘하여 업무에 집중함으로써 스스로 실력향상을 느껴 크게 아쉬운 것은 없음.'
					},
					{
						title: '개선할 점',
						content:
							'입원범위가 추가되고 투모니터 기능과 같이 진료에 많은 기능이 추가됨에 따라 기본 로직이나 컴포넌트를 재사용하는 경우가 많이 발생할 것으로 보임. 그에 따른 가독성 있고 높은 응집도와 낮은 결합도를 가진 로직 설계를 모든 구성원이 해야함.'
					}
				]
			},
			{
				period: '2024. 01 ~ 2024. 06',
				position: 'MPMS EMR 개발팀 진료 메인 개발자',
				description: 'SvelteKit와 Spring Boot를 이용한 클라우드 기반 의원급 EMR 웹 서비스 개발',
				workSplit: { frontend: 90, backend: 10 },
				achievements: [
					'RealGrid2 라이브러리를 Svelte 프로젝트에 import 및 공통화 진행',
					'진료 frontend 메인 구조 설계 및 메인 컴포넌트 구현'
				],
				skills: ['Svelte', 'SvelteKit', 'Axios', 'TailwindCSS'],
				additionalSections: [
					{
						title: '업무 기여도',
						content:
							'이번 상반기 동안 진료 업무의 개발을 진행했습니다. 진료 업무에서 난이도 있고 중요한 화면과 기능으로는 진료기록 등록 화면, 이전 진료 기록 관리 화면, 히포 버튼 관리 화면, 원외 처방전 출력 등이 있습니다.\n이 중 세 가지를 일정 지연 없이 UI 구현 및 기능 개발을 완료해 진료 업무에 충분히 기여했다고 생각합니다.\n\n또한, 개발팀의 개발 일정이 상당히 지연될 뻔한 상황을 해결한 이력도 있습니다. 초반 일정을 지연 없이 진행해 상대적으로 여유가 생기면서, Docker 이미지 생성 중 DevExtreme 라이브러리 번들링 이슈로 인한 빌드 실패 문제를 조사하는 업무를 맡았습니다.\n\nDevExtreme의 DataGrid 대체재를 조사하는 과정에서 다른 관련 라이브러리들이 기능 면에서 부족하다는 것을 알게 되었고, 대체하기 쉽지 않다는 결론을 내렸습니다.\n따라서, 다른 대체재를 찾기보다 DevExtreme 라이브러리의 번들링 이슈를 해결하는 것이 더 나은 선택이라고 판단했습니다.\n다른 라이브러리를 선택하면 기존 DevExtreme을 사용한 코드를 전부 교체하고, 새롭게 공통화 작업을 진행하며 개발팀에 공유해야 하기 때문에 많은 시간과 노력이 필요했기 때문입니다.\n\n다행히 많은 구글링을 통해 해당 라이브러리를 동적으로 import하면 ES 모듈과의 호환성 이슈가 해결되어 성공적인 번들링과 빌드가 가능하다는 사실을 알게 되었습니다. 수많은 시도 끝에 이 이슈를 해결하여 Hippo2 개발에 기여할 수 있었다고 생각합니다.\n\n이처럼 진료 업무 뿐 아니라 Hippo2 개발에도 기여를 한 바 있기 때문에 스스로에게 높은 점수를 주었습니다.'
					},
					{
						title: '업무 숙련도',
						content:
							'작년 7월, Web, TypeScript, Svelte, SpringBoot, PostgreSQL과 같은 새로운 기술을 처음 익히기 시작했습니다. 간단한 토이 프로젝트를 진행한 후 공통 컴포넌트를 구현하고, 올해 1월부터 본격적으로 진료 개발에 참여했습니다.\n\n처음에는 복잡하고 어려운 진료 화면과 기능들이 많아 \'내가 이걸 할 수 있을까?\'라는 두려움이 들었고, 대부분의 어려워 보이는 화면 구현이 제 일정에 포함되어 앞이 깜깜했습니다.\n그러나 막상 어려움에 부딪혀 맞서다 보니, 생각보다 쉽게 구현할 수 있는 부분이 많았고, 하나하나 구현하면서 자신감이 붙어 개발 속도가 빨라지는 경험을 했습니다.\n\n그 덕분에 초기 일정보다 빠르게 진행하면서 많은 진료 기능을 구현할 수 있었습니다. 특히, 이전 진료 기록 관리 화면을 구현할 때, 확장 화면에서 동적으로 각 진료 기록의 콘텐츠를 세로로 그리고, 브라우저 높이를 넘치면 옆으로 이동해 다시 세로로 그리는 로직을 구현했습니다.\n이를 통해 Svelte 생명주기 함수들의 실행 시점과 tick 함수에 대해 명확히 이해하게 되었습니다. 또한, 동적으로 DOM에 그리는 화면이 많아 자연스럽게 DOM의 동작 방식에 대해서도 이해할 수 있었습니다.\n\n추가적으로, 다른 대메뉴로 이동하더라도 진료 메뉴에서 선택된 환자 정보를 기억하기 위해 layout.svelte 파일에서 환자 정보를 진료 key 값과 함께 웹 브라우저의 session storage에 저장해 관리했습니다. 이를 통해 웹 브라우저에 대해 더 깊이 이해하게 되었습니다.\n\n아직 웹 개발을 본격적으로 시작한 지 1년이 채 되지 않았지만, 짧은 시간 동안 많은 화면과 기능을 구현하며 개발 업무에 큰 성장을 이루었고, 숙련도도 많이 향상되었다고 생각합니다.'
					}
				]
			},
			{
				period: '2023. 09 ~ 2023. 12',
				position: 'MPMS 개발팀 개발자',
				description: '클라우드 기반 의원급 EMR 웹 서비스 구현을 위한 학습 및 토이 프로젝트 수행',
				workSplit: { frontend: 20, backend: 80 },
				achievements: [
					'Vue.js, Svelte, Spring Boot, Java 학습',
					'KOSMOS: 공공데이터포털 오픈 API로 상장·시세 데이터 적재, Jsoup 기반 네이버 금융 크롤링, 회원·검색·즐겨찾기·종목별 커뮤니티·차트(Chart.js) 등을 Vue 3·Vite 프론트와 연동',
					'백엔드는 Spring Boot 3에서 WebFlux·MVC 혼용, R2DBC(MariaDB), REST·GraphQL(이동평균선 등), Spring Security·JWT로 구현'
				],
				skills: [
					'Vue 3',
					'Vite',
					'Vuex',
					'Vue Router',
					'Spring Boot',
					'Spring WebFlux',
					'R2DBC',
					'MariaDB',
					'GraphQL',
					'JWT',
					'Tailwind CSS',
					'Chart.js',
					'Jsoup'
				],
				additionalSections: [
					{
						title: '토이프로젝트 저장소',
						content: 'https://github.com/3974kjh/KOSMOS'
					}
				]
			},
			{
				period: '2023. 01 ~ 2023. 08',
				position: 'MPMS 개발팀 수납 및 진료비 계산 개발자',
				description: 'C#, WPF 기반의 의원급 EMR 응용프로그램 개발',
				workSplit: { frontend: 50, backend: 50 },
				achievements: [
					'C#과 WPF를 이용하여 수납 메인 페이지 구현',
					'C#으로 진료비 계산 로직에 진료비 계산 8장, 9장 관련 항목 구현',
					'gRPC를 이용하여 WPF와 C# 간 통신 로직 구현'
				],
				skills: ['WPF', 'C#', 'gRPC', 'MSSQL', 'Entity Framework']
			},
			{
				period: '2022. 02 ~ 2022. 12',
				position: 'MPMS 개발팀 개발자',
				description: '의원급 EMR 응용프로그램 개발을 위한 학습 및 사전 조사',
				achievements: [
					'gRPC, Entity Framework 관련 학습 및 세미나 진행',
					'Axure를 활용하여 의원급 EMR 응용프로그램의 병원관리 기획 및 기획서 작성',
					'의원급 프로그램을 서비스하고있는 메디칼소프트 회사 인수하여 해당 회사의 \'히포크라테스\' 제품 분석 및 자료 정리'
				],
				skills: ['Axure', 'gRPC', 'Entity Framework']
			}
		]
	},
	{
		company: '오스템임플란트 (인턴)',
		totalPeriod: '2021. 10 ~ 2022. 01',
		startedAt: '2021-10-01',
		endedAt: '2022-01-31',
		current: false,
		projects: [
			{
				period: '2021. 10 ~ 2022. 01',
				position: 'MPMS 개발팀 개발자',
				description: 'WPF와 C#을 이용한 환자영상관리프로그램 토이프로젝트',
				workSplit: { frontend: 50, backend: 50 },
				achievements: [
					'Client가 DB에 바로 접근하는 구조로 1차 구현한 뒤 2차로 Server를 추가 구현하여 Client-Server-DB 구조로 확장 설계 진행'
				],
				skills: ['WPF', 'C#', 'MongoDB', 'MSSQL', 'gRPC'],
				additionalSections: [
					{
						title: '참고 링크',
						content:
							'https://velog.io/@hijukim/환자-영상-관리-프로그램-개발'
					},
					{
						title: '토이프로젝트 저장소',
						content:
							'MIMS_mini: https://github.com/3974kjh/MIMS_mini\nMIMS_large: https://github.com/3974kjh/MIMS_large'
					}
				]
			}
		]
	}
];

export const educations: Education[] = [
	{
		school: '42seoul',
		period: '2021. 05 ~ 2021. 10',
		degree: '4기 본과정 중퇴',
		link: 'https://www.42seoul.kr/seoul42/main/view'
	},
	{
		school: '경북대학교',
		period: '2019. 03 ~ 2021. 02',
		degree: '전자공학부 학사 졸업',
		link: 'https://see.knu.ac.kr/'
	},
	{
		school: '대구대학교',
		period: '2015. 03 ~ 2019. 02',
		degree: '전기전자공학과 학사 중퇴',
		link: 'https://www.daegu.ac.kr/page/1823'
	}
];

export const articles: Article[] = [
	{
		title: 'KIMES 2026 전시 출품·통합테스트 기반 진료 화면 개선',
		date: '2026.03'
	},
	{
		title: '그룹처방·DockView·splitbar 기반 진료 메인 레이아웃 설계 및 개인 프로젝트 역량 보강',
		date: '2025.12'
	},
	{
		title: '진료 VOC·Svelte 5 전환 후 테스트 이슈 일괄 대응과 상병·처방 Grid 고도화',
		date: '2025.10'
	},
	{
		title: '그룹처방 도입에 따른 처방 유입 경로 공통화·DockView·splitpanes 도입',
		date: '2025.08'
	},
	{
		title: '내과·소아청소년과 EMR 실배포·VOC 대응과 진료 메인 팝업·Svelte store 구조 정리',
		date: '2025.06'
	},
	{
		title: 'Svelte 4에서 5로 마이그레이션하여 MPMS EMR 프로젝트 개선',
		date: '2025.02'
	},
	{
		title: 'Redis Pub/Sub과 WebSocket을 활용한 EMR 환자 상태 실시간 동기화 시스템 구현',
		date: '2024.11'
	},
	{
		title: 'DevExtreme 라이브러리 번들링 이슈를 동적 import로 해결',
		date: '2024.06'
	},
	{
		title: 'SvelteKit 프로젝트에 RealGrid2 라이브러리 공통화 및 적용',
		date: '2024.03'
	},
	{
		title: 'Svelte 생명주기와 tick 함수를 활용한 동적 UI 렌더링 구현',
		date: '2024.01'
	},
	{
		title: 'WPF와 C#을 이용한 환자 영상 관리 프로그램 개발 (Client-Server-DB 아키텍처)',
		date: '2023.12'
	},
	{
		title: 'gRPC를 활용한 WPF 클라이언트와 서버 간 통신 구현',
		date: '2023.08'
	},
	{
		title: 'C#과 Entity Framework를 활용한 진료비 계산 로직 구현',
		date: '2023.05'
	}
];

