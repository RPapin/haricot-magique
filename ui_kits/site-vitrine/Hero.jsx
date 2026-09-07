const {Button,Badge,Wordmark}=window.LeHaricotMagiqueDesignSystem_35ce97;

function Hero({onCta}){
  return (
    <section style={{padding:'clamp(48px,7vw,104px) var(--gutter) var(--section-y)',maxWidth:'var(--measure-page)',margin:'0 auto',display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(0,.95fr)',gap:'clamp(24px,5vw,72px)',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        <Badge tone="bio" dot>Maraîchage en permaculture</Badge>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:'var(--weight-regular)',fontSize:'var(--text-display-xl)',lineHeight:'var(--leading-display)',letterSpacing:'var(--tracking-display)',color:'var(--text-display)',textWrap:'balance'}}>
          Des légumes cueillis le matin, vendus l'après-midi
        </h1>
        <p style={{margin:0,maxWidth:'46ch',fontSize:'var(--text-body-l)',lineHeight:'var(--leading-body)',color:'var(--text-secondary)',textWrap:'pretty'}}>
          Nina Papin cultive un hectare à La Tour de Salvagny, sans labour ni traitement. La boutique de la ferme ouvre le mercredi et le samedi.
        </p>
        <div style={{display:'flex',gap:'var(--space-3)',flexWrap:'wrap',marginTop:'var(--space-2)'}}>
          <Button size="lg" iconTrailing onClick={onCta}>Réserver un panier</Button>
          <Button size="lg" variant="outline" icon="map-pin" onClick={()=>onCta&&onCta('visite')}>Venir à la ferme</Button>
        </div>
      </div>
      <div style={{aspectRatio:'4 / 5',borderRadius:'var(--radius-l)',background:'var(--basilic-100)',border:'1px solid var(--border-hairline)',display:'flex',alignItems:'flex-end',padding:'var(--space-5)'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-micro)',letterSpacing:'.04em',color:'var(--text-muted)'}}>photo de la ferme à fournir · format portrait 4:5</span>
      </div>
    </section>
  );
}
Object.assign(window,{Hero});
