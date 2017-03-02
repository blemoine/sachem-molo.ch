import * as Vue from 'vue';

export const Navbar: Vue.ComponentOptions<Vue> = {
    template: `
        <header class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">                 
                  <a class="navbar-brand" href="#">CV</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>                    
                  </ul>                  
                </div>
              </div>
        </header>
    `
};