'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Send, Clipboard, Languages, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

const presets = [
  {
    title: "Grant Proposal Writer",
    prompt: "Write a grant proposal for a clean water initiative in rural Kenya targeting 10,000 households.",
    response: `# Proposal: PureWater Rural Initiative

## 1. Executive Summary
The PureWater Rural Initiative aims to solve the severe water scarcity in the East Turkana District of Kenya. By installing 12 solar-powered borehole filtration systems, we will supply 10,000 households with clean, pathogen-free water.

## 2. Alignment with UN SDGs
- **SDG 6 (Clean Water and Sanitation):** Direct target achievement by delivering 100% pure drinking water.
- **SDG 3 (Good Health & Well-being):** Forecasted 85% drop in local water-borne illnesses within 6 months.

## 3. Financial Budget Allocations
- Drilling & Hardware: $48,000
- Solar Arrays: $15,000
- Community Training: $4,500
- Project Auditing: $2,500
- Total Funding Requested: $70,000

*Drafted successfully by MYHitch AI Co-Pilot.*`
  },
  {
    title: "Volunteer Communication",
    prompt: "Write an urgent WhatsApp alert mobilizing volunteers to pack supplies at the city warehouse tomorrow.",
    response: `🚨 URGENT: Disaster Relief Mobilization 🚨

We need 15 volunteers tomorrow (July 15) at the MYHitch City Warehouse to pack hygiene kits and food supplies for families affected by the regional flooding.

⏰ Time: 9:00 AM - 1:00 PM
📍 Location: 404 Industrial Blvd, Dock B
📋 Attire: Closed-toe shoes required. Water and snacks will be provided.

Let's make a difference together! Register here to log your hours automatically:
👉 myhitch.org/e/flood-relief-july

Thank you for your quick response! 💙`
  },
  {
    title: "Budget Suggestion Generator",
    prompt: "Structure a community medical outreach budget totalling $15,000 with SDG 3 target tracking.",
    response: `### AI-Generated Budget Structuring: Q3 Medical Outreach

| Category | Item Description | Cost (USD) | SDG Target Alignment |
| :--- | :--- | :--- | :--- |
| **Supplies** | Pediatric vaccines & first aid | $6,200 | SDG 3.2 (Under-5 Mortality) |
| **Logistics** | Mobile clinic vehicle hire (3 days) | $2,800 | SDG 3.8 (Universal Health Care) |
| **Personnel** | Stipends for 4 nurses & coordinator | $4,500 | SDG 3.c (Health Financing/Staff) |
| **Compliance** | Audit validation & waste disposal | $1,500 | SDG 6.3 (Water Quality & Safety) |
| **TOTAL** | **Comprehensive Outreach Budget** | **$15,000** | **Audit-Ready Status** |

*Generated using MYHitch AI Budget Optimization Engine.*`
  },
  {
    title: "Annual Report Translator",
    prompt: "Translate Q4 community school literacy metrics summary into French and Spanish.",
    response: `### French Translation
**Résumé des indicateurs d'alphabétisation (T4) :**
- 120 élèves du primaire formés.
- Taux de réussite de lecture augmenté de 24%.
- 400 nouveaux livres scolaires distribués.
- Alignement: ODD 4 (Éducation de Qualité).

---

### Spanish Translation
**Resumen de métricas de alfabetización (T4):**
- 120 estudiantes de primaria capacitados.
- Tasa de competencia lectora incrementada en un 24%.
- 400 libros de texto nuevos distribuidos.
- Alineación: ODS 4 (Educación de Calidad).`
  }
];

export default function AiAssistant() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customPrompt, setCustomPrompt] = useState("");
  const [currentResponse, setCurrentResponse] = useState(presets[0].response);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useScrollReveal();

  const handleSelectPreset = (idx) => {
    setSelectedIdx(idx);
    setCustomPrompt("");
    triggerGeneration(presets[idx].response);
  };

  const triggerGeneration = (text) => {
    setIsGenerating(true);
    setCopied(false);
    setTimeout(() => {
      setCurrentResponse(text);
      setIsGenerating(false);
    }, 1200);
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    
    // Simulate smart response
    const mockResponse = `### Custom AI Output: "${customPrompt}"

Based on the prompt, MYHitch Impact AI Intelligence has generated the following structure:

1. **Strategic Intent:** Optimized proposal matching local community needs.
2. **Operations Plan:** Mobilize regional volunteer databases.
3. **Outcome Metrics:** Est. 250 beneficiaries reached. SDG 10 (Reduced Inequality) alignment.
4. **Project Compliance:** Document locker audit code: \`MHI-AI-${Math.floor(1000 + Math.random() * 9000)}\`.`;
    
    triggerGeneration(mockResponse);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Hero */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg" style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: 'url("/ai agent.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-gold" style={{ alignSelf: 'flex-start' }}>
              <Sparkles size={12} style={{ marginRight: '4px' }} /> ADVANCED CO-PILOT
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>AI Impact <br /><span className="gradient-text">Assistant <br />Playground</span></h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="snap-section" style={{
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <TextureOverlay opacity={1} />
        <div className="container reveal-text" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Why AI</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Every Nonprofit Deserves an Extra Pair of Hands" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Automate proposal writing, translate newsletters, structure budgets, and summarize complex volunteer data with compliance-safe algorithms.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Playground Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }} className="playground-grid reveal-section snap-section">
        {/* Left Panel - Control panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ 
            display: 'flex', flexDirection: 'column', gap: '1.2rem',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderRadius: '16px',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', gap: '10px', alignItems: 'center', margin: 0, fontWeight: 700 }}>
              <div style={{ background: 'var(--teal-accent)', color: '#fff', padding: '6px', borderRadius: '8px', display: 'flex' }}><Cpu size={18} /></div> 
              Choose AI Presets
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(idx)}
                  className="preset-btn"
                  style={{
                    textAlign: 'left',
                    background: selectedIdx === idx && !customPrompt ? 'linear-gradient(135deg, var(--teal-accent), #38bdf8)' : '#fff',
                    border: selectedIdx === idx && !customPrompt ? 'none' : '1px solid var(--card-border)',
                    boxShadow: selectedIdx === idx && !customPrompt ? '0 4px 15px rgba(20, 184, 166, 0.3)' : '0 2px 5px rgba(0,0,0,0.02)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    color: selectedIdx === idx && !customPrompt ? '#fff' : 'var(--text-primary)',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    fontWeight: selectedIdx === idx && !customPrompt ? 700 : 500,
                    transform: selectedIdx === idx && !customPrompt ? 'translateX(5px)' : 'none'
                  }}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Prompt Box */}
          <div style={{ 
            display: 'flex', flexDirection: 'column', gap: '1.2rem',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderRadius: '16px',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>Custom AI Request</h3>
            <form onSubmit={handleCustomSend} style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <textarea
                placeholder="Ask AI to draft a newsletter, calculate SROI, or structure a school budget..."
                className="form-control"
                rows={4}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                style={{ 
                  width: '100%', 
                  resize: 'none', 
                  borderRadius: '10px', 
                  border: '1px solid var(--card-border)',
                  padding: '1rem',
                  fontSize: '0.95rem',
                  background: '#fff',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--teal-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--card-border)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'; }}
              />
              <button 
                type="submit" 
                className="btn" 
                style={{ 
                  width: '100%', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center',
                  background: isGenerating || !customPrompt.trim() ? '#cbd5e1' : 'linear-gradient(135deg, var(--teal-accent), #38bdf8)',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: isGenerating || !customPrompt.trim() ? 'not-allowed' : 'pointer',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: isGenerating || !customPrompt.trim() ? 'none' : '0 4px 15px rgba(20, 184, 166, 0.3)'
                }}
                disabled={isGenerating || !customPrompt.trim()}
                onMouseEnter={(e) => { if(!isGenerating && customPrompt.trim()) e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { if(!isGenerating && customPrompt.trim()) e.target.style.transform = 'none'; }}
              >
                <Send size={18} /> Send to AI Co-Pilot
              </button>
            </form>
          </div>
        </div>

        {/* Right Panel - Result display */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '500px', 
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03)',
          overflow: 'hidden'
        }}>
          {/* Output Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal-accent)', display: 'flex', gap: '8px', alignItems: 'center', letterSpacing: '0.05em' }}>
              <Sparkles size={16} /> GENERATED OUTPUT
            </span>
            
            <button 
              onClick={copyToClipboard}
              disabled={isGenerating}
              style={{
                background: '#fff',
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                padding: '6px 14px',
                color: copied ? 'var(--soft-green)' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.target.style.background = '#f8fafc'; }}
              onMouseLeave={(e) => { e.target.style.background = '#fff'; }}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={14} /> Copied!
                </>
              ) : (
                <>
                  <Clipboard size={14} /> Copy Code
                </>
              )}
            </button>
          </div>

          {/* Content display */}
          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {isGenerating ? (
              <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <RefreshCw className="animate-pulse-glow" size={32} style={{ animation: 'spin 2s linear infinite', color: 'var(--teal-accent)' }} />
                <span style={{ fontSize: '0.9rem' }}>Co-Pilot is structuring compliance files...</span>
              </div>
            ) : (
              <pre style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                margin: 0
              }}>
                {currentResponse}
              </pre>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-gold" style={{ alignSelf: 'center' }}>Try It Now</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Let the AI Handle the First Draft</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            You review, you approve, you send. The blank page is the hardest part of any proposal or newsletter — let the Co-Pilot get you past it in seconds.
          </p>
        </div>
      </section>
    </div>
  );
}
