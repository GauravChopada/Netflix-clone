// import logo from './logo.svg';
import './App.css';
import logo from './images/logo.png';
import down_icon from './images/down-icon.png';
import f1 from './images/feature-1.png';
import f2 from './images/feature-2.png';
import f3 from './images/feature-3.png';
import f4 from './images/feature-4.png';

import React, { Component } from 'react'
//Netflix clone.............
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='header-content'>
          <div className='header'>
            <div>
              <img className='img1' src={logo} alt='netflix'></img>
            </div>
            <div className='asideHeader'>
              <div>
                <button type='button' className='lngdl'> English <img className='down-icon' src={down_icon} alt=''></img></button>
              </div>
              <div className='btn1'>
                <button type="button" className="signinBtn">Sign In</button>
              </div>
            </div>

          </div>

          <div className='content1'>

            <h1 className='h11'>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h2 className='h22'>Ready to watch? Enter your email to create or restart your membership.</h2>
            <div className='emailbuttonSection'>
              <input className='emailinput' type='text' placeholder='Email address' color='white'></input>
              <div>
                <button type="button" className="btn2">Get Started </button>
              </div>
            </div>
          </div>
        </div>
        <div className='space'></div>
        <div className='content2'>
          <div className='content2text'>

            <div className='t11'>Enjoy on your TV.</div>
            <div className='t22' >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
          </div>
          <div className='img2box'>
            <img className='img2' src={f1} alt=''></img>
          </div>
        </div>
        <div className='space'></div>
        <div className='content2'>
          <div className='img2box'>
            <img className='img2' src={f2} alt=''></img>
          </div>
          <div className='content2text'>

            <div className='t11'>Download your shows to watch offline.</div>
            <div className='t22' >Save your favourites easily and always have something to watch.</div>
          </div>

        </div>
        <div className='space'></div>
        <div className='content2'>
          <div className='content2text'>

            <div className='t11'>Watch everywhere.</div>
            <div className='t22' >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div></div>
          <div className='img2box'>
            <img className='img2' src={f3} alt=''></img>
          </div>
        </div>
        <div className='space'></div>
        <div className='content2'>
          <div className='img2box'>
            <img className='img2' src={f4} alt=''></img>
          </div>
          <div className='content2text'>

            <div className='t11'>Create profiles for children.</div>
            <div className='t22' >Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div></div>
        </div>
        <div className='space'></div>
        <div className='content3'>
          <div className='t44'>Frequently Asked Questions</div>
          <div className='questions'>
            <div className='t33'>What is Netfllix?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className='questions'>
            <div className='t33'>How much does Netflix cost?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className='questions'>
            <div className='t33'>Where can I watch?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className='questions'>
            <div className='t33'>How do I cancel?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className='questions'>
            <div className='t33'>What can I watch on Netflix?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className='questions'>
            <div className='t33'>Is Netflix good for kids?</div>
            <div><button className='btn3'>+</button>
            </div>
          </div>
          <div className="t22 m33">Ready to watch? Enter your email to create or restart your membership.</div>
          <div className='emailbuttonSection'>

            <div>
              <input className='emailinput' type='text' placeholder='Email address' color='white'></input>
            </div>
            <div>
              <button type="button" className="btn2">Get Started </button>
            </div>
          </div>
        </div>
        <div className='space'></div>
        <div className='content4'>
          <div>Questions? Call 000-800-919-1694</div>
          <div className='gridbase'>
            <div className='griditem'><a>FAQ</a></div>
            <div className='griditem'>Help Centre</div>
            <div className='griditem'>Account</div>
            <div className='griditem'>Media Centre</div>
            <div className='griditem'>Investor Relations</div>
            <div className='griditem'>Jobs</div>
            <div className='griditem'>Ways to Watch</div>
            <div className='griditem'>Terms of Use</div>
            <div className='griditem'>Privacy</div>
            <div className='griditem'>Cookie Preferences</div>
            <div className='griditem'>Xorporate Information</div>
            <div className='griditem'>Contact Us</div>
            <div className='griditem'>Speed Test</div>
            <div className='griditem'>Legal Notices</div>
            <div className='griditem'>Only on Netflix</div>
          </div>
          <div>
            <button type='button' className='lngdl2'> English <img className='down-icon2' src={down_icon} alt=''></img></button>
          </div>

          <div className='last'>Netflix India | Clone created by <a href='https://github.com/GauravChopada' color='red'>@Gaurav Chopda</a></div>
        </div>
      </div>
    )
  }
}

