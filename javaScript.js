function changeBackgroung(variableName){
    let allBtn = document.getElementsByTagName('button')
    for(let i=0;i<allBtn.length;i++){
        allBtn[i].classList.remove('btn-primary')
    }
    let doc = document.getElementById(variableName)
    doc.classList.add('btn-primary')
};