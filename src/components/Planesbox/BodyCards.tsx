/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from 'react';
import Sections from './Sections';
import SubSections from './SubSections';
import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { CardsPlan } from './CardsPlan';
import type { EmblaOptionsType } from 'embla-carousel';



const SUB_SECTIONS: Array<Array<string>> = [
  [
    'INTERNET HFC / FTTH',
    'INTERNET + TELEFONÍA',
    'INTERNET + TELEVISIÓN',
    'INTERNET + TELEFONÍA + TV',
    'CLARO HOGAR + NETFLIX',
    'INTERNET FIJO INALAMBRICO'
  ]
];

const OPTIONS_CARDS: EmblaOptionsType = {
  loop: false,
  slidesToScroll: 1,
  startIndex: 0,
};

const BodyCards = () => {
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
      conditions,
      subtext,
      subtext2,
      mobile,
      subtext3,
      small,
      shadow
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
        plan:'INTERNET HFC / FTTH',
        megas:'150 Mbps',
        price:'S/ 65',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 150 Mbps'
          },{
            text:'Velocidad máxima con Full Claro: 300 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal,
      },{
        shadow:true,
        plan:'INTERNET HFC / FTTH',
        megas:'300 Mbps',
        price:'S/ 75',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 300 Mbps'
          },{
            text:'Velocidad máxima con Full Claro: 600 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal,
      },{
        shadow:true,
        plan:'INTERNET HFC / FTTH',
        megas:'400 Mbps',
        price:'S/ 85',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 400 Mbps'
          },{
            text:'Velocidad máxima con Full Claro: 800 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal
      },{
        shadow:true,
        plan:'INTERNET HFC / FTTH',
        megas:'600 Mbps',
        price:'S/ 100',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 600 Mbps'
          },{
            text:'Velocidad máxima con Full Claro: 1000 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal
      },{
        shadow:true,
        plan:'INTERNET HFC / FTTH',
        megas:'1000 Mbps',
        price:'S/ 145',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 1000 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal
      },{
        shadow:true,
        plan:'INTERNET HFC / FTTH',
        megas:'1500 Mbps',
        price:'S/ 200',
        descuento:null,
        fullClaro:null,
        subtext3:'Por solo',
        conditions:[
          {
            text:'Velocidad máxima: 1500 Mbps'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
        subtext:'al mes',
        small:true,
        onClick: viewModal
        
      }
      ],
      [ /* INTERNET + TELEFONÍA  */
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'150 Mbps',
          price:'S/ 66',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
          {
            text:'Velocidad máxima: 150 Mbps'
          },{
            text:'Velocidad máxima con Full Claro: 300 Mbps'
          },{
            text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
          },{
            text:'Suscripción gratuita a ClaroVideo'
          }
        ],
          subtext:'al mes',
          small:true,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'300 Mbps',
          price:'S/ 76',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 300 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 600 Mbps'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],
          subtext:'al mes',
          small:true,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'400 Mbps',
          price:'S/ 86',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 400 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 800 Mbps'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],
          subtext:'al mes',
          small:true,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'600 Mbps',
          price:'S/ 101',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 600 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 1000 Mbps'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],     
          subtext:'al mes',
          small:true,     
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'1000 Mbps',
          price:'S/ 146',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1000 Mbps'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],    
          subtext:'al mes',    
          small:true,  
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA',
          megas:'1500 Mbps',
          price:'S/ 201',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1000 Mbps'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],      
          subtext:'al mes',  
          small:true,    
          onClick: viewModal
        }
      ],      
      [ /* INTERNET + TELEVISIÓN  */
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'150 Mbps',
          price:'S/ 125',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 150 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 300 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],          
          subtext:'al mes',     
          small:true,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'300 Mbps',
          price:'S/ 135',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 300 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 600 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],       
          subtext:'al mes',   
          small:true,   
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'400 Mbps',
          price:'S/ 145',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 400 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 800 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],      
          subtext:'al mes',    
          small:true,     
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'600 Mbps',
          price:'S/ 160',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 600 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 1000 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],    
          subtext:'al mes',       
          small:true,  
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'1000 Mbps',
          price:'S/ 205',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1000 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],     
          subtext:'al mes',      
          small:true,
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEVISIÓN',
          megas:'1500 Mbps',
          price:'S/ 260',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1500 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],      
          subtext:'al mes',     
          small:true,
          onClick: viewModal
        }
      ],      
      [ /* INTERNET + TELEFONÍA + TV  */
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'150 Mbps',
          price:'S/ 131',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 150 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 300 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],           
          subtext:'al mes', 
          onClick: viewModal
        },      
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'300 Mbps',
          price:'S/ 141',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 300 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 600 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],       
          subtext:'al mes',     
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'400 Mbps',
          price:'S/ 146',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 400 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 800 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],          
          subtext:'al mes',  
          onClick: viewModal
        },      
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'600 Mbps',
          price:'S/ 161',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 600 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 1000 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],         
          subtext:'al mes',   
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'1000 Mbps',
          price:'S/ 206',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1000 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],         
          subtext:'al mes',   
          onClick: viewModal
        },      
        {
          shadow:true,
          plan:'INTERNET + TELEFONÍA + TV',
          megas:'1500 Mbps',
          price:'S/ 261',
          descuento:null,
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 1500 Mbps'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 1000 MINUTOS a otras operadoras'
            },{
              text:'Suscripción gratuita a ClaroVideo'
            }
          ],         
          subtext:'al mes',   
          onClick: viewModal
        }
      ],
      [ /* CLARO HOGAR + NETFLIX  */
        {
          shadow:true,
          plan:'CLARO HOGAR + NETFLIX',
          megas:'100 Mbps',
          price:'S/ 75.10',
          descuento:true,
          promocion:'-S/34.90',
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 100 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 200 Mbps'
            },{
              text:'Incluye NETFLIX Estándar con 2 Pantallas HD'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 80 MINUTOS a nivel nacional'
            }
          ],         
          subtext:'Precio por 3 Meses',   
          subtext2:'Precio Regular S/ 110',
          onClick: viewModal
        },      
        {
          shadow:true,
          plan:'CLARO HOGAR + NETFLIX',
          megas:'180 Mbps',
          price:'S/ 95.10',
          descuento:true,
          promocion:'-S/34.90',
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 180 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 360 Mbps'
            },{
              text:'Incluye NETFLIX Estándar con 2 Pantallas HD'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 80 MINUTOS a nivel nacional'
            }
          ],     
          subtext:'Precio por 3 Meses',   
          subtext2:'Precio Regular S/ 130',      
          onClick: viewModal
        },
        {
          shadow:true,
          plan:'CLARO HOGAR + NETFLIX',
          megas:'180 Mbps',
          price:'S/ 180.10',
          descuento:true,
          promocion:'-S/34.90',
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 180 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 360 Mbps'
            },{
              text:'Incluye NETFLIX Estándar con 2 Pantallas HD'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 100 MINUTOS a nivel nacional'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            }
          ],     
          subtext:'Precio por 3 Meses',   
          subtext2:'Precio Regular S/ 215',            
          onClick: viewModal
        },      
        {
          shadow:true,
          plan:'CLARO HOGAR + NETFLIX',
          megas:'280 Mbps',
          price:'S/ 220.10',
          descuento:true,
          promocion:'-S/34.90',
          fullClaro:null,
          subtext3:'Por solo',
          conditions:[
            {
              text:'Velocidad máxima: 280 Mbps'
            },{
              text:'Velocidad máxima con Full Claro: 560 Mbps'
            },{
              text:'Incluye NETFLIX Estándar con 2 Pantallas HD'
            },{
              text:'MINUTOS ILIMITADOS a fijos y móviles de Claro + 100 MINUTOS a nivel nacional'
            },{
              text:'Incluye Claro TV Avanzado con 111 canales en HD.'
            }
          ],     
          subtext:'Precio por 3 Meses',   
          subtext2:'Precio Regular S/ 255',        
          onClick: viewModal
        },
      ],      
      [ /* INTERNET FIJO INALAMBRICO  */
      {
        shadow:null
      },{
        shadow:true,
        plan:'INTERNET FIJO INALAMBRICO',
        megas:'100 GB',
        price:'S/ 42.50',
        descuento:true,
        promocion:'-50%',
        
        fullClaro:null,
        subtext3:'Por solo',
          conditions:[
            {
              text:'Gigas en Alta Velocidad: 100 GB'
            },{
              text:'Una vez consumidos los 100 GB, podrás adquirir un paquete adicional para seguir navegando.'
            },{
              text:'Paquete IFI 25GB precio: S/5.00'
            },{
              text:'Modelo de Equipo ZTE MF286'
            },{
              text:'Pago Único del Equipo (Incluye chip) S/399'
            },{
              text:'Conéctalo, hasta en 5 dispositivos en simultáneo'
            }
          ],          
          subtext:'Precio por 2 Meses',   
          subtext2:'Precio Regular S/ 85',   
        onClick: viewModal
      }
      ],
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

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

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
  
          case '03clarotv':
            setNumberCall(() => '(01) 6806303');
            break;
  
          case '05claroperu':
            setNumberCall(() => '(01) 7017610');
            break;
  
          case '06claromovil':
            setNumberCall(() => '(01) 6805992');
            break;

          case 'rrss':
            setNumberCall(() => '(01) 5009717');
            break;

          default:
            setNumberCall(() => '(01) 6805993');
            break;
        }
      }else{
        setNumberCall(() => '(01) 6805993');
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

    name.includes("INTERNET ") ? setIncludeInsternet(true) : setIncludeInsternet(false);

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
      <div
        className="
          my-4
          w-3/4 m-auto
          max-lg:my-1
        "
      >
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
        >¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional (Sujeto a evaluación crediticia)</div> : <></> }
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

export default BodyCards
