import { Component, OnInit } from '@angular/core';
import { Servico } from './servico';
import { Observable } from 'rxjs';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  preserveWhitespaces: true
})
export class ServicosComponent implements OnInit {

  servicos$!: Observable<Servico[]>;
  tipos!: string[];

  constructor(private service: ServicosService) {
    this.tipos = this.service.getTiposServicos();
   }

  ngOnInit() {
    

  }

}
