import React from 'react';
import {Wordmark} from '../core/Wordmark.jsx';
import {Button} from '../core/Button.jsx';

export function NavBar({links=[],active,onNavigate,cta='Réserver un panier',onCta}){
  return (
    <nav style={{position:'sticky',top:0,zIndex:20,background:'rgba(251,247,239,.86)',backdropFilter:'blur(14px)',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'14px var(--gutter)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-5)'}}>
        <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(links[0]&&links[0].id);}} style={{textDecoration:'none'}}><Wordmark size="md" /></a>
        <ul style={{display:'flex',gap:'var(--space-5)',listStyle:'none',margin:0,padding:0,alignItems:'center'}}>
          {links.map(l=>(
            <li key={l.id}>
              <a href={l.href||'#'} onClick={e=>{if(onNavigate){e.preventDefault();onNavigate(l.id);}}}
                style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-s)',textDecoration:'none',
                  color:active===l.id?'var(--basilic-700)':'var(--text-secondary)',
                  borderBottom:'1px solid '+(active===l.id?'var(--carotte)':'transparent'),paddingBottom:2,
                  transition:'color var(--dur-quick) var(--ease-soft)'}}>{l.label}</a>
            </li>
          ))}
        </ul>
        {cta?<Button size="sm" variant="primary" onClick={onCta}>{cta}</Button>:null}
      </div>
    </nav>
  );
}
