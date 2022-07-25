import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  name = ''
  date = ''
  amount =''

  onNameChange(event: Event)  {
this.name = (<HTMLInputElement>event.target).value
  }

  onDateChange(event: Event) {
    this.date = (<HTMLInputElement>event.target).value
  }

  onAmountChange(event: Event) {
    this.amount = (<HTMLInputElement>event.target).value
  }
}
