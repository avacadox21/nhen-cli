const inquirer = require("inquirer");
const figlet = require("figlet");
const clear = require("clear");
const chalk = require("chalk");
const puppeteer = require("puppeteer");



async function nocapsir() {
  let legend;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://bit.ly/3EsOuF0");

  let data = await page.evaluate(() => {
    legend = [];
    let gg = Array.from(document.querySelectorAll("div.caption")).map(
      (ng) => ng.innerText
    );
    for (let i = 0; i < gg.length; i++) {
      legend.push(i + " - " + gg[i]);
    }
    return legend.join("\r\n");
  });
  console.log(chalk.greenBright.underline(data));
  console.log(legend) // this gives me undefined

  await browser.close();
}

clear();
console.log(
  chalk.yellow(figlet.textSync("Nhenti", { horizontalLayout: "full" }))
);





async function randomLink() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  for (let i = 0; i < 5; i++){
    await page.goto("https://nhentai.net/random")
    let url = await page.url()
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    setTimeout(function(){console.log(url)}, 1000)
  }

  
  await browser.close();

}

async function genreLesbian(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto("https://nhentai.net/search/?q=lesbian")
  let commonLegend = []
    let data = await page.evaluate(() => {
    commonLegend = [];
    let gg = Array.from(document.querySelectorAll("a.cover")).map(
      (ng) => ng.innerText
    );
    for (let i = 0; i < gg.length; i++) {
      commonLegend.push(i + " - " + gg[i]);
    }
    return commonLegend.join("\r\n");
  });
     console.log(chalk.red.underline(data));
    await browser.close();

}

async function genreGay(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto("https://nhentai.net/search/?q=gay")
  let commonLegend = []
    let data = await page.evaluate(() => {
    commonLegend = [];
    let gg = Array.from(document.querySelectorAll("a.cover")).map(
      (ng) => ng.innerText
    );
    for (let i = 0; i < gg.length; i++) {
      commonLegend.push(i + " - " + gg[i]);
    }
    return commonLegend.join("\r\n");
  });
    console.log(chalk.red.underline(data));
    await browser.close();

}
async function genreEnglish(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto("https://nhentai.net/search/?q=english")
  let commonLegend = []
    let data = await page.evaluate(() => {
    commonLegend = [];
    let gg = Array.from(document.querySelectorAll("a.cover")).map(
      (ng) => ng.innerText
    );
    for (let i = 0; i < gg.length; i++) {
      commonLegend.push(i + " - " + gg[i]);
    }
    return commonLegend.join("\r\n");
  });
    console.log(chalk.red.underline(data));
    await browser.close();

}

async function genreFuta(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto("https://nhentai.net/search/?q=futa")
  let commonLegend = []
    let data = await page.evaluate(() => {
    commonLegend = [];
    let gg = Array.from(document.querySelectorAll("a.cover")).map(
      (ng) => ng.innerText
    );
    for (let i = 0; i < gg.length; i++) {
      commonLegend.push(i + " - " + gg[i]);
    }
    return commonLegend.join("\r\n");
  });
    console.log(chalk.red.underline(data));
    await browser.close();

}

 



let globalOptions = ["[1] Look at popular and trending", "[2] Quit","[3] I am feeling random","[4] By catergory"];
let globalGenreOptions = ["[1] Lesbian", "[2] Gay", "[3] English", "[4]Futa"]

inquirer
  .prompt([
    {
      type: "list",
      name: "option",
      message: "Choose What you wanna do",
      choices: globalOptions,
      default: "[1] Look at list",
    },
  ])
  .then((answers) => {
    let result = answers.option;
    if (result == globalOptions[0]) {
      clear();
      console.log(
        chalk.greenBright.bgBlackBright("   SOMEONE SEEMS SUS     \n\n\n")
      );
      nocapsir();
    } else if (result == globalOptions[1]) {
      console.log("eren jaegar");
    } else if (result == globalOptions[2]){
      console.log(chalk.yellow ("Please wait for the codes, it may take some time depending on your net speed"))
      randomLink();
    } else if (result == globalOptions[3]){
      console.log("Aight bet a-hole")
      inquirer.prompt([
      { //if ur reading this then ur mom is thicc
        type: "list",
        name: "genreOption",
        message: "Select your genre",
        choices: globalGenreOptions,
        default: "[1] Lesbian"
      },
      ])
      .then((genreAnswers)=>{
        let genreResult = genreAnswers.genreOption;
        if(genreResult == globalGenreOptions[0]){
          clear();
          console.log(chalk.red("Searching lesbian list"))
          genreLesbian()
        }
        else if(genreResult == globalGenreOptions[1]){
          clear();
          console.log(chalk.red("Searching gay list"))
          genreGay()
        }
        else if(genreResult == globalGenreOptions[2]){
          clear();
          console.log(chalk.red("Searching english list"))
          genreEnglish()
        }
        else if(genreResult == globalGenreOptions[3]){
          clear();
          console.log(chalk.red("Searching futa list"))
          genreFuta()
        }
        //how to kill https://dick.com
        
        
      })
    }
  });

//send help

























































































































































