import Image from "next/image";
const Home = () => {
  return (
    <>
      <nav>ag.dev</nav>
      <main className="flex flex-col bg-base-300 max-w-xl mx-auto my-auto items-center border min-h-xl">
        <div className="landing-page-profile-img">
          <img alt-loading="eager" src="/images/portfolio.png" alt="landing-page-profile-pic" width='200' height='200' />
        </div>
        <div className="flex flex-col items-center">
          <h1>Alec Guyer</h1>
          <p>Full-Stack Software Developer</p>
        </div>
        <div className="divider divider-accent" />
        <div className="flex flex-col items-center">
          <h2>Fluid and Responsive UI Experiences</h2>
          <h2>Future-Proof Backend Systems</h2>
          <a className="btn hover:btn-primary" href="/projects">Step into the matrix!</a>
        </div>
        <div className="divider divider-accent" />
        <div className="flex">
        <a className="btn hover:btn-primary" href="https://github.com/GrayGrimm">GitHub</a>
        <a className="btn hover:btn-primary" href="https://www.linkedin.com/in/alec-guyer">LinkedIn</a>
        </div>
      </main>
    </>
  );
};

export default Home;
