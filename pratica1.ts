class patinete{
    marca: string
    modelo: string
    preco: number
    
    transporta: string

    informacao(){
       console.log(`meu patinete ${patinete1.marca},modelo ${patinete1.modelo}, com valor de ${patinete1.preco}reais ${patinete1.transporta}`) 
    }
}
var patinete1 = new patinete ()
patinete1.marca="trull" ;
patinete1.modelo="infantil";
patinete1.preco =150.00;
patinete1.transporta= "pessoas";



patinete1.informacao();