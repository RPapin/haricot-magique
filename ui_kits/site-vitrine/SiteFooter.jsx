const {Wordmark}=window.LeHaricotMagiqueDesignSystem_35ce97;

function SiteFooter(){
  const d=window.LHM_DATA;
  return (
    <footer style={{borderTop:'1px solid var(--border-hairline)',background:'var(--surface-card)'}}>
      <div style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'var(--space-7) var(--gutter)',display:'flex',flexWrap:'wrap',gap:'var(--space-6)',justifyContent:'space-between',alignItems:'flex-end'}}>
        <Wordmark size="md" subtitle />
        <div style={{display:'flex',gap:'var(--space-6)',flexWrap:'wrap',fontSize:'var(--text-meta)',color:'var(--text-muted)'}}>
          <span>{d.contact.lieu}</span>
          <span style={{fontFamily:'var(--font-mono)'}}>Téléphone: {d.contact.tel}</span>
          <span style={{fontFamily:'var(--font-mono)'}}>E-mail: {d.contact.mail}</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window,{SiteFooter});
