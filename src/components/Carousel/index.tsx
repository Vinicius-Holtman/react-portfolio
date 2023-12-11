import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./styles.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import dtMoney from "../../assets/carouselImg/dtMoney.png"
import holtbook from "../../assets/carouselImg/holtbook.png"
import reactAdmin from "../../assets/carouselImg/reactAdmin.png"
import { useEffect } from 'react';


const AutoplaySlider = withAutoplay(AwesomeSlider);
export function Carousel() {

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={10000}
      animation="cubeAnimation"
    >
      <div data-src={dtMoney} />
      <div data-src={holtbook} />
      <div data-src={reactAdmin} />
    </AutoplaySlider>
  )
}