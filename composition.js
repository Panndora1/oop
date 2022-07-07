class Tu154 {
    isFly = false

    constructor(name = 'Aircraft', maxSpeed = '850 км/ч') {
        this.name = name
        this.maxSpeed = maxSpeed
    }

    
    takeoff() {
        this.isFly = true
        console.log(`${this.name} in the air`)
    }

    landing() {
        this.isFly = false
        console.log(`${this.name} has landed`)
    }

    get status() {
        return this.isFly
    }
}

class Mig extends Tu154 {
    isFly = true

    attack() {
        if(this.isFly === true) {
            console.log('Aircraft attacks')
        } else {
            console.log('Aircraft cannot attack while on the ground')
        }
        
    }

}

class Airport {
    isFreeSeat = true
    isRenovation = false

    constructor() {
        this.tu154 = new Tu154('TU 154')
        this.mig = new Mig('MIG')
    }

    takeAircraft() {
        if(this.isFreeSeat === true && this.isRenovation === false) {
            console.log('You can parking')
        } else {
            console.log('You can\'t parking')
        }
    }

    aircraftClearedSeatAndTookOff() {
        if(this.isRenovation === false) {
            this.isFreeSeat = true

            if(this.tu154.status === false) {
                this.tu154.takeoff()
            } else {
                this.mig.takeoff()
            }
            
            console.log('Aircraft takeoff')
        }
    }

    aircraftInParking() {
        this.isFreeSeat = false
        if(this.tu154.status === true) {
            this.tu154.landing() 
        } else {
            this.mig.landing()
        }        
        console.log('Aircraft was parked')
    }

    aircraftCanTakeoff() {
        if(this.isFreeSeat === true && this.isRenovation === false) {
            console.log('Aircraft can takeoff')
        } else {
            console.log('You can\'t put the aircraft at the airport')
        }
    }

    airportUnderRenovation() {
        this.isRenovation = true
        console.log('Airport under renovation')
    }

    renovationCompleted() {
        this.isRenovation = false
        console.log('Airport renovation completed. You can land aircrafts')
    }

}

const aeropot = new Airport()
aeropot.aircraftClearedSeatAndTookOff()
aeropot.aircraftInParking()