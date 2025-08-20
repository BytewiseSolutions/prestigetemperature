import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 menuOpen = false;
  headerVisible = true;
  lastScrollTop = 0;

  constructor(private elRef: ElementRef) { }
  
 ngAfterViewInit(): void {
  const hamburger = this.elRef.nativeElement.querySelector('.hamburger');
  const navLinks  = this.elRef.nativeElement.querySelector('.nav-links');
  const hero      = document.querySelector('.hero') as HTMLElement;

  if (!hamburger || !navLinks || !hero) {
    return;
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('close');
    hero.style.marginTop = navLinks.classList.contains('open') ? '60px' : '0';
  });
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.headerVisible = st < this.lastScrollTop || st < 50;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
