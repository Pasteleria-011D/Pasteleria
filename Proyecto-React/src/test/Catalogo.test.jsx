import {render, screen, fireEvent} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Catalogo from '../paginas/Catalogo';


describe ('Catalogo', () =>{
    it('muestra el titulo del catalogo', () => {
        render(
            <MemoryRouter>
                <Catalogo setCarrito={() => {}} />
            </MemoryRouter> 
        );
        expect(screen.getByRole('heading', {name: 'Catalogo'})).toBeInTheDocument();
    });
    it('muestra un producto del catalogo', () => {
        render(
            <MemoryRouter>
                <Catalogo setCarrito={() => []} />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', {name: 'Torta Cuadrada de Chocolate'})).toBeInTheDocument();
    });
    it('agrega un producto al presionar el boton', () => {
        let carrito = [];

        const setCarrito = (actualizar) => {
            carrito = actualizar(carrito)
        };
        render(
            <MemoryRouter>
                <Catalogo setCarrito={setCarrito}/>
            </MemoryRouter>
        );
        const botones = screen.getAllByRole('button', {name: /agregar al carrito/i});
        fireEvent.click(botones[0]);
        expect(carrito).toHaveLength(1);
        expect(carrito[0].nombre).toBe('Torta Cuadrada de Chocolate');
    });
});