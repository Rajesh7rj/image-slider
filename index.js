
let count = 0;
let slides = document.querySelectorAll(".slider");
let prev = document.getElementById("prev");
let next = document.getElementById("next")
let counting = document.getElementById("count")



slides.forEach((slide, index) =>{
  slide.style.left = `${index * 100}%`;
})

const imageSlide = () => {
  slides.forEach((slide) =>{
    slide.style.transform = `translateX(-${count * 100}%)`
    
  })

  
  
}


const prevImg = () =>{
  if(count>0){
    count-=1
    imageSlide()
    counting.innerHTML -= 1;
  }

}

const nextImg = () =>{
  var id = 1;
  if(count < 5){
  count+=1
  id +=1
  imageSlide()
  counting.innerHTML = count +1;}

  
}


