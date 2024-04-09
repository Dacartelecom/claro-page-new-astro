// import type { EmblaOptionsType } from "embla-carousel-react";
import type { CSSProperties } from "react";
import InternetTelefonia from "../../../public/img/internet-telefonia.webp";
import InternetTelevision from "../../../public/img/internet-television.webp";
import InternetTelefoniaTv from "../../../public/img/internet-telefonia-tv.webp";
import InternetHfcFtth from "../../../public/img/internet-hfc-ftth.webp"
import Internet from "../../../public/img/internet.webp";
import LogoNetflix from "../../../public/img/logo-netflix.webp";
import Carousel from "../Carousel/Carousel";
import Form from "../Form/Form";
import type { ItemsArray } from "../../interfaces/Items.props";
import BodyCards from "../Planesbox/BodyCards";

// const OPTIONS: EmblaOptionsType = {
const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 6;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {};
const STYLES_DESKTOP: CSSProperties = {};


const imagesMobile = [
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-08B-MOBBILE.webp?alt=media&token=8a77b221-f9ef-4239-be53-251eb78947e5',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-07B-MOBBILE.webp?alt=media&token=13d3b590-3c38-40e5-a703-fe5d533b883a',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-06B-MOBBILE.webp?alt=media&token=9242a0f0-878e-41f9-8b29-1eb300c058d2',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-09B-MOBBILE.webp?alt=media&token=da2bcf2c-112c-4a6c-acae-8b0bbc2055d5',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-13B-MOBBILE.webp?alt=media&token=7344b15a-477a-4b25-be43-4a997ea6f228',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-10-MOBBILE.webp?alt=media&token=8b166c4d-4af7-42cf-862f-5e6f55834e68',

];

const imagesDesktop = [
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-08B.webp?alt=media&token=4616968e-4fcb-43ce-91f8-8f25ce4168c6',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-07B.webp?alt=media&token=8d587110-4164-49df-93fb-802139fb07d9',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-06B.webp?alt=media&token=060c8d29-fe19-4198-804f-249b2eaf2033',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-09B.webp?alt=media&token=652f8bb6-3296-4e62-9727-1cc29367c0c4',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-13B.webp?alt=media&token=a2ce09db-a9bc-4dc7-bd6d-b85127cbddd4',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-10.webp?alt=media&token=43c80bb7-4bb6-4e15-a1ef-97cf3fa0d217',
];

const ItemsPlanes: ItemsArray = [
  {
    title: 'internet hfc / ftth',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio regular',
        price: '65',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 150 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '150Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '300Mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        dscto: '',
        promo: 'Precio regular',
        price: '75',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 250 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '250Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '500Mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        dscto: '',
        promo: 'Precio regular',
        price: '85',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 400 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '400Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '800Mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio regular',
        price: '100',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 600 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '600Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000Mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio',
        price: '145',
        plan: '',
        classNamePlan: 'text-xl',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 1000 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000Mbps'
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetHfcFtth.src,
        alt: "Internet hfc/ftth",
        width: 45,
        height: 29,
        promo: 'Precio',
        price: '200',
        plan: '',
        classNamePlan: 'text-xl',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">1play 1500 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1500Mbps'
          },
        ]
      },
    ]
  },
  {
    title: 'internet + telefonía',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '70',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 150 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '150Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '300Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '80',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 250 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '250Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '500Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '',
        promo: 'Precio Regular',
        price: '90',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 400 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '400Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '800Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '105',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 600 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '600Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '150',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 1000 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefonia.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '205',
        regular: '',
        plan: '',
        classNamePlan: 'text-xl',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 1500 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1500Mbps'
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
    ]
  },
  {
    title: 'internet + televisión',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '125',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 150 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '150Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '300Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '135',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 250 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '250Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '500Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        dscto: '',
        promo: 'Precio Regular',
        price: '145',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 400 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '400Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '800Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '160',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 600 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '600Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '205',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 1000 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelevision.src,
        alt: "Internet + Televisión",
        width: 200,
        height: 74,
        promo: 'Precio Regular',
        price: '260',
        regular: '',
        plan: '',
        classNamePlan: 'text-xl',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">2play 1500 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1500Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
    ]
  },
  {
    title: 'internet + telefonía + tv',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio Regular',
        price: '135',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 150 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '150Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '300Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio Regular',
        price: '145',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 250 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '250Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '500Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio Regular',
        price: '150',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 400 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '400Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '800Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio Regular',
        price: '165',
        regular: '',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 600 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '600Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        promo: 'Precio Regular',
        price: '210',
        plan: '',
        classNamePlan: 'text-base',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 1000 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
        ]
      },
      {
        className: 'lg:basis-1/3',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 290,
        height: 74,
        dscto: '',
        promo: 'Precio Regular',
        price: '265',
        plan: '',
        classNamePlan: 'text-xl',
        extraPlan: <div className="flex flex-col items-center justify-center">
          <span className="text-[#ee122c] text-3xl font-bold uppercase">3play 1500 Mbps</span>
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1500Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional',
          },
        ]
      },
    ]
  },
  {
    title: 'claro hogar + netflix',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    ifGrid: true,
    gridCols: 2,
    planes: [
      {
        className: 'lg:basis-1/2',
        src: InternetTelefonia.src,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '75.10',
        regular: 'Precio Regular S/110',
        plan: '2play 100 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ `${LogoNetflix.src}` }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefonia.src,
        alt: "Internet + Telefonía",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '95.10',
        regular: 'Precio Regular S/130',
        plan: '2play 180 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ `${LogoNetflix.src}` }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '180.10',
        regular: 'Precio Regular S/215',
        plan: '3play 180 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ `${LogoNetflix.src}` }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        className: 'lg:basis-1/2',
        src: InternetTelefoniaTv.src,
        alt: "Internet + Telefonía + TV",
        width: 200,
        height: 74,
        dscto: '-S/34.90',
        promo: 'Precio por 3 Meses',
        price: '220.10',
        regular: 'Precio Regular S/255',
        plan: '3play 280 Mbps +',
        classNamePlan: 'text-xl',
        extraPlan: <div className="w-40">
          <img
            src={ `${LogoNetflix.src}` }
            alt="Logo Netflix"
            width={ 2226 }
            height={ 678 }
            className="w-full h-auto object-contain"
          />
        </div>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '280 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '560 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
    ]
  },
  {
    title: 'internet fijo inalambrico',
    message: {
      strong: '',
      text: ''
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: Internet.src,
        alt: "Internet",
        width: 88,
        height: 74,
        dscto: '-50%',
        promo: 'Precio por 2 Meses',
        price: '42.50',
        regular: 'Precio Regular S/85',
        plan: 'internet ifi-100gb',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Gigas en Alta Velocidad',
            strong: '100GB'
          },
          {
            description: 'Una vez consumidos los 100 GB, podrás adquirir un paquete adicional para seguir navegando.',
          },
          {
            description: 'Paquete IFI 25GB',
            strong: 'Precio S/5.00'
          },
          {
            description: 'Modelo Equipo',
            strong: 'ZTE MF286'
          },
          {
            description: 'Pago Único del Equipo (Incluye chip)',
            strong: 'S/ 399'
          },
          {
            description: 'Conéctalo, hasta en 5 dispositivos en simultáneo',
          },
          {
            description: 'Incluye',
            strong: 'Claroclub'
          },
          {
            description: 'Beneficios del Equipo',
            strong: <ul>
              <li>No Necesita Instalación</li>
              <li>Incluye WIFI</li>
              <li>Tecnología Inalámbrica</li>
              <li>Equipo de Calidad</li>
              <li>Servicio Postventa</li>
            </ul>
          },
        ]
      },
    ]
  },
];

export default function HomeFija() {
  return (
    <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesMobile }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_MOBILE }
        className="mobile"
        interval={ 6000 }
      />
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesDesktop }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_DESKTOP }
        className="desktop"
        interval={ 6000 }
      />
      <Form
        className="bg-white lg:absolute lg:right-20 xl:top-20"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white rounded-full"
      >
        <span className="text-sm text-[#ee122c] text-center font-semibold mb-2 xl:text-base">Seguimos Conectando Hogares</span>
        <h2 className="text-lg text-[#ee122c] text-center font-extrabold mb-4 xl:text-xl xl:font-bold">Contáctanos y conoce nuestros<br/>descuentos exclusivos</h2>
      </Form>
      <h1 className="text-3xl text-center text-[#ee122c] font-bold uppercase my-8">conoce nuestros planes hogar</h1>
      <h3 className="text-sm text-center text-gray-500 font-bold">Todas las Ofertas y Promociones vigentes hasta el 31/03/2024 </h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <i className="fa-solid fa-house text-3xl text-[#ee1222]"></i>
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <BodyCards/>
    </section>
  )
}
