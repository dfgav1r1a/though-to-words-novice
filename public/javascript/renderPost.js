//this helper function will render the card component to display the posts.

const renderPost = (data) => {
  const blogPostContainer = document.querySelector('.blogPostContainer');

  //creating post card container
  let id = Math.round(Math.random()*100);//generating random id
  
  const postCardContainer     = document.createElement('div');
  postCardContainer.className = 'postCardContainer'; 
  postCardContainer.setAttribute('id', id);  

  //creating post title container
  const postTitleContainer     = document.createElement('div');
  postTitleContainer.setAttribute('class', 'postTitleContainer');

  const postTitle       = document.createElement('h2');
  postTitle.setAttribute('class',  'postTitle');
  postTitle.textContent = data.post_title;
  
  postTitleContainer.appendChild(postTitle);
 
  //creating post body container
  const postBodyContainer     = document.createElement('div');
  postBodyContainer.className = 'postBodyContainer';

  const postAuthor       = document.createElement('h4');
  postAuthor.className   = 'postAuthor';
  postAuthor.textContent = data.post_author;

  const postText       = document.createElement('p');
  postText.className   = 'postText'; 
  postText.textContent = data.post_content;

  postBodyContainer.appendChild(postAuthor); 
  postBodyContainer.appendChild(postText); 
    
  //creating buttons container
  const postButtonsContainer     = document.createElement('div');
  postButtonsContainer.className = 'postButtonsContainer';
  
  const editBtn          = document.createElement('button');
  editBtn.setAttribute('id', 'edit-btn');
  editBtn.className      = 'cardBtn';
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'delete-btn');
  deleteBtn.className = 'cardBtn';
  deleteBtn.textContent = 'Delete';

  postButtonsContainer.appendChild(editBtn);
  postButtonsContainer.appendChild(deleteBtn);
 
  //appending child elements to the card container
  postCardContainer.appendChild(postTitleContainer);
  postCardContainer.appendChild(postBodyContainer);
  postCardContainer.appendChild(postButtonsContainer);

  //appending card to the blogPostContainer
  const singlePost = blogPostContainer.appendChild(postCardContainer.cloneNode(true));

 // return singlePost;
}

export default renderPost;
