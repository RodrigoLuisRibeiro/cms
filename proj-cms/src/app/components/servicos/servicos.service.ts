import { Servico } from './servico';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  
   
  

  constructor(private http: HttpClient) { }

  

  getTiposServicos(){
    return ['Emergenciais','Comerciais','Hora Extra'];
  }
}
