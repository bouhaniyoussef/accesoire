import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public produit: IProduct[] = [];

  laptopsList: IProduct[] = [];
  laptopForm: boolean = false;
  isNewLaptop: boolean = false;
  newLaptop: any = {};
  editLaptopForm: boolean = false;
  editedLaptop: any={};

  constructor(private _productService : ProductsService) {
  }

  ngOnInit(): void {
    this.getLaptopData();
  }

  getLaptopData(): void {
    this._productService.getProducts().subscribe(data => {this.laptopsList=data});
  }

  showEditLaptopForm(lap: IProduct) {
    if (!lap) {
      this.laptopForm = false;
      return;
    }
    this.editLaptopForm = true;
    this.editedLaptop = lap;
  }

  showAddLaptopForm() {
    // resets form if edited laptop
    if (this.laptopsList.length){
      this.newLaptop = {};
    }
    this.laptopForm = true;
    this.isNewLaptop = true;
  }

  saveLaptop(lap: IProduct){
    // add a new product
    lap.id = this.laptopsList[this.laptopsList.length-1].id;
    lap.id ++;
    this._productService.addProduct(lap).subscribe(res => {
      this.getLaptopData();
    });
    this.laptopForm = false;
  }

  updateLaptop(lap: IProduct) {
    if(!lap) return;
    this._productService.updateProduct(lap.id, lap).subscribe(res=>{
      this.getLaptopData();
    });
    this.editLaptopForm = false;
    this.editedLaptop ={};
  }

  removeLaptop(n: number) {
    const lap = this.laptopsList.find(x => x.id === n);
    if(!lap) return;
    //this._productService.deleteProduct(n).subscribe(() => this.laptopsList = this.laptopsList.filter(x => x.id !==n));
    this._productService.deleteProduct(n).subscribe(()=>{
      this.getLaptopData();
    });
    this.laptopForm = false;
  }

  cancelEdit() {
    this.editedLaptop = {};
    this.editLaptopForm = false;
    this.getLaptopData();
  }

  cancelNewLaptop() {
    this.newLaptop = {};
    this.laptopForm = false;
  }
}
