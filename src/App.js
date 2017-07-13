import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
//pulls the compiled sass sheet 
import './App.css';
//pulls the imported data
import './data';

//var ReactRouter = require('react-router');
//var browserHistory = ReactRouter.browserHistory;
//var Route = ReactRouter.Route;
//var Router = ReactRouter.Router;
//var Link = ReactRouter.Link;

/*
var Loginview = React.createClass({
  
renderloginView:function(){
  return <Loginview />;
},

render:function(){
  return(
    <div className="loginArea">
    <form id="formLogin" className="loginForm">
    <input id="formUserName" className="formUserName" placeholder="Username" type="text"></input>
    <input id="formPassword" className="formPassword" placeholder="Password" type="password"></input>
    <button id="formEnterButton">Login </button>
    </form>
    </div>

  )
}


});

*/



 //top nav
var App = React.createClass({
  render:function() {
    return (
      <div className="App">
        <div className="App-header">
    
         <nav id="HeaderNav" classname="HeaderNav">
         <button className="button">Workspace</button> 
         <button className="button">User Manager</button> 
         <button className="button">Git</button> 
         <button className="button">Media Manager</button>
         <button className="button">Analytics</button>
         <button className="button">Settings</button>
         <button className="button">Notifications</button>
         <button className="button">User Info</button>
         </nav>
        </div>
      </div>
    )
  }
});



//sub navigation for the story types
var Submenu = React.createClass({
  renderSubmenu:function(){
    return <Submenu />;
  },
  
  render: function(){
    return(
       <div className="Submenu">
         <nav id="SubMenuNav" classname="SubmenuNav">
         <button className="button">Object Builder</button> 
         <button className="button">CSS Builder</button> 
         <button className="button">JS Builder</button> 
         <button className="button">Interface </button>
         </nav>

        </div>

    )
  }
});




//left sidebar menu 
var SidebarMenu = React.createClass({
    filterList: function(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList})
    },
    getInitialState: function() {
        return {
            initialItems: [
                "_onLoadMethod",
                "_GetDataMethod",
                "_GotDataMethod",
                "_referenceMethod",
                "_introViewMethod",
                "_ListLoadedMethod",
                "_dataCompletedMethod",
                "_onCompleteLoadMethod",
                "_loadUserDataMethod",
                "_onLoadMethod",
                "_parseDataMethod",

            ],
            items: []
        };
    },
    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },
    render: function() {
        return (
            <div className="filterlist">
                <input className="filteredListSearch" type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        );
    }
});

var List = React.createClass({
    render: function(){
        return (<ul> {
                    this.props.items.map(function(item) {
                    return <li key={item}>{item}</li>
                })
                }
            </ul>);
    }
});


//right hand content area
var Content = React.createClass({
  renderContent:function(){
    return <Content />;
  },
  render: function(){
    return(
       <div className="Content">
       <textarea className="ContentAreaTextArea">This is where the content goes</textarea>
       <button>Save</button><button>Cancel</button>

        </div>

    )
  }
});



// this is the footer
var Footer = React.createClass({
  renderFooter:function(){
    return <Footer />;
  },

  render: function(){
    return(
       <div className="Footer">
           <div className="footerColumn">
           <p>This is column one</p>
           </div>
           <div className="footerColumn">
           <p>This is column Two</p>
           </div>
           <div className="footerColumn">
           <p>This is column Three</p>
           </div>

    </div>

    )
  }
});



//render dom areas should be able to get this down to 1 render 
//ReactDOM.render(<Loginview />, document.getElementById('loginview'));
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Submenu />, document.getElementById('submenu'));
ReactDOM.render(<SidebarMenu />, document.getElementById('sidebar'));