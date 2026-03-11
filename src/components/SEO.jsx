import { Helmet } from 'react-helmet-async'
import { companyName } from '../data/siteData'

function SEO({ title, description, keywords }) {
  const fullTitle = title ? `${title} | ${companyName}` : companyName

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default SEO

