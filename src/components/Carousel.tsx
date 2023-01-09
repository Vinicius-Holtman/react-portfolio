import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import react from "../assets/skills/react.svg"

export function Carousel() {
  return (
    <AwesomeSlider
      media={[
        {
          source: react,
        },
        {
          source: react,
        },
        {
          source: react,
        },
      ]}
    />
  )
}