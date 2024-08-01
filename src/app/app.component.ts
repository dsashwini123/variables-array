import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Variables
  title: string = 'Variable, Array, and Function Example';
  description: string = 'This is an example to demonstrate variables, arrays, and functions in Angular.';

  // Arrays
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  numbers: number[] = [10, 20, 30, 40, 50];

  constructor() { }

  ngOnInit(): void {
    // Function calls
    this.addItem('Item 4');
    this.addNumber(60);
  }

  // Functions
  addItem(item: string | null): void {
    if (item) {
      this.items.push(item);
    }
  }

  addNumber(num: number | null): void {
    if (num !== null) {
      this.numbers.push(num);
    }
  }

  removeItem(index: number): void {
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  getTotalNumbers(): number {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  }
}