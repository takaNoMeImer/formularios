import React, { ChangeEvent, FormEvent, useState } from "react";

const IState : Form = {
    id : 0,
    name: '',
    description: '',
    poster: ''
}

interface Types {
    item: {
        id: number,
        name: string,
        description: string,
        poster: string
    };
    item2 : {
        nombre: string,
        apellido: string
    };
}

interface FormularioProps {
    add: ( item : Form ) => void;
}

type Form = Types['item'];
type FormElement = FormEvent<HTMLFormElement>

const Formulario = ({ add } : FormularioProps) => {

    const [item, setItem] = useState<Form>(IState);
    const [listItem, setListItem] = useState<Array<Form>>([]);

    const handleSubmit = (e : FormElement) => {
        e.preventDefault();
        setListItem([...listItem, item]);
        add(item);        
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        setItem({...item, [e.target.name] : e.target.value});
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h3 style={{ textAlign: 'center' }}>Crear nuevo elemento</h3>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input onChange={ handleChange } name='id' type="number" className="form-control" placeholder="Ingresa ID"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input onChange={ handleChange } type="text" className="form-control" placeholder="Ingresa nombre" name="name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <textarea onChange={ handleChange } className="form-control" placeholder="Ingresa descripcion" name="description" ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input onChange={ handleChange } type="text" className="form-control" placeholder="Ingresa imagen" name="poster"/>
                </div>
                <div className="mb-3">
                    <input className="w-100 p-2 btn btn-primary" type="submit" value="Agregar" />
                </div>
            </form>
        </>
    )
}

export default Formulario