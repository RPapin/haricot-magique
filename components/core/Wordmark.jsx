import React from 'react';

export function Wordmark({size='md',tone='ink',subtitle=false}){
  const scale={sm:'1.0625rem',md:'1.4rem',lg:'2.1rem'}[size]||'1.4rem';
  const color=tone==='invert'?'var(--text-on-invert)':'var(--text-display)';
  return (
    <span style={{display:'inline-flex',flexDirection:'column',gap:'2px',lineHeight:1.05}}>
      <span style={{fontFamily:'var(--font-display)',fontSize:scale,letterSpacing:'-.015em',color}}>
        Le Haricot <em style={{fontStyle:'italic',color:tone==='invert'?'var(--basilic-300)':'var(--courgette)'}}>Magique</em>
      </span>
      {subtitle?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-micro)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',color:tone==='invert'?'var(--basilic-300)':'var(--text-muted)'}}>Maraîchage en permaculture · La Tour de Salvagny</span>:null}
    </span>
  );
}
