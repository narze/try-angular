import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <span> counter: {{ count() }} </span>
      <span> doubleCount: {{ doubleCount() }} </span>
      <button (click)="increment()">+1</button>
      <button (click)="reset()">Reset</button>
    </p>
  `,
  styles: [
    `
      p {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class CounterComponent {
  readonly count = signal(0);
  readonly doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((c) => c + 1);
  }

  reset() {
    this.count.set(0);
  }

  constructor() {
    effect((onCleanup) => {
      console.log(`The current count is: ${this.count()}`);
      console.log(`The current doubleCount is: ${this.doubleCount()}`);

      onCleanup(() => {
        console.log('The effect is cleaning up');
      });
    });
  }
}
