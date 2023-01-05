import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navigation.m.scss";

export const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Students Helper</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Главная</Link>
          <Link to="/materials">Материалы</Link>
          <Link to="/about">О Нас</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
