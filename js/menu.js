var g=Object.defineProperty;var u=(o,t,n)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var h=(o,t,n)=>(u(o,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const b=[{label:"Applications",items:[{label:"TT&C Monitor",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://monitor-ttc.netlify.app",target:"_blank"},{label:"TT&C Command",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://ttc-command-react.netlify.app/",target:"_blank"},{label:"GRM Dashboard",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://grm-dashboard-react.netlify.app/",target:"_blank"},{label:"GRM Equipment Manager",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://grm-equipment-react-ts.netlify.app/",target:"_blank"},{label:"GRM Schedule",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://grm-schedule-react.netlify.app/",target:"_blank"},{label:"Flight Dynamic Services",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://flight-dynamics-service.netlify.app",target:"_blank"},{label:"AstroUXDS",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.astrouxds.com",target:"_blank"}]},{label:"Utilities",items:[{label:"Alarms",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.google.com",target:"_blank",type:"a"},{label:"Crew Log",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.astrouxds.com",target:"_blank",type:"a"},{label:"Intel",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.google.com",target:"_blank",type:"a"},{label:"TLE Tool",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.astrouxds.com",type:"a"}]},{label:"System",items:[{label:"User Name",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1Z"></path></svg>'},{label:"Settings",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.astrouxds.com",target:"_blank"},{label:"Log Out",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm2 8H7v-2h2v2Zm2-4h2v-2h-2v2Zm2 4h-2v-2h2v2ZM3 21h2v-2H3v2Zm2-4H3v-2h2v2Zm-2-4h2v-2H3v2Zm2-4H3V7h2v2ZM3 5h2V3H3v2Zm10 8h-2v-2h2v2Zm6 4h2v-2h-2v2Zm2-4h-2v-2h2v2Zm-2 8h2v-2h-2v2Zm2-12h-2V7h2v2ZM11 9h2V7h-2v2Zm8-4V3h2v2h-2Zm-8 0h2V3h-2v2Zm6 16h-2v-2h2v2Zm-2-8h2v-2h-2v2Zm2-8h-2V3h2v2Z"/></svg>',url:"https://www.astrouxds.com",type:"button",click:function(o){console.log("log out!",o)}}]}],s=document.createElement("div");s.classList.add("menu");b.map(o=>{const t=document.createElement("header");if(t.classList.add("nav-header"),o.icon&&o.icon.startsWith("<svg")){const n=document.createElement("i");n.classList.add("icon"),n.innerHTML=o.icon,t.appendChild(n)}t.innerHTML+=`<span class="text">${o.label}</span>`,s.appendChild(t),o.items.length>0&&Z(o)});function Z(o){console.log(o),o.items.map(t=>{const n=document.createElement(t.type==="button"?"button":"a");if(n.classList.add("nav-button"),t.click&&(n.onclick=t.click),t.target&&n instanceof HTMLAnchorElement&&(n.target=t.target),t.url&&n instanceof HTMLAnchorElement&&(n.href=t.url),t.icon&&t.icon.startsWith("<svg")){const a=document.createElement("i");a.classList.add("icon"),a.innerHTML=t.icon,n.appendChild(a)}n.innerHTML+=`<span class="nav-text">${t.label}</span>`,s.appendChild(n)})}const f=({domain:o,name:t,version:n,appState:a,username:e,appStateColor:i})=>{const r=document.createElement("div");r.classList.add("app-meta"),r.setAttribute("part","app-meta");const c=o?`<h1 class="app-domain">${o}</h1>`:null,p=t?`<h1 class="app-name">${t}</h1>`:null,d=n?`<span class="app-version">${n}</span>`:null;let v="";if(a||e){const m=e?`<div class="username" part="username">${e}</div>`:null;v=`<div class="app-state-wrapper">${a?`<div class="app-state ${i}" part="app-state">${a}</div>`:null}${m}</div>`}const l=`<div class="app-info-wrapper">${c}${p}${d}</div>${v}`;return console.log(l),r.innerHTML=l,r},w=`<header part="container">
  <div class="left-side">
    <button class="menu-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-2 0H4v-4h4v4Zm-4-6h4v-4H4v4Zm10 0h-4v-4h4v4Zm2-10v4h4V4h-4Zm-2 4h-4V4h4v4Zm2 6h4v-4h-4v4Zm4 6h-4v-4h4v4Z"
        ></path>
      </svg>
    </button>
    <nav class="menu-container"></nav>
  </div>
  <slot name="app-meta"></slot>
  <div class="slotted-content" part="middle">
    <slot></slot>
  </div>
  <slot name="right-side"></slot>
</header>
`,H=`:host {
  display: block;
  position: sticky;
  z-index: 50;
  top: 0;
  left: 0;
  height: var(--spacing-24);
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
  padding: 0 calc(var(--spacing-6) - var(--spacing-1)); /* to account for padding to child so that focus can show*/
  box-sizing: border-box;
  background-color: var(--gsb-color-background);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  contain: layout; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
  line-height: var(--line-height-base); /*fixes issue where parent element with larger line-height causes layout shift.*/
  font-family: var(--font-body-1-font-family);
  font-size: var(--font-body-1-font-size);
  font-weight: var(--font-body-1-font-weight);
  letter-spacing: var(--font-body-1-letter-spacing);
  color: var(--color-text-primary);

  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-border-interactive-muted, rgb(43, 101, 155));
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  /* visually "centers" because the dark edge of the shadow gives the illusion this is offset */
  ::-webkit-scrollbar-thumb:vertical {
    border-left-width: 4px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-top-width: 4px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    background-color: var(--color-background-surface-default, rgb(27, 45, 62));
  }

  ::-webkit-scrollbar-track:vertical {
    box-shadow: var(--scrollbar-shadow-inner-vertical);
  }

  ::-webkit-scrollbar-track:horizontal {
    box-shadow: var(--scrollbar-shadow-inner-horizontal);
  }
}

:host([hidden]) {
  display: none;
}

header {
  display: flex;
  overflow: hidden;
  padding: 0 var(--spacing-1); /* so focus does not get cut off by overflow: hidden */
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &::-webkit-scrollbar-thumb:active,
  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-background-interactive-default, rgb(58, 129, 191));
  }
}

slot[name='right-side'] > rux-monitoring-icon,
::slotted(rux-monitoring-icon[slot='right-side']) {
  display: flex;
  align-items: center;
  padding-right: calc(var(--spacing-4) + var(--spacing-2)); /*24px*/
  padding-top: var(--spacing-2);
}

.app-meta,
::slotted(*[slot='app-meta']) {
  display: inline-flex;
  flex-wrap: wrap;
  padding: var(--spacing-0);
  margin: var(--spacing-0) auto var(--spacing-0) var(--spacing-0);
  color: var(--color-palette-neutral-000);
  white-space: nowrap;
}

.app-info-wrapper {
  flex-basis: 100%;
  display: flex;
  align-items: baseline;
  min-height: var(--spacing-10); /*40px*/
  padding-bottom: var(--spacing-1);
  min-width: 10.625rem;
}

.app-meta h1 {
  margin-bottom: var(--spacing-0);
  margin-top: var(--spacing-0);
  font-family: var(--font-heading-1-font-family);
  font-size: var(--font-heading-1-font-size);
  font-weight: var(--font-heading-1-font-weight);
  letter-spacing: var(--font-heading-1-letter-spacing);
  line-height: var(--font-heading-1-line-height);
}

.app-meta h1.app-domain {
  margin-right: var(--spacing-2);
  font-family: var(--font-heading-1-bold-font-family);
  font-size: var(--font-heading-1-bold-font-size);
  font-weight: var(--font-heading-1-bold-font-weight);
  letter-spacing: var(--font-heading-1-bold-letter-spacing);
  line-height: var(--font-heading-1-line-height);
}

.app-name {
  margin-right: var(--spacing-2); /*8px*/
}

.app-version {
  display: inline-block;
  font-family: var(--font-heading-6-font-family);
  font-size: var(--font-heading-6-font-size);
  font-weight: var(--font-heading-6-font-weight);
  letter-spacing: var(--font-heading-6-letter-spacing);
  line-height: var(--font-heading-6-line-height);
}

.app-state-wrapper {
  display: flex;
}

/* all temp classes and their subsequent styling will be replaced with internal component styles. */
.app-state {
  box-sizing: border-box;
  color: var(--color-palette-neutral-000);
  background-color: var(--color-palette-neutral-1000);
  border-radius: var(--radius-base);
  font-family: var(--font-body-2-font-family);
  font-size: var(--font-body-2-font-size);
  font-weight: var(--font-body-2-font-weight);
  letter-spacing: var(--font-body-2-letter-spacing);
  line-height: var(--line-height-xs);
  padding: calc(var(--spacing-050) + var(--spacing-025)) var(--spacing-2); /*3px 8px*/
  text-align: center;
  margin-right: var(--spacing-2); /*6px*/
  white-space: nowrap;
}

.username {
  box-sizing: border-box;
  flex-basis: 50%;
  font-family: var(--font-body-2-font-family);
  font-size: var(--font-body-2-font-size);
  font-weight: var(--font-body-2-font-weight);
  letter-spacing: var(--font-body-2-letter-spacing);
  line-height: var(--line-height-xs);
  padding: calc(var(--spacing-050) + var(--spacing-025)) var(--spacing-0); /*3px 0*/
  height: calc(var(--spacing-6) - var(--spacing-050)); /*22px*/
}

.slotted-content {
  display: inline-flex;
  justify-content: center;
  flex-basis: 100%;
}

.app-state.tag1 {
  background: var(--color-palette-teal-600);
}

.app-state.tag2 {
  background: var(--color-palette-purple-600);
}

.app-state.tag3 {
  background: var(--color-palette-pink-600);
}

.app-state.tag4 {
  background: var(--color-palette-hotorange-600);
}
`,x=`.menu-button {
  border: 0;
  line-height: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  margin-right: var(--spacing-2);
  width: calc(var(--spacing-8) + var(--spacing-050)); /*38px*/
  aspect-ratio: 1/1;
  font-size: var(--spacing-8); /* 32px to prevent icon moving if larger font-size set on parents. */
  border-radius: var(--radius-base);
  color: var(--color-background-interactive-default);

  &:hover {
    color: var(--color-background-interactive-hover);
  }

  &:focus-visible {
    outline: var(--border-width-focus-default) solid var(--color-border-focus-default);
    outline-offset: var(--spacing-focus-default);
  }
}

.left-side {
  & .menu-container {
    position: absolute;
    padding: var(--spacing-0); /*no spacing, slotted content handles padding*/
    border-radius: var(--radius-base);
    background: var(--color-background-base-default);
    border: 1px solid var(--color-border-interactive-default);
    box-sizing: border-box;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    z-index: 100; /* overlays every component except for rux-dialog and rux-classification-marking*/
    width: 22rem;
    max-width: 100%;

    &::before {
      content: '';
      height: var(--spacing-4);
      width: var(--spacing-4);
      background: var(--color-border-interactive-default);
      display: inline-block;
      position: absolute;
      top: calc(-1 * var(--spacing-1));
      left: var(--spacing-2);
      transform: translateZ(-1px) rotate(45deg);
    }

    &[hidden] {
      display: none;
    }

    & .menu {
      max-height: calc(90vh - 5rem);
      overflow: auto;

      /*scrollbars*/
      scrollbar-color: var(--color-border-interactive-muted, rgb(43, 101, 155)) var(--color-background-surface-default);
      &::-webkit-scrollbar {
        width: var(--spacing-4);
        height: var(--spacing-4);
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--color-border-interactive-muted, rgb(43, 101, 155));
        border-radius: var(--spacing-2);
        border: 3px solid transparent;
        background-clip: padding-box;
      }

      /* visually "centers" because the dark edge of the shadow gives the illusion this is offset */
      &::-webkit-scrollbar-thumb:vertical {
        border-left-width: var(--border-width-lg);
      }

      &::-webkit-scrollbar-thumb:horizontal {
        border-top-width: var(--border-width-lg);
      }

      &::-webkit-scrollbar-thumb:active,
      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-background-interactive-default, rgb(58, 129, 191));
      }

      &::-webkit-scrollbar-track {
        background-color: var(--color-background-surface-default, rgb(27, 45, 62));

        box-shadow: var(--scrollbar-shadow-inner-vertical);
      }

      &::-webkit-scrollbar-corner {
        background-color: var(--color-background-surface-default, rgb(27, 45, 62));
      }

      &::-webkit-scrollbar-track:vertical {
        box-shadow: var(--scrollbar-shadow-inner-vertical);
      }

      &::-webkit-scrollbar-track:horizontal {
        box-shadow: var(--scrollbar-shadow-inner-horizontal);
      }
    }
  }
  .nav-header {
    font-family: var(--font-body-1-bold-font-family);
    font-size: var(--font-body-1-bold-font-size);
    font-weight: var(--font-body-1-bold-font-weight);
    line-height: var(--font-body-1-bold-line-height);
    letter-spacing: var(--font-body-1-bold-letter-spacing);
    text-transform: uppercase;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--spacing-3);
    padding: var(--spacing-2) var(--spacing-3);

    & i.icon {
      width: 1rem;
      height: 1rem;
      & svg {
        fill: currentColor;
      }
      color: var(--color-text-primary);
    }
  }

  .nav-button:where(a, button) {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--color-text-secondary);
    padding-inline: var(--button-padding-x-medium);
    padding-block: var(--button-padding-y-medium);
    text-decoration: none;
    font-family: var(--font-body-1-font-family);
    font-size: var(--font-body-1-font-size);
    font-weight: var(--font-body-1-font-weight);
    line-height: var(--font-body-1-line-height);
    letter-spacing: var(--font-body-1-letter-spacing);

    & i.icon {
      width: 24px;
      height: 24px;
      & svg {
        fill: currentColor;
      }
      color: var(--color-text-interactive-default);
    }

    &[target='_blank']::after {
      content: '';
      width: 16px;
      min-width: 16px;
      aspect-ratio: 1/1;
      display: block;
    }

    &:hover,
    &:focus-visible,
    &:active {
      text-decoration: none;
      color: var(--color-text-primary);
      background-color: var(--color-background-surface-hover);
      outline: transparent;

      &::after {
        --svg: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M5 18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-5c0-.55.45-1 1-1s1 .45 1 1v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h6c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1 .45-1 1v12ZM15 5c-.55 0-1-.45-1-1s.45-1 1-1h6v6c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-9.13 9.13a.996.996 0 1 1-1.41-1.41L17.59 5H15Z"></path></svg>');
        -webkit-mask: var(--svg);
        mask: var(--svg);
        mask-repeat: no-repeat;
        background-color: var(--color-text-interactive-default);
        margin-left: auto;
      }
    }

    &:where(a):not([href]) {
      &:hover {
        background-color: transparent;
      }
      & i.icon {
        color: var(--color-test-secondary);
      }
    }
  }

  button.nav-button {
    background: transparent;
    border: 0;
    cursor: pointer;
    width: 100%;
  }
}
`;//!!ToDo: better way to implement styles + astro tokens? (tokens are just added for testing for now)
const k=H+x;class y extends HTMLElement{constructor(){var e,i;super();h(this,"popupButton");h(this,"popupContainer");h(this,"leftSideEl");h(this,"appState","");h(this,"appStateColor","tag1");h(this,"username","");h(this,"appDomain",null);h(this,"appName",null);h(this,"appVersion",null);h(this,"menuOpen",!1);h(this,"closeOnSelect",!1);h(this,"_assignedOutsideClickEvent",!1);this._onSlotChange=this._onSlotChange.bind(this),this._handleOpen=this._handleOpen.bind(this),this._handleTriggerClick=this._handleTriggerClick.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this),this._handleMenuClick=this._handleMenuClick.bind(this),this._setMeta=this._setMeta.bind(this),this.emitOpenEvent=this.emitOpenEvent.bind(this),this.emitClosedEvent=this.emitClosedEvent.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.attachShadow({mode:"open"});const n=document.createElement("template");n.innerHTML=w,(e=this.shadowRoot)==null||e.appendChild(n.content.cloneNode(!0));const a=document.createElement("style");a.innerHTML=k,(i=this.shadowRoot)==null||i.appendChild(a),this.popupButton=this.shadowRoot.querySelector(".menu-button"),this.popupContainer=this.shadowRoot.querySelector(".menu-container"),this.leftSideEl=this.shadowRoot.querySelector(".left-side"),this.popupContainer.appendChild(s),this.appState=this.getAttribute("app-state")||"",this.appStateColor=this.getAttribute("app-state-color")||"tag1",this.username=this.getAttribute("username")||"",this.appDomain=this.getAttribute("app-domain")||null,this.appName=this.getAttribute("app-name")||null,this.appVersion=this.getAttribute("app-version")||null,this.menuOpen=this.hasAttribute("menu-open"),this.closeOnSelect=this.hasAttribute("close-on-select")}static get observedAttributes(){return["app-state","app-state-color","app-domain","app-name","app-version","close-on-select","username"]}emitOpenEvent(n={}){const a=new CustomEvent("gsbmenuopened",{bubbles:!0,cancelable:!0,detail:n});this.dispatchEvent(a)}emitClosedEvent(n={}){const a=new CustomEvent("gsbmenuclosed",{bubbles:!0,cancelable:!0,detail:n});this.dispatchEvent(a)}async show(){return this.menuOpen||(this.menuOpen=!0),this._handleOpen(),this.menuOpen}async hide(){return this.menuOpen&&(this.menuOpen=!1),this._handleOpen(),this.menuOpen}_onSlotChange(){console.log("changed")}_handleOpen(){this.menuOpen?this.setAttribute("menu-open",""):this.removeAttribute("menu-open"),this.menuOpen?(this.emitOpenEvent(),this._assignedOutsideClickEvent||(window.addEventListener("mousedown",this._handleOutsideClick),this._assignedOutsideClickEvent=!0)):(this.emitClosedEvent(),this._assignedOutsideClickEvent&&(window.removeEventListener("mousedown",this._handleOutsideClick),this._assignedOutsideClickEvent=!1)),this.popupContainer.hidden=!this.menuOpen}_handleTriggerClick(){this.menuOpen=!this.menuOpen,this._handleOpen()}_handleMenuClick(n){const a=n.target,e=a.closest("button")!==null||a.closest("a")!==null;this.closeOnSelect&&e&&(this.menuOpen=!1,this._handleOpen())}_handleOutsideClick(n){n.composedPath().includes(this.popupContainer)||n.composedPath().includes(this.popupButton)||(this.menuOpen=!1,this._handleOpen())}_setMeta(){var e;const n=f({domain:this.appDomain,name:this.appName,version:this.appVersion,appState:this.appState,appStateColor:this.appStateColor,username:this.username}),a=(e=this.shadowRoot)==null?void 0:e.querySelector("div.app-meta");console.log(a),a?a.replaceWith(n):this.leftSideEl.insertAdjacentElement("afterend",n)}connectedCallback(){this.popupButton.addEventListener("click",this._handleTriggerClick),this.popupContainer.addEventListener("click",this._handleMenuClick),this.popupContainer.hidden=!this.menuOpen,this._setMeta()}disconnectedCallback(){this.popupButton.removeEventListener("click",this._handleTriggerClick),this.popupContainer.removeEventListener("click",this._handleMenuClick),this._assignedOutsideClickEvent&&window.removeEventListener("mousedown",this._handleOutsideClick)}attributeChangedCallback(n,a,e){switch(n){case"app-state":this.appState=e,this._setMeta();break;case"app-state-color":this.appStateColor=e,this._setMeta();break;case"app-domain":this.appDomain=e,this._setMeta();break;case"app-name":this.appName=e,this._setMeta();break;case"app-version":this.appVersion=e,this._setMeta();break;case"username":this.username=e,this._setMeta();break;case"close-on-select":this.closeOnSelect=this.hasAttribute("close-on-select");break}}}window.customElements.define("vanilla-gsb",y);
