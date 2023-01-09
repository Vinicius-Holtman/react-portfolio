import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./styles.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import imagePorti from "../../assets/image-porti.png"

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function Carousel() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={10000}
      animation="cubeAnimation"
    >
      <div data-src={imagePorti} />
      <div data-src={imagePorti} />
      <div data-src={imagePorti} />
    </AutoplaySlider>
  )
}