import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface QuotationOpsProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  fromCity?: string
  toCity?: string
  departureDate?: string
  returnDate?: string
  passengers?: number | string
  tripType?: string
  preferredAircraft?: string
  message?: string
  requestId?: string
}

const Row = ({ label, value }: { label: string; value?: string | number }) =>
  value ? (
    <Text style={row}>
      <strong style={rowLabel}>{label}:</strong> {value}
    </Text>
  ) : null

const QuotationOpsEmail = (props: QuotationOpsProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Nueva solicitud de cotización: {props.fromCity} → {props.toCity}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nueva solicitud de cotización</Heading>
        <Text style={subtitle}>
          {props.fromCity} → {props.toCity} · {props.departureDate}
        </Text>

        <Section style={section}>
          <Text style={sectionTitle}>Contacto</Text>
          <Row label="Nombre" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Teléfono" value={props.phone} />
          <Row label="Empresa" value={props.company} />
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={sectionTitle}>Vuelo</Text>
          <Row label="Origen" value={props.fromCity} />
          <Row label="Destino" value={props.toCity} />
          <Row label="Tipo de viaje" value={props.tripType} />
          <Row label="Salida" value={props.departureDate} />
          <Row label="Regreso" value={props.returnDate} />
          <Row label="Pasajeros" value={props.passengers} />
          <Row label="Aeronave preferida" value={props.preferredAircraft} />
        </Section>

        {props.message && (
          <>
            <Hr style={hr} />
            <Section style={section}>
              <Text style={sectionTitle}>Mensaje del cliente</Text>
              <Text style={messageStyle}>{props.message}</Text>
            </Section>
          </>
        )}

        {props.requestId && (
          <Text style={footer}>ID de solicitud: {props.requestId}</Text>
        )}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuotationOpsEmail,
  subject: (data: Record<string, any>) =>
    `Nueva cotización: ${data.fromCity ?? '?'} → ${data.toCity ?? '?'} (${data.departureDate ?? 'sin fecha'})`,
  displayName: 'Notificación a operaciones',
  previewData: {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+52 55 1234 5678',
    company: 'Acme S.A.',
    fromCity: 'Toluca (MMTO)',
    toCity: 'Los Cabos (MMSD)',
    departureDate: '2026-05-10',
    returnDate: '2026-05-14',
    passengers: 6,
    tripType: 'Redondo',
    preferredAircraft: 'Midsize Jet',
    message: 'Necesitamos catering ejecutivo para 6 personas.',
    requestId: 'abc-123',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '28px 24px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '20px', fontWeight: 'bold', color: '#0a0a0a', margin: '0 0 6px' }
const subtitle = { fontSize: '14px', color: '#8b7355', margin: '0 0 24px', fontWeight: 'bold' }
const section = { margin: '0 0 16px' }
const sectionTitle = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '0.18em', color: '#8b7355', margin: '0 0 10px', fontWeight: 'bold' }
const row = { fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 4px' }
const rowLabel = { color: '#555555' }
const messageStyle = { fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' as const, backgroundColor: '#f7f7f5', padding: '14px 16px', borderLeft: '3px solid #8b7355' }
const hr = { borderColor: '#e6e6e0', margin: '20px 0' }
const footer = { fontSize: '11px', color: '#999999', margin: '24px 0 0' }
