import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service, SERVICES } from '../../data/service-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class HomeComponent implements OnInit {
  modalOpen = false;
  modalImage: string = '';
  services: Service[] = SERVICES;

  ngOnInit() {
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
