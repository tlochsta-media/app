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
      if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'href' || mutation.attributeName === 'src') {
          const element = mutation.target;
          if (element.getAttribute('href')?.startsWith('javascript:') || element.getAttribute('src')?.startsWith('javascript:')) {
            alert('Unauthorized JavaScript detected in attribute! If someone gave you code to inject, do not trust them.');
            element.removeAttribute('href');
            element.removeAttribute('src');
          }
        }
      }
    });
  });

  observer.observe(document, { childList: true, subtree: true, attributes: true });
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.href.startsWith('javascript:')) {
      event.preventDefault();
      alert('Unauthorized JavaScript detected in link! If someone gave you code to inject, do not trust them.');
    }
  }, true);
}

window.onload = detectInjectedScripts;
