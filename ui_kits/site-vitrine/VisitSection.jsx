const {SectionHeading,Card,Button,Badge}=window.LeHaricotMagiqueDesignSystem_35ce97;

function VisitSection(){
  const d=window.LHM_DATA;
  return (
    <section id="visite" style={{background:'var(--surface-invert)',color:'var(--text-on-invert)'}}>
      <div style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'var(--section-y) var(--gutter)',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:'clamp(24px,5vw,72px)',alignItems:'start'}}>
        <SectionHeading tone="invert" eyebrow="Venir nous voir" title="La boutique de la ferme" intro="Libre-service, on remplit son panier et on paie à la caisse en bois près de l'entrée." />
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
          <Card tone="invert" padding="var(--space-5)">
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
              {d.horaires.map(h=>(
                <div key={h.jour} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'var(--space-4)',paddingBottom:'var(--space-3)',borderBottom:'1px solid var(--border-invert)'}}>
                  <span style={{fontFamily:'var(--font-display)',fontSize:'var(--text-heading-m)'}}>{h.jour}</span>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-body-s)',color:'var(--basilic-300)'}}>{h.h}</span>
                </div>
              ))}
              <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)',flexWrap:'wrap'}}>
                <Badge tone="dispo" dot>Ouvert aujourd'hui</Badge>
                <span style={{fontSize:'var(--text-meta)',color:'var(--basilic-300)'}}>Visite guidée le 1er samedi du mois, 10h.</span>
              </div>
            </div>
          </Card>
          <Card tone="invert" padding="var(--space-5)">
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-meta)',color:'var(--basilic-300)'}}>{d.contact.lieu}</span>
              <div style={{aspectRatio:'16 / 7',borderRadius:'var(--radius-s)',background:'rgba(251,247,239,.06)',border:'1px solid var(--border-invert)',display:'flex',alignItems:'flex-end',padding:'var(--space-3)'}}>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-micro)',color:'var(--basilic-300)'}}>plan d'accès à fournir</span>
              </div>
              <Button variant="accent" href="#contact" iconTrailing="arrow-down-right">Écrire à Nina</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{VisitSection});
