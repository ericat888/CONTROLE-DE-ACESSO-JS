function acesso(){
    let numeroCartao = Number(prompt('Qual é o numero do seu cartão de identificação?'))
     let fundo = document.querySelector('#corpo')
     let texto = document.querySelector('#titulo')

     if(numeroCartao<=1999 && numeroCartao>=1000){
         alert('Acesso total')
         texto.textContent = 'Acesso total' 
         document.getElementById("titulo").style.color= '#347839'    
     }
     else if(numeroCartao<=2999 && numeroCartao>=2000){
         alert('Acesso restrito')
         texto.textContent = 'Acesso restrito'
         document.getElementById("titulo").style.color= '#FFCD00'
     }
     else{
         alert('Acesso negado')
         texto.textContent = 'Acesso negado'
         document.getElementById("titulo").style.color= '#CA1517'
     } 
 }
 
     