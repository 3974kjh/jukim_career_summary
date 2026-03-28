// Export types
export type * from './types';

// Export common components
export { default as Section } from './components/common/Section.svelte';
export { default as ProfileImage } from './components/common/ProfileImage.svelte';

// Export UI components
export { default as LinkButton } from './components/ui/LinkButton.svelte';
export { default as SkillBadge } from './components/ui/SkillBadge.svelte';
export { default as SkillGroup } from './components/ui/SkillGroup.svelte';
export { default as ExperienceCard } from './components/ui/ExperienceCard.svelte';
export { default as ProjectDetailCard } from './components/ui/ProjectDetailCard.svelte';

// Export section components
export { default as ProfileSection } from './components/sections/ProfileSection.svelte';
export { default as IntroduceSection } from './components/sections/IntroduceSection.svelte';
export { default as SkillSection } from './components/sections/SkillSection.svelte';
export { default as ExperienceSection } from './components/sections/ExperienceSection.svelte';
export { default as EducationSection } from './components/sections/EducationSection.svelte';
export { default as ArticleSection } from './components/sections/ArticleSection.svelte';
export { default as PersonalProjectsSection } from './components/sections/PersonalProjectsSection.svelte';

// Export utilities
export * from './utils/techIcons';
export * from './utils/careerDuration';

// Export data
export * from './data/resume';
export { personalProjectCategories } from './data/personalProjects';
