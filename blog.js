 //nav bar 
 
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
 
 
 //quotes
 
 
 var quotes =[{ quote: "To me, business isn’t about wearing suits or pleasing stockholders. It’s about being true to yourself, your ideas and focusing on the essentials", person: " Richard Branson"},
    { quote:"You don’t need to be a genius or a visionary, or even a college graduate for that matter, to be successful. You just need framework and a dream", person:"Micheal Dell"},
    { quote:"The greatness of a nation and its moral progress can be judged by the way its animals are treated.",person: "mahatma gandhi"},
    {quote:"Doing the best at this moment puts you in the best place for the next moment", person:"Oprah Winfrey"},
    {quote:"Our greatest glory is not in never falling, but in rising every time we fal", person:"Comficious"}]


    var btn =document.querySelector(".newquote")
    var quote =document.querySelector("#text")
    var person =document.querySelector(".person")


    btn.addEventListener("click",function(){
        let random = Math.floor(Math.random() * quotes.length)
        quote.innerText = quotes[random].quote
        person.innerText = quotes[random].person
    })


//readmore

    const readmore = document.querySelectorAll('.read_more')
    
    function reveal(parent){
    {  
   const hiddenContent = parent.querySelector('.revealmore') 
   hiddenContent.classList.toggle('readmore')
   
  }}
  readmore.forEach(button=>{
    button.addEventListener("click",()=>reveal(button.parentNode))
  })

  const readmore1 = document.querySelector('.read_more1')
  const hiddenContent1 = document.querySelector('.revealmore1')
 
//readmore1.addEventListener("click",reveal)



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
  <a href="#" class="read_more">Read article</a>
  <div class = "reactions">
       <p><i class="fa-solid fa-heart"></i></i></i> 40</p>
      <p> <i class="fa-solid fa-thumbs-down"></i>40</p>
      <p> <i class="fa-solid fa-message"></i>50</p>
</div>
</div>`

 
const readimore = document.querySelector(".read_more")

console.log("fghjkljhg")

readimore.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log(data)

  const display_1_blogs = async() =>{
    const singleblog = document.getElementById("singleblog");
    if(singleblog){
      
      const response = await fetch(`https://mybrandbackendapi.up.railway.app/blogs/${data._id}`, {
        method: "GET"
      });
      const blogs = await response.json();
    
        singleblog.innerHTML = `<div class="oneblog">
              
        <div class="card_img">
          <img src="${blogs.image.url}" alt="">
        </div><br>
        <h1>${blogs.title}</h1><br>
        <p>${blogs.body}</p>
        </div> `
  
    }
  }
  display_1_blogs()
})




})})

.catch(error=>{
console.log(error)
})





