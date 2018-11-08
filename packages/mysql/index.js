/*
	Credits:
		- MrPancakers
		- Root
		- Buckets
*/
mp.colshapes.newRectangle(parseFloat(-817.932), parseFloat(-107.586), 1, 1);
mp.markers.new(31, new mp.Vector3(parseFloat(-817.932), parseFloat(-107.586), parseFloat(37.2413)), 1,
{
		direction: new mp.Vector3(0,0,0),
		rotation: new mp.Vector3(0,0,0),
		visible: true,
		dimension: 0
});
require('./commands.js')

global.gm = {};

gm.mysql = require('./mysql.js');
gm.auth = require('./auth.js');

gm.mysql.connect(function() { });

mp.events.add("playerChat", (player, text) =>
{
	mp.players.broadcast(`${player.name}: ${text}`);
});

require('./vehLoader.js');