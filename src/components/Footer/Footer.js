import React from 'react'
import imgFacebook from '../../assets/footer/fb_f.png'
import imgTwitter from '../../assets/footer/twitter_f.png'
import imgInstagram from '../../assets/footer/instagram_f.png'
import Column from '../Column'
import Row from '../Row'
import Container from '../Container'
// import {
//     Container,
//     Row,
//     Column,
// } from 'Layouts'
import * as style from './Footer.module.scss'

const year = new Date().getUTCFullYear()
const Footer = () => {
    return (
        <footer
            className={style.footerWrapper}
        >
            <div className={style.shape} />
            <div className={style.footer}>
                <div className={style.content}>
                    <Container extraLarge>
                        <Row>
                            <Column xs={12} sm={12} md={3} lg={3}>
                                <h4>Find us on</h4>
                                <div className={style.socialIcons}>
                                    <a
                                        href="https://www.facebook.com/slidesome"
                                        title="Find us on Facebook"
                                        // className={style.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={imgFacebook} alt="Facebook" />
                                        {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                                    </a>
                                    <a
                                        href="https://www.instagram.com/slidesome/"
                                        title="Find us on Instagram"
                                        className={style.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={imgInstagram} alt="Instagram" />
                                        {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                    </a>
                                    <a
                                        href="https://twitter.com/slidesome"
                                        title="Find us on Twitter"
                                        className={style.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={imgTwitter} alt="Twitter" />
                                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                    </a>
                                </div>
                            </Column>
                            <Column xs={12} sm={12} md={3} lg={3}>
                                <h4>Information</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://slidesome.com/blog/">Blog</a></li>
                                    <li className={style.faq}><a title="Frequently asked questions" href="/faq/">FAQ</a></li>
                                    <li><a title="About us" href="/about/">About</a></li>
                                    <li><a title="Contact us" href="/contact/">Contact</a></li>
                                </ul>
                            </Column>
                            <Column xs={12} sm={12} md={3} lg={3}>
                                <h4>Use cases</h4>
                                <ul className="list-unstyled">
                                    <li><a title="Social walls" href="/use-cases/socialwalls">Social walls</a></li>
                                    <li><a title="Weddings" href="/use-cases/weddings">Weddings</a></li>
                                    {/* <li><a title="Sport and stadiums" href="/use-cases/sportandstadiums">Sports & stadiums</a></li> */}
                                    {/* <li><a title="Education" href="/use-cases/education">Education</a></li> */}
                                    <li><a title="Photobooth" href="/use-cases/photobooth">Photobooth</a></li>
                                    <li><a title="Digital signage" href="/use-cases/digitalsignage">Digital signage</a></li>
                                    {/* <li><a title="Direct upload" href="/use-cases/directupload">Direct upload</a></li>
                                    <li><a title="Hashtag campaign" href="/use-cases/hashtagcampaign">Hashtag campaign</a></li> */}
                                </ul>
                            </Column>
                            <Column xs={12} sm={12} md={3} lg={3}>
                                <h4>Other</h4>
                                <ul className="list-unstyled">
                                    <li><a title="Enter a slideshow with a key" href="/enter/">Enter a slideshow</a></li>
                                    <li><a title="Read our Terms of Service" href="/terms/">Terms of Service</a></li>
                                    <li><a title="Read our Privacy Policy" href="/privacypolicy/">Privacy Policy</a></li>
                                </ul>
                            </Column>
                        </Row>
                        <Row>
                            <Column xs={12}>
                                <p className={style.copyright}><span>&copy;</span> {year} Slidesome</p>
                            </Column>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)
