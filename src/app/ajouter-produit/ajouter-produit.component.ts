import { Component, OnInit } from '@angular/core';
import { Marque, Discipline } from '../models';
import { Router } from '@angular/router';
import { ProduitsServices } from '../services/produits.service';

export class MonForm{
  reference:string;
  nom: string;
  prix:number;
  photos:string;
  quantite:number;


  marque=Marque;

//recuperation de discipline
  disciplines=Discipline;


  flex:number[];
  description: any;
  caracteristiques: any;
}

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  monForm:MonForm = new MonForm();
  keysMarque: string[];
  keysDiscipline: string[];

  constructor(private _serv: ProduitsServices, private routerCol : Router) {
    this.keysMarque = Object.keys(this.monForm.marque).filter(m=> !isNaN(Number(m)))
    this.keysDiscipline = Object.keys(this.monForm.disciplines).filter(d=> !isNaN(Number(d)))
   }

  //  submit(){
  //   this._serv.ajouterUnProduit(this.monForm.reference,this.monForm.nom,this.monForm.prix,this.monForm.quantite,this.monForm.photos,this.monForm.caracteristiques,this.monForm.marque,this.monForm.description,this.monForm.flex)
  //   .then(()=>this.routerCol.navigate(["accueil"]));
  //  }

  ngOnInit() {
  }


}
