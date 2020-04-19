import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import herosImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import './styles.css'

export default function Logon() {
    const [ong_id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { ong_id })

            localStorage.setItem('ongId', ong_id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        } catch (err) {
            alert('Falha no login')
        }
    };

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Digite Seu Id"
                        value={ong_id}
                        onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImage} alt="Heroes" />
        </div>
    );
}