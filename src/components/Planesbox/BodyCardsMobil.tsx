'use client'
import { useEffect, useState } from 'react';
import Sections from './Sections';
import SubSections from './SubSections';
import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { CardsPlan } from './CardsPlan';
import type { EmblaOptionsType } from 'embla-carousel';
import iphone14 from '../../../public/img/iphone-14.webp'
import s23 from '../../../public/img/samsung-galaxy-s23.webp'
import note12 from '../../../public/img/xiaomi-note12.webp'
import motog23 from '../../../public/img/motorola-g23.webp'
import reno7 from '../../../public/img/oppo-reno7.webp'
import appoa78 from '../../../public/img/oppo-a78.webp'
import motoe30 from '../../../public/img/motorola-e30.webp'



const SUB_SECTIONS: Array<Array<string>> = [
  [
    'PLANES MAX',
    'PLANES MAX PLAY CON NETFLIX',
    'PLANES + EQUIPO'
  ]
];

const OPTIONS_CARDS: EmblaOptionsType = {
  loop: false,
  slidesToScroll: 1,
  startIndex: 0,
};

const BodyCardsMobil = () => {
  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

  const [numberCall, setNumberCall] = useState<string>('');
  const [tSource, setTSource] = useState<string>('');
  const [inputState, setInputState] = useState<string>('');
  const viewModal = () => setActiveModal((_prev) => (true));
  const closeModal = () => setActiveModal((_prev) => (false));
  const getChildrens = (array: any[]) => (array.map((item, index) => {
    const {
      plan,
      megas,
      price,
      promocion,
      onClick,
      descuento,
      children,
      fullClaro,
      mobile,
      phone,
      text,
      conditions,
      subtext,
      shadow,
      subtext2,
      subtext3,
      small
    } = item;
  
    return (
      <CardsPlan 
      fullClaro={fullClaro} 
      mobile={mobile}
      plan={plan}
      megas={megas}
      price={price}
      promocion={promocion}
      onclick={onClick}
      descuento={descuento}
      phone={phone}
      text={text}
      conditions={conditions}
      subtext={subtext}
      subtext2={subtext2}
      shadow={shadow}
      subtext3={subtext3}
      small={small}
      >
        {children}
      </CardsPlan>
    )
  }));
  const setNumber = (e: any) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((_prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
  };
  const sendNumber = (e: any) => {
    e.preventDefault();

    const wsDataA = new URLSearchParams(window.location.search);

    if (tSource == '01winperu') {
      wsDataA.append("service", "callmeWinPeru1");
    } else if (tSource == '02winperu') {
      wsDataA.append("service", "callmeWinPeru1");
    } else{
      wsDataA.append("service", "callmeWinPeru");
    }
    wsDataA.append("username", "dacarEs");
    wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");
    wsDataA.append("telephone", inputState);
    wsDataA.append("ip", "127.0.0.1");
    wsDataA.append("tsource", tSource);


    const leadUrlA = "https://ws-dacar-ica.octopus-latam.com/?" + wsDataA.toString();

    fetch(leadUrlA)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((response) => {
        console.log(response);
        console.log(leadUrlA);

        setInputState(() => (''));
        closeModal();
      });
  };

  const ARRAYS_CHILDRENS = [
    [
      [/* Internet  */
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'25 GB',
          price:'S/ 39.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Minutos y SMS Nacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan: 25 GB'
              },{
                text:'Gigas del plan con Full Claro: 37.5 GB'
              },{
                text:'Minutos Internacionales: 350'
              },{
                text:'Redes sociales ilimitadadas (Instagram, Facebook, Messenger, Waze, Whatsapp)'
              }
            ],
            subtext:'al mes',       
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'35 GB',
          price:'S/ 49.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Minutos y SMS Nacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan: 35 GB'
              },{
                text:'Gigas del plan con Full Claro: 52.5 GB'
              },{
                text:'Minutos Internacionales: 400'
              },{
                text:'Redes sociales ilimitadadas (Instagram, Facebook, Messenger, Waze, Whatsapp, X)'
              }
            ],       
            subtext:'al mes',     
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'65 GB',
          price:'S/ 55.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Minutos y SMS Nacionales + Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan: 65 GB'
              },{
                text:'Gigas del plan con Full Claro: 97.5 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              },{
                text:'Redes sociales ilimitadadas (Instagram, Facebook, Messenger, Waze, Whatsapp, X)'
              }
            ],        
            subtext:'al mes',            
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'95 GB',
          price:'S/ 69.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad : 95 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 142.5 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],        
            subtext:'al mes',       
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'105 GB',
          price:'S/ 79.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 105 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 157.5 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],         
            subtext:'al mes',    
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'130 GB',
          price:'S/ 95.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 130 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 195 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],         
            subtext:'al mes',   
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'140 GB',
          price:'S/ 109.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 140 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 210 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],     
            subtext:'al mes',      
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'160 GB',
          price:'S/ 159.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 160 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 240 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],    
            subtext:'al mes',          
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'180 GB',
          price:'S/ 189.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 180 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 270 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],    
            subtext:'al mes',       
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES MAX',
          megas:'190 GB',
          price:'S/ 289.90',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos, SMS y Llamadas Internacionales</span>
          </div>,
            conditions:[
              {
                text:'Gigas del plan en alta velocidad: 190 GB'
              },{
                text:'Gigas del plan en alta velocidad con Full Claro: 285 GB'
              },{
                text:'Llamadas y SMS Ilimitados'
              }
            ],    
            subtext:'al mes',         
          onClick: viewModal
        }
      ],

      [ /* PLANES MAX PLAY CON NETFLIX  */
        {
          shadow:true,
          plan:'Plan Max Play 95 con Netflix',
          megas:'70 GB',
          price:'S/ 95',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos Nacionales y SMS</span>
          </div>,
          conditions:[
            {
              text:'GB en alta velocidad: 70 GB'
            },{
              text:'GB en alta velocidad con Full Claro: 105 GB'
            },{
              text:'Cobertura internacional: 300 minutos, 3GB DE internet y 300 SMS'
            },{
              text:'Netflix 2 pantallas HD'
            }
          ],        
          subtext:'al mes',         
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'Plan Max Play 115 con Netflix',
          megas:'100 GB',
          price:'S/ 115',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos Nacionales y SMS</span>
          </div>,
          conditions:[
            {
              text:'GB en alta velocidad: 100 GB'
            },{
              text:'GB en alta velocidad con Full Claro: 150 GB'
            },{
              text:'Cobertura internacional: 350 minutos, 3.5GB DE internet y 350 SMS'
            },{
              text:'Netflix 4 Pantallas HD, Ultra HD o 4K'
            }
          ],          
          subtext:'al mes',    
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'Plan Max Play 145 con Netflix',
          megas:'145 GB',
          price:'S/ 145',
          descuento:null,
          fullClaro:true,
          subtext3:'Por solo',
          children:<div>
            <span className='uppercase'>ILIMITADO <br /></span> <span className='font-normal'>Gigas, Minutos Nacionales y SMS</span>
          </div>,
          conditions:[
            {
              text:'GB en alta velocidad: 145 GB'
            },{
              text:'GB en alta velocidad con Full Claro: 217.5 GB'
            },{
              text:'Cobertura internacional: 450 minutos, 10GB DE internet y 450 SMS'
            },{
              text:'Netflix 4 Pantallas HD, Ultra HD o 4K'
            }
          ],             
          subtext:'al mes',   
          onClick: viewModal
        },
      ],     

      [ /* INTERNET + TELEVISIÓN  */
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'IPHONE 14',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${iphone14.src}`,
          onClick: viewModal
          
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'SAMSUNG GALAXY S23',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[22px]',
          phone:`${s23.src}`,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'XIAOMI NOTE 12',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${note12.src}`,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'MOTOROLA G23',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${motog23.src}`,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'OPPO RENO 7',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${reno7.src}`,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'OPPO A78',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${appoa78.src}`,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'PLANES + EQUIPO',
          megas:'MOTOROLA E30',
          price:'',
          descuento:null,
          mobile:true,
          subtext3:'A partir de',
          subtext:'Planes MAX Ilimitado S/ 69.90',   
          text:'text-[27px]',
          phone:`${motoe30.src}`,
          onClick: viewModal
        }
      ]
    ]
  ];

  const [activeModal, setActiveModal] = useState(false);

  const [selectedIndexSections, setSelectedIndexSections] = useState<number>(0);
  const [selectedIndexSubSections, setSelectedIndexSubSections] = useState<number>(0);
  const [subSections, setSubSections] = useState<string[]>(SUB_SECTIONS[0]);
  const [slideCountCards, setSlideCountCards] = useState<number>(ARRAYS_CHILDRENS[0][0].length);
  const [slideCards, setSlideCards] = useState<number[]>(Array.from(Array(slideCountCards).keys()));
  const [childrens, setChildrens] = useState<JSX.Element[]>(getChildrens(ARRAYS_CHILDRENS[0][0]));
  const [includeInsternet, setIncludeInsternet] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      const url = new URLSearchParams(window.location.search);

      const tSource = url.get('T-source');

      if (tSource) {
        setTSource(tSource);
      }
    }
  },[]);

  useEffect(() => {
    if (nombreDelDominio.includes("clarofertas")) {
      if (tSource){
        switch(tSource){
          case 'ext':
            setNumberCall(() => '(01) 6806465');
            break;

          case 'ext_1':
            setNumberCall(() => '(01) 6806268');
            break;

          case 'ext_2':
            setNumberCall(() => '(01) 6806466');
            break;

          default:
            setNumberCall(() => '(01) 6806465');
            break;
        }
      }else{
        setNumberCall(() => '(01) 6806465');
      }
      
    }else{
      if (tSource) {
        switch (tSource) {
          case '01clarohogar':
            setNumberCall(() => '(01) 7028541');
            break;
  
          case '02clarointernet':
            setNumberCall(() => '(01) 7028545');
            break;
  
          case '05claroperu':
            setNumberCall(() => '(01) 7017612');
            break;
  
          case '06claromovil':
            setNumberCall(() => '(01) 6805992');
            break;

          case 'rrss':
            setNumberCall(() => '(01) 5009717');
            break;

          default:
            setNumberCall(() => '(01) 6805992');
            break;
        }
      }else{
        setNumberCall(() => '(01) 6805992');
      }
    }
  },[tSource]);

  useEffect(() => {
    const ch = getChildrens(ARRAYS_CHILDRENS[selectedIndexSections][0]);

    setSelectedIndexSubSections(() => 0)
    setSubSections(() => (SUB_SECTIONS[selectedIndexSections]));
    setSlideCountCards(ARRAYS_CHILDRENS[selectedIndexSections][0].length);
    setChildrens(() => ch);
  },[selectedIndexSections]);

  useEffect(() => {
    const name = SUB_SECTIONS[selectedIndexSections][selectedIndexSubSections];

    name==="PLANES MAX" ? setIncludeInsternet(true) : setIncludeInsternet(false);
    const ch = getChildrens(ARRAYS_CHILDRENS[selectedIndexSections][selectedIndexSubSections]);

    setSlideCountCards(ARRAYS_CHILDRENS[selectedIndexSections][selectedIndexSubSections].length);
    setChildrens(() => ch);
  },[selectedIndexSubSections]);

  useEffect(() => {
    setSlideCards(() =>(Array.from(Array(slideCountCards).keys())));
  },[slideCountCards]);

  return (
    <>
      <div
        className="
          block
          w-[95%]
          mx-auto
          my-8 
        "
      >
        <Sections
          selectedIndex={ selectedIndexSections }
          setSelectedIndex={ setSelectedIndexSections }
        />
        <SubSections
          titles={ subSections }
          selectedIndex={ selectedIndexSubSections }
          setSelectedIndex={ setSelectedIndexSubSections }
        />
      </div>
      {
        includeInsternet ?
        <div
          className='
            w-full
            flex
            items-start
            justify-center
            font-semibold
          '
        >Porta o adquiere dos o más líneas desde el Plan MAX 55.90 y obtén 50 % de descuento por 12 meses en todas las líneas adicionales con el menor cargo fijo.
        Válido para clientes nuevos y actuales</div> : <></> }
      <div
        className="
          my-4
          w-3/4 m-auto
          max-lg:my-1

        "
      >
        <Carousel
          classNameSlide="embla__slide__trhee "
          slides={ slideCards }
          options={ OPTIONS_CARDS }
          haveButtons={ true }
          haveDots={ false }
          interval={ 0 }
          childrens={ childrens }
        />
      </div>

      <Modal
        activeModal={ activeModal }
        setActiveModal={ closeModal }
        background="#fff"
      >
        <Form
          className="bg-[#ee122c]"
          textLabel=""
          classNameButton="bg-[#0fbddf] text-white rounded-full"
        >
          <span className="text-2xl text-white text-center font-bold mb-2">¡Buena Elección!</span>
          <span className="text-sm text-white text-center">Llámanos gratis al</span>
          <a href={ `tel:${ numberCall }` } className="text-3xl text-white text-center font-bold mb-4">{ numberCall }</a>
          <span className="text-sm text-white text-center mb-8">O, si lo prefieres déjanos tus datos y te llamaremos inmediatamente...</span>
        </Form>
      </Modal>

    </>
  )
}

export default BodyCardsMobil
