// import type { EmblaOptionsType } from "embla-carousel-react";
import type { CSSProperties } from "react";

import PlanesMax from "../../../public/img/maxplay.webp";
import PlanesNetflix from "../../../public/img/maxnet.webp";
import SocialMedia1 from "../../../public/img/social-media-1.webp";
import SocialMedia2 from "../../../public/img/social-media-2.webp";
import MotorolaG23 from "../../../public/img/motorola-g23.webp";
import XiaomiNote12 from "../../../public/img/xiaomi-note12.webp";
import Iphone14 from "../../../public/img/iphone-14.webp";
import SamsungGalaxyS23 from "../../../public/img/samsung-galaxy-s23.webp";
import OppoReno7 from "../../../public/img/oppo-reno7.webp";
import OppoA78 from "../../../public/img/oppo-a78.webp";
import MotorolaE30 from "../../../public/img/motorola-e30.webp";
import Carousel from "../Carousel/Carousel";
import type { ItemsArray } from "../../interfaces/Items.props";
import Form from "../Form/Form";
import BodyCardsMobil from "../Planesbox/BodyCardsMobil";

// const OPTIONS: EmblaOptionsType = {
const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 5;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {
  height: '640px'
};
const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095
};

const imagesMobile = [
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-02-MOBBILE.webp?alt=media&token=94648af8-ff47-4a7d-8a93-ea22ec70ea2d',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/moviles-banner-mobile-3.webp?alt=media&token=24113125-2567-4dda-8995-8b5ea5e4aff1',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-01-MOBBILE.webp?alt=media&token=16fbe831-4e37-43e3-b14d-986f52165b3d',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-11-MOBBILE.webp?alt=media&token=76741edf-34d1-4f4f-83b1-43509c19d2c5',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-01-MOBBILE.jpg?alt=media&token=69cf5e2c-a30d-49a8-86fa-163206c25363'
];

const imagesDesktop= [
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-02.webp?alt=media&token=9ead0284-44d9-4aeb-b837-77cae7c7d237',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/moviles-banner-desktop-3.webp?alt=media&token=20f29b2d-bef0-4d52-9680-bfe494140bba',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-01.webp?alt=media&token=24e3e44a-fe20-4521-a97d-eb3463e8599d',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-11.webp?alt=media&token=7eb9ab36-27bf-4861-a4de-13531a52ca98',
  'https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/IMG-BANNER-01.jpg?alt=media&token=886ed6cb-0617-4b1a-a25b-a629f45037a8'
];




export default function HomeMovil() {
  return (
    <section className="relative flex flex-col items-center gap-2 ">
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
        className="bg-white lg:absolute lg:right-20 xl:top-10"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white rounded-full"
      >
        <span className=" text-[#ee122c] text-center font-semibold mb-2 xl:text-base xl:text-sm">DESCUBRE NUESTROS SERVICIOS MÓVILES</span>
        <h2 className="text-lg text-[#ee122c] text-center font-extrabold mb-4 xl:text-[17px] xl:font-bold">¡Consulta por la promoción en<br/>PORTABILIDAD que tenemos para ti!</h2>
      </Form>
      <h1 className="text-3xl text-center text-[#ee122c] font-bold uppercase my-8">conoce nuestros planes moviles</h1>
      <h3 className="text-sm text-center text-gray-500 font-bold">Todas las Ofertas y Promociones vigentes hasta el 15/04/2024</h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <i className="fa-solid fa-mobile-screen-button text-3xl text-[#ee1222]"></i>
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <BodyCardsMobil
      />
    </section>
  )
}
