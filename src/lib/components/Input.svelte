<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	export let required: boolean = true;
	export let placeholder: string = '';
	export let type: HTMLInputTypeAttribute | null | undefined = null;
	export let name: string | null | undefined = null;
	export let styles: string =
		'rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input';
	export let replaceStyle: boolean = false;
	export let customStyles: string = '';
</script>

<input class={replaceStyle ? customStyles : styles} {name} {type} {placeholder} {required} />
