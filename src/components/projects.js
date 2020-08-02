import React, { Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://seeklogo.com/images/S/selenium-logo-DB9103D7CF-seeklogo.com.png) center / cover'}} >React Project #1</CardTitle>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://seeklogo.com/images/S/selenium-logo-DB9103D7CF-seeklogo.com.png) center / cover'}} >React Project #2</CardTitle>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://seeklogo.com/images/S/selenium-logo-DB9103D7CF-seeklogo.com.png) center / cover'}} >React Project #3</CardTitle>
                  <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
        }else if(this.state.activeTab === 1){
            return(
              <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xebialabs.com/wp-content/uploads/files/tool-chest/appium.jpg) center / cover'}} >React Project #1</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xebialabs.com/wp-content/uploads/files/tool-chest/appium.jpg) center / cover'}} >React Project #2</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xebialabs.com/wp-content/uploads/files/tool-chest/appium.jpg) center / cover'}} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            )
        }else if(this.state.activeTab === 2){
            return(
              <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/blog.knoldus.com/wp-content/uploads/2020/02/restassured.png) center / cover'}} >React Project #1</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/blog.knoldus.com/wp-content/uploads/2020/02/restassured.png) center / cover'}} >React Project #2</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/blog.knoldus.com/wp-content/uploads/2020/02/restassured.png) center / cover'}} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            )
        }else if(this.state.activeTab === 3){
            return(
              <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo.png) center / cover'}} >React Project #1</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo.png) center / cover'}} >React Project #2</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: '2%'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo.png) center / cover'}} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            )
        }

    }

    render() {
        return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>Selenium</Tab>
                <Tab>Appium</Tab>
                <Tab>Rest API</Tab>
                <Tab>Java</Tab>
               </Tabs>

               <section className="projects-grid">
                   <Grid>
                       <Cell col={12}>
                      <div className="content">{this.toggleCategories()}</div> 
                       </Cell>
                   </Grid>
               </section>
           </div>
        )
    }
}

export default Projects;