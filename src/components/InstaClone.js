import React from "react";
import styled from "styled-components";
import video from "../images/instaclone-demo.mp4";
import firebaseLogo from "../images/logo-firebase.png";
import instaLogo from "../images/logo-insta.png";
import jsLogo from "../images/logo-js.png";
import nextjsLogo from "../images/logo-nextjs.png";
import reactLogo from "../images/logo-react.png";
import tailwindLogo from "../images/logo-tailwind.png";
import image from "../images/photo-cv.jpg";

const InstaClone = () => {
  return (
    <Container>
      <Header>
        <a href="https://pascal.la">
          <h2>PL</h2>
        </a>
      </Header>
      <MainWrapper>
        <VideoWrapper>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </VideoWrapper>
        <VideoInfo>
          <AuthorWrapper>
            <AuthorImage>
              <img src={image} alt="" />
            </AuthorImage>
            <AuthorInfo>
              <h3>Pascal La</h3>
              <h4>InstaClone - Démo</h4>
              <p>Durée : 1min</p>
              <a
                href="https://instaclone.pascal.la"
                target="_blank"
                rel="noreferrer"
              >
                Pascal La - Instaclone
              </a>
            </AuthorInfo>
          </AuthorWrapper>
          <VideoDescription>
            <p>
              Voici une vidéo de présentation d'un clone partiel de
              l'application Instagram, avec une partie feed et commentaires
              fonctionnelle. L'application est responsive (mobile first). La
              page de connexion a été personnalisée. Tous les posts et
              commentaires sont sauvegardés dans la BDD.
            </p>

            <ul>
              <li>
                <span>Framework</span> : Next.js
              </li>
              <li>
                <span>Base de données</span> : firebase/firestore
              </li>
              <li>
                <span>Authentification</span> : next-auth/GoogleProvider
              </li>
              <li>
                <span>States en global</span> : Recoil
              </li>
              <li>
                <span>Style</span> : tailwindcss/heroicons
              </li>
              <li>
                <span>Faux profils</span> : faker
              </li>
              <li>
                <span>Date des commentaires</span> : moment/react-moment
              </li>
            </ul>
            <LogoContainer>
              <img src={jsLogo} alt="" />
              <img src={reactLogo} alt="" />
              <img src={nextjsLogo} alt="" />
              <img src={firebaseLogo} alt="" />
              <img src={tailwindLogo} alt="" />
              <img src={instaLogo} alt="" />
            </LogoContainer>
          </VideoDescription>
        </VideoInfo>
      </MainWrapper>
    </Container>
  );
};

export default InstaClone;

const Container = styled.div`
  color: #222222;
  user-select: none;
  margin-bottom: 20em;
`;

const Header = styled.div`
  height: 16vh;
  display: flex;
  align-items: center;
  background: linear-gradient(15deg, #6113aa, #c90076);

  h2 {
    color: #b4a7d6;
    padding: 0.5em;
    margin: 0 0.8em;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 50%;
    border: 0.2em solid #b4a7d6;

    @media (min-width: 769px) {
      margin: 0 3.3em;
    }

    &:hover {
      color: #6113aa;
      background-color: #b4a7d6;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  padding: 4em 0;
  background: #333333;
  text-align: center;

  @media (min-width: 769px) {
    padding: 4em 0;
  }
`;

const VideoBg = styled.video`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;

  @media (min-width: 769px) {
    width: 70%;
  }
`;

const VideoInfo = styled.div`
  width: 100%;
  text-align: left;
  word-break: break;
  line-height: 1.5em;

  ul {
    padding: 0;
    list-style: none;
  }

  span {
    font-weight: bold;
  }

  @media (min-width: 426px) {
    width: 70%;
  }

  @media (min-width: 1025px) {
    display: flex;
    font-size: large;
  }

  @media (min-width: 1441px) {
    width: 50%;
  }
`;

const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1em;

  a {
    font-weight: bold;
    color: #6113aa;

    &:hover {
      color: #c90076;
    }
  }

  @media (min-width: 1025px) {
    width: 50%;
  }
`;

const AuthorImage = styled.div`
  padding: 1em;

  img {
    width: 4em;
    border-radius: 50%;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
  margin-right: 1em;
  padding: 1em 1em 1em 0;
  border-bottom: 1px solid lightgray;

  h3 {
    margin: 0 0 0.5em 0;
  }

  h4,
  p {
    margin: 0;
  }

  p {
    color: gray;
  }

  @media (min-width: 1025px) {
    border: none;
  }
`;

const VideoDescription = styled.div`
  padding-top: 1em;
  margin: 1em;
  border-bottom: 1px solid lightgray;

  p {
    margin-top: 0;
  }

  @media (min-width: 1025px) {
    width: 50%;
    border: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  img {
    width: 2.5em;
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;
