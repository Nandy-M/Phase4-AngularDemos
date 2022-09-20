import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { EcommComponent } from './ecomm/ecomm.component';
import { EcomproductComponent } from './ecomm/ecomproduct/ecomproduct.component';
import { CartComponent } from './ecomm/cart/cart.component';
import { NumbersComponent } from './numbers/numbers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
    EcommComponent,
    EcomproductComponent,
    CartComponent,
    NumbersComponent,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
