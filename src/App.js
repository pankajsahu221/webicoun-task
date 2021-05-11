import "./App.css";
import Header from "./Components/Header";
import BlogPage from "./Components/BlogPage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import BlogData from "./Components/BlogData";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/experts" exact component={Home} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/login" exact component={Home} />
          <Route path="/blogdata/:id" exact component={BlogData} />
          <Route path="/" component={BlogPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
