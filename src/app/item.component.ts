import { Component, OnInit } from '@angular/core';
import { Item } from './Item/Item';
import { ItemService } from './Item/ItemService';

@Component({
    selector:"item-tab",
    templateUrl:"./item.component.html",
    styleUrls:["./item.component.css"]
})
export class ItemComponent implements OnInit{
    itemarr:Item[];
    flag=false;
    constructor(private iservice:ItemService){

    }
    ngOnInit(){
        this.itemarr=this.iservice.getAllItems();
      console.log(this.itemarr);
    }
    showForm(){
        this.flag=true;
      console.log(this.flag);
    }
}
