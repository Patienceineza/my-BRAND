function changeStyle(){
    function random() {
        return Math.floor(Math.random() * 100000);
    }
    var element = document.getElementById("bg");
    element.style.color = '#'+ random() + '5';
}








let  blogs = localStorage.getItem("blogs")
    if( blogs == null){
      blogs =[]
    }
    else{
      blogs = JSON.parse(blogs)
     }
    sendbtn.addEventListener('click', (event) => {
     
     event.preventDefault();
    
     const blog_title = document.querySelector('.blog-title').value;
     const blog_story = document.querySelector('.blog-story').value;
    
    
     var blog = {
       blog_title,blog_story
     }
      blogs.push(blog)
    localStorage.setItem("blogs",JSON.stringify(blogs))
     
  

  
  
  // Get the container element where the responses will be displayed
  const container = document.querySelector(".blogscreated");
  
  // Retrieve the saved form data from local storage
  const blogs = localStorage.getItem("blogs")
  console.log(blogs)
  blogs.forEach(blog =>{
  const title_Div = document.createElement('div');
  title_Div.innerText = "title: "+blog.blog_title
  const story_Div = document.createElement('div');
  nameDiv.innerText=  "story: " +blog.blog_story
  
  let blog_container = document.createElement('article')
  // Append the div elements to the container
  blog_container.appendChild(title_Div);
  blog_container.appendChild(story_Div);
  container.append(blog_container)
  })
  // Create a div element for each piece of form data
  
  
});