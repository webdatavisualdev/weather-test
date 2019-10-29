import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  cities = ['London', 'NY', 'Tokyo'];
  city = '';
  weather: any;
  dice = 1;
  dices = [];

  constructor(private api: ApiService) {}

  changeCity() {
    if (this.city) {
      this.api.getWeather().subscribe((res: any) => {
        this.weather = res[this.city].sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })[0];
      });
    }
  }

  rollDice() {
    this.dice = Math.floor(Math.random() * 7) || 1;
  }

  testCase() {
    this.dices = [];
    for (let i = 0 ; i < 1000 ; i ++) {
      this.rollDice();
      this.dices.push(this.dice);
    }
  }
}
