// a getter function to call the stawars api
async function getStarWars(){
    let url = ` https://swapi.dev/api/people`;

    try {

        let res =  await fetch(url);
        //  await res.json()
    return await res.json();

    } catch (error) {

       console.log(error); 
    }
}

//getStarWars()



// // a setter function to render the starwar names and pictures to the front end
async function renderStawars(){
    let starWars = await getStarWars();
    //console.log(starWars)

    let html = ''

    for(let index in starWars.results){
       //console.log(starWars.results[index].name)
        let htmlSection = `<div class="Content">
        <img src="./images/${starWars.results[index].name}.jpeg" alt="star"><br>
        <button id="button" onclick="renderData(${index})"><h5>${starWars.results[index].name}</h5></button>
        
        </div>`;

        html += htmlSection;

}
    let content = document.querySelector('.content');
    content.innerHTML = html;


}

renderStawars()


// renders the height and gender on the frontend
async function renderData(index){
    let starWars = await getStarWars();

    let html =  `<div>
        <b>${starWars.results[index].height}<b/>
        <b>${starWars.results[index].gender}<b/>
        </div>`;

    let content = document.querySelector('#popcontent');
    content.innerHTML = html;



}


  
