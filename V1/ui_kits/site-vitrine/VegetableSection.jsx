const {SectionHeading,VegetableCard,Tag,Tabs}=window.LeHaricotMagiqueDesignSystem_35ce97;

function VegetableSection(){
  const [famille,setFamille]=React.useState('tout');
  const [saison,setSaison]=React.useState('ete');
  const d=window.LHM_DATA;
  const liste=famille==='tout'?d.legumes:d.legumes.filter(l=>l.famille===famille);
  return (
    <section id="legumes" style={{maxWidth:'var(--measure-page)',margin:'0 auto',padding:'var(--section-y) var(--gutter)',display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
      <SectionHeading eyebrow="Au potager" title="Ce qui est en vente cette semaine" intro="La liste change chaque semaine. Les prix sont ceux affichés à la boutique." />
      <Tabs items={[{id:'printemps',label:'Printemps'},{id:'ete',label:'Été',count:liste.length},{id:'automne',label:'Automne'},{id:'hiver',label:'Hiver'}]} value={saison} onChange={setSaison} />
      <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
        {d.familles.map(fa=>(
          <Tag key={fa.id} color={fa.id==='racines'?'carotte':fa.id==='fruits'?'tomate':fa.id==='feuilles'?'courgette':fa.id==='courges'?'ble':'basilic'} selected={famille===fa.id} onClick={()=>setFamille(fa.id)}>{fa.label}</Tag>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'var(--space-5)'}}>
        {liste.map(l=><VegetableCard key={l.name} {...l} />)}
      </div>
    </section>
  );
}
Object.assign(window,{VegetableSection});
