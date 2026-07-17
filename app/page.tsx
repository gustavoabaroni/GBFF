const work = [
  {
    type: "Site",
    number: "01",
    title: "KWZ Tecnologia",
    description: "Presença digital para tecnologia e negócios.",
    href: "http://kwztecnologia.net.br/",
    tone: "yellow",
  },
  {
    type: "Site",
    number: "02",
    title: "KWZ Preview",
    description: "Experiência web com foco em clareza e conversão.",
    href: "https://preview.kwztecnologia.net.br/",
    tone: "paper",
  },
  {
    type: "Site",
    number: "03",
    title: "Meu Pharma Club",
    description: "Plataforma digital para o segmento farmacêutico.",
    href: "https://meupharmaclub.com.br/",
    tone: "black",
  },
  {
    type: "Vídeo",
    number: "04",
    title: "Narrativas em movimento",
    description: "Produção audiovisual pensada para prender atenção.",
    href: "https://drive.google.com/file/d/1YnLcUgGUcZTG8yl9byGbC1cc284vVFRv/view?usp=drive_link",
    tone: "black",
  },
  {
    type: "Vídeo",
    number: "05",
    title: "Conteúdo para YouTube",
    description: "Roteiro, ritmo e edição com linguagem de plataforma.",
    href: "http://youtube.com/watch?si=LwqX487tn33BobwA&v=qgSrFGlWXBo&feature=youtu.be",
    tone: "yellow",
  },
  {
    type: "Vídeo",
    number: "06",
    title: "Comunicação audiovisual",
    description: "Ideias transformadas em histórias que circulam.",
    href: "https://www.youtube.com/watch?v=5p8Fd9XP6EQ",
    tone: "paper",
  },
  {
    type: "Identidade visual",
    number: "07",
    title: "Pharmacia Vespasiano",
    description: "Sistema visual com personalidade e consistência.",
    href: "https://www.behance.net/gallery/218305061/Pharmacia-Vespasiano",
    tone: "paper",
  },
  {
    type: "Identidade visual",
    number: "08",
    title: "Projeto de marca",
    description: "Conceito, linguagem e aplicações para uma marca viva.",
    href: "https://drive.google.com/file/d/1kqNjeo7sXI71van19r3Dqan2eY_gyyud/view?usp=drive_link",
    tone: "black",
  },
  {
    type: "Identidade visual",
    number: "09",
    title: "Ecos de Desolação",
    description: "Direção de arte inspirada em Crime e Castigo.",
    href: "https://www.behance.net/gallery/191913797/Ecos-de-Desolacao-Crime-e-Castigo",
    tone: "yellow",
  },
];

const services = [
  "Portais",
  "Blogs",
  "YouTube",
  "Instagram",
  "LinkedIn",
  "Spotify",
  "Google & Meta Ads",
  "Apple e Play Store",
];

const clients = [
  "Brasil Paralelo",
  "Jeep",
  "Pedro Sobral",
  "Porto Seguro",
  "Ixer Telemedicina",
  "Chevrolet",
  "G7 Jurídico",
  "Stellantis",
  "V4 Company",
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="GBFF - início">
          <img src="/assets/page-1-image-1.png" alt="GBFF" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#trabalhos">Trabalhos</a>
        </nav>
        <a className="header-cta" href="https://wa.me/5541998663243" target="_blank" rel="noreferrer">
          Vamos conversar <Arrow />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-kicker"><span /> Agência criativa independente</div>
        <h1>
          Ideias <em>inconformadas.</em><br />
          Marcas impossíveis<br />
          de <span className="outline">ignorar.</span>
        </h1>
        <div className="hero-bottom">
          <p>Estratégia, design e conteúdo para empresas que não vieram ao mercado para ser mais uma.</p>
          <a className="circle-link" href="#trabalhos" aria-label="Ver trabalhos">
            <span>Ver<br />trabalhos</span>
            <Arrow />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/assets/page-2-image-1.png" alt="" />
        </div>
        <div className="shape shape-one" aria-hidden="true" />
        <div className="shape shape-two" aria-hidden="true" />
      </section>

      <div className="ticker" aria-hidden="true">
        <div>ESTRATÉGIA • DESIGN • CONTEÚDO • PERFORMANCE • ESTRATÉGIA • DESIGN • CONTEÚDO • PERFORMANCE •</div>
      </div>

      <section className="about section" id="sobre">
        <div className="section-label">01 / Quem somos</div>
        <div className="about-grid">
          <h2>Um grupo<br />inconformado<br />em ser <i>comum.</i></h2>
          <div className="about-copy">
            <p>Uma agência com profissionais altamente qualificados. Um time que não vê a sua empresa como mais uma no mercado.</p>
            <div className="stats">
              <div><strong>+10</strong><span>anos de<br />experiência</span></div>
              <div><strong>360º</strong><span>mercado digital<br />e tradicional</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section" id="atuacao">
        <div className="section-label light">02 / Áreas de atuação</div>
        <div className="services-intro">
          <h2>Do e-mail que ninguém abre ao feed que todos veem.</h2>
          <p>Atuamos em todas as áreas comunicativas da sua empresa, unindo visão estratégica e execução cuidadosa.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-row" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
              <span className="service-plus">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="clients section">
        <div className="section-label">03 / Experiência</div>
        <div className="clients-head">
          <h2>Marcas que já passaram pelas nossas ideias.</h2>
          <p>Também atendemos negócios locais: deliveries, academias, restaurantes e lojas.</p>
        </div>
        <div className="client-cloud">
          {clients.map((client, index) => <span className={index % 3 === 1 ? "filled" : ""} key={client}>{client}</span>)}
        </div>
      </section>

      <section className="work section" id="trabalhos">
        <div className="section-label">04 / Trabalhos selecionados</div>
        <div className="work-head">
          <h2>Algumas ideias<br />que saíram do papel.</h2>
          <p>Sites, vídeos e identidades visuais criados para diferentes mercados, formatos e ambições.</p>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <a className={`work-card ${item.tone}`} href={item.href} target="_blank" rel="noreferrer" key={item.number}>
              <div className="card-top"><span>{item.type}</span><span>{item.number}</span></div>
              <div className="card-mark" aria-hidden="true">{item.title.slice(0, 2).toUpperCase()}</div>
              <div className="card-bottom">
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <div className="card-arrow"><Arrow /></div>
              </div>
            </a>
          ))}
        </div>
        <p className="work-note">Os trabalhos apresentam peças produzidas para diferentes nichos; por isso, variam em formato, linguagem e produção.</p>
      </section>

      <section className="contact" id="contato">
        <div className="contact-noise" aria-hidden="true" />
        <p className="contact-kicker">Tem um desafio para nós?</p>
        <h2>Interessado?</h2>
        <p className="contact-copy">Conte a sua ideia. A gente cuida do próximo movimento.</p>
        <div className="contact-actions">
          <a href="https://wa.me/5541998663243" target="_blank" rel="noreferrer">Falar pelo WhatsApp <Arrow /></a>
          <a href="mailto:felipefelix1501@gmail.com">felipefelix1501@gmail.com <Arrow /></a>
        </div>
        <img src="/assets/page-6-image-1.png" alt="GBFF" />
      </section>

      <footer>
        <span>GBFF © {new Date().getFullYear()}</span>
        <span>Mercado digital & tradicional</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
