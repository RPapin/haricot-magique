import React from 'react';

export function Input({label,hint,type='text',placeholder,value,onChange,error,required=false,multiline=false,rows=4,id}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useMemo(()=>'in-'+Math.random().toString(36).slice(2,7),[]);
  const fieldStyle={fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--text-body)',background:'var(--surface-card)',
    border:'1px solid '+(error?'var(--tomate)':focus?'var(--basilic-700)':'var(--border-hairline)'),
    borderRadius:'var(--radius-s)',padding:'12px 14px',width:'100%',outline:'none',
    boxShadow:focus?'0 0 0 3px rgba(201,98,44,.16)':'none',
    transition:'border-color var(--dur-quick) var(--ease-soft),box-shadow var(--dur-quick) var(--ease-soft)',resize:'vertical'};
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
      {label?<label htmlFor={uid} style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',fontWeight:'var(--weight-medium)',color:'var(--text-secondary)'}}>{label}{required?<span style={{color:'var(--carotte)'}}> *</span>:null}</label>:null}
      {multiline
        ? <textarea id={uid} rows={rows} placeholder={placeholder} value={value} onChange={onChange} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={fieldStyle}></textarea>
        : <input id={uid} type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={fieldStyle} />}
      {error||hint?<span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',color:error?'var(--tomate)':'var(--text-muted)'}}>{error||hint}</span>:null}
    </div>
  );
}
