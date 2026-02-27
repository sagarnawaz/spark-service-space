import LegalLayout from '@/pages/legal/LegalLayout'

const PrivacyPolicy = () => {
  return (
    <LegalLayout
      title='Privacy Policy'
      description='Read how Sovertick collects, uses, and protects personal information when you use our website and request digital services.'
      canonicalPath='/privacy-policy'
      lastUpdated='February 27, 2026'
    >
      <section>
        <h2 className='text-xl font-semibold text-foreground'>1. Overview</h2>
        <p className='mt-2'>
          This Privacy Policy explains how Sovertick collects, uses, stores, and protects information when you visit
          our website, contact us, or engage us for web, mobile, AI, design, and product development services.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>2. Information We Collect</h2>
        <p className='mt-2'>We may collect the following information:</p>
        <ul className='mt-2 list-disc space-y-1 pl-5'>
          <li>Contact details such as name, email address, phone number, and company name.</li>
          <li>Project information you share with us through forms, calls, email, or chat.</li>
          <li>Technical usage data such as IP address, browser type, pages visited, and referral source.</li>
          <li>Cookie and analytics data to improve user experience and website performance.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>3. How We Use Information</h2>
        <p className='mt-2'>We use information to:</p>
        <ul className='mt-2 list-disc space-y-1 pl-5'>
          <li>Respond to inquiries and provide proposals or support.</li>
          <li>Deliver contracted services and manage client communication.</li>
          <li>Improve our website, services, and security monitoring.</li>
          <li>Comply with legal obligations and enforce contractual rights.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>4. Legal Basis and Consent</h2>
        <p className='mt-2'>
          Where applicable, we process personal data based on your consent, contractual necessity, legitimate
          interests, and legal obligations. You may withdraw consent for optional communications at any time.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>5. Data Sharing</h2>
        <p className='mt-2'>
          We do not sell personal data. We may share information with trusted service providers, infrastructure
          vendors, and professional advisors only when required to operate our business or fulfill legal requirements.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>6. Data Retention</h2>
        <p className='mt-2'>
          We retain information only as long as needed for service delivery, contract administration, security,
          accounting, and legal compliance. Data no longer required is deleted or anonymized.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>7. Security</h2>
        <p className='mt-2'>
          We apply reasonable technical and organizational safeguards to protect information against unauthorized
          access, misuse, alteration, or disclosure. No method of transmission or storage is fully guaranteed secure.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>8. Your Rights</h2>
        <p className='mt-2'>
          Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain
          processing of your personal data. To exercise these rights, contact us using the details below.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>9. Updates to This Policy</h2>
        <p className='mt-2'>
          We may update this Privacy Policy periodically. Material updates will be published on this page with a
          revised "Last updated" date.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>10. Contact</h2>
        <p className='mt-2'>For privacy-related questions, contact us at:</p>
        <p className='mt-2'>Email: info@sovertick.com</p>
        <p>WhatsApp: +92 318 027 2619</p>
      </section>
    </LegalLayout>
  )
}

export default PrivacyPolicy
