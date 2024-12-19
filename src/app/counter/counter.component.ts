import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy {
  hours: number = 0;
  minutes: string = '00';
  seconds: string = '00';
  days: number = 0;
  private targetDate = new Date('2025-02-01T16:30:00'); // Fecha objetivo
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = this.targetDate.getTime() - now;

      if (timeDifference <= 0) {
        this.minutes = '00';
        this.seconds = '00';
        this.hours = 0;
        this.days = 0;
        clearInterval(this.intervalId);
      } else {
        this.updateCountdown(timeDifference);
      }
    }, 1000);
  }

  updateCountdown(timeDifference: number): void {
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    this.days = days;
    this.hours = hours;
    this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
    this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
