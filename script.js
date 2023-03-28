
const urlLink = document.getElementById('url');

urlLink.addEventListener('keyup',()=>{
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    let url = urlLink.value;
    let icon = document.querySelector('i');
   
    let result = urlPattern.test(url);
    if(result){
        icon.style.color = 'green';
        icon.classList.add('fa-check');
        icon.classList.remove('fa-x-mark');
        icon.style.visibility='visible';
    }else{
        icon.style.color = 'red';
        icon.classList.remove('fa-check');
        icon.classList.add('fa-xmark');
        icon.style.visibility='visible';
    }
}); 

