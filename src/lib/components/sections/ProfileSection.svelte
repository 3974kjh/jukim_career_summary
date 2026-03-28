<script lang="ts">
	import type { Profile } from '$lib/types';
	import { Mail, Github, Linkedin, BookOpen, Facebook } from 'lucide-svelte';
	import ProfileImage from '../common/ProfileImage.svelte';
	import LinkButton from '../ui/LinkButton.svelte';

	interface Props {
		profile: Profile;
	}

	let { profile }: Props = $props();
</script>

<div
	class="mb-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg print:mb-4 print:shadow-none print:ring-1 print:ring-gray-200"
>
	<div class="flex flex-col items-center gap-6 md:flex-row">
		<ProfileImage src={profile.image} alt={profile.name} />

		<div class="flex-1 text-center md:text-left">
			<h1 class="mb-2 text-4xl font-bold text-gray-900">{profile.name}</h1>
			
			<div class="mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
				<a
					href="mailto:{profile.email}"
					class="flex items-center gap-1 text-gray-600 hover:text-blue-600"
				>
					<Mail class="h-4 w-4" />
					<span>{profile.email}</span>
				</a>
				{#if profile.phone}
					<span class="text-gray-400">•</span>
					<span class="text-gray-600">{profile.phone}</span>
				{/if}
			</div>

			<div class="flex flex-wrap justify-center gap-2 md:justify-start">
				{#if profile.links.github}
					<LinkButton href={profile.links.github} icon={Github} label="GitHub" />
				{/if}
				{#if profile.links.linkedin}
					<LinkButton href={profile.links.linkedin} icon={Linkedin} label="LinkedIn" />
				{/if}
				{#if profile.links.blog}
					<LinkButton href={profile.links.blog} icon={BookOpen} label="Blog" />
				{/if}
				{#if profile.links.wiki}
					<LinkButton href={profile.links.wiki} icon={BookOpen} label="Wiki" />
				{/if}
				{#if profile.links.facebook}
					<LinkButton href={profile.links.facebook} icon={Facebook} label="Facebook" />
				{/if}
			</div>
		</div>
	</div>
</div>

