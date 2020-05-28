import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/home.css'

function Home() {
  return (
    <div>
        <div class="lp-container">
            <div class="lp-left">
                <div class="lp-text">
                    <div class="lp-logo">
                        chan.ge
                    </div>
                    <div class="lp-slogan">
                        anonymous image board with a twist
                    </div>
                </div>
            </div>
            <div class="lp-right">
                <div class="lp-options">
                    <Link to={'/p/'} style={{color: 'black'}}>
                        <div class="lp-item">
                            <div class="lp-item-left">politics</div>
                            <div class="lp-item-right">/ p /</div>
                        </div>
                    </Link>
                    <Link to={'/g/'} style={{color: 'black'}}>
                        <div class="lp-item">
                            <div class="lp-item-left">technology</div>
                            <div class="lp-item-right">/ g /</div>
                        </div>
                    </Link>
                    <Link to={'/a/'} style={{color: 'black'}}>
                        <div class="lp-item">
                            <div class="lp-item-left">trad art</div>
                            <div class="lp-item-right">/ a /</div>
                        </div>
                    </Link>
                    <Link to={'/c/'} style={{color: 'black'}}>
                        <div class="lp-item">
                            <div class="lp-item-left">cg art</div>
                            <div class="lp-item-right">/ c /</div>
                        </div>
                    </Link>
                    <Link to={'/h/'} style={{color: 'black'}}>
                        <div class="lp-item">
                            <div class="lp-item-left">humour</div>
                            <div class="lp-item-right">/ h /</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
