/*
 * Description: fsf - friendly string formating
 * Author: Jan Jurka
 * Version: 0.0.1
 */

interface String {
  default: string;
  bold: string;
  italic: string;
  underline: string;
  strikethrough: string;
  dim: string;

  black: string;
  bBlack: string;
  red: string;
  bRed: string;
  green: string;
  bGreen: string;
  yellow: string;
  bYellow: string;
  blue: string;
  bBlue: string;
  magenta: string;
  bMagenta: string;
  cyan: string;
  bCyan: string;
  white: string;
  bWhite: string;
  rainbow: string;

  blackBg: string;
  bBlackBg: string;
  redBg: string;
  bRedBg: string;
  greenBg: string;
  bGreenBg: string;
  yellowBg: string;
  bYellowBg: string;
  blueBg: string;
  bBlueBg: string;
  magentaBg: string;
  bMagentaBg: string;
  cyanBg: string;
  bCyanBg: string;
  whiteBg: string;
  bWhiteBg: string;
  rainbowBg: string;

  rgb(r: number, g: number, b: number): string;
  gradient(
    start: [number, number, number],
    end: [number, number, number],
  ): string;

  rgbBg(r: number, g: number, b: number): string;
  gradientBg(
    start: [number, number, number],
    end: [number, number, number],
  ): string;
}
