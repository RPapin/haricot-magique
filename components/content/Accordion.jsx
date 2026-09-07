import React from 'react';

export function Accordion({items=[],defaultOpen=null}){
  const [open,setOpen]=React.useState(defaultOpen);
  return (
    <div style={{borderTop:'1px solid var(--border-hairline)'}}>
      {items.map((it,i)=>{
        const on=open===(it.id||i);
        return (
          <div key={it.id||i} style={{borderBottom:'1px solid var(--border-hairline)'}}>
            <button onClick={()=>setOpen(on?null:(it.id||i))}
              style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',
                background:'none',border:'none',cursor:'pointer',padding:'20px 0',textAlign:'left',
                fontFamily:'var(--font-display)',fontSize:'var(--text-heading-m)',color:'var(--text-display)'}}>
              <span>{it.question}</span>
              <i className={'ph '+(on?'ph-minus':'ph-plus')} aria-hidden="true" style={{fontSize:'1rem',color:'var(--carotte)'}}></i>
            </button>
            <div style={{overflow:'hidden',maxHeight:on?'30rem':0,opacity:on?1:0,transition:'max-height var(--dur-base) var(--ease-soft),opacity var(--dur-base) var(--ease-soft)'}}>
              <p style={{margin:'0 0 22px',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',lineHeight:'var(--leading-body)',color:'var(--text-secondary)',maxWidth:'62ch',textWrap:'pretty'}}>{it.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
