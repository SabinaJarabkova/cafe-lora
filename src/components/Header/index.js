import './style.css';

export const Header = () => {



    const element = document.createElement('header');
    element.innerHTML = `
        <div class="header__content container">
            <div class="site-logo"></div>
                <div class="navigation">
                    <button class="nav-btn"></button>
                    <nav class="rollout-nav nav-closed">
                        <a href="#home">domů</a>
                        <a href="#menu">menu</a>
                        <a href="#gallery">galerie</a>
                        <a href="#contact">kontakt</a>
                    </nav>
                </div>
            </div>
        </div>
    `;


    const navBtn = element.querySelector('.nav-btn');
    navBtn.addEventListener('click', () => {
        
        element.querySelector('nav').classList.toggle('nav-closed')
    })


    const rollOut = element.querySelector('.rollout-nav');
    rollOut.addEventListener('click', () => {
        
        element.querySelector('.rollout-nav').classList.toggle('nav-closed')
    })



    return element;


}
