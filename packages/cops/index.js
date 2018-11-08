//Set Cop Levels

mp.events.addCommand('coplevel', (player, num) => {
    if(!num || isNaN(num)) return player.outputChatBox('SYNTAX: /coplevel [level]');
            player.data.coplevel = num;
            player.outputChatBox("Coplevel Updated");
});

//Sets a blip on the map so you see the location

let policeBlipVector = new mp.Vector3( 446.99676513671875, -983.9864501953125, 30.689605712890625 ); //Set a Vector3
let userBlip = mp.blips.new( 60, policeBlipVector, {
    name: "PoliceHQ",
    scale: 1,
    color: 3,
    alpha: 255,
    drawDistance: 100,
    shortRange: true,
    rotation: 0,
    dimension: 0,
} ); //Create a Blip on a Policestation

// creates a checkpoint to run in

let copCheckpoint = mp.checkpoints.new( 1, new mp.Vector3( 458.07373046875, -990.92236328125, 29 ), 2, {
    direction: new mp.Vector3( 0.2, 0, 2, 0.2 ),
    color: [ 255, 255, 255, 50 ],
    visible: true,
    dimension: 0
} );

// Handler if you enter checkpoint (you will add ammo if you run in multiple time as the code does not check if already entered the checkpoint)

mp.events.add( "playerEnterCheckpoint", ( player, checkpoint ) => {

    if ( checkpoint === copCheckpoint ) {

        if ( player.data.copLevel > 0 ) { // This var checks if you have coplevel greater then 0 which comes out of database on player login

            // Remove all weapons
            player.removeAllWeapons();
            // assault rifle
            //player.giveWeapon( 0xFAD1F1C9, 200 );
            
            // assault tonfa
            player.giveWeapon( 0x678B81B1, 200 );
            // assault tazer
            player.giveWeapon( 0x3656C8C1, 100 );
            // Set Uniform
            player.setClothes( 3, 0, 0, 2 );
            player.setClothes( 8, 58, 0, 2 );
            player.setClothes( 6, 25, 0, 2 );
            player.setClothes( 4, 35, 0, 2 );
            player.setClothes( 11, 55, 0, 2 );
			
			if ( player.data.copLevel > 1 ) {
				// pistol
				player.giveWeapon( 0xBFE256D4, 50 );
			}
			if ( player.data.copLevel > 2 ) {
				// assault rifle
				player.giveWeapon( 0xFAD1F1C9, 200 );
			}
        } else {
            player.notify( "You are not a police officer" );
        }

    }

} );