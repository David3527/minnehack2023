<script>
    import '../app.css';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Navigation from '../lib/components/Navigation.svelte';
</script>

<div class="p-4 space-y-4 max-w-screen-xl mx-auto">
    <Navigation/>

    <div class="grid gap-4 grid-cols-[min-content,1fr]">
        <aside class="sticky top-0 whitespace-nowrap">
            <Sidebar/>
        </aside>
    
        <main>
            <slot/>
        </main>
    </div>
</div>