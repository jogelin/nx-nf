import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'nx-nf-hero',
  template: `
    <div class="bg-neutral-50 py-24 px-6 text-center">
      <h1
        class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
      >
        The best offer on the market <br /><span class="text-primary"
          >for your business</span
        >
      </h1>
      <a
        class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] md:mr-2 md:mb-0"
        href="#!"
        role="button"
        >Get started</a
      >
      <a
        class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 "
        href="#!"
        role="button"
        >Learn more</a
      >
    </div>
  `,
  styles: ``,
})
export class HeroComponent {}
