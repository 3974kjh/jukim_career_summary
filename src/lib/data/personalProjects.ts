import type { PersonalProjectCategory } from '$lib/types';

export const personalProjectCategories: PersonalProjectCategory[] = [
	{
		id: 'web',
		title: '웹 프로그램',
		projects: [
			{
				title: 'finance_website (주식·모의투자 등)',
				githubUrl: 'https://github.com/3974kjh/finance_website',
				deployUrl: 'https://finance-website-687.pages.dev/',
				stack: ['SvelteKit', 'Python', 'FastAPI', 'ngrok', 'Phaser 3'],
				implementation: 'mixed',
				description: '기반·전체 스타일·핵심 기능은 직접 구현. 실시간 뉴스·세계경제 이슈 달력·게임 화면 등은 바이브 코딩으로 추가·개선, 저장된 데이터는 .json 파일로 관리'
			},
			{
				title: 'make_opti_prompt',
				githubUrl: 'https://github.com/3974kjh/make_opti_prompt',
				deployUrl: 'https://make-opti-prompt.pages.dev/',
				stack: ['SvelteKit'],
				implementation: 'vibe',
				description: `프롬프트 생성 도우미 웹 서비스, 저장된 데이터는 localStorage로 관리`
			},
			{
				title: 'perfect_json_parse',
				githubUrl: 'https://github.com/3974kjh/perfect_json_parse',
				deployUrl: 'https://perpect-json-parse.pages.dev/',
				stack: ['SvelteKit'],
				implementation: 'vibe',
				description: `JSON 파싱 도우미 웹 서비스, 저장된 데이터는 localStorage로 관리`
			},
			{
				title: 'local_llm_chatbot',
				githubUrl: 'https://github.com/3974kjh/local_llm_chatbot',
				stack: ['SvelteKit', 'Ollama (local)'],
				implementation: 'vibe',
				description: `LLM 챗봇을 활용한 자동화 서비스, 저장된 데이터는 indexDB로 관리`
			},
			{
				title: 'drawBoard',
				githubUrl: 'https://github.com/3974kjh/drawBoard',
				deployUrl: 'https://drawboard-ekj.pages.dev/',
				stack: ['SvelteKit'],
				implementation: 'vibe',
				description: `웹 기반 대시보드 서비스, 저장된 데이터는 indexDB로 관리`
			},
			{
				title: 'jukim_career_summary (경력기술서)',
				githubUrl: 'https://github.com/3974kjh/jukim_career_summary',
				deployUrl: 'https://jukim-career-summary.pages.dev/',
				stack: ['SvelteKit'],
				implementation: 'vibe',
				description: `경력기술서 웹 서비스`
			}
		]
	},
	{
		id: 'extension',
		title: '크롬 익스텐션',
		projects: [
			{
				title: 'Today_Memo_Extension',
				githubUrl: 'https://github.com/3974kjh/Today_Memo_Extension',
				stack: ['JavaScript', 'Svelte'],
				implementation: 'direct',
				description: `오늘의 메모 작성 및 메모 기록 관리 프로그램, 저장된 데이터는 localStorage로 관리`
			},
			{
				title: 'watch_stock_extension',
				githubUrl: 'https://github.com/3974kjh/watch_stock_extension',
				stack: ['JavaScript', 'Svelte'],
				implementation: 'vibe',
				description: `종목 별 실시간 주가 확인 프로그램, 저장된 데이터는 localStorage로 관리`
			}
		]
	},
	{
		id: 'macro',
		title: '매크로 프로그램',
		projects: [
			{
				title: 'Macro_Program',
				githubUrl: 'https://github.com/3974kjh/Macro_Program',
				stack: ['Python', 'Selenium'],
				implementation: 'direct'
			}
		]
	},
	{
		id: 'game',
		title: '게임 개발',
		projects: [
			{
				title: 'Snake_Game',
				githubUrl: 'https://github.com/3974kjh/Snake_Game',
				stack: ['Python', 'pygame'],
				implementation: 'direct',
				description: `전통적인 뱀 게임에 피버타임 등과 같은 새로운 요소를 추가한 게임, 저장된 데이터는 xml 파일로 관리`
			},
			{
				title: 'RunAndAvoid_Game',
				githubUrl: 'https://github.com/3974kjh/RunAndAvoid_Game',
				stack: ['Python', 'pygame'],
				implementation: 'direct',
				description: `가운데 줄을 기준으로 위, 아래로 점프 및 공격하며 스테이지 진행하는 슈팅 게임`
			},
			{
				title: 'Rhythm_Game',
				githubUrl: 'https://github.com/3974kjh/Rhythm_Game',
				stack: ['Python', 'pygame'],
				implementation: 'direct',
				description: `osu! 파일 기반 리듬 게임, 저장된 데이터는 xml 파일로 관리`
			},
			{
				title: 'bout-web',
				githubUrl: 'https://github.com/3974kjh/bout-web',
				deployUrl: 'https://bout-web.pages.dev/',
				stack: ['SvelteKit', 'Three.js'],
				implementation: 'vibe',
				description: `3D 웹 기반 뱀서라이크 게임, 저장된 데이터는 indexDB로 관리`
			}
		]
	}
];
