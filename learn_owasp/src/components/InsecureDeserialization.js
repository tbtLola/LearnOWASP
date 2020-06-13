import React from "react";
import styled from "styled-components";
import Employee from "../images/Employee.png";
import UserObjectDeserializer from "../images/UserObjectDeserializer.png";
import UserObjectSerializer from "../images/UserObjectSerializer.png";

const TitleStyle = styled.div`
  height: 2500px;
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
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

const InsecureDeserialization = () => {
  return (
    <TitleStyle>
      <h1>Insecure Deserialization</h1>
      <button class="accordion">What is Insecure Deserialization?</button>
      <div class="panel">
        <p>
          Serialization in the context of software development is the process of
          converting an object into a stream of bytes. The purpose of this is
          that it is in a format that can be transmitted to memory, a database
          or a different file. The state of the object is saved until it is
          deserialized. There are numerous different formats the an object can
          be serialized to such as XML, JSON, or YAML. Serialization is a common
          practice in software development, this becomes a problem when unsafe
          streams are being deserialized. Attackers can exploit flaws in
          insecure deserialization, especially when they set up untrusted inputs
          to be deserialized in the web application, which could lead to a
          denial-of-service attack, infiltrating authentication, and remote
          exuection of malicious code.
        </p>
      </div>

      <button class="accordion">Examples of Insecure Deserialization</button>
      <div class="panel">
        <p>
          <h2>Example #1</h2>
          Below is a simple Employee.java class, with various setters and
          getters methods for the username and password. (A poor design).
          <img src={Employee} alt="employee" />
          In the UserObjectSerializer.java class we start by:
          <ol>
            <li>Setting up the user</li>
            <li>Followed by writing the user object to user.txt</li>
            <li>Serializing the user object</li>
          </ol>
          <img src={UserObjectSerializer} alt="employee" />
          In the UserObjectDeserializer is where the insecure deserialization
          flaw occurs.
          <ol>
            <li>
              The object is read from the file, ideally it would take in the
              user.txt file
            </li>
            <li>
              This file is deserialized, where the attacker could mock out a
              fake user.txt that is accepted by this method, and deserialized
              into malicious code. It is being deserialized without any form of
              verification.
            </li>
          </ol>
          <img src={UserObjectDeserializer} alt="employee" />
        </p>
      </div>

      <button class="accordion">Preventing Insecure Deserialization</button>
      <div class="panel">
        <p>
          To protect against attacks from insecure deserialization, a developer
          would implement SECURE deserialization. That is, the developer should
          verify and validate data before or at the time of deserialization in
          order to catch the malicious code before it gets a chance to execute.
          There are numerous ways to integrate verification of data before
          deserialization:
          <ol>
            <li>Implementing digital signatures or checksums</li>
            <li>
              Write an overloaded method for a deserializer class to have custom
              verification for expectations
            </li>
            <li>
              Additional logging to notify on the user console for any
              exceptions that may occur during deserialization. This ties to a
              another vulnerability on OWASP's radar, Insufficient logging and
              monitoring. If there is an unsually high activity of
              deserialization, then alerting could allow the dev ops to
              investigate before damage is being done.
            </li>
          </ol>
        </p>
      </div>
    </TitleStyle>
  );
};

export default InsecureDeserialization;
