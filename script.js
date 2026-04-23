// Shared JavaScript for Maha Bhraman

// Utility functions
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Add any shared functionality here