
const controller = function(){
    const selectedEL = document.getElementById("colored-reindeer")
    let injectedString = ""
    for (let i = 0; i < coloredReindeer.length; i++) {
        let currentObj = coloredReindeer[i]
        injectedString +=`<section style="color:${currentObj.color}">${currentObj.name}</section>`
        console.log(injectedString)
        }
    selectedEL.innerHTML=injectedString

}
controller()