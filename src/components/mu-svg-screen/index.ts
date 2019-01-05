export enum LinkType {
    circle = 'circle',
    rect = 'rect'
  }
  
  export interface Link {
    type: LinkType;
    href: string;
  }
  
  export interface CircleLink extends Link {
    cx: number;
    cy: number;
    r: number;
  }
  
  export interface RectLink extends Link {
    width: number;
    height: number;
    x: number;
    y: number;
  }
  