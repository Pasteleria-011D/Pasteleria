import {render, screen} from '@testing-library/react';
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
});