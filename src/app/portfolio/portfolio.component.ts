import { Component,DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements DoCheck {
  constructor(private modalService: NgbModal, public data:DataSharingService){

  }
  ngDoCheck(): void {
 
    this.data.modalCheck()
    
  }
  open() {
		const modalRef = this.modalService.open(PortfolioModalComponent,{centered:true});
	}
}
