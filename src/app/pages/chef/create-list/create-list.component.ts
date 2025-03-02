import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  cost?: number;
  category: string
}

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [ RouterModule, FormsModule, CommonModule , HttpClientModule],
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss'],
})

export class CreateListComponent implements OnInit {
  dairyProducts: Product[] = [];
  fruitProducts: Product[] = [];
  vegetableProducts: Product[] = [];
  searchQuery: string = '';
  isCartOpen: boolean = false;
  cartItems: Product[] = [];
  cartName: string = '';
  totalCost: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/api/products').subscribe(
      (response) => {
        this.categorizeProducts(response);
      },
      (error) => console.error('Error fetching products:', error)
    );
  }

  categorizeProducts(products: Product[]): void {
    console.log(products);

    // Define keyword lists for each category
    const dairyKeywords = ['milk', 'cheese', 'yogurt', 'butter', 'cream'];
    const fruitKeywords = ['apple', 'banana', 'orange', 'grape', 'mango','watermelon','grapes','strawberry'];
    const vegetableKeywords = ['carrot', 'potato', 'tomato', 'onion', 'broccoli'];

    // Categorize based on name matching, handling undefined or null names
    this.dairyProducts = products.filter(p =>
      p.name && dairyKeywords.some(keyword => p.name.toLowerCase().includes(keyword))
    );

    this.fruitProducts = products.filter(p =>
      p.name && fruitKeywords.some(keyword => p.name.toLowerCase().includes(keyword))
    );

    this.vegetableProducts = products.filter(p =>
      p.name && vegetableKeywords.some(keyword => p.name.toLowerCase().includes(keyword))
    );
  }


  filteredProducts(products: Product[]): Product[] {
    return products.filter((p) => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  increment(product: Product): void {
    product.quantity += 1;
    this.updateTotalCost();
  }

  decrement(product: Product): void {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
    this.updateTotalCost();
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateTotalCost();
  }

  incrementCartItem(product: Product): void {
    product.quantity += 1;
    this.updateTotalCost();
  }

  decrementCartItem(product: Product): void {
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    }
    this.updateTotalCost();
  }

  updateTotalCost(): void {
    this.totalCost = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  finalize(): void {
    console.log('Finalizing order:', this.cartName, this.cartItems);
  }

  scrollLeft() {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.scrollLeft -= 200;
    }
  }

  scrollRight() {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.scrollLeft += 200;
    }
  }

  scrollHorizontally(event: WheelEvent) {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  }
  scrollHorizontallyFruits(event: WheelEvent) {
    const container = document.getElementById('fruitsContainer');
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  }
  scrollHorizontallyVegetables(event: WheelEvent) {
    const container = document.getElementById('vegetablesContainer');
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  }
}
