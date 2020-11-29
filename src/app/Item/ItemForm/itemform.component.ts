import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../Item';
import { ItemService } from '../ItemService';

@Component({
    selector:"item-form",
    templateUrl:"./itemform.component.html",
    styleUrls:["./itemform.component.css"]
})
export class ItemFormComponent{
    name:string;
    quantity:number;
    price:number;
    description:string;
    item:Item;
    flag:boolean;

    @Input()formflag:boolean;
    @Output() formclose=new EventEmitter();
    constructor(private iservice:ItemService){}

    addItem(value:any){
       // console.log(value);
       this.item=value;
       this.iservice.addItem(this.item);
       this.name="";
       this.price=0;
       this.quantity=0;
       this.description="";
      flag=true;
       this.formclose.emit(false);
    }
}
