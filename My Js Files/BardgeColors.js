
const fullName = document.getElementById("FullName")
const profile   = document.getElementById("Profile")
 const footer = document.getElementById("footer")
  let colors = ["red", "blue","yellow","green","gold", "black","white"]

  const generate = ()=>{
      if (!fullName.value){
        alert("Enter your Full Name")
    }
   const num = Math.floor(Math.random()* colors.length)
    profile.style.background = colors[num]

    if(profile.style.background === "black"){
        profile.style.color = "white"
    } 
    if(profile.style.background === "white"){
        profile.style.color = "black"
    } 
    
    const input = fullName.value.split(" ").map((e)=>e[0]).join(" ").slice(0,3)
               
    profile.innerHTML = input
    footer.innerHTML = colors[num]
    
  };
   const ResetBtn = ()=>{
     profile.innerHTML = ""
    footer.innerHTML =  ""
     fullName.value = ""
   
    }
   






