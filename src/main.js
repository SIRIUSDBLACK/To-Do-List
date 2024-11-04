//selector
const textInput = document.querySelector("#textInput");
const textInputBtn = document.querySelector("#textInputBtn");
const listGroup = document.querySelector("#listGroup");
const totalTask  = document.querySelector("#totalTask");
const DoneTask   = document.querySelector("#doneTask");

let textCount = 0;


//process
const addList = () => {
    listGroup.append(createNewList(textInput.value));
    textInput.value = null;
    updateTaskTotal();
}
const updateTaskTotal = () => {
    //count list and update
    const newLists = document.querySelectorAll(".list") 
    totalTask.innerText = newLists.length;
}
const updateDoneTaskTotal = () => {
    //count list and update
    const newLists = document.querySelectorAll(".list input:checked") 
    DoneTask.innerText = newLists.length;
}
 

const createNewList = (taskTitle) => {
    const list = document.createElement("div");
    list.classList.add("list","duration-200");
    list.innerHTML = ` <div class="border mb-2 px-2 py-2 flex items-center justify-between  border-stone-900">
    <div class="flex gap-2">
    <input type="checkbox" class="checkDone accent-stone-700">
    <p class="listTask font-mono">${taskTitle}</p>
    </div>
    <div class="flex gap-1">
    <button class="list-edit-btn  border-2 size-8 flex items-center justify-center p-1 text-sm border-stone-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
    </svg>
    </button>
    <button class="list-del-btn border-2 size-8 flex items-center justify-center p-1 text-sm border-stone-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
    </svg>
    </button>
    </div>
    </div>`;
    // textCount++;
    // totalTask.innerText   = textCount;     u can use this way to make the count too
    // console.log(textCount);
    
    const checkDone = list.querySelector(".checkDone");  
    const listTask = list.querySelector(".listTask");
    const listDelBtn = list.querySelector(".list-del-btn");
    const listEditBtn = list.querySelector(".list-edit-btn");
                      
    checkDone.addEventListener("change",() => {
        updateDoneTaskTotal();
        listTask.classList.toggle("line-through");
        list.classList.toggle("opacity-20");
        list.classList.toggle("scale-90");
        if(checkDone.checked){
            listEditBtn.setAttribute("disabled",true);
        }else{
            listEditBtn.removeAttribute("disabled");

        }
    });

    listDelBtn.addEventListener("click",() => {
        if(window.confirm("Are you sure to delete ?")){
            list.remove()                
            
        };
    });                    

    listEditBtn.addEventListener("click",() => {
        const newTaskInput = document.createElement("input");
        const currentTask = listTask.innerText;
        newTaskInput.className = "border p-1 font-mono border-stone-900 focus-visible:outline-none active"
        listTask.after(newTaskInput);
        newTaskInput.focus();
        newTaskInput.value = currentTask;
        listTask.classList.add("hidden");
        listEditBtn.setAttribute("disabled",true);
        // listEditBtn.classList.add("opacity-20");
        listEditBtn.classList.add("bg-stone-900");
        listEditBtn.classList.add("text-white");
        checkDone.setAttribute("disabled",true);

        newTaskInput.addEventListener("blur",() => {            
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            // newTaskInput.classList.add("hidden");
            newTaskInput.remove();
            listEditBtn.removeAttribute("disabled");
            checkDone.removeAttribute("disabled");
            // listEditBtn.classList.remove("opacity-20");
            listEditBtn.classList.remove("bg-stone-900");
            listEditBtn.classList.remove("text-white");
        });
        
    });


            return list; 
    


}




//monut 


//event
textInputBtn.addEventListener("click",addList)