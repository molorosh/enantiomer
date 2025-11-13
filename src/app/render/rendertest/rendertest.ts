import { Component } from '@angular/core';
import { OneLiner } from '../one-liner/one-liner';

@Component({
  selector: 'app-rendertest',
  imports: [OneLiner],
  templateUrl: './rendertest.html',
  styleUrl: './rendertest.less',
})
export class RenderTest {
  protected demoText:string = "Render Test";

  public doClear(): void {
    this.demoText = "ABC";
  }

  public doSimple(): void {
    this.demoText = "<ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>";
  }

  
  public doMedium(): void {
    this.demoText = "<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>";
  }

  public doComplex(): void {
    this.demoText = "<ruby>複雑<rp>(</rp><rt>ふくざつ</rt><rp>)</rp></ruby>な<ruby>文章<rp>(</rp><rt>ぶんしょう</rt><rp>)</rp></ruby>を<ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>むのは<ruby>難<rp>(</rp><rt>むずか</rt><rp>)</rp></ruby>しいです。";
  }

  public demoTextToHtmlText(): string {
    return this.demoText;
  }

}