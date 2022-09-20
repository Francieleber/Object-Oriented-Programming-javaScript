class paciente{
    nome: string
    idade: number
    doenca:string



    
    

    informacao(){
       console.log(`meu  paciente ${paciente2.nome},com ${paciente2.idade} anos esta com  ${paciente2.doenca} ` ) 
    }
}
var paciente2 = new paciente ()
paciente2.nome="Franciele" ;
paciente2.idade=18;
paciente2.doenca= "diabets";




paciente2.informacao();