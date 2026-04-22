import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Numen Aviation'

interface QuotationConfirmationProps {
  name?: string
  fromCity?: string
  toCity?: string
  departureDate?: string
}

const QuotationConfirmationEmail = ({
  name,
  fromCity,
  toCity,
  departureDate,
}: QuotationConfirmationProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Recibimos tu solicitud de cotización — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Gracias, ${name}.` : 'Gracias por tu solicitud.'}
        </Heading>
        <Text style={text}>
          Hemos recibido tu solicitud de cotización. Nuestro equipo de operaciones la está revisando y te contactaremos en breve con los detalles.
        </Text>

        {(fromCity || toCity || departureDate) && (
          <Section style={detailsBox}>
            <Text style={detailsTitle}>Resumen de tu solicitud</Text>
            {fromCity && toCity && (
              <Text style={detailsItem}>
                <strong>Ruta:</strong> {fromCity} → {toCity}
              </Text>
            )}
            {departureDate && (
              <Text style={detailsItem}>
                <strong>Fecha de salida:</strong> {departureDate}
              </Text>
            )}
          </Section>
        )}

        <Text style={text}>
          Si necesitas una respuesta inmediata, también puedes escribirnos por WhatsApp al <strong>+52 444 234 89 42</strong>.
        </Text>

        <Text style={footer}>
          {SITE_NAME} · Aeropuerto Internacional de Toluca (MMTO)<br />
          Disponibilidad 24/7
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuotationConfirmationEmail,
  subject: 'Recibimos tu solicitud de cotización · Numen Aviation',
  displayName: 'Confirmación de cotización (cliente)',
  previewData: {
    name: 'Juan Pérez',
    fromCity: 'Toluca (MMTO)',
    toCity: 'Los Cabos (MMSD)',
    departureDate: '2026-05-10',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'normal', color: '#0a0a0a', margin: '0 0 20px', letterSpacing: '-0.01em' }
const text = { fontSize: '15px', color: '#3a3a3a', lineHeight: '1.6', margin: '0 0 18px' }
const detailsBox = { backgroundColor: '#f7f7f5', border: '1px solid #e6e6e0', padding: '18px 20px', margin: '20px 0' }
const detailsTitle = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '0.2em', color: '#8b7355', margin: '0 0 10px', fontFamily: 'Arial, sans-serif' }
const detailsItem = { fontSize: '14px', color: '#1a1a1a', lineHeight: '1.5', margin: '0 0 6px', fontFamily: 'Arial, sans-serif' }
const footer = { fontSize: '12px', color: '#888888', margin: '32px 0 0', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }
