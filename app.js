





function flipcoin()
{
    const coindiv = document.querySelector("#coin")
    const wontext = document.querySelector("#wontext")
    const selected = document.querySelector('input[name="option"]:checked');
    wontext.textContent = '';
    const selectedValue = selected ? selected.value : null;

    console.log("Selected value:", selectedValue);

    
    var flipresult = Math.floor(Math.random() * 2) + 1;;

    coindiv.classList.remove('heads', 'tails');

    setTimeout(function(){

        
        if(flipresult == selectedValue){

            if(selectedValue == 1){
                coindiv.classList.add('heads');
                console.log("It is Head");
                wontext.textContent = "Yes! You Won Toss."
            }
            else{
                coindiv.classList.add('tails');
                console.log("It is Tails");
                wontext.textContent = "Yes! You Won Toss."
            }
            
            
           
        }
        else
        {
            if(selectedValue == 1){
                coindiv.classList.add('tails');
                console.log("It is Tails");
            }
            else{
                coindiv.classList.add('heads');
                console.log("It is Head");
               
            }
           wontext.textContent = "Ooh! You Loss Toss."
            
        }

       
    }, 100);

   
    

}

  