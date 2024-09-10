import CardsHug from "../../components/cardsHug/CardsHug"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"


const Home = () => {
  return (
    <>
        <Nav />
        <Header />
        <h1 className='text-center mt-[100px] text-[#ba5e5e] text-4xl font-[Magilio] tracking-wide'>Our Best Products</h1>
        <CardsHug dynamicTypeName="blush" />
        <CardsHug dynamicTypeName="bronzer" />
        <CardsHug dynamicTypeName="eyebrow" />
        <CardsHug dynamicTypeName="eyeliner" />
        <CardsHug dynamicTypeName="eyeshadow" />
        <CardsHug dynamicTypeName="foundation" />
        <CardsHug dynamicTypeName="lip_liner" />
        <CardsHug dynamicTypeName="Lipstick" />
        <CardsHug dynamicTypeName="Mascara" />
        <CardsHug dynamicTypeName="Nail_polish" />
        <Footer />
     
    </>
  )
}

export default Home