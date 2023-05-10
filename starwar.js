// a getter function to call the stawars api
async function getStarWars(){
    let url = ` https://swapi.dev/api/people`;

    try {

        let res = await fetch(url);
        // console.log( await res.json())
        return await res.json();

    } catch (error) {

       console.log(error); 
    }
}

// a setter function to render the starwar names and pictures to the front end
async function renderStawars(){
    let starWars = await getStarWars();

    let html = ''

    starWars.results.forEach(starWar => {
        
        let htmlSection = `<div class="Content">
        <img src="./images/${starWar.name}.jpeg" alt="star"><br>
        <button id="button" ><h5>${starWar.name}</h5></button>
        </div>`;

        html += htmlSection;
    });

    let content = document.querySelector('.content');
    content.innerHTML = html;


}

renderStawars()


// async function renderGH(){
//     let starWars = await getStarWars();
//     //console.log(starWars)

//     let html = ''

//     starWars.results.forEach(starWar => {

//         //console.log(starWar) 
        
//         let htmlSection = `<div class="popcontent">
//         <b>${starWar.gender}<b/>
//         <b>${starWar.height}<b/>
//         </div>`;

//         html += htmlSection;
//     });

//     let content = document.querySelector('#content button');
//     content.innerHTML = html;


// }

// renderGH()


