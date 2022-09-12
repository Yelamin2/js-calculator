    
    const calcData = Array.from(document.querySelectorAll('[data-number]'));
    const operators = Array.from(document.querySelectorAll('[data-operation]'));
    const numbers = Array.from(document.querySelectorAll('[data-number]'));
    const equal = document.querySelector('[equal]');
    const plusminus = document.querySelector('[plusminus]');
    const clearAll = document.querySelector('[clearAll]');
    const percentage = document.querySelector('[percent]');
    let display = document.querySelector('.display-box');//screen display
    display.innerText=''; //what played on initial screen
    let displayedNum = '';//initial value of diplayed number
    let storeResult = ''; // store in formation when an operator pressed
    
    let lastoperatorClick= ''; // evaluat on the last operator clicked before the second entry
    let opResults = null; 
    let decimalholder= false;
    let percentchecker= false;
    

    numbers.map(numbers => {

        numbers.addEventListener('click', (e)=> {
            //check if there was a decimal in the array
            if(e.target.innerText==='.' && Array.from(displayedNum).includes('.')){
                
                return;
            }
            //reset the screen for new number entry when last key pressed was percentage
            if(percentchecker){
                displayedNum ='';
            }
         
            
            displayedNum += e.target.innerText;
             display.innerText  = displayedNum;
           

            console.log([display.innerText]);
            console.log( 'I am running', displayedNum);
            
        });
        
    });

    operators.map(operators => {

        //create an event listener for a click
        operators.addEventListener('click', (e)=> {
         

            const operationName = e.target.innerText;

            // check for stored in formation to perform a math operation on.

            if(storeResult && lastoperatorClick && opResults ){
                
                console.log(storeResult,'storeresult', opResults,'store2 result', displayedNum);
                
                operationMath();
                
            }
            else {
                opResults= parseFloat(displayedNum);

                //console.log('else ', storeResult,'storeresult', 'store2 result', displayedNum);
            }
            
            shifter(operationName);
            
            lastoperatorClick = operationName;

            //console.log(opResults, lastoperatorClick ,'Operation checker');
            
          
        });
        //console.log(storeResult,'L' , [display.innerText],'new', lastoperatorClick,'G', opResults); 

    });

     // shifts the variables storage to three variables.
    function shifter(name){
        storeResult += displayedNum + '' + name + '';
        diplay2.innerText = storeResult;
        //display.innerText='';
        displayedNum='';
        display3.innerText = opResults;

        console.log(storeResult, 'I am shifter' , name);

    }

    function operationMath(){
        console.log(lastoperatorClick);
        if(lastoperatorClick === '+'){
        opResults = parseFloat(opResults)+parseFloat(displayedNum);
        console.log('Iam a plus!', opResults);
        } else if(lastoperatorClick ==='-'){
            opResults = parseFloat(opResults)-parseFloat(displayedNum);
        }else if(lastoperatorClick ==='÷'){
            opResults = parseFloat(opResults)/parseFloat(displayedNum);
        }else if(lastoperatorClick ==='x'){
            opResults = parseFloat(opResults)*parseFloat(displayedNum);
        }
        else if (lastoperatorClick ==='%'){
            displayedNum = parseFloat(displayedNum)/100;
        }
            //opResults = storeResult-diplayedNum;
            console.log('Iam a minus!',opResults);
        }

    
    equal.addEventListener('click', (e) => {
        if( !storeResult || !displayedNum)return;
        operationMath();
        shifter();
        display.innerText = opResults;
        displayedNum=opResults;
        display3.innerText='';
        diplay2.innerText='';
        storeResult='';


    });

    clearAll.addEventListener('click',  (e) => {
            display.innerText = '0';
            opResults = 0;
            storeResult = 0;
            displayedNum = 0;
            display3.innerText='0';
            diplay2.innerText='0';
        
        });

        percentage.addEventListener('click', (e) => {
            displayedNum = parseFloat(displayedNum)/100;
            display.innerText= displayedNum;
            percentchecker=true;
        });

        plusminus.addEventListener('click', (e) =>{
            displayedNum = parseFloat(displayedNum)*(-1);
            display.innerText= displayedNum;

        });

    
        
    
