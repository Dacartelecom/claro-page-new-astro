import { useEffect, useState } from "react";


const Reload = () => {


  return (
    <div className='w-full flex justify-center flex-col items-center gap-[50px] h-[500px]'>
        <div className='mt-[20px]'><img className='w-[150px]' src="https://www.clarointernet.pe/wp-content/uploads/2023/11/loading-claro-gadytel.gif" alt="" /></div>
        <span className='text-[23px] font-semibold'>Recibimos Tu Solicitud</span>
        <span>Uno de nuestros asesores de ventas, se pondrá en contacto con usted en breves minutos.</span>
    </div>
  )
}

export default Reload
