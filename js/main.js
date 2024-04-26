 let myInput = document.querySelector('.input');

 let buttons = document.querySelectorAll('.buttons span');

 let theReusult = document.querySelector('.result > span');

 let clear   = document.querySelector('.clear-button');

 let themessage = theReusult.innerHTML;



  function showMessage() {

    theReusult.innerHTML = " The Input Cant Be Empty ";

 }

 
 buttons.forEach(button => {

    button.addEventListener('click',e => {

        if(e.target.classList.contains('add-item')){

            addItem ();
            
        }
        
        
        if(e.target.classList.contains('delete-item')){

            remove()
        }
        
        
        if(e.target.classList.contains('check-item')){

            check()
        }
        
        
        if(e.target.classList.contains('show-item')){

            showItems();
        }

    });

 });


 // create the check function
 function check() {
    if(myInput.value === ""){

        showMessage();

    }else{

        if(localStorage.getItem(myInput.value)){

            theReusult.innerHTML = ` this item <span>${myInput.value}</span> is exisit`

        }else{

            theReusult.innerHTML = ` this item <span>${myInput.value}</span> is not exisit`


        }

    }

 }



// create add function to add the item to local storage 
function addItem () {

    if(myInput.value === ""){

        showMessage();

    }else{

        localStorage.setItem(myInput.value,'test');
    
        myInput.value = "";

        theReusult.innerHTML = themessage;


    }
     

};


// create the delete function 
function remove() {

    if(myInput.value === ""){

        showMessage();

    }else{

        localStorage.removeItem(myInput.value);

        theReusult.innerHTML = ` this item ${myInput.value} has deleted`;

        myInput.value = "";
    }

};


// create show items function
function showItems() {

    if(localStorage.length){

        theReusult.innerHTML = "";

        for(let [key,value] of Object.entries(localStorage)){

            theReusult.innerHTML += `<span class="key">${key}</span>`;

        }
    }else{

        theReusult.innerHTML = `the local storage is empty`;

    }
    
}

// creat clear all function tl delete all items in locak storage
clear.addEventListener('click', e => {

  if(localStorage.length){

     for(let [key,value] of Object.entries(localStorage)){

        localStorage.removeItem(key);

        theReusult.innerHTML = themessage ;

     }
  }

})
  