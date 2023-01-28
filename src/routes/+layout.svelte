<script>
    import '../app.css';
    import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="p-4 max-w-screen-xl mx-auto">
    <div class="grid gap-4 grid-cols-[min-content,1fr]">
        <aside class="sticky top-0 whitespace-nowrap">
            <Sidebar/>
        </aside>
    
        <main>
            <slot/>
        </main>
    </div>
</div>