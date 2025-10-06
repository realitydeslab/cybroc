import Storyboard, { StoryFrame } from './components/storyboard';

const livePlatforms = [
  { label: 'Live on X', href: 'https://x.com/' },
  { label: 'Live on YouTube', href: 'https://www.youtube.com/' },
  { label: 'Live on Pump.Fun', href: 'https://pump.fun/' },
  { label: 'Live on TikTok', href: 'https://www.tiktok.com/' },
];

const storyFrames: StoryFrame[] = [
  {
    src: '/storyboard/frame-01.svg',
    alt: 'Initial sketches of cyborg broccoli prosthetics',
    caption: 'Sketching the prosthetic rig and motion studies.',
  },
  {
    src: '/storyboard/frame-02.svg',
    alt: '3D printed components and mechanical joints on workbench',
    caption: 'Fabrication of mechanical joints and grips.',
  },
  {
    src: '/storyboard/frame-03.svg',
    alt: 'Broccoli specimen outfitted with prosthetic limbs',
    caption: 'First broccoli fitted for blueprint routine testing.',
  },
  {
    src: '/storyboard/frame-04.svg',
    alt: 'Performance stage lighting test with broccoli cyborg',
    caption: 'Lighting rehearsal before the kinetic run.',
  },
  {
    src: '/storyboard/frame-05.svg',
    alt: 'Audience interaction and live stream monitors',
    caption: 'Live audience feeds syncing with the broadcast.',
  },
];

export default function Page() {
  return (
    <div className="page">
      <header>
        <h1 className="title">Cybroc 🥦</h1>
        <p className="lede">
          Ke Huang and Botao Amber Hu
        </p>
      </header>

      <section className="hero" aria-labelledby="cybroc-video">
        <div className="video-frame" id="cybroc-video">
          <video src="/Cybroc.mp4" autoPlay muted loop playsInline controls preload="auto" poster="/storyboard/frame-03.svg">
            Your browser does not support the embedded video. Download the performance footage to watch.
          </video>
        </div>
        <p className="video-caption">
          Would you choose 80 years of natural life or maybe 100+ years of an artificialized life mechanized by protocols?
        </p>
      </section>

      <section className="alife" aria-labelledby="alife-heading">
        <div className="alife-header">
          <h2 id="alife-heading">Make ALife Live</h2>
        </div>
        <div className="alife-description">
          <p>
            <strong>Cybroc</strong> is exhibited at{' '}
            <a href="https://2025.alife.org" target="_blank" rel="noreferrer">The 2025 Conference on Artificial Life, Kyoto, Japan</a>.
          </p>
          <p>
            We will live-stream the kinetic performance from the conference floor throughout <strong>October 7 – October 10</strong>,
            broadcasting every day from <strong>12 PM to 6 PM (JST)</strong> as the broccoli ensemble executes Blueprint protocol routines in real time.
          </p>
        </div>
        <div className="live-buttons" aria-label="Live broadcast platforms">
          {livePlatforms.map((platform) => (
            <a
              key={platform.label}
              className="platform-button live-button"
              href={platform.href}
              target="_blank"
              rel="noreferrer"
            >
              {platform.label}
            </a>
          ))}
        </div>
      </section>

      <section className="article" aria-labelledby="article-heading">
        <h1 id="article-heading">Cybroc (2024 - )</h1>
        <p className="meta">
          <a href="https://kehuang.org"><u>Ke Huang</u></a> and&nbsp;
          <a href="https://amber.botao.hu"><u>Botao Amber Hu</u></a>
        </p>

        <div className="article-section">
          <h3>/ Concept /</h3>
          <p>
            Cybroc is a series of kinetic art installations exploring the recent proliferating populist longevity activism through the satirical cyborgization of broccoli. The artwork augments the symbol of health food—broccoli—with prosthetic limbs to perform so-called longevity-enhancing exercises such as cold plunges, treadmill running, brachiation (arm-swinging), sled pushing, simulations of primal human survival tasks reframed as modern fitness routines.
          </p>
          <p>
            Despite its mechanical augmentations, the broccoli&apos;s inevitable decay and rotting after exhibiting high-intensity performances prompts reflection on the limits of biological enhancement and the ethics of human enhancement beyond natural capabilities, particularly transhumanist ideals. By juxtaposing a symbolic healthy vegetable with cutting-edge concepts of human enhancement, Cybroc challenges viewers to consider the intersection of nature, technology, and the human quest for extended lifespan in our transhuman era.
          </p>
        </div>

        <div className="article-section">
          <h3>/ Background /</h3>
          <p>
            Populist longevity activism is a proliferating movement led by Silicon Valley&apos;s ultra-wealthy, focusing on promoting research, policies, and practices aimed at extending human lifespan and healthspan. For example, billionaire Bryan Johnson is dedicating significant efforts to this cause, promoting his &ldquo;Blueprint&rdquo; protocol to reverse aging.
          </p>
          <p>
            The leading role of our piece, broccoli, a well-known symbol of healthy food, also makes many appearances in his recipes. However, the transhumanist promise of extending life and enhancing human capabilities is critiqued for its potential to exacerbate social inequalities. The ethical considerations surrounding human augmentation, particularly regarding the alteration of human nature, raise concerns about the potential consequences for individual identity and societal values.
          </p>
        </div>

        <div className="article-section">
          <h3>/ Artwork /</h3>
          <p>
            It is in the context of the above topic that our Cybroc project uses broccoli as its central metaphor to critique contemporary longevity movements and transhumanist ideals. By augmenting and cyborgizing broccoli to perform exaggerated fitness routines, the installation satirizes humanity&apos;s obsession with technological enhancement.
          </p>
          <p>
            Each broccoli is fitted with prosthetic limbs and mechanical attachments that enable it to perform longevity-enhancing exercises based on “Blueprint” protocols promoted by longevity activists. A key element of Cybroc is the temporal nature of the artwork. As the broccoli inevitably decays despite its “enhanced” form, the project invites reflection on the futility of technological attempts to transcend the natural lifecycle. This decay serves as both a visual and symbolic critique, challenging the audience to consider the ethical boundaries of human enhancement.
          </p>
        </div>

        <div className="article-section">
          <h3>/ Propagation /</h3>
          <p>
            The Cybroc installation is designed to engage audiences in a dynamic and reflective experience, blending humor, critique, and interaction. The exhibition strategy emphasizes accessibility, multisensory engagement, and meaningful dialogue between the artwork and its viewers.
          </p>
          <p>
            To deepen its connection with audiences, Cybroc introduced a line of physical memorabilia, including wearable broccoli and temporary Cybroc tattoos featuring stylized broccoli cyborgs. These tattoos became an instant hit at the exhibition, with visitors wearing them to showcase their engagement with the artwork.
          </p>
          <p>
            This playful approach extends the project’s reach beyond the exhibition space as attenders share images of their tattoos on social media, inadvertently becoming ambassadors for the artwork. Cybroc also provides digital streaming platforms to extend its reach and foster engagement. Livestreams allow remote audiences to experience the dynamic motion of the broccoli cyborgs in real time, while short videos highlight the humor embedded in the installation.
          </p>
        </div>

        <footer>
          © 2025 CYBROC — References: <a href="https://reality.design/project/cybroc">reality.design</a> ·{' '}
          <a href="http://kehuang.org/cybroc">kehuang.org</a>
        </footer>
      </section>
    </div>
  );
}
