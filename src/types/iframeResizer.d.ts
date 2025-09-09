declare global {
  interface Window {
    iFrameResize: (options: IFrameResizerOptions, selector: string) => void;
  }
}

interface IFrameResizerOptions {
  log?: boolean;
  checkOrigin?: boolean | string[];
  heightCalculationMethod?: string;
  sizeWidth?: boolean;
  scrolling?: boolean;
  autoResize?: boolean;
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  tolerance?: number;
}
export {};
