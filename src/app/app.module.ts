import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './component/book/book.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { DescriptionComponent } from './component/description/description.component';
import { SearchComponent } from './component/search/search.component';
import { BookFormComponent } from './component/book-form/book-form.component';
import { BookReactiveFormComponent } from './component/book-reactive-form/book-reactive-form.component';
import { DetailComponent } from './component/detail/detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { CoursesComponent } from './component/courses/courses.component';
import { TecnologyComponent } from './component/tecnology/tecnology.component';
import { ChildishComponent } from './component/childish/childish.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { VeterinariaComponent } from './component/veterinaria/veterinaria.component';
import { VeterinariaReactiveFormComponent } from './component/veterinaria-reactive-form/veterinaria-reactive-form.component';
import { VeterinariaEditComponent } from './component/veterinaria-edit/veterinaria-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MenuComponent,
    FooterComponent,
    DescriptionComponent,
    SearchComponent,
    BookFormComponent,
    BookReactiveFormComponent,
    DetailComponent,
    PageNotFoundComponent,
    HomeComponent,
    CategoryComponent,
    CoursesComponent,
    TecnologyComponent,
    ChildishComponent,
    ListBookComponent,
    VeterinariaComponent,
    VeterinariaReactiveFormComponent,
    VeterinariaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
