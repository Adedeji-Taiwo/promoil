import { WiizzkidContext, WiizzkidContextType } from './context/wiizzkid.context';
import{useContext, useEffect} from "react";
import { Header, Challenge, Footer, Team, Testimonial } from './components';
import AOS  from 'aos';
import Overlay from './components/Overlay';
import ModalVideo from 'react-modal-video';
import { promoilVideo } from './assets/header/index';




const App = () => {
  const { openVideo, setOpenVideo } = useContext(WiizzkidContext) as WiizzkidContextType;
 
  useEffect(() => {
    AOS.init();
  }, []);

 

  return (
   <div className="antialiased"> 
    <Overlay loading={openVideo} setOpenVideo={setOpenVideo} />
    <ModalVideo allowFullScreen channel='custom' isOpen={openVideo} url={promoilVideo} onClose={() => setOpenVideo(false)} />
    <Header />
    <Team />
    <Testimonial />
    <Challenge />
    <Footer />
   </div>
  )
}

export default App
