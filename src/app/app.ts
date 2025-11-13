import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenderTest } from './render/rendertest/rendertest';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RenderTest],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('enantiomer');
} 
