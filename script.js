const notesContainer =document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

// f5 basınca verilerin kaybolmaması icin
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");

}

showNotes();




// LOCAL STORES

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}



createBtn.addEventListener("click" ,()=>{

    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})



notesContainer.addEventListener("click",function(e){
    

    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // update the data in browser //Otherwise you just remove the view not the code itself 
 

    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();

            }
            
        })
    }
    
    





})

// Block içine bir sey yazıp entera bastıp alt satıra gectigimde yazdıklarımı
//bu dizinde muhafaza etmek için yazılan kod

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})



//localStorage.clear(); to clear 