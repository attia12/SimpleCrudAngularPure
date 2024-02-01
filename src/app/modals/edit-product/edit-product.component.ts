import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../models/product";
import {ProductsComponent} from "../../pages/products/products.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editedProduct: any;

  constructor(public activeModal: NgbActiveModal,
              @Inject('selectedProduct') private selectedProduct: any,
              @Inject(ProductsComponent) private parentComponent: ProductsComponent) { }

  ngOnInit(): void {

    this.editedProduct = { ...(this.selectedProduct) };
  }

  editProduct() {
    this.parentComponent.updateProduct(this.editedProduct);
    this.activeModal.close('Product edited successfully');


  }
}
