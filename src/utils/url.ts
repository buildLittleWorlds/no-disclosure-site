export function getUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  
  // Special case for home
  if (path === '' || path === '/') {
    return base.endsWith('/') ? base.slice(0, -1) : base;
  }
  
  // Remove leading slash from path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure proper concatenation
  if (base.endsWith('/')) {
    return base + cleanPath;
  } else {
    return base + '/' + cleanPath;
  }
}

export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash from path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure proper concatenation
  if (base.endsWith('/')) {
    return base + cleanPath;
  } else {
    return base + '/' + cleanPath;
  }
}