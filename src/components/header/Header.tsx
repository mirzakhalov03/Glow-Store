import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';
import nyxLogo from '../../images/NYX-logo.png';
import benefit from '../../images/benefit-logo.png';
import clinique from '../../images/clinique-logo.png';
import colorPop from '../../images/Colourpop-logo.png';
import loreal from '../../images/loreal-logo.png';
import maybeline from '../../images/Maybelline-logo.png';
import dior from '../../images/dior-logo.png';
import elf from '../../images/elf-logo.png';
import { Carousel } from 'antd';
import './header.scss';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '3xl',
};

const Header = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="w-full headerTextMob mt-4">
          <h2 className="text-[#ba5e5e] headerMob text-center text-[45px] tracking-wide font-[Magilio]">
            <span className="lime-glowing-text text-[#BEEB00]">Glow</span> Up your Beauty! Illuminate{' '}
            <span className="pink-glowing-text text-[#fbaef2]">Your Style!</span>
          </h2>
        </div>
        <div className="banner w-full min-h-[200px] h-[100%]">
          <Carousel arrows autoplay={true} fade={true} autoplaySpeed={2500} infinite={true}>
            <div className="rounded-3xl">
              <div className="carouselImg rounded-3xl h-[600px]" style={{ ...contentStyle, backgroundImage: `url(${banner1})` }} />
            </div>
            <div>
              <div className="carouselImg rounded-3xl h-[600px]" style={{ ...contentStyle, backgroundImage: `url(${banner2})` }} />
            </div>
            <div>
              <div className="carouselImg rounded-3xl h-[600px]" style={{ ...contentStyle, backgroundImage: `url(${banner3})` }} />
            </div>
            <div>
              <div className="carouselImg rounded-3xl h-[600px]" style={{ ...contentStyle, backgroundImage: `url(${banner4})` }} />
            </div>
            <div>
              <div className="carouselImg rounded-3xl h-[600px]" style={{ ...contentStyle, backgroundImage: `url(${banner5})` }} />
            </div>
          </Carousel>
        </div>
        <br />
        
      </div>
      <div className="sponsorList w-full h-[300px]">
          <h2 className="text-[transparent] headerMob sponsorMob text-center text-[45px] tracking-widest font-[Magilio]">
            Our Partners & Sponsors
          </h2>
          <div className="scrolling-wrapper scrolling_wrapperMob opacity-60">
            <img className="w-[225px]" src={clinique} alt="Clinique Logo" />
            <img className="w-[225px]" src={nyxLogo} alt="NYX Logo" />
            <img className="w-[225px]" src={benefit} alt="Benefit Logo" />
            <img className="w-[225px]" src={colorPop} alt="Colourpop Logo" />
            <img className="w-[225px]" src={loreal} alt="L'Oréal Logo" />
            <img className="w-[225px]" src={maybeline} alt="Maybelline Logo" />
            <img className="w-[225px]" src={elf} alt="ELF Logo" />
            <img className="w-[225px]" src={dior} alt="Dior Logo" />
            <img className="w-[225px]" src={clinique} alt="Clinique Logo" />
            <img className="w-[225px]" src={nyxLogo} alt="NYX Logo" />
            <img className="w-[225px]" src={benefit} alt="Benefit Logo" />
            <img className="w-[225px]" src={colorPop} alt="Colourpop Logo" />
            <img className="w-[225px]" src={loreal} alt="L'Oréal Logo" />
            <img className="w-[225px]" src={maybeline} alt="Maybelline Logo" />
          </div>
        </div>
    </div>
  );
};

export default Header;
