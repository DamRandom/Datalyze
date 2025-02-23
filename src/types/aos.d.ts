declare module "aos" {
    interface AOSOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    interface AOS {
      init(options?: AOSOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const aos: AOS;
    export default aos;
  }
  