class aviao{

nome:string
modelo:string
capacidade: number


constructor(nome :string , modelo: string ,capacidade: number){
this.nome= nome
this.modelo = modelo
this.capacidade = capacidade

}
mostrarInformacoesDoAviao(){
console.log("meu aviao "+this.nome+" modelo do aviao "+this.modelo+"capacidadede tranporta "+this.capacidade+ "pessoas")
}


}
let fun : aviao = new aviao ("boing" ,"latam ",843)

fun.mostrarInformacoesDoAviao();