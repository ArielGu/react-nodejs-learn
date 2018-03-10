var React = require('react');
var ReactDOM = require("react-dom");
var store=require("../../store/main");

class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messageList:[]
        }
        this.getData();
    }

    getData(){
        const self=this;
        store.getAllData(function(data){
            const messageList=data.map(function(item){
                return item.Message;
            });
            self.setState({
                messageList,
            });
        })
    }

    render(){
        const {messageList}=this.state;
        return (
            <div>
                <h2>MessageList:</h2>
                <ul>
                {
                    messageList.map(function(message,index){
                        return <li key={index}>{message}</li>
                    })
                }
                </ul>
            </div>)
    }
}

ReactDOM.render(<MessageList/>,document.getElementById('main-container'));