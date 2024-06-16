<script lang="ts">
	import { Card } from 'manakit';
</script>

<Card>
	<div class="wrapper-preview">
		<slot name="preview" />
	</div>
	<div class="wrapper-code">
		<slot />
	</div>
</Card>
