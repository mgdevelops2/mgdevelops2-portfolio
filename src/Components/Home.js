import LandingHero from "./LandingHero/LandingHero";
import Showcase from "./Portfolio/Showcase";
// import BlogHighlight from "./Blog/BlogHighlight";
function Home() {
  return (
    <div>
      <LandingHero />
      <Showcase />
      {/* <BlogHighlight /> */}
    </div>
  );
}

export default Home;
