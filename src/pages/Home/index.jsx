// Components
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Project from '../../components/Project';
import useFetch from '../../Hooks/useFetch';

// Styles
import './Home.scss';

function Home() {

  const projects = useFetch("/data.json");

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <About />
        <Project projects={projects} />
      </main>
    </>
  );
}

export default Home;