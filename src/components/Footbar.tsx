import styled from "@emotion/styled"
import ambient from "../assets/ambient.svg"

const Ambient = styled("img")(({ theme }) => {
  return {
    width: "100%",
    position: "absolute",
    bottom: -7,
    mt: 20
  }
})


export function Footbar() {
  return (
    <Ambient src={ambient} />
  )
}