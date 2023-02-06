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

allblogs.forEach (blog =>{
  if( blog.published == "unpublish" ){
  
const grid = document.querySelector(".grid")

const card = document.createElement("div")
card.classList.add("card")
const card_img= document.createElement("div")
card_img.classList.add("card_img")
const img_src= document.createElement("img")
const card_body= document.createElement("div")
card_body.classList.add("card_body")
//card_img.innerHTML =blog.photo
const card_title= document.createElement("h2")
card_title.classList.add("card_title")
 card_title.innerText =blog.title
const card_story= document.createElement("p")
card_story.classList.add("card_story")
card_story.innerText =blog.message
const card_story_more= document.createElement("p")
card_story_more.classList.add("revealmore")
card_story_more.innerText =blog.highlight
const card_aurthur= document.createElement("p")
card_aurthur.classList.add("card_author")
card_aurthur.innerText ="by "
const link = document.createElement("a")
link.classList.add("author_link")
link.href ="https://www.linkedin.com/in/patience-ineza-44b470231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlly3b%2FjRB%2BtztxYEv2crw%3D%3D" 
link.innerText= blog.aurthor
img_src.setAttribute('src',blog.imageUrl)
card_aurthur.append(link)

const card_button= document.createElement("a")
card_button.classList.add("read_more")
card_button.innerText ="Read more"

card_button.addEventListener("click",e=> {
e.preventDefault()
reveal(card_button.parentNode)

})


const reactions = document.createElement("div")
reactions.classList.add("reactions")
const like = document.createElement("p")
const dislike = document.createElement("p")
const comment = document.createElement("p")

comment.innerText = 0
like.innerText = 0
dislike.innerHTML= 0
const like_i = document.createElement("i")
const dislike_i = document.createElement("i")
const comment_i = document.createElement("i")


like_i.setAttribute("class","fa-solid fa-heart")
dislike_i.setAttribute("class","fa-solid fa-thumbs-down")
comment_i.setAttribute("class","fa-solid fa-message")


card_img.append(img_src)
card.append(card_img)
comment.append(comment_i)
like.append(like_i)
dislike.append(dislike_i) 
reactions.append(like,dislike,comment)
card_body.append(card_title,card_story,card_story_more,card_aurthur,card_button,reactions)
card.append(card_body)
grid.append(card)


  }
 })
 
 



})


.catch(error=>{
console.log(error)
})






/*
//like
const likeBtn = document.querySelector('.fa-solid fa-heart');
const numberOfLikesElement = document.querySelector('.likesnumber');
console.log(numberOfLikesElement)

//let numberOfLikes = Number.parseInt(numberOfLikesElement.innerHTML, 10);

let isLiked = false;

// Functions

const likeClick = () => {

// if the like button hasn't been clicked

  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    likeBtn.setAttribute("class","fa-regular fa-heart")
    //numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
// if the like button has been clicked
 else {
    likeBtn.classList.remove('isLiked');
   // numberOfLikes--;
    //numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
};

// Event Listeners

likeBtn.addEventListener('click', likeClick);*/