 

 
// const sendbtn = document.querySelector('.submit');

// let  messages = localStorage.getItem("messages")
// if( messages == null){
//   messages =[]
// }
// else{
//   messages = JSON.parse(messages)

   
//  }
//  //picture codes
//  /*
//  let newUrl = new URL(location.href)
// let image;


// picture.addEventListener("change",() =>{
//     const fr =new FileReader();
//     fr.readAsDataURL(picture.files[0]);
//     fr.addEventListener("load",() =>{
//         const url = fr.result;
//         image = url
//         console.log(image)
//         document.querySelector('#img1').src=image
//        return url; 
//     })
// }
// ) */

// sendbtn.addEventListener('click', (event) => {
 
//  event.preventDefault();
// //const  image = document.querySelector('.image_palce').files[0]
// //const blogData = new FormData()
// const form = document.querySelector('.form')
// //console.log(image)
//  const  blog =  new FormData(form)
//  blog.append('author',document.querySelector('#aurthor').value)
//  blog.append('highlight',document.querySelector('#highligh').value)
//  blog.append('message',document.querySelector('#message').value)
//  blog.append('title',document.querySelector('#title').value)
//  blog.append('image', document.querySelector('.image_palce').files[0]);
//  var token = localStorage.getItem('token')
//  console.log("new",blog.get("image"))
//  const  newData ={
//     method:'POST',
    
//     headers:{
//       'Content-Type':"application/x-www-form-urlencoded",
//       "authorization":`Bearer ${token}`
//     },
//     body:blog
//   }
//   //console.log(newData.body)

//  fetch("http://localhost:5000/blogs/",newData)
// .then( async(n)=>{
//   const res =await n.json()
//   console.log(res)

//   if(n.status == 200){
//    alert("blog  successfully created ")
//    location.reload()
//   }
//   else if(n.status == 400){
//     alert('all inputs re required')
//   }
 
// }).catch(error=>{
//   console.log(error)
// })

// });
 
const token = localStorage.getItem('token')
const sendbtn = document.querySelector('.submit');
  const formdata = document.querySelector(".form")
  const title_input = formdata["title"]
  const aurthur_input = formdata["aurthor"]
  const highlight_input = formdata["highlight"]
  const message_input = formdata["message"]
  const photo_input = document.querySelector("#image")



formdata.onsubmit = (e) =>{
   e.preventDefault();
   const titleValue = title_input.value;
   const authorValue = aurthur_input.value; 
   const messageValue = message_input.value;
   const highlight = highlight_input.value;
   const imageValue = photo_input.files

   const newBlog = ()=>{
    // console.log("loaded")
    try {
      const reader = new FileReader();
      reader.addEventListener('load', async()=>{
        const response = await fetch('https://patienceportfolio.onrender.com/blogs',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        "authorization":`Bearer ${token}`
      },
        body: JSON.stringify({
          title: titleValue,
          aurthor: authorValue,
          image: reader.result,
          highlight:highlight,
          message: messageValue
        })
        })
        console.log(titleValue, authorValue, messageValue)
        const blog =  await response.json(); 
        if(blog.title == titleValue){
          alert("blog created")
          location.reload()
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






