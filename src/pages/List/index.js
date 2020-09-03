import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { getUsers } from '../../service/localStorage';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers())
  }, [getUsers]);

  return (
    <section className="list-container">
      <header>
        <h1>Todos os usuários</h1>
        <Link to="register" className="btn">Cadastrar um novo usuário</Link>
      </header>

      <main>
        <ul>
          {
            users?.map(user => (

              <li key={user.document}>
                <strong>Nome completo</strong>
                <p>{`${user.firstName} ${user.lastName}`}</p>

                <strong>CPF</strong>
                <p>{user.document}</p>

                <strong>Data de nascimento</strong>
                <p>{user.birthday}</p>

                <strong>Endereço</strong>
                <p>{`${user.address}, ${user.numberAddress}${user.complement ? `/${user.complement}` : ''} - ${user.city}/${user.state} - ${user.postalCode}`}</p>
              </li>

            ))
          }
        </ul>
      </main>
    </section>
  )
}

export default List;