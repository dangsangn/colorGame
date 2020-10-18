let part_easy = document.getElementsByClassName('part-easy');
let part_hard = document.getElementsByClassName('part-hard');
let btn_new_color = document.getElementsByClassName('btn--new-color');
let btn_easy = document.getElementsByClassName('btn--easy');
let btn_hard = document.getElementsByClassName('btn--hard');
let box = document.querySelectorAll('.box');
let question = document.getElementById('rgb-color');
let background_question = document.getElementsByClassName('question');
let feedback = document.getElementById('feedback');
let state = true; //o trang thai kho

btn_easy[0].addEventListener('click', () => {
    let answer = false;
    part_hard[0].style.display = 'none';
    btn_easy[0].style.background = '#2C8E99';
    btn_easy[0].style.color = '#fff';
    btn_hard[0].style.color = '#2C8E99';
    btn_hard[0].style.background = '#fff';
    background_question[0].style.background = '#2C8E99';
    feedback.innerText = '';

    let arr = [];
    let color = [];
    let exactly = "";
    // console.log(arr);
    for (let i = 0; i < box.length - 3; i++) {
        box[i].style.display = 'block';
        let rgb = RGB();
        arr.push(rgb);
        color[i] = rgb + '';
        box[i].style.background = rgb;
    }
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    exactly = arr[number] + '';
    console.log(exactly);
    question.innerHTML = exactly;
    state = false;

    for (let i = 0; i < box.length - 3; i++) {
        box[i].addEventListener('click', () => {
            // while (answer === false) {
            if (color[i] === (exactly)) {
                background_question[0].style.background = exactly;
                console.log("exac " + exactly);
                // console.log("color " + color[i]);
                feedback.innerText = 'CORRECT';
                answer = true;
                for (let i = 0; i < box.length - 3; i++) {
                    box[i].style.background = exactly;
                    box[i].style.display = 'block';
                    box[i].style.background = exactly;
                }
            } else {
                feedback.innerText = 'TRY AGAIN';
                box[i].style.display = 'none';
                answer = false;
            }
            // }
        });
    }

});

btn_hard[0].addEventListener('click', () => {

    part_hard[0].style.display = 'block';
    btn_hard[0].style.background = '#2C8E99';
    btn_hard[0].style.color = '#fff';
    btn_easy[0].style.background = '#fff';
    btn_easy[0].style.color = '#2C8E99';

    let arr = [];
    for (let i = 0; i < box.length; i++) {
        let rgb = RGB();
        arr.push(rgb);
        console.log(arr);
        box[i].style.background = rgb;
    }
    state = true;
});


function RGB() {
    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);
    return 'RGB(' + this.red + ',' + this.green + ',' + this.blue + ')';
}