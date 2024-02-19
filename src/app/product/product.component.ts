import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @ViewChild('quantityInput', { static: false }) quantityInput!: ElementRef;
  @ViewChild('costInput', { static: false }) costInput!: ElementRef;
  @ViewChild('gstInput', { static: false }) gstInput!: ElementRef;
  @ViewChild('wholesalePriceInput', { static: false }) wholesalePriceInput!: ElementRef;
  @ViewChild('traderPriceInput', { static: false }) traderPriceInput!: ElementRef;
  @ViewChild('retailPriceInput', { static: false }) retailPriceInput!: ElementRef;
  @ViewChild('breakEvenWholesaleUnitInput', { static: false }) breakEvenWholesaleUnitInput!: ElementRef;
  @ViewChild('breakEventraderUnitInput', { static: false }) breakEventraderUnitInput!: ElementRef;
  @ViewChild('breakEvenretailUnitInput', { static: false }) breakEvenretailUnitInput!: ElementRef;
  @ViewChild('roundedBreakEvenWholesaleUnit', { static: false }) roundedBreakEvenWholesaleUnit!: ElementRef;
  @ViewChild('roundedBreakEventraderUnit', { static: false }) roundedBreakEventraderUnit!: ElementRef;
  @ViewChild('roundedBreakEvenretailUnit', { static: false }) roundedBreakEvenretailUnit!: ElementRef;

  quantity!: number;
  cost!: number;
  gst!: number;

  productionPrice!: number;
  roundOffProductionPrice!: number;
  productName:string = '';
  wholesalePrice!: number;
  roundOffWholesalePrice!: number; // Add this line

  traderPrice!: number;
  roundOffTraderPrice!: number; // Add this line

  retailPrice!: number;
  roundOffRetailPrice!: number; // Add this line

  wholesaleProfitPercentage!: number;
  traderProfitPercentage!: number;
  retailProfitPercentage!: number;
  gstPercentage!: number;

  totalColor!: number;
  totalSize!: number;
  totalUnassorted!: number;
  totalSets!: number;
  tabletotalunassorted!: number;
  sum!: number;
  moq!: number;
  inputForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){}
  ngOnInit() {
    // Initialize the form with validation rules
    this.inputForm = this.fb.group({
      productname: ['', Validators.required],
      totalColor: ['', Validators.required],
      totalSize:['', Validators.required],
      quantity:['', Validators.required],
      cost:['', Validators.required],
      totalUnassorted:['', Validators.required],
      wholesaleProfitPercentage:['', Validators.required],
      traderProfitPercentage:['', Validators.required],
      retailProfitPercentage:['', Validators.required],
      gstPercentage:['', Validators.required]
    });
  }
  get f() {
    return this.inputForm.controls;
  }
  exportToTable() {
    // Convert the calculated values to an HTML table
    const tableContent = `
      <table border="1">
        <tr>
          <th>Calculation</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Production Price</td>
          <td>${this.productionPrice}</td>
        </tr>
        <tr>
          <td>Wholesale Price</td>
          <td>${this.wholesalePrice}</td>
        </tr>
        <tr>
          <td>Trader Price</td>
          <td>${this.traderPrice}</td>
        </tr>
        <tr>
          <td>Retail Price</td>
          <td>${this.retailPrice}</td>
        </tr>
       <tr>
       <td>Total sets</td>
       <td>${this.totalSets}</td>
       </tr>
       <tr>
       <td>Total unassorted</td>
       <td>${this.tabletotalunassorted}</td>
       </tr>
       <tr>
       <td>MOQ</td>
       <td>${this.moq}</td>
       </tr>
        <tr>
          <td>Break Even Wholesale Unit</td>
          <td>${this.breakEvenWholesaleUnitInput.nativeElement.value}</td>
        </tr>
        <tr>
          <td>Break Even Trader Unit</td>
          <td>${this.breakEventraderUnitInput.nativeElement.value}</td>
        </tr>
        <tr>
          <td>Break Even Retail Unit</td>
          <td>${this.breakEvenretailUnitInput.nativeElement.value}</td>
        </tr>
      </table>
    `;

    // Open the HTML table content in a new window or tab
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(tableContent);
    } else {
      alert('Please allow pop-ups for this website');
    }
  }
  exportToTable2() {
    // Convert the calculated values to an HTML table
    const tableContent = `
      <table border="1">
        <tr>
          <th>Calculation</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Product name</td>
          <td>${this.productName}</td>
        </tr>
        <tr>
          <td>Total color</td>
          <td>${this.totalColor}</td>
        </tr>
        <tr>
          <td>Total size</td>
          <td>${this.totalSize}</td>
        </tr>
        <tr>
          <td>Total quantity</td>
          <td>${this.quantityInput.nativeElement.value}</td>
        </tr>
       <tr>
       <td>Total cost</td>
       <td>${this.costInput.nativeElement.value}</td>
       </tr>
       <tr>
       <td>Total unassorted</td>
       <td>${this.totalUnassorted}</td>
       </tr>
       <tr>
       <td>Wholesale profit</td>
       <td>${this.wholesalePriceInput.nativeElement.value}</td>
       </tr>
        <tr>
          <td>Trader profit</td>
          <td>${this.traderPriceInput.nativeElement.value}</td>
        </tr>
        <tr>
          <td>Retail profit</td>
          <td>${this.retailPriceInput.nativeElement.value}</td>
        </tr>
        <tr>
          <td>GST</td>
          <td>${this.gstInput.nativeElement.value}</td>
        </tr>
      </table>
    `;

    // Open the HTML table content in a new window or tab
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(tableContent);
    } else {
      alert('Please allow pop-ups for this website');
    }
  }
  calculatePrices() {
    if(this.inputForm.valid){
      this.quantity = parseInt(this.quantityInput.nativeElement.value, 10);
      this.cost = parseInt(this.costInput.nativeElement.value, 10);
      this.gst = parseFloat(this.gstInput.nativeElement.value) / 100;
    
      // Get dynamically entered profit percentages
      this.wholesaleProfitPercentage = parseFloat(this.wholesalePriceInput.nativeElement.value);
      this.traderProfitPercentage = parseFloat(this.traderPriceInput.nativeElement.value);
      this.retailProfitPercentage = parseFloat(this.retailPriceInput.nativeElement.value);
    
      // Get dynamically entered GST percentage
      this.gstPercentage = parseFloat(this.gstInput.nativeElement.value);
    
      // Check if quantity is greater than 0 to avoid division by zero
      if (this.quantity > 0) {
        // Update the gst value
        this.gst = parseFloat((this.gst / 100).toFixed(2));
      
        // Calculate production price
        this.productionPrice = parseFloat((this.cost / this.quantity).toFixed(2));
        this.roundOffProductionPrice = Math.round(this.productionPrice);
      
        // Calculate wholesale price (with GST)
        const wholesaleProfitMultiplier = 1 + this.wholesaleProfitPercentage/100;
        const whole1 = this.productionPrice * wholesaleProfitMultiplier;
        this.wholesalePrice = whole1 * (1 + this.gstPercentage/100);
        this.roundOffWholesalePrice = Math.round(this.wholesalePrice);
  
      
        // Calculate trader price (with GST)
        const traderProfitMultiplier = 1 + this.traderProfitPercentage / 100;
        const trade1 = this.productionPrice * traderProfitMultiplier;
        this.traderPrice = trade1 * (1 + this.gstPercentage/100);
        this.roundOffTraderPrice = Math.round(this.traderPrice);
      
        // Calculate retail price (with GST)
        const retailProfitMultiplier = 1 + this.retailProfitPercentage / 100;
        const reatail1 = this.productionPrice * retailProfitMultiplier;
        this.retailPrice =  reatail1 * (1 + this.gstPercentage/100);
        this.roundOffRetailPrice = Math.round(this.retailPrice);
      
       // Calculate break even wholesale unit
       const breakEvenWholesaleUnit = this.cost / this.wholesalePrice;
       this.breakEvenWholesaleUnitInput.nativeElement.value = breakEvenWholesaleUnit.toFixed(2);
       this.roundedBreakEvenWholesaleUnit.nativeElement.value = Math.round(breakEvenWholesaleUnit); 
      
        // Calculate break even trader unit
        const breakEventraderUnit = this.cost / this.traderPrice;
        this.breakEventraderUnitInput.nativeElement.value = breakEventraderUnit.toFixed(2);
        this.roundedBreakEventraderUnit.nativeElement.value = Math.round(breakEventraderUnit); 
  
         // Calculate break even Retail unit
       const breakEvenretailUnit = this.cost / this.retailPrice;
       this.breakEvenretailUnitInput.nativeElement.value = breakEvenretailUnit.toFixed(2);
       this.roundedBreakEvenretailUnit.nativeElement.value = Math.round(breakEvenretailUnit); 
       //calculate the total sets in the table
       const correctquantity = this.quantity - this.totalUnassorted
       const m1 = this.totalColor * this.totalSize;
       this.totalSets = Math.floor (correctquantity / m1);
       // calculate the table total unassorted
       const mmm3 =  Math.floor (correctquantity % m1);
      //const sum=(mmm3 + this.totalUnassorted)
      const totalUnassortedNumeric = +this.totalUnassorted;
      this.tabletotalunassorted = mmm3 + totalUnassortedNumeric;
      if (this.totalSets !== 0) {
        this.moq = (this.totalColor * this.totalSize) + Math.floor(this.tabletotalunassorted / this.totalSets);
    } else {
        // Handle the case where totalSets is zero
        // For example, set moq to a default value or handle it based on your application logic
    }    
      }
      }
    else {
      this.inputForm.markAllAsTouched();
    }
  }
  resetForm() {
    // Reset form fields to initial values
    this.inputForm.reset();
    this.quantityInput.nativeElement.value = '';
    this.costInput.nativeElement.value = '';
    this.gstInput.nativeElement.value = '';
    this.wholesalePriceInput.nativeElement.value = '';
    this.traderPriceInput.nativeElement.value = '';
    this.retailPriceInput.nativeElement.value = '';
    this.breakEvenWholesaleUnitInput.nativeElement.value = '';
    this.breakEventraderUnitInput.nativeElement.value = '';
    this.breakEvenretailUnitInput.nativeElement.value = '';
    this.roundedBreakEvenWholesaleUnit.nativeElement.value = '';
    this.roundedBreakEventraderUnit.nativeElement.value = '';
    this.roundedBreakEvenretailUnit.nativeElement.value = '';

  }
  resetForm2() {
  this.productionPrice = 0;
  this.roundOffProductionPrice = 0;
  this.wholesalePrice = 0;
  this.roundOffWholesalePrice = 0;
  this.traderPrice = 0;
  this.roundOffTraderPrice = 0;
  this.retailPrice = 0;
  this.roundOffRetailPrice = 0;
  this.totalSets = 0;
  this.tabletotalunassorted = 0;
  this.moq = 0;
  this.breakEvenWholesaleUnitInput.nativeElement.value = '';
  this.breakEventraderUnitInput.nativeElement.value = '';
  this.breakEvenretailUnitInput.nativeElement.value = '';
  this.roundedBreakEvenWholesaleUnit.nativeElement.value = '';
  this.roundedBreakEventraderUnit.nativeElement.value = '';
  this.roundedBreakEvenretailUnit.nativeElement.value = '';
  this.roundedBreakEvenretailUnit.nativeElement.value = '';
  this.wholesalePriceInput.nativeElement.value = '';
  this.traderPriceInput.nativeElement.value = '';
  this.retailPriceInput.nativeElement.value = '';
  }
}
