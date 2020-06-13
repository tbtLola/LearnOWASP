// TODO// SET UP DATABASE WITH EMPLOYEE ID, LET THEM RUN THE QUERY
// ADD BUTTON TO ENTER THE EMPLOYEEID

import { InputGroup, FormControl } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import sqlinjectionOne from "../images/sqlinjectionOne.png";

const TitleStyle = styled.div`
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    padding-left: 20px;
  }
  img {
    padding-left: 550px;
  }
  .mb-3 {
    text-align: center;
  }
  table td{
    vertical-align:top;
  }
  .vulnerableSQL {
    width: 50%;
    border-right:solid;
    border-right-color:red;

  }
  .protectedSQL {
    width: 50%;
    border-left:solid;
    border-left-color: blue; 
  }
  .codeContainer {
    background-color: lightgrey;
  }
`;

const SQLInjections = () => {
  return (
    <TitleStyle>
      <h1>SQL Injections</h1>
      <div className="textBoxOne">
        <p>
          SQL injection is an attack on the database through an 'injection' of a
          SQL query, often performed on websites without safe-guards in place
          around inputs. The attacker performing this attack can cause malicious
          commands to be executed or gain access to data without authorization.
          <br />
          <br />
          Where there are inputs on a website, any attacker can enter a SQL
          query (if the backend framework is built using SQL), that would run in
          your database unknowingly.
        </p>
        <img src={sqlinjectionOne} alt="figureOne" />
        <p>
          Figure one above is a simplified diagram of how a SQL injection can
          work. Attackers can inject broken malicious instructions, these
          instructions are parsed and fed to an query expecting further input
          before being applied to the database.
        </p>

        <table>
          <tbody>
            <tr>
              <th>
                <h1>Examples of dangerous usages of inputs in SQL statement</h1>
              </th>
              <th>
                <h1>Protection against SQL Injections</h1>
              </th>
            </tr>
            <tr>
              <td className="vulnerableSQL">
                <h2>Exploiting 1 = 1 is always true</h2>
                <p>
                  Consider a java string variable with the SQL statement:
                  <br />
                  <br />
                  <code>String employeeId = getEmployeeId(); </code>
                  <br />
                  <code>
                    String selectUserSql = "SELECT * FROM employees WHERE
                    employeeID = " + employeeID;{" "}
                  </code>
                </p>
                <p>
                  This query may seem harmless. But if an attacker entered the
                  following in the input as shown below:
                  <br />
                  <br />
                  <code>112345 OR 1 = 1</code>
                  <br />
                  Try it for yourself, and see what happens!
                </p>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend></InputGroup.Prepend>
                  <FormControl
                    placeholder="Employee ID"
                    aria-label="Employee ID"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <p>
                  This could be dangerous as the employees table could contain
                  other sensitive information susch as SSN/GIN or addresses
                </p>
                <h2>Exploiting '=' is always true</h2>
                
                  Consider a java string variable with the SQL statement:
                  <br />
                  <br />
                  <div className="codeContainer">
                    <code>String username = getUsername("username");</code>
                    <br />
                    <code>
                      String userPassword = getPassword("userpassword");
                    </code>
                    <br />
                    <code>
                      String sql = 'SELECT * FROM employees WHERE name ="' +
                      username + '" AND password ="' + userPassword + '"';
                    </code>
                  </div>
                  <br />
                  The result would look like:
                  <br />
                  <code>
                    SELECT * FROM employees WHERE name = "Tony Tea" AND password
                    = "poorPassword"
                  </code>
                  <br />
                  <p>
                    Since OR ""="" is always a true statement, a hacker could
                    enter that into the input to retrieve information.
                  </p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      placeholder="username"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      placeholder="password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                
                <h2>Exploiting SQL databases that support multiple queries</h2>
                <p>
                  Some SQL databases will support multiple queries in a single
                  execution, each separated by a semi-colon character. an
                  attacker can excecute this to modify the database instead of
                  retrieving unauthorized data. An example of this would be
                  inserting the data requested in the input followed by another
                  SQL command.
                  <br />
                </p>
              </td>
              <td className="protectedSQL">
                <h2>Prepared Statements</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TitleStyle>
  );
};

export default SQLInjections;
