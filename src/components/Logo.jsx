import logo from "@/images/logo.jpeg"
import Image from "next/future/image"

export function Logo(props) {
  return (
    <Image
      src={logo}
      alt=""
      width="40"
      height="40"
      />
  )
}
