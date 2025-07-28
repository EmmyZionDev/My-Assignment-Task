

const userInfor = JSON.parse(localStorage.getItem("AllUserData")) || []

 const Register = () =>{
  const FullName = document.getElementById("FullName").value
const Email = document.getElementById("Emails").value
const PassWord = document.getElementById("PassWords").value
const C_PassWord = document.getElementById("C_PassWord").value
  console.log(FullName);
  console.log(Email);
  console.log(PassWord);
  console.log(C_PassWord);
  
     if (!FullName || !Email ||  !PassWord || !C_PassWord ){
      alert("you must fill all your details")
       return
     }
    if(PassWord !== C_PassWord){
        alert("passWord does not Match")
       return
    }
   
     const UserEmail = userInfor.map((e)=>e.Email)
    if(UserEmail.includes(Email)){
        alert("Email already exit")
        
        return
      }
     
      const AllUserInfor = {
        FullName,
          Email,
         PassWord
     };
     userInfor.push(AllUserInfor)
     localStorage.setItem("AllUserData",JSON.stringify(userInfor))
     alert("Sign in successful")
    
   } ;
       const login = () =>{
        
        const userEmail = document.getElementById("Email").value
         const userPassWord = document.getElementById("PassWord").value
         const userInfor = JSON.parse(localStorage.getItem("AllUserData")) || []
            if(!userEmail || !userPassWord){
          alert("You must fill in your details")
        }
         const existingUser = userInfor.find((e)=> e.Email === userEmail)
           if(!existingUser) {
            alert("Email Not Found")
           return
           }
      
          if(existingUser.PassWord !== userPassWord){
            alert("passward is incorrect")
            return
          }
          alert(`Welcome back ${existingUser.FullName}`)
            }