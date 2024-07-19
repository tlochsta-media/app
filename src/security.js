function detectInjectedScripts() {
  const trustedScripts = new Set();
  document.querySelectorAll('script').forEach(script => {
    trustedScripts.add(script);
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.tagName === 'SCRIPT' && !trustedScripts.has(node)) {
            alert('Unauthorized script detected! If someone gave you code to inject, do not trust them.');
            node.parentNode.removeChild(node);
          }
        });
      }
    });
  });

  observer.observe(document, { childList: true, subtree: true });
}

window.onload = detectInjectedScripts;
