import { IconBrandFacebook, IconBrandGithub, IconBrandX } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandInstagram } from '@tabler/icons-react'
import React from 'react'

function SocialLinks() {
    const redirectToInstagram = () => {
        window.location.href = "https://www.instagram.com/izazcodes/";
      };
      const redirectToTwitter = () => {
        window.location.href = "https://twitter.com/IzazAhm99546481";
      };
      const redirectToFacebook = () => {
        window.location.href =
          "https://www.facebook.com/profile.php?id=100080270784104";
      };
      const redirectToGithub = () => {
        window.location.href =
          "https://github.com/IzazAhmadHaider";
      };
      const redirectToLinkdin = () => {
        window.location.href = "https://www.linkedin.com/in/izaz-ahmad-035a721a3/";
      };
    return (
        <div className='flex space-x-2'> 
            <IconBrandInstagram
            onClick={redirectToInstagram}
            color="#4c4c4c"
            size={20}
            className="hover:scale-110 cursor-pointer"
        />
            <IconBrandFacebook
                onClick={redirectToFacebook}
                color="#4c4c4c"
                size={20}
                className="hover:scale-110 cursor-pointer"
            />
            <IconBrandGithub
                onClick={redirectToGithub}
                color="#4c4c4c"
                size={20}
                className="hover:scale-110 cursor-pointer"
            />
            <IconBrandLinkedin
                onClick={redirectToLinkdin}
                color="#4c4c4c"
                size={20}
                className="hover:scale-110 cursor-pointer"
            />
            <IconBrandX
                onClick={redirectToTwitter}
                color="#4c4c4c"
                size={20}
                className="hover:scale-110 cursor-pointer"
            /></div>
    )
}

export default SocialLinks