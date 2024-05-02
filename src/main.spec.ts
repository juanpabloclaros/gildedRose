import { describe, it, expect } from "vitest"
import {Item, GildedRose} from "./main.js"

describe("Default test", () => {
  it("works", () => {
    const name = [
      'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
      'Sulfuras, Hand of Ragnaros'
    ]

    const listItems: Item[] = []

    name.forEach((name) => {
      for (let sellIn = -2; sellIn < 12; sellIn++) {
        for (let quality = -1; quality < 51; quality++) {
          const item = new Item(name,sellIn,quality)

          listItems.push(item)
          
          const gilded = new GildedRose(listItems)

          expect(gilded.updateQuality()).toMatchSnapshot()
        }
      }
    })
  })
})
