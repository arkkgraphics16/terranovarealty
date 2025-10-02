import { useCallback } from 'react';

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  return element;
};

const useSEO = () => {
  const setSEO = useCallback(({ title, description, openGraph = {} }) => {
    if (title) {
      document.title = title;
      ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title);
    }

    if (description) {
      ensureMetaTag('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
      ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
    }

    const ogUrl = openGraph.url;
    if (ogUrl) {
      ensureMetaTag('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', ogUrl);
    }

    const ogImage = openGraph.image;
    if (ogImage) {
      ensureMetaTag('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', ogImage);
    }

    const ogType = openGraph.type;
    if (ogType) {
      ensureMetaTag('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', ogType);
    }
  }, []);

  return setSEO;
};

export default useSEO;
