# fsf

friendly string formating

---

String prototype extension that introduces ansi escape char composition

![preview](https://github.com/user-attachments/assets/25d956cd-5bb9-444d-bd15-84353246543c)

---

## Usage

```typescript

import "./fsf.ts";

console.log("bold red text".bold.red);
console.log("gradient bg, italic, rainbow text"
            .italic.rainbow.gradientBg([255,0,0],[0,255,0]));
console.log(`blue ${"red underlined".red.underline} all on white bg`.whiteBg.blue);

```

### All options

| Option                                  | Effect                               |
|-----------------------------------------|--------------------------------------|
|"".resetAll                              | removes all ansi formating           |
|"".bold                                  | **bold**                             |
|"".italic                                | *italic*                             |
|"".underline                             | <ins>underline</ins>                 |
|"".strikethrough                         | ~~strikethrough~~                    |
|"".dim                                   | dim                                  |
|"".replacePreviousLine                   | deletes 1 previous line              |
|"".replacePreviousXLines(n: number)      | deletes n previous lines             |
|"".black                                 | black foreground                     |
|"".red                                   | red foreground                       |
|"".green                                 | green foreground                     |
|"".yellow                                | yellow foreground                    |
|"".blue                                  | blue foreground                      |
|"".magenta                               | magenta foreground                   |
|"".cyan                                  | cyan foreground                      |
|"".white                                 | white foreground                     |
|"".blackBg                               | black background                     |
|"".redBg                                 | red background                       |
|"".greenBg                               | green background                     |
|"".yellowBg                              | yellow background                    |
|"".blueBg                                | blue background                      |
|"".magentaBg                             | magenta background                   |
|"".cyanBg                                | cyan background                      |
|"".whiteBg                               | white background                     |
|"".bBlack                                | bright black foreground              |
|"".bRed                                  | bright red foreground                |
|"".bGreen                                | bright green foreground              |
|"".bYellow                               | bright yellow foreground             |
|"".bBlue                                 | bright blue foreground               |
|"".bMagenta                              | bright magenta foreground            |
|"".bCyan                                 | bright cyan foreground               |
|"".bWhite                                | bright white foreground              |
|"".bBlackBg                              | bright black background              |
|"".bRedBg                                | bright red background                |
|"".bGreenBg                              | bright green background              |
|"".bYellowBg                             | bright yellow background             |
|"".bBlueBg                               | bright blue background               |
|"".bMagentaBg                            | bright magenta background            |
|"".bCyanBg                               | bright cyan background               |
|"".bWhiteBg                              | bright white background              |
|"".rainbow                               | random foreground color for each char|
|"".rainbowBg                             | random background color for each char|
|"".rgb(r:number, g:number, b:number)     | RGB defined foreground color         |
|"".rgbBg(r:number, g:number, b:number)   | RGB defined background color         |
|"".gradient(start:[r,g,b], end:[r,g,b])  | RGB defined foregorund gradient      |
|"".gradientBg(start:[r,g,b], end:[r,g,b])| RGB defined background gradient      |
