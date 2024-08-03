import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  //url: any = 'http://localhost:8080/v1/categorias';
  url: any = 'http://apirest-books-aws.us-east-2.elasticbeanstalk.com/v1/categorias';

  constructor(private http: HttpClient) { }

  obtenerCategorias() {

    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa("edita" + ':' + "edita123")
    });

    return this.http.get(this.url, { headers: headers });
  }
}
