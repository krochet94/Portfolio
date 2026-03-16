const ToImageSrc = (path: string): string => {
  const trimmedPath = path.trim();

  if (!trimmedPath) {
    return "";
  }

  if (
    /^(https?:)?\/\//.test(trimmedPath) ||
    trimmedPath.startsWith("data:") ||
    trimmedPath.startsWith("blob:")
  ) {
    return trimmedPath;
  }

  const rawBaseUrl = import.meta.env.BASE_URL ?? "/";
  const normalizedBaseUrl =
    rawBaseUrl === "/" ? "/" : `/${rawBaseUrl.replace(/^\/+|\/+$/g, "")}/`;

  const normalizedPath = trimmedPath
    .replace(/^\.\//, "")
    .replace(/^\/+/, "");

  if (!normalizedPath) {
    return normalizedBaseUrl;
  }

  const basePathWithoutSlashes = normalizedBaseUrl.replace(/^\/+|\/+$/g, "");
  const isAlreadyBasePrefixed =
    normalizedBaseUrl !== "/" &&
    (normalizedPath === basePathWithoutSlashes ||
      normalizedPath.startsWith(`${basePathWithoutSlashes}/`));

  if (isAlreadyBasePrefixed) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBaseUrl}${normalizedPath}`;
};

export default ToImageSrc;
