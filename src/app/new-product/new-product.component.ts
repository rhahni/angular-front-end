import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  public productForm !: FormGroup;

  constructor(private formBuilder :FormBuilder ,private  productService :ProductService) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name : this.formBuilder.control('',[Validators.required]),
      price : this.formBuilder.control(0),
      checked : this.formBuilder.control(false)
    })
  }

  saveProduct() {
  let product = this.productForm.value;
  this.productService.saveProduct(product).subscribe({
    next : value=>{
  alert(JSON.stringify(value));
    },error :err => {
      console.log(err);
    }
  })
  }
}
