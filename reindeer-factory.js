//Define an array to hold the colored reindeer objects
const coloredReindeer = []
// Begin coloredReindeerBuilder Function
const coloredReindeerBuilder = function () {
    // Define Array to hold reindeer names
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    // Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
        let currentName = reindeer[i];
        //push each new riendeer object into an array called coloredReindeer passing it the current name
       coloredReindeer.push(createReindeerObj(currentName))
        
    }
  // return the colored reindeer array  
  return coloredReindeer
}
//Itereate over the array of colors and yield each color when called. 
const colorGenerate = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth","Lime","Green","Purple",""]
    for (let i = 0; i < colors.length; i++) {
        yield colors[i];   
    }
}
//init the colorGenerate generator 
color = colorGenerate()
// This factory creates each reindeer by getting the value of the reindeer name passed to it and then iterating on the colorGenerate generator function 
const createReindeerObj = function(reindeerName){
    return Object.create(null, {
        "name": { value: reindeerName, enumerable: true },
        "color": { value: color.next().value, enumerable: true }
    })
}
//invoke the coloredReindeerBuilder factory function
coloredReindeerBuilder()