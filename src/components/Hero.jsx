import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"

const Hero = () => {
    const TextRef = useRef(null)

    // use GSAP
    useGSAP(() => {
        const heroSplit = new SplitText(TextRef?.current, { type: 'chars , words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        //    use each hero character as array
        heroSplit.chars.forEach(char => char.classList.add('text-gradient'))


        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.7,
            ease: 'expo.out',
            stagger: 0.06
        })


        // the paragraph
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            delay: 1
        })

        // time line for scroll animation
        const leafTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'button top',
                scrub: true,

            }
        })

        leafTimeline
            .to('.right-leaf', {
                y: 200
            }, 0)
    }, [])

    return (
        <section id="hero" className="noisy">

            <h1 className="title" ref={TextRef}>MOJITO</h1>
            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf" />
            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf" />

            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf" />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients creative flair and timeless
                            recipes - designed to delight you senses
                        </p>
                        <a href="#cocktails">view Cocktails</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero