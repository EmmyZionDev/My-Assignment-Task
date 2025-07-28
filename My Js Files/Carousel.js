const Carousel = document.getElementById("CarouselImg")
const images = [
    "./Myworkpic/oraimo3.webp",
    "./Myworkpic/oraimo4.webp",
    "./Myworkpic/oraimo5.webp",
    "./Myworkpic/oraimo7.webp",
    "./Myworkpic/oraimo8.webp",
    "./Myworkpic/oraimo9.webp",
    "./Myworkpic/oraimo6.webp"
   
]
   let CurrentIndex = 0
   
    const Prev = ()=>{
           CurrentIndex--
        if(CurrentIndex < 0){
          CurrentIndex = images.length - 1
          }
          Carousel.src = images[CurrentIndex]   
        }; 
    
    const Next = ()=>{
          CurrentIndex++
        if(CurrentIndex >= images.length){
          CurrentIndex = 0
        }
        Carousel.src = images[CurrentIndex]
    }; 
    