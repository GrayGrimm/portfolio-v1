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
          <h1 className="font-bold text-2xl">Alec Guyer</h1>
          <p>Full-Stack Software Developer</p>
        </div>
        <div className="divider divider-accent" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold">Fluid and Responsive UI Experiences</h2>
          <h2 className="font-bold">Future-Proof Backend Systems</h2>
          <a className="btn hover:btn-primary" href="/projects">View my Projects</a>
        </div>
        <div className="divider divider-accent" />
        <div className="flex gap-2">
        <a className="btn bg-black text-white border-black" href="https://github.com/GrayGrimm"><img width='32' height='32' src='/icons/github-mark-white.png' />GitHub</a>
        <a className="btn bg-[#0967C2] text-white border-[#0059b3]" href="https://www.linkedin.com/in/alec-guyer"><img width='32' height='32' src='/icons/InBug-White.png' />LinkedIn</a>
        </div>
      </main>
    </>
  );
};

export default Home;
