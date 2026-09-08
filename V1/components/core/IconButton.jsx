import React from 'react';

export function IconButton({icon='arrow-right',label,size='md',tone='neutral',onClick,...rest}){
  const [hover,setHover]=React.useState(false);
  const dim={sm:32,md:42,lg:52}[size]||42;
  const tones={
    neutral:{background:hover?'var(--surface-sunk)':'transparent',color:'var(--text-body)',border:'1px solid var(--border-hairline)'},
    solid:{background:hover?'var(--action-primary-hover)':'var(--action-primary)',color:'var(--text-on-invert)',border:'1px solid transparent'},
    soft:{background:hover?'var(--basilic-100)':'var(--surface-card)',color:'var(--basilic-700)',border:'1px solid var(--border-hairline)'}
  };
  return (
    <button aria-label={label} onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:dim,height:dim,borderRadius:'var(--radius-pill)',display:'inline-flex',alignItems:'center',justifyContent:'center',cursor:'pointer',fontSize:dim*0.42,transition:'background var(--dur-quick) var(--ease-soft),transform var(--dur-instant) var(--ease-soft)',...tones[tone]}} {...rest}>
      <i className={'ph ph-'+icon} aria-hidden="true"></i>
    </button>
  );
}
