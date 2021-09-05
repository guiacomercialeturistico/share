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

    const url = "https://applink.com.br/guia_auriflama"
    const title = `
    Faça o Download do App de Auriflama pelos links abaixo!!

    IOS: ${url} 
    Google Play ${url}
    `

    return(
      <>
        <FacebookShareButton 
          url={url}
          title={title}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        
        <WhatsappShareButton 
          url={url}
          title={title}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton 
          url={url}
          title={title}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <LinkedinShareButton 
          url={url}
          title={title}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <RedditShareButton 
          url={url}
          title={title}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>

        <TelegramShareButton 
          url={url}
          title={title}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>

        <TwitterShareButton 
          url={url}
          title={title}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </>

    )
  }
}