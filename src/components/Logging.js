import React from 'react'
import '../css/Logging.css'

class Logging extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log : []
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        
        let arr = prevState.log.slice();
        let txtStart = "";
        switch (nextProps.phase) {
            case 1: txtStart = "Recommandation Results"; break;
            case 2: txtStart ="HoneyPot Results"; break;
            case 3: txtStart="CNN Results"; break;
            default:
              break;
          }
        let preparedLine = null;
        if(nextProps.data !== null) {
           let txt =(<span className="txtStart">{txtStart} :</span>);
           let time =(<span className="txtDate">{(new Date()).toLocaleString()} :</span>);
           let conent = (<span className="txtData">{nextProps.data }</span>);
         preparedLine = (<span>{txt}<br />{time}<br />{conent}</span>);
        }
        arr.push(preparedLine);

        return {
            log :  arr
        };
    }
    
    
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
    scrollToBottom() {
        this.el.scrollTop = this.el.scrollHeight;
      }
   
    render = () => {
            return (
                <div className="logging-container">
                    <span className="log-title">Log results</span>
                    <div class="logging" ref={el => { this.el = el; }} >
                        {this.state.log.map(item => (
                            <span ><pre >{item}</pre><br /></span>
                        ))}
                    </div>
                </div> );
        }
}

export default Logging;