import React from 'react';

export function Select({label,options=[],value,onChange,hint,id}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useMemo(()=>'sel-'+Math.random().toString(36).slice(2,7),[]);
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
      {label?<label htmlFor={uid} style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',fontWeight:'var(--weight-medium)',color:'var(--text-secondary)'}}>{label}</label>:null}
      <div style={{position:'relative',display:'flex',alignItems:'center'}}>
        <select id={uid} value={value} onChange={onChange} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{appearance:'none',width:'100%',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--text-body)',
            background:'var(--surface-card)',border:'1px solid '+(focus?'var(--basilic-700)':'var(--border-hairline)'),
            borderRadius:'var(--radius-s)',padding:'12px 38px 12px 14px',outline:'none',cursor:'pointer',
            boxShadow:focus?'0 0 0 3px rgba(201,98,44,.16)':'none',transition:'all var(--dur-quick) var(--ease-soft)'}}>
          {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
        </select>
        <i className="ph ph-caret-down" aria-hidden="true" style={{position:'absolute',right:14,pointerEvents:'none',color:'var(--text-muted)'}}></i>
      </div>
      {hint?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',color:'var(--text-muted)'}}>{hint}</span>:null}
    </div>
  );
}
