<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>M/S JEETTECNIKA — Engineering Trust. Delivering Excellence.</title>
  <meta name="description" content="M/S JEETTECNIKA — Engineering, maintenance and industrial service solutions for Indian Railways and allied industries.">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#f7fafc; --card:#ffffff; --accent:#0f172a; --muted:#6b7280; --brand:#1f6feb;
      --container:1100px;
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    body{margin:0;background:var(--bg);color:var(--accent);line-height:1.55}
    .wrap{max-width:var(--container);margin:36px auto;padding:0 20px}

    header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
    .brand{display:flex;gap:14px;align-items:center}
    .logo{width:56px;height:56px;border-radius:8px;background:linear-gradient(135deg,#0ea5e9,#7c3aed);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
    nav a{margin-left:16px;text-decoration:none;color:var(--muted);font-weight:600}

    .hero{background:linear-gradient(180deg, rgba(31,111,235,0.06), rgba(255,255,255,0));padding:28px;border-radius:12px;display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:center}
    .hero h1{margin:0;font-size:20px}
    .subtitle{font-size:14px;color:var(--muted);margin-top:6px}
    .hero-card{background:var(--card);padding:18px;border-radius:10px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}

    .grid{display:grid;grid-template-columns:2fr 1fr;gap:22px;margin-top:18px}
    section.card{background:var(--card);padding:20px;border-radius:10px;box-shadow:0 6px 18px rgba(15,23,42,0.04)}
    h2{margin:0 0 8px 0;font-size:18px}
    h3{margin:12px 0 6px 0;font-size:15px;color:var(--brand)}
    p{margin:8px 0;color:#111827}
    dl{margin:8px 0}
    dt{font-weight:700}
    dd{margin:4px 0 12px 0;color:var(--muted)}

    .list{display:grid;gap:8px}
    .badge{display:inline-block;padding:6px 10px;border-radius:999px;background:#eef2ff;color:#4338ca;font-weight:700;font-size:13px}

    .contact-card{background:linear-gradient(180deg,#ffffff, #fbfdff);padding:18px;border-radius:10px}
    .contact-card a{display:block;color:var(--brand);text-decoration:none;margin:6px 0}

    footer{margin-top:28px;padding:18px;text-align:center;color:var(--muted);font-size:13px}

    /* responsive */
    @media (max-width:880px){
      .hero{grid-template-columns:1fr}
      .grid{grid-template-columns:1fr}
      .logo{width:48px;height:48px}
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="logo">J</div>
        <div>
          <div style="font-weight:800">M/S JEETTECNIKA</div>
          <div style="font-size:13px;color:var(--muted)">Engineering Trust. Delivering Excellence.</div>
        </div>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <div class="hero">
      <div class="hero-card">
        <h1>About M/S JEETTECNIKA</h1>
        <p class="subtitle">Professionally managed partnership firm providing engineering, maintenance and industrial service solutions for Indian Railways and allied industries. Established on <strong>November 24, 2020</strong>, headquartered in Saran, Bihar.</p>

        <h3>Location & Focus</h3>
        <p>Strategically located near Rail Wheel Plant (RWP), Bela — trusted partner in the railway ecosystem providing solutions compliant with RDSO, ICF, and RWP specifications.</p>

        <h3>Vision</h3>
        <p>To lead engineering excellence through innovation and sustainability for Indian Railways and allied industries.</p>

        <h3>Mission</h3>
        <p>To deliver cost-effective, eco-friendly, and high-quality engineering solutions that exceed client expectations and set industry benchmarks.</p>
      </div>

      <aside class="hero-card contact-card">
        <strong>Contact</strong>
        <a href="mailto:jeettecnika43@gmail.com">jeettecnika43@gmail.com</a>
        <a href="tel:+919852800116">+91-9852800116</a>
        <div style="margin-top:8px;color:var(--muted);font-size:13px">Address:</div>
        <div style="font-size:13px">Mohan Kothiya, Akbarpur Panchayat, Dariyapur Block, Saran, Bihar – 841207</div>
        <div style="margin-top:10px">
          <span class="badge">GSTIN: 10AAHFJ2694E1ZQ</span>
        </div>
        <div style="margin-top:10px;font-size:13px">
          <a href="https://www.jeettecnika.in" target="_blank" rel="noopener">www.jeettecnika.in</a>
          <div style="margin-top:6px">Social: LinkedIn · X</div>
        </div>
      </aside>
    </div>

    <div class="grid">
      <main>
        <section id="about" class="card">
          <h2>Legal Identity</h2>
          <dl>
            <dt>Firm Name</dt><dd>M/S JEETTECNIKA</dd>
            <dt>Registered Under</dt><dd>Indian Partnership Act, 1932</dd>
            <dt>Date of Incorporation</dt><dd>November 24, 2020</dd>
            <dt>PAN</dt><dd>AAHFJ2694E</dd>
            <dt>GSTIN</dt><dd>10AAHFJ2694E1ZQ</dd>
          </dl>

          <h2>Nature of Business</h2>
          <ul class="list">
            <li>Turnkey contract services for railway and industrial projects</li>
            <li>Annual Maintenance Contracts (AMC) & facility maintenance for electrical & mechanical panels</li>
            <li>Customized industrial engineering solutions</li>
            <li>Authorized representative & liaison services for reputed brands</li>
          </ul>
        </section>

        <section id="partners" class="card" style="margin-top:18px">
          <h2>Partners & Key Associations</h2>
          <p><strong>Firm Partners (Owners):</strong> Managed by a dedicated team of partners including <strong>Mr. Bishwajeet Kumar Sharma</strong>. For partner details, contact <a href="mailto:jeettecnika43@gmail.com">jeettecnika43@gmail.com</a>.</p>

          <h3>M/S SUN PETROCHEMICALSS</h3>
          <p>Authorized representative for NAE WOI KOREA (NWK-99 OPP) — an eco-friendly cleaning solution that improves equipment longevity and reduces maintenance costs.</p>

          <h3>Zircar Refractories Ltd.</h3>
          <p>Official liaison at Rail Wheel Plant (RWP), Bela — coordination and supply of Clay-Graphite refractory components used in wheel manufacturing.</p>
        </section>

        <section id="experience" class="card" style="margin-top:18px">
          <h2>Past Experience</h2>
          <ul>
            <li>Repair & maintenance of electrical distribution panels for railway workshops</li>
            <li>Installation & servicing of door locks and hinges</li>
            <li>Seal/gasket replacement in industrial panel systems</li>
            <li>Technical procurement assistance & facility management services for workshops</li>
            <li>Coordinated supply chain support for Zircar’s refractory components at RWP Bela</li>
          </ul>

          <h2 style="margin-top:12px">Key Achievements</h2>
          <ul>
            <li>Recognized by RWP Bela in 2022 for timely project execution</li>
            <li>Achieved 15% reduction in maintenance costs via NWK-99 OPP</li>
            <li>Zero downtime at RWP Bela through seamless refractory supply coordination</li>
            <li>Trained 50+ local youth in technical skills</li>
            <li>Successfully serviced 100+ electrical panels with 99% client satisfaction</li>
          </ul>
        </section>

        <section id="upcoming" class="card" style="margin-top:18px">
          <h2>Upcoming Projects</h2>
          <ul>
            <li>Panel Lock & Seal Restoration</li>
            <li>Supply & Replacement of Defective Door Locks (DRL-R)</li>
            <li>Servicing of Serviceable Door Locks (DRL-S)</li>
            <li>Supply & Replacement of Panel Door Seals/Gaskets (SG-R)</li>
            <li>Panel Cleaning at RWP Bela using NWK-99 OPP</li>
            <li>Refractory Component Coordination for RWP Bela</li>
          </ul>
        </section>

        <section id="strengths" class="card" style="margin-top:18px">
          <h2>Our Strengths</h2>
          <ul>
            <li>Trained technical workforce with railway & industrial expertise</li>
            <li>Time-bound execution and transparent costing</li>
            <li>Custom industrial solutions and compliance with RDSO, ICF, and RWP specifications</li>
            <li>Strong vendor & industry relationships</li>
            <li>Focus on innovation (IoT-based panel monitoring) and sustainability</li>
          </ul>
        </section>

        <section id="leadership" class="card" style="margin-top:18px">
          <h2>Leadership & CSR</h2>
          <p>Led by professionals with over 20 years of combined experience. <strong>Mr. Bishwajeet Kumar Sharma</strong> serves as partner and liaison for Zircar Refractories Ltd. at RWP Bela.</p>
          <h3>Corporate Social Responsibility</h3>
          <ul>
            <li>Trained 50+ local youth in Bihar</li>
            <li>Promoted eco-friendly practices through biodegradable cleaning solutions</li>
            <li>Supported local initiatives in Saran</li>
          </ul>
        </section>

        <section id="future" class="card" style="margin-top:18px">
          <h2>Future Plans</h2>
          <ul>
            <li>Expand into smart railway solutions with IoT monitoring by 2026</li>
            <li>Invest in renewable energy-based panel systems</li>
            <li>Strengthen liaison role with Zircar Refractories Ltd.</li>
            <li>Forge partnerships with additional global brands</li>
          </ul>
        </section>

        <section id="testimonial" class="card" style="margin-top:18px">
          <h2>Client Testimonial</h2>
          <blockquote style="margin:8px 0;padding-left:12px;border-left:4px solid #e6eefc;color:var(--muted)">“M/S JEETTECNIKA’s timely and high-quality services, combined with Mr. Bishwajeet Kumar Sharma’s effective liaison for Zircar Refractories Ltd., have significantly enhanced our operational efficiency at RWP Bela.” – RWP Bela Official</blockquote>
        </section>
      </main>

      <aside>
        <section class="card contact-card" id="contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:jeettecnika43@gmail.com">jeettecnika43@gmail.com</a></p>
          <p>Phone: <a href="tel:+919852800116">+91-9852800116</a></p>
          <p>Website: <a href="https://www.jeettecnika.in" target="_blank" rel="noopener">www.jeettecnika.in</a></p>
          <p style="color:var(--muted);font-size:13px;margin-top:6px">Address:<br>Mohan Kothiya, Akbarpur Panchayat,<br>Dariyapur Block, Saran, Bihar – 841207</p>

          <h3 style="margin-top:12px">Quick Facts</h3>
          <p style="font-size:14px"><strong>Incorporated:</strong> Nov 24, 2020</p>
          <p style="font-size:14px"><strong>GSTIN:</strong> 10AAHFJ2694E1ZQ</p>

          <div style="margin-top:12px">
            <a href="#" style="text-decoration:none;font-weight:700">LinkedIn</a> · <a href="#" style="text-decoration:none;font-weight:700">X</a>
          </div>
        </section>

        <section class="card" style="margin-top:18px">
          <h2>Technical & Innovation</h2>
          <p>Proficient in IoT-based panel monitoring and automation solutions. We prioritize sustainability by using eco-friendly cleaning agents and advanced refractory solutions for high-temperature applications.</p>
        </section>

        <section class="card" style="margin-top:18px">
          <h2>Download</h2>
          <p>Want this as a PDF or print-friendly page? Use your browser's Print (Ctrl/Cmd+P) to save as PDF or contact us for a company brochure.</p>
        </section>
      </aside>
    </div>

    <footer>
      © 2025 M/S JEETTECNIKA. All rights reserved. &nbsp;|&nbsp; GSTIN: 10AAHFJ2694E1ZQ
    </footer>
  </div>
</body>
</html>
