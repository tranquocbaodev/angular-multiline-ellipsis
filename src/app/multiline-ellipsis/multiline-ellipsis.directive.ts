import { AfterViewInit, Directive, ElementRef, Inject, PLATFORM_ID, HostListener, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
/**
 * Removes excess text from element until it fits in elements
 * and appends a ellipsis symbol to end of text. This requires that
 * the elements height be fixed and it's `overflow` css property
 * be `hidden`
 *
 * @example
 * ```html
 * <p appEllipsis>Lorem ipsum dolor</p>
 * ```
 *
 */

@Directive({
  selector: '[appEllipsis]'
})
export class MultilineEllipsisDirective implements AfterViewInit {
  /**
   * Ellipsis charater
   */
  private dotChar = '…';
  /**
   * init text when load page
   */
  private textInit: any;
  /**
   * contructor
   */
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId
  ) { }
  /**
   * after view init
   */
  ngAfterViewInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);
    const el: HTMLElement = this.el.nativeElement;
    if (el.getAttribute('dotdotdot')) {
      this.dotChar = el.getAttribute('dotdotdot');
    }
    this.textInit = el.innerText.split(' ');
    if (isBrowser) {
      this.ellipsisFunc();
    }
  }
  /**
   * ellipsis Function
   */
  private ellipsisFunc(): void {
    const el: HTMLElement = this.el.nativeElement;
    let text = JSON.parse(JSON.stringify(this.textInit));
    el.innerText = `${text.join(' ')}`;
    while (el.scrollHeight > el.offsetHeight) {
      text = text.slice(0, -1);
      el.innerText = `${text.join(' ')}${this.dotChar}`;
    }
  }
  /**
   * listen window resize
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.ellipsisFunc();
  }
}

