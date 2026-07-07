import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"

const NavBar = () => {
    // create glassy animation
    useGSAP(() => {
        // first define our triggered element how it will trigger and when 
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav", //*=> trigger by the nav element 
                start: "bottom top", //*=> bottom of the navbar touch the top of the viewport
                end: "+=80",
                scrub: true,
                duration: 10
            }
        })

        // then define our animation
        navTween.fromTo(
            "nav",
            {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
            },
            {
                backgroundColor: "#000000000050",
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            }
        );

    }, [])
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link,) => (
                        <li key={link.id}>
                            <a href={`#${link.title}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar