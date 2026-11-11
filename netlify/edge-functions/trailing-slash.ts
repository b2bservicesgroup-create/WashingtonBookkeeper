// Permanently redirect any URL ending in "/" (except the home page) to the
// same URL without it, e.g. /faq/ -> /faq. The site is built with
// trailingSlash: 'never', so the no-slash URL is the canonical one listed in
// the sitemap. Without this, Netlify would serve both /page and /page/ and Google could
// index them as duplicates.
export default async (request: Request) => {
  const url = new URL(request.url);
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '') || '/';
    return Response.redirect(url.toString(), 301);
  }
};

export const config = {
  path: '/*',
  excludedPath: ['/_astro/*', '/*.xml', '/*.txt', '/*.png', '/*.svg', '/*.ico'],
};
