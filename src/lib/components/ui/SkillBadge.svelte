<script lang="ts">
	import { getTechIconConfig } from '$lib/utils/techIcons';

	interface Props {
		skill: string;
	}

	let { skill }: Props = $props();
	
	const config = getTechIconConfig(skill);
</script>

<span
	class="inline-block rounded-md px-3 py-1 text-sm font-medium transition-colors {config.bgColor} {config.color} {config.hoverBgColor}"
>
	{skill}
</span>

