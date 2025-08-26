let form = document.getElementById("form")
let send = document.getElementById("send")


function TakeForm(event) {
    event.preventDefault()
    let formdata = new FormData(form)
  let getData = Object.fromEntries(formdata.entries())
  console.log(getData)
  alert("FORMS SUBMITTED")
}

send.onclick = TakeForm

