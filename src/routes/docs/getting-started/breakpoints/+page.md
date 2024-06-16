---
title: Breakpoints
desc: breakpoints list
---

<script lang="ts">
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {dataBreakpoints} from "$lib/assets/data";
</script>

# Breakpoints {#breakpoints}

## Default

<Datatable data={dataBreakpoints}/>

## Custom

```javascript
export default {
	breakpoints: {
		xs: '320px'
	}
};
```
