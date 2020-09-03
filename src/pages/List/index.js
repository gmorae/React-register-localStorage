import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const List = () => {
  return (
    <section className="list-container">
      <header>
        <h1>Todos os usuários</h1>
        <Link to="register" className="btn">Cadastrar um novo usuário</Link>
      </header>

      <main>
        <ul>
          {
            [1, 2, 3, 4].map(item => (

              <li key={item}>
                <strong>Nome completo:</strong>
                <p>Gabriel Moraes Martins</p>

                <strong>CPF:</strong>
                <p>222.222.222-22</p>

                <strong>Data de nascimento:</strong>
                <p>19/04/2001</p>

                <strong>Endereço:</strong>
                <p>Estrada dos morros, 578 - São Paulo/SP - 07131-190</p>
              </li>

            ))
          }
        </ul>
      </main>
    </section>
  )
}

export default List;