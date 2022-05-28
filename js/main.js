let state = 1;
let see = null;
let responseView = false;
let isEditing = false;
const questionTitle = document.getElementById('questionTitle')
const questionBody = document.getElementById('questionBody')
const questionSubmit = document.getElementById('sendbutton')
const questions = document.getElementById('questions')
const questionEdit = document.getElementById('editbutton')
let questionIndex = 0
let questionsList = {

 }

 //Funcionalidade VerMais

function changeState(see) {
    showHide(see)
    see = !see
}

function showHide(see) {
    if (see === true) {
        document.getElementById('abstracttextremaining').style.setProperty('--abstractremaining', 'block')
       document.getElementById('seemore').style.setProperty('--showseemore', 'none')
       document.getElementById('seeless').style.setProperty('--showseeless', 'block')
       } else {document.getElementById('abstracttextremaining').style.setProperty('--abstractremaining', 'none')
       document.getElementById('seemore').style.setProperty('--showseemore', 'block')
       document.getElementById('seeless').style.setProperty('--showseeless', 'none')
       }
}

// Funcionalidade ver respostas

function switchState() {
    seeResponses(responseView)
    responseView = !responseView
}

function seeResponses(responseView) {
    if (responseView === true) {
        document.getElementById('responses').style.setProperty('--viewresponses', 'flex')
       } else {
        document.getElementById('responses').style.setProperty('--viewresponses', 'none')
       }
}

//Estados de postagem da pergunta

function showTopic(state) {
    switch(state) {
        case 1:
        document.getElementById('discussionstart').style.setProperty('--createtopic', 'flex')
        document.getElementById('discussionposting').style.setProperty('--sendtopic', 'none')
        document.getElementById('discussionposted').style.setProperty('--createnewtopic', 'none')
        document.getElementById('editbutton').style.setProperty('--editbtn', 'none')
        document.getElementById('sendbutton').style.setProperty('--createbtn', 'block')
        break;
        case 2:
            document.getElementById('discussionstart').style.setProperty('--createtopic', 'none')
            document.getElementById('discussionposting').style.setProperty('--sendtopic', 'flex')
            document.getElementById('discussionposted').style.setProperty('--createnewtopic', 'none')
            document.getElementById('editbutton').style.setProperty('--editbtn', 'none')
        document.getElementById('sendbutton').style.setProperty('--createbtn', 'block')
        break;
        case 3:
            document.getElementById('discussionstart').style.setProperty('--createtopic', 'none')
            document.getElementById('discussionposting').style.setProperty('--sendtopic', 'none')
            document.getElementById('discussionposted').style.setProperty('--createnewtopic', 'flex')
            document.getElementById('editbutton').style.setProperty('--editbtn', 'none')
        document.getElementById('sendbutton').style.setProperty('--createbtn', 'block')
        break;
        case 4:
            document.getElementById('discussionstart').style.setProperty('--createtopic', 'none')
            document.getElementById('discussionposting').style.setProperty('--sendtopic', 'flex')
            document.getElementById('discussionposted').style.setProperty('--createnewtopic', 'none')
            document.getElementById('editbutton').style.setProperty('--editbtn', 'block')
            document.getElementById('sendbutton').style.setProperty('--createbtn', 'none')
        default:
            console.log('This error has ocurred but is expected in this scope.')
        break;
    }
}

//Funcionalidade de incluir nova pergunta

questionSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    questionsList = {
         title: questionTitle.value,
         question: questionBody.value,
         index: questionIndex,
     }
    questionIndex++;
    displayQuestion();
});

questionEdit.addEventListener('click', (e)=> {
    e.preventDefault();
    let {title,question,index} = questionsList;
    let questionId = 'question' + index;
    let onEdit = document.getElementById(questionId);
    let onEditTitle = onEdit.firstElementChild;
    let onEditBody = onEdit.querySelector("#descriptionId" + index);
    onEditTitle.textContent = questionTitle.value;
    onEditBody.textContent = questionBody.value;
});

function displayQuestion() {
    let {title,question,index} = questionsList;
    let displayer='';
    let questionNode = document.createElement('div');
    questionNode.setAttribute('id','question' + index)
    questionNode.setAttribute('class', 'question')
    displayer += `
    <h2 class="questiontitle">${title}</h2>
                <p class="questionautorname">Nome do Autor</p>
                <span class="questiondescription" id="descriptionId${index}">${question}</span>
                <div class="questionfooter">
                    <span class="threedots"><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    <span class="favoritequestion"><i class="fa-solid fa-heart"></i></span>
                    <span class="likenumber">1 like</span>
                    <span class="questionresponses">1 resposta</span>
                </div>    
    `
    questionNode.innerHTML = displayer;
    questions.appendChild(questionNode);
}