import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
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

const SecurityMisconfigurations = () => {
  return (
    <TitleStyle>
      <h1>Security Misconfigurations</h1>
      <button class="accordion">What are security misconfigurations?</button>
      <div class="panel">
        <p>
          Security misconfiguration is the failure to implement or the
          accidental misconfiguration of security controls for a website or a
          server. These misconfigurations could be an oversight by the owner of
          the website, leaving the organization in a vulnerable state. Similar
          to broken access control, security misconfigurations occur more
          frequently as the system scales up. A common misconfiguration is
          leaving default configurations they way they are without making the
          necessary changes to accomodate the system, this is a flaw that
          hackers can take advantage of.
        </p>
      </div>

      <button class="accordion">Examples of Security Misconfigurations</button>
      <div class="panel">
        <p>
          <h2>Failure to set or misconfiguring default applications</h2>
          Suppose an application server is packaged with sample applications and
          before deployment into production, these sample applications are not
          removed. This is a vulnerability that attackers can exploit to
          compromise the server. For example, if the default password was not
          changed for these sample applications and the application itself
          happens to be a console specifically for admins, hackers can gain
          administrative access.
          <br />
          <br />
          Another example would be keeping default permissions the way they are,
          if these permissions are enabled for everyone then this could be
          porblematic as, sensitive data could also be prone to a compromise.
        </p>
        <p>
          <h2>
            Directories in the code repository is not disabled on the server
          </h2>
          This can be problematic, exposed source code to the hacker could mean
          that the hacker could steal these classes, attempt to reverse
          engineer, and locally deploy this code on their own machine. This
          gives the attacker some context of the domain which can provide them
          with an entry point for flaws in the application.
        </p>
        <h2>
          Application servers showing detailed error messages or stack traces
        </h2>
        <p>
          For figuring out went wrong in an application, most developers refer
          to the stack trace, assuming the application threw an error. If
          error-handling is not properly implemented, and the stack trace is
          simply revealed in the UI to all users, this can leak private
          information to those with malicious intent. This is another flaw that
          attackers can seek to exploit once they find it.
        </p>
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

export default SecurityMisconfigurations;
