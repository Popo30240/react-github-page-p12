// Components
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Apropos from '../../components/Apropos';
import Project from '../../components/Project';

// Styles
import './Home.scss';

function Home() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Apropos />
        <Project />
      </main>
    </>
  );
}

export default Home;