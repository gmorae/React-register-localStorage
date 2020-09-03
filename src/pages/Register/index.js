import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import './style.css';
import { setUsers, getUsers } from '../../service/localStorage';
import { verifyDocument } from '../../utils/verifyDocument';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [document, setDocument] = useState('');
  const [birthday, setBirthday] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const history = useHistory();

  function handleRegisterUser(e) {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      document,
      birthday,
      postalCode,
      address,
      numberAddress,
      complement,
      state,
      city
    }
    if(verifyDocument(data.document)) {
      setUsers(data);
      toast.success('Cadastro realizado com sucesso')
      history.push('/')
    } else {
      toast.error('O CPF já está sendo usado, entre com outro CPF !')
    }
  }

  return (
    <section className="register-container">
      <Link to="/">
        <FiArrowLeft size={16} color="8257e6" />
        Voltar para home
      </Link>
      <form onSubmit={handleRegisterUser}>
        <h1>Cadastrar novo usuário</h1>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="firstName">Nome</label>
              <input
                name="firstName"
                value={firstName}
                required
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="lastName">Sobrenome</label>
              <input
                name="lastName"
                value={lastName}
                required
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="document">CPF</label>
              <input
                name="document"
                value={document}
                required
                onChange={e => setDocument(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="birthday">Data de aniversário</label>
              <input
                name="birthday"
                value={birthday}
                required
                onChange={e => setBirthday(e.target.value)}
              />
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="postalCode">CEP</label>
              <input
                name="postalCode"
                value={postalCode}
                required
                onChange={e => setPostalCode(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="address">Endereço</label>
              <input
                name="address"
                value={address}
                required
                onChange={e => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="numberAddress">Número</label>
              <input
                name="numberAddress"
                value={numberAddress}
                required
                onChange={e => setNumberAddress(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="complement">Complemento</label>
              <input
                name="complement"
                value={complement}
                onChange={e => setComplement(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="state">Estado</label>
              <input
                name="state"
                value={state}
                required
                onChange={e => setState(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <input
                name="city"
                value={city}
                required
                onChange={e => setCity(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </section>
  )
}

export default Register;