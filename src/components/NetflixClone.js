import React from "react";
import styled from "styled-components";
import cssLogo from "../images/logo-css.png";
import firebaseLogo from "../images/logo-firebase.png";
import jsLogo from "../images/logo-js.png";
import netflixLogo from "../images/logo-netflix.png";
import reactLogo from "../images/logo-react.png";
import reduxLogo from "../images/logo-redux.png";
import stripeLogo from "../images/logo-stripe.png";
import video from "../images/netflix-clone-demo.mp4";
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
          <AuthorText>
            <AuthorImage>
              <img src={image} alt="" />
            </AuthorImage>
            <AuthorInfo>
              <h3>Pascal La</h3>
              <h4>Netflix Clone - Démo</h4>
              <p>Durée : 1min10</p>
            </AuthorInfo>
          </AuthorText>
          <VideoDescription>
            <p>
              Voici une vidéo de présentation d'un clone partiel de
              l'application Netflix. La création et connexion au compte se fait
              avec une adresse e-mail grâce à firebase. Le paiement et en mode
              test, avec Stripe. L'application est responsive (mobile first).
            </p>
            <ul>
              <li>
                <span>Framework</span> : React/Redux
              </li>
              <li>
                <span>Base de données</span> : firebase/firestore
              </li>
              <li>
                <span>Authentification</span> : firebase-auth
              </li>
              <li>
                <span>States en global</span> : Redux-Toolkit
              </li>
              <li>
                <span>Plateforme de paiement</span> : Stripe (Mode Test)
              </li>
              <li>
                <span>Données</span> : API TMDB / Axios
              </li>
            </ul>
            <LogoContainer>
              <img src={jsLogo} alt="" />
              <img src={cssLogo} alt="" />
              <img src={reactLogo} alt="" />
              <img src={reduxLogo} alt="" />
              <img src={firebaseLogo} alt="" />
              <img src={stripeLogo} alt="" />
              <img src={netflixLogo} alt="" />
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
  background: linear-gradient(15deg, #e50914, #6113aa);

  h2 {
    color: #990000;
    padding: 0.5em;
    margin: 0 0.8em;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 50%;
    border: 0.2em solid #990000;

    @media (min-width: 769px) {
      margin: 0 3.3em;
    }

    &:hover {
      color: #dad0ef;
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

const AuthorText = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1em;

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
