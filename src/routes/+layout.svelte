<script>
    import '../app.css';
    import '../../animationCanvasTest/style.css';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    import Car from '$lib/components/Car.svelte';
    
</script>

<div class="p-4 max-w-screen-xl mx-auto">
    <Navigation/>
    <div class="grid gap-4 grid-cols-[min-content,1fr]">
        <Car/>
        <aside class="sticky top-0 whitespace-nowrap">
            <Sidebar/>
        </aside>
    
        <main>
            <slot/>
        </main>
    </div>
</div>