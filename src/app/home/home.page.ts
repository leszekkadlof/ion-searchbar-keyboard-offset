import {Component} from '@angular/core';

@Component({
               selector   : 'app-home',
               templateUrl: 'home.page.html',
               styleUrls  : ['home.page.scss'],
           })
export class HomePage {
    items: string[] = [];
    selectedTab: string;

    constructor() {
        for (let x = 0; x < 50; x++) {
            this.items.push('' + x);
        }
    }

    onTabChange(tabName: string) {

    }
}
