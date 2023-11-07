console.log("hello world");
const netPrice =document.getElementById('net-price');
const vatRate =document.getElementById('vat-rate');
const  incAmount  = document.getElementById('total_amount');
const calcBtn =document.getElementById('calc_btn');
const setBtn =document.getElementById('reset_btn');


let netPriceValue=0; 
let vatRateValue=0;

calcBtn.addEventListener('click',function(){
if(netPrice.value === ""|| isNaN(netPrice.value) ){
    netPrice.style.border =' 1px solid red';

    
        
        setTimeout(function(){
            netPrice.style.border ="1px solid transparent"
        },1500)
         // clearing wrong input
         netPrice.value = "";
       
}

if( vatRate.value ==="" ||isNaN(vatRate.value)){
    vatRate.style.border='1px solid red';
   
        setTimeout(function(){
            vatRate.style.border ="1px solid transparent"
        },1500)
         // clearing wrong input
         vatRate.value = "";
}


     netPriceValue=Number(netPrice.value)
     vatRateValue=Number(vatRate.value)/100;
    let total = netPriceValue*(1+vatRateValue);
    total.toFixed(2)
    incAmount.value =total

})

setBtn.addEventListener('click', function (){
    netPrice.value = "";
    vatRate.value = "";
    incAmount.value = "";
})