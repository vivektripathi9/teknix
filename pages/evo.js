import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";

const evoCabinStyles = [
  { name: "Modern", image: "/img/Slide 1 (1).png" },
  { name: "Signature", image: "/img/Slide 1 (1).png" },
  { name: "Noir", image: "/img/Slide 1 (1).png" },
  { name: "Victoria", image: "/img/Slide 1 (1).png" },
];

export default function Evo() {
  const [styleIndex, setStyleIndex] = useState(0);
  const activeStyle = evoCabinStyles[styleIndex];

  const selectStyle = (index) => {
    setStyleIndex(index);
  };

  const stepStyle = (direction) => {
    setStyleIndex((current) => {
      const next = current + direction;
      if (next < 0) return evoCabinStyles.length - 1;
      if (next >= evoCabinStyles.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>EVO | Teknix Elevators</title>
        <meta
          name="description"
          content="EVO by Teknix Elevators — a new era of vertical luxury."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.teknixelevators.com/evo/" />
      </Head>

      <div className="evo-page">
        <section className="evo-hero" aria-label="EVO hero">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-8">
                <h1 className="evo-hero-title" data-aos="fade-up">
                  THE EVOLUTION
                  <br />
                  OF HOME
                  <br />
                  ELEVATORS
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="evo-advantage" aria-label="The EVO advantage">
          <div className="evo-advantage-frame">
            <div className="evo-advantage-copy" data-aos="fade" data-aos-duration="900">
              <p className="evo-advantage-eyebrow">THE EVO ADVANTAGE</p>
              <h2 className="evo-advantage-heading">
                COMPACT ENGINEERING,
                <br />
                ELEVATED LIVING
              </h2>
              <p className="evo-advantage-body">
                Teknix EVO is designed to bring the convenience of an elevator
                into homes with limited space—combining compact belt-drive
                technology, low power consumption and refined design.
              </p>
            </div>

            <div className="evo-advantage-stats" data-aos="fade" data-aos-delay="150">
              <div className="evo-stat">
                <p className="evo-stat-value">
                  300 <span>MM</span>
                </p>
                <p className="evo-stat-label">MINIMUM PIT</p>
              </div>
              <div className="evo-stat">
                <p className="evo-stat-value">
                  3200 <span>MM</span>
                </p>
                <p className="evo-stat-label">MINIMUM OVERHEAD</p>
              </div>
              <div className="evo-stat">
                <p className="evo-stat-value">
                  1.2 <span>KV</span>
                </p>
                <p className="evo-stat-label">DRIVE POWER</p>
              </div>
            </div>

            <img
              className="evo-advantage-art"
              src="/img/magnific_enhance-image-and-keep-th_iG0oEsf3uK 1.png"
              alt="EVO elevator shaft cross-section showing 3200 mm minimum overhead and 300 mm minimum pit"
              width={438}
              height={544}
              data-aos="fade"
              data-aos-delay="250"
            />
          </div>
        </section>

        <section className="evo-home" aria-label="Built around your home">
          <div className="evo-home-frame">
            <div className="evo-home-media" data-aos="fade">
              <img
                src="/img/Frame 1.png"
                alt="Couple using a compact EVO home elevator in a modern residence"
                width={1016}
                height={651}
              />
            </div>
            <div className="evo-home-copy" data-aos="fade" data-aos-delay="150">
            <p className="evo-advantage-eyebrow">BUILT AROUND YOUR HOME</p>
            <h2 className="evo-home-heading">
              MORE POSSIBILITIES
              <br />
              LESS SPACE REQUIRED
            </h2>
            <p className="evo-home-body">
              EVO is engineered to integrate naturally into your architecture —
              not dominate it.
            </p>
            <ul className="evo-home-features">
              <li>
                <p className="evo-home-feature-title">
                  COMPACT <span>BY DESIGN</span>
                </p>
                <p className="evo-home-feature-text">
                  More Elevator, Less Footprint
                </p>
              </li>
              <li>
                <p className="evo-home-feature-title">
                  LOWER <span>POWER</span>
                </p>
                <p className="evo-home-feature-text">
                  More performance, less energy
                </p>
              </li>
              <li>
                <p className="evo-home-feature-title">
                  DESIGNED <span>TO BELONG</span>
                </p>
                <p className="evo-home-feature-text">
                  Choose between an existing shaft or a EVO profile shaft
                  position
                </p>
              </li>
            </ul>
          </div>
          </div>
        </section>

        <section className="evo-fit" aria-label="Designed to fit your space">
          <h2 className="evo-fit-heading" data-aos="fade-up">
            DESIGNED TO FIT YOUR SPACE.
            <br />
            YOUR ARCHITECTURE
          </h2>
          <div className="evo-fit-row">
            <div className="evo-fit-option" data-aos="fade-right">
              <img
                src="/img/Frame 1.svg"
                alt="EVO elevator installed in an existing concrete shaft"
                width={454}
                height={661}
              />
              <div className="evo-fit-copy">
                <h3>EXISTING SHAFT</h3>
                <p>
                  For RCC, concrete and masonry shafts. Ideal for existing
                  villas, renovation projects and homes with a pre-defined
                  elevator space.
                </p>
              </div>
            </div>

            <div className="evo-fit-or" aria-hidden="true" data-aos="zoom-in" data-aos-delay="100">
              OR
            </div>

            <div className="evo-fit-option evo-fit-option-reverse" data-aos="fade-left">
              <img
                src="/img/Frame 2.svg"
                alt="EVO profile shaft with glass panels"
                width={454}
                height={661}
              />
              <div className="evo-fit-copy">
                <h3>EVO PROFILE SHAFT</h3>
                <p>A complete elevator and architectural shaft solution.</p>
                <p className="evo-fit-available">Available in:</p>
                <ul>
                  <li>ALUMINIUM PROFILE</li>
                  <li>COLD ROLLED STEEL PROFILE</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="evo-need" aria-label="EVO specifications">
          <div className="evo-need-inner">
            <h2 className="evo-need-heading" data-aos="fade-right">
              EVERYTHING
              <br />
              YOU NEED.
              <br />
              NOTHING
              <br />
              YOU DON&apos;T.
            </h2>
            <div className="evo-need-diagram" data-aos="fade-up" data-aos-delay="120">
              <img
                src="/img/magnific_change-the-bg-color-to-e3_BhF2zmqoQR 1 (1).svg"
                alt="Exploded technical diagram of the EVO elevator cabin"
                width={1297}
                height={591}
              />
            </div>
          </div>
        </section>

        <section className="evo-safety" aria-label="EVO safety systems">
          <h2 className="evo-safety-heading">
            MULTIPLE SYSTEMS. MULTIPLE LAYERS.
            <br />
            ONE PURPOSE.
          </h2>
          <div className="evo-safety-stage">
            <img
              src="/img/magnific_change-the-bg-color-to-bl_jU9v5QTLD0 1.svg"
              alt="EVO elevator safety system wireframe"
              width={1230}
              height={687}
              data-aos="fade"
            />
            <article className="evo-safety-item evo-safety-item-l1">
              <h3>DYNAMIC MOTION SAFEGUARD</h3>
              <p>Helps detect and prevent unintended car movement</p>
            </article>
            <article className="evo-safety-item evo-safety-item-l2">
              <h3>CENTRIFUGAL OVERSPEED SAFETY SHIELD</h3>
              <p>Responds to abnormal speed conditions</p>
            </article>
            <article className="evo-safety-item evo-safety-item-l3">
              <h3>ANTI-SEQUENCE PROTECTION</h3>
              <p>Detects obstructions and automatically reverses the door</p>
            </article>
            <article className="evo-safety-item evo-safety-item-r1">
              <h3>UNDER-DOOR SAFETY BARRIER</h3>
              <p>Additional physical protection beneath landing door</p>
            </article>
            <article className="evo-safety-item evo-safety-item-r2">
              <h3>DUAL-VENTED BRAKE PRECISION TECHNOLOGY</h3>
              <p>Controlled braking and enhanced stability</p>
            </article>
            <article className="evo-safety-item evo-safety-item-r3">
              <h3>SMARTSENSE BRAKING INTELLIGENCE</h3>
              <p>Monitors abnormal conditions to prevent unintended descent</p>
            </article>
          </div>
        </section>

        <section className="evo-style" aria-label="EVO cabin styles">
          <p className="evo-style-eyebrow" data-aos="fade-up">
            YOUR EVO. <span>YOUR EXPRESSION.</span>
          </p>
          <h2 className="evo-style-heading" data-aos="fade-up" data-aos-delay="80">STEP INSIDE YOUR STYLE</h2>
          <div className="evo-style-row" data-aos="fade-up" data-aos-delay="160">
            <ul className="evo-style-list">
              {evoCabinStyles.map((style, index) => (
                <li key={style.name}>
                  <button
                    type="button"
                    className={index === styleIndex ? "is-active" : ""}
                    onClick={() => selectStyle(index)}
                  >
                    {style.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="evo-style-preview">
            <div className="evo-style-nav">
              <button
                type="button"
                aria-label="Previous cabin style"
                onClick={() => stepStyle(-1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 15l6-6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next cabin style"
                onClick={() => stepStyle(1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="evo-style-media">
              <img
                key={activeStyle.name}
                src={activeStyle.image}
                alt={`${activeStyle.name} EVO cabin interior`}
                width={610}
                height={414}
                className="evo-style-photo"
              />
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
