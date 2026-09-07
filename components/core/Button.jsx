import React from 'react';

const btnBase={fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',borderRadius:'var(--radius-pill)',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'10px',cursor:'pointer',border:'1px solid transparent',textDecoration:'none',lineHeight:1.1,transition:'background var(--dur-quick) var(--ease-soft),color var(--dur-quick) var(--ease-soft),transform var(--dur-instant) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)'};
const btnSizes={sm:{padding:'8px 16px',fontSize:'var(--text-body-s)'},md:{padding:'12px 26px',fontSize:'var(--text-body-m)'},lg:{padding:'17px 34px',fontSize:'var(--text-body-l)'}};
const btnVariants={
  primary:{rest:{background:'var(--action-primary)',color:'var(--text-on-invert)'},hover:{background:'var(--action-primary-hover)',boxShadow:'var(--shadow-hover)'}},
  accent:{rest:{background:'var(--action-accent)',color:'var(--lin-50)'},hover:{background:'var(--action-accent-hover)',boxShadow:'var(--shadow-hover)'}},
  outline:{rest:{background:'transparent',color:'var(--text-body)',borderColor:'var(--border-strong)'},hover:{background:'var(--surface-card)',borderColor:'var(--basilic-700)'}},
  ghost:{rest:{background:'transparent',color:'var(--text-link)'},hover:{color:'var(--text-link-hover)'}}
};

export function Button({variant='primary',size='md',href,icon,iconTrailing,disabled=false,fullWidth=false,onClick,children,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const v=btnVariants[variant]||btnVariants.primary;
  const style={...btnBase,...btnSizes[size],...v.rest,...(hover&&!disabled?v.hover:null),
    width:fullWidth?'100%':undefined,
    transform:press&&!disabled?'scale(var(--press-scale))':'scale(1)',
    opacity:disabled?.45:1,cursor:disabled?'not-allowed':'pointer'};
  const Tag=href&&!disabled?'a':'button';
  return (
    <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==='button'?disabled:undefined} style={style}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false);}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>
      {icon?<i className={'ph ph-'+icon} style={{fontSize:'1.15em'}} aria-hidden="true"></i>:null}
      <span>{children}</span>
      {iconTrailing?<span style={{width:'1.7em',height:'1.7em',borderRadius:'var(--radius-pill)',display:'inline-flex',alignItems:'center',justifyContent:'center',background:variant==='primary'||variant==='accent'?'rgba(251,247,239,.16)':'var(--surface-sunk)',transform:hover?'translate(2px,-1px)':'none',transition:'transform var(--dur-base) var(--ease-soft)'}}><i className={'ph ph-'+(typeof iconTrailing==='string'?iconTrailing:'arrow-up-right')} aria-hidden="true"></i></span>:null}
    </Tag>
  );
}
