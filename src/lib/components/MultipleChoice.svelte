<script>
    import confetti from 'canvas-confetti';
    import { browser } from '$app/environment';

    export let question = 'At night, when you are within 1,000 feet of an oncoming vehicle or following another vehicle within 200 feet, you must';

    export let options = [
        'not use your headlights',
        'use emergency lights',
        'use high-beam lights',
        'use low-beam lights'
    ];

    export let correct = [0];

    let answer = null;

    function setAnswer(index, event) {
        if(answer !== null) return;
        answer = index;

        if(correct.includes(answer) && browser) {
            confetti({
                spread: 360,
                startVelocity: 15,
                origin: {
                    x: event.clientX / window.innerWidth,
                    y: event.clientY / window.innerHeight,
                }
            });
        }
    }

    // export let random = true;
    // if(random) options = options.sort(() => Math.random() - 0.5);
</script>

<div class="not-prose shadow-lg border rounded-lg overflow-hidden">
    <h3 class="leading-snug p-2 border-b">{question}</h3>

    <ul>
        {#each options as option, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li
                on:click={event => setAnswer(index, event)}
                class:!bg-green-100={answer === index && correct.includes(answer)}
                class:!bg-red-100={answer === index && !correct.includes(answer)}
                class="px-2 py-2 cursor-pointer hover:bg-gray-200 flex gap-2 items-center"
            >
                <span
                    class:bg-green-300={answer === index && correct.includes(answer)}
                    class:bg-red-300={answer === index && !correct.includes(answer)}
                    class:!border-green-500={answer === index && correct.includes(answer)}
                    class:!border-red-500={answer === index && !correct.includes(answer)}
                    class="w-4 h-4 rounded border border-gray-300"
                ></span>

                <span class="leading-none">{option}</span>
            </li>
        {/each}
    </ul>
</div>