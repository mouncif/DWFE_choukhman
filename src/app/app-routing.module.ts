import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';


const routes: Routes = [
  {
    path: "allExpertise",
    component: ListProduitComponent
  },
  {
    path: "",
    component: ListProduitComponent
  },
  {
    path: "addExpertise",
    component: AddProduitComponent
  },
  {
    path: "updateExpertise",
    component: UpdateProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
