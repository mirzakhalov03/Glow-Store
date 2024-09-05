import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    borderRadius: '3xl'
};

const Header = () => {
  return (
    <div className="w-full">
        <div className="container">
            <div className='w-full m-4'>
                <h2 className='text-[#ba5e5e] text-center text-[45px] tracking-wide font-[Magilio]'><span className='lime-glowing-text text-[#BEEB00]'>Glow</span> Up your Beauty! Illuminate <span className='pink-glowing-text text-[#fbaef2]'>Your Style!</span></h2>
            </div>
            <div className="banner   w-full h-[600px]">
                <Carousel arrows autoplay={true} fade={true} autoplaySpeed={2500} infinite={true}>
                    <div className='rounded-3xl'>
                        <div className='rounded-3xl' style={{ ...contentStyle, backgroundImage: `url(${banner1})` }} />
                    </div>
                    <div>
                        <div className='rounded-3xl' style={{ ...contentStyle, backgroundImage: `url(${banner2})` }} />
                    </div>
                    <div>
                        <div className='rounded-3xl' style={{ ...contentStyle, backgroundImage: `url(${banner3})` }} />
                    </div>
                    <div>
                        <div className='rounded-3xl' style={{ ...contentStyle, backgroundImage: `url(${banner4})` }} />
                    </div>
                    <div>
                        <div className='rounded-3xl' style={{ ...contentStyle, backgroundImage: `url(${banner5})` }} />
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
  );
}

export default Header;
