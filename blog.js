 //nav bar 
 
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
 
 
 //quotes
 
 

var token = localStorage.getItem('token')
//for card 1


const  newData ={
  method:'GET',
  headers:{
    'Content-Type':"application/json",
    "authorization":`Bearer ${token}`
  }
 
}
console.log(newData)
fetch("https://mybrandbackendapi.up.railway.app/blogs",newData)
.then( async (n)=>{
  const res =  await n.json()
  console.log(res)
let allblogs = res


 
const grid = document.querySelector(".grid")

allblogs.forEach((data) => {
  const pub = data.published

console.log(pub)
if (pub == "unpublish"){

  id = JSON.stringify(data._id);
  grid.innerHTML += `

  <div class="card_body">
  <div class="insidebody">
      <div class="img">
          <img src="${data.image.url}">
      </div>
      <div class="others">
         
      <h2 class="card_title"><u>${data.title}</u></h2>
  <p>${data.highlight}</p>
  <p class ="revealmore"> ${data.message}</p>
  <p class="card_author">by <a href="https://www.linkedin.com/in/patience-ineza-44b470231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlly3b%2FjRB%2BtztxYEv2crw%3D%3D" class="author_link">${data.author}</a></p>
  <a href="blogdis.html" class="read_more" id=${data._id}>Read article</a>
  <div class = "reactions">
       <p><i class="fa-solid fa-heart"></i></i></i> 40</p>
      <p> <i class="fa-solid fa-thumbs-down"></i>40</p>
      <p> <i class="fa-solid fa-message"></i>50</p>
</div>
</div>`
}

})

const read_more = document.querySelectorAll(".read_more")

for(let i =0;i <read_more.length;i++){

read_more[i].addEventListener("click",(e)=>{
e.preventDefault()
 console.log( e.currentTarget.id)
console.log("gbhjnkmlkjhg")

localStorage.setItem("clickedblog",e.currentTarget.id)
window.location.href = "blogdis.html"
})
}

})

