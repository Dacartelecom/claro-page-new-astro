import axios from "axios";
import type { FormProps } from "../../interfaces/Form.props";
import  { type ChangeEvent, type FC, useState, useEffect } from "react";
const Form: FC<FormProps> = ({
  className,
  textLabel,
  classNameButton,
  children,
}) => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
  const [response, setResponse] = useState<null | string>(null);
  const [inputState, setInputState] = useState<string>('');
  const [TSource] = useState(params.get('T-source'));
  const [Gclid] = useState(params.get('gclid'));
  const [actveUrl,setActiveUrl]=useState<boolean>(false)
  const [url,setUrl]=useState<string>('');
  const [param, setParam] = useState<string>('');

  useEffect(() => {
      if (TSource) {
        setParam(`?T-source=${ TSource }`);
      } else {
        setParam('');
      }
    },[TSource]);

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((_prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
    setLength(value.length);
  };

  const interval = (error:string) => {
    setResponse(error)
    setTimeout(() => {
      setResponse('')
    }, 3000);
  }
  
  const callMeNumber = async (number: string) => {
    try {
      const res = await axios.post('https://develzpbx.site/api/call-me',{
        number
      },{
        headers: {
          "X-URL-Complete": window.location.href
        }
      });
      console.log(res)
    } catch (error) {
      console.log(error)
    };
  };

  useEffect(() => {
      if(pathname.includes('planes-moviles')){
          setUrl('/planes-moviles')
      }else{
          setUrl('')
      }
  }, [url])

  const sendNumber = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://ws-dacar-ica.octopus-latam.com/?";
    const data = new URLSearchParams();
    let service = 'PeruHfcCallme'

    callMeNumber(inputState);

    if (nombreDelDominio.includes("clarofertas")) {
      if(TSource === 'ext'){
        data.append("service", "PeruHfcResi");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc2"
      } else if(TSource === 'ext_1'){
        data.append("service", "PeruMovilRsCallme");
        data.append("username", "dacar");
        data.append("password", "StzsK46vs0a4nCJU55wD");
        service = "PeruHfc3"
      } else if(TSource === 'ext_2'){
        data.append("service", "PeruMovilResi");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc5"
      } else if(TSource === 'ext_3'){
        data.append("service", "PeruHfcRsCallme");
        data.append("username", "dacar");
        data.append("password", "StzsK46vs0a4nCJU55wD");
        service = "PeruMovilCallme"
      } else {
        data.append("service", "PeruHfcResi");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
      }
      
    }else{
  
      if(TSource === '01clarohogar'){
        data.append("service", "PeruHfc1");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc1"
      } else if(TSource === '02clarointernet'){
        data.append("service", "PeruHfc2");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc2"
      } else if(TSource === '03clarotv'){
        data.append("service", "PeruHfc3");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc3"
      } else if(TSource === '05claroperu'){
        data.append("service", "PeruHfc5");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfc5"
      } else if(TSource === '06claromovil'){
        data.append("service", "PeruMovilCallme");
        data.append("username", "dacar");
        data.append("password", "StzsK46vs0a4nCJU55wD");
        service = "PeruMovilCallme"
      }else if(TSource === 'rrss'){
        data.append("service", "PeruHogarRrss");
        data.append("username", "dacar");
        data.append("password", "O8Sw36BwGurYZcFU9vsa");
        service = "PeruHfcRsCallme";
      } else if(pathname.includes('planes-moviles')){
        data.append("service", "PeruMovilCallme");
        data.append("username", "dacar");
        data.append("password", "StzsK46vs0a4nCJU55wD");
        service = "PeruMovilCallme"
      } else {
        data.append("service", "PeruHfcCallme");
        data.append("username", "dacar");
        data.append("password", "StzsK46vs0a4nCJU55wD");
      }
    
    }

    data.append("telephone", inputState);

    if (TSource) {
      data.append("tsource", TSource);
    } else {
      data.append("tsource", "");
    }

    if (Gclid) {
      data.append("gclid", Gclid);
    } else {
      data.append("gclid", "");
    }

    data.append("ip", "127.0.0.1");

    const lead = url + data.toString();

    fetch(lead)
    .then((res) => res.json())
    .catch((error) => console.log(error))
    .then((response) => {
      console.log(response);
      console.log(lead);
      if (response.status === 'ERROR') {
        interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
        setLoading(false);
      } else {
        interval('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
        setLoading(false);
      }
      setInputState(() => (''));
      console.log(service);
    });
  }
  const handleRedirect = () => {
    if(TSource === 'rrss'){
    window.location.href = `/gracias/${ param }`;
    }else{
      null
    }
  };

  return (
    <form
      className={`flex flex-col p-4 m-4 shadow-3xl rounded-3xl max-w-[350px] ${ className }`}
      onSubmit={sendNumber}
    >
      { children }
      <label
        className="text-black text-sm font-bold mb-2"
        htmlFor="number"
      >{ textLabel }</label>
      <input
        type="number"
        id="number-form"
        className="border border-black p-1 px-3 text-sm rounded-xl"
        placeholder="987654321"
        pattern="[0-9]{1,9}"
        maxLength={9}
        value={ inputState }
        onChange={ changeNumber }
      />
      <label
        className="my-6 font-bold text-sm"
        htmlFor="number"
      >*Ingrese su número sin anteponer el (51)</label>
      <div className="flex items-center justify-center">
        <button
          onClick={handleRedirect}
          className={`relative font-extrabold text-lg py-2 px-6 uppercase flex items-center justify-center gap-2 ${ length === 9 ? 'opacity-100' : 'opacity-50' } ${ loading ? 'opacity-50' : '' } ${ classNameButton }`}
          type='submit'
          disabled={length === 9? false : true }
        >
          solicitar llamada
          { loading && <span className="loader"></span> }
        </button>
      </div>
      { response && <span className="text-[#46b450] text-sm text-center font-bold mt-4 w-[300px]">{ response }</span> }
    </form>
  )
}

export default Form