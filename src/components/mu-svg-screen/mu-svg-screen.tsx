import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { Link, CircleLink, RectLink } from '.';
import { VNode } from '@stencil/core/dist/declarations';

/**
 * SVG screen component
 */
@Component({
  tag: 'mu-svg-screen',
  styleUrl: 'mu-svg-screen.css',
  shadow: true
})
export class SVGScreen {
  /**
   * The width of the screen (for scaling)
   */
  @Prop() width!: number;

  /**
   * The height of the screen (for scaling)
   */
  @Prop() height!: number;

  /**
   * The src of the background image
   */
  @Prop() src!: string;

  /**
   * Array of links
   */
  @Prop() links: Array<JSX.Element|CircleLink|RectLink> = [];

  /**
   * Router history
   */
  @Prop() private history: RouterHistory;

  /**
   * Handles click events
   * @param ev Click event
   */
  onClick(ev: UIEvent) {
    if (this.history) {
      this.history.push((ev.currentTarget as HTMLElement).getAttribute('href'));
      ev.preventDefault();
    }
  }

  render() {
    return (
      <svg style={{ backgroundImage: 'url(' + this.src + ')' }} viewBox={[0, 0, this.width, this.height].join(' ')} xmlns='http://www.w3.org/2000/svg'>{this.links.map((link) => {
        let a: VNode;
        switch ((link as Link).type) {
          case "circle":
          const circle = link as CircleLink;
          a = <a href={circle.href} onClick={(ev: UIEvent) => this.onClick(ev)}><circle cx={circle.cx} cy={circle.cy} r={circle.r} /></a>
          break;

          case "rect":
          const rect = link as RectLink;
          a = <a href={rect.href} onClick={(ev: UIEvent) => this.onClick(ev)}><rect width={rect.width} height={rect.height} x={rect.x} y={rect.y} /></a>
          break;

          default:
          a = link as VNode;
          a.vattrs.onClick = (ev: UIEvent) => this.onClick(ev);
        }
        return a;
      })}</svg>
    );
  }
}
