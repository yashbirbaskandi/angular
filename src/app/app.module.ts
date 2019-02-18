import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';


//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatPaginatorModule, MatSortModule,MatFormFieldModule,MatInputModule,MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule,MatCheckboxModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
