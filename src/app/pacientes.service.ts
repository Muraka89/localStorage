import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { ESPECIALISTAS } from './especialistas';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  pacientes!:Paciente[];
  especialistas:Tipo[]= ESPECIALISTAS;

  constructor() {
    this.pacientes=JSON.parse(localStorage.getItem("data") || '[]');
   }

   getEspecialista(){
    return this.especialistas;
   }


}
