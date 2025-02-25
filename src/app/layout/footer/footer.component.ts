import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = 2025;

  ngOnInit(): void {
    // Dynamically get the current year
    this.currentYear = new Date().getFullYear();
  }
}
