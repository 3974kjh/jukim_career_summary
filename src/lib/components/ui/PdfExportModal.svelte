<script lang="ts">
	interface Props {
		open: boolean;
		onclose: () => void;
		onconfirm: (includePersonal: boolean) => void;
	}

	let { open, onclose, onconfirm }: Props = $props();

	let includePersonal = $state(true);

	const hiddenItems = [
		'본인 사진',
		'연락처, 이메일',
		'GitHub, 블로그',
		'거주지, 결혼 여부, 가족 관계, 연봉',
		'경력기술서 홈페이지로 가는 링크'
	];

	function handleKeydown(event: KeyboardEvent) {
		if (!open || event.key !== 'Escape') return;
		onclose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		class="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
		role="presentation"
		onclick={onclose}
	>
		<div
			class="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-lg"
			role="dialog"
			aria-modal="true"
			aria-labelledby="pdf-export-title"
			tabindex="-1"
			onclick={(event) => event.stopPropagation()}
			onkeydown={(event) => event.stopPropagation()}
		>
			<h2 id="pdf-export-title" class="text-lg font-bold text-gray-900">PDF 다운로드</h2>
			<p class="mt-2 text-sm leading-relaxed text-gray-600">
				채용과 무관한 개인정보를 PDF에 넣을지 선택하세요. 화면의 이력서는 바뀌지 않습니다.
			</p>

			<fieldset class="mt-4 space-y-2">
				<legend class="sr-only">개인정보 표시 여부</legend>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-300 px-3 py-3 has-checked:border-gray-900 has-checked:bg-gray-50"
				>
					<input type="radio" class="mt-1" bind:group={includePersonal} value={true} />
					<span>
						<span class="block text-sm font-medium text-gray-900">개인정보 표시</span>
						<span class="mt-0.5 block text-xs text-gray-500">사진, 연락처, 링크를 모두 포함합니다.</span>
					</span>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-300 px-3 py-3 has-checked:border-gray-900 has-checked:bg-gray-50"
				>
					<input type="radio" class="mt-1" bind:group={includePersonal} value={false} />
					<span>
						<span class="block text-sm font-medium text-gray-900">개인정보 미표시</span>
						<span class="mt-0.5 block text-xs text-gray-500">아래 항목을 출력에서 제외합니다.</span>
					</span>
				</label>
			</fieldset>

			{#if !includePersonal}
				<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
					{#each hiddenItems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}

			<div class="mt-6 flex justify-end gap-2">
				<button
					type="button"
					class="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
					onclick={onclose}
				>
					취소
				</button>
				<button
					type="button"
					class="rounded-md border border-gray-900 bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
					onclick={() => onconfirm(includePersonal)}
				>
					다운로드
				</button>
			</div>
		</div>
	</div>
{/if}
