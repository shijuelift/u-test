

// const {add, mul} = require('./a.js') 
// if (add(2,3,1) ===5) {
//   console.log('right')
// } else {
//   console.log('error')
// }

// const assert = require('assert')
// assert.equal(add(2,1), 5)

const {should, expect, assert} = require('chai')
const {add, mul,cover} = require('../a.js')
//should()//bdd
//add(1,2).should.equal(31)
//expect(add(1,2)).to.be.equal(3)
//assert.equal(add(1,2), 3) //tdd

describe('#math',() => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      //expect(add(2,3), 5)
      expect(add(2,3)).to.be.equal(5)
    })
    it('should return 6 when 3 + 3', () => {
      expect(add(3,3)).to.be.equal(6)
    })
  })
  describe('mul', () => {
    it('should return 8 when 2 * 2* 2',() => {
      expect(mul(2,2,2)).to.be.equal(8)
    })
  })
  describe('cover', ()=> {
    it('should return 1 when cover(3,2)', () => {
      expect(cover(3,2)).to.be.equal(1)
    })
    it('should return -3 when cover(1,2)', () => {
      expect(cover(1,2)).to.be.equal(3)
    })
    it('should return 6 when cover(3,3)',()=> {
      expect(cover(3,3)).to.be.equal(6)
    })
    it('should return 12 when cover(6,6)',()=> {
      expect(cover(6,6)).to.be.equal(12)
    })
  })
})