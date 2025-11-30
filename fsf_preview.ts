import "./fsf.ts";

console.log("resetAll".resetAll);

console.log("bold".bold);
console.log("italic".italic);
console.log("underline".underline);
console.log("strikethrough".strikethrough);
console.log("dim".dim);

console.log("control line, you should not see this!");
console.log("replacePreviousLine".replacePreviousLine);
console.log("control line, you should not see this!");
console.log("control line, you should not see this!");
console.log("replacePreviousXLines(n: number)".replacePreviousXLines(2));

console.log("black".black);
console.log("bBlack".bBlack);
console.log("red".red);
console.log("bRed".bRed);
console.log("green".green);
console.log("bGreen".bGreen);
console.log("yellow".yellow);
console.log("bYellow".bYellow);
console.log("blue".blue);
console.log("bBlue".bBlue);
console.log("magenta".magenta);
console.log("bMagenta".bMagenta);
console.log("cyan".cyan);
console.log("bCyan".bCyan);
console.log("white".white);
console.log("bWhite".bWhite);
console.log("rainbow".rainbow);

console.log("blackBg".blackBg);
console.log("bBlackBg".bBlackBg);
console.log("redBg".redBg);
console.log("bRedBg".bRedBg);
console.log("greenBg".greenBg);
console.log("bGreenBg".bGreenBg);
console.log("yellowBg".yellowBg);
console.log("bYellowBg".bYellowBg);
console.log("blueBg".blueBg);
console.log("bBlueBg".bBlueBg);
console.log("magentaBg".magentaBg);
console.log("bMagentaBg".bMagentaBg);
console.log("cyanBg".cyanBg);
console.log("bCyanBg".bCyanBg);
console.log("whiteBg".whiteBg);
console.log("bWhiteBg".bWhiteBg);
console.log("rainbowBg".rainbowBg);

console.log("rgb".rgb(125, 255, 0));
console.log("gradient".gradient([255, 0, 0], [0, 255, 0]));

console.log("rgbBg".rgbBg(125, 255, 0));
console.log("gradientBg".gradientBg([255, 0, 0], [0, 255, 0]));

console.log(
  "\n\n" +
    `compositio ${"test".rainbow.bold.yellowBg} this will go ${"bad".bold.redBg.black}`
      .blue.italic,
);
console.log("bold red text".bold.red);
console.log(
  "gradient bg, italics, rainbow text".italic.rainbow.gradientBg(
    [255, 0, 0],
    [0, 255, 0],
  ),
);
console.log(
  `blue ${"red underlined".red.underline} all on green bg`.greenBg.blue,
);
