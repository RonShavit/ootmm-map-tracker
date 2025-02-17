

class Graph
{
    constructor() {
        this.vertacies = new Map();
        this.directed = false;

    }

    /**
     * adds map part v1 to the graph with no neighbours
     * @param {map_part} vertex a map_part vertex
     */
    add_vertex(vertex)
    {
        this.vertacies.set(vertex,new Array(0));
        a = [1,3].map;
        
    }

    /**
     * Adds an edge between v1 and v2. If thegraph id defined as non directed, adds an edge between v2 and v1 aswell
     * @param {*} v1 first vertex, always is head of new edge to v2
     * @param {*} v2 second vertex, is head of new edge to v1 if the graph is non directed
     */
    add_edge(v1,v2)
    {
        this.vertacies.get(v1).push(v2);
        if (!this.directed)
        {
            this.vertacies.get(v2).push(v1);
        }
    }
    
}