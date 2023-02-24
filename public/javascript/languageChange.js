//helper functions to switch between Englidh and Spanish

//languages object
const languagesObj = {
  english: {
    appTitle: 'Thoughts to Words App',
    author: 'Author:',
    title: 'Post Title:',
    question: 'What do you want to say?',
    btnText: 'save your post',
    editBtnContent: 'Edit',
    deleteBtnContent: 'Delete',
    footerContent: `
      <p id='li-message'>Application developed by <b>Daniel Gaviria</b> 
        <span>
          <a href='https://www.linkedin.com/in/daniel-gaviria-dev/' target='_blank'>
            <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </p> 
      <p id='gh-message'>See the code of this application at 
        <span>
          <a href='#'>
            <i class="bi bi-github"></i>
        </a>
        </span>
      </p>
      `
  },
  spanish: {
    appTitle: 'Pensamientos en Palabras',
    author: 'Autor:',
    title: 'Titulo del pensamiento:',
    question: 'Que quisieras decir?',
    btnText: 'guarda tu pensamiento',
    editBtnContent: 'Editar',
    deleteBtnContent: 'Borrar',
    footerContent: `
      <p id='li-message'>Aplicacion desarrollada por <b>Daniel Gaviria</b> 
        <span>
          <a href='https://www.linkedin.com/in/daniel-gaviria-dev/' target='_blank'>
            <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </p> 
      <p id='gh-message'>Mira el codigo de esta aplicacion en 
        <span>
          <a href='#'>
            <i class="bi bi-github"></i>
        </a>
        </span>
      </p> 
      `
  }
};

const languageChanger = (id) => {

  const appTitle = document.querySelector('.title');
  const authorLabel= document.querySelector("label[for='author']");
  const postTitleLabel = document.querySelector("label[for='title']");
  const textareaLabel= document.querySelector("label[for='body']");
  const btnText = document.querySelector('#btn');
  const footer= document.querySelector('footer');
  const editPostbtn = document.querySelector('#edit-btn');
  const deletePostbtn = document.querySelector('#delete-btn');
  
  if (id === 'en') {
    appTitle.textContent = languagesObj.english.appTitle;
    authorLabel.textContent = languagesObj.english.author;
    postTitleLabel.textContent= languagesObj.english.title;
    textareaLabel.textContent = languagesObj.english.question;
    btnText.value = languagesObj.english.btnText;
    textareaLabel.textContent = languagesObj.english.question;
    editPostbtn.textContent = languagesObj.english.editBtnContent;
    deletePostbtn.textContent = languagesObj.english.deleteBtnContent;
    footer.innerHTML= languagesObj.english.footerContent;
  }

  if (id === 'sp') {
    appTitle.textContent = languagesObj.spanish.appTitle;
    authorLabel.textContent = languagesObj.spanish.author;
    postTitleLabel.textContent= languagesObj.spanish.title;
    textareaLabel.textContent = languagesObj.spanish.question;
    btnText.value = languagesObj.spanish.btnText;
    editPostbtn.textContent = languagesObj.spanish.editBtnContent;
    deletePostbtn.textContent = languagesObj.spanish.deleteBtnContent;
    footer.innerHTML= languagesObj.spanish.footerContent;
  }
};

export default languageChanger;
