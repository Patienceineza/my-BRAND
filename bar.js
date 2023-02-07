
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});





const blogs_container= document.querySelector(".blogscreated")
  const sendbtn = document.querySelector('.submit');
  const formdata = document.querySelector(".form")
  const title_input = document.getElementById('title')
  const author_input = formdata["author"]
  const message_input = formdata["message"]
  const image_input = formdata["image"]

  const blogs = JSON.parse(localStorage.getItem("blogs")) || []

  const addblog = ( title, message) => {
  blogs.push({
   title,
   body
});
localStorage.setItem("blogs",JSON.stringify(blogs))
return {title,message};


  };

const createblogelement =({title}) =>{
  const blogs_div    =document.createElement("div")
  const font_div    =document.createElement("div")
  const blog_title  =document.createElement("h3")
 const fontablogcontainer =document.createElement("article")
 const publishbtn = document.createElement("button")
 const  deletebtn   = document.createElement("button")
 blogs_div.setAttribute("class","blogdiv")
 font_div.setAttribute("class","fontas")
 publishbtn.innerText = "Post"
 deletebtn.innerText = "delete"

 deletebtn.setAttribute("id","deleting")
 deletebtn.setAttribute("class","deletebtn")
 deletebtn.setAttribute("onclick","deleteBlog(`${index}`)")
 publishbtn.setAttribute("class","publishbtn")

 blog_title.innerText =   title
 
font_div.append(publishbtn,deletebtn)
  blogs_div.append(blog_title);
  blogs_container.appendChild(fontablogcontainer,font_div)
  fontablogcontainer.append(blogs_div)
  fontablogcontainer.appendChild(font_div)

};
blogs.forEach(createblogelement);
formdata.onsubmit = (e) =>{
   e.preventDefault();
   const titleValue = title_input.value;
   const authorValue = author_input.value; 
   const messageValue = message_input.value;
   const imageValue = image_input.files

   const newBlog = ()=>{
    // console.log("loaded")
    try {
      const reader = new FileReader();
      reader.addEventListener('load', async()=>{
        const response = await fetch('http://localhost:5700/blogs',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: titleValue,
          author: authorValue,
          image: reader.result,
          body: messageValue
        })
        })
        console.log(titleValue, authorValue, messageValue)
        const blog =  await response.json(); 
        if(blog.title == titleValue){
          alert("blog created")
        }
        else(console.log(blog))  
      })
      reader.readAsDataURL(imageValue[0]);
    } catch (error) {
      console.log(error)
    }
  }
  //  createblogelement(newBlog)
  newBlog()
  
}

deletebtn = document.querySelector(".deletebtn")


function deleteBlog(index) {
  // Get the current array of blogs from local storage
  let blogs = JSON.parse(localStorage.getItem('blogs'));

  // Remove the blog at the specified index
  blogs.splice(index, 1);

  // Update the blogs in local storage
  localStorage.setItem('blogs', JSON.stringify(blogs))

}