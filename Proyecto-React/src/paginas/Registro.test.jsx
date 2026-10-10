import {render, screen} from '@testing-library/react';
import {describe, it ,expect} from 'vitest';
import Registro from './Registro';
import userEvent from '@testing-library/user-event';

describe('Registro', () => {
    it('muestra el formulario de registro', () => {
        render(<Registro/>);
        expect(screen.getByText('Registro')).toBeInTheDocument();
    });
    it('muestra un error cuando se intenta registrar sin RUT', async () => {
        const user = userEvent.setup();
        render(<Registro/>);

        await user.click(screen.getByRole('button', {name: 'Registrarse'}));
        expect (screen.getByText('Debe ingresar su RUT')).toBeInTheDocument();
    });
    it('muestra un error cuando falta el nombre', async () => {
        const user = userEvent.setup();
        render(<Registro/>);

        await user.type(screen.getByPlaceholderText('11.111.111-1'), '12345678-9');
        await user.click(screen.getByRole('button', {name: 'Registrarse'}));
        expect(screen.getByText('Debe ingresar sus nombre')).toBeInTheDocument();

    });
});