let container = document.getElementById("container");

function generateCards() {
    let dimensions = document.getElementById("cardsSlider").value;
    let size = document.getElementById("sizeSlider").value;
    
    cardsGauge.innerHTML = dimensions;
    sizeGauge.innerHTML = size;

    container.innerHTML = "";
    
    let pairs = []

    for (let index = 0; index != Math.round((dimensions * dimensions) / 2); index++) {
        let num = Math.floor(Math.random() * 100) + 1;
        pairs.push(num);
        pairs.push(num);
    }

    console.log(pairs);

    let onATile= [];

    for (let RowIndex = 0; RowIndex != dimensions; RowIndex++) {
        let Row = document.createElement("div");
        container.style.gridTemplateColumns = "auto ".repeat(dimensions);

        for (let ColumnIndex = 0; ColumnIndex != dimensions; ColumnIndex++) {
            let Tile = document.createElement("div");
            
            Tile.id = "tile";

            let num = Math.floor(Math.random() * pairs.length);

            Tile.innerHTML = pairs[num];
            
            Tile.style.width = size + "px";
            Tile.style.height = size + "px";
    
            Row.appendChild(Tile);
        }
        container.appendChild(Row);
        
    }
}
generateCards();