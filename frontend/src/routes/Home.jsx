import React from 'react'
import { Link } from 'react-router-dom'
function MainContent(){

    function handleSub(){
        alert('Coming Soon....')
    }
    return(
        <div className="container mt-4">
            <div className="row">
            <section className="container-fluid jumbotron">

<div className="jt-right d-none d-lg-block">
    <img src="./assets/img/jtimg.png" alt="" />
</div>

<div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-12 p-0">
        <div className="container jt-left">
            <h1>Stay curious.</h1>
            <p>Discover stories, thinking, and expertise from writers on any topic.</p>
            <Link to={"/signup"} className="btn btn-dark rounded-pill btn-lg">Start reading</Link>
        </div>
    </div>
</div>
</section>
        <section className="container-fluid trends">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 p-0">
                        <div className="container trends-header">
                            <h4>
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" className="ie y">
                                    <path fill="#fff" d="M0 .8h28v28H0z"></path>
                                    <g opacity="0.8" clip-path="url(#trending_svg__clip0)">
                                        <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                                        <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                                        <path
                                            d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                                            stroke="#000" stroke-linecap="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="trending_svg__clip0">
                                            <path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path>
                                        </clipPath>
                                    </defs>
                                </svg>
                                TRENDING ON MEDIUM</h4>
                        </div>
                    </div>

                    <div className="col-md-12 trend-posts my-4">
                        <div className="container">
                            <div className="row">
                                <article className="col-md-6 col-lg-4 post">
                                    <div className="row">
                                        <div className="col-2 post-number">01</div>
                                        <div className="col-10">

                                            <div className="post-header">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/20" className="rounded-circle"
                                                        alt="" />
                                                    <h4>Mecit Yücetürk</h4>
                                                </a>
                                            </div>
                                            <div className="post-desc">
                                                <a href="#">The rise and fall of crypto culture</a>
                                            </div>
                                            <div className="post-footer">
                                                Apr 18 · 2 min read
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 col-lg-4 post">
                                    <div className="row">
                                        <div className="col-2 post-number">03</div>
                                        <div className="col-10">

                                            <div className="post-header">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/20" className="rounded-circle"
                                                        alt="" />
                                                    <h4> Dina Ley in Age of Awareness</h4>
                                                </a>
                                            </div>
                                            <div className="post-desc">
                                                <a href="#">Teachers Are Done. No, Really.</a>
                                            </div>
                                            <div className="post-footer">
                                                Apr 5 · 3 min read
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 col-lg-4 post">
                                    <div className="row">
                                        <div className="col-2 post-number">02</div>
                                        <div className="col-10">

                                            <div className="post-header">
                                                <a href="#">
                                                    <img src="https://via.placeholder.com/20" className="rounded-circle"
                                                        alt="" />
                                                    <h4>Barack Obama</h4>
                                                </a>
                                            </div>
                                            <div className="post-desc">
                                                <a href="#">Disinformation and Democracy Reading List</a>
                                            </div>
                                            <div className="post-footer">
                                                Apr 20 · 2 min read
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid articles">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-8 order-2 order-lg-1">
                        <article className="container">
                            <div className="row">
                                <div className="col-7 col-md-8">
                                    <div className="article-pic">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/20" className="rounded-circle" alt="" />
                                            <span>Krista Bennett</span>
                                        </a>
                                    </div>
                                    <div className="article-desc">
                                        <a href="#">
                                            <h3> Have You Ever Wanted to Know What Kind of Bird is Singing that
                                                Song?</h3>
                                        </a>
                                        <a href="#"></a>
                                        <p>Let The Cornell Lab of Ornithology tell you with their handy
                                            App.</p>
                                    </div>
                                    <div className="article-footer">
                                        <span>Apr 22 · 3 min read ·</span>
                                        <a href="#" className="xbadge rounded-pill">Birding</a>
                                        <a href="#" className="float-end"><svg width="25" height="25" viewBox="0 0 25 25"
                                                fill="none" className="ld">
                                                <path
                                                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                                    fill="#292929"></path>
                                            </svg></a>
                                    </div>
                                </div>
                                <div className="col-5 col-md-4 article-img">
                                    <a href="#">
                                        <img src="https://miro..com/fit/c/200/134/1*GAyvD3bIRca3EVotLMSUqQ.jpeg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    

                        <article className="container">
                            <div className="row">
                                <div className="col-7 col-md-8">
                                    <div className="article-pic">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/20" className="rounded-circle" alt="" />
                                            <span>Microsoft Design</span>
                                        </a>
                                    </div>
                                    <div className="article-desc">
                                        <a href="#">
                                            <h3>Digital = Physical</h3>
                                        </a>
                                        <a href="#"></a>
                                        <p>Green Design Principles that every designer can use to combat climate change
                                        </p>
                                    </div>
                                    <div className="article-footer">
                                        <span>Apr 22 · 3 min read ·</span>
                                        <a href="#" className="xbadge rounded-pill">Birding</a>
                                        <a href="#" className="float-end"><svg width="25" height="25" viewBox="0 0 25 25"
                                                fill="none" className="ld">
                                                <path
                                                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                                    fill="#292929"></path>
                                            </svg></a>
                                    </div>
                                </div>
                                <div className="col-5 col-md-4 article-img">
                                    <a href="#">
                                        <img src="https://miro.medium.com/fit/c/200/134/1*MkKkTdGAsEsALr8QGKLCYw.png"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    

                        <article className="container">
                            <div className="row">
                                <div className="col-7 col-md-8">
                                    <div className="article-pic">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/20" className="rounded-circle" alt="" />
                                            <span>Ginsberg in Ginsbergonomics</span>
                                        </a>
                                    </div>
                                    <div className="article-desc">
                                        <a href="#">
                                            <h3>Is Crypto Just a Religion of Online Gambling?</h3>
                                        </a>
                                        <a href="#"></a>
                                        <p>It might be time to give up on the financial “revolution” of cryptocurrency
                                        </p>
                                    </div>
                                    <div className="article-footer">
                                        <span>Apr 22 · 3 min read ·</span>
                                        <a href="#" className="xbadge rounded-pill">Birding</a>
                                        <a href="#" className="float-end"><svg width="25" height="25" viewBox="0 0 25 25"
                                                fill="none" className="ld">
                                                <path
                                                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                                    fill="#292929"></path>
                                            </svg></a>
                                    </div>
                                </div>
                                <div className="col-5 col-md-4 article-img">
                                    <a href="#">
                                        <img src="https://miro.medium.com/fit/c/200/134/1*LdfDwZLwuWwsSvKTDn74bg.jpeg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    
                    </div>

                    <div className="col-md-12 col-lg-4 article-right order-1 order-lg-2">
                        <div className="discover-header">
                            <h3>Discover more of what matters to you</h3>
                        </div>
                        <div className="discover-list">
                            <a href="#" className="discover-item">Self</a>
                            <a href="#" className="discover-item">Relationships</a>
                            <a href="#" className="discover-item">Data Science</a>
                            <a href="#" className="discover-item">Programming</a>
                            <a href="#" className="discover-item">Productivity</a>
                            <a href="#" className="discover-item">Javascript</a>
                            <a href="#" className="discover-item">Machine Learning</a>
                            <a href="#" className="discover-item">Politics</a>
                            <a href="#" className="discover-item">Health</a>
                        </div>

                        <div className="footer-nav">
                            <nav className="nav">
                                <ul>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Help</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Status

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Writers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Careers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Privacy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Terms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Knowable</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        



            
            </div>
        </div>
    )
}

export default function Home() {
  return (
    <main>
        <MainContent />
    </main>
  )
}
