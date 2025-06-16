let userPics = document.querySelector(".users-pics");
let UserDetails = document.querySelector(".user-details");



let Users = [];

//fonction qui me permet de récuperer les dats du fitchier json
async function getData(){
    try{
        let response = await fetch("./scripts/datas.json");
        let data = await response.json();
        return data.users

    }
    catch(error){


    }
}


//fonction dont le but est de remplir un tableau avec les data du json et de remplir la section image
//chaque image possede l'index de son objet parent .
async function fillImgs(){
    let data = await getData();
    data.forEach((e) =>{
        Users.push(e)
    })
    console.log(Users)
    Users.forEach((e,index)=>{
        let img = document.createElement("img");
        img.setAttribute("src",e.image);
        img.setAttribute("title",e.name);
        img.setAttribute("data-index",index)
        userPics.append(img);
    })

}

fillImgs()


//je clique sur l'image et recupere le data index 
userPics.addEventListener("click",(e)=>{
    e.preventDefault();
    let index = e.target.dataset.index;
    let obj = Users[index]
    let div = document.createElement("div");
    div.innerHTML =`
    <img src="${obj.image}" alt="${obj.name}">
    <h2>${obj.name}</h2>
    <div class="age">${obj.age}</div>
    <a class="contact" href="mailto:${obj.email}" title="Envoyez un email à ${obj.name}"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a>
    <div class="address">${obj.address.street},${obj.address.city} ${obj.address.country} </div>
  ` ;
    UserDetails.innerHTML = '';
    UserDetails.append(div);
    

})

