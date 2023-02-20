import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuComponentCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Ion-Button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Checkbox', url: 'checkbox', icon: 'checkbox' },
    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'Accordion', url: 'accordion', icon: 'chevron-down' },
    { title: 'Acction-Sheet', url: 'actionsheet', icon: 'document' },
    { title: 'Tags', url: 'tags', icon: 'bookmark' },
    { title: 'JS', url: 'js', icon: 'cafe' },
    { title: 'Datetime', url: 'datetime', icon: 'time' },
  ];

  public menuNativeCollection = [
    { title: 'Camera', url: 'camera', icon: 'camera' },
    { title: 'Flashlight', url: 'flashlight', icon: 'flash' },

  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
