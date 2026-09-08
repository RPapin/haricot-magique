import React from 'react';

const badgeTones={
  dispo:{bg:'var(--state-dispo-soft)',fg:'#3E5327'},
  bientot:{bg:'var(--state-bientot-soft)',fg:'#7A5C10'},
  fini:{bg:'var(--state-fini-soft)',fg:'var(--gris-700)'},
  bio:{bg:'var(--basilic-100)',fg:'var(--basilic-700)'},
  info:{bg:'var(--chou-soft)',fg:'var(--chou)'}
};
export function Badge({tone='dispo',dot=false,children}){
  const t=badgeTones[tone]||badgeTones.dispo;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:'6px',background:t.bg,color:t.fg,fontFamily:'var(--font-body)',fontSize:'var(--text-micro)',fontWeight:'var(--weight-semibold)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',padding:'5px 11px 4px',borderRadius:'var(--radius-pill)'}}>
      {dot?<span style={{width:6,height:6,borderRadius:'var(--radius-pill)',background:'currentColor',opacity:.75}}></span>:null}
      {children}
    </span>
  );
}
