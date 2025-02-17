function procces_config(path) {
    path = "config/config.txt";
    fetch(path)
    .then((res) => res.text())
    .then((text) => {
      let lines = text.split("\n");
      for (let i=0;i<lines.length;i++)
      {
        let line = lines[i].split(" ");
        if (line.length==4)
        {
            let name = line[0];
            let image_path = line[1];
            let no_of_exits = parseInt(line[2]);
            let exits = procces_array(line[3]);
            print(name);
            
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


procces_config("config\config.txt")

