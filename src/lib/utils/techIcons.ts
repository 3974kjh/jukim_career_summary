/**
 * 기술 스택 이름과 색상 매핑
 * 기술 스택별로 더 직관적인 색상을 적용할 수 있습니다.
 */

export interface TechIconConfig {
	color: string;
	bgColor: string;
	hoverBgColor: string;
}

export const techIconMap: Record<string, TechIconConfig> = {
	// Languages
	TypeScript: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	JavaScript: {
		color: 'text-yellow-700',
		bgColor: 'bg-yellow-50',
		hoverBgColor: 'hover:bg-yellow-100'
	},
	Python: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	Java: { color: 'text-orange-700', bgColor: 'bg-orange-50', hoverBgColor: 'hover:bg-orange-100' },
	Kotlin: { color: 'text-purple-700', bgColor: 'bg-purple-50', hoverBgColor: 'hover:bg-purple-100' },
	Go: { color: 'text-cyan-700', bgColor: 'bg-cyan-50', hoverBgColor: 'hover:bg-cyan-100' },
	Rust: { color: 'text-orange-700', bgColor: 'bg-orange-50', hoverBgColor: 'hover:bg-orange-100' },

	// Frontend
	React: { color: 'text-cyan-700', bgColor: 'bg-cyan-50', hoverBgColor: 'hover:bg-cyan-100' },
	'React.js': { color: 'text-cyan-700', bgColor: 'bg-cyan-50', hoverBgColor: 'hover:bg-cyan-100' },
	Svelte: { color: 'text-orange-700', bgColor: 'bg-orange-50', hoverBgColor: 'hover:bg-orange-100' },
	'Vue.js': { color: 'text-green-700', bgColor: 'bg-green-50', hoverBgColor: 'hover:bg-green-100' },
	'Next.js': { color: 'text-gray-700', bgColor: 'bg-gray-50', hoverBgColor: 'hover:bg-gray-100' },
	TailwindCSS: {
		color: 'text-teal-700',
		bgColor: 'bg-teal-50',
		hoverBgColor: 'hover:bg-teal-100'
	},

	// Backend
	'Node.js': { color: 'text-green-700', bgColor: 'bg-green-50', hoverBgColor: 'hover:bg-green-100' },
	Express: { color: 'text-gray-700', bgColor: 'bg-gray-50', hoverBgColor: 'hover:bg-gray-100' },
	'Express.js': {
		color: 'text-gray-700',
		bgColor: 'bg-gray-50',
		hoverBgColor: 'hover:bg-gray-100'
	},
	NestJS: { color: 'text-red-700', bgColor: 'bg-red-50', hoverBgColor: 'hover:bg-red-100' },
	'Spring Boot': {
		color: 'text-green-700',
		bgColor: 'bg-green-50',
		hoverBgColor: 'hover:bg-green-100'
	},
	WebFlux: { color: 'text-green-700', bgColor: 'bg-green-50', hoverBgColor: 'hover:bg-green-100' },
	Coroutine: { color: 'text-purple-700', bgColor: 'bg-purple-50', hoverBgColor: 'hover:bg-purple-100' },

	// Database
	MongoDB: { color: 'text-green-700', bgColor: 'bg-green-50', hoverBgColor: 'hover:bg-green-100' },
	PostgreSQL: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	MySQL: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	Redis: { color: 'text-red-700', bgColor: 'bg-red-50', hoverBgColor: 'hover:bg-red-100' },

	// DevOps
	Docker: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	Kubernetes: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' },
	AWS: { color: 'text-orange-700', bgColor: 'bg-orange-50', hoverBgColor: 'hover:bg-orange-100' },
	Kafka: { color: 'text-gray-700', bgColor: 'bg-gray-50', hoverBgColor: 'hover:bg-gray-100' },

	// Default
	default: { color: 'text-blue-700', bgColor: 'bg-blue-50', hoverBgColor: 'hover:bg-blue-100' }
};

/**
 * 기술 스택 이름으로 색상 설정 가져오기
 */
export function getTechIconConfig(techName: string): TechIconConfig {
	return techIconMap[techName] || techIconMap.default;
}

