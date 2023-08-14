import React, { Component } from 'react'  
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'  
export class Loaderdemo extends Component {  
    render() {  
        return (  
            <div>  
                <div class="ui blue inverted three item menu">  
                    <a class="item">Semantic UI Loader</a>  
                </div>  
                <Segment>  
                    <Dimmer active>  
                        <Loader />  
                    </Dimmer>  
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />  
                </Segment>  
            </div>  
        )  
    }  
}  
  
export default Loaderdemo  