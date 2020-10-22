import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreatePodcast from "./components/CreatePodcast/CreatePodcast";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/create" component={CreatePodcast} />
      <Footer />
    </BrowserRouter>
  );
}
