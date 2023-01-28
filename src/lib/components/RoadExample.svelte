<script>
    import TwoLanes from "./demos/TwoLanes.svelte";

    let lanes = 2;
</script>

<div class="bg-green-800 overflow-hidden rounded-lg shadow-lg w-64 h-64 relative grid place-items-center">
    <img class="w-9 absolute" src="/images/car-black.png" alt="">
    <TwoLanes/>
</div>