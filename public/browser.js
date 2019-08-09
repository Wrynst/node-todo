document.addEventListener("click", function(e) {
  // Delete
  if (e.target.classList.contains("edit-me")) {
    if(confirm("Are you sure you want to delete this item?")){
      axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
        // update the todo in html
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
      }).catch(function(){
        console.log("Please try again later")
      })
    }
  }
  
  // Update 
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Enter your bitch ass text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML) 
    if(userInput){
      axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function () {
        // update the todo in html
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
      }).catch(function(){
        console.log("Please try again later")
      })
    }
  }
})