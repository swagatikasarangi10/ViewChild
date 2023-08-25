import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  enterName = 'swagatika';
  parentData = '';
  @ViewChild('nameRef') nameElementRef: ElementRef;
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
  TransferData() {
    this.parentData = this.enterName;
  }
  value = '';
  sendData(value) {
    this.value = value;
  }
}
