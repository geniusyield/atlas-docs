import NextLink from 'next/link'
import { Link, Code } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { brandCodeStyle } from 'theme/simple'

const MyLink = (url: string, isExternal: boolean, text: string, isCode?: boolean) => {
  return (
    <Link as={NextLink} href={`${url}`} isExternal={isExternal} color="#006be6" textDecoration="underline">
      {typeof isCode === 'undefined' ? text : <Code {...brandCodeStyle}>{text}</Code>}{isExternal ? <ExternalLinkIcon mx='2px' /> : null}
    </Link>
  )

}

export default MyLink
