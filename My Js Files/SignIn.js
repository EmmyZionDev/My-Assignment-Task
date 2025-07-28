 let MyData = JSON.parse(localStorage.getItem("UserInfor")) || []
//  const Fullname = prompt("Enter your full name")
//  const userName = prompt("Enter your user name")
//  const Email = prompt("Enter your Email")
//  const Password = prompt("Enter your password")
//  const c_passward = prompt("Confirm your passward")

//  const Userinfor = ()=>{
//     if(Password !== c_passward){
//         alert("passward not match")
//         return
//     }
//     const userEmail = MyData.map((users)=> users.Email)
//     if(userEmail.includes(Email)){
//         alert("Email already exits")
//        return
//     }
//      if (!Fullname || !userName || !Email || !Password){
//         alert("you must enter all your information")
//         return
//      }
//     const userinformation = {
//         Fullname,
//         userName,
//         Email,
//         Password,
//    }
//     MyData.push(userinformation)
//     localStorage.setItem("UserInfor", JSON.stringify(MyData))
//     alert("Sign-in Succesfully")
//     }; Userinfor()


    const userEmail = prompt("Enter your Email");
    const passward = prompt("Enter your Password");

   const Login = () => {

     if (!userEmail || !passward){
      alert("you must fill in all the details")
      return
    }
  const userdata = MyData.find((user) => user.Email);

  if (userdata.Email !== userEmail) {
    alert("Email not found");
     return;
  };
  
  if (userdata.Password !== passward) {
    alert("Incorrect password");
    return;
  }
   

  alert(`Welcome back ${userdata.Fullname}!`);
};

Login();





























  





