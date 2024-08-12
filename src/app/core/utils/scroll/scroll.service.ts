// Angular
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop() {
    const scrollContainer = this.document.documentElement || this.document.body;
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
