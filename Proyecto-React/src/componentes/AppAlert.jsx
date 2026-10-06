import Alert from 'react-bootstrap/Alert';

function AppAlert({mostrar, cerrar, variant = "primary", msg}){
    return (
        <Alert
            dismissible
            show={mostrar}
            onClose={cerrar}
            variant={variant}>
                {msg}
            </Alert>
    );
}
export default AppAlert;