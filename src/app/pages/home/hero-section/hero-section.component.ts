import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  modalOpen = false;
  modalImage = '';

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    const slides = document.querySelectorAll<HTMLImageElement>('.slider img');
    let index = 0;

    setInterval(() => {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
      index = (index + 1) % slides.length;
    }, 4000);
  }

  openModal(imageUrl: string) {
    this.modalImage = imageUrl;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImage = '';
  }
}
