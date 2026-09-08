const {SectionHeading,Accordion,Card,Input,Select,Checkbox,Button}=window.LeHaricotMagiqueDesignSystem_35ce97;

function FaqContact(){
  const d=window.LHM_DATA;
  const [envoye,setEnvoye]=React.useState(false);
  const [prevenir,setPrevenir]=React.useState(true);
  return (
    <section id="contact" style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'var(--section-y) var(--gutter)',display:'grid',gridTemplateColumns:'minmax(0,1.1fr) minmax(0,.9fr)',gap:'clamp(24px,5vw,72px)',alignItems:'start'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        <SectionHeading eyebrow="Questions" title="Ce qu'on nous demande souvent" />
        <Accordion items={d.faq} defaultOpen={0} />
      </div>
      <Card padding="var(--space-6)">
        {envoye
          ? <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
              <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:'var(--weight-regular)',fontSize:'var(--text-heading-l)',color:'var(--text-display)'}}>Message envoyé</h3>
              <p style={{margin:0,fontSize:'var(--text-body-m)',lineHeight:'var(--leading-body)',color:'var(--text-secondary)'}}>Nina répond en général sous deux jours, entre deux récoltes.</p>
              <Button variant="ghost" onClick={()=>setEnvoye(false)}>Écrire un autre message</Button>
            </div>
          : <form style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}} onSubmit={e=>{e.preventDefault();setEnvoye(true);}}>
              <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:'var(--weight-regular)',fontSize:'var(--text-heading-l)',color:'var(--text-display)'}}>Réserver un panier</h3>
              <Input label="Votre prénom" placeholder="Nina" required />
              <Input label="E-mail" type="email" placeholder="vous@exemple.fr" required />
              <Select label="Jour de retrait" options={d.horaires.map(h=>h.jour+' '+h.h)} />
              <Input label="Message" multiline rows={3} hint="Précisez la taille du panier ou ce que vous cherchez." />
              <Checkbox label="Prévenez-moi des nouvelles récoltes" checked={prevenir} onChange={setPrevenir} />
              <Button variant="primary" fullWidth>Envoyer</Button>
            </form>}
      </Card>
    </section>
  );
}
Object.assign(window,{FaqContact});
