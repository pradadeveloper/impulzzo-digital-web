import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Impulzzo Digital | Agencia de IA y E-commerce'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fondo con glow azul */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid lines decorativas */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Logo y nombre */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#2563EB',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            ✦
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '2px',
            }}
          >
            <span style={{ color: '#FFFFFF' }}>IMPULZZO</span>
            <span style={{ color: '#2563EB' }}>DIGITAL</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: '1.2',
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          Construimos empresas preparadas para la era de la{' '}
          <span style={{ color: '#2563EB' }}>
            Inteligencia Artificial.
          </span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: '22px',
            color: '#888888',
            textAlign: 'center',
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          IA · E-commerce · Automatización · Marketing Digital
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37,99,235,0.15)',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '100px',
            padding: '10px 24px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#2563EB',
            }}
          />
          <span style={{ color: '#2563EB', fontSize: '18px', fontWeight: '600' }}>
            Agencia Digital Premium · Colombia
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '48px',
            color: '#444444',
            fontSize: '18px',
          }}
        >
          impulzzodigital.com
        </div>
      </div>
    ),
    { ...size }
  )
}
