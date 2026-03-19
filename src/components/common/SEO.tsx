import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({ title, description, url, image, structuredData }: SEOProps) {
  const fullTitle = title ? `${title} | Duy Gia Phát` : 'Duy Gia Phát';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}        
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && <meta name="twitter:image" content={image} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
