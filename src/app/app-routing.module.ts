import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { ChildishComponent } from './component/childish/childish.component';
import { CoursesComponent } from './component/courses/courses.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeComponent } from './component/home/home.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TecnologyComponent } from './component/tecnology/tecnology.component';
import { VeterinariaEditComponent } from './component/veterinaria-edit/veterinaria-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id/:isFavorite', component: DetailComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'courses', component: CoursesComponent},
  { path: '*', component: PageNotFoundComponent},
  { path: 'childish', component: ChildishComponent},
  { path: 'list-book', component: ListBookComponent},
  { path: 'tecnology', component: TecnologyComponent},
  { path: 'edit/:id', component: VeterinariaEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
