let playerui = mp.browsers.new("package://playerui/playerui.html");
let showed = false;
let player = mp.players.local;
var hungerID=0;

mp.events.add('render', () =>
{
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
	{
		if(showed === false) // Check if speedo is already showed
		{
			playerui.execute("showSpeedo();");
			showed = true;
		}
		/*Get vehicle infos*/
		let vel = player.vehicle.getSpeed() * 3.6;  	//Doc: https://wiki.rage.mp/index.php?title=Entity::getSpeed
		let rpm = player.vehicle.rpm * 1000; 			//Doc: https://wiki.rage.mp/index.php?title=Vehicle::rpm
		let gas = player.vehicle.getPetrolTankHealth(); //Doc: https://wiki.rage.mp/index.php?title=Vehicle::getPetrolTankHealth
		gas = gas < 0 ? 0: gas / 10;
		
		playerui.execute(`update(${vel}, ${rpm}, ${gas});`); // Send data do CEF
	}
	else
	{
		if(showed)
		{
			playerui.execute("hideSpeedo();");
			showed = false;
		}
	}
});

let startNeeds () => {
	let thrist = player.data.thrist;
	let hunger = player.data.hunger;
	playerui.execute(`updateNeeds(${thrist}, ${hunger});`);
	var thirstTimer = setInterval(calcThirst, 60000);
}

function calcThirst(){
	player.data.thrist--;
	if(hungerID == 1){
		player.data.hunger--;
		hungerID = 0;
	} else {
		hungerID = 1;
	}
	let thrist = player.data.thrist;
	let hunger = player.data.hunger;
	playerui.execute(`updateNeeds(${thrist}, ${hunger});`);
}