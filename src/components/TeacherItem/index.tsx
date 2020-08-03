import React from 'react'
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/6460158?s=460&u=0906959bde7441d211f191f943f6a210694ea3d8&v=4"
                    alt="Ricardo de Carvalho"/>
                <div>
                    <strong>Ricardo de Carvalho</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing.
                <br/><br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
