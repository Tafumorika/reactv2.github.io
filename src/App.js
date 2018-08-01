import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="page-header">
              <header className="page-header">
                  <nav className="main-menu">
                      <ul className="head">
                          <li><a href="#home">Home</a></li>
                          <li><a href="#news">News</a></li>
                          <li><a href="#about">About</a></li>
                      </ul>
                  </nav>
              </header>
          </div>
          <div className="main-div">
              <main>
                  <div className="box-red">
                      <span>January 7, 2017</span>
                  </div>
                  <div>
                      <p className="top1"><a href="#link1" className="color-text">Home</a>»<a href="#link2" className="color-text1">featured</a>» A Post with Everything in it</p>
                  </div>
                  <h1 className="h1s">A Post with Everything In It</h1>
                  <div className="icons">
                      <img alt="Icons-user" src="/img/icons8-user-account-filled-50.png"/> By MyThemeShop
                      <img alt="Icons-speech" src="/img/icons8-filled-bookmark-ribbon-32.png"/> featured, Mobiles
                      <img alt="Icons-filled" src="/img/icons8-speech-bubble-filled-50.png"/> 5 Comments
                  </div>
                  <img alt="Flower and butterfly" className="img1" src="/img/20160329105513-bf3f94fb.jpg"/>
                      <p className="fonts">Pellentesque habitant morbi tristeque senectus et netus et malesuada fames ac turpis egestas.
                          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                          Donec eu libero sit amet guam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Lorem ipsum
                          dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vechicula quis, tincidunt vel, varius vitae,nulla.
                          Sed convallis orci. Duis libero orci, pretium a,<a href="#link3" className="color-text">convallis quis</a>, pellentesque a, dolor.
                          Curabitur vitae nisi non dolor vestibulum consequat.</p>
                      <div className="heads">
                          <p className="level1">Level 1 Heading</p>
                          <p className="level2">Level 2 Heading</p>
                          <p className="level3">Level 3 Heading</p>
                          <p className="level4">Level 4 Heading</p>
                          <p className="level5">Level 5 Heading</p>
                          <p className="level6">Level 6 Heading</p>
                      </div>
                      <p className="tops">Pellentesque habitant morbi tristigue senectus et netus et malesuada fames ac turpis egestas.
                          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                          Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
                          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
                          erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,metus
                      </p>
                      <p className="ps">An Unordered List</p>
                      <ul className="squares">
                          <li>Vestibulum in mauris semper tortor interdum ultrices.</li>
                          <li>Sed vel lorem et justo laoreet bibendum. Donec dictum</li>
                          <li>Etiam massa libero, lacinia at, commodo in, tincidunt a, purus.</li>
                          <li>Prasent volutpat eros quis enim blandit tincidunt.</li>
                          <li>Aenean eu libero nec lectus ultricies laoreet. Donec rutrum, nisi
                              vel egestas ultrices, ipsum urna sagittis libero, vitae vestibulum dui dolor vel velit.</li>
                      </ul>
                      <p className="ps1">Image with no alignment</p>
                      <div className="div-img2">
                          <img className="img2" alt="Girl and phone" src="/img/Optimized-Contact-me-1030x686.jpg"/>
                      </div>
                      <p className="fonts">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                      <h2 className="top2">Image with left alignment</h2>

                      <section className="imagl">
                          <img className="img3" alt="Girl" src="/img/photo10.jpg"/>
                              <p className="floats">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisgue metus enim, venenatis fermentum,
                                  mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam.
                                  Pellentesque habitent morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque semper nibh
                                  eget nibh. Set tempor. Fusce erat. Lorem ipsum dolor crunk amizzle, consectetuer adipiscing elit. Nullam funky fresh fizzle,
                                  owned volutpizzle, brizzle quizzle, qravida vizzle, arcu. Pellentesque away tortizzle. Sizzle sheezy. Shit at fizzle
                                  tempus tempor. Dizzle rizzle nibh et fo shizzle. Pimpin' izzle tortor. Gizzle gizzle phat shiz.</p>
                      </section>

                      <h2>An Ordered List</h2>
                      <ol className="ols" >
                          <li>Vestibulum in mauris semper tortor interdum ultrices.</li>
                          <li>Sed vel lorem et justo laoreet bibendum. Donec dictum.</li>
                          <li>Etiam massa libero, lacinia at, commodo in, tincidunt a,purus.</li>
                          <li>Praesent volutpat eros quis enim blandit tincidunt.</li>
                          <li>Aenean eu libero nec lectus ultricies laoreet. Donec rutrum, nisi vel egestas ultrices, ipsum urna sagitties libero,
                              vitae vestibulum dui dolor vel velit.
                          </li>
                      </ol>
                      <p className="tagss">Tags: <a href="#link4" className="color-text">featured</a>, <a href="#link5" className="color-text">Tag 2</a></p>
                      <h3 className="com-5">5 Comments</h3>

                      <nav className="comments">
                          <div className="comment1">

                              <img alt="avatar" src="/img/Comment1.JPG" className="avatar"/>
                                  <p className="name-comment"><a href="#link5" className="color-text">Coen Jacobs</a></p>
                                  <p className="text-comment">It is a long estabished fact that a reader will be distracted by the readable contebt of a page when looking at its
                                      layout.</p>

                                  <p className="data-comment">April 14, 2012 <a href="#link6" className="color-text">Reply</a></p>
                          </div>

                          <div className="answer-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/answer-comment1.JPG" className="avatar"/>
                                      <p className="name-comment"><a href="#link7" className="color-text">Alex Shiels</a></p>
                                      <p className="text-comment">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                          non-characteristic words etc.</p>

                                      <p className="data-comment">April 14, 2012 <a href="#link8" className="color-text">Reply</a></p>
                          </div>

                          <div className="an-answer-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/an-answer.JPG" className="avatar"/>
                                      <p className="name-comment">Lloyd Budd</p>
                                      <p className="text-comment">This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                                      <p className="data-comment">June 27, 2012 <a href="#link9" className="color-text">Reply</a></p>
                          </div>

                          <div className="answer2-comment1">
                              <hr/>
                                  <img alt="avatar" src="/img/answer2.JPG" className="avatar"/>
                                      <p className="name-comment">Joseph Scott</p>
                                      <p className="text-comment">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat.Quisque metus enim, venenatis fermentum,
                                          mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum.</p>
                                      <p className="data-comment">June 27, 2012 <a href="#link10" className="color-text">Reply</a></p>
                          </div>

                          <div className="comment2">
                              <hr/>
                                  <img alt="avatar" src="/img/admin.JPG" className="avatar"/>
                                      <p className="name-comment"><a href="#link11" className="color-text">Admin</a></p>
                                      <p className="text-comment">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum,
                                          mollis in, porta et, nibh.Duis vulputate elit in elit.</p>
                                      <p className="data-comment">June 7, 2012 <a href="#link12" className="color-text">Reply</a></p>
                          </div>
                      </nav>

                      <h3>Add a Comment</h3>
                      <div className="form-div">
                          <form method="post">
                              <label htmlFor="comment">Comment:</label>
                              <textarea id="comment" name="comment" required/>
                              <label htmlFor="name">Name:</label>
                              <input type="text" id="name" name="name" required/>
                                  <label htmlFor="email">Email Address:</label>
                                  <input type="email" id="email" name="email" required/>
                                      <label htmlFor="website">Website:</label>
                                      <input type="text" id="website" name="website"/>
                                          <div className="buttons">
                                              <input className="submit-red" type="submit" value="Add Comment"/>
                                          </div>
                          </form>
                      </div>
              </main>
          </div>
          <footer className="page-footer">
              <nav className="footer">
                  <div className="recent">
                      <h3 className="rec">Recent Comments</h3>
                      <ul>
                          <li>Joseph Scott on About</li>
                          <li>Alex Shiels on About</li>
                          <li>Coen Jacobs on About</li>
                      </ul>
                  </div>
                  <div className="tags">
                      <h3 className="tagsH">Tags</h3>
                      <ul className="tags4">
                          <li><a href="#link13">Facebook</a></li>
                          <li><a href="#link14">featured</a></li>
                          <li><a href="#link15">Social media</a></li>
                          <li className="tags-li"><a href="#link16">Tag 1</a></li>
                          <li className="tags-li"><a href="#link17">Tag 2</a></li>
                          <li className="tags-li"><a href="#link18">Tag 3</a></li>
                      </ul>
                  </div>
                  <div className=" textW">
                      <h3 className="text-h3">Text Widget</h3>
                      <p className="textWp">Interger ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Pellentesque egestas, neque sit amet
                          convallis pulvinar, justo nulla eleifed augue, ac auctor orci leo non est.In ac felis quis tortor malesuada pretium.
                      </p>
                  </div>
                  <div className="copyright">
                      <p>Copyright © 2018</p>
                  </div>
                  <div className="clear-div"/>
              </nav>
          </footer>
      </div>
    );
  }
}

export default App;
