<script>
    export let progress = 0;
    const percent = progress * 100 + '%';
</script>

<div
    class="rounded-full w-4 h-4 shrink-0 from-green-500 to-gray-200"
    style="background: conic-gradient(var(--tw-gradient-from) {percent}, var(--tw-gradient-to) {percent})"
></div>