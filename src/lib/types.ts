export interface Profile {
	name: string;
	email: string;
	phone?: string;
	links: {
		github?: string;
		linkedin?: string;
		blog?: string;
		wiki?: string;
		facebook?: string;
	};
	image?: string;
}

export interface Skill {
	category: string;
	items: string[];
}

export interface ProjectDetail {
	period: string;
	position: string;
	description: string;
	/** 프론트/백엔드 업무 비중(%) — 합이 100이 되도록 맞추는 것을 권장 */
	workSplit?: { frontend: number; backend: number };
	achievements: string[];
	skills: string[];
	additionalSections?: {
		title: string;
		content: string;
	}[];
}

export interface Experience {
	company: string;
	totalPeriod: string;
	current?: boolean;
	/** 근무 시작일 YYYY-MM-DD — 화면 기간·총 경력 합산에 사용 */
	startedAt?: string;
	/** 근무 종료일 YYYY-MM-DD — 과거 경력·총 경력 합산에 사용 */
	endedAt?: string;
	projects: ProjectDetail[];
}

export interface Education {
	school: string;
	period: string;
	degree: string;
	major?: string;
	link?: string;
}

export interface Presentation {
	title: string;
	date: string;
	venue: string;
	description?: string;
	link?: string;
}

export interface Article {
	title: string;
	/** YYYY.MM 또는 YYYY.MM.DD 등 — 화면에는 연·월만 표시 */
	date: string;
	link?: string;
}

export interface EtcItem {
	title: string;
	period: string;
	description: string;
}

/** 직접 구현 / 바이브 코딩 / 혼합 */
export type PersonalProjectImplementation = 'direct' | 'vibe' | 'mixed';

export interface PersonalProject {
	title: string;
	githubUrl: string;
	/** 배포 URL — 있는 경우만 */
	deployUrl?: string;
	stack: string[];
	implementation: PersonalProjectImplementation;
	/** 구현 방식·기능에 대한 짧은 설명 */
	description?: string;
}

export interface PersonalProjectCategory {
	id: string;
	title: string;
	projects: PersonalProject[];
}

