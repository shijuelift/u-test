/**dom 操作测试 */

const { expect } = require('chai')
const webdriver = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome')
const By = webdriver.By

describe('百度首页 UI 测试', function() {
  this.timeout(50000)
  let driver
  before(() => {
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(/*new chromeDriver.Options().addArguments(['headless'])*/)
    .build();
  })
  
  it('should have title "百度一下，你就知道"', done => {
    driver.get('https://www.baidu.com')
      .then(() => driver.getTitle())
      .then(title => {
        expect(title).to.equal('百度一下，你就知道')
        done()
      })
  })

  it('should have a search button, name is 百度一下', done => {
    driver.findElement(By.id('su'))
    .then(button => button.getAttribute('value'))
    .then(value => {
      expect(value).to.equal('百度一下')
      done()
    })
  })

  it('should open a page of searching result', done => {
    driver.findElement({id: 'kw'})
    .then(input => input.sendKeys('1111111111'))
    .then(() => driver.findElement({id: 'su'}))
    .then(button => button.click())
    .then(() => done())
   // 
  })

  after(() => {
    driver.quit()
  })
})