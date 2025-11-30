/*
 * Description: fsf - friendly string formating
 * Author: Jan Jurka
 * Version: 0.0.1
 */

declare global {
  interface String {
    resetAll: string;

    bold: string;
    italic: string;
    underline: string;
    strikethrough: string;
    dim: string;

    replacePreviousLine: string;
    replacePreviousXLines(n: number): string;

    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    bBlack: string;
    bRed: string;
    bGreen: string;
    bYellow: string;
    bBlue: string;
    bMagenta: string;
    bCyan: string;
    bWhite: string;
    rainbow: string;

    blackBg: string;
    redBg: string;
    greenBg: string;
    yellowBg: string;
    blueBg: string;
    magentaBg: string;
    cyanBg: string;
    whiteBg: string;
    bBlackBg: string;
    bRedBg: string;
    bGreenBg: string;
    bYellowBg: string;
    bBlueBg: string;
    bMagentaBg: string;
    bCyanBg: string;
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
}

const ANSI = {
  resetAll: "\x1b[0m",

  bold: {
    set: "\x1b[1m",
    reset: "\x1b[22m",
  },
  italic: {
    set: "\x1b[3m",
    reset: "\x1b[23m",
  },
  underline: {
    set: "\x1b[4m",
    reset: "\x1b[24m",
  },
  strikethrough: {
    set: "\x1b[9m",
    reset: "\x1b[29m",
  },
  dim: {
    set: "\x1b[2m",
    reset: "\x1b[22m",
  },

  resetFg: "\x1b[39m",

  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",

  bBlack: "\x1b[90m",
  bRed: "\x1b[91m",
  bGreen: "\x1b[92m",
  bYellow: "\x1b[93m",
  bBlue: "\x1b[94m",
  bMagenta: "\x1b[95m",
  bCyan: "\x1b[96m",
  bWhite: "\x1b[97m",

  resetBg: "\x1b[49m",

  blackBg: "\x1b[40m",
  redBg: "\x1b[41m",
  greenBg: "\x1b[42m",
  yellowBg: "\x1b[43m",
  blueBg: "\x1b[44m",
  magentaBg: "\x1b[45m",
  cyanBg: "\x1b[46m",
  whiteBg: "\x1b[47m",

  bBlackBg: "\x1b[100m",
  bRedBg: "\x1b[101m",
  bGreenBg: "\x1b[102m",
  bYellowBg: "\x1b[103m",
  bBlueBg: "\x1b[104m",
  bMagentaBg: "\x1b[105m",
  bCyanBg: "\x1b[106m",
  bWhiteBg: "\x1b[107m",
};

Object.defineProperties(String.prototype, {
  resetAll: {
    get(): string {
      return ANSI.resetAll + String(this);
    },
  },
});

String.prototype.replacePreviousXLines = function (
  this: string,
  n: number,
): string {
  return String(this);
};

String.prototype.rgb = function (
  this: string,
  r: number,
  g: number,
  b: number,
): string {
  return String(this);
};

String.prototype.gradient = function (
  this: string,
  start: [number, number, number],
  end: [number, number, number],
): string {
  return String(this);
};

String.prototype.rgbBg = function (
  this: string,
  r: number,
  g: number,
  b: number,
): string {
  return String(this);
};

String.prototype.gradientBg = function (
  this: string,
  start: [number, number, number],
  end: [number, number, number],
): string {
  return String(this);
};

export {};
