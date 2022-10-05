import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { heroImage } from "../constants/constants";
import { HeroImg } from "../components/Hero/HeroStyles";
import { NewModal } from "../layout/NewModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <NewModal closeModal={closeModal} />}
      <Layout>
        <Section grid style={{ overflow: "hidden" }}>
          <Hero />
          <HeroImg src={heroImage} />
          <BgAnimation />
        </Section>
        <Projects />
        {/* <Technologies /> */}
        {/* <Timeline /> */}
        {/* <Acomplishments /> */}
      </Layout>
    </>
  );
};

export default Home;
