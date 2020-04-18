let usersContainer = document.getElementsByClassName("App-left")[0];
let filtersContainer = document.getElementsByClassName("App-right")[0];
let filter = document.getElementsByClassName("App-filter")[0];
let filter2 = document.getElementsByClassName("App-filter2")[0];
let btn = document.getElementsByClassName("App-btn")[0];

let data = Papa.parse('./src/data2.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
        console.log(results);
        data = results.data;

        createList(data);
        
    }
});

function createUser(userData) { 

    let user = document.createElement("div");
    user.setAttribute("class", "User");

    let title = document.createElement("h3");
    title.innerHTML = userData.Nombre;

    let colA = document.createElement("h3");
    colA.innerHTML = userData.A;

    let colB = document.createElement("h3");
    colB.innerHTML = userData.B;

    let colC = document.createElement("h3");
    colC.innerHTML = userData.C;

    


    user.appendChild(title);
    user.appendChild(colA);
    user.appendChild(colB);
    user.appendChild(colC);
    usersContainer.appendChild(user);
}



function createList(users) {

    usersContainer.innerHTML = null;
    
    for (let index = 0; index < users.length; index++) {
        const u = users[index];

        createUser(u);

        
        let nombres1= document.createElement("option");
        nombres1.setAttribute("value", u.Nombre);

        nombres1.innerHTML= u.Nombre;

        filter.appendChild(nombres1);

        let nombres2= document.createElement("option");
        nombres2.setAttribute("value", u.Nombre);

        nombres2.innerHTML= u.Nombre;


        filter2.appendChild(nombres2);
    }
}





function recogerValores() {
   
let valor1= filter.value;
let valor2= filter2.value;

let user1= data.filter(user=>user.Nombre===filter.value)[0];
let user2= data.filter(user=>user.Nombre===filter2.value)[0];    
operacion(user1, user2);
console.log(user1);
    
}

function operacion(a,b){

   var propunto= (a.A * b.A) + (a.B * b.B) + (a.C * b.C);
   console.log(propunto);

   var magnitud= Math.sqrt(Math.pow(a.A, 2)+Math.pow(a.B,2)+ Math.pow(a.C,2)) * Math.sqrt(Math.pow(b.A,2)+Math.pow(b.B,2)+ Math.pow(b.C,2));
  console.log(magnitud);

   var res= propunto/magnitud;

   console.log(res);

   let resultado= document.createElement("h3");
   resultado.innerHTML= res;

   filtersContainer.appendChild(resultado);

}

btn.addEventListener("click",recogerValores);