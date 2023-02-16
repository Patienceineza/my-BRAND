// Nav Bar
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// Quotes
var token = localStorage.getItem('token');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

const newData = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }
};

showLoader(); // Show loader before making the API call

fetch('https://patienceportfolio.onrender.com/blogs', newData)
  .then(async (n) => {
    hideLoader(); // Hide loader after receiving the response
    const res = await n.json();
    console.log(res);
    let allblogs = res;

    const grid = document.querySelector('.grid');

    allblogs.forEach((data) => {
      const pub = data.published;
      console.log(pub);
      if (pub == 'unpublish') {
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
                <p class ="revealmore">${data.message}</p>
                <p class="card_author">by <a href="https://www.linkedin.com/in/patience-ineza-44b470231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brlly3b%2FjRB%2BtztxYEv2crw%3D%3D" class="author_link">${data.aurthor}</a></p>
                <a href="blogdis.html" class="read_more" id=${data._id}>Read article</a>
                <div class="reactions">
                  <p><i class="fa-solid fa-heart"></i></i></i>${data.Likes.count}</p>
                  <p><i class="fa-solid fa-message">${data.blog_comments.length}</i></p>
                </div>
              </div>
            </div>
          </div>`;
      }
    });

    const read_more = document.querySelectorAll('.read_more');

    for (let i = 0; i < read_more.length; i++) {
      read_more[i].addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id);
        console.log('gbhjnkmlkjhg');
        localStorage.setItem('clickedblog', e.currentTarget.id);
        window.location.href = 'blogdis.html';
      });
    }
  });
