import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';

import {AddProductComponent} from "../../modals/add-product/add-product.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../models/product";
import {EditProductComponent} from "../../modals/edit-product/edit-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  private lastProductId: number=0;
  selectedProduct : any;

  constructor( private modalService: NgbModal,
               private cdr: ChangeDetectorRef) { }
  openAddProductModal() {
    const modalRef = this.modalService.open(AddProductComponent, {
      injector: Injector.create({ providers: [{ provide: ProductsComponent, useValue: this }] })
    });
  }
  addProductToList(newProduct: Product) {
    newProduct.id = ++this.lastProductId;

    this.products.push(newProduct);
    this.cdr.detectChanges();
    console.log("products", this.products);
  }

  ngOnInit(): void {

  }

  // openAddProductModal() {
  //   const modalRef=this.modalService.open(AddProductComponent);
  //   modalRef.result.then((newProduct: Product) => {
  //
  //     if (newProduct) {
  //       this.products.push(newProduct);
  //       this.cdr.detectChanges()
  //       console.log("products",this.products)
  //     }
  //   }, () => {
  //
  //   });
  //
  // }

  openEditProductModal(id:any) {
    console.log(id)
    const selectedP = this.products.find(product => product.id === id);
    this.selectedProduct=selectedP;
    //sending data to edit component modal boostrap
    const modalRef = this.modalService.open(EditProductComponent, {
      injector: Injector.create({
        providers: [
          { provide: ProductsComponent, useValue: this },
          { provide: 'selectedProduct', useValue: this.selectedProduct }
        ]
      })
    });


  }

  deleteProduct(id:any) {
    console.log(id)
    this.products=this.products.filter((product)=>product.id !== id);

  }


  updateProduct(editedProduct: any) {
    const index = this.products.findIndex(product => product.id === editedProduct.id);

    if (index !== -1) {

      this.products[index] = { ...editedProduct };
      this.cdr.detectChanges();
    }

  }
}
