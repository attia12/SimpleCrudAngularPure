import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../models/product";
import {ProductsComponent} from "../../pages/products/products.component";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct: Product={category: "", date: "", id: 0, name: "", phone: ""};


  constructor(public activeModal: NgbActiveModal,private productsComponent: ProductsComponent) { }

  ngOnInit(): void {
  }

  addProduct() {

    this.productsComponent.addProductToList(this.newProduct);
    this.activeModal.close();

  }
}
