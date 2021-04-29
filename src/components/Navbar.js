import React from 'react';

import logo from '../assets/img/logo_long.png'

import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    Nav,
    Container,
    Row,
    Col, NavItem
} from 'reactstrap';

import {
    Link
} from 'react-router-dom';

export default function OSNav() {
    return (
        <>
            <Navbar
                className="navbar-horizontal navbar-dark os-bg-prim"
                expand="lg"
            >
                <Container>
                    <NavbarBrand href="#pablo" onClick={e => e.preventDefault() }>
                        <Link to="/">
                            <img
                                alt="OneStep Logo"
                                src={ logo }
                            />
                        </Link>
                    </NavbarBrand>
                    <button
                        aria-controls="navbar-default"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-default"
                        data-toggle="collapse"
                        id="navbar-default"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-default">
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to='/'>
                                        <img
                                            alt="OneStep Logo"
                                            src={ logo }
                                        />
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button
                                        aria-controls="navbar-default"
                                        aria-expanded={ false }
                                        aria-label="Toggle navigation"
                                        className="os-wh navbar-toggler"
                                        data-target="#navbar-default"
                                        data-toggle="collapse"
                                        id="navbar-default"
                                        type="button"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-lg-auto" navbar>
                            <NavItem>
                                <Link to="/" className="os-nav-item">
                                    DOMOV
                                </Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/posts" className="os-nav-item">
                                    OBJAVE
                                </Link>
                            </NavItem>

                            <NavItem>
                                <a href="https://bans.onestep.si/" target="_blank" rel="noreferrer" className="os-nav-item">
                                    BANS
                                </a>
                            </NavItem>

                            <NavItem>
                                <Link to="/about" className="os-nav-item">
                                    O NAS
                                </Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/login" className="os-nav-item">
                                    PROFIL
                                </Link>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
    );
}