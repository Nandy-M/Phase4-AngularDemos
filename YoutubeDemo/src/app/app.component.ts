import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'YoutubeDemo';

  isUserLogedIn = true;
  userObject = { firstname: 'Nandhini', lastname: 'Murugesan' }; //propertbinding
  imgurl = 'test.png'; //propertbinding
  altimg = 'This is message for missing image'; //propertbinding
  message = 'style color property binding'; //propertbinding

  colval = '2'; //attributebinding

  styleprop = 'purple'; //ngstyle
  // txtcolor = 'blue';
  txtcolor = 'red'; //ngstyle
  success_msg = true; //ngif
  SuperPower = 'spiderman'; //string for switch
  contacts = [
    {
      firstName: 'Nandhu',
      lastName: 'Tutorials',
      contactId: '123',
    },
    {
      firstName: 'Bala',
      lastName: 'Tutorials',
      contactId: '124',
    },
    {
      firstName: 'Vimala',
      lastName: 'Tutorials',
      contactId: '125',
    },
    {
      firstName: 'Murugesan',
      lastName: 'Tutorials',
      contactId: '127',
    },
    {
      firstName: 'Kavya',
      lastName: 'Tutorials',
      contactId: '126',
    },
    {
      firstName: 'Siva',
      lastName: 'Tutorials',
      contactId: '129',
    },
    {
      firstName: 'Moni',
      lastName: 'Tutorials',
      contactId: '128',
    },
  ];
  sayHello() {
    console.log('Hello This is Event Binding');
  }
  highlightBGcolor() {
    console.log('Hi I am being Highlighted');
  }
  inputBox() {
    console.log('This is input box');
  }

  userName = '';
  dataValue = 16;
}
