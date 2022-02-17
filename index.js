// Important
// for of loop  // same as for each
// set get remove clear  Local Storage
//Object.entries => key and value

//Select ELements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");


allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }

        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-items")) {
            showItems();
        }

    }
    )
});


//Handle Clicking on Letters
// document.addEventListener("click", (e) => {
// set The Choose Status
// let theStatus = false;
// 
// if (e.target.className === 'letter-box') {
// 
// e.target.classList.add("clicked");
// }
// }













function showMessage() {
    results.innerHTML = 'Input Cant Be Empty';
}


function checkItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) { //Test
            // console.log(localStorage.getItem(theInput.value));

            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

        } else {
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

        }
    } else {
        showMessage();
    }
}





function addItem() {
    if (theInput.value !== '') {
        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span>Added`;
        theInput.value = '';
    } else {
        showMessage();
    }
}





function deleteItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage Item <span>${theInput.value}<span>Deleted`;
            theInput.value = '';
        } else {
            results.innerHTML = ` No Local Storage Item with The Name <span>${theInput.value}<span>`;

        }
    } else {
        showMessage();
    }
}






function showItems() {
    if (localStorage.length) {
        console.log(`Found Elements ${localStorage.length}`);
        results.innerHTML = '';
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        for (const [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="keys">${key}</span>`
        }

    } else {
        results.innerHTML = `Local Storage Is Empty`;
    }
}