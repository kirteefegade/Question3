import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemService } from './Item/ItemService';
import { ItemFormComponent } from './Item/ItemForm/itemform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,ItemComponent,ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
