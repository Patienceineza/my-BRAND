const token = localStorage.getItem('token');
const blogContainer = document.querySelector('.blogs');
console.log(blogContainer);

function users() {
  const id = localStorage.getItem('clickedblog');
  console.log(id);

  const getAllUsers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  };

  showLoader(); // Show loader before making the API call

  fetch(`https://patienceportfolio.onrender.com/blogs/${id}`, getAllUsers)
    .then(async (n) => {
      hideLoader(); // Hide loader after receiving the response

      const res = await n.json();
      console.log(res);

      blogContainer.innerHTML += `
        <div class="card_body">
          <div class="insidebody">
            <div class="img">
              <h2 class="card_title">${res.title}</h2>
              <img src ="${res.image.url}">
            </div>
            <div class="others">
              <p>${res.highlight}</p>
              <p>${res.message}</p>
              <p class="card_author">by <a href="https://www.linkedin.com/in/patience-ineza-44b470231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlly3b%2FjRB%2BtztxYEv2crw%3D%3D" class="author_link">${res.aurthor}</a></p>
              <div class="reactions">
                <p><i class="fa-solid fa-heart" id="like"></i>${res.Likes.count}</p>
                <p><i class="fa-solid fa-message"></i>${res.blog_comments.length}</p>
              </div>
              <div class="input-boxmessage-box">
                <textarea id="name" cols="40" rows="" placeholder="Write your name here" required></textarea>
                <textarea id="issue" cols="40" rows="5" placeholder="Write comment here" required></textarea>
                <button id="buttoni">Post Comment</button>
              </div>
            </div>
            <div class="comments">
              <div class="allcomments">
                <h2 class="card_title">All comments</h2>
                <div class="commentdiv"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      const name = document.querySelector('#name');
      const datas = document.querySelector('#issue');
      const button = document.querySelector('#buttoni');
      console.log(button);
      const commentdiv = document.querySelector('.commentdiv');

      // Function to display all comments
      function displayAllComments(id) {
        let checkUrl = 'https://patienceportfolio.onrender.com/blogs/allcomments/' + id;
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        fetch(checkUrl, options)
          .then((res) => {
            let mess = res.json();
            return mess;
          })
          .then((data) => {
            data.comments.map((x) => {
              return (
                (commentdiv.innerHTML += `
                  <div class="comment1">
                    <div class="name">
                      <i class="fa-solid fa-user"></i>
                      <div>
                        <p>${x.Names}</p>
                        <div class="time">${x.date} ${x.Time}</div>
                      </div>
                    </div>
                    <div class="commentbody">${x.Comment}</div>
                  </div>
                `)
              );
            });
          });
      }

      displayAllComments(id);

      button.addEventListener('click', async () => {
        let date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        let Time = new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds();
        let Names = name.value;
        let Comment = datas.value;
        let comment = {
          date,
          Time,
          Names,
          Comment
        };
        console.log(comment);

        const createComment = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(comment)
        };
        console.log(createComment);

        fetch('https://patienceportfolio.onrender.com/blogs/comments/' + id, createComment)
          .then(async (data) => {
            console.log(token);
            const res = await data.json();
            Toastify({
              text: 'Comment added',
              duration: 3000,
              close: true,
              gravity: 'top',
              position: 'center',
              backgroundColor: 'green',
              stopOnFocus: true
            }).showToast();
            location.reload();

            if (!data.ok) {
              throw Error(data.status);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });

      const like = document.querySelector('#like');
      console.log(like);

      like.addEventListener('click', (e) => {
        e.preventDefault();
        const id = localStorage.getItem('clickedblog');
        console.log(id);

        const createComment = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        };
        console.log(createComment);

        fetch(`https://patienceportfolio.onrender.com/blogs/${id}/like`, createComment)
          .then(async (data) => {
            console.log(token);
            const res = await data.json();
            console.log(res);

            if (token) {
              Toastify({
                text: res,
                duration: 3000,
                close: true,
                gravity: 'top',
                position: 'center',
                backgroundColor: 'white',
                stopOnFocus: true
              }).showToast();
              location.reload();
            } else {
              Toastify({
                text: 'Login first',
                duration: 3000,
                close: true,
                gravity: 'top',
                position: 'center',
                backgroundColor: 'red',
                stopOnFocus: true
              }).showToast();
            }

            if (!data.ok) {
              throw Error(data.status);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
}

users();

// Function to show loader
function showLoader() {
  loader.style.display = 'block';
}

// Function to hide loader
function hideLoader() {
  loader.style.display = 'none';
}
