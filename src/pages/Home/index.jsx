// Components
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Project from '../../components/Project';
import Competences from "../../components/Competences";
// Hooks
import useFetch from '../../components/useFetch';

// Styles
import './Home.scss';

function Home() {

  const projects = useFetch("/data.json");

  const skills = useFetch("/skills.json");

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <About />
        <Project projects={projects} />
        <Competences skills={skills} />
      </main>
    </>
  );
}

export default Home;