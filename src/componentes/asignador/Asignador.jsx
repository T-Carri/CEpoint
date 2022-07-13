import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Asignador.css'

export default class Asignador extends Component {
    render() {
        return (
            <div>
                 <DropdownButton
        id="dropdown-button-dark-example1"
        variant="secondary"
        menuVariant="dark"
        title="Residente"
        className="mt-1"
      >
        <Dropdown.Item href="#/action-1" active>
         Residente 1
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Residente 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Residente 3</Dropdown.Item>
     
        <Dropdown.Item href="#/action-4">Residente 4</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Residente"
        className="mt-2"
      >
        <Dropdown.Item href="#/action-1" active>
        Residente 1
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Residente 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Residente 3</Dropdown.Item>
     
        <Dropdown.Item href="#/action-4">Residente 4</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Residente"
        className="mt-3"
      >
        <Dropdown.Item href="#/action-1" active>
        Residente 1
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Residente 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Residente 3</Dropdown.Item>
     
        <Dropdown.Item href="#/action-4">Residente 4</Dropdown.Item>
      </DropdownButton>
      
            </div>
        )
    }
}
