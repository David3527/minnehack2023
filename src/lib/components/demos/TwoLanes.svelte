<script>
    import DoubleYellowLines from "./DoubleYellowLines.svelte";
    import Lane from "./Lane.svelte";
</script>

<div class="absolute flex h-full">
    <div class="flex relative">
        <Lane />

        <div class="z-10">
            <DoubleYellowLines />
        </div>

        <Lane />

        <div class="flex rotate-90 absolute w-full h-full">
            <Lane />
            <DoubleYellowLines />
            <Lane />
        </div>
    </div>
</div>
