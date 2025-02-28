import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentIndex = 0;
  contactForm: FormGroup;
  faqItems = [
    {
      question: 'What services do SoftmaxAI Services offer?',
      answer: 'SoftmaxAI offers a comprehensive suite of AI, Machine Learning, Data Engineering, Generative AI, and Cloud ML Engineering Services to empower your business.',
      isOpen: true
    },
    {
      question: 'Why should I choose SoftmaxAI Services over other companies?',
      answer: 'Our team of experts brings years of experience and cutting-edge knowledge to deliver customized AI solutions that drive real business value.',
      isOpen: false
    },
    {
      question: 'Are your AI and ML solutions custom-made for each client?',
      answer: 'Yes, we tailor our AI and ML solutions to meet the specific needs and challenges of each client, ensuring maximum effectiveness and ROI.',
      isOpen: false
    },
    {
      question: 'Do you provide support and maintenance for projects after completion?',
      answer: 'Absolutely. We offer comprehensive support and maintenance services to ensure your AI solutions continue to perform optimally after deployment.',
      isOpen: false
    },
    {
      question: 'Can you integrate AI with existing systems and technologies?',
      answer: 'Yes, our team specializes in seamless integration of AI solutions with your existing systems and technologies.',
      isOpen: false
    },
    {
      question: 'How do you ensure the security and privacy of data in AI development?',
      answer: 'We implement robust security protocols and compliance measures to ensure the highest level of data protection and privacy during AI development.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  toggleFAQ(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
  clients = [
    { name: 'Forwood', logo: 'assets/logos/forwood.png' },
    { name: 'Searchie', logo: 'assets/logos/searchie.png' },
    { name: 'Kapptek', logo: 'assets/logos/kapptek.png' },
    { name: 'Quicklert', logo: 'assets/logos/quicklert.png' },
    { name: 'Ambianic', logo: 'assets/logos/ambianic.png' },
    { name: 'Creo Solutions', logo: 'assets/logos/creo-solutions.png' },
    { name: 'LogoArena', logo: 'assets/logos/logoarena.png' },
    { name: 'CloudWerx', logo: 'assets/logos/cloudwerx.png' },
    { name: 'Solute Labs', logo: 'assets/logos/solute-labs.png' },
    { name: 'Svang', logo: 'assets/logos/svang.png' },
    { name: 'Beroe', logo: 'assets/logos/beroe.png' },
    { name: 'Pauser', logo: 'assets/logos/pauser.png' },
    { name: 'Hiding Elephant', logo: 'assets/logos/hiding-elephant.png' },
    { name: 'Mentia', logo: 'assets/logos/mentia.png' },
    { name: 'Tech Mahindra', logo: 'assets/logos/tech-mahindra.png' }
  ];
  testimonials = [
    {
      text: 'Working with SoftmaxAI was an exceptional experience...',
      name: 'Asim G.',
      role: 'Co-Founder, Searchie.io',
      image: 'https://via.placeholder.com/50'
    },
    {
      text: "We've been partnering with SoftmaxAI for a long term...",
      name: 'Daniel',
      role: 'Co-Founder, LogoArena',
      image: 'https://via.placeholder.com/50'
    }
  ];


  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

}
