import LegalLayout from '@/pages/legal/LegalLayout'

const TermsOfService = () => {
  return (
    <LegalLayout
      title='Terms of Service'
      description='Review Sovertick service terms, project engagement conditions, payment expectations, and legal responsibilities.'
      canonicalPath='/terms-of-service'
      lastUpdated='February 27, 2026'
    >
      <section>
        <h2 className='text-xl font-semibold text-foreground'>1. Acceptance of Terms</h2>
        <p className='mt-2'>
          By accessing our website or engaging Sovertick for services, you agree to these Terms of Service. If you do
          not agree, please do not use our services.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>2. Services</h2>
        <p className='mt-2'>
          Sovertick provides digital services including web development, mobile app development, AI solutions, UI/UX
          design, and related product engineering work.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>3. Project Scope and Change Requests</h2>
        <p className='mt-2'>
          Deliverables, timeline, and pricing are defined in an agreed proposal, statement of work, or contract.
          Changes outside approved scope may impact timeline and fees and require written approval.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>4. Client Responsibilities</h2>
        <p className='mt-2'>The client agrees to provide timely feedback, approvals, content, and required access credentials.</p>
        <p className='mt-2'>
          Project delays caused by missing client inputs may adjust delivery dates and resource allocation.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>5. Fees and Payments</h2>
        <p className='mt-2'>
          Fees, milestones, and payment schedules are specified in the applicable agreement or invoice. Late payments
          may result in work pause, delivery delay, or suspension of related services until dues are cleared.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>6. Intellectual Property</h2>
        <p className='mt-2'>
          Unless otherwise agreed in writing, ownership of final deliverables transfers to the client after full
          payment. Sovertick retains ownership of pre-existing tools, frameworks, templates, and general know-how.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>7. Third-Party Tools and Services</h2>
        <p className='mt-2'>
          Projects may integrate third-party platforms, APIs, libraries, or hosting providers. Their availability,
          pricing, and terms are outside Sovertick control and remain subject to third-party policies.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>8. Confidentiality</h2>
        <p className='mt-2'>
          Both parties agree to protect confidential information shared during the engagement and not disclose it to
          unauthorized parties, except where required by law.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>9. Warranties and Disclaimers</h2>
        <p className='mt-2'>
          Services are provided on a commercially reasonable basis. Except as expressly stated in a written agreement,
          Sovertick disclaims implied warranties including merchantability and fitness for a particular purpose.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>10. Limitation of Liability</h2>
        <p className='mt-2'>
          To the maximum extent allowed by law, Sovertick is not liable for indirect, incidental, special, or
          consequential damages, including loss of profits, data, or business interruption.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>11. Termination</h2>
        <p className='mt-2'>
          Either party may terminate an engagement as specified in the governing agreement. Client remains responsible
          for payment of completed work and approved work-in-progress up to termination date.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>12. Governing Law</h2>
        <p className='mt-2'>
          These terms are governed by applicable laws of Pakistan unless otherwise defined in a signed contract.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>13. Contact</h2>
        <p className='mt-2'>For legal or contractual questions, contact:</p>
        <p className='mt-2'>Email: info@sovertick.com</p>
        <p>WhatsApp: +92 318 027 2619</p>
      </section>
    </LegalLayout>
  )
}

export default TermsOfService
