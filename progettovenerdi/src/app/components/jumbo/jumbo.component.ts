import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/modules/interfaccia';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {
  cars!: Cars[];
  uniqueBrands: string[] = [];
  brandImages: { brand: string, logo: string }[] = [];

  ngOnInit(): void {
    this.readCars();
  }

  async readCars() {
    try {
      const response = await fetch("assets/db.json");
      if (!response.ok) {
        throw new Error('Errore nel caricamento dei dati.');
      }
      const data = await response.json();
      this.cars = data;
      this.extractUniqueBrands();
      this.generateBrandImages();
    } catch (error) {
      console.error('Si è verificato un errore durante il caricamento dei dati:', error);
    }
  }

  extractUniqueBrands() {
    const uniqueBrandsSet = new Set<string>();
    this.cars.forEach(car => uniqueBrandsSet.add(car.brand));
    this.uniqueBrands = Array.from(uniqueBrandsSet);
  }

  generateBrandImages() {
    this.uniqueBrands.forEach(brand => {
      const carsOfBrand = this.cars.filter(car => car.brand === brand);
      if (carsOfBrand.length > 0) {
        const randomCar = carsOfBrand[Math.floor(Math.random() * carsOfBrand.length)];
        this.brandImages.push({ brand: brand, logo: randomCar.brandLogo });
      }
    });
  }
}
