window.onload = function () {
   const imprimir = document.querySelector("#dominio")

let pronoun = ['the','our', 'my'];
let adj = ['great', 'big', 'last'];
let noun = ['jogger','racoon', 'tree'];

function generadorDominio(){

  pronoun.forEach(primero => {
  //console.log(primero)
  adj.forEach(segundo => { 
   // console.log(segundo)
    noun.forEach(tercero => {
    let output = `${primero}${segundo}${tercero}.com ` 

     imprimir.append(output)
  })
}) 
})
}
generadorDominio()
}
