import "./mobile-menu.js";
import { marked } from 'marked';

function extractSlugFromLocation() {
  const hash = window.location.hash || '';
  const path = window.location.pathname || '';
  if (hash.startsWith('#blog')) return hash.replace(/^#blog\/?/, '');
  if (path.startsWith('/blog')) return path.replace(/^\/blog\/?/, '');
  return null;
}

async function loadMarkdownBlog(slug) {
  try {
    console.log(slug)
    const res = await fetch(`/blogs/${slug}.md`);
    if (!res.ok) throw new Error('Blog not found');
    const md = await res.text();
    return marked(md);
  } catch (err) {
    console.error(err);
    return `<p>Blog not found.</p>`;
  }
}

async function showBlogPost(slug) {
  const htmlContent = await loadMarkdownBlog(slug);
  const selectors = ['nav.navbar', '.hero', '.tech-stack', '#about', '#blog', '#contact', 'footer.footer'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.dataset.__prevDisplay = el.style.display || '';
    if (el) el.style.display = 'none';
  });

  const existing = document.getElementById('blog-post-container');
  if (existing) existing.remove();

  const blogPostHTML = `
    <article id="blog-article" class="blog-post" style="padding: 6rem 0 4rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <a href="#blog" id="back-to-blog" style="display:inline-flex;align-items:center;gap:0.5rem;color:#6366f1;text-decoration:none;margin-bottom:1.25rem;font-weight:500;cursor:pointer;">
          <i class="bx bx-arrow-back"></i> Back to Blog
        </a>
        <div class="blog-content prose max-w-none">
          ${htmlContent}
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

  document.getElementById('back-to-blog')?.addEventListener('click', (e) => {
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

window.addEventListener('hashchange', () => {
  const slug = extractSlugFromLocation();
  if (slug) showBlogPost(slug); else hideBlogPost();
});
window.addEventListener('popstate', () => {
  const slug = extractSlugFromLocation();
  if (slug) showBlogPost(slug); else hideBlogPost();
});
window.addEventListener('load', () => {
  const slug = extractSlugFromLocation();
  if (slug) showBlogPost(slug); else hideBlogPost();
});

document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('/blog')) {
    e.preventDefault();
    const slug = href.replace(/^\/blog\/?/, '');
    history.pushState(null, '', `/blog/${slug}`);
    showBlogPost(slug);
  }
});
