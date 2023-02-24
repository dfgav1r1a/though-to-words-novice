import renderPost from './javascript/renderPost.js'
import languageChanger from './javascript/languageChange.js'

const blogPostForm  = document.getElementById('blogPost');
const englishFlag = document.getElementById('en');
const spanishFlag = document.getElementById('sp');

const formSubmit = async (data) => {

  const response = await fetch('/post', {
                  method : 'POST',
                  headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                    },
                    body: data
                  }).then( res => {
                      console.log('Data received from the server');
                      return res.json()
                  }).catch(err => console.log(err));
  return response;
};

//form submission event
blogPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const postForm = e.target;
  const formEntriesArray = [ ];

  for (let field of postForm) {
    let nameAttr = field.getAttribute("name");
    if (nameAttr)  formEntriesArray.push([ nameAttr, field.value]);
  };

  const postObj = Object.fromEntries(formEntriesArray);
  const objToJSON = JSON.stringify(postObj, null, 2);
  
  const data = await formSubmit(objToJSON);
  console.log(data);
  const renderedEle = renderPost(data);
  console.log(renderedEle);
  
});

//language changer events
englishFlag.addEventListener('click', ({target}) => {
  console.log('Changing to English');
  const language = target.id
  languageChanger(language);
});

spanishFlag.addEventListener('click', ({target}) => {
  console.log('Changing to Spanish');
  const language = target.id
  languageChanger(language);
});

