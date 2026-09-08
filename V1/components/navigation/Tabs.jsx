import React from 'react';

export function Tabs({items=[],value,onChange}){
  return (
    <div role="tablist" style={{display:'flex',gap:'var(--space-5)',borderBottom:'1px solid var(--border-hairline)'}}>
      {items.map(it=>{
        const on=value===it.id;
        return (
          <button key={it.id} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(it.id)}
            style={{background:'none',border:'none',cursor:'pointer',padding:'0 0 12px',
              fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',
              color:on?'var(--text-display)':'var(--text-muted)',
              boxShadow:on?'inset 0 -2px 0 var(--basilic-700)':'none',
              transition:'color var(--dur-quick) var(--ease-soft)'}}>
            {it.label}{it.count!=null?<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-meta)',color:'var(--text-muted)',marginLeft:6}}>{it.count}</span>:null}
          </button>
        );
      })}
    </div>
  );
}
