// this is the home section aka your landing page.
// lets start by importing our necessary components.
// import landinghero, portfolio showcase etc.
import LandingHero from "./LandingHero/LandingHero";
import Showcase from "./Portfolio/Showcase";

// function to export Home component.
function Home() {
  return (
    <div>
      {/* // add your HTML elements in here - must be inside of a div or some form
      of container */}
      <LandingHero />
      <Showcase />
    </div>
  );
}

// export your function.
export default Home;
