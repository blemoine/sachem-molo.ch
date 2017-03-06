import * as Vue from 'vue';

export const Navbar: Vue.ComponentOptions<Vue> = {
    template: `
        <header class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">                 
                  <a class="navbar-brand" href="#">Moloch's blog</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li><router-link to="/post">Posts</router-link></li>
                    <li><router-link to="/cv">Qui suis-je&nbsp;?</router-link></li>                    
                  </ul>
                </div>
            </div>
              
        </header>
    `
};