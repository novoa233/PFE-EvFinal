import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Regístrate</h3>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" 
          className="form-control" 
          placeholder="Ingresa tu apellido" 
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
         

        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          ¿Ya estás registrado <a href="/sign-in">ingresa aquí?</a>
        </p>
      </form>
    )
  }
}