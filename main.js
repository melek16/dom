var elements=document.getElementsByClassName("element")

var j=0
var directions=["Left","Right"]
for(var element of elements){

element.style.animation=`2s ease-out 0s 1 slideIn${directions[j]}`
j=(j===0)*1
}

// favorites heart
var hearts =document.getElementsByClassName("heart")
for(var heart of hearts){
   heart.addEventListener('click',changecolor)
}

function changecolorback(){
    
    this.innerHTML='<path  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>'
    this.removeEventListener('click',changecolorback)
    this.addEventListener('click',changecolor)
    
}

function changecolor(){
    
    this.innerHTML='<path fill="red" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>'
    this.removeEventListener('click',changecolor)
    this.addEventListener('click',changecolorback)
    
}

//delete

var elements=document.getElementsByClassName("element")
var xs=document.getElementsByClassName("x")
for(var x of xs){
    x.addEventListener('click',deleteitem)
 }
 function deleteitem(){
       this.parentNode.parentNode.remove() 
       noitems()
    
 }


 //Quantity button
 var prices=document.getElementsByClassName("price")
var totals=document.getElementsByClassName("total")
 var btns=document.getElementsByTagName("button")
 for (var btn of btns){
    
         btn.addEventListener('click',changequantity)
     }
 


//change quantity
function changequantity(){
 
  var elementz = Array.prototype.slice.call(elements);
  
  var inx =elementz.indexOf(this.parentNode.parentNode)
  var subtotal=document.getElementById("subtotal_sum").innerHTML
  console.log(subtotal)
  
  if(this.innerHTML=="+"){
       this.previousElementSibling.innerHTML++
       totals[inx].innerHTML= (parseFloat(totals[inx].innerHTML)+parseFloat(prices[inx].innerHTML)).toFixed(3)
       
  }else if(this.innerHTML=="-" && this.nextElementSibling.innerHTML>1){
    this.nextElementSibling.innerHTML--
    totals[inx].innerHTML= (parseFloat(totals[inx].innerHTML)-parseFloat(prices[inx].innerHTML)).toFixed(3)
  }else{
    this.parentNode.parentNode.remove() 
  }
  noitems()

         
}



//no items
function noitems(){
  subtotal=0
  if(totalz!=[]){
   for(var tot of totals){
     subtotal=parseFloat(subtotal)+parseFloat(tot.innerHTML)
     
   }
 }
   document.getElementById("subtotal_sum").innerHTML=subtotal.toFixed(3)
 
   var totalz = Array.prototype.slice.call(totals);
   if(totalz.length==0){
     document.getElementById("no_items").style.display="flex"
     document.getElementById("heading").style.display="none"
   }
}


//promo code
var promo_btn=document.getElementById("promobtn")
promo_btn.addEventListener('click',promocode)


function promocode(){
  var code=document.getElementById("code").value
  if(code=="GOMYCODE"){
    var sub=parseFloat(document.getElementById("subtotal_sum").innerHTML)
    sub*=0.9
    document.getElementById("subtotal_sum").innerHTML=sub.toFixed(3)
    promo_btn.removeEventListener('click',promocode)
    var result=document.getElementById("result")
    result.style.display="flex"
    var x=document.getElementById("x")
    x.addEventListener('click',function(){
     result.style.display="none"})
  }
  
  

}

