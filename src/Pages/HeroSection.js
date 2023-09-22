// This is a React functional component called HeroSection
export default function HeroSection() {
  return (
    // The section element with an id of "heroSection" and a class of "hero--section"
    <section id="heroSection" className="hero--section">
      {/* A container for the content of the hero section */}
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Prince</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            ...a skilled full-stack developer with expertise in both front-end and back-end technologies, delivering comprehensive web solutions.
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/prince2.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
