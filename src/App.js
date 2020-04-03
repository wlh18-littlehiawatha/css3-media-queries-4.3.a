import React, { Component } from 'react';
import './reset.css'
import './App.css';
import { render } from '@testing-library/react';


// https://blackrockdigital.github.io/startbootstrap-agency/

//link to website listed above
class App extends Component {


  render() {
    return (
      <div className="App">



        <section className={"mainComponent"}>
          <header>
            <div className={"startBootstrap"}>Start Bootstrap</div>

            <nav>
              <ul className="desktop-nav">
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
            </nav>

          </header>

          <div className="content1">
            <h2 className="secondaryTitle">Welcome To Our Studio!</h2>
            <h1 className="mainTitle">IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>


        </section>

      </div>
    );
  }
}


export default App;



// ------------------------------->  layout if I were to do this for my NoDB project <---------------


// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {

//     }
//     // bind here when necessary
//   }



//   render(){

//     return(
//       <div>



//   {/* are these supposed to be more of a file path format? */}
//           <MainComponent />
//           <Services />
//           <Portfolio />
//           <About />
//           <Team />
//           <Contact />


//       </div>
//     )
//   }

// }  

// export default App;


