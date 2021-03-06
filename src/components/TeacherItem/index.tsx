import React from 'react'
import whatsAppIcon from "../../assets/images/icons/whatsApp.svg";

import './styles.css'
import api from '../../services/api';

interface TeacherItemProps {
    teacher: {
        id: number
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img
                    src={teacher.avatar}
                    alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/55${teacher.whatsapp}`}>
                    <img src={whatsAppIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;
