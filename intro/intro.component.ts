import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent{

    col = '';
    constructor(){
        this.col = Math.random()>0.5? 'ok' : 'nah';
    }

    cl(){
        return this.col == 'ok'? 'green' : 'red';
    }
}