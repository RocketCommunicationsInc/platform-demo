import { RuxCard, RuxIcon } from '@astrouxds/react';
import './ServiceCard.css';
import { AppData } from '../assets/appsData';

function ServiceCard({ title, description, icon, link, acronym }: AppData) {
  return (
    <RuxCard className='service-card'>
      <header slot='header'>
        {icon ? <RuxIcon icon={icon} size='80px' className=''></RuxIcon> : null}
        <h3>{title}</h3>
      </header>
      <div>
        <p>{description}</p>
      </div>
      <footer slot='footer'>
        <a href={link} target='_blank' className='appLink'>
          Open {acronym ? acronym : 'App'}
        </a>
      </footer>
    </RuxCard>
  );
}
export default ServiceCard;
