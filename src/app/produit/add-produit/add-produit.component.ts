import { Router } from '@angular/router';
import { ProduitService } from './../service/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  /*private expertise : Produit = {
    Nom_produit: "",
    nom_court_produit:"",
    prix_base:"",
    prix_vent:"",
    seuil_max:"",
    unite:"",
    image:"",
    quentite_initial:"",
    quentite_actuel:""
  };

  constructor(private service: ProduitService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  expertises: Produit[] = [];

  add() {
    console.log(this.expertise);
    this.service.add(this.expertise).subscribe(expertise => {
      this.expertises = [expertise, ...this.expertises];
      this.router.navigate(["/"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.expertise = this.service.form.value;
      console.log(this.expertise);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }*/


}
