import React from "react";
import style from "./About.module.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../NavBar/NavBar";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setSettingsModalGate } from "../../../store/actions/index";

const About = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const { payer, isOpenSettingsModal } = useSelector((state) => state);
  const openSettingsModal = () => {
    dispatch(setSettingsModalGate(isOpenSettingsModal));
  };
  const img = require("../../../imagenes/salto.png");
  return (
    <div onClick={isOpenSettingsModal ? () => openSettingsModal() : null}>
      <Navbar />
      <Header imagen={img} text="Team Online Nature" />
      <div className={style.description}>
        <h4>Description</h4>
        <h5>
          We are very committed with the nature preservation of animals and
          trees in danger of extinction. When you make a donation throughout our
          platform, you are contributing to different preservation and
          protection of a variety of species. When accepting our terms and
          conditions you are accepting that any donation that you make is with
          no return and non refundable. As well as accepting that the projects
          and programs are always subject to change and we don't guarantee
          specific results our commitment is to improve and enhance life in
          general. By utilizing our website, you accept to comply all of the
          rules and laws applicable. We are dedicated to protect your personal
          information in the most responsible manner. Thanks a lot for aiming to
          protect and keep animals and trees in danger of extinction.
        </h5>
      </div>
      {/* <div className={style.tittle}>ABOUT US</div> */}
      <div className={style.main}>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://avatars.githubusercontent.com/u/109261084?s=400&u=30691b293ade1860904a2b09fd8fba519907a1f8&v=4"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>Daniela Pourrieux</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/dhannypou">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniela-pourrieux-0900a6213/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://media.licdn.com/dms/image/D4E03AQH9kvlcpyKEeA/profile-displayphoto-shrink_800_800/0/1668554028334?e=1680739200&v=beta&t=npBowFrzVNlQxRuJDf51KFqozlutdLzbjZysptl5fdk"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>Jonas Escorcia</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/jonas0321">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jonas-fern%C3%A1ndez-29688824a/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://media.licdn.com/dms/image/D4D35AQFIQcDlRZas7w/profile-framedphoto-shrink_800_800/0/1666015377058?e=1676091600&v=beta&t=JTOe7jau2TZS7vWzHs-lB8pA9k_502DEsVKlbrupo2I"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>Ezequiel Luiten</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/ezeluiten">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ezequiel-luiten-5b0710224/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://media.licdn.com/dms/image/D4E03AQGAmi-qtP0qXw/profile-displayphoto-shrink_800_800/0/1673551648846?e=1680739200&v=beta&t=wwVK_AY4y7M-y8wj02Ge5pD5eqk82Bxpz9IxgrLJkSE"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>Esteban Puentes</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/esteban2841">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/esteban-puentes-183600192/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://media.licdn.com/dms/image/D4E35AQHWee_mGRwjqw/profile-framedphoto-shrink_800_800/0/1666449056742?e=1676091600&v=beta&t=w4HaDuWqogYwn_fgQa2t1KLMiUo08CM8W4pufdDr9wk"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>Daniel Cordero</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/danicorderoo">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dcordero-ing/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={style.profile_card}>
          <div className={style.img}>
            <img
              src="https://media.licdn.com/dms/image/D4E35AQEs30xbEjo7sg/profile-framedphoto-shrink_800_800/0/1666463279778?e=1676091600&v=beta&t=TolPndwZm9gCoPNgJWv0-4qruPjvvEfl0jYOPRhPrUY"
              alt=""
            />
          </div>
          <div className={style.caption}>
            <h3>José Castro</h3>
            <p> Full Stack Developer</p>
            <div className={style.social_links}>
              <a href="https://github.com/Ghoul-JS">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ghoul-js/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
