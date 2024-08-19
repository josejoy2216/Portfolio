import React, { useState } from 'react';
import '../assets/css/GlassmorphismGenerator.css';

const GlassmorphismGenerator = () => {
    const [transparency, setTransparency] = useState(0.2);
    const [blur, setBlur] = useState(5);
    const [color, setColor] = useState('rgba(255, 255, 255, 0.2)');
    const [outline, setOutline] = useState('rgba(255, 255, 255, 0.3)');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const generatedCSS = `
        background: ${color};
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(${blur}px);
        -webkit-backdrop-filter: blur(${blur}px);
        border: 1px solid ${outline};
    `;

    return (
        <div className="glassmorphism-container">
            <div className="glassmorphism-controls-container">
                <div className="glassmorphism-controls">
                    <h2>Glassmorphism CSS Generator</h2>
                    <label>Transparency</label>
                    <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={transparency}
                        onChange={(e) => setTransparency(e.target.value)}
                    />
                    <label>Blur</label>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value={blur}
                        onChange={(e) => setBlur(e.target.value)}
                    />
                    <label>Color</label>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                    />
                    <label>Outline</label>
                    <input
                        type="color"
                        value={outline}
                        onChange={(e) => setOutline(e.target.value)}
                    />
                </div>
                <div className="glassmorphism-preview-code-container">
                    <div className="glassmorphism-preview" style={{
                        background: color,
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: `blur(${blur}px)`,
                        WebkitBackdropFilter: `blur(${blur}px)`,
                        border: `1px solid ${outline}`,
                        opacity: transparency
                    }}>
                        {/* Real-time preview area */}
                    </div>
                    <div className="glassmorphism-code-container">
                        <textarea
                            value={generatedCSS}
                            readOnly
                            className="glassmorphism-code"
                        />
                        <button className="copy-button" onClick={() => navigator.clipboard.writeText(generatedCSS)}>
                            Copy CSS to Clipboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlassmorphismGenerator;
