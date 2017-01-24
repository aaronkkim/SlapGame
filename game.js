

function GameController() {
    var dataStore = new GameService()
    update()


    this.addShields = function (target) {
        dataStore.giveShield(target)
    }

    this.addSword = function () {
        dataStore.giveSword('kenji')
    }

    this.addAxe = function () {
        dataStore.giveAxe('kenji')
    }



    function update() {
        var target = dataStore.getTarget('kenji') 

        if (target.health > 0) {

            document.getElementById("health").innerText = target.health.toFixed(2)
            document.getElementById("myBar").style.width = target.health/target.startHealth*100 + '%'

            document.getElementById("hits").innerText = target.hit

        }
        else {
            document.getElementById("health").innerText = 'KO!'
             document.getElementById("myBar").style.width = "0%"

            document.getElementById("hits").innerText = target.hit
        }

    }
    this.attack = function (type, target) {
        dataStore.attack(type, target)
        update()
    }
}

var gc = new GameController()
//function changeHealth(damage) {

//}