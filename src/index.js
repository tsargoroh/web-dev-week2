import "./styles.css";

let submit_button = document.getElementById("submit-data")
let input_username = document.getElementById("input-username")
let input_email = document.getElementById("input-email")
let input_address = document.getElementById("input-address")
let input_admin = document.getElementById("input-admin")
let table_body = document.getElementById("table-body")
let empty_table = document.getElementById("empty-table")
let image = document.getElementById("input-image")

empty_table.addEventListener("click", function(){
  table_body.innerHTML = ""
})

submit_button.addEventListener("click", function(e){
  e.preventDefault()
  let mark = (input_admin.checked == true) ? "X" : "-"
  let rows = table_body.querySelectorAll("tr")
  let detector = false
  for (let i=0; i<rows.length; i++){
    let data = rows[i].querySelectorAll("td")
    if (data[0].innerHTML/*.textContent*/ == input_username.value){
      if (image.files[0] == null){
        rows[i].innerHTML = "<td>"+input_username.value+"</td><td>"+input_email.value+"</td><td>"+input_address.value+"</td><td>"+mark+"</td>"
      } else{
        let img = document.createElement("img")
        img.src = URL.createObjectURL(image.files[0])
        img.width = 64
        img.height = 64
        rows[i].innerHTML = "<td>"+input_username.value+"</td><td>"+input_email.value+"</td><td>"+input_address.value+"</td><td>"+mark+"</td>"
        let temp_td = document.createElement("td")
        temp_td.appendChild(img)
        rows[i].appendChild(temp_td)
      }
      detector = true
    }
  }
  if (detector == false){
    let table_data_row = document.createElement("tr")
    if (image.files[0] == null){
      table_data_row.innerHTML = "<td>"+input_username.value+"</td><td>"+input_email.value+"</td><td>"+input_address.value+"</td><td>"+mark+"</td>"
    } else{
      let img = document.createElement("img")
      img.src = URL.createObjectURL(image.files[0])
      img.width = 64
      img.height = 64
      table_data_row.innerHTML = "<td>"+input_username.value+"</td><td>"+input_email.value+"</td><td>"+input_address.value+"</td><td>"+mark+"</td>"
      let temp_td = document.createElement("td")
      temp_td.appendChild(img)
      table_data_row.appendChild(temp_td)
    }
    table_body.appendChild(table_data_row)
  }
    
    
    /*let mark
    if (input_admin.checked == true){
      mark = "X"
    } else{
      mark = "-"
    }*/
})