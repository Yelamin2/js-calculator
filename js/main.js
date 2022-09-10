(function(){
     'strict use';

    const calcData = Array.from(document.querySelectorAll('[data-number]'));
    const operators = Array.from(document.querySelectorAll('[data-operation]'));
    const numbers = Array.from(document.querySelectorAll('[data-number]'));
    let display = document.querySelector('.display-box');
    display.innerText="";

    numbers.map(numbers => {

        numbers.addEventListener('click', (e)=> {
            // console.log('clicked');
            // console.log(e);
            // console.log(e.taget);
            console.log(e.target.innerText);
            // if( innerText)
            display.innerText += e.target.innerText;
        });
    });


    console.log(calcData , operators);
})();

