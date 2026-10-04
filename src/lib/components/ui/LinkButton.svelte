<script lang="ts">
	import type { ComponentType } from 'svelte';

	interface Props {
		href: string;
		icon?: ComponentType;
		label?: string;
		external?: boolean;
		class?: string;
	}

	let { href, icon, label, external = true, class: className = '' }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : '_self'}
	rel={external ? 'noopener noreferrer' : ''}
	class="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 {className}"
>
	{#if icon}
		{@const IconComponent = icon}
		<IconComponent class="h-4 w-4" />
	{/if}
	{#if label}
		<span>{label}</span>
	{/if}
</a>

