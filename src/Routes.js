import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About , Works , Contact , Article} from './components/index';
import { Goto, Banners, CodingSchool, Portfolio, PortfolioDesign, Message} from './components/Work/index';
import ChargeLog from './components/ChargeLog/ChargeLog';
const Routes = () => {
return(
 <article>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/ChargeLog' component={ChargeLog} />
          <Route path='/Works' component={Works} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Article' component={Article} />
          <Route path='/Work/Banners' component={Banners} />
          <Route path='/Work/Goto' component={Goto} />
          <Route path='/Work/CodingSchool' component={CodingSchool} />
          <Route path='/Work/Portfolio' component={Portfolio} />
          <Route path='/Work/PortfolioDesign' component={PortfolioDesign} />
          <Route path='/Work/Message' component={Message} />
</article>
)
}
export default Routes;