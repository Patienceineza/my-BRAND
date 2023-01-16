 //nav bar 
 
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
 
 
 
 
 
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



const blogs = JSON.parse(localStorage.getItem("blogs")) ||[]
//for card 1


const grid = document.querySelector(".grid")
 function DisplayBlog(blog){
  const card = document.createElement("div")
  card.classList.add("card")
  const card_img= document.createElement("div")
  card_img.classList.add("card_img")
  const img_src= document.createElement("img")
  const card_body= document.createElement("div")
  card_body.classList.add("card_body")
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

  const like_i = document.createElement("i")
  const dislike_i = document.createElement("i")
  const comment_i = document.createElement("i")

  
  like_i.setAttribute("class","fa-solid fa-heart")
  dislike_i.setAttribute("class","fa-solid fa-thumbs-down")
  comment.setAttribute("class","fa-solid fa-message")
comment.append(comment_i)
like.append(like_i)
dislike.append(dislike_i) 
comment.innerText = 0
like.innerText = 0
dislike.innerText= 0
card_img.append(img_src)
card.append(card_img)
 reactions.append(like,dislike,comment)
 card_body.append(card_title,card_story,card_story_more,card_aurthur,card_button)
 card.append(card_body)
 grid.append(card)


 
}
blogs.forEach (blog =>{
 if( blog.published ){
 DisplayBlog(blog)
 }
})