import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits:Produit[] =[];

  constructor() { }
  createProduit(produit:Produit)
  {
    this.produits.push(produit);

  }
  updateOne(produit:Produit,index:number)
  {
    this.produits[index]=produit;
  }
  deleteOne(index:number)
  {
    this.produits.splice(index, 1);
    // supression de la fin (pop)
  }

}
