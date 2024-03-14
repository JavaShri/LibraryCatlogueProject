import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerpgComponent } from './customer/customerpg/customerpg.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { BkcategorypgComponent } from './bookcategory/bkcategorypg/bkcategorypg.component';
import { ListofbookComponent } from './book/listofbook/listofbook.component';
import { BookpgComponent } from './book/bookpg/bookpg.component';
import { DashboardpgComponent } from './dashboard/dashboardpg/dashboardpg.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { HomeheaderComponent } from './homeheaderpg/homeheader/homeheader.component';
import { ListcustomeritemsComponent } from './customer/listcustomeritems/listcustomeritems.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminheaderComponent,
    CustomerpgComponent,
    CustomerhomeComponent,
    BkcategorypgComponent,
    ListofbookComponent,
    BookpgComponent,
    DashboardpgComponent,
    HomeheaderComponent,
    ListcustomeritemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule,MatTooltipModule,MatMenuModule,
    MatToolbarModule,MatButtonModule,
    RouterModule.forRoot([
      {path:"admin",component:AdminloginComponent},
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",component:CustomerhomeComponent},
      {path:"dashboard",component:DashboardpgComponent},
      {path:"book",component:BookpgComponent},
      {path:"bookcategory",component:BkcategorypgComponent},
    ])
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
