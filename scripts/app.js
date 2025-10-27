import "./mobile-menu.js";
import blogs from "../data/blogs.json";


function extractSlugFromLocation() {
  const hash = window.location.hash || '';
  const path = window.location.pathname || '';
  if (hash.startsWith('#blog')) {
    return hash.replace(/^#blog\/?/, '');
  }
  if (path.startsWith('/blog')) {
    return path.replace(/^\/blog\/?/, '');
  }
  return null;
}

function handleBlogRoute() {
  const slug = extractSlugFromLocation();
  if (slug !== null && slug !== '') {
    showBlogPost(slug);
  } else if (slug === '') {
    hideBlogPost();
  } else {
    hideBlogPost();
  }
}

function showBlogPost(slug) {
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return;
  const selectors = ['nav.navbar', '.hero', '.tech-stack', '#about', '#blog', '#contact', 'footer.footer'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.dataset.__prevDisplay = el.style.display || '';
    if (el) el.style.display = 'none';
  });
  const existing = document.getElementById('blog-post-container');
  if (existing) existing.remove();
  const sectionsHtml = (blog.content && Array.isArray(blog.content.sections))
    ? blog.content.sections.map(section => {
        let part = '';
        if (section.heading) part += `<h2 style="margin-top:1.5rem;">${section.heading}</h2>`;
        if (section.text) part += `<p style="margin:0.75rem 0 1.25rem; line-height:1.6;">${section.text}</p>`;
        if (Array.isArray(section.list)) {
          const listItems = section.list.map(item => {
            if (item.command && item.description) {
              return `<li style="margin:0.5rem 0;"><code style="background:#f3f4f6; padding:0.15rem 0.4rem; border-radius:4px; font-family:monospace;">${item.command}</code> - ${item.description}</li>`;
            }
            return `<li style="margin:0.5rem 0;">${item}</li>`;
          }).join('');
          part += `<ul style="margin:0.5rem 0 1rem 1.25rem;">${listItems}</ul>`;
        }
        return `<section>${part}</section>`;
      }).join('')
    : (blog.content && blog.content.html) || blog.excerpt || '';
  const blogPostHTML = `
    <article id="blog-article" class="blog-post" style="padding: 6rem 0 4rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <a href="#blog" id="back-to-blog" style="display:inline-flex;align-items:center;gap:0.5rem;color:#6366f1;text-decoration:none;margin-bottom:1.25rem;font-weight:500;cursor:pointer;">
          <i class="bx bx-arrow-back"></i> Back to Blog
        </a>
        <h1 style="margin:0.5rem 0 0.5rem;">${blog.title}</h1>
        <p style="color:#6b7280;margin:0 0 1.25rem;">${blog.date || ''}</p>
        <div class="blog-content" style="font-size:1rem;line-height:1.7;color:#111;">
          ${sectionsHtml}
        </div>
      </div>
    </article>
  `;
  const blogContainer = document.createElement('div');
  blogContainer.id = 'blog-post-container';
  blogContainer.innerHTML = blogPostHTML;
  const footer = document.querySelector('footer');
  if (footer && footer.parentNode) footer.parentNode.insertBefore(blogContainer, footer);
  else document.body.appendChild(blogContainer);
  const backLink = document.getElementById('back-to-blog');
  if (backLink) backLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideBlogPost();
    history.replaceState(null, '', '#blog');
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function hideBlogPost() {
  const container = document.getElementById('blog-post-container');
  if (container) container.remove();
  const selectors = ['nav.navbar', '.hero', '.tech-stack', '#about', '#blog', '#contact', 'footer.footer'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) {
      el.style.display = el.dataset.__prevDisplay || '';
      delete el.dataset.__prevDisplay;
    }
  });
  const blogSection = document.querySelector('#blog');
  if (blogSection) blogSection.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('hashchange', handleBlogRoute);
window.addEventListener('popstate', handleBlogRoute);
window.addEventListener('load', handleBlogRoute);

document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('/blog')) {
    e.preventDefault();
    const slug = href.replace(/^\/blog\/?/, '');
    history.pushState(null, '', `/blog/${slug}`);
    handleBlogRoute();
  }
});
