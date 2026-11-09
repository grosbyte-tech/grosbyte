"use client";

export function AboutCtaVisual() {
  return (
    <div className="cta-terminal-wrapper" aria-hidden="true">
      {/* Ambient Theme Backlight Glow */}
      <div className="cta-terminal-glow" />

      {/* Modern Mac-Style Code Terminal */}
      <div className="cta-terminal-window">
        {/* Window Title Bar */}
        <div className="cta-terminal-titlebar">
          <div className="cta-terminal-dots">
            <span className="cta-dot cta-dot-red" />
            <span className="cta-dot cta-dot-yellow" />
            <span className="cta-dot cta-dot-green" />
          </div>
          <div className="cta-terminal-tab">
            <span className="cta-tab-icon">⚡</span>
            <span>grosbyte.config.ts</span>
          </div>
        </div>

        {/* Terminal Code Body */}
        <div className="cta-terminal-code">
          <div className="cta-code-line">
            <span className="cta-code-num">01</span>
            <span className="cta-code-keyword">import</span>{" "}
            <span className="cta-code-var">{"{ engineer }"}</span>{" "}
            <span className="cta-code-keyword">from</span>{" "}
            <span className="cta-code-str">&quot;@grosbyte/core&quot;</span>;
          </div>

          <div className="cta-code-line">
            <span className="cta-code-num">02</span>
            <span className="text-transparent">_</span>
          </div>

          <div className="cta-code-line">
            <span className="cta-code-num">03</span>
            <span className="cta-code-keyword">export default</span>{" "}
            <span className="cta-code-fn">engineer</span>({"{"}
          </div>

          <div className="cta-code-line cta-code-indent">
            <span className="cta-code-num">04</span>
            <span className="cta-code-prop">project:</span>{" "}
            <span className="cta-code-str">&quot;Your Next Big Product&quot;</span>,
          </div>

          <div className="cta-code-line cta-code-indent">
            <span className="cta-code-num">05</span>
            <span className="cta-code-prop">cadence:</span>{" "}
            <span className="cta-code-str">&quot;2-Week Agile Sprints&quot;</span>,
          </div>

          <div className="cta-code-line cta-code-indent">
            <span className="cta-code-num">06</span>
            <span className="cta-code-prop">ownership:</span>{" "}
            <span className="cta-code-str">&quot;100% Client Code &amp; IP&quot;</span>,
          </div>

          <div className="cta-code-line cta-code-indent">
            <span className="cta-code-num">07</span>
            <span className="cta-code-prop">status:</span>{" "}
            <span className="cta-code-highlight">
              &quot;Production Ready ✓&quot;
            </span>
          </div>

          <div className="cta-code-line">
            <span className="cta-code-num">08</span>
            <span>{"});"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
