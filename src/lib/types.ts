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
	duration: string;
	current?: boolean;
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
	date: string;
	link?: string;
}

export interface EtcItem {
	title: string;
	period: string;
	description: string;
}

