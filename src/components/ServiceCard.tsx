import { RuxCard, RuxIcon } from '@astrouxds/react';
import { useRef } from 'react';
import { AppData } from '../assets/appsData';
import './ServiceCard.css';

type WindowRef = {
  target: HTMLAnchorElement;
  window: Window;
};

function ServiceCard({ title, description, icon, link, acronym }: AppData) {
  const openWindows = useRef<WindowRef[]>([]);

  function windowHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const href = target.href;

    //check to see if the window is already open
    const arrayItem = openWindows.current.find((element) => element.target === target);
    if (arrayItem) {
      const window = arrayItem.window;
      //if this window exists in array but is closed, update array
      if (window.closed) {
        const index = openWindows.current.indexOf(arrayItem);
        if (index > -1) openWindows.current.splice(index, 1);
        addEntry(target, href);
      } else {
        window.focus();
      }
    } else {
      addEntry(target, href);
    }
  }

  function addEntry(target: HTMLAnchorElement, href: string) {
    const newWindow = window.open(href, target.target)!;
    const entry = {
      target,
      window: newWindow,
    };
    openWindows.current.push(entry);
  }

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
        <a href={link} target='_blank' className='appLink' onClick={(e) => windowHandler(e)}>
          Open {acronym ? acronym : 'App'}
        </a>
      </footer>
    </RuxCard>
  );
}
export default ServiceCard;
