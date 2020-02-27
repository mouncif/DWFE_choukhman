import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produit } from 'src/app/model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/Produit";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    Nom_produit: new FormControl("", Validators.required),
    nom_court_produit: new FormControl("", Validators.required),
    prix_base: new FormControl("", Validators.required),
    prix_vent: new FormControl("", Validators.required),
    seuil_max: new FormControl("", Validators.required),
    unite: new FormControl("", Validators.required),
    quentite_initial: new FormControl("", Validators.required),
    quentite_actuel: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      Nom_produit: "",
      nom_court_produit:"",
      prix_base:"",
      prix_vent:"",
      seuil_max:"",
      unite:"",
      image:"",
      quentite_initial:"",
      quentite_actuel:""
    
    });
  }

  findAll() {
    return this.http.get<Produit[]>(this.url);
  }
  add(expertise) {
    return this.http.post<Produit>(this.url, expertise);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(expertise) {
    return this.http.put(`${this.url}/${expertise.id}`, expertise);
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
