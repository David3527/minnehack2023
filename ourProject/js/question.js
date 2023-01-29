function answer() {
    document.getElementById('awnser').addEventListener('click', (e)=> {
        correctAwnser = document.getElementById('answer')
        correctAnswer.classList.add('correctAnswer')
    }) 
    document.getElementById('awnser').addEventListener('click', (e)=> {
        correctAwnser1 = document.getElementById('answer1')
        correctAnswer1.classList.add('correctAnswer')
    }) 
    document.getElementById('awnser').addEventListener('click', (e)=> {
        correctAwnser2 = document.getElementById('answer2')
    correctAnswer2.classList.add('correctAnswer')
    }) 
    
}

answer();

function fourthToggleFunction() {
        document.getElementById("accountDropdown").classList.toggle("fourthShow");
    }


