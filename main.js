async function  getConten(){
    try {
        const resposta = await fetch('http://localhost:1234/');
     
        const data = await resposta.json();
        console.log(resposta);

        show(data);
        
    } catch (error) {

        console.log(error);
    }
}
getConten();

function show(usuarios){
    let saida ='';

    for (const usuario of usuarios) {
        saida += `<li>${usuario.nome}</li>`
 
    }
 document.querySelector('.elementos').innerHTML=saida;
    

}

