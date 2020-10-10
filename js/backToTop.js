class BackToTop{
    constructor(){
        console.log(1);
        //console.log(document.getElementsByClassName('btn_back-to-top'));
        //console.log(document.querySelector('.btn_back-to-top'));
        this.element = document.querySelector('.footer .btn_back-to-top');

        this.element.addEventListener('click',
         this.handleClick.bind(event,this));

    }

    handleClick(_instance, event){        
        _instance.interval = setInterval(() =>{
            if(window.scrollY <=0)
            return clearInterval(_instance.interval);
        
            window.scrollTo(0,window.scrollY - 10);
        },10);
        //window.scrollY
        //console.log(1231424);
        //window.scrollTo(0,0);
    }
}
