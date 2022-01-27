let divUsuarios= document.getElementById("usuarios")


fetch("https://randomuser.me/api/?results=5")
.then(resultado=> resultado.json())

.then(conversion=>{

    let usuarios = conversion.results

    for(let x=0;x<usuarios.length;x++){
        let img= document.createElement("img")
        let pNombre= document.createElement("h4")
        let pEmail= document.createElement("p")
        let pTelefono= document.createElement("p")
        let info = document.createElement("div")
        let detalles = document.createElement("div")

        detalles.classList.add("usuarios-detalles")
        info.classList.add("usuarios-informacion")
        
        pNombre.innerText=`${usuarios[x].name.title} ${usuarios[x].name.first}`;
        img.src= usuarios[x].picture.medium;
        pEmail.innerText = usuarios[x].email;
        pTelefono.innerText = usuarios[x].cell;
        
        info.appendChild(pNombre)
        info.appendChild(pTelefono)
        info.appendChild(pEmail)
        
        detalles.appendChild(img)
        detalles.appendChild(info)
        divUsuarios.appendChild(detalles)
    }
})
.catch(error=> alert("Ha habido un error"))