import { Component } from '@angular/core';
import { ITEM_DATA } from './models/item-data'
import { Item } from './models/item'
import { CookieProvider } from 'src/settings/cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sekiro';

  classNamePrefix = 'item-img'

  constructor(public items: ITEM_DATA, private cookies: CookieProvider) {}

  ngOnInit(): void{
    let _items = JSON.parse(window.localStorage.getItem('clicko'));

    if (_items != null) {
      this.items = _items;
    }


  }

  itemClick(item) {
    item.obtained = !item.obtained;

    window.localStorage.setItem('clicko', JSON.stringify(this.items));
  }

  clear(){
    window.localStorage.removeItem('clicko');
    location.reload();
  }
}
