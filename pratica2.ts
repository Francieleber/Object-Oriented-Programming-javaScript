class contaBancaria{
    nome: string
    saldo: number
    ativo:string
    conta:string


    
    

    informacao(){
       console.log(`meu  cliente ${cliente2.nome},com ${cliente2.saldo} de  ${cliente2.ativo} na  ${cliente2.conta} ativa` ) 
    }
}
var cliente2 = new contaBancaria ()
cliente2.nome="Franciele" ;
cliente2.saldo=1800;
cliente2.ativo = "saldo";
cliente2.conta= "poupança";



cliente2.informacao();