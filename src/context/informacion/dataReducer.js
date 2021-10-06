
export default (state, action) => {
    switch (action.type) {
        case 'MOSTRAR_PBX':
            return {
                ...state,
                dataPbx: action.payload.filter(item => item.StatusPbx === 'Active')
            }

         case 'FILTRAR_CORREO':
             return {
                ...state,
                dataEmail: action.payload
             }
            
        case 'VALORES_INICIALES':
            return {
                ...state,
                dataEmail: action.payload
            }

        case 'FILTRAR_PBX':
            return {
                ...state,
                dataPbx: action.payload.filter(item => item.StatusPbx === 'Active')
            }

        default:
            return state;
    }
}

