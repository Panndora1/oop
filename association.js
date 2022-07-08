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
    whatAircraftTakeoff = null

    constructor() { 
        this.tu154 = null   
        this.mig = null
    }

    takeAircraft() { //Принять самолет
        if(this.isFreeSeat === true && this.isRenovation === false) { 
            console.log('You can parking')
        } else {
            console.log('You can\'t parking')
        }
    }

    aircraftClearedSeatAndTookOff() { //Самолет освободил место и улетел
        if(this.isRenovation === false) {
            this.isFreeSeat = true

            if(this.tu154.status === false) { //Проверяем статус самолета
                this.tu154.takeoff()
                this.whatAircraftTakeoff = this.tu154 // Запоминаем, какой самолет улетел

                console.log('Aircraft takeoff')
            } else if(this.mig.status === false) {
                this.mig.takeoff()
                this.whatAircraftTakeoff = this.mig

                console.log('Aircraft takeoff')
            } else {
                console.log('There are no aircrafts in the parking')
            }
        }
    }

    aircraftInParking() { //Самолет ушел на стоянку
        this.isFreeSeat = false

        //По логике призелмляется тот самолет, который дольше в воздухе,
        //например ту-154 был в воздухе с самого начала, а миг стоял на стоянке
        //миг улетел и в воздухе их уже два. Скорее всего захочет сесть ту-154
        //он дольше в воздухе, т.е. и топлива меньше, поэтому его очередь на посадку
        if(this.tu154.status === true && this.whatAircraftTakeoff === this.mig) { 
            this.tu154.landing() 
        } else if(this.mig.status === true && this.whatAircraftTakeoff === this.tu154) {
            this.mig.landing()
        }        
        console.log('Aircraft was parked')
    }

    aircraftCanTakeoff() { //Самолет готов взлетать
        if(this.isFreeSeat === false && this.isRenovation === false) {
            console.log('Aircraft can takeoff')
        } else {
            console.log('The aircraft can\'t take off because the parking lot is empty')
        }
    }

    airportUnderRenovation() { //Начался ремонт аэропорта
        this.isRenovation = true
        console.log('Airport under renovation')
    }

    renovationCompleted() { //Закончился ремонт аэропорта
        this.isRenovation = false
        console.log('Airport renovation completed. You can land aircrafts')
    }
}

const mig = new Mig('МИГ')
const tu154 = new Tu154('ТУ-154')

const airport = new Airport() 
airport.tu154 = tu154
airport.mig = mig