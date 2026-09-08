import React from 'react';

export function SectionHeading({eyebrow,title,intro,align='left',level=2,tone='ink'}){
  const H='h'+level;
  const color=tone==='invert'?'var(--text-on-invert)':'var(--text-display)';
  return (
    <header style={{textAlign:align,maxWidth:'34ch',margin:align==='center'?'0 auto':undefined,display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
      {eyebrow?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-micro)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',color:tone==='invert'?'var(--basilic-300)':'var(--carotte)',fontWeight:'var(--weight-semibold)'}}>{eyebrow}</span>:null}
      <H style={{margin:0,fontFamily:'var(--font-display)',fontWeight:'var(--weight-regular)',fontSize:'var(--text-display-m)',lineHeight:'var(--leading-heading)',letterSpacing:'var(--tracking-heading)',color}}>{title}</H>
      {intro?<p style={{margin:0,fontFamily:'var(--font-body)',fontSize:'var(--text-body-l)',lineHeight:'var(--leading-body)',color:tone==='invert'?'var(--basilic-100)':'var(--text-secondary)',maxWidth:'46ch',textWrap:'pretty'}}>{intro}</p>:null}
    </header>
  );
}
