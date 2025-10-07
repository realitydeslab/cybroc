import Storyboard, { StoryFrame } from './components/storyboard';

const livePlatforms = [
  { label: 'Live on X', href: 'https://x.com/cybroc_life' },
  { label: 'Live on Pump.Fun', href: 'https://pump.fun/' },
  { label: 'Live on Instagram', href: 'https://www.instagram.com/cybroc_life' },
];

const storyFrames: StoryFrame[] = [
  {
    src: '/storyboard/cybroc-calibration.png',
    alt: 'Broccoli cyborg suspended in the servo frame during calibration.',
    caption: 'Calibration still inside the ALIFE 2025 installation lab.',
  },
  {
    src: '/storyboard/cybroc-audience.png',
    alt: 'Audience gathered around the Cybroc kinetic setup in Kyoto.',
    caption: 'Visitors witnessing the live training routine on site.',
  },
  {
    src: '/storyboard/cybroc-prosthetic.webp',
    alt: 'Close-up of mechanical prosthetics wrapped around broccoli stalks.',
    caption: 'Detail of the prosthetic grip executing Blueprint motions.',
  },
  {
    src: '/storyboard/cybroc-telemetry.webp',
    alt: 'Projection and monitors relaying the live Cybroc telemetry.',
    caption: 'Broadcast control wall synchronising the multiplatform stream.',
  },
];

export default function Page() {
  return (
    <div className="page">
      <header>
        <h1 className="title">Cybroc 🥦</h1>
        <p className="lede">
          Would you choose 80 years of natural life or maybe 100+ years of an artificialized life mechanized by protocols?
        </p>
      </header>

      <section className="hero" aria-labelledby="cybroc-video">
        <div className="video-frame" id="cybroc-video">
          <video
            src="/Cybroc.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            poster="/storyboard/cybroc-audience.png"
          >
            Your browser does not support the embedded video. Download the performance footage to watch.
          </video>
        </div>
      </section>
      <section className="alife" aria-labelledby="alife-heading">
        <div className="alife-header">
          <h2 id="alife-heading">Make Artificial Life Live</h2>
        </div>
        <div className="alife-description">
          <p>
            <strong>Cybroc</strong> is exhibited at{' '}
            <a href="https://2025.alife.org" target="_blank" rel="noreferrer">the 2025 Conference on Artificial Life (ALIFE 2025), Kyoto, Japan</a>.
          </p>
          <p>
            We will live-stream these kinetic performances from the conference expo floor throughout <strong>October 7 – October 10</strong>,
            broadcasting every day from <strong>12 PM to 6 PM (JST)</strong> as the broccoli ensemble executes the Blueprint protocol routines in real time.
          </p>
          <p>
              Please help us to share the live broadcast links below to help us reach @bryan_johnson and let him retweet about Cybrog, who is executing his Blueprint protocol. 
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
          <h3>/ Catalogue /</h3>
          <p>
            Life resists death. Silicon Valley has transformed longevity activism into a movement. Their "Don't die" slogan becomes protocols: broccoli, pills, and routines promise immortality by spreadsheet. Cybroc answers with a row of broccoli "cyborgs" that train harder than any billionaire body—running tiny treadmills, plunging in ice baths, brachiating on servo arms, sled-pushing on timing belts. They perform the rituals of longevity with machine devotion. And then, over days of exhibition, of course, they rot, inevitably. The green floret becomes brown, while the motors keep counting reps. Cybroc is an embodied argument: when we arrogantly attempt to engineer vitality, are we truly extending natural life—or merely mechanizing its inevitable decay?
          </p>
        </div>


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

        <div className="article-gallery">
          <img src="/storyboard/cybroc-prosthetic.webp" alt="Close-up of mechanical prosthetics wrapped around broccoli stalks." />
          <img src="/storyboard/cybroc-telemetry.webp" alt="Projection and monitors relaying the live Cybroc telemetry." />
          <img src="/storyboard/cybroc-audience.png" alt="Audience gathered around the Cybroc kinetic setup in Kyoto." />
          <img src="/storyboard/cybroc-calibration.png" alt="Broccoli cyborg suspended in the servo frame during calibration." />
        </div>
        
        <footer>
          See more on the project:<br/>
          <a href="https://reality.design/project/cybroc">https://reality.design/project/cybroc</a><br/>
          <a href="http://kehuang.org/cybroc">http://kehuang.org/cybroc</a>
        </footer>
      </section>
    </div>
  );
}
