import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


function App() {
  const [tags, setTags] = useState([]);
  const [showColleges, setShowColleges] = useState(false);

  function handleChange(tags) {
    setTags(tags);
  }

  function handleClick() {
    setShowColleges(true);
  }

  function handleChange(tags) {
    setTags(tags);
  }
  return (
    <div className="App">
      <header><h3>P-COLLEGES</h3></header>
      <div className="page-holder">
        <div className="user-input">
          <div className="check-box-holder">
            <h5>Pick your labels:</h5>
            <Checkbox color="success" shape="curve" variant="thick">
              Athletic</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              Social</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              Academics</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              location</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              Affordability</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              Prestige</Checkbox>
            <Checkbox color="success" shape="curve" variant="thick">
              Environment</Checkbox>
          </div>
          <div className="college-names-holder">
            <h5>Enter your college names:</h5>
            <div>
              <br />
              <TagsInput value={tags} onChange={handleChange} />
            </div>
          </div>
        </div>
        <Button variant="outline-success" onClick={handleClick}>Submit</Button>{' '}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {showColleges && (
        <div>
          <h2 className="header">10 Recommended Colleges</h2>
          <div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>University of California Los Angeles (UCLA)</Accordion.Header>
                <Accordion.Body className="box">
                  <div>
                    <h2>Social</h2>
                    <img src="/img/social_ucla.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Academics</h2>
                    <img src="/img/social_ucla.png" alt="UCLA social media icon" />
                  </div>
                  <div>

                    <h2>Location</h2>
                    <img src="/img/location_ucla.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Prestige</h2>
                    <img src="/img/prestige_ucla.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Environment</h2>
                    <img src="/img/environment_ucla.png" alt="UCLA social media icon" />
                  </div>


                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Stanford University</Accordion.Header>
                <Accordion.Body className="box">
                  <div>
                    <h2>Athletics</h2>
                    <img src="/img/athletics_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Social</h2>
                    <img src="/img/social_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Academics</h2>
                    <img src="/img/social_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Location</h2>
                    <img src="/img/location_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Prestige</h2>
                    <img src="/img/prestige_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Affordability</h2>
                    <img src="/img/affordability_stanford.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Environment</h2>
                    <img src="/img/environment_stanford.png" alt="UCLA social media icon" />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Pomona College</Accordion.Header>
                <Accordion.Body className="box">
                  <div>
                    <h2>Social</h2>
                    <img src="/img/social_pomona.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Academics</h2>
                    <img src="/img/social_pomona.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Location</h2>
                    <img src="/img/location_pomona.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Environment</h2>
                    <img src="/img/environment_pomona.png" alt="UCLA social media icon" />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Hamilton College</Accordion.Header>
                <Accordion.Body className="box">
                  <div>
                    <h2>Athletics</h2>
                    <img src="/img/athletics_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Social</h2>
                    <img src="/img/social_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Academics</h2>
                    <img src="/img/social_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Location</h2>
                    <img src="/img/location_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Prestige</h2>
                    <img src="/img/prestige_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Affordability</h2>
                    <img src="/img/affordability_hamilton.png" alt="UCLA social media icon" />
                  </div>
                  <div>
                    <h2>Environment</h2>
                    <img src="/img/environment_hamilton.png" alt="UCLA social media icon" />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>University of Chicago</Accordion.Header>
                <Accordion.Body>

                  <h2>Social</h2>
                  <img src="/img/social_uchicago.png" alt="UCLA social media icon" />
                  <h2>Academics</h2>
                  <img src="/img/social_uchicago.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_uchicago.png" alt="UCLA social media icon" />
                  <h2>Prestige</h2>
                  <img src="/img/prestige_uchicago.png" alt="UCLA social media icon" />

                  <h2>Environment</h2>
                  <img src="/img/environment_uchicago.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>University of Rochester</Accordion.Header>
                <Accordion.Body>

                  <h2>Social</h2>
                  <img src="/img/social_urochester.png" alt="UCLA social media icon" />
                  <h2>Academics</h2>
                  <img src="/img/social_urochester.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_urochester.png" alt="UCLA social media icon" />
                  <h2>Prestige</h2>
                  <img src="/img/prestige_urochester.png" alt="UCLA social media icon" />

                  <h2>Environment</h2>
                  <img src="/img/environment_urochester.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Bucknell University</Accordion.Header>
                <Accordion.Body>
                  <h2>Athletics</h2>
                  <img src="/img/social_bucknell.png" alt="UCLA social media icon" />
                  <h2>Social</h2>
                  <img src="/img/social_bucknell.png" alt="UCLA social media icon" />
                  <h2>Academics</h2>
                  <img src="/img/social_bucknell.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_bucknell.png" alt="UCLA social media icon" />
                  <h2>Affordability</h2>
                  <img src="/img/affordability_bucknell.png" alt="UCLA social media icon" />
                  <h2>Environment</h2>
                  <img src="/img/environment_bucknell.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Harvard University</Accordion.Header>
                <Accordion.Body>

                  <h2>Academics</h2>
                  <img src="/img/academics_harvard.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_harvard.png" alt="UCLA social media icon" />
                  <h2>Prestige</h2>
                  <img src="/img/affordability_harvard.png" alt="UCLA social media icon" />

                  <h2>Affordability</h2>
                  <img src="/img/affordability_harvard.png" alt="UCLA social media icon" />
                  <h2>Environment</h2>
                  <img src="/img/environment_harvard.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Brown University</Accordion.Header>
                <Accordion.Body>
                  <h2>Athletics</h2>
                  <img src="/img/social_brown.png" alt="UCLA social media icon" />
                  <h2>Social</h2>
                  <img src="/img/social_brown.png" alt="UCLA social media icon" />
                  <h2>Academics</h2>
                  <img src="/img/social_brown.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_brown.png" alt="UCLA social media icon" />
                  <h2>Prestige</h2>
                  <img src="/img/prestige_brown.png" alt="UCLA social media icon" />
                  <h2>Affordability</h2>
                  <img src="/img/affordability_brown.png" alt="UCLA social media icon" />
                  <h2>Environment</h2>
                  <img src="/img/environment_brown.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>University of Wisconsin - Madison</Accordion.Header>
                <Accordion.Body>

                  <h2>Social</h2>
                  <img src="/img/social_uw.png" alt="UCLA social media icon" />
                  <h2>Academics</h2>
                  <img src="/img/social_uw.png" alt="UCLA social media icon" />
                  <h2>Location</h2>
                  <img src="/img/location_uw.png" alt="UCLA social media icon" />
                  <h2>Prestige</h2>
                  <img src="/img/prestige_uw.png" alt="UCLA social media icon" />
                  <h2>Affordability</h2>
                  <img src="/img/affordability_uw.png" alt="UCLA social media icon" />
                  <h2>Environment</h2>
                  <img src="/img/environment_uw.png" alt="UCLA social media icon" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" />
            <img src="https://picsum.photos/200" alt="random image" /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
