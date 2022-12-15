import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function Login({user, manejador}) {

  console.log('user', user)

  const getLogin=(event)=>{
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    if(!email || !password){
      alert('complete los campos')
    return
    }

    event.preventDefault();
    manejador(email, password)
    console.log(user)
  }
 
    return (
      <form onSubmit={getLogin}>
        <h3>Ingresa</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuérdame
            </label>
          </div>
        </div>
        <div className="d-grid">
          {user?( <button type="submit" className="btn btn-danger" onClick={getLogin}>
            Salir
          </button>

          ):(

          <button type="submit" className="btn btn-primary" onClick={getLogin}>
            Ingresar
          </button>
          )

          }
        </div>
        <p className="forgot-password text-right">
          ¿Olvidaste tu <Link to="#">contraseña?</Link>
        </p>
      </form>
    )
  }
