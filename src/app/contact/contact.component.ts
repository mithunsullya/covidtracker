import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fade
  ]
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: [''],
      message: [''],
    });
   }

   get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }

  ngOnInit() {
  }

}
