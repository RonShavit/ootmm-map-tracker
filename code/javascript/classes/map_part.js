import Entrance from "./Entrance";

class Map_part
{
    /**
     * Create a new map part representig a single connected area in the map
     * @param {String} image_path path to image of map part
     * @param {number} no_of_exits number of exits in this part
     * @param {Array<Entrance>} exits array of all exits of this part
     * @param {String} name name of the area this map part is representing
     */
    constructor(image_path,no_of_exits,exits, name) {
        this.name = name
        this.image_path = image_path;
        this.no_of_exits = no_of_exits;
        this.exits = exits;
    }

    /**
     * removes all connextions from and to this map part
     */
    remove()
    {
        for (let i=0;i<this.exits.length;i++)
        {
            this.exits[i].set_connect_to(null);
            this.exits[i].set_connect_from(null);
        }
    }

    /**
     * Sets a connection between entrance nmber entrance_no and exit number exit_no of other
     * @param {number} entrance_no number of connecting entrance of this
     * @param {number} exit_no number of connecting exit of other
     * @param {Map_part} other map part to connect to
     */
    set_connection(entrance_no, exit_no, other)
    {
        this.exits[entrance_no].set_connect_to(other.exits[exit_no])
    }


    /**
     * Removes connection starting at entrance entrance_no
     * @param {number} entrance_no entrance o disconnect
     */
    remove_connection(entrance_no)
    {
        this.exits[entrance_no].set_connect_to(null);
    }


}

export default Map_part;