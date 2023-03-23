import Image from "next/image";
import atlasLogoLight from 'public/atlas-logo-light-mode.svg'
import atlasLogoDark from 'public/atlas-logo-dark-mode.svg'
import { useTheme } from "next-themes"

export function Logo() {
  const { resolvedTheme } = useTheme()
  return (
    <Image src={resolvedTheme === "light" ? atlasLogoLight : atlasLogoDark} alt="Atlas Logo" height="42" />
  )
}
