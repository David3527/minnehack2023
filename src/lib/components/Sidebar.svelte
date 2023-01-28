<script>
    import ProgressCircle from '$lib/components/ProgressCircle.svelte';
    import slugify from 'slugify';

    export let activePageIndex = 0;

    export let pages = [
        'Your License',
        'Your Vehicle',
        'Traffic Laws',
        'Vehicle Operation',
        'Sharing the Road',
        'Signs, Signals, and Markings',
        'Driving Conditions',
        'Your Driving Privileges',
        'Impared Driving'
    ];
</script>

<div>
    <ul>
        {#each pages as page, index}
            <li
                class="flex gap-2 items-center"
                class:font-bold={activePageIndex === index}
                class:opacity-75={activePageIndex !== index}
            >
                <ProgressCircle progress={Math.random()}/>
                <a href="#{slugify(page)}">{page}</a>
            </li>
        {/each}
    </ul>
</div>