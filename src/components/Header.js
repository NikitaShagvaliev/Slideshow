import React from 'react'
import classNames from 'classnames'
import * as style from './Header.module.scss'
import logo from '../assets/slidesome.svg'
import Button from './Button/components/Button'

const Header = () => {
    //     const data = useStaticQuery(graphql`
    //     query HeaderQuery {
    //       logo: file(absolutePath: { regex: "/slidesome.svg/" }) {
    //         childImageSharp {
    //           fixed(width: 56, height: 56) {
    //             ...GatsbyImageSharpFixed
    //           }
    //         }
    //       }
    //       site {
    //         siteMetadata {
    //           author {
    //             name
    //             summary
    //           }
    //           social {
    //             twitter
    //             facebook
    //           }
    //         }
    //       }
    //     }
    //   `)
    return (
        <div
            className={style.fixedTop}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                width: '100%',
            }}
        >
            <nav
                className={style.header}
            >
                <a
                    title="Slidesome"
                    href="https://slidesome.com/"
                    className={style.logo}
                >
                    <img src={logo} height="34" alt="Slidesome" />
                </a>
                <div
                    className={classNames(
                        style.nav,
                    )}
                >
                    <div
                        className={style.links}
                    >
                        <a href="https://slidesome.com/pricing/" title="Pricing">Pricing</a>
                        <a href="https://slidesome.com/faq/" title="Frequently asked questions">FAQ</a>
                        <a href="https://slidesome.com/contact/" title="Contact us">Contact</a>
                    </div>
                    <div className={style.cta}>
                        <Button
                            className={style.getStartedBtn}
                            fill
                            isLink
                            forHeader
                            primary
                            notResponsive
                            spanEffect
                            isNormalLink
                            title="Sign in to get started"
                            to="https://slidesome.com/"
                        >
                            Get Started <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></span>
                        </Button>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default React.memo(Header)
