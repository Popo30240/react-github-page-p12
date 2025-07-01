// Components
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Project from '../../components/Project';
import Competences from "../../components/Competences";
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
// Hooks
import useFetch from '../../components/useFetch';

// Styles
import './Home.scss';

function Home() {

  const projects = useFetch("/data.json");
  const skills = useFetch("/skills.json");

  if (!projects || !skills) {
    return <div>En chargement...</div>;
  }

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
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;