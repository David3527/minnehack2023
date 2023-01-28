<script>
    import P5 from 'p5-svelte';

    const sketch = p5 => {
        let images = {
            car: 'https://wsrv.nl/?url=https://i.ibb.co/xLky76R/top-car-view-png-34878-1.png&trim=10&w=100'
        };

        for(const name in images) {
            images[name] = p5.loadImage(images[name]);
        }

        // https://p5js.org/examples/interaction-follow-3.html
    };
</script>

<div class="shadow-lg rounded-lg overflow-hidden border w-fit h-fit">
    <P5 {sketch}/>
</div>