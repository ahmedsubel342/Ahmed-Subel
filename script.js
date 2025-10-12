// script.js — ElitezMart interactivity (slider, products, cart, demo checkout, PayPal init)
// Sample product data
const PRODUCTS = [
  {id:'p1', title:'Wireless Earbuds', price:29.99, old:49.99, img:'assets/earbuds.jpg', desc:'Compact earbuds with case', cat:'gadgets'},
  {id:'p2', title:'Smart Watch', price:59.99, old:89.99, img:'assets/watch.jpg', desc:'Fitness watch', cat:'gadgets'},
  {id:'p3', title:'Travel Backpack', price:39.00, old:69.00, img:'assets/backpack.jpg', desc:'Waterproof 30L', cat:'fashion'},
  {id:'p4', title:'LED Strip Light', price:14.99, old:24.99, img:'assets/led.jpg', desc:'Color-changing LED', cat:'home'},
  {id:'p5', title:'Ceramic Mug', price:12.00, old:18.00, img:'assets/mug.jpg', desc:'Handmade feel mug', cat:'home'},
  {id:'p6', title:'Phone Grip', price:4.99, old:9.99, img:'assets/grip.jpg', desc:'Secure grip', cat:'gadgets'}
];

function format(v){ return '$' + Number(v).toFixed(2); }
function el(tag, html=''){ const e=document.createElement(tag); e.innerHTML=html; return e; }

// Render product grids
function renderGrids(){
  const deals = document.getElementById('dealsGrid'), grid = document.getElementById('productGrid');
  if(deals) deals.innerHTML = '';
  if(grid) grid.innerHTML = '';
  PRODUCTS.slice(0,3).forEach(p => { if(deals) deals.appendChild(productCard(p)); });
  PRODUCTS.forEach(p => { if(grid) grid.appendChild(productCard(p)); });
}
function productCard(p){
  const node = el('div', `
    <div style="display:flex;flex-direction:column;height:100%">
      <div style="height:160px;overflow:hidden;border-radius:8px"><img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover" /></div>
      <div style="padding:10px;">
        <div style="font-weight:700">${p.title}</div>
        <div style="color:var(--muted);font-size:13px;margin-top:6px">${p.cat} • ${format(p.price)}</div>
        <div style="margin-top:10px;display:flex;gap:8px;align-items:center">
          <button class="btn btn-ghost" onclick="openProduct('${p.id}')">View</button>
          <button class="btn" onclick="addToCart('${p.id}',1)" style="background:var(--accent);color:#fff">Add</button>
        </div>
      </div>
    </div>
  `);
  node.className = 'product-card';
  return node;
}

// Slider
(function sliderInit(){
  const slides = document.getElementById('slides');
  if(!slides) return;
  let idx = 0;
  setInterval(()=>{ idx = (idx + 1) % slides.children.length; slides.style.transform = 'translateX(-' + (idx*100) + '%)'; }, 4200);
})();

// Cart (localStorage)
let CART = JSON.parse(localStorage.getItem('elitez_cart') || '[]');
function saveCart(){ localStorage.setItem('elitez_cart', JSON.stringify(CART)); renderCart(); }
function addToCart(id, qty=1){
  const it = CART.find(x=>x.id===id);
  if(it) it.qty += qty; else CART.push({id, qty});
  saveCart(); openCart();
}
function renderCart(){
  const cartCountEl = document.getElementById('cartCount');
  if(cartCountEl) cartCountEl.innerText = CART.reduce((s,i)=>s+i.qty,0);
  const wrap = document.getElementById('cartItems'); if(!wrap) return;
  wrap.innerHTML = ''; let total = 0;
  CART.forEach(it=>{
    const p = PRODUCTS.find(x=>x.id===it.id); if(!p) return;
    total += p.price * it.qty;
    const node = el('div', `
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
        <img src="${p.img}" style="width:68px;height:56px;object-fit:cover;border-radius:8px" />
        <div style="flex:1">
          <div style="font-weight:700">${p.title}</div>
          <div style="color:var(--muted);font-size:13px">${format(p.price)} × ${it.qty}</div>
          <div style="margin-top:8px;display:flex;gap:8px">
            <button class="btn btn-ghost" onclick="changeQty('${p.id}', -1)">-</button>
            <button class="btn btn-ghost" onclick="changeQty('${p.id}', 1)">+</button>
            <button class="btn" style="background:transparent;color:var(--accent2)" onclick="removeItem('${p.id}')">Remove</button>
          </div>
        </div>
      </div>
    `);
    wrap.appendChild(node);
  });
  const totalEl = document.getElementById('cartTotal');
  if(totalEl) totalEl.innerText = format(total);
  localStorage.setItem('elitez_cart_total', total);
}
function changeQty(id, delta){ const it=CART.find(x=>x.id===id); if(!it) return; it.qty=Math.max(1, it.qty+delta); saveCart(); }
function removeItem(id){ CART = CART.filter(x=>x.id!==id); saveCart(); }
function clearCart(){ CART = []; saveCart(); }
function openCart(){ document.getElementById('cartPanel').style.transform='translateX(0)'; document.getElementById('cartPanel').setAttribute('aria-hidden','false'); }
function closeCart(){ document.getElementById('cartPanel').style.transform='translateX(110%)'; document.getElementById('cartPanel').setAttribute('aria-hidden','true'); }

// Modal & Search
function openProduct(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const overlay = document.getElementById('overlay');
  if(!overlay) return;
  overlay.style.display = 'flex';
  overlay.innerHTML = `<div class="card" style="max-width:820px;width:94%;"><div style="display:flex;gap:12px;flex-wrap:wrap">
    <div style="flex:1;min-width:260px"><img src="${p.img}" style="width:100%;border-radius:8px" /></div>
    <div style="flex:1;min-width:240px"><h3>${p.title}</h3><p style="color:var(--muted)">${p.cat} • ${format(p.price)}</p><p style="margin-top:12px">${p.desc || ''}</p>
    <div style="margin-top:12px;display:flex;gap:8px">
      <input id="qty" type="number" min="1" value="1" style="width:80px;padding:8px;border-radius:8px;border:1px solid rgba(0,0,0,0.06)" />
      <button class="btn" style="background:var(--accent);color:#fff" onclick="addToCart('${p.id}', Number(document.getElementById('qty').value))">Add to cart</button>
    </div>
    <div style="margin-top:12px"><button class="btn btn-ghost" onclick="closeOverlay()">Close</button></div></div></div></div>`;
}
function closeOverlay(){ const overlay=document.getElementById('overlay'); overlay.style.display='none'; overlay.innerHTML=''; }

// Demo checkout flows
function startDemoCheckout(){
  if(!CART.length){ alert('Cart empty'); return; }
  alert('Demo order placed locally (no real payment). In production, call server for Stripe/PayPal.');
  CART=[]; saveCart(); closeCart();
}

async function startStripeCheckout(){
  if(!CART.length){ alert('Cart empty'); return; }
  const items = CART.map(i => {
    const p = PRODUCTS.find(x=>x.id===i.id);
    return { id: p.id, title: p.title, qty: i.qty, unit_price: p.price };
  });
  try {
    const res = await fetch('/create-checkout-session', {
      method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ items })
    });
    if(!res.ok) throw new Error('Server returned ' + res.status);
    const data = await res.json();
    const stripe = Stripe('pk_test_XXXXXXXXXXXXXXXX'); // replace with your publishable key
    await stripe.redirectToCheckout({ sessionId: data.id });
  } catch (err) {
    console.error(err); alert('Stripe error — check console and server endpoint.');
  }
}

// PayPal Buttons (client-side demo)
function initPayPal(){
  if(window.paypal){
    paypal.Buttons({
      createOrder: function(data, actions){
        const total = CART.reduce((s,i)=> { const p = PRODUCTS.find(x=>x.id===i.id); return s + (p ? p.price * i.qty : 0); },0);
        return actions.order.create({ purchase_units: [{ amount: { currency_code: 'USD', value: total.toFixed(2) } }] });
      },
      onApprove: function(data, actions){
        return actions.order.capture().then(function(details){
          alert('Payment completed (demo): ' + (details.payer.name && details.payer.name.given_name ? details.payer.name.given_name : 'Buyer'));
          CART = []; saveCart(); closeCart();
        });
      },
      onError: function(err){ console.error('PayPal error', err); alert('PayPal error: see console'); }
    }).render('#paypal-button-container');
  } else {
    console.warn('PayPal SDK not loaded — replace client id in index.html to enable sandbox buttons.');
  }
}

// Search, category, newsletter, contact
document.addEventListener('DOMContentLoaded', function(){
  const searchBtn = document.getElementById('searchBtn');
  if(searchBtn) searchBtn.addEventListener('click', ()=>{
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    if(!q) return renderGrids();
    const grid = document.getElementById('productGrid'); if(!grid) return;
    grid.innerHTML = '';
    PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q))).forEach(p => grid.appendChild(productCard(p)));
  });

  const subBtn = document.getElementById('subBtn');
  if(subBtn) subBtn.addEventListener('click', ()=>{
    const em = document.getElementById('newsEmail').value.trim();
    if(!em) return alert('Enter your email');
    alert('Subscribed (demo): ' + em);
    document.getElementById('newsEmail').value = '';
  });

  const contactForm = document.getElementById('contactForm');
  if(contactForm) contactForm.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Message sent (demo).'); contactForm.reset(); });

  // initialize
  renderGrids();
  renderCart();
  initPayPal();
  const cartToggle = document.getElementById('cartToggle'); if(cartToggle) cartToggle.addEventListener('click', openCart);
});
