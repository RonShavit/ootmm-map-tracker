class Entrance
{
    /**
     * Creates a new independent entrance
     * @param {number} x x position of the entrance (in relation to the image)
     * @param {number} y y position of the entrance (in relation to the image)
     * @param {number} angle angle of the normal of the entrance
     */
    constructor(x,y,angle)
    {
        this.x = x;
        this.y = y;
        this.angle = this.adjust_angle(angle);
        this.connect_to = null;
    }

    /**
     * Sets angle to range [0,360)
     * @param {number} angle a number representing an angle
     * @returns {number} a number representing the same angle in range [0,360)
     */

    adjust_angle(angle)
    {
        while (angle>=360)
        {
            angle-=360;
        }
        while (angle<0)
        {
            angle+=360;
        }
        return angle;
    }

    /**
     * Sets a new connection where this is an entrance and other is an exit
     * @param {Entrance} other the exit of the connection
     */
    set_connect_to(other)
    {
        if (other instanceof Entrance)
        {
            this.connect_to = other;
        }
    }

    /**
     * Returns the object this is connected to
     * @returns {Entrance} the exit of which this is the entrance to (null if no one is set)
     */
    get_connect_to()
    {
        return this.connect_to;
    }
}