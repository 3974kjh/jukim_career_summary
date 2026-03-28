<script lang="ts">
	import type { EtcItem } from '$lib/types';
	import Section from '../common/Section.svelte';
	import { Award, Calendar } from 'lucide-svelte';

	interface Props {
		items: EtcItem[];
	}

	let { items }: Props = $props();
</script>

<Section title="ETC" id="etc">
	<div class="space-y-4">
		{#each items as item (item.title + item.period)}
			<div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
				<div class="flex items-start gap-4">
					<div class="rounded-lg bg-orange-100 p-3">
						<Award class="h-5 w-5 text-orange-600" />
					</div>
					<div class="flex-1">
						<h3 class="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
						<div class="mb-2 flex items-center gap-1 text-sm text-gray-600">
							<Calendar class="h-4 w-4" />
							<span>{item.period}</span>
						</div>
						<p class="text-sm text-gray-600">{item.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

