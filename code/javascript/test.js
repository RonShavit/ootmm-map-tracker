import * as Entrance from "./code/javascript/classes/Entrance.js";
import * as Map_part from "./code/javascript/classes/Map_part.js";

let mp1 = new Map_part.Map_part("./map/no-bitches.jpg",2,[new Entrance.Entrance(10,20,30),new Entrance.Entrance(50,60,700)],"mp1");
let mp2 = new Map_part.Map_part("./map/no-bitches.jpg",2,[new Entrance.Entrance(10,20,30),new Entrance.Entrance(50,60,700)],"mp2");
mp1.exits[0].set_connect_to(mp2.exits[0]);