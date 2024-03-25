<script>
	import { page } from '$app/stores';

    $: console.log({ page  });
</script>


gutemberg tests
<h1>{$page.status}: {$page.error.message}</h1>