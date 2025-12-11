const todolist=[
];

rendertodo();
function rendertodo(){

    let todolistHTML='';

    for (let i=0; i<todolist.length;i++){
        const todoobj=todolist[i];
        const {name,dueDate}=todoobj;
        const html=`
        <div class="js-n"> ${name}</div>
        <div class="js-d"> ${dueDate} </div>
        <button onclick="
        todolist.splice(${i},1);
        rendertodo();
        "
        class="delete-todo">Delete</button>
        `;
        todolistHTML+=html;
    }
    

    document.querySelector('.js-tl').innerHTML=todolistHTML;
}
function getText(){
    const inputElement=document.querySelector('.js-get');
    const name=inputElement.value;
    const dateInput=document.querySelector('.js-due');
    const dueDate=dateInput.value;
    todolist.push({name , dueDate});
    inputElement.value='';
    dateInput.value='';
    rendertodo();
}