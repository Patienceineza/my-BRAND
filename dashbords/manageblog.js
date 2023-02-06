 
 
 /* const blogs_container= document.querySelector(".blogscreated")
  const sendbtn = document.querySelector('.submit');
  const formdata = document.querySelector(".form")
  const title_input = formdata["title"]
  const aurthur_input = formdata["aurthor"]
  const highlight_input = formdata["highlight"]
  const message_input = formdata["message"]
  const photo_input = document.querySelector("#image")
 console.log(photo_input)

  const blogs = JSON.parse(localStorage.getItem("blogs")) || []

  const addblog = ( title, aurthor,highlight,message,photo) => {
  blogs.push({
   title,
   aurthor,
   highlight,
   message,
   photo,
   published :false
});
localStorage.setItem("blogs",JSON.stringify(blogs))
return {title,message,};


  };

const createblogelement =(e) =>{
  const {
    title 
  } = e
  const blogs_div =document.createElement("div")
  const font_div    =document.createElement("div")
  const blog_title  =document.createElement("h3")
 const fontablogcontainer =document.createElement("article")
 const publishbtn  = document.createElement("button")

 const  deletebtn  = document.createElement("button")

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
   photo_input.value,
   )
   createblogelement(newBlog)
   title_input.value = ""
   aurthur_input.value =""
   highlight_input.value=""
   message_input.value= ""

}
*/

const sendbtn = document.querySelector('.submit');

let  messages = localStorage.getItem("messages")
if( messages == null){
  messages =[]
}
else{
  messages = JSON.parse(messages)

   
 }
 //picture codes
 /*
 let newUrl = new URL(location.href)
let image;


picture.addEventListener("change",() =>{
    const fr =new FileReader();
    fr.readAsDataURL(picture.files[0]);
    fr.addEventListener("load",() =>{
        const url = fr.result;
        image = url
        console.log(image)
        document.querySelector('#img1').src=image
       return url; 
    })
}
) */

sendbtn.addEventListener('click', (event) => {
 
 event.preventDefault();
//const  image = document.querySelector('.image_palce').files[0]
//const blogData = new FormData()
const form = document.querySelector('.form')
//console.log(image)
 const  blog =  new FormData(form)
 blog.append('author',document.querySelector('#aurthor').value)
 blog.append('highlight',document.querySelector('#highligh').value)
 blog.append('message',document.querySelector('#message').value)
 blog.append('title',document.querySelector('#title').value)
 blog.append('image', document.querySelector('.image_palce').files[0]);
 var token = localStorage.getItem('token')
 console.log("new",blog.get("image"))
 const  newData ={
    method:'POST',
    
    headers:{
      'Content-Type':"application/x-www-form-urlencoded",
      "authorization":`Bearer ${token}`
    },
    body:blog
  }
  //console.log(newData.body)

 fetch("http://localhost:5000/blogs/",newData)
.then( async(n)=>{
  const res =await n.json()
  console.log(res)

  if(n.status == 200){
   alert("blog  successfully created ")
   location.reload()
  }
  else if(n.status == 400){
    alert('all inputs re required')
  }
 
}).catch(error=>{
  console.log(error)
})

});
 
