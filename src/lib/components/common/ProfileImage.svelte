<script lang="ts">
	interface Props {
		src?: string;
		alt: string;
		size?: 'sm' | 'md' | 'lg';
	}

	let { src, alt, size = 'lg' }: Props = $props();

	const sizeClasses = {
		sm: 'h-24 w-24',
		md: 'h-32 w-32',
		lg: 'h-40 w-40'
	};
</script>

<div class="flex justify-center">
	{#if src}
		<img
			{src}
			{alt}
			class="rounded-full object-cover shadow-lg {sizeClasses[size]}"
		/>
	{:else}
		<!-- Placeholder avatar -->
		<div
			class="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg {sizeClasses[
				size
			]}"
		>
			<span class="text-4xl font-bold text-white">{alt.charAt(0)}</span>
		</div>
	{/if}
</div>

