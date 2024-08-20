import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  container = "";

  addClass() {
    this.container = "right-panel-active";
  }
  removeClass() {
    this.container = "";
  }
  getInputData(event : Event) {

  }
}
