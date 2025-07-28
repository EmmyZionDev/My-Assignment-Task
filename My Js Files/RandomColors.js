 const username = document.getElementById("userName")
 const profile = document.getElementById("Profile")
 const colors = ["red","blue","green","yellow","gold"]
 const create = ()=>{
      const num = Math.floor(Math.random() * colors.length)
      profile.style.background = colors[num]
      const firstname = username.value.charAt(0)
      
      profile.innerHTML = firstname
 }