import {cddb} from "./data.js"

class Player{
  mana= 3
  hp=30
  armor=0
  target=0
  vulnerable=0
  weak=0
  deck = [
  { ...cddb[0]}, 
  { ...cddb[0]}, 
  { ...cddb[0]}, 
  { ...cddb[1]}, 
  { ...cddb[1]}, 
  ]
  
  hand = []
  discard = []
}

export let player = new Player()



