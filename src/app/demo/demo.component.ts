import { Component } from '@angular/core';
import { Produit } from '../services/produit';

@Component({
  selector: 'app-demo',
  standalone: false,

  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  prod:Produit= {} as Produit;
  prods:Produit[]=[]


}
