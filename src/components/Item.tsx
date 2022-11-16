import React, { useState } from "react";

interface CardItemProps {
    item: {
        id: number,
        name: string,
        description: string,
        poster: string
    };
    test: (item: CardItemProps['item']) => void
    update: ( item : CardItemProps['item'] ) => void
}

const CardItem: React.FC<CardItemProps> = ({ item, test, update }) => {

    const [state, setState] = useState(false);
    const [stateButton, setStateButton] = useState(true);
    const [deleteButton, setDeleteButton] = useState(false);

    let ShowDescription = () => { return (<></>) }
    let ButtonFavoritos = () => { return (<></>) }
    let ButtonEliminar = () => { return (<></>) }

    if (state) {
        ShowDescription = () => {
            return (
                <div className="mt-4">
                    <p>{item.description.substring(0, 100)}</p>
                </div>
            )
        }
    }

    if (stateButton) {
        ButtonFavoritos = () => {
            return (
                <>
                    <input className="btn btn-primary" style={{ width: '45%' }} type="button" value="Favoritos" onClick={ () => {
                        test(item),
                        setStateButton(!stateButton)
                        setDeleteButton(!deleteButton)
                    }}/>
                </>
            )
        }
    }

    if (deleteButton) {
        ButtonEliminar = () => {
            return (
                <>
                    <input className="btn btn-danger" style={{ width: '45%' }} type="button" value="Eliminar" onClick={ () => {
                        setDeleteButton(!deleteButton)
                        setStateButton(!stateButton)
                        update(item);
                    }}/>
                </>
            )
        }
    }

    return (
        <>
            <div className="card mb-5 p-4" style={{ width: '22rem' }}>
                <img src={item.poster} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{item.name}</h5>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input className="btn btn-primary" style={{ width: '45%' }} type="button" value="Ver mas" onClick={() => setState(!state)} />
                    <ButtonFavoritos />
                    <ButtonEliminar />
                </div>
                <ShowDescription />
            </div>
        </>
    );
}

export default CardItem;