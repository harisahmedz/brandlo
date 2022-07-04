import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { NavLink,  Link } from "react-router-dom";

import logo from "../../../assets/Logo.png";
import classes from "./Navbar.module.css"

const  OffCanvasNavbar=(props)=> {
  const expand = "lg";
  const navLinkData = [
    { title: "Home", linkValue: "/", dropdownStatus: false },
    { title: "Packages", linkValue: "/Packages", dropdownStatus: false },

    {
      title: "Services",
      linkValue: "/services",
      dropdownStatus: true,
      dropdownItems: [
        { title: "Custom Logo Design", linkValue: "/", dividerStatus: true },
        { title: "Web Development", linkValue: "/", dividerStatus: true },
        { title: "NFTs", linkValue: "/", dividerStatus: false },
      ],
    },

    { title: "Portfolio", linkValue: "/Portfolio", dropdownStatus: false },
    { title: "About Us", linkValue: "/Aboutus", dropdownStatus: false },
    { title: "Contact Us", linkValue: "/Contactus", dropdownStatus: false },
  ];

  return (
    <>
      {props.children}
      <Navbar
        key={expand}
        bg=""
        expand={expand}
        variant="dark"
        className={`${"mb-3 pt-4 align-top"} ${classes.navbar}`}

      >
        <Container fluid="md">
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            variant="dark"
            
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  src={logo}
                  width="120"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`${"justify-content-end flex-grow-1 pe-5"} `  }  >
                {navLinkData.map((item) =>
                  !item.dropdownStatus ? (
                    <Nav.Link as={NavLink} to={item.linkValue}  className={classes['nav-link']} >
                      {item.title}
                    </Nav.Link>
                  ) : (
                    <NavDropdown
                      title={item.title}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className={classes['nav-link']}
                      menuVariant="dark"
                    >
                      {item.dropdownItems.map((dropdownItem) =>
                        !dropdownItem.dividerStatus ? (
                          <NavDropdown.Item
                            as={Link}
                            to={dropdownItem.linkValue}
                            className={classes['nav-link']}
                          >
                            {dropdownItem.title}
                          </NavDropdown.Item>
                        ) : (
                          <>
                            <NavDropdown.Item
                              as={Link}
                              to={dropdownItem.linkValue}
                              className={classes['nav-link']}
                            >
                              {dropdownItem.title}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />{" "}
                          </>
                        )
                      )}
                    </NavDropdown>
                  )
                )}
              </Nav>
              <Form className="d-flex">
                <Button className={classes.phoneButton}>+1-888-667-0970</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
     
      </Navbar>

    </>
  );
}

export default OffCanvasNavbar;
