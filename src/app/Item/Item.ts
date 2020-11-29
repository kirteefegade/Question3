export class Item{
   
    name:string;
    quantity:number;
    price:number;
    description:string;

    constructor(name?:string,quan?:number,price?:number,descr?:string){
        this.name=name;
        this.quantity=quan;
        this.price=price;
        this.description=descr;
    }
}