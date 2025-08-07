import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  imports: [],
  templateUrl: './portofolio.html',
  styleUrl: './portofolio.css'
})
export class Portofolio {

  imgSrc !: string; 


  showImage( imgSrc:string ) {
    
    this.imgSrc = imgSrc; 
    



  }


}
