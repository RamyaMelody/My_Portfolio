import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;
  ischeck:boolean=false;

  constructor(private contactService: ContactService) {
    this.contactForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'msg': new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  sendData() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
       this.contactService.contactData(this.contactForm.value).subscribe((data)=>{
        console.log(data)
        console.log(data.message)
        if(data.message==="sent")
        {          
          this.ischeck = true; // success message displayed in div tag
          this.contactForm.reset();
        }
      })
    }
  }

}
