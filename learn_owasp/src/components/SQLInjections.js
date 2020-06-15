// TODO// SET UP DATABASE WITH EMPLOYEE ID, LET THEM RUN THE QUERY
// ADD BUTTON TO ENTER THE EMPLOYEEID

import { InputGroup, FormControl } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import sqlinjectionOne from "../images/sqlinjectionOne.png";
import sqlinjectionTwo from "../images/SqlInjectionTwo.png";
import sqlinjectionThree from "../images/SqlInjectionThree.png";
import sqlinjectionFour from "../images/SqlInjectionFour.png";
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
    font-size: 50px;
  }
  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const SQLInjections = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>1. SQL Injections</h1>
      </div>
      <div className="mainBody">
        <Accordion
          title="What is a SQL Injection?"
          definition=" SQL injection is an attack on the database through an 'injection' of a
          SQL query, often performed on websites without safe-guards in place
          around inputs. The attacker performing this attack can cause malicious
          commands to be executed or gain access to data without authorization.
          Where there are inputs on a website, any attacker can enter a SQL
          query (if the backend framework is built using SQL), that would run in
          your database unknowingly. The figure below is a simplified diagram of how a SQL injection can
          work. Attackers can inject broken malicious instructions, these
          instructions are parsed and fed to an query expecting further input
          before being applied to the database."
          image={sqlinjectionOne}
        />
        <Accordion
          title="Examples of SQL Injection"
          content=""
          subheading="Exploiting 1 = 1 is always true"
          definition="Consider the java exercpt below. There is a method that could be used to query the database.
           This set up may seem harmless but attackers could exploit the way that this query is written. If this is
           the way information is retrieved when a user enters their employee ID into an input, they can use the
           property that 1 = 1 is always true to possibly get other information. Suppose that this query renders the
           response on the front end. A user for example could enter '133t OR 1 = 1' in an input box and have the
           response display sensitive information tied to the table from the query onto the front end. 
           This in a way ties to other vulnerabilities that will be discussed on this site."
          image={sqlinjectionTwo}
          subheadingTwo="Exploiting '=' is always true"
          definitionTwo="Similar to the above, the statement OR = is always true. In this case a user could enter that
           into an input box and possibly steal personal data"
          imageTwo={sqlinjectionThree}
          subheadingThree="Exploiting SQL databases that support multiple queries"
          definitionThree="Databases that support batched queries can be prone to a different form of SQL injection.
         Specifically, attackers add an additional query as a part of the input to do something malicious to the backend. 
         For example, consider the snippet below. The attacker could enter in an employee id followed by a ';' semi-colon to
         separate it with a different query or command such as 'DROP TABLE companyInformation' which would change the schema."
          imageThree={sqlinjectionFour}
        />
        <Accordion
          title="Preventing SQL Injection "
          content=""
          definition="Input sanitization is often brought up when discussing protection against web vulnerabilities. Validation against what 
         is being entered by the user could prevent malicious SQL from being executed in the database. Developers could reject suspicious inputs.
         For example, the 'OR 1=1' added the an end of the input could be rejected if it is detected. Matching regular expressions is another way to 
         filter out suspicious inputs."
        />
      </div>

      {/* <div className="textBoxOne">
  
               
                
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
      </div> */}
    </TitleStyle>
  );
};

export default SQLInjections;
