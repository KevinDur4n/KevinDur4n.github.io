
function selectTheme(){
    const button = document.getElementById("selectTheme");
    const body =  document.getElementsByTagName('body')[0];

    button.addEventListener('click',function (){
        value = this.checked;
        if(value){
            body.classList.remove('white');
            body.classList.add('dark');
            console.log('select theme dark');
        }else{
            body.classList.remove('dark');
            body.classList.add('white');
            console.log('select theme white');
        }

    })
}

selectTheme();