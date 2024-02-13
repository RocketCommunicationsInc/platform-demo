import { RuxClock, RuxGlobalStatusBar } from '@astrouxds/react';
import ServiceCard from './components/ServiceCard';
import './App.css';
import { appData } from './assets/appsData';

function App() {
  console.log(appData);
  return (
    <>
      <RuxGlobalStatusBar app-domain='ACME' app-name='PLATFORM' menu-icon='apps' app-version='v1' app-state='App State' username='User Name' app-state-color=''>
        <RuxClock></RuxClock>
        <div className='icons spacer' slot='right-side'></div>
      </RuxGlobalStatusBar>
      <main>
        <section className='content'>
          <article id='home-content'>
            {appData.map((app) => (
              <ServiceCard title={app.title} acronym={app.acronym} description={app.description} icon={app.icon} link={app.link} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
