import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-booking',
  standalone: true,
  imports: [],
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.css'
})
export class HotelBookingComponent {
  redirectToBooking() {
    window.open('https://www.granhotelcochabamba.com.bo/es', '_blank');
  }
}
