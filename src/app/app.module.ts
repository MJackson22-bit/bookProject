import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './component/book/book.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { DescriptionComponent } from './component/description/description.component';
import { SearchComponent } from './component/search/search.component';
import { BookFormComponent } from './component/book-form/book-form.component';
import { BookReactiveFormComponent } from './component/book-reactive-form/book-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MenuComponent,
    FooterComponent,
    DescriptionComponent,
    SearchComponent,
    BookFormComponent,
    BookReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
