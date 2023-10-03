import { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navbars from "../../components/Navbars";
import News from "./NavChild/News";
import Aboutme from "./NavChild/Aboutme";
import AOS from "aos";
import "aos/dist/aos.css";
import NameRequiered from "../../components/NameRequiered";
import Contact from "./NavChild/Contact";

const Dashboard = () => {
  const [HeaderName, setHeaderName] = useState(null);
  const [elementToView, setElementToView] = useState(null);
  const NewsElement = useRef(null);
  const AboutMeElement = useRef(null);
  const ContactElement = useRef(null);

  useEffect(() => {
    setHeaderName("Joke List");
    setElementToView(() => {
      return <News />;
    });
    AOS.init();
  }, []);

  const NaviageNav = (p) => {
    if (p == "News") {
      setHeaderName("Joke List");
      setElementToView(() => {
        return <News />;
      });

      NewsElement.current.className =
        "border-start border-danger border-5 p-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      AboutMeElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      ContactElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
    } else if (p == "About Me") {
      setHeaderName("About Joke APP");
      setElementToView(() => {
        return <Aboutme />;
      });
      NewsElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      AboutMeElement.current.className =
        "border-start border-danger border-5 p-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      ContactElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
    } else if (p == "Contact") {
      setHeaderName(p);
      setElementToView(() => {
        return <Contact />;
      });
      NewsElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      AboutMeElement.current.className =
        "border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
      ContactElement.current.className =
        "border-start border-danger border-5 p-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-between nav-list";
    }
  };
  const NavLink = () => {
    return (
      <>
        <div
          className="border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
          onClick={() => NaviageNav("News")}
        >
          <span>Joke List</span>
          <i class="bx bx-chevron-right fs-3"></i>
        </div>
        <div
          className="border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
          onClick={() => NaviageNav("About Me")}
        >
          <span>About Joke APP</span>
          <i class="bx bx-chevron-right fs-3"></i>
        </div>
        <div
          className="border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
          onClick={() => NaviageNav("Contact")}
        >
          <span>Contact</span>
          <i class="bx bx-chevron-right fs-3"></i>
        </div>
      </>
    );
  };
  return (
    <>
      <NameRequiered />
      <Navbars element={<NavLink />} />
      <section className="py-md-5">
        <Container>
          <Row>
            <Col
              md="4"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <Card className="rounded-5 overflow-hidden shadow menu-card">
                <Card.Body className="p-0">
                  <div className="border-bottom border-5 border-secondary px-3 py-4 bg-danger">
                    <span className="text-light fw-bold fs-5">MENU</span>
                  </div>
                  <div
                    className="border-start border-danger border-5 p-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
                    onClick={() => NaviageNav("News")}
                    ref={NewsElement}
                  >
                    <span>Joke List</span>
                    <i class="bx bx-chevron-right fs-3"></i>
                  </div>
                  <div
                    className="border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
                    onClick={() => NaviageNav("About Me")}
                    ref={AboutMeElement}
                  >
                    <span>About Joke APP</span>
                    <i class="bx bx-chevron-right fs-3"></i>
                  </div>
                  <div
                    className="border-start border-light border-5 p-3 bg-light bg-opacity-25 d-flex align-items-center justify-content-between nav-list"
                    onClick={() => NaviageNav("Contact")}
                    ref={ContactElement}
                  >
                    <span>Contact</span>
                    <i class="bx bx-chevron-right fs-3"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md="8"
              data-aos="fade-right"
              data-aos-duration="600"
              className="kadeaw633d4gs"
            >
              <Card className="border-0 bg-transparant card-chat">
                <Card.Body className="p-0">
                  <div className="d-none d-md-block">
                    <div className="p-3 px-4 bg-danger w-25 folder-style rounded-folder-style border-bottom border-secondary border-4 header-chat">
                      <span className="text-light">{HeaderName}</span>
                    </div>
                  </div>
                  {elementToView}
                  {/* ini lastnya */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Dashboard;
