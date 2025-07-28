let allTask = JSON.parse(localStorage.getItem("AllTask"))  ||  []

const addTask = ()=>{
const doLaundry = prompt("What is your task")
const Tasks = {
    task: doLaundry,
    done: false
}
allTask.push(Tasks)
localStorage.setItem("AllTask" ,JSON.stringify(allTask));
return
};addTask();



  const viewTask = () =>{
    let displayTask = []
  allTask.forEach((element) => {
    if(element.done === true){
      displayTask.push(element.task + "✅")     
    }
    else { displayTask.push(element.task + "✖")};
  }); 
      alert(displayTask)
  
 }; viewTask()

   const deleteTask = () =>{
    const  deleteNumber = prompt("Enter the task number you want to delete")
     const i = deleteNumber - 1
     if (i >= 0 && i <  allTask.length){
        allTask.splice(i,1)
        localStorage.setItem("AllTask", JSON.stringify(allTask))
        alert("Task deleted succesfully")

     }else{
        alert("invalid task number")
}
   }; deleteTask()

      const MarkTaskDone = () =>{
    const completedTask = prompt("Enter the task number you have done!")
    const i = completedTask - 1
    if(i >= 0 && i < allTask.length){
        allTask[i].done = true
       localStorage.setItem("AllTask", JSON.stringify(allTask))
       alert(` ${allTask[i].task}: Done! ✅`)

    }
    }; MarkTaskDone()

