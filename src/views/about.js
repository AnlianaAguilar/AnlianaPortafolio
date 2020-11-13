import React from 'react';
import { Layout } from '../componets/Layout';
import './about.css'
import BurgerQueen from '../img/BurgerQueen.png'
import CardValidation from '../img/CardValidation.JPG'
import DataLovers from '../img/DataLovers.png'
import RedSocial from '../img/RedSocial.PNG'
import Hootiehoo from '../img/Hootiehoo.png'




export const AboutPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1 className="tituleH1">Proyectos</h1>
          <div className="Contenedor1"> 
            <div className="proyec">
              <img className="imgCardValidation" src={CardValidation} alt="Proyecto" />
              <div className="labelA">
                <a className="labelA1" class="fas fa-code" href='https://github.com/AnlianaAguilar/SCL013-card-validation' target="_blank"> Code</a>
                <a className="labelA1"class="fas fa-desktop" href='https://github.com/Constanza-Oreste/SCL013-social-network' target="_blank"> Deploy</a>
              </div>
            </div>
            
            <div className="proyec">
              <img className="imgDataLovers" src={DataLovers} alt="Proyecto" />
              <div className="labelA">
                <a className="labelA1" class="fas fa-code" href='https://github.com/AnlianaAguilar/SCL013-data-lovers' target="_blank"> Code</a>
                <a className="labelA1"class="fas fa-desktop" href='https://constanza-oreste.github.io/SCL013-social-network/src/index.html' target="_blank"> Deploy</a>
              </div>
            </div>

            <div className="proyec">
              <img className="imgBurgerQueen" src={BurgerQueen} alt="Proyecto" />
              <div className="labelA">
                <a className="labelA1" class="fas fa-code" href='https://github.com/AnlianaAguilar/Burger-Queen' target="_blank"> Code</a>
                <a className="labelA1"class="fas fa-desktop" href='https://burger-queen-a8441.web.app/' target="_blank"> Deploy</a>
              </div>
            </div>

            <div className="proyec">
              <img className="imgRedSocial" src={RedSocial} alt="Proyecto" />
              <div className="labelA">
                <a className="labelA1" class="fas fa-code" href='https://github.com/AnlianaAguilar/SCL013-social-network' target="_blank"> Code</a>
                <a className="labelA1"class="fas fa-desktop" href='https://constanza-oreste.github.io/SCL013-social-network/src/index.html' target="_blank"> Deploy</a>
              </div>
            </div>

            <div className="proyec">
              <img className="imgHootiehoo" src={Hootiehoo} alt="Proyecto" />
              <div className="labelA">
                <a className="labelA1" class="fas fa-code" href='https://github.com/AnlianaAguilar/SCL013-HootieHoo' target="_blank"> Code</a>
                <a className="labelA1"class="fas fa-desktop" href='https://ganemosle-al-virus.web.app/' target="_blank"> Deploy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="Iconos"> 
        <h1>Metodología utilizada</h1> 
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-node"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-invision"></i>
          <i class="fab fa-figma"></i>
        </div>

        <div className="skill">
          <h1>Habilidades Skill</h1>

          <p>
          Me caracterizo por tener iniciativa, ser pro-activa, autodidacta, <br/>
          organizada, con alto sentido de responsabilidad, con capacidad de <br/>
          trabajar en equipo y disciplinada.
          </p>

        </div>


      </div>
    </Layout>
  )
}
