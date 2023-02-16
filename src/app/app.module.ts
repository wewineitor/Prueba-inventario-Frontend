import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableMedicamentsComponent } from './classes/components/TableMedicaments/table-medicaments/table-medicaments.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './classes/components/Navbar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './classes/components/sales/sales.component';
import { TableSalesComponent } from './classes/components/table-sales/table-sales.component';

const routes: Routes = [
  {
    path: 'medicaments',
    component: TableMedicamentsComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableMedicamentsComponent,
    NavbarComponent,
    SalesComponent,
    TableSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
