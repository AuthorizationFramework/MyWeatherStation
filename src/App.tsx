import * as React from 'react';
import './App.css';
import Banner from './landingPage/Banner/Banner';
import Footer from './landingPage/Footer/Footer';
import UseOne from './landingPage/use1/use1';
import UseTwo from './landingPage/use2/use2';
import UseThree from './landingPage/use3/use3';
import UseFour from './landingPage/use4/use4';
import UseFive from './landingPage/use5/use5';

class App extends React.Component {
  public render() {
    return (
      <div className="wholeArea?">
        <>
          <div className="banner">
            <Banner/>
          </div>
        </>
        <>
          <div className="useone">
            <UseOne/>
          </div>
        </>
        <>
          <div className="usetwo">
            <UseTwo/>
          </div>
        </>
        <>
          <div className="usethree">
            <UseThree/>
          </div>
        </>
        <>
          <div className="usefour">
            <UseFour/>
          </div>
        </>
        <>
          <div className="usefive">
            <UseFive/>
          </div>
        </>
        <>
          <div className="footer">
            <Footer/>
          </div>
        </>
      </div>
    );
  }
}

export default App;