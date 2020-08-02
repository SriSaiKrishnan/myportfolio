import React, { Component} from 'react';

import { Grid, Cell } from 'react-mdl'  

class Landing extends Component {
    render() {
        return(
           <div style = {{width: '100%', margin: 'auto'}}>
               <Grid className = "landing-grid">
                   <Cell col = {12} >
                   <img src = "https://github.com/SriSaiKrishnan/myportfolio/blob/master/src/DP.jpeg?raw=true"
                   alt = "avater"
                   className = "avatar-img">
                   </img>
                   <div className="banner-text">
                       <h1>Full Stack QA Engineer</h1>

                       <hr />

                       <p> HTML | Java | Javascript | Typescript | Rest API | Selenium | Appium | Protractor</p>

                       <div className="social-links">

                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/sri-sai-krishnan-v-21a212103/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/SriSaiKrishnan" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                         {/* Hacker Rank */}
                         <a href="https://www.hackerrank.com/krishnansai99" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-fire" aria-hidden="true" />
                        </a>
                       </div>
                   </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Landing;