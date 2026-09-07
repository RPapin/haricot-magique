import React from 'react';

export function Checkbox({label,checked=false,onChange,hint,disabled=false}){
  return (
    <label style={{display:'flex',gap:'10px',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1}}>
      <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
        style={{flex:'0 0 auto',width:20,height:20,marginTop:1,borderRadius:'var(--radius-xs)',display:'inline-flex',alignItems:'center',justifyContent:'center',
          background:checked?'var(--action-primary)':'var(--surface-card)',
          border:'1px solid '+(checked?'var(--action-primary)':'var(--border-strong)'),
          color:'var(--text-on-invert)',fontSize:12,transition:'all var(--dur-quick) var(--ease-soft)'}}>
        {checked?<i className="ph ph-check" aria-hidden="true"></i>:null}
      </span>
      <span style={{display:'flex',flexDirection:'column',gap:'2px'}}>
        <span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-s)',color:'var(--text-body)'}}>{label}</span>
        {hint?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',color:'var(--text-muted)'}}>{hint}</span>:null}
      </span>
    </label>
  );
}
