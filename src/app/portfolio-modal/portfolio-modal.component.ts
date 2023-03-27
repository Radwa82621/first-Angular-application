import { Component, Input ,DoCheck } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from '../services/data-sharing.service';
@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements DoCheck {
  title:string=""
  img:string=""
constructor(private modalService: NgbModal,private data:DataSharingService){

}
  ngDoCheck(): void {
    this.checkData()

  }
close(){

this.modalService.dismissAll()
}
checkData(){
  this.title=this.data.title
  this.img=this.data.img
}
}


