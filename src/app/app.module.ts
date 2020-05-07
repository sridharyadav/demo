import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetAllStockDetailsComponent } from './get-all-stock-details/get-all-stock-details.component';
import { GetStockByIdComponent } from './get-stock-by-id/get-stock-by-id.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllStockDetailsComponent,
    GetStockByIdComponent,
    UpdateStockComponent,
    DeleteStockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
