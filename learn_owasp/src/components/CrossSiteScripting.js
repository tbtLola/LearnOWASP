// SOLUTION to reflection -> sanitize inputs or properly escape HTML characters-

import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  height: 1500px;
  h1 {
    text-align: center;
  }
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    .active,
    .accordion:hover {
      background-color: #ccc;
    }

    .panel {
      padding: 0 18px;
      display: none;
      background-color: white;
      overflow: hidden;
    }
  }
`;

const CrossSiteScripting = () => {
  return (
    <TitleStyle>
       <div className="headerDisplay">
      <h1>Cross Site Scripting</h1>
      </div>
      <button class="accordion">What is Cross Site Scripting?</button>
      <div class="panel">
        <p>
          Cross site scripting is a code injection attack on the client side.
          Malicious scripts are executed inside a web browser via a web
          application injected with the malicious code. Websites such as forums
          and blogs are common targets for carrying out cross-site scripting
          attacks. There are various forms of cross-site scripting attacks
          <h2>Non-persistent aka Reflected</h2>
          This is the simplest type of cross-site scripting vulnerability. The
          flaw occurs when the web client sends data via HTTP query parameters,
          which is directly parsed by server-side scripts and displayed on the
          UI for the user without any proper sanitization of the results. This
          type of attack begins when an input is sent by the client side, an
          injected malicious script is "reflected" from the web-server as a
          response to the input. The malicious script may cointain malicious
          code that executes on the user's web browser. Emails with shady URLs
          are a common entry point for these attacks.
          <br />
          Examples
          <br />
          <ol>
            <li>
              Victim clicks on a link
              'www.someVulnerableSite.com/search.asp?term=<span>&#60;</span>
              script<span>&#62;</span> alert('reflected malicious code'){" "}
              <span>&#60;</span>
              /script<span>&#62;</span>'
            </li>
            <li>A search query is triggered by this link to the server </li>
            <li>
              The server returns javascript code posted originally in the search
              query in addition to the search result.
            </li>
            <li>
              The user browser executes the script as it interprets it as a
              script.
            </li>
          </ol>
          <h2>Peristent or stored attacks</h2>
          Persistent attacks are a more permanent form of cross site scripting.
          Data injected by the attacker is stored by the server and permanently
          displayed on the UI. The vulnerability to this attack is present when
          websites store client-side input and later services this data to other
          users without validating user input before storing this data and
          having it embedded in HTML responses. These web pages are exploited by
          injecting malicious code through user input and having it stored for
          future attacks. The malicious payload is sent to the user via the
          servers as the browse the web application, there is no need for users
          to click on any links (as in non-persitent attacks).
          <br />
          Example:
          <ol>
            Say an attacker joins a dating site that only displays usernames,
            but the attacker wants to know the real names. The attacker could
            spin up a script to run on a user's browser every time they visit
            the attackers profile. This script can be designed to send a message
            to the attacker's server where they can collect this information.
            <li>
              Suppose when the attacker is creating their profile, there is an
              input asking them to describe their interests, and the attacker
              responds with a normal answer with a malicious script tagged at
              the end, which wont render on the UI as it is enclosed with the
              script tags.
            </li>
            <li>
              The user could stumble upon the attackers fake profile and the
              script would execute without the user knowing, sending data to the
              attacker's server.
            </li>
            As mentioned earlier, this form of cross-site scripting is more
            dangerous than non-persistent attacks as it does not require users
            to click on any malicious links.
          </ol>
          <h2>DOM Cross Site Scripting</h2>
          DOM stands for Document Object Model. DOM is a model used to represent
          objects in HTML documents. HTML documents will have a respective DOM
          element that is comprised of objects that represent properties of the
          documents from the browsers perspective. The execution of client-side
          scripts may use the DOM of an HTML page. Attackers commonly use DOM
          objects as an entry point for this attack if there is no proper
          sanitization when the data is written by the web application to the
          DOM. Data could be maliciously manipulated to include malicious
          javascript code as a part cross site scripting.
        </p>
      </div>

      <button class="accordion">Examples of Cross Site Scripting</button>
      <div class="panel">
        <p>
          <h2>ex1</h2>
          lorem ipsum
        </p>
        <p>
          <h2>ex2</h2>
          lorem upsum
        </p>
        <h2>ex3</h2>
        <p>lorem ipsum</p>
      </div>

      <button class="accordion">
        Protection against Security Misconfigurations
      </button>
      <div class="panel">
        <p>
          There are numerous ways to protect against security misconfigurations.
          Organizations typically configure development, QA, and production
          environments to be identical, that way there is no confusion of the
          overall configurations. Having tight security and maintaining it on a
          test site is important because it will translate over to production as
          well. Having these configurations will simplify the process of setting
          up a new environment as these security details are clearly specified
          and understood.
        </p>
      </div>
    </TitleStyle>
  );
};

export default CrossSiteScripting;
