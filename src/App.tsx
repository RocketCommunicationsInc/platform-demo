import { RuxCard, RuxClock, RuxGlobalStatusBar, RuxIcon } from '@astrouxds/react';
import './App.css';

function App() {
  return (
    <>
      <RuxGlobalStatusBar app-domain='ACME' app-name='PLATFORM' menu-icon='apps' app-version='v1' app-state='App State' username='User Name' app-state-color=''>
        <RuxClock></RuxClock>
        <div className='icons spacer' slot='right-side'></div>
      </RuxGlobalStatusBar>
      <main>
        <section className='content'>
          <article id='home-content'>
            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='antenna' size='80px' className=''></RuxIcon>
                <h3>AB</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://monitor-ttc.netlify.app' target='_blank' className='appLink'>
                  Open AB
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='explore' size='80px' className=''></RuxIcon>
                <h3>FD</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://ttc-command-react.netlify.app/' target='_blank' className='appLink'>
                  Open FD
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='antenna-transmit' size='80px' className=''></RuxIcon>
                <h3>GC</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://grm-dashboard-react.netlify.app/' target='_blank' className='appLink'>
                  Open GC
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='assignment' size='80px' className=''></RuxIcon>
                <h3>MM</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://grm-equipment-react-ts.netlify.app/' target='_blank' className='appLink'>
                  Open MM
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='equipment' size='80px' className=''></RuxIcon>
                <h3>MS</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <footer slot='footer'>
                <a href='https://grm-schedule-react.netlify.app/' target='_blank' className='appLink'>
                  Open MS
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='pie-chart' size='80px' className=''></RuxIcon>
                <h3>OD</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://flight-dynamics-service.netlify.app' target='_blank' className='appLink'>
                  Open OD
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='public' size='80px' className=''></RuxIcon>
                <h3>OP</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://flight-dynamics-service.netlify.app' target='_blank' className='appLink'>
                  Open OP
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='satellite-transmit' size='80px' className=''></RuxIcon>
                <h3>SCM</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://astrouxds.com' target='_blank' className='appLink'>
                  Open SCM
                </a>
              </footer>
            </RuxCard>

            <RuxCard className='service-card'>
              <header slot='header'>
                <RuxIcon icon='track-changes' size='80px' className=''></RuxIcon>
                <h3>TC</h3>
              </header>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum rerum praesentium.</p>
              </div>
              <footer slot='footer'>
                <a href='https://flight-dynamics-service.netlify.app' target='_blank' className='appLink'>
                  Open TC
                </a>
              </footer>
            </RuxCard>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
