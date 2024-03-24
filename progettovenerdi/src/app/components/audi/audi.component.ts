import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/modules/interfaccia';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent implements OnInit{
  cars!: Cars[];
  included: number[] = [];
  related: Cars[] = [];
  logo!: Cars;
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
      this.cars = dati.filter((car: Cars) => car.brand.toLowerCase() === 'audi');
      this.logo = this.cars[0]
      this.evidenzaCars();
    } catch (error) {
      console.error('Si è verificato un errore durante il caricamento dei dati:', error);
    }
  }

  evidenzaCars() {
    for (let i = 0; i < this.cars.length; i++) {
      this.related.push(this.cars[i]);
    }
    this.isLoaded = true;
  }
  }