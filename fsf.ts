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

  lineUp: "\x1b[1A",
  lineDel: "\x1b[2K",

  weigth: {
    bold: "\x1b[1m",
    dim: "\x1b[2m",
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

  fg: {
    reset: "\x1b[39m",

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
  },

  bg: {
    reset: "\x1b[49m",

    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",

    bBlack: "\x1b[100m",
    bRed: "\x1b[101m",
    bGreen: "\x1b[102m",
    bYellow: "\x1b[103m",
    bBlue: "\x1b[104m",
    bMagenta: "\x1b[105m",
    bCyan: "\x1b[106m",
    bWhite: "\x1b[107m",
  },
};

const isTTY =
  typeof Deno !== "undefined" ? Deno.stdout.isTerminal() : process.stdout.isTTY;

const ansiRegex = /(\x1b\[[0-9;]*[mK])/g;

function splitAnsi(str: string): string[] {
  const parts = str.split(ansiRegex);
  return parts.filter((part) => part.length > 0);
}

function applyAnsi(content: string, enable: string, disable: string): string {
  if (!isTTY) return content;
  let resetAllCount = 0;

  content = splitAnsi(content)
    .map((str: string) => {
      if (str === ANSI.resetAll) {
        if (resetAllCount++ % 2 === 0) return str + enable;
      }

      return str === disable ? str + enable : str;
    })
    .join("");

  return enable + content + disable;
}

function getRandomAnsiColor(type: "fg" | "bg"): string {
  const colorObject = type === "fg" ? ANSI.fg : ANSI.bg;

  const allCodes = Object.values(colorObject) as string[];

  const resetCode = type === "fg" ? ANSI.fg.reset : ANSI.bg.reset;

  const colorCodes = allCodes.filter((code) => code !== resetCode);

  const randomIndex = Math.floor(Math.random() * colorCodes.length);

  return colorCodes[randomIndex];
}

Object.defineProperties(String.prototype, {
  resetAll: {
    get(): string {
      return applyAnsi(String(this), ANSI.resetAll, ANSI.resetAll);
    },
  },

  bold: {
    get(): string {
      return applyAnsi(String(this), ANSI.weigth.bold, ANSI.weigth.reset);
    },
  },
  dim: {
    get(): string {
      return applyAnsi(String(this), ANSI.weigth.dim, ANSI.weigth.reset);
    },
  },
  italic: {
    get(): string {
      return applyAnsi(String(this), ANSI.italic.set, ANSI.italic.reset);
    },
  },
  underline: {
    get(): string {
      return applyAnsi(String(this), ANSI.underline.set, ANSI.underline.reset);
    },
  },
  strikethrough: {
    get(): string {
      return applyAnsi(
        String(this),
        ANSI.strikethrough.set,
        ANSI.strikethrough.reset,
      );
    },
  },

  replacePreviousLine: {
    get(): string {
      return applyAnsi(String(this), ANSI.lineUp + ANSI.lineDel, "");
    },
  },

  black: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.black, ANSI.fg.reset);
    },
  },
  red: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.red, ANSI.fg.reset);
    },
  },
  green: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.green, ANSI.fg.reset);
    },
  },
  yellow: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.yellow, ANSI.fg.reset);
    },
  },
  blue: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.blue, ANSI.fg.reset);
    },
  },
  magenta: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.magenta, ANSI.fg.reset);
    },
  },
  cyan: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.cyan, ANSI.fg.reset);
    },
  },
  white: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.white, ANSI.fg.reset);
    },
  },
  rainbow: {
    get(): string {
      const parts = splitAnsi(String(this)).map((str: string) => {
        if (str.match(ansiRegex)) return str;

        return str
          .split("")
          .map((char: string) => getRandomAnsiColor("fg") + char)
          .join("");
      });

      return parts.join("") + ANSI.fg.reset;
    },
  },

  bBlack: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bBlack, ANSI.fg.reset);
    },
  },
  bRed: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bRed, ANSI.fg.reset);
    },
  },
  bGreen: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bGreen, ANSI.fg.reset);
    },
  },
  bYellow: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bYellow, ANSI.fg.reset);
    },
  },
  bBlue: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bBlue, ANSI.fg.reset);
    },
  },
  bMagenta: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bMagenta, ANSI.fg.reset);
    },
  },
  bCyan: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bCyan, ANSI.fg.reset);
    },
  },
  bWhite: {
    get(): string {
      return applyAnsi(String(this), ANSI.fg.bWhite, ANSI.fg.reset);
    },
  },

  blackBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.black, ANSI.bg.reset);
    },
  },
  redBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.red, ANSI.bg.reset);
    },
  },
  greenBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.green, ANSI.bg.reset);
    },
  },
  yellowBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.yellow, ANSI.bg.reset);
    },
  },
  blueBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.blue, ANSI.bg.reset);
    },
  },
  magentaBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.magenta, ANSI.bg.reset);
    },
  },
  cyanBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.cyan, ANSI.bg.reset);
    },
  },
  whiteBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.white, ANSI.bg.reset);
    },
  },
  rainbowBg: {
    get(): string {
      const parts = splitAnsi(String(this)).map((str: string) => {
        if (str.match(ansiRegex)) return str;

        return str
          .split("")
          .map((char: string) => getRandomAnsiColor("bg") + char)
          .join("");
      });

      return parts.join("") + ANSI.bg.reset;
    },
  },

  bBlackBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bBlack, ANSI.bg.reset);
    },
  },
  bRedBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bRed, ANSI.bg.reset);
    },
  },
  bGreenBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bGreen, ANSI.bg.reset);
    },
  },
  bYellowBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bYellow, ANSI.bg.reset);
    },
  },
  bBlueBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bBlue, ANSI.bg.reset);
    },
  },
  bMagentaBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bMagenta, ANSI.bg.reset);
    },
  },
  bCyanBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bCyan, ANSI.bg.reset);
    },
  },
  bWhiteBg: {
    get(): string {
      return applyAnsi(String(this), ANSI.bg.bWhite, ANSI.bg.reset);
    },
  },
});

String.prototype.replacePreviousXLines = function (
  this: string,
  n: number,
): string {
  if (!isTTY) return String(this);

  let prefix = "";
  while (0 < n--) {
    prefix += ANSI.lineUp + ANSI.lineDel;
  }
  return prefix + String(this);
};

String.prototype.rgb = function (
  this: string,
  r: number,
  g: number,
  b: number,
): string {
  if (!isTTY) return String(this);

  return `\x1b[38;2;${r};${g};${b}m${String(this)}${ANSI.fg.reset}`;
};

String.prototype.gradient = function (
  this: string,
  start: [number, number, number],
  end: [number, number, number],
): string {
  if (!isTTY) return String(this);

  const strArr = splitAnsi(String(this));

  const steps = strArr.reduce((acc: number, str: string) => {
    if (str.match(ansiRegex)) return acc;
    return acc + str.length;
  }, 0);
  let output = "";

  const [sR, sG, sB] = start;
  const [eR, eG, eB] = end;

  const deltaR = eR - sR;
  const deltaG = eG - sG;
  const deltaB = eB - sB;

  let charIndex = 0;

  for (const part of strArr) {
    if (part.match(ansiRegex)) {
      output += part;
      continue;
    }

    for (const char of part) {
      const t = charIndex / (steps - 1);
      const currentR = Math.round(sR + deltaR * t);
      const currentG = Math.round(sG + deltaG * t);
      const currentB = Math.round(sB + deltaB * t);
      const prefix = `\x1b[38;2;${currentR};${currentG};${currentB}m`;
      output += prefix + char;
      charIndex++;
    }
  }

  return output + ANSI.fg.reset;
};

String.prototype.rgbBg = function (
  this: string,
  r: number,
  g: number,
  b: number,
): string {
  if (!isTTY) return String(this);

  return `\x1b[48;2;${r};${g};${b}m${String(this)}${ANSI.bg.reset}`;
};

String.prototype.gradientBg = function (
  this: string,
  start: [number, number, number],
  end: [number, number, number],
): string {
  if (!isTTY) return String(this);

  const strArr = splitAnsi(String(this));

  const steps = strArr.reduce((acc: number, str: string) => {
    if (str.match(ansiRegex)) return acc;
    return acc + str.length;
  }, 0);
  let output = "";

  const [sR, sG, sB] = start;
  const [eR, eG, eB] = end;

  const deltaR = eR - sR;
  const deltaG = eG - sG;
  const deltaB = eB - sB;

  let charIndex = 0;

  for (const part of strArr) {
    if (part.match(ansiRegex)) {
      output += part;
      continue;
    }

    for (const char of part) {
      const t = charIndex / (steps - 1);
      const currentR = Math.round(sR + deltaR * t);
      const currentG = Math.round(sG + deltaG * t);
      const currentB = Math.round(sB + deltaB * t);
      const prefix = `\x1b[48;2;${currentR};${currentG};${currentB}m`;
      output += prefix + char;
      charIndex++;
    }
  }

  return output + ANSI.bg.reset;
};

export {};
