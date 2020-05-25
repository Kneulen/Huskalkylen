const buttons = document.querySelectorAll('button');
const amortering = document.querySelector("p");
const huspris = document.querySelector("input[id='pris']");
const brutto = document.querySelector("input[id='bruttolon']");
function handleClick(e){
    const button = e.currentTarget;
    console.log(huspris.value);
    let amo = huspris.value + huspris.value;
    console.log(amo);
    //let amo = huspris.value * brutto.value;
   
    }
buttons.forEach(button => {
    button.addEventListener('click', handleClick);    
});
