import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';
import{jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-train-cart',
  templateUrl: './train-cart.component.html',
  styleUrls: ['./train-cart.component.css']
})
export class TrainCartComponent implements OnInit {

  msg : any= "";
  train:Train;
  constructor(private service: TrainService) { 
    this.train=new Train();
  }

 findTrainBooking(email:string){
   this.train=this.service.findTrainBooking(email);
 }
 captureScreen() {
  let data = document.getElementById('contentToConvert');
  html2canvas(data as any).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdfData = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdfData.save(`MyTicket.pdf`);
  });
}

  ngOnInit(): void {
  }

}
