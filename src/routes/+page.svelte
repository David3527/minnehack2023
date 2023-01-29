<script>
    import MultipleChoice from '$lib/components/MultipleChoice.svelte';
    import P5Test from '../lib/components/demos/P5Test.svelte';
    import RoadExample from '../lib/components/RoadExample.svelte';
    // import Car from '../../animationCanvasTest/js/car.js'
</script>

<svelte:head>
    <title>DriveMN</title>
</svelte:head>

<div class="max-w-screen-sm mx-auto">
    <article class="prose prose-green text-black max-w-none">
        <!-- <P5Test/> -->

        {#each Array(1) as i}
            <p> <b>Changing Lanes</b> <br>
                <br>
                It is often necessary to change lanes in order to make a turn, merge with
                other traffic, or to perform other driving activities. Lane changing can
                be dangerous and must be done with caution. Make sure you have safe
                clearance to the side, behind, and ahead of your vehicle, before moving into
                another lane. Turn your head in the direction of the lane you are moving
                into and check for vehicles. If you rely only on mirrors, you may not see
                vehicles in certain positions, known as “blind spots.” <br>
                <br>

                <canvas id=canvas1></canvas>

                <b>Blind Spots</b> <br><br>
                Blind spots are areas around your vehicle where your view is obstructed.
                You cannot see pedestrians or other vehicles in your rearview or side
                mirrors when they are in these locations. The design of your vehicle,
                and the position of the “pillars” that support the roof, will determine the
                location of your blind spots. Factors such as dirty windshields and glaring
                lights can also create temporary blind spots. It is important to know the
                location of your blind spots. Before making lane changes or turns, quickly
                turn your head to look for hidden pedestrians or vehicles. Avoid driving
                in other drivers’ blind spots. Be particularly conscious of blind spots when
                driving near commercial vehicles. <br>
                <br>
                <canvas id="canvas2"></canvas>
                <b>Turns</b> <br>
                <br>
                Improper turns cause many traffic crashes. Move safely into the correct
                lane well ahead of the place where you will make the actual turn. <br>
                • Slow down before making turns. Signal your intent, at least 100 feet
                 before the turn. Signals let pedestrians and drivers know what you plan
                 to do. <br>
                • While waiting to turn, keep your wheels straight and your foot on the
                 brake. If your vehicle is struck from the rear, you will be less likely to
                 be pushed into oncoming traffic. <br>
                • Continue signaling until you begin your turn. <br>
                • Do not make sudden turns from the wrong lane of traffic. <br>
                • Watch for traffic or obstacles in the road you plan to enter. <br>
                • Always finish your turn in the correct lane. (See diagrams on pages 24 and 25.) <br>
                • If the car ahead of you is signaling for a left turn, slow down and 
                 prepare to stop. <br>
                • When waiting to make a left turn at a green traffic light with oncoming
                 traffic, position the car into the intersection where your body appears
                 even with the curb line. The only opportunity to make a left turn may
                 occur when the green light changes to yellow <br></p>

                 <canvas id="canvas3"></canvas>
        {/each}

        <MultipleChoice/>
    </article>
</div>