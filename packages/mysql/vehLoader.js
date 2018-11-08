var mysql = require('./mysql.js');
var i = 0;
mysql.handle.query('SELECT * FROM `vehicles`', function(err, res){
            if(!err){
                res.forEach(function(vehicleData){
					mp.vehicles.new(mp.joaat(vehicleData.model), new mp.Vector3(vehicleData.x, vehicleData.y, vehicleData.z));
					i++;
                });
				console.log("\x1b[92m" + i + "\x1b[39m vehicles spawned.");
            } else {
                console.log("\x1b[31m[ERROR] " + err);
            }
        });