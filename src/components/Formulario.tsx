import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"

const IState : Types['item'] = {
    nombre : "",
    apellido: ""
}

interface Types {
    item : {
        nombre: string
        apellido: string
    }
}

interface FormularioProps {
    prueba: (nombre : Types['item']) => void
}

const Formulario = ({prueba} : FormularioProps) => {

    const [item, setItem] = useState<Types['item']>(IState)
    const [listItem, setListItem] = useState<Array<Types['item']>>([])

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setListItem( [...listItem, item] );
        prueba(item);
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setItem({
            ...item, [e.target.name] : e.target.value
        });
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h3 style={{ textAlign: 'center' }}>Crear nuevo elemento</h3>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input name='nombre' type="text" className="form-control" placeholder="Ingresa ID" onChange={ handleChange }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingresa nombre" name="apellido" onChange={ handleChange }/>
                </div>
                <div className="mb-3">
                    <input className="w-100 p-2 btn btn-primary" type="submit" value="Agregar" />
                </div>
            </form>

            {listItem.map (item => (
                <h1 key={item.nombre}>{item.apellido}</h1>
            ))}
        </>
    )
}

export default Formulario