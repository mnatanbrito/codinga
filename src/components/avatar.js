import React from "react"

import "../styles/avatar.css"
import avatarImg from "../../content/assets/avatar.jpeg"
import logos from "./logos"

const Avatar = () => {
  return (
    <div className="avatar-wrapper">
      <div className="center">
        <img src={avatarImg} className="avatar" alt="Marcos Natan" />
      </div>
      <div className="socials">
        <logos.GitHub
          url="https://www.github.com/mnatanbrito"
          title="Meu github"
        />
        <logos.LinkedIn
          url="https://www.linkedin.com/in/marcosnatanpacheco"
          title="Meu github"
        />
      </div>
    </div>
  )
}

export default Avatar
