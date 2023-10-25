<script lang="ts">
	async function download() {
		const response = await fetch('/api/download', {
			method: 'GET'
		});

		const arrayBuffer = await response.arrayBuffer();

		const blob = new Blob([arrayBuffer], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		});

		const a = document.createElement('a');
		const blobUrl = window.URL.createObjectURL(blob);
		const date = new Date().toISOString().split('T')[0];
		a.href = blobUrl;
		a.download = `${date}.xlsx`;

		document.body.appendChild(a);

		a.click();

		window.URL.revokeObjectURL(blobUrl);
		document.body.removeChild(a);
	}
</script>

<div class="px-padding">
	<p>Excel file here:</p>
	<button class="bg-red-500 text-white p-2" type="submit" on:click={download}>Download</button>
</div>
