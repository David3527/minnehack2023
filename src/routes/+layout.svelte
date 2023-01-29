<script>
    import '../app.css';
    //import '$lib/components/animationCanvasTest/style.css';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    //import Car from '$lib/components/Car.svelte';
    //import Helper from '$lib/components/animationCanvasTest/js/car.js';
    //let helper = new Helper();
    
</script>

<div class="p-4 max-w-screen-xl mx-auto">
    <Navigation/>
    <div class="grid gap-4 grid-cols-[min-content,1fr]">
         <!-- <Car/>  -->
        <aside class="sticky top-0 whitespace-nowrap">
            <Sidebar/>
        </aside>
    
        <main>
            <slot/>
        </main>
    </div>
</div>