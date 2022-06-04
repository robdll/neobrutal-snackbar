import { Component } from '@angular/core';
import { SnackNotification } from "./models/notification.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notifications : Array<SnackNotification> = [];
  titles = [
    "CodeSandbox", 
    "Sandbox", 
    "Robdll",
    "My Title",
    "Could Be Important"
  ];
  texts = [
    "This is a simple notification",
    "Remember to set your notification",
    "This is even better because it's Sunday today",
    "Always follow the sun",
    "What are we gonna eat today?"
  ];
  colors = [
    '#F8360D',
    '#5EF80D',
    '#F80DEE',
    '#F1F80D',
    ''
  ]
  requiredTitle: string = '';
  requiredText: string = '';
  
  addNotification() {
    const title = this.requiredTitle || this.takeRandom(this.titles);
    const text = this.requiredText || this.takeRandom(this.texts);
    const notification : SnackNotification = new SnackNotification(
      title, 
      text,
      `${this.getRandomInt(1,59)}  minutes ago`,
      this.takeRandom(this.colors)
    )
    this.notifications = [ ...this.notifications, notification];
    console.log("########### ADDING NEW NOTIFICATION \n", notification.title, ' - ', notification.text);
    this.requiredTitle = '';
    this.requiredText = '';
  }
    
  takeRandom(arr: Array<string>) : string {
    const idx = Math.floor(Math.random() * 10) % 5;
    return arr[idx];
  }
  
  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
}
  