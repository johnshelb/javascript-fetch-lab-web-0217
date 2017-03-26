function getIssues() {
  const repo = 'johnshelb/javascript-fetch-lab'
  let x = "https://api.github.com/repos/" + `${repo}` + "/issues"
  fetch(x,{
  headers:{
  Authorization: `token ${getToken()}`
}
})
.then(res=>res.json())
.then(json=>showIssues(json))
}

function showIssues(json) {
const template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
document.getElementById("issues").innerHTML=template(json)
}

function createIssue() {
let title = document.getElementById("title").value
let body = document.getElementById("body").value
const repo = 'johnshelb/javascript-fetch-lab'
let x = "https://api.github.com/repos/" + `${repo}` + "/issues"
const postData = {title: title, body: body}
fetch(x, {
  method: 'post',
  body: JSON.stringify(postData),
  headers:{
    Authorization: `token ${getToken()}`
  }
})
.then(response => getIssues())
}


function showResults(json) {
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById("results").innerHTML = template(json)
 }

function forkRepo() {
  const repo ='learn-co-curriculum/javascript-fetch-lab'
  let x = "https://api.github.com/repos/" + `${repo}` + "/forks"
  fetch(x, {
    method: 'post',
    headers:{
      Authorization: `token ${getToken()}`
    }
  })
  .then(response=>response.json())
  .then(json=>showResults(json))
}

function getToken() {
  return ''
}
