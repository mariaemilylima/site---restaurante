const menuToggle = document.getElementById('menu-toggle');
//ABRE O BOTÃO MENU HAMBÚRGUER PARA PODER ADICONAR UM CLICK//

const menuMobile = document.querySelector('.menu-mobile');
//PEGA A CAIXA DO MENU COM OS LINKS//

const menuIcon = document.getElementById('menu-icon');
//PEGA O TEXTO DO ICONE -- MENU//

menuToggle.addEventListener('click', () => {
    //EXECUTA A FUNÇÃO QUE ALTERNA O MENU//

    menuMobile.classList.toggle('active');
    //COM ACTIVE O MENU APARECE//
    

    if (menuMobile.classList.contains('active')) {
        //VERIFICA SE O MENU ESTÁ ABERTO//

        // ----> SE SIM: TROCA O TEXTO DO ÍCONE PARA CLOSE o próprio "X"//

        menuIcon.textContent = 'close';
    } else {
        menuIcon.textContent = 'menu';
    }

});



