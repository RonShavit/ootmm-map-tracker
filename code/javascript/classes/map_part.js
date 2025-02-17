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
}