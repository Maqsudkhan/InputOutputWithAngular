import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  @Input() myText: string = '';
  
  @Output() newItemEvent = new EventEmitter<string>();

  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
