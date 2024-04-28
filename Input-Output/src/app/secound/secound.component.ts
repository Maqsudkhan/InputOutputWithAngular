import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from "../first/first.component";

@Component({
    selector: 'app-secound',
    standalone: true,
    templateUrl: './secound.component.html',
    styleUrl: './secound.component.scss',
    imports: [FirstComponent, SecoundComponent]
})
export class SecoundComponent {

  txt = "Hello Maqsudkhan"

 items = ['item1', 'item2', 'item3', 'item4'];

 addItem(newItem: string) {
   this.items.push(newItem);
 }

}
