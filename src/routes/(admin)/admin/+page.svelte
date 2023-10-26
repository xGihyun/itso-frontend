<script lang="ts">
	async function download() {
		const response = await fetch('/api/download', {
			method: 'GET'
		});

		const arrayBuffer = await response.arrayBuffer();

		const blob = new Blob([arrayBuffer], {
			type: 'text/csv'
		});

		const a = document.createElement('a');
		const blobUrl = window.URL.createObjectURL(blob);
		// console.log(blobUrl);
		const date = new Date().toISOString().split('T')[0];
		a.href = blobUrl;
		a.download = `${date}.csv`;

		document.body.appendChild(a);

		a.click();

		window.URL.revokeObjectURL(blobUrl);
		document.body.removeChild(a);
	}
</script>

<div class="px-padding absolute flex flex-col w-full  h-[90vh] justify-center items-center gap-10">
	<p>Spreadsheet file here:</p>
	<button class="bg-red-500 text-white p-2 w-[25%] rounded" type="submit" on:click={download}>Download</button>
</div>
