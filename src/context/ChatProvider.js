import React from 'react'

import {auth, provider, db} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {

    const dataUsuarioInicial = {email: null, uid: null, activo: null}
    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)
    const [mensajes, setMensajes] = React.useState([])

    React.useEffect(()=>{

        detectarUsuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

    const detectarUsuario = () => {
        /*validar el usuario en google*/
        auth.onAuthStateChanged(user => {
            if(user){
                 console.log(user)
                setUsuario({email: user.email, uid: user.uid, activo: true})
                cargarMensajes()
            }else{
                 console.log(user)
                setUsuario({email: null, uid: null, activo: false})
            }
        })
    }

    const cargarMensajes = () => {
        db.collection('chat').orderBy('fecha')
        .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensajes(arrayMensajes)
        })
    } 

    const iniciarSesion = async() => {
        try {
            const res = await auth.signInWithPopup(provider)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const agregarMensaje = async (uid, texto) => {
        try {
            await db.collection('chat').add({
                uid: uid,
                texto: texto,
                fecha: Date.now()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{usuario, iniciarSesion, cerrarSesion, mensajes, agregarMensaje }}>
            {props.children}
        </ChatContext.Provider>
    )
}


export default ChatProvider
