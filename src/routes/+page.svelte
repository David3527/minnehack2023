<script>
    import MultipleChoice from '$lib/components/MultipleChoice.svelte';
    import P5Test from '../lib/components/demos/P5Test.svelte';
    import RoadExample from '../lib/components/RoadExample.svelte';
</script>

<svelte:head>
    <title>DriveMN</title>
</svelte:head>

<div class="max-w-screen-sm mx-auto">
    <article class="prose prose-green text-black max-w-none">
        <P5Test/>

        {#each Array(30) as i}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam reprehenderit aperiam quidem ut velit, fugit dicta explicabo inventore libero, assumenda laboriosam consectetur quis itaque vitae quos cum temporibus minus.</p>
        {/each}

        <MultipleChoice/>
    </article>
</div>