import C1 from '../images/contacts/contacto (1).jpg'
import C2 from '../images/contacts/contacto (2).jpg'
import C3 from '../images/contacts/contacto (3).jpg'
import C4 from '../images/contacts/contacto (4).jpg'
import C5 from '../images/contacts/contacto (5).jpg'
import C6 from '../images/contacts/contacto (6).jpg'
import C7 from '../images/contacts/contacto (7).jpg'
import C8 from '../images/contacts/contacto (8).jpg'
import C9 from '../images/contacts/contacto (9).jpg'
import C10 from '../images/contacts/contacto (10).jpg'

const contactos = [
    {
        "id": 1,
        "nombre": "Maitet Cruz",
        "avatar": C1,
        "estado": "conectado",
        "mensajeEstado": "Estudiando en mi casa",
        "hora": "8:29 AM",
        "cantMensajes": 3,
        "direccion":"Sta cruz del Norte",
        "descripcion":"Soy doctora, me gustan los animales, la música y adoro a mi familia",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Hola, como amaneciste hoy"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Bien, listo para salir ya"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Y tu, que haces?"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Queriendo dormir un poco más"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"Ya llegue"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"enviado",
                "texto":"Holaaaaaaa"
            },
        ]
    },
    {
        "id": 2,
        "nombre": "Mireily Sanchez",
        "avatar": C2,
        "estado": "ausente",
        "mensajeEstado": "Hola a todos",
        "hora": "8:29 PM",
        "cantMensajes": 0,
        "direccion":"EE.UU, Miami",
        "descripcion":"Soy gastronomica, de las mejores. Vivo con mi familia que es super grande",
        "mensajes":[
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Hola Miri, como te va la nueva casa???"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"pssssss, estas??"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"todo bien, que bueno que escribes, estaba en el trabajo"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"por aqui todos bien"
            },
        ]
    },
    {
        "id": 3,
        "nombre": "Lazaro Medina",
        "avatar": C3,
        "estado": "conectado",
        "mensajeEstado": "",
        "hora": "ayer",
        "cantMensajes": 32,
        "direccion":"Sta cruz del Norte",
        "descripcion":"Soy fisiculturista",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"oe man, que hay"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"que se cuenta"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Na aquim ostinao, Y tu, que haces?"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"por fin vienes el viernes??"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"anja, pero quiero pasar primero por la casa a recogerte las pesas, que el gimnacio lo tienes malito malito"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"enviado",
                "texto":"ok, mola"
            },
        ]
    },
    {
        "id": 4,
        "nombre": "Jose Javier",
        "avatar": C4,
        "estado": "conectado",
        "mensajeEstado": "Programando react",
        "hora": "1:29 AM",
        "cantMensajes": 5,
        "direccion":"La Habana",
        "descripcion":"Soy Ingeniero informático y me gustan las manualidades",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Wisbe estas?"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"si dm, que paso?"
            },
            {
                "tipo":"enviado",
                "hora":"3:32 PM",
                "estado":"leido",
                "texto":"Al final te desconectaste, que te paso?"
            },
            {
                "tipo":"recibido",
                "hora":"3:33 PM",
                "estado":"leido",
                "texto":"Na, reunion de centro con los vicedecanos incluidos, se esta abriendo un nuevo proyecto para el Mariel"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"UFFFF, que bueno, estas incluido no???"
            },
            {
                "tipo":"enviado",
                "hora":"4:26 PM",
                "estado":"enviado",
                "texto":"o al menos lo estaras?"
            },
            {
                "tipo":"recibido",
                "hora":"4:27 PM",
                "estado":"enviado",
                "texto":"Si, se esta valorando la posibilidad, aunque primero van las analistas a hacer levantamiento de informacion"
            },
        ]
    },
    {
        "id": 5,
        "nombre": "Emilio Cardero",
        "avatar": C5,
        "estado": "desconectado",
        "mensajeEstado": "Me fui",
        "hora": "2:29 AM",
        "cantMensajes": 6,
        "direccion":"Granma",
        "descripcion":"Soy informático y me gusta jugar con la programacion, se que soy raro pero es mi hoby",
        "mensajes":[
            {
                "tipo":"enviado",
                "hora":"hace 2 días",
                "estado":"leido",
                "texto":"que hay tieso"
            },
            {
                "tipo":"enviado",
                "hora":"hace 2 días",
                "estado":"leido",
                "texto":"Y tu, que haces?"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Na, aqui, que llegue de la tierra prometida, que viaje mas largo man, estaba loco por llegar"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"entregado",
                "texto":"bafff, me imagino, pero bueno, ahora es a dormir que el cuerpo te lo debe estar pidiendo a gritos"
            },
            {
                "tipo":"enviado",
                "hora":"12:10 PM",
                "estado":"enviado",
                "texto":"ya estas listo??"
            },
            {
                "tipo":"recibido",
                "hora":"12:11",
                "estado":"leido",
                "texto":"si ya, cuando quieras le metemos"
            },
        ]
    },
    {
        "id": 6,
        "nombre": "Jenifer Herrera",
        "avatar": C6,
        "estado": "noMolestar",
        "mensajeEstado": "Tesis",
        "hora": "8:29 AM",
        "cantMensajes": 9,
        "direccion":"San Juan",
        "descripcion":"",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Hola"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Hi"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Estaba viendo tu perfil y me parecio interesante tu trabajo 3D"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Yo soy aficionada en la materia"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"Que bueno, eso es un arte despues de todo"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"enviado",
                "texto":"aunque dices que eres aficionada, no estan nada mal los modelos tuyos"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"graciaaaas"
            },
        ]
    },
    {
        "id": 7,
        "nombre": "Jose Luis",
        "avatar": C7,
        "estado": "conectado",
        "mensajeEstado": "Soy papá",
        "hora": "10:32 AM",
        "cantMensajes": 3,
        "direccion":"Cuba, Madruga",
        "descripcion":"Soy baterista o al menos lo intento, gg",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Que hay perdido???"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"NA, Jose man, que hay mie hernano, que se cuenta, y la ninna??"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"No me digas que la pusiste a tocar bateria y ya toca mejor que tu"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Bueeeeeeno, casi casi, con el tiempo que me paso sin ensallar puede ser que esa sea la situacion, jajajaja. Por lo demas, todo bien, la pincha es lo que me tiene mas menos loco, sin tiempo para nada"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"jajaja, ya tu sabes, asi estamos todos"
            },
            {
                "tipo":"enviado",
                "hora":"4:26 PM",
                "estado":"enviado",
                "texto":"Dale bro, no te pierdas"
            },
        ]
    },
    {
        "id": 8,
        "nombre": "Manuel Carbonel",
        "avatar": C8,
        "estado": "conectado",
        "mensajeEstado": "Ya llegé",
        "hora": "9:21 AM",
        "cantMensajes": 2,
        "direccion":"Sta cruz del Norte",
        "descripcion":"Informático",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Hola, sigues donde mismo"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"enviado",
                "texto":"anja"
            },
        ]
    },
    {
        "id": 9,
        "nombre": "Maritza Gonzáles",
        "avatar": C9,
        "estado": "desconectado",
        "mensajeEstado": "",
        "hora": "12:03 AM",
        "cantMensajes": 4,
        "direccion":"Sta cruz del Norte",
        "descripcion":"Artesana a tiempo completo",
        "mensajes":[
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"holaaaaa"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Dimelo tia, como andan las ventas"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"y la gente por la casa como estan?"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Las ventas bien y por la casa papi es el que esta un poquito chibao"
            },
            {
                "tipo":"enviado",
                "hora":"4:25 PM",
                "estado":"entregado",
                "texto":"y eso???, que paso??"
            },
            {
                "tipo":"recibido",
                "hora":"4:25 PM",
                "estado":"leido",
                "texto":"na, achaques de viejos"
            },
        ]
    },
    {
        "id": 10,
        "nombre": "Yoel Rojo",
        "avatar": C10,
        "estado": "conectado",
        "mensajeEstado": "Que vida más buena",
        "hora": "8:43 AM",
        "cantMensajes": 6,
        "direccion":"Huruguay",
        "descripcion":"Soy informático, me gusta la música, toco guitarra y el bajo",
        "mensajes":[
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Que hay rojito, que se cuenta, como te fue el viaje??"
            },
            {
                "tipo":"enviado",
                "hora":"ayer",
                "estado":"leido",
                "texto":"al menos ya llegaste no??"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"leido",
                "texto":"Ni me digas na, que vieje mas pesao, al menos la parte del aereopuerto, tremendo lio para salir"
            },
            {
                "tipo":"recibido",
                "hora":"ayer",
                "estado":"entregado",
                "texto":"Ya aqui fue toda una felicidad, ya hasta tengo trabajo"
            },
            {
                "tipo":"enviado",
                "hora":"10:00 AM",
                "estado":"enviado",
                "texto":"QUe bueno man, despues te escribo que ando en una reunion, cuidate por ahi"
            },
        ]
    }
]

export default contactos;