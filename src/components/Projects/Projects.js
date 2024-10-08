import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LawGroup"
              description="
Introducing LAW Group: a premier legal consultancy dedicated to providing expert guidance in various fields of law. Our experienced team is committed to delivering personalized solutions, ensuring our clients navigate legal complexities with confidence. Explore our services and discover how we can support your legal needs effectively and efficiently. Your success is our priority. "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://lawgroup.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Finance Summary "
              description="
Introducing Finance Suits: your trusted partner in financial solutions. We specialize in tailored investment strategies, risk management, and financial planning to help you achieve your goals. Our expert team is dedicated to empowering clients with the knowledge and tools needed for financial success. Experience personalized service and innovative approaches to elevate your financial future."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://finance-saas-template.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chat app "
              description="Introducing ChatServices: your go-to platform for seamless communication and support. We offer real-time chat solutions designed to enhance customer engagement and streamline interactions. Our user-friendly interface and responsive team ensure your queries are addressed promptly. Experience the power of instant communication and elevate your customer service today!



"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://chatorigin.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube portfolio"
              description="
Welcome to our YouTube portfolio! Explore a diverse collection of engaging videos showcasing our creativity and expertise. From informative tutorials to captivating storytelling, each project highlights our commitment to quality and innovation. Join our journey and discover how we bring ideas to life through the power of video. Subscribe and be part of our community!"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://bella-youtuber.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SuperCarwash "
              description="Introducing Cash Wash: your ultimate destination for professional car cleaning services. We offer a range of washing and detailing options to keep your vehicle looking pristine. Our skilled team uses eco-friendly products and techniques to ensure a thorough clean while protecting the environment. Experience the difference with Cash Wash—where quality meets convenience!"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://supremecarwash.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Developer portfolio "
              description="Welcome to our portfolio! Here, you'll find a curated collection of our best work across various projects and industries. From innovative designs to impactful campaigns, each entry reflects our commitment to excellence and creativity. Explore our journey and see how we turn ideas into reality, delivering exceptional results for our clients."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://jrdev-port.netlify.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
