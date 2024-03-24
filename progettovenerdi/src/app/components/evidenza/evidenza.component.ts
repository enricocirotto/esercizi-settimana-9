import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/modules/interfaccia';

@Component({
  selector: 'app-evidenza',
  templateUrl: './evidenza.component.html',
  styleUrls: ['./evidenza.component.scss']
})
export class EvidenzaComponent  implements OnInit{
  cars!: Cars[];
  included: number[] = [];
  related: Cars[] = [];
  isLoaded = false;
  
  ngOnInit(): void {
    this.readCars();

}

async readCars() {
  try {
    const response = await fetch("assets/db.json");
    if (!response.ok) {
      throw new Error('Errore nel caricamento dei dati.');
    }
    const dati = await response.json();
    this.cars = dati;
    this.evidenzaCars();
  } catch (error) {
    console.error('Si è verificato un errore durante il caricamento dei dati:', error);
  }


}


evidenzaCars() {
  while (this.included.length < 2) {
    let index = Math.floor(Math.random() * this.cars.length);
    if (!this.included.includes(index)) {
      this.included.push(index);
    }
  }

  for (let i = 0; i < this.included.length; i++) {
    let carsIndex = this.included[i];
    this.related.push(this.cars[carsIndex]);
  }
  
  this.isLoaded = true;
}
}