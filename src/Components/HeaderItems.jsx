import React from "react";

// se reivie como parametro el iem enviado desde el componente Header que es el que esta llamando a este componente y se le pasa la props
export default function HeaderItems({name, Icon}){
    return(
        // underline-offset-8  hace un paddin hacia abajo de al hacer hover
        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
            <Icon></Icon>
            {/* className="hidden md:block"  cuando supere el tamaño de pantalla md muestra el h2 */}
            <h2 className="">{name}</h2>
        </div>
    )
}