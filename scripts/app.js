var signInForm = `<form> Email:<br>
  <input type="text" name="email" id="email"><br>
  Password:<br>
  <input type="text" name="password" id="password"><br>
    <input type="submit" value="Submit" onClick="submitSignIn()">
</form>`

var newSignInForm = `<form>
    <p class="h5 text-center mb-4">Sign up</p>

    <div class="md-form">
        <i class="fa fa-envelope prefix grey-text"></i>
        <input type="text" id="email" class="form-control">
        <label for="email">Your email</label>
    </div>

    <div class="md-form">
        <i class="fa fa-lock prefix grey-text"></i>
        <input type="password" id="password" class="form-control">
        <label for="password">Your password</label>
    </div>

    <div class="text-center">
        <button type = "submit" class="btn btn-default" onClick="submitSignIn()">Sign Up</button>
    </div>
</form>`

var postForm =`<form>

    <p class="h5 text-center mb-4">Post your code</p>

    <div class="md-form">
        <i class="fa fa-tag prefix grey-text"></i>
        <textarea type="text" id="form1" class="md-textarea" style="height: 100px"></textarea>
        <label for="form1">Description:</label>
    </div>

    <div class="md-form">
        <i class="fa fa-pencil prefix grey-text"></i>
        <textarea type="text" id="form2" class="md-textarea" style="height: 100px"></textarea>
        <label for="form2">Your Code Snippet</label>
    </div>

    <div class="text-center">
        <button class="btn btn-unique" onclick="createSnippet()">Post <i class="fa fa-paper-plane-o ml-1"></i></button>
    </div>

</form>`

//var nav = `<div class='topnav'>
//  <a href='#sign_in' onClick='toSignIn()'>Sign in</a>
//  <a href='#threads' onclick='doSomething()'>Show Threads</a>
//</div>`

var body = `<br><br><div class='the_bod'>Welcome to Snippets.</div>`


var footer = `<div id='footer'>
  <div class="container siteNav">
    <span style="border-bottom:2px solid">Boooo footer booooo</span>
  </div>
</div>`


function app() {
  //document.getElementById('nav').innerHTML = nav
  document.getElementById('body').innerHTML = body
//  document.getElementById('footer').innerHTML = footer


}

function toSignIn() {
  document.getElementsByClassName('the_bod')[0].innerHTML=newSignInForm
}

function toPost(){
    document.getElementsByClassName('the_bod')[0].innerHTML=postForm
}

function submitSignIn() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value

  console.log("email: " + email + " works.")
  console.log("password: " + password + " works.")

    document.getElementsByClassName('the_bod')[0].innerHTML= "Totz logged in now jk"
}

function doSomething() {
  var indexPromise = Snippet.index().then(result => {
    var data = JSON.parse(result)
    var snippets = data.snippets
    console.log(snippets)

    var toAddToList = ""
    
    for(var item in snippets) {
        //var temp = snippets[item].code
        var temp2 = snippets[item]._id
      toAddToList += 
          
          `<hr>

            <div class="row mt-5">
                <!--First column-->
                <div class="col">

                    <!--Card-->
                    <div class="card">

                        <!--CODE SNIPPET-->
                        <code>` + snippets[item].code + ` </code>

                        <!--Card content-->
                        <div class="card-body">
                            <!--Title-->
                            <h4 class="card-title">` + snippets[item].text + `</h4>
                            <!--Text-->
                            <p class="card-text">` + snippets[item]._id +`</p>
                            <a href="#" class="btn btn-primary" onclick="submitSnippet(temp2)">Submit Comment</a>
                            <input type="text" id="comment" class="form-control">
        <label for="comment">Comment</label>` + snippets[item].comments + `
                        </div>

                    </div>`
          console.log(snippets[item].comments)
        //add onclick update
        
    }
    document.getElementsByClassName('the_bod')[0].innerHTML= "" + toAddToList
     
  })
  console.log(indexPromise)
    //logs pending promise
}

function createSnippet () {
//  event.preventDefault()
  const text = document.querySelector('#form1').value
  const code = document.querySelector('#form2').value
  console.log(code)
    console.log(text)
  Snippet.create({ text: text, code: code })
  .then(doSomething())
  
}



function submitSnippet(snippetId) {
  //console.log(document.getElementById(snippetId).value);
  var update = {
    "comments": [{"commentBody": document.getElementById(comment).value }]
  }

   Snippet.update(snippetId, update).then(response => {
        console.log(response)
      doSomething()
   })
  console.log(snippetId) //////attach this to comment
}

window.onload = app