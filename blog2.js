
const blogcontiner = document.querySelector(".blogs")
console.log(blogcontiner)
function users() {
    const token = localStorage.getItem('token')
    const   id = localStorage.getItem('clickedblog')
  console.log(id)
    const  getallusers ={
      method:'GET',
      headers:{
        'Content-Type':"application/json",
        "authorization":`Bearer ${token}`
        
      }
    }
   // console.log(newData)
   console.log(getallusers.headers)
  fetch(`https://mybrandbackendapi.up.railway.app/blogs/${id}`,getallusers)
  .then( async (n)=>{
    const res =  await n.json()
   console.log(res)
blogcontiner.innerHTML +=`
       
<div class="card_body">
<div class="insidebody">

    <div class="img">
    <h2 class="card_title">${res.title}</h2>
        <img src ="${res.image.url}">
    </div>
    <div class="others">
        

<p>${res.highlight}</p>
<p>${res.message}</p>
<p class="card_author">by <a href="https://www.linkedin.com/in/patience-ineza-44b470231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlly3b%2FjRB%2BtztxYEv2crw%3D%3D" class="author_link"> ${res.author}</a></p>

<div class = "reactions">
     <p><i class="fa-solid fa-heart"></i></i></i> 40</p>
    <p> <i class="fa-solid fa-thumbs-down"></i>40</p>
    <p> <i class="fa-solid fa-message"></i>${res.blog_comments.length}</p>
</div>

<div class="input-boxmessage-box">
<textarea type=" "  id ="name"  cols="40" rows="" placeholder=" write your  name here" required></textarea>
<textarea type=" "  id ="issue"  cols="40" rows="5" placeholder="write comment here" required></textarea>
<button id = "buttoni"> Post Comment</button>
</div>
</div> 
<div class ="comments" >
<div class = "allcomments">
<h2 class = "card_title">All comments</h2>
<div class = "commentdiv"><div>

</div>

</div>

`
const name = document.querySelector("#name")
 const datas = document.querySelector("#issue")
const button = document.querySelector("#buttoni")
console.log(button)
 const commentdiv = document.querySelector(".commentdiv")

function displayAllcomments(id) {
    let checkUrl = 'https://mybrandbackendapi.up.railway.app/blogs/allcomments/' + id;
    const token = localStorage.getItem('AdminToken');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    fetch(checkUrl, options)

        .then((res) => {
        
            let mess = res.json()
           
            return mess;
        }).then((data) => {
     
            data.comments.map((x) => {
          
                return (
                    commentdiv.innerHTML += `
                    <div class= "comment1">

                    <div class = "name">
                     <i class="fa-solid fa-user">
                    
                     </i><div>
                     <p> ${x.Names}</p>
                     <div class = "time">${x.date}   ${x.Time}</div>
                     </div></div>
                    
                    <div class = "commentbody"> ${x.Comment}</div>
                    
                    
                    <div></div>
                    </div>
`
                )
            })
        })
} 

displayAllcomments(id)

button.addEventListener("click", async () => {

    let date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
    let Time = new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds();
    let Names = name.value
    let Comment = datas.value
    let comment = {
        date,
        Time,
        Names,
        Comment
    }
    console.log(comment)
    const token = localStorage.getItem("AdminToken");
    const createComment = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(comment)
    };
    console.log(createComment)
    fetch('https://mybrandbackendapi.up.railway.app/blogs/comments/' + id, createComment)
        .then(async (data) => {
            const res = await data.json()
            alert(res.message ="comment added");
          location.reload()

            if (!data.ok) {
                throw Error(data.status);
            }

        }).catch(err => {
            console.log(err);
        });
    
})


  



  })}
 


  users()
 
  
  
  