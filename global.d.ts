// global.d.ts

declare module '*.jpg' {
    const value: any;
    export default value;
  }
  
  declare module '*.png' {
    const value: any;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: any;
    export default value;
  }
  
  declare module '*.gif' {
    const value: any;
    export default value;
  }
  
  declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  