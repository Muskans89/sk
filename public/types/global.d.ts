declare module '*.jpg' {
    const value: import('next/dist/client/image').StaticImageData;
    export default value;
  }
  
  declare module '*.png' {
    const value: import('next/dist/client/image').StaticImageData;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: import('next/dist/client/image').StaticImageData;
    export default value;
  }
  
  declare module '*.gif' {
    const value: import('next/dist/client/image').StaticImageData;
    export default value;
  }
  
  declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  