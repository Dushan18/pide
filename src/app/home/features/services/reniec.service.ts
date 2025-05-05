import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReniecService {

  private consultarUrl = 'https://ws2.pide.gob.pe/Rest/RENIEC/Consultar?out=json';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });


  constructor(private http: HttpClient) { }

  consultarDni(data: {
    nuDniConsulta: string,
    nuDniUsuario: string,
    nuRucUsuario: string,
    password: string
  }): Observable<any> {
    const body = { PIDE: data };
    return this.http.post(this.consultarUrl, body, { headers: this.headers });
  }
}
