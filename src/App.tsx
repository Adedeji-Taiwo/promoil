import { WiizzkidContext, WiizzkidContextType } from './context/wiizzkid.context';
import{useContext, useEffect} from "react";
import { Footer } from './components';
import AOS  from 'aos';
import Overlay from './components/Overlay';
import ModalVideo from 'react-modal-video';
import { promoilVideo } from './assets/header/index';
import promoil_ad from './assets/ads/promoil_ad.mp4'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Advert from './pages/Advert';



const App = () => {
  const { openVideo, setOpenVideo, setOpenAdVideo, openAdVideo } = useContext(WiizzkidContext) as WiizzkidContextType;
 
  useEffect(() => {
    AOS.init();
  }, []);

 

  return (
   <div className="antialiased"> 
    <Overlay loading={openVideo} setOpenVideo={setOpenVideo} />
    <Overlay loading={openAdVideo} setOpenVideo={setOpenAdVideo} />
    <ModalVideo allowFullScreen channel='custom' isOpen={openVideo} url={promoilVideo} onClose={() => setOpenVideo(false)} />
    <ModalVideo allowFullScreen channel='custom' isOpen={openAdVideo} url={promoil_ad} onClose={() => setOpenAdVideo(false)} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Advert" element={<Advert />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
