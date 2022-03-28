import { Component, OnInit } from '@angular/core';
import alumnos from '../../data/alumnos.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  alumno: any;
  power: number = 0;


  constructor() { 
    this.alumno = alumnos;
  }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumno = alumnos;
    console.log(this.alumno);
    
  }

  aumentar(){
    this.power++;
  }

  disminuir(){
    this.power--;
  }

}
