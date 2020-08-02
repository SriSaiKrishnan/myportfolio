import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Sri Sai Krishnan V</h2>
                <img
                  src="https://github.com/SriSaiKrishnan/myportfolio/blob/master/src/DP.jpeg?raw=true"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' , fontFamily: 'Oxygen'}}>I am an experienced Software Engineer in Test that includes Test Plan, Test Case Creation, Defect Management, STLC, Web-based testing, Mobility testing, Agile Methodologies, DevOps across different domains. 
                   Expertise in automating the Web & Mobile Application tests that include Selenium, JUnit, TestNG, Appium, Cucumber, Jenkins, Java, Concordian, Selenide, Protractor.
            Experienced in the testing of Education, Healthcare, Retail Banking domains.</p>
    
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
    
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (+91) 8056200680
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        (044) 49583199
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        krishnansai99@gmail.com
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        saikrish738
                      </ListItemContent>
                    </ListItem>
    
    
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Contact;