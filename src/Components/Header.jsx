import React from 'react'
// iconos de reacticons
import { HiHome, HiMagnifyingGlass, HiStar, HiTv, HiPlayCircle  } from "react-icons/hi2";
import { HiPlus, HiDotsVertical  } from "react-icons/hi";
import logo from '../assets/images/disney.png'
import perfil1 from '../assets/images/perfil1.jpg'
import HeaderItems from './HeaderItems';

export default function Header(){
    // constante esta sera un objeto que que tendra el nombre y los iconos mostrar en el navbar yestos seran iterados en un map y se rendicera los iconos en el componente HeaderItems.jsx
    const menu = [
        {
        name: 'HOME',
        icon:HiHome
        },
        {
        name: 'SERACH',
        icon:HiMagnifyingGlass
        },
        {
        name: 'WATCH LIST',
        icon:HiPlus
        },
        {
         name: 'ORIGINAL',
        icon:HiStar
        },
        {
        name: 'MOVIES',
        icon:HiPlayCircle
        },
        {
        name: 'SERIES',
        icon:HiTv
        }
    ]
    return (
        // la clase tailwind flex es como flex direccion row de css
        <div className='flex items-center gap-8 justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] md-[115] object-cover' />
                {/* div vista de desktop */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index)=>(
                        <HeaderItems key={index} name={item.name} Icon={item.icon}/>
                    ))}
                </div>
                {/* este div es el menu cuando es la pantalla sea mayor a md que es 768px se ocultara */}
                <div className='flex md:hidden gap-5'>
                    {/* atributo index es un contador de los valores a iterar y despues de => se hace un condicional index<3&&  para que muestre nada mas 3 elementos */}
                    {menu.map((item, index)=>index<3&&(
                        <HeaderItems key={index} name={''} Icon={item.icon}/>
                    ))}
                </div>
                {/* este div de menu nada mas mostrar la opcion del icono de los 3 puntos pero se mostrar cuando la pantalla sea menor a md 768px */}
                <div className='md:hidden'>
                    {/* este no se itera con el map por que se mostrara nada mas el icono de los 3 punticos verticales */}
                        <HeaderItems name={''} Icon={HiDotsVertical}/>
                        {/* className='absolute' es para que no altere el orde y no mande los 3 puntos para arriva */}
                        <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3'>
                            {menu.map((item, index)=>index>3&&(
                            <HeaderItems key={index} name={item.name} Icon={item.icon}/>
                            ))} 
                        </div>
                </div>
            </div>
            <img src={perfil1} alt="" className='w-[40px] h-[40px] rounded-full' />
        </div>
    )
}