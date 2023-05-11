const cbc = document.querySelector("#box-cbc");
const tks = document.querySelector("#box-tks");
const btn = document.querySelectorAll(".btn");
const sbt = document.querySelector('#btn-envio');
const frase = document.getElementById('numSel');
let btnClicado;

btn.forEach(e => {
    e.addEventListener('click', ()=>{
        btnClicado = e.value;
        e.style.backgroundColor = '#7C8798';
        e.style.color = "var(--White)";
        btn.forEach(ev =>{
            if(ev != e){
                ev.style.backgroundColor = 'var(--bkg-cicle)';
                ev.style.color = 'var(--White)';
            }
        })
    })
});

sbt.addEventListener('click', ()=>{
    cbc.style.display = 'none';
    tks.style.display = 'block';
    console.log(btnClicado);
    frase.innerHTML = `You selected ${btnClicado} out of 5`;
    
})