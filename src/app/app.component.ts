import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {EventInfoComponent} from './event-info/event-info.component';
import {HistoryComponent} from './history/history.component';
import {LlajtaComponent} from './llajta/llajta.component';
import {HotelBookingComponent} from './hotel-booking/hotel-booking.component';
import {FooterComponent} from './footer/footer.component';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    HeaderComponent,
    EventInfoComponent,
    CounterComponent,
    HistoryComponent,
    LlajtaComponent,
    HotelBookingComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invitacion-goit';
}
