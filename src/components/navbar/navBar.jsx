import { useEffect, useState } from "react";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";

const NavBar = () => {
  // state para capturar a atividade do link e scroll
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // função para rolar as seções pelos seus IDS
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToy =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToy, behavior: "smooth" });
    }
  };

  // função para determinar se a seção está ativa junto com o scroll
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 300){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      //  chama a função que ativa a seção enquanto roda o scroll
      determineActiveSection();
    }
    window.addEventListener('scroll', handleScroll)

    //  remove o scroll quando o cmponent for desfeito
    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <nav className={isScrolled ? "scrolled" : '' }>
      <div className="container">
        <div className="row">
          <div className="logo">LOGO</div>
          <ul className="menu-bar">
            {sectionIds.map((sectionId, i) => (
              <li key={i} onClick={() => scrollToSection(sectionId)}>
                <Link
                  to="/"
                  className={activeLink === sectionId ? "active" : ""}
                >
                  {sectionId}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
