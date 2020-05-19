const puppeteer = require("puppeteer")
const { name, emailId, url } = require("./config")

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "load" })
  await page.type("#Q1_1", name)
  await page.type("#Q2_1", emailId)
  await page.select("#Q4", "4")
  await page.type("#Q7_1", new Date().toLocaleDateString())
  await page.select("#Q3", "2")
  //fill hours
  await page.type("#Q5_1_1", "2")
  //fill task
  await page.select("#Q6", "16")
  await page.screenshot({ path: "formfill1.png", fullPage: true })
  await page.click("#BN")
  // Wait for search results page to load
  await page.waitForNavigation({ waitUntil: "load" })
  await page.screenshot({ path: "formsubmit1.png", fullPage: true })
  console.log("FOUND!", page.url())
  await browser.close()
})()
// 2nd task
const function2 = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "load" })
  await page.type("#Q1_1", name)
  await page.type("#Q2_1", emailId)
  await page.select("#Q4", "4")
  await page.type("#Q7_1", new Date().toLocaleDateString())
  await page.select("#Q3", "2")
  //fill hours
  await page.type("#Q5_1_1", "7")
  //fill task
  await page.select("#Q6", "4")
  await page.screenshot({ path: "formfill2.png", fullPage: true })
  await page.click("#BN")
  // Wait for search results page to load
  await page.waitForNavigation({ waitUntil: "load" })
  await page.screenshot({ path: "formsubmit2.png", fullPage: true })
  console.log("FOUND!", page.url())
  await browser.close()
}

function2()
