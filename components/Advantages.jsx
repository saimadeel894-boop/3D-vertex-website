const advantages = [
  {
    image: "/assets/adv-liquidity.jpg",
    title: (
      <>
        Institutional-Grade
        <br />
        Liquidity
      </>
    ),
    copy: "Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability."
  },
  {
    image: "/assets/adv-execution.jpg",
    title: (
      <>
        Ultra-Fast
        <br />
        Execution
      </>
    ),
    copy: "Average execution speed under 30ms with no dealing desk interference."
  },
  {
    image: "/assets/adv-security.jpg",
    title: (
      <>
        Security You
        <br />
        Can Trust
      </>
    ),
    copy: "Segregated client funds, advanced encryption, and global regulatory oversight."
  },
  {
    image: "/assets/adv-conditions.jpg",
    title: (
      <>
        Professional
        <br />
        Trading Conditions
      </>
    ),
    copy: "Raw spreads, flexible leverage, and low commissions built for serious performance."
  }
];

export function Advantages() {
  return (
    <section className="advantages-section" aria-labelledby="advantages-title">
      <h2 id="advantages-title">
        Advantages Built for <strong>Serious Traders</strong>
      </h2>

      <div className="advantage-grid">
        {advantages.map((advantage) => (
          <article className="advantage-card" key={advantage.image}>
            <img src={advantage.image} alt="" width="171" height="126" loading="lazy" />
            <h3>{advantage.title}</h3>
            <p>{advantage.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
