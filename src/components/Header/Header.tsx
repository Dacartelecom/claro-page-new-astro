'use client'
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";


export const Header = () => {


  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '016805993',
    num: '(01) 6805993'
  });
  const [TSource] = useState(params.get('T-source'));
  const [messageButton, setMessageButton] = useState<string>('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ');

  const active = () => setActiveModal(true);

  useEffect(() => {
    if (pathname.includes('planes-moviles')) {
      setMessageButton('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ')
    } else {
      setMessageButton('ATENCIÓN AL CLIENTE Y/O RECLAMOS, HAZ CLIC AQUÍ')
    }
    if (nombreDelDominio.includes("clarofertas")) {
      if (TSource){
        switch(TSource){
          case 'ext':
            setNumber({
              tel: '016806465',
              num: '(01) 6806465'
            });
            break;

          case 'ext_1':
            setNumber({
              tel: '016806268',
              num: '(01) 6806268'
            });
            break;

          case 'ext_2':
            setNumber({
              tel: '016806466',
              num: '(01) 6806466'
            });
            break;

          case 'ext_3':
            setNumber({
              tel: '6806269',
              num: '(01) 6806269'
            });
            break;
        }
      } else {
        if (pathname.includes('planes-moviles')){
          setNumber({
            tel: '016806465',
            num: '(01) 6806465'
          });
        }else{
          setNumber({
            tel: '016806465',
            num: '(01) 6806465'
          });
        }
      }
      
    }else{
      if (TSource) {
        switch (TSource) {
          case '01clarohogar':
            setNumber({
              tel: '017028541',
              num: '(01) 7028541'
            });
            break;
  
          case '02clarointernet':
            setNumber({
              tel: '017028547',
              num: '(01) 7028547'
            });
            break;
  
          case '03clarotv':
            setNumber({
              tel: '016806303',
              num: '(01) 6806303'
            });
            break;
  
          case '05claroperu':
            setNumber({
              tel: '017017611',
              num: '(01) 7017611'
            });
            break;
  
          case '06claromovil':
            setNumber({
              tel: '016805992',
              num: '(01) 6805992'
            });
            break;

          case 'rrss':
            setNumber({
              tel: '015009717',
              num: '(01) 5009717'
            });
            break;
        }
      } else {
        if (pathname.includes('planes-moviles')){
          setNumber({
            tel: '016805992',
            num: '(01) 6805992'
          });
        }else{
          setNumber({
            tel: '016805993',
            num: '(01) 6805993'
          });
        }
      }
    }
    
  },[
    pathname,
    TSource
  ]);


  return (
    <>
      <header>
        <div className="w-full bg-[#222]">
          <div className="w-full h-auto text-white font-bold flex items-center justify-between gap-4 pr-2 max-lg:py-2 max-lg:pl-1 lg:justify-end lg:pr-4">
            <span className="text-base lg:text-xl">Línea Exclusiva de Ventas</span>
            <a
              href={`tel:${ number.tel }`}
              className="text-sm flex items-center bg-[#0fbddf] py-2 px-3 transition-all duration-500 max-lg:rounded-full max-lg:animate-[blink_2s_infinite] lg:h-full lg:py-4 lg:px-4 lg:bg-[#ee122c] lg:text-xl lg:hover:bg-[#222] lg:hover:border-x lg:hover:border-white"
            >
              <i className="fa-solid fa-phone-volume lg:hidden"></i>
              { number.num }
            </a>
          </div>
          <div className="w-full flex items-center justify-end py-3 pr-2 lg:hidden text-center">
            <button
              className="bg-[#ff3a2d] flex items-center gap-1 py-1 px-3 rounded-full border-2 border-white text-white text-xs font-bold uppercase max-md:text-[9px]"
              onClick={ active }
            >
              <i className="fa-solid fa-hand-point-right text-base"></i>
              "{ messageButton }"
            </button>
          </div>
        </div>
      </header>
      <Modal
        activeModal={ activeModal }
        setActiveModal={ setActiveModal }
        background="#fff"
      >
        <h4 className="text-center text-lg font-bold tracking-tighter">Teléfonos solo para atención al cliente y reclamos</h4>
        <div className="w-full h-1 bg-[#ee122c] rounded-full my-4"></div>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un móvil Claro</p>
        <a
          href="tel:123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          123
        </a>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un teléfono fijo y desde otras operadoras</p>
        <a
          href="tel:080000123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          0800 00123
        </a>
      </Modal>
    </>
  )
}