import React, { Component } from "react";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,

  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default class App extends Component {
  render() {

    const title = "Faça o Download do App de Auriflama pelos links abaixo!!"

    const url = "https://applink.com.br/guia_auriflama"
    const shareURL = `
    
    IOS: ${url} 
    Google Play ${url}
    `

    return(
      <>
        <FacebookShareButton 
          url={shareURL}
          title={title}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        
        <WhatsappShareButton 
          url={shareURL}
          title={title}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton 
          url={shareURL}
          title={title}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <LinkedinShareButton 
          url={shareURL}
          title={title}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <RedditShareButton 
          url={shareURL}
          title={title}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>

        <TelegramShareButton 
          url={shareURL}
          title={title}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>

        <TwitterShareButton 
          url={shareURL}
          title={title}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </>

    )
  }
}