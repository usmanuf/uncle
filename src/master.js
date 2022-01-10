import React, {useContext} from 'react';
import { BrowserRouter as Router,Redirect,Switch , Route} from "react-router-dom";
import { ContextApp } from './ContextAPI'
import Icon from './component/Reuseable/Icon/Icon'
import NotificationSystem from 'react-notification-system';
import {  style, works } from './component/Appconstant'
import Projectpage from './component/Reuseable/Projectpage/Projectpage'
import { AnimatePresence } from 'framer-motion'
import  Layout  from './Layout';
import Home from "./component/Body/Home/Home";
import Job from './component/Body/Jobs/index'
import JobDetails from './component/Body/Jobs/JobsDetail/Detail';
import ApplyJobForm from './component/Body/Jobs/jobForm/Form';
import Aboutme from "./component/Body/Aboutme/Aboutme";
import Services from "./component/Body/Services/Services";
import Works from "./component/Body/Works/Works";
import Contact from "./component/Body/Contact/Contact";
import YouAreLost from "./component/Body/404/YouAreLost";
import Customers from './component/Body/CustomerView/index';
import Fixers from './component/Body/FixerView/index';
import BookNow from './component/Body/BookNow'
import thankYou from './component/Body/Thankyou/index'
import ServiceCity from './component/Reuseable/Cityservices';
import SingleService from './component/Body/SingleService'
import FeatureIdForm from './component/Body/FixerView/Skillpackage/Form/index'
import Users from '../src/component/Reuseable/user';
import OurApp from '../src/component/Body/Ourapp'
import content from '../src/component/Reuseable/ContentService';
import ServiceGeneralConten1 from '../src/component/Reuseable/Cityservices/GenralConten';
import ServiceGeneralConten2 from '../src/component/Reuseable/Cityservices/GenralConten1';
import ServiceGeneralConten3 from '../src/component/Reuseable/Cityservices/GenralConten2';
import ServiceGeneralConten4 from '../src/component/Reuseable/Cityservices/GenralConten3';
import ServiceGeneralConten5 from '../src/component/Reuseable/Cityservices/GenralConten4';
import ServiceGeneralConten6 from '../src/component/Reuseable/Cityservices/GenralConten5';
import ServiceGeneralConten7 from '../src/component/Reuseable/Cityservices/GenralConten6';
import ServiceGeneralConten8 from '../src/component/Reuseable/Cityservices/GenralConten7';
import ServiceGeneralConten9 from '../src/component/Reuseable/Cityservices/GenralConten8';
import ServiceGeneralConten10 from '../src/component/Reuseable/Cityservices/GenralConten9';
import ServiceGeneralConten11 from '../src/component/Reuseable/Cityservices/GenralConten10';
import ServiceGeneralConten12 from '../src/component/Reuseable/Cityservices/GenralConten11';
import ServiceGeneralConten13 from '../src/component/Reuseable/Cityservices/GenralConten12';
import ServiceGeneralConten14 from '../src/component/Reuseable/Cityservices/GenralConten13';
import ServiceGeneralConten15 from '../src/component/Reuseable/Cityservices/GenralConten14';
import ServiceGeneralConten16 from '../src/component/Reuseable/Cityservices/GenralConten15';
import ServiceGeneralConten17 from '../src/component/Reuseable/Cityservices/GenralConten16';
import ServiceGeneralConten18 from '../src/component/Reuseable/Cityservices/GenralConten17';
import ServiceGeneralConten19 from '../src/component/Reuseable/Cityservices/GenralConten18';
import ServiceGeneralConten20 from '../src/component/Reuseable/Cityservices/GenralConten19';
import ServiceGeneralConten21 from '../src/component/Reuseable/Cityservices/GenralConten20';





const Master=(props)=> {

    const {scrolled, notifisystem} = useContext(ContextApp)
// const worksroutes = works?.map(project=>{
//     return <Route path={project.link}>
//         <Projectpage project={project}/>
//     </Route>
// })
        return(
            <div className={'body'}>
                <Icon icon={scrolled?'fad fa-arrow-up top scrol':'top'} clickEvent={()=>window.scrollTo(0, 0)}/>
                <NotificationSystem ref={notifisystem} style={style}/>
                <Router>
                    <Layout>
                        <AnimatePresence>
                        <Switch>

                            <Route  exact={true} path="/" component={Home}/>
                            <Route  exact={true} path="/become-a-customer/" component={Customers}/>
                            <Route  exact={true} path="/become-a-fixer/" component={Fixers}/>
                            <Route  exact={true} path="/about-us/" component={Aboutme}/>
                            <Route  exact={true} path="/user-query/" component={Users}/>
                            <Route  exact={true} path="/uncle-fixer-app/" component={OurApp}/>
                            <Route  exact={true} path="/contact-us/" component={Contact}/>

                            {/*services*/}
                            <Route exact={true}  path='/services/' component={Services}/>


                            {/*Forms*/}
                            <Route exact={true} path="/book-now/" component={BookNow}/>
                            <Route exact={true} path="/thank-you/" component={thankYou}/>
                            <Route  exact={true} path="/feature-form" component={FeatureIdForm}/>

                            {/*jobs*/}
                            <Route  exact={true} path="/jobs/" component={Job}/>
                            <Route  exact={true} path="/jobDetails/:slug" component={JobDetails}/>
                            <Route  exact={true} path="/applyForm" component={ApplyJobForm}/>


                            <Route exact path='/works'>
                                <Works />
                            </Route>
                            {/*{worksroutes}*/}
                            <Route path='/contact-us/'>
                                <Contact />
                            </Route>



                            {/*<Route exact path="/:general_slug" component={content}/>*/}
                            <Route exact path="/ac-service" component={ServiceGeneralConten1} />
                            <Route exact path="/electrician-service" component={ServiceGeneralConten2} />
                            <Route exact path="/pickup-service" component={ServiceGeneralConten3} />
                            <Route exact path="/wall-painter-service" component={ServiceGeneralConten4} />
                            <Route exact path="/curtain-fixer-service" component={ServiceGeneralConten5} />
                            <Route exact path="/car-towing-service" component={ServiceGeneralConten6} />
                            <Route exact path="/home-tailoring-service" component={ServiceGeneralConten7} />
                            <Route exact path="/building-contractors-service" component={ServiceGeneralConten8} />
                            <Route exact path="/door-lock-repair-service" component={ServiceGeneralConten9} />
                            <Route exact path="/led-lcd-repair-service" component={ServiceGeneralConten10} />
                            <Route exact path="/furniture-polish-service" component={ServiceGeneralConten11} />
                            <Route exact path="/graphic-designer-service" component={ServiceGeneralConten12} />
                            <Route exact path="/home-generator-service" component={ServiceGeneralConten13} />
                            <Route exact path="/home-office-cleaning-service" component={ServiceGeneralConten14} />
                            <Route exact path="/rent-a-car-with-driver-service" component={ServiceGeneralConten15} />
                            <Route exact path="/carpentry-service" component={ServiceGeneralConten16} />
                            <Route exact path="/quran-tutor-service" component={ServiceGeneralConten17} />
                            <Route exact path="/home-appliances-service" component={ServiceGeneralConten18} />
                            <Route exact path="/cctv-service" component={ServiceGeneralConten19} />
                            <Route exact path="/solar-panel-installation-service" component={ServiceGeneralConten20} />
                            <Route exact path="/plumber-service" component={ServiceGeneralConten21} />

                            <Route  path="/:services_slug-in-:slug" component={SingleService} />

                            <Route path="/:slug?" component={ServiceCity}/>


                            <Route>
                                <YouAreLost />
                            </Route>


                            {/*users*/}



                            {/*<Route  exact={true} path="/become-a-customer/" component={CustomerView}/>*/}
                            {/*<Route  exact={true} path="/become-a-fixer/" component={FixerView}/>*/}
                            {/*<Route  exact={true} path="/more-services" component={MoreServices}/>*/}
                            {/*<Route  exact={true} path="/gallery" component={Gallery}/>*/}


                            {/*<Route  exact={true} path="/about-us/" component={AboutUs}/>*/}
                            {/*<Route  exact={true} path="/services" component={Services}/>*/}
                            {/*<Route  exact={true} path="/jobs" component={Job}/>*/}
                            {/*<Route  exact={true} path="/jobDetails/:slug" component={JobDetails}/>*/}
                            {/*<Route  exact={true} path="/applyForm" component={ApplyJobForm}/>*/}

                            {/*<Route path="/service/:slug" component={ServicesCity}/>*/}
                            {/*<Route path="/:services_slug?-in-:slug?" component={ServicesCountry} />*/}

                            {/*<Route  exact={true} path="/blogs" component={Blogs}/>*/}
                            {/*<Route  exact={true} path="/blog/:slug" component={SubBlogs}/>*/}
                            {/*<Route  exact={true} path="/contact-us/" component={ContactUs}/>*/}
                            {/*<Route  exact={true} path="/ac-services" component={SubServices}/>*/}


                            {/*<Route  exact={true} path="/terms-condition" component={Condition}/>*/}
                            {/*<Route  exact={true} path="/help-center" component={HelpCenter}/>*/}
                            {/*<Route  exact={true} path="/feature-form" component={FeatureIdForm}/>*/}



                            {/*<Route  exact={true} path="/thank-you" component={ThankYou}/>*/}
                            {/*<Route  exact={true} path="/coming-soon" component={ComingSoon}/>*/}





                            {/*<Route component={PageNotFound}/>*/}
                        </Switch>
                        </AnimatePresence>
                    </Layout>
                </Router>

            </div>
        )

}

export default Master;
