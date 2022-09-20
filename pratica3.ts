class produtoEletronico{

    nome:string
    modelo:string
    preco:number


    constructor(nome:string , modelo:string  , preco:number){
        this.nome= nome
        this.modelo=modelo
        this.preco=preco

        
    }

    MostrarInformacoes(){
        console.log(`o produto ${this.nome} da marca ${this.modelo} custa o valor de R$ ${this.preco.toFixed(2)} reais`)
    }
}
let produto = new produtoEletronico("microondas ","electrolux",450)

produto.MostrarInformacoes()