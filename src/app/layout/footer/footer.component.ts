import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = 2025;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // Dynamically get the current year
    this.currentYear = new Date().getFullYear();
  }
  submitForm(): void {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
