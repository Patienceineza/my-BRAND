  const blogs_container= document.querySelector(".blogscreated")
  const sendbtn = document.querySelector('.submit');
  const formdata = document.querySelector(".form")
  const title_input = formdata["title"]
  const aurthur_input = formdata["aurthor"]
  const highlight_input = formdata["highlight"]
  const message_input = formdata["message"]
 console.log(title_input)

  const blogs = JSON.parse(localStorage.getItem("blogs")) || []

  const addblog = ( title, aurthor,highlight,message,) => {
  blogs.push({
   title,
   aurthor,
   highlight,
   message,
   published :false
});
localStorage.setItem("blogs",JSON.stringify(blogs))
return {title,message,};


  };

const createblogelement =(e) =>{
  const {
    title 
  } = e
    const blogs_div    =document.createElement("div")
  const font_div    =document.createElement("div")
  const blog_title  =document.createElement("h3")
 const fontablogcontainer =document.createElement("article")
 const publishbtn = document.createElement("button")

 const  deletebtn   = document.createElement("button")

 blogs_div.setAttribute("class","blogdiv")
 font_div.setAttribute("class","fontas")
 if( e.published){
  publishbtn.innerText = "Unpublish"
 }
 else{
  publishbtn.innerText = "Publish"
 }
 deletebtn.innerText = "delete"
 deletebtn.setAttribute("id","deleting")
 deletebtn.setAttribute("class","deletebtn")
 publishbtn.addEventListener
//publish button
publishbtn.addEventListener("click",function(event){
  event.preventDefault()
  let index = blogs.indexOf(e)
  if(index != -1){
    if(e.published){

      blogs[index].published  = false 
      publishbtn.innerText ="Publish"
    console.log(index)
   }
   else{
     blogs[index].published  = true 
     publishbtn.innerText ="Unpublish"
   }
   localStorage.setItem("blogs",JSON.stringify(blogs))
  
  }

})


 // delete button
deletebtn.addEventListener("click",function(event){
event.preventDefault()
 let index = blogs.indexOf(e)
 console.log(blogs[index])
 deletebtn.parentNode.parentNode.remove()
 blogs.splice(index,1)
 localStorage.setItem("blogs",JSON.stringify(blogs))
})
 publishbtn.setAttribute("class","publishbtn")

 blog_title.innerText =   title
 
font_div.append(publishbtn,deletebtn)
  blogs_div.append(blog_title);
  blogs_container.appendChild(fontablogcontainer,font_div)
  fontablogcontainer.append(blogs_div)
  fontablogcontainer.appendChild(font_div)

};
blogs.forEach(createblogelement);
formdata.onsubmit  = async(e) =>{
   e.preventDefault();

   const newBlog =await addblog(
   title_input.value,
   aurthur_input.value,
   highlight_input.value,
   message_input.value,
   )
   createblogelement(newBlog)
   title_input.value = ""
   aurthur_input.value =""
   highlight_input.value=""
   message_input.value= ""

}

