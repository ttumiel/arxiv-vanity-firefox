let div = document.getElementsByClassName('full-text')[0];
let link = document.createElement('A')
link.href = 'https://www.arxiv-vanity.com/convert/?query='+encodeURIComponent(window.location);
link.innerText = "Web Page";
let webPage = document.createElement('LI');
webPage.appendChild(link);
div.children[2].insertBefore(webPage, div.children[2].childNodes[0]);
