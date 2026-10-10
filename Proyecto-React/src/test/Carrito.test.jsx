import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Carrito from '../paginas/Carrito';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function CarritoPrueba({prodctosIniciales}){
    const [carrito, setCarrito] = useState(prodctosIniciales);
    return <Carrito carrito={carrito} setCarrito={setCarrito} />;
} 

describe('Carrito', () => {
    it('Muestra un mensaje cuando esta vacio',() => {
        render(<Carrito carrito={[]} setCarrito={() => {}}/>);
        expect(screen.getByText('El Carrito esta vacio')).toBeInTheDocument();
    });
    it('muestra el producto agregado al carrito', () => {
        const productoPrueba = {
            id: 1,
            nombre: 'Torta de Chocolate',
            precio: 10000
        };
        render(<Carrito carrito={[productoPrueba]} setCarrito={() => {}}/> );

        expect(screen.getByText('Torta de Chocolate')).toBeInTheDocument();
        expect(screen.getByText(/Total = \$10\.000/)).toBeInTheDocument();
    });
    it('vacia el carrito al presionar el boton', async () => {
        const user = userEvent.setup();
        render(<CarritoPrueba prodctosIniciales={[{id:1, nombre: 'Torta de Chocolate', precio:10000}]}/>)
        await user.click(screen.getByRole('button', {name: 'Vaciar Carrito'}));
        expect (screen.getByText('El Carrito esta vacio')).toBeInTheDocument();
    });
    it('elimina un producto del carrito', async() =>{
        const user = userEvent.setup();

        const productos = [
            { id: 1, nombre: 'Torta de Chocolate', precio: 10000 },
            { id: 2, nombre: 'Cupcake de Vainilla', precio: 2000 }
        ];

        render(<CarritoPrueba prodctosIniciales={productos}/>);
        await user.click(screen.getAllByRole('button', {name: 'Eliminar'})[0]);
        expect(screen.queryByText('Torta de Chocolate')).not.toBeInTheDocument();
        expect(screen.getByText('Cupcake de Vainilla')).toBeInTheDocument();
    });
});

