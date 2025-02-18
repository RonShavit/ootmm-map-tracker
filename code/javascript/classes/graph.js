
import Map_part from "./map_part";
class Graph
{
    /**
     * Creates a new graph with no parts
     */
 constructor()
 {
    this.Map_parts = new Array();
    this.directed = false;
 }   

 /**
  * Sets if the graph is directed
  * @param {Boolean} directed true <=> graph is directed
  */
 set_directed(directed)
 {
    this.directed = directed;
 }

 /**
  * Adds given map part to the graph
  * @param {Map_part} new_part part to add
  */
 add_part(new_part)
 {
    this.Map_parts.push(new_part);
 }

 /**
  * removes item from the graph
  * @param {Map_part} to_remove part to remove
  */
 remove_part(to_remove)
 {
    to_remove.remove();
    let index = -1;
    for (let i=0;i<this.Map_parts.length;i++)
    {
        if (this.Map_parts[i]==to_remove)
        {
            index= i;
        }
    }
    this.Map_parts.splice(index,1);
 }


 /**
  * Creates a connection from entrance no_1 of part1 to exit no_2 of part2
  * If graph is not directed creates a connection in opposite direction
  * @param {Map_part} part1 always origin
  * @param {Map_part} part2 always destination
  * @param {number} no_1 exit of part1
  * @param {number} no_2 exit of part2
  */
 set_connection(part1,part2,no_1,no_2)
 {

    part1.set_connection(no_1,no_2,part2);
    if (!this.directed)
    {
        part2.set_connection(no_2,no_1,part1);
    }
 }

 
}