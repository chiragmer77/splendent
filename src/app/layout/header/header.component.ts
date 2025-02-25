import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink]
})
export class HeaderComponent {
  mobileMenuOpen = false;
  servicesOpen = false;
  solutionsOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown(dropdown: string): void {
    if (dropdown === 'services') {
      this.servicesOpen = !this.servicesOpen;
    } else if (dropdown === 'solutions') {
      this.solutionsOpen = !this.solutionsOpen;
    }
  }
}
