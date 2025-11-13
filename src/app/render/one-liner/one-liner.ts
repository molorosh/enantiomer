import { Component, input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-liner',
  imports: [],
  templateUrl: './one-liner.svg',
  styleUrl: './one-liner.less',
})
export class OneLiner {
  codedText = input<string>('ABCD');
  @ViewChild('svgText') svgText!: ElementRef<SVGTextElement>;

  public codedTextToSvgText(): string {
    return this.codedText();
  }
}
