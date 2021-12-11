/*
class Tomagotchi {
    constructor(name, hunger,sleepiness,boredom,age) {
        this._name = name,
        this._hunger = hunger,
        this._sleepiness = sleepiness,
        this._boredom = boredom,
        this._age = age
    } 

    feed() {
        if (this._hunger > 0) {
            this._hunger -= 1
        }
        this.checkDeath()
    }

    turnOffLights() {
        if (this._sleepiness > 0 ) {
            this._sleepiness -= 1
        }
        this.checkDeath()
    }

    play() {
        if (this._boredom > 0 ) {
            this._hunger += 1
            this._boredom -= 1
        }
        this.checkDeath()
    }

    checkDeath() {
        if (this._hunger >10) {
            console.log(`${this._name} has died.`)
        }
    }
}

// Increment age every 


let tomagotchi1 = new Tomagotchi(5,5,5,12)
tomagotchi1.feed()
tomagotchi1.feed()
console.log(tomagotchi1)

*/

class Tomagotchi {
    constructor(name, h = 1, s = 1, b = 1) {
      this._name = name
      this._hunger = h
      this._sleepiness = s
      this._boredom = b
      this._age = 1
    }
  
    status() {
      if (this._hunger < 1) { this._hunger = 1 }
      if (this._sleepiness < 1) { this._sleepiness = 1 }
      if (this._boredom < 1) { this._boredom = 1 }
    
      if (this._age >= 1) {this._age++}
      console.log('===== Status ======')
      console.log(`Hunger: ${this._hunger}`)
      console.log(`Sleepiness: ${this._sleepiness}`)
      console.log(`Boredom: ${this._boredom}`)
      console.log(`Age: ${this._age}`)
      console.log(`Morph into: ${this._name}`)

      this.morphCheck()
  
      if (this._hunger >= 10 || this._sleepiness >= 10 || this._boredom >= 10 || this.age >= 10) {
        console.log(`sayonana, ${this._name} die!!`)
        process.exit()
      }
    }
  
    eat() {
      this._hunger--
    }
  
    play() {
      this._hunger++
      this._boredom--
    }
    
    turnOffLight() {
      this._sleepiness--
    }

    renamePet(renameName) {
      this._name = renameName
    }
    

    morphCheck() {
      if (this._age === 3) {
        this._name += ' lao'
      } else if (this._age === 6) {
        this._name += ' kok kok'
      } else if (this._age === 9) {
        this._name += ' granddaddy'
      }else{this.name}
    }

  }
  
  
  const myTomagotchi = new Tomagotchi('mozilla')
  myTomagotchi.status()
  myTomagotchi.eat()
  // console.log(myTomagotchi)
  // myTomagotchi.renamePet('pooh')
  // myTomagotchi.turnOffLight()
  // myTomagotchi.petAge()
  // console.log(myTomagotchi)

  setInterval(() => {
    myTomagotchi.play()
    myTomagotchi.status()
  }, 1000)

  
  // setInterval(() => {
  //   myTomagotchi.play()
  //   myTomagotchi.status()
  // }, 1000)

