import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-booker',
  standalone: false,
  templateUrl: './flight-booker.component.html',
  styleUrl: './flight-booker.component.scss',
})
export class FlightBookerComponent {
  flightType = 'oneway';

  departureDate = '';
  returnDate = '';

  bookFlight() {
    const today = new Date().toISOString().split('T')[0];

    if (!this.departureDate) {
      alert('Please select departure date');
      return;
    }

    if (this.departureDate < today) {
      alert('Departure date cannot be in the past');
      return;
    }

    if (this.flightType === 'return') {
      if (!this.returnDate) {
        alert('Please select return date');
        return;
      }

      if (this.returnDate < this.departureDate) {
        alert('Return date cannot be before departure date');
        return;
      }

      alert(
        `You have booked a return flight, departing on ${this.departureDate} and returning on ${this.returnDate}`,
      );
    } else {
      alert(`You have booked a one-way flight on ${this.departureDate}`);
    }
  }
}
