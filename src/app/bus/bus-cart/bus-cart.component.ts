import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';
import{jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bus-cart',
  templateUrl: './bus-cart.component.html',
  styleUrls: ['./bus-cart.component.css']
})
export class BusCartComponent implements OnInit {
 
  bus:Bus;
  
  constructor(private service:BusService) { 
    this.bus=new Bus();
   
  }
  findBusBooking(email:string){
    this.bus=this.service.findBusBooking(email);
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
