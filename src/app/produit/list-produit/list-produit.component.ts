import { ProduitService } from './../service/produit.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  produis : Produit[] = [];
  produit: Produit;
  constructor(private service: ProduitService, private router: Router) {}

  listData = new MatTableDataSource<Produit>();

  displayedColumns: string[] = [
    "Nom_produit",
    "nom_court_produit",
    "prix_base",
    "actions"
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchElements();
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  fetchElements() {
    this.service.findAll().subscribe(res => {
      if (!res) return;
      console.log(res);
      this.listData = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.produis = this.produis.filter(
        produit => produit.id != id
      );
      console.log(this.produis);
      this.fetchElements();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
    this.router.navigate(["updateExpertise"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are sure?")) {
      this.delete(id);
    }
  }

}
