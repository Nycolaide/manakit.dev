hey docs

<script lang="ts">
    import {dataNavigationDocs} from "$lib/assets/data";
</script>

{#each dataNavigationDocs as section}

<ul>
    {section.name}
    {#each section.items as page}
        <li>
            <a href={`${page.href}`}>
                {page.name}
            </a>
        </li>
    {/each}
</ul>
{/each}
