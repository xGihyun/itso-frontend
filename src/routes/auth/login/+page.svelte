<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance>
	<input type="email" name="email" />
	<input type="password" name="password" />
	<button type="submit">Login</button>
</form>
