import React, { Component } from "react";
// import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <Footer />
      </>
    );
  }
}

export default App;
