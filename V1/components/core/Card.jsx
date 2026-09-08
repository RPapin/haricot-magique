import React from 'react';

export function Card({tone='paper',interactive=false,padding='var(--space-6)',children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const tones={
    paper:{background:'var(--surface-card)',color:'var(--text-body)',border:'1px solid var(--border-hairline)'},
    sunk:{background:'var(--surface-sunk)',color:'var(--text-body)',border:'1px solid transparent'},
    invert:{background:'var(--surface-invert)',color:'var(--text-on-invert)',border:'1px solid var(--border-invert)'}
  };
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{borderRadius:'var(--radius-m)',padding,boxShadow:interactive&&hover?'var(--shadow-hover)':'var(--shadow-rest)',
        transform:interactive&&hover?'translateY(var(--hover-lift))':'none',
        transition:'transform var(--dur-base) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',
        ...tones[tone],...style}} {...rest}>
      {children}
    </div>
  );
}
