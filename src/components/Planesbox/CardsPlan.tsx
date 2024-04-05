import type { FC } from "react"
import type { CardsPlanProps } from "../../interfaces/Planexboxprops"
import logo from '../../../public/img/check.svg'

export const CardsPlan:FC<CardsPlanProps> = ({
    plan,
    megas,
    children,
    price,
    onclick,
    descuento,
    fullClaro,
    mobile,
    phone,
    text,
    conditions,
    promocion,
    subtext,
    shadow,
    subtext3,
    subtext2,
    small
}) => {
  return (
    <div className={`w-[350px] ${small?'h-[650px]':'h-[800px]' }  text-white flex flex-col max-lg:w-[280px] mt-[50px]`}>
    {shadow && <div className='h-auto bg-white rounded-3xl shadow-md shadow-black overflow-hidden text-black relative'>
        {descuento && <div className='text-white bg-[#FE0000] w-[150px] h-[150px] float-right flex items-end justify-center rotate-45 right-[-75px] top-[-75px] absolute text-[25px]'>{promocion}</div>}
    <div className='w-full p-7 max-lg:px-5 flex flex-col'>
        <span>{plan}</span>
        <span className={`text-[40px] font-bold text-[#FE0000] ${text}`}>{megas}</span>
    </div>
    <div className='w-full flex justify-center'>
    {mobile && 
            <img src={phone} alt="" className='w-[220px]'/>
        }
    </div>
        {fullClaro && <div className='w-full flex bg-[#333333] '>
        <span className=' h-[120px] w-[80%] flex flex-col m-auto items-center justify-center text-center text-[20px] font-bold text-white leading-9 max-lg:w-[80%]'>{children}</span>
    </div>}
    <div className="w-full flex flex-col">
        {conditions && conditions.map((item,index)=>{
            return(
            <div className="w-[80%] m-auto mt-5 flex gap-[5px]" key={index}>
                <img src={logo.src} alt="" className="w-[25px]"/>
                <span className='text-[14px]'>{item.text}</span>
            </div>
            )
        })}

    </div>
    <div className='w-full flex flex-col justify-center items-center text-[#333333] my-4'>
        <span className='font-semibold'>{subtext3}</span>
        <span className='font-semibold text-[60px]'>{price}</span>
        <span className='font-semibold'>{subtext}</span>
        <span className='font-semibold text-[13px] line-through'>{subtext2}</span>
    </div>
    <div className='w-full flex justify-center h-[70px]'>
        <button className='bg-[#FE0000] text-white h-[50px] w-[300px] rounded-md flex justify-center items-center transition-all duration-300 hover:bg-white hover:text-[#FE0000] hover:border hover:border-[#FE0000] cursor-pointer max-lg:w-[250px]' onClick={onclick}>
            <span className=' font-semibold text-[25px] '>Lo quiero</span>
        </button>
    </div>
    </div>}
</div> 
  )
}
