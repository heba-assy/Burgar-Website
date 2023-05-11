import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap,
    SocialLogo, SocialIcons, SocialIconLink
} from './FooterElements';

function Footer() {
        return (
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/">Burger</SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-table="Facebook" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-table="Instagram" rel="noopener noreferrer"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-table="Twitter" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-table="Youtube" rel="noopener noreferrer"><FaYoutube /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        )
    }

export default Footer