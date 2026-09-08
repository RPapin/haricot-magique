const {SectionHeading,Card}=window.LeHaricotMagiqueDesignSystem_35ce97;

const chiffres=[{v:'1 ha',l:'cultivé à la main'},{v:'0',l:'traitement, zéro labour'},{v:'32',l:'variétés sur l\'année'},{v:'2',l:'ventes par semaine'}];

function FarmStory(){
  return (
    <section id="ferme" style={{background:'var(--surface-card)',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'var(--section-y) var(--gutter)',display:'grid',gridTemplateColumns:'minmax(0,.9fr) minmax(0,1.1fr)',gap:'clamp(24px,5vw,72px)'}}>
        <SectionHeading eyebrow="La ferme" title="Un potager conduit comme un sol vivant" />
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
          <p style={{margin:0,fontSize:'var(--text-body-l)',lineHeight:'var(--leading-body)',color:'var(--text-secondary)',maxWidth:'var(--measure-text)',textWrap:'pretty'}}>
            Les planches sont permanentes et couvertes toute l'année: paille, compost, engrais verts. Le sol n'est jamais retourné, ce qui garde l'eau et la vie qu'il contient. Les cultures sont associées pour se protéger entre elles, et rien ne part en dehors de la ferme: ce qui est récolté le matin est vendu sur place l'après-midi.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'var(--space-4)'}}>
            {chiffres.map(c=>(
              <Card key={c.l} tone="sunk" padding="var(--space-5)">
                <div style={{fontFamily:'var(--font-display)',fontSize:'var(--text-heading-l)',color:'var(--text-display)',lineHeight:1.1}}>{c.v}</div>
                <div style={{marginTop:6,fontSize:'var(--text-meta)',color:'var(--text-muted)'}}>{c.l}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{FarmStory});
