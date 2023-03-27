import { Injectable, DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService implements DoCheck {
  title: string = ""
  img: string = ""
  box1: boolean = false
  box2: boolean = false
  box3: boolean = false
  box4: boolean = false
  box5: boolean = false
  box6: boolean = false

  constructor() { }
  ngDoCheck(): void {
    
  }
  modalCheck() {
    if (this.box1 == true) {
      this.title = "cabin"
      this.img = "assets/images/cabin.png"
  
      
    } else if (this.box2 == true) {
      this.title = "cake"
      this.img = "assets/images/cake.png"
   
    } else if (this.box3 == true) {
      this.title = "circus"
      this.img = "assets/images/circus.png"
   
    } else if (this.box4 == true) {
      this.title = "game"
      this.img = "assets/images/game.png"
   
    } else if (this.box5 == true) {
      this.title = "safe"
      this.img = "assets/images/safe.png"
   
    } else if (this.box6 == true) {
      this.title = "submarine"
      this.img = "assets/images/submarine.png"
   
    }
  }
}
