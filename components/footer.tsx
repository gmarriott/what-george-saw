import Container from './container'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="pt-16 flex flex-col lg:flex-row justify-center">
          <div className="grid grid-rows-3 grid-flow-col gap-4 text-5xl">
                <div className="row-start-1 row-span-4"><a href="https://www.linkedin.com/in/gmarriott94/" target="_blank"><FaLinkedin /></a></div>
                <div className="row-start-1 row-span-4"><a href="https://github.com/gmarriott" target="_blank"><FaGithubSquare /></a></div>
                <div className="row-start-1 row-span-4"><a href="https://twitter.com/its_just_george?lang=en-gb" target="_blank"><FaTwitterSquare /></a></div>
          </div>
        </div>
        <div className="pb-16 flex flex-col lg:flex-row justify-center">
            <span>© Copyright 2022 | George Marriott | Personal Blog | Built in Next.js</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
