import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";

const TitleStyle = styled.div`
   .headerDisplay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    margin-top: 0px;
    background-color: rgb(227, 255, 172);
    height: 133px;
    padding-bottom: 10px;
  }

  h1 {
    text-align: center;
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    padding-top: 50px;
    padding-left: 300px;
    text-align: center;
    font-size: 40px;
  }

  .mainBody {
    top: 250px;
    position: relative;
  }

  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const VulnerableComponents = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>9. Using Components with Known Vulnerabilities</h1>
      </div>
      <div className="mainBody">
        <Accordion title="What are Components with Known Vulnerabilities?"/>
        <Accordion title="Examples of Components with Known Vulnerabilities"/>
        <Accordion title="How to Protect against components with known vulnerabilities"/>
      </div>
      {/* <button class="accordion">
        What are components with known vulnerabilities?
      </button>
      <div class="panel">
        <p>
          Almost all web applications use external libraries and components to
          build their application. These external components are convenient to
          use and typically easy to integrate in to the web application to
          acheive desired functionality. External components and libraries are
          essentially applications written by outside entites, and they often
          have different version numbers. Libraries evolve over time to
          introduce knew functionalities in addition to patching bugs and
          security vulnerabilities. It is the organization's job to ensure that
          the libraries or components being used are up to date to ensure that
          there are no security flaws in that area. Vulnerable components can be
          exploited by automated tools.
        </p>
      </div>

      <button class="accordion">
        Flaws of using a components with known vulnerabilities
      </button>
      <div class="panel">
        <p>
          <h2>Using an outdated or deprecated library</h2>
          These issues are common. Developers often seek different libraries to
          integrate into the application, however if licenses are not updated,
          frameworks are not kept up to date, then there could be a flaw in the
          application. In some cases, developers may even seek to implement
          component-heavy development patterns and be unaware of what they are
          using, it is important to understand the tool before integrating it
          into a web application. Some scanners such as retire.js help with
          identifying vulnerable components, but not all tools work 100%. When
          working on personal projects, github will tend to send out
          notifications if for example, node modules are outdated.
        </p>
      </div>

      <button class="accordion">What to do</button>
      <div class="panel">
        <p>
          Obviously, keep your components up to date. As soon as a bug is
          discovered in the framework, make sure that the developrs are aware of
          this and is a priority in their backlog, especially if it is a
          dangerous flaw.
        </p>
      </div> */}
    </TitleStyle>
  );
};

export default VulnerableComponents;
