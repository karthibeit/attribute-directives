import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    
    template: `<h1>My First Angular App</h1>
    <input type="radio" name="colors" (click)="colors='green'">green
    <p [myHighlight] = "colors"> This is green color </p>
    <p [myHighlight]="color" [defaultColor]="'violet'">
    <p ></p>
  Highlight me too!
</p>
    `
})
export class AppComponent { }
