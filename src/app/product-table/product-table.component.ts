import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  fabricpricecost!:number;
  fabricpricequantity!:number;
  fabricpriceperunitcost!:number;
  patterncost!:number;
  patternquantity!:number;
  patternperunitcost!:number;
  cuttingcost!:number;
  cuttingquantity!:number;
  cuttingperunitcost!:number;
  stitchingcost!:number;
  stitchingquantity!:number;
  stitchingperunitcost!:number;
  fusinglabourcost!:number;
  fusinglabourquantity!:number;
  fusinglabourperunitcost!:number;
  Ironingandpackingcost!:number;
  Ironingandpackingquantity!:number;
  Ironingandpackingperunitcost!:number;
  seericost!:number;
  seeriquantity!:number;
  seeriperunitcost!:number;
  yokelabelcost!:number;
  yokelabelquantity!:number;
  yokelabelperunitcost!:number;
  Fusinglogocost!:number;
  Fusinglogoquantity!:number;
  Fusinglogoperunitcost!:number;
  stickercost!:number;
  stickerquantity!:number;
  stickerperunitcost!:number;
  zipcost!:number;
  zipquantity!:number;
  zipperunitcost!:number;
  ropecost!:number;
  ropequantity!:number;
  ropeperunitcost!:number;
  tagandbulletcost!:number;
  tagandbulletquantity!:number;
  tagandbulletperunitcost!:number;
  yokelabelsizecost!:number;
  yokelabelsizequantity!:number;
  yokelabelsizeperunitcost!:number;
  cuttopackcost!:number;
  cuttopackquantity!:number;
  cuttopackperunitcost!:number;
  sheetcost!:number;
  sheetquantity!:number;
  sheetperunitcost!:number;
  polybagcost!:number;
  polybagquantity!:number;
  polybagperunitcost!:number;
  mastercovercost!:number;
  mastercoverquantity!:number;
  mastercoverperunitcost!:number;
  autochargecost!:number;
  totalCost!:number;
  calculateunitcost(){
    this.fabricpriceperunitcost=this.fabricpricecost*this.fabricpricequantity;
    this.patternperunitcost=this.patterncost*this.patternquantity;
    this.cuttingperunitcost=this.cuttingcost*this.cuttingquantity;
    this.stitchingperunitcost=this.stitchingcost*this.stitchingquantity;
    this.fusinglabourperunitcost=this.fusinglabourcost*this.fusinglabourquantity;
    this.Ironingandpackingperunitcost=this.Ironingandpackingcost*this.Ironingandpackingquantity;
    this.seeriperunitcost=this.seericost*this.seeriquantity;
    this.yokelabelperunitcost=this.yokelabelcost*this.yokelabelquantity;
    this.cuttopackperunitcost=this.cuttopackcost*this.cuttopackquantity;
    this.Fusinglogoperunitcost=this.Fusinglogocost*this.Fusinglogoquantity;
    this.stickerperunitcost=this.stickercost*this.stickerquantity;
    this.zipperunitcost=this.zipcost*this.zipquantity;
    this.ropeperunitcost=this.ropecost*this.ropequantity;
    this.tagandbulletperunitcost=this.tagandbulletcost*this.tagandbulletquantity;
    this.yokelabelsizeperunitcost=this.yokelabelsizecost*this.yokelabelsizequantity;
    this.sheetperunitcost=this.sheetcost*this.sheetquantity;
    this.polybagperunitcost=this.polybagcost*this.polybagquantity;
    this.mastercoverperunitcost=this.mastercovercost*this.mastercoverquantity;

    //this.totalCost =
    //this.fabricpricecost + this.patterncost + this.cuttingcost + this.stitchingcost + this.fusinglabourcost + this.Ironingandpackingcost + this.seericost + this.yokelabelcost + this.cuttopackcost + this.Fusinglogocost + this.stickercost + this.zipcost + this.ropecost + this.tagandbulletcost + this.yokelabelsizecost + this.sheetcost + this.polybagcost + this.mastercovercost;
  // Define variables for each cost component
const fabricPriceCost = this.fabricpricecost || 0;
const patternCost = this.patterncost || 0;
const cuttingCost = this.cuttingcost || 0;
const stitchingCost = this.stitchingcost || 0;
const fusingLabourCost = this.fusinglabourcost || 0;
const ironingAndPackingCost = this.Ironingandpackingcost || 0;
const seeriCost = this.seericost || 0;
const yokeLabelCost = this.yokelabelcost || 0;
const cutToPackCost = this.cuttopackcost || 0;
const fusingLogoCost = this.Fusinglogocost || 0;
const stickerCost = this.stickercost || 0;
const zipCost = this.zipcost || 0;
const ropeCost = this.ropecost || 0;
const tagAndBulletCost = this.tagandbulletcost || 0;
const yokeLabelSizeCost = this.yokelabelsizecost || 0;
const sheetCost = this.sheetcost || 0;
const polybagCost = this.polybagcost || 0;
const masterCoverCost = this.mastercovercost || 0;
const autochargecost = this.autochargecost || 0;
// Calculate the total cost by summing up all the individual costs
this.totalCost = fabricPriceCost + patternCost + cuttingCost + stitchingCost + fusingLabourCost +
                 ironingAndPackingCost + seeriCost + yokeLabelCost + cutToPackCost + fusingLogoCost +
                 stickerCost + zipCost + ropeCost + tagAndBulletCost + yokeLabelSizeCost + sheetCost +
                 polybagCost + masterCoverCost + autochargecost;

  }
  exportToTable2() {
    // Convert the calculated values to an HTML table
    const tableContent = `
      <table border="1">
        <tr>
          <th>job works</th>
          <th>cost</th>
          <th>quantity</th>
          <th>perunitcost</th>
        </tr>
        <tr>
          <td>Fabric price</td>
          <td>${this.fabricpricecost}</td>
          <td>${this.fabricpricequantity}</td>
          <td>${this.fabricpriceperunitcost}</td>
        </tr>
        <tr>
          <td>Pattern</td>
          <td>${this.patterncost}</td>
          <td>${this.patternquantity}</td>
          <td>${this.patternperunitcost}</td>
        </tr>
        <tr>
        <td>Cutting</td>
        <td>${this.cuttingcost}</td>
        <td>${this.cuttingquantity}</td>
        <td>${this.cuttingperunitcost}</td>
      </tr>
      <tr>
      <td>Stitching</td>
      <td>${this.stitchingcost}</td>
      <td>${this.stitchingquantity}</td>
      <td>${this.stitchingperunitcost}</td>
    </tr>
    <tr>
    <td>Fusing labour</td>
    <td>${this.fusinglabourcost}</td>
    <td>${this.fusinglabourquantity}</td>
    <td>${this.fusinglabourperunitcost}</td>
  </tr>
  <tr>
  <td>Ironing and packing</td>
  <td>${this.Ironingandpackingcost}</td>
  <td>${this.Ironingandpackingquantity}</td>
  <td>${this.Ironingandpackingperunitcost}</td>
</tr>
<tr>
<td>cut to pack</td>
<td>${this.cuttopackcost}</td>
<td>${this.cuttopackquantity}</td>
<td>${this.cuttopackperunitcost}</td>
</tr>
<tr>
<td>seeri</td>
<td>${this.seericost}</td>
<td>${this.seeriquantity}</td>
<td>${this.seeriperunitcost}</td>
</tr>
<tr>
<td>Yokelabel/size</td>
<td>${this.yokelabelsizecost}</td>
<td>${this.yokelabelsizequantity}</td>
<td>${this.yokelabelsizeperunitcost}</td>
</tr>
<tr>
<td>Fusing logo</td>
<td>${this.Fusinglogocost}</td>
<td>${this.Fusinglogoquantity}</td>
<td>${this.Fusinglogoperunitcost}</td>
</tr>
<tr>
<td>Sticker</td>
<td>${this.stickercost}</td>
<td>${this.stickerquantity}</td>
<td>${this.stickerperunitcost}</td>
</tr>
<tr>
<td>Zip</td>
<td>${this.zipcost}</td>
<td>${this.zipquantity}</td>
<td>${this.zipperunitcost}</td>
</tr>
<tr>
<td>Rope</td>
<td>${this.ropecost}</td>
<td>${this.ropequantity}</td>
<td>${this.ropeperunitcost}</td>
</tr>
<tr>
<td>Tag and bullet</td>
<td>${this.tagandbulletcost}</td>
<td>${this.tagandbulletquantity}</td>
<td>${this.tagandbulletperunitcost}</td>
</tr>
<tr>
<td>sheet</td>
<td>${this.sheetcost}</td>
<td>${this.sheetquantity}</td>
<td>${this.sheetperunitcost}</td>
</tr>
<tr>
<td>polybag</td>
<td>${this.polybagcost}</td>
<td>${this.polybagquantity}</td>
<td>${this.polybagperunitcost}</td>
</tr>
<tr>
<td>Master cover</td>
<td>${this.mastercovercost}</td>
<td>${this.mastercoverquantity}</td>
<td>${this.mastercoverperunitcost}</td>
</tr>
<tr>
<td>Auto charge</td>
<td>${this.autochargecost}</td>
<td></td>
<td></td>
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
  
}
