<script lang="ts">
	import { enhance } from '$app/forms';
	import { CATEGORIES } from '$lib';

	let participantLimit: number;

	function getCategoryLimit(category: string): number {
		const value = CATEGORIES.get(category);

		if (!value || !value.limit) {
			return 0;
		}

		console.log(value.limit);

		return value.limit;
	}
</script>

<h1>Register</h1>

<form class="flex flex-col h-full" method="post" use:enhance>
	<label>
		Category
		<select name="category" bind:value={participantLimit}>
			{#each CATEGORIES as [key, value] (key)}
				<option value={value.limit}>{value.name}</option>
			{/each}
		</select>
	</label>

	{#each Array(participantLimit) as _, idx (idx)}
		<label>
			Name
			<input name={`first_name_${idx}`} type="text" placeholder="First" required />
			<input name={`middle_name_${idx}`} type="text" placeholder="Middle" required />
			<input name={`last_name_${idx}`} type="text" placeholder="Last" required />
		</label>
	{/each}

	<label>
		School
		<input name="school" type="text" placeholder="e.g. University of Makati" required />
	</label>

	<label>
		Coach Name
		<input name="coach_name" type="text" placeholder="Last, First" required />
	</label>

	<input type="number" name="participant_limit" value={participantLimit} hidden />

	<button class="flex bg-red-500 w-fit text-white p-2" type="submit">Submit</button>
</form>
