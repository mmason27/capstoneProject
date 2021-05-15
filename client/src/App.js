import './Components/CSS/App.css';
import React from 'react';
import TinyHomeChecklist from './Components/TinyHomeChecklist'
import UploadForm from './Components/UploadForm';
import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";
import PhotoGalleryDisplay from "./Components/PhotoGalleryDisplay"
import CommunityForum from './Components/CommunityForum';
<<<<<<< HEAD
import ForumHeader from './Components/ForumHeader';
import './Components/CSS/PhotoGallery.css'


=======
import EducateHomepage from "./Components/EducateHomepage";
>>>>>>> master

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter> 
          <Switch>
              <Route exact path="/" component={App}>
                  <Header/>
                  <Home/>
                  <Footer/>
                </Route>
                <Route exact path="/about-us" component={AboutUs}>
                  <Header/>
                  <AboutUs/>
                  <Footer/>
                </Route>
                <Route exact path="/TinyHomeChecklist" component= {TinyHomeChecklist}>
                  <Header/>
                  <TinyHomeChecklist/>
                </Route>
                <Route exact path ="/PhotoGallery" component= {PhotoGalleryDisplay}>
                  <Header/>
                  <UploadForm />
                  <PhotoGalleryDisplay />
                </Route>
                <Route exact path="/communityforum" component={CommunityForum}>
                  <CommunityForum/>
                  <Footer/>
                </Route>
                <Route exact path="/educationalresources">
                  <Header/>
                  <EducateHomepage/>
                  <Footer/>
                </Route>
          </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
