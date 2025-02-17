import Entrance from "code/javascript/classes/Entrance.js"

function procces_config(path) {
    path = "config/config.txt";
    let parts = new Array(0);
    fetch(path)
    .then((res) => res.text())
    .then((text) => {
      let lines = text.split("\n");
      for (let i=0;i<lines.length;i++)
      {
        let line = lines[i].split(" ");
        if (line.length==4)
        {
            create_map_part(line,parts);
            
        }
      }


     })
    .catch((e) => console.error(e));
    
}

function procces_array(arr_text)
{
    let trimmed = new String();
    trimmed = arr_text.substring(1,arr_text.length-1);
    let arr = trimmed.split("|");
    let to_return = new Array();
    for (let i=0;i<arr.length;i++)
    {
        let trimmed_line = arr[i].substring(1,arr[i].length-1);
        let trimmed_line_arr = trimmed_line.split(",");
        to_return.push(new Entrance(parseFloat(trimmed_line_arr[0]),parseFloat(trimmed_line_arr[1]),parseFloat(trimmed_line_arr[2])));
    }
    return to_return;
}

function create_map_part(line, parts)
{
    let name = line[0];
    let image_path = line[1];
    let no_of_exits = parseInt(line[2]);
    let exits = procces_array(line[3]);
    print(name);
    parts.push(new Map_part(image_path,no_of_exits,exits,name));
}


procces_config(create_map_part("test_map map/no_bitches.jpg 2 [(10,10,0)|(100,20,400)]",new Array))

