import LegalLayout from '@/pages/legal/LegalLayout'

const CookiePolicy = () => {
  return (
    <LegalLayout
      title='Cookie Policy'
      description='Learn how Sovertick uses cookies and similar technologies to run, secure, and improve website performance.'
      canonicalPath='/cookie-policy'
      lastUpdated='February 27, 2026'
    >
      <section>
        <h2 className='text-xl font-semibold text-foreground'>1. What Are Cookies</h2>
        <p className='mt-2'>
          Cookies are small text files stored on your device when you visit a website. They help websites remember
          preferences, improve performance, and provide analytics.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>2. How We Use Cookies</h2>
        <p className='mt-2'>Sovertick uses cookies and similar technologies to:</p>
        <ul className='mt-2 list-disc space-y-1 pl-5'>
          <li>Enable essential website functionality and security.</li>
          <li>Understand visitor behavior and improve website content and user flow.</li>
          <li>Remember language, UI, and session preferences where applicable.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>3. Cookie Categories</h2>
        <ul className='mt-2 list-disc space-y-1 pl-5'>
          <li>Strictly Necessary: Required for core site features and security.</li>
          <li>Analytics: Help measure traffic, engagement, and performance trends.</li>
          <li>Functional: Store user preferences for improved experience.</li>
          <li>Marketing: May be used for campaign attribution where enabled.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>4. Third-Party Cookies</h2>
        <p className='mt-2'>
          Some cookies may be set by third-party providers such as analytics, hosting, and embedded content platforms.
          These providers process data under their own privacy and cookie policies.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>5. Managing Cookie Preferences</h2>
        <p className='mt-2'>
          You can control or delete cookies from your browser settings. Disabling certain cookies may affect website
          functionality and performance.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>6. Do Not Track</h2>
        <p className='mt-2'>
          Our website does not currently respond to all browser Do Not Track signals consistently due to differing
          industry standards.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>7. Updates to This Policy</h2>
        <p className='mt-2'>
          We may update this Cookie Policy from time to time. Any updates will appear on this page with a revised
          "Last updated" date.
        </p>
      </section>

      <section>
        <h2 className='text-xl font-semibold text-foreground'>8. Contact</h2>
        <p className='mt-2'>For cookie-related questions, contact us at info@sovertick.com.</p>
      </section>
    </LegalLayout>
  )
}

export default CookiePolicy
