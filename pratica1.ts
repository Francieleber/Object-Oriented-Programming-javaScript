class cliente {
nome:string
idade:number
genero:string
preco:number
 
constructor(nome:string , idade:number , genero:string , preco:number){
    this.nome=nome
    this.idade=idade
    this.genero=genero
    this.preco = preco



} 
informacoesCliente(){
    console.log(`meu cliente ${this.nome} do genero ${this.genero} com idade de ${this.idade} quer comprar um microondas no valor de ${this.preco.toFixed(2)} reais`)
}
} 
let c = new cliente ("ricardo ",25, "masculino ",54)

c.informacoesCliente()