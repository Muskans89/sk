// types/aos.d.ts
declare module 'aos' {
    interface AosOptions {
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      delay?: number;
    }
  
    interface Aos {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const aos: Aos;
    export default aos;
  }
  