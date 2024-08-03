import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  categorias: any;
  arrCategorias: any;

  constructor(private _categorias: CategoriasService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this._categorias.obtenerCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
        this.arrCategorias = this.categorias.categoriaResponse.categoria;
        console.log(this.arrCategorias);
      })
  }
}
