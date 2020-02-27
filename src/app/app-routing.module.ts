import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';


const routes: Routes = [
  {
    path: "allProduit",
    component: ListProduitComponent
  },
  {
    path: "",
    component: ListProduitComponent
  },
  {
    path: "addProduit",
    component: AddProduitComponent
  },
  {
    path: "updateProduit",
    component: UpdateProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
