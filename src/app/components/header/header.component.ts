import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  openLocation() {
    window.location.href = "https://www.waze.com/live-map/directions?navigate=yes&to=ll.4.5642919%2C-74.0992828&from=place.ChIJw-P2dzCaP44RzvZUPXnZCeI";
  }



    confirmarAsistencia() {
      const phoneNumber = '+573125382663';
      const message = 'Confirmo mi asistencia';
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
      window.open(url);
    }



}
