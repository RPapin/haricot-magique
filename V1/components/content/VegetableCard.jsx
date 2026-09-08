import React from 'react';
import {Badge} from '../core/Badge.jsx';

export function VegetableCard({name,latin,price,unit='la botte',state='dispo',note,color='courgette',imageSlot=true}){
  const [hover,setHover]=React.useState(false);
  const labels={dispo:'En vente',bientot:'Bientôt',fini:'Terminé'};
  return (
    <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{background:'var(--surface-card)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-m)',overflow:'hidden',
        display:'flex',flexDirection:'column',
        boxShadow:hover?'var(--shadow-hover)':'var(--shadow-rest)',transform:hover?'translateY(var(--hover-lift))':'none',
        transition:'transform var(--dur-base) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',opacity:state==='fini'?.62:1}}>
      {imageSlot?<div style={{aspectRatio:'4 / 3',background:'var(--'+color+'-soft, var(--surface-sunk))',display:'flex',alignItems:'flex-end',justifyContent:'space-between',padding:'var(--space-3)'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-micro)',color:'var(--text-muted)',letterSpacing:'.04em'}}>photo à fournir</span>
      </div>:null}
      <div style={{padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)',flex:1}}>
        <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:'var(--space-3)'}}>
          <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-heading-m)',fontWeight:'var(--weight-regular)',color:'var(--text-display)'}}>{name}</h3>
          {price?<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-body-s)',color:'var(--text-body)',whiteSpace:'nowrap'}}>{price}</span>:null}
        </div>
        {latin?<span style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:'var(--text-body-s)',color:'var(--text-muted)'}}>{latin}</span>:null}
        {note?<p style={{margin:0,fontFamily:'var(--font-body)',fontSize:'var(--text-body-s)',lineHeight:'var(--leading-body)',color:'var(--text-secondary)',textWrap:'pretty'}}>{note}</p>:null}
        <div style={{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-3)',paddingTop:'var(--space-3)'}}>
          <Badge tone={state} dot={state==='dispo'}>{labels[state]||state}</Badge>
          {unit?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',color:'var(--text-muted)'}}>{unit}</span>:null}
        </div>
      </div>
    </article>
  );
}
