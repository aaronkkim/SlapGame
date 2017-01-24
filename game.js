
function GameService() {
    var dataStore = this
    var players = {
        kenji: new Target("Kenji", 120, 1, 5, 10)


    }
    function Target(name, health, slap, punch, kick) {
        this.name = name;
            this.health = health;
            this.startHealth=health;

            this.slap = slap;
            this.punch = punch;
            this.kick = kick;

            this.eItems = [];
            this.hit = 0
    }
    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }
    var items = {
        shield: new Item("Shield", 0.3, "POWER!!"),
        sword: new Item("Sword", 0.5, "The One Sword"),
        axe: new Item("Axe", 0.56, "Cutty Cutty")
    }


    dataStore.giveShield = function (targetName) {
        players[targetName].eItems.push(items.shield)

    }
    dataStore.giveSword = function (targetName) {
        players[targetName].eItems.push(items.sword)

    }
    dataStore.giveAxe = function (targetName) {
        players[targetName].eItems.push(items.axe)

    }





    function addMods(target) {
        
        var total = 1
        for (var i = 0; i < players[target].eItems.length; i++) {
            var item = players[target].eItems[i]
            total += item.modifier
        }
        return total
    }




    dataStore.attack = function (type, target) {
 
        var mods = addMods(target)

        
        players[target].health -= players[target][type] * mods
        players[target].hit++
        
    }

    dataStore.getTarget = function (target) {

        var player = Object.assign({}, players[target])
        return player
    }
}
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