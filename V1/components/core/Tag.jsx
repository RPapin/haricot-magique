import React from 'react';

const tagColors={carotte:'--carotte',tomate:'--tomate',betterave:'--betterave',aubergine:'--aubergine',courgette:'--courgette',ble:'--ble',chou:'--chou',basilic:'--basilic-700'};
export function Tag({color='courgette',selected=false,onClick,children}){
  const c='var('+(tagColors[color]||tagColors.courgette)+')';
  const soft=tagColors[color]&&color!=='basilic'?'var(--'+color+'-soft)':'var(--basilic-100)';
  const [hover,setHover]=React.useState(false);
  const interactive=Boolean(onClick);
  return (
    <button type="button" onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{fontFamily:'var(--font-body)',fontSize:'var(--text-meta)',letterSpacing:'.01em',padding:'6px 14px',borderRadius:'var(--radius-pill)',cursor:interactive?'pointer':'default',
        background:selected?c:(hover&&interactive?soft:'transparent'),
        color:selected?'var(--lin-50)':c,
        border:'1px solid '+(selected?c:'var(--border-hairline)'),
        transition:'all var(--dur-quick) var(--ease-soft)'}}>
      {children}
    </button>
  );
}
