import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-queqe';
  date = '';
  name = '';
  times: string[] = []
  avaliableTime: boolean[] = []
  showAvaliableTime: boolean = false;
  showFormName: boolean = false;
  selectedTime: boolean[] = []
  time: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setTime();
    this.checkAvaliableTime();
  }

  checkDate() {
    if (this.date !== '') {
      this.showAvaliableTime = true;
    } else {
      this.showAvaliableTime = false;
    }
  }

  setTime() {
    for (let i = 9; i < 22; i++) {
      if (i >= 10) {
        this.times.push(`${i}.00`)
      } else {
        this.times.push(`0${i}.00`)
      }
    }
  }

  checkAvaliableTime() {
    for (let i = 9; i < 22; i++) {
      if (i%2 == 0) {
        this.avaliableTime.push(true)
      } else {
        this.avaliableTime.push(false)
      }
    }
  }

  bookingTime(index: number,value: string) {
    console.log(index)
    this.selectedTime = []
    if (this.avaliableTime[index]) {
      this.selectedTime[index] = true
      this.showFormName = true;
      this.time = value;
    } else {
      this.showFormName = false;
    }    
  }

  submit() {
    console.log('submit', this.date, this.name, this.time)
  }
}
