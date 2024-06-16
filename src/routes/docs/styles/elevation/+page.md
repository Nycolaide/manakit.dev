---
title: Elevation
desc: elevation class
---

<script lang="ts">
    import Preview from "$lib/components/docs/preview.svelte";
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {Row, Col, Card} from "manakit";
    import {dataElevation} from "$lib/assets/data";
</script>

# Elevation {#elevation}

<Datatable data={dataElevation}/>

# Usage {#usage}

<Preview>

```svelte
<Row style="justify-content: center;">
	{#each { length: 25 } as _, i}
		<Col class="col-auto">
			<Card
				class={`bg:primary elevation-${i}`}
				style="width: 100px; height: 100px; justify-content: center; text-align: center"
			>
				<span class="text-sm">.elevation-{i}</span>
			</Card>
		</Col>
	{/each}
</Row>
```

<svelte:fragment slot="preview">

<div style="width: 100%;">
    <Row style="justify-content: center;">
        {#each { length: 25 } as _, i}
            <Col class="col-auto">
             <Card class={`bg:primary elevation-${i}`}  style="width: 100px; height: 100px; justify-content: center; text-align: center">
                <span class="text-sm">.elevation-{i}</span>
             </Card>
            </Col>
		{/each}
    </Row>
</div>
</svelte:fragment>
</Preview>
