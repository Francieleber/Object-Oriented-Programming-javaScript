class funcionario{
   
     nome : string
     cargo:string  
     tempo:number 
    
     vendedora:string
     vende:string

     constructor(nome:string , cargo:string, tempo:number ,vendedora:string , vende:string){
        this.nome=nome
        this.cargo=cargo
        this.tempo=tempo
        this.vendedora= vendedora
        this.vende=vende

}
informacoesFuncionario(){
console.log(`funcionario  ${this.nome}  possui o  ${this.cargo} a ${this.tempo} anos como ${this.vendedora} para vender ${this.vende} roupas`)
}
}let i:funcionario= new funcionario ("luciana","cargo" ,3,"vendedora","vende")

i.informacoesFuncionario()