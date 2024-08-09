

class Card{
  
}

export let cddb=[
{t1:"strike", cost:1, damage:6
},
{t1:"block", cost:1, block: 5},
{t1:"heavy", t2:"strike", cost:2, damage: 8, vulnerable:2},
]



let act=[
{t1:"atk",damage:5},
{t1:"def",block:5},
{t1:"atk/def", damage:3, block:3},
{t1:"weak",weak:2},
]

export let botList=[
{name:"mob1", actions:[act[0], act[1], act[3]]},
{name:"mob2", actions:[act[0], act[1], act[2]]}
]




