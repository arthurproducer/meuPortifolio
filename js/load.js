const load = () => {
    const backToTop = new BackToTop();
    console.log('Texto de carregamento');
}

async function enviar(){
    alert(1);
    const name = document.querySelector('.name').value; 
    const subject = document.querySelector('.subject').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;

    const msg = {
        from: "arthur.sales@assessoria.app",
        to: 'arthur.smii@hotmail.com',
        subject: "Assunto do Heroku",
        text: `
            Nome de quem entrou em contato: ${name}
            Email de quem entrou em contato: ${email}
            Messagem: ${message}
            `
    };

    try{
    const data = await fetch('https://fiap-sender.herokuapp.com/email/send',
    {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg),
    }
    )

    }catch(err){
        console.error(err);
    } 
}