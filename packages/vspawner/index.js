var mysql = require("../mysql/mysql.js")

function xyInFrontOfPos(pos, heading, dist) {
    heading *= Math.PI / 180;
    pos.x += (dist * Math.sin(-heading));
    pos.y += (dist * Math.cos(-heading));
    return pos;
}

mp.events.add("playerJoin", (player) => {
    player.vspawner_Vehicle = null;
});

mp.events.add("vspawner_Spawn", (player, vehicle) => {
    let position = xyInFrontOfPos(player.position, player.heading + 90, 3.0);

    if (player.vspawner_Vehicle) {
        player.vspawner_Vehicle.repair();
        player.vspawner_Vehicle.position = position;
        player.vspawner_Vehicle.model = mp.joaat(vehicle);
        player.vspawner_Vehicle.dimension = player.dimension;
    } else {
        player.vspawner_Vehicle = mp.vehicles.new(mp.joaat(vehicle), position, {heading: player.heading, numberPlate: player.name, dimension: player.dimension});
		mysql.handle.query('INSERT INTO `vehicles` SET id = ?, model = ?', [player.vspawner_Vehicle.id, vehicle], function(err, res){
            if(!err){
                console.log("\x1b[92m vehicle has just registered.");
            } else {
                console.log("\x1b[31m[ERROR] " + err);
            }
        });
    }
});