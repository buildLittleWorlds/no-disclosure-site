export function getUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if base ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash for proper concatenation
  const cleanBase = base.endsWith('/') ? base : base + '/';
  
  // Special case for home
  if (cleanPath === '' || cleanPath === '/') {
    return base;
  }
  
  return cleanBase + cleanPath;
}

export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if base ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash for proper concatenation
  const cleanBase = base.endsWith('/') ? base : base + '/';
  
  return cleanBase + cleanPath;
}