// প্রোডাক্টের ডেটা (প্রোডাক্ট ইমেজ এবং পূর্ণ বিবরণ এখানে যোগ করা হয়েছে)
const productsData = [
    {
        id: '1',
        name: 'আল্ট্রা-স্মার্ট ঘড়ি',
        price: 2500,
        image: 'product_image_1.jpg',
        description: 'লেটেস্ট মডেলের স্মার্ট ওয়াচ।',
        fullDescription: 'এই আল্ট্রা-স্মার্ট ঘড়িটিতে রয়েছে এইচডি ডিসপ্লে, হার্ট রেট মনিটর এবং দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপ। সম্পূর্ণ ওয়াটারপ্রুফ ডিজাইন।'
    },
    {
        id: '2',
        name: 'পাওয়ার ব্যাংক (20000mAh)',
        price: 1800,
        image: 'product_image_2.jpg',
        description: 'দ্রুত চার্জিং এবং দীর্ঘস্থায়ী ব্যাটারি।',
        fullDescription: '২০,০০০ mAh শক্তিশালী পাওয়ার ব্যাংক। ফাস্ট চার্জিং টেকনোলজি সহ ডাবল ইউএসবি পোর্ট। যেকোনো ভ্রমণের জন্য আদর্শ।'
    },
    {
        id: '3',
        name: 'ওয়্যারলেস ইয়ারবাড',
        price: 1200,
        image: 'product_image_3.jpg',
        description: 'ক্রিস্টাল ক্লিয়ার সাউন্ড কোয়ালিটি।',
        fullDescription: 'অত্যাধুনিক নয়েজ ক্যান্সেলেশন সহ ক্রিস্টাল ক্লিয়ার সাউন্ড কোয়ালিটি। ৫ ঘন্টা প্লেব্যাক টাইম এবং দ্রুত পেয়ারিং সুবিধা।'
    }
    // আপনার অন্যান্য পণ্য এখানে যোগ করুন
];

// গ্লোবাল ভেরিয়েবল
let cart = [];

// কার্ট আপডেট করার ফাংশন
function updateCart() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-amount');

    // কার্ট আইকন আপডেট
    cartCountElement.textContent = cart.length;

    // কার্ট লিস্ট আপডেট
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (৳ ${item.price})</span>
            <button class="remove-from-cart-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        `;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    // মোট মূল্য আপডেট
    cartTotalElement.textContent = total.toLocaleString('bn-BD');
}

// প্রোডাক্ট কার্ডে ক্লিক ইভেন্ট লিসেনার
document.addEventListener('click', (event) => {
    // ১. 'কার্ডে যোগ করুন' বাটন ক্লিক করলে
    if (event.target.classList.contains('add-to-cart-btn')) {
        const name = event.target.getAttribute('data-name');
        const price = parseInt(event.target.getAttribute('data-price'));
        const productId = event.target.closest('.product-card').getAttribute('data-id');

        cart.push({ id: productId, name, price });
        updateCart();
        alert(`${name} সফলভাবে কার্টে যোগ করা হয়েছে!`);
    }

    // ২. 'বিস্তারিত দেখুন' বাটন ক্লিক করলে
    if (event.target.classList.contains('details-btn')) {
        const productId = event.target.getAttribute('data-id');
        const product = productsData.find(p => p.id === productId);

        if (product) {
            document.getElementById('modal-product-name').textContent = product.name;
            document.getElementById('modal-product-image').src = product.image;
            document.getElementById('modal-product-price').textContent = `৳ ${product.price.toLocaleString('bn-BD')}`;
            document.getElementById('modal-product-full-description').textContent = product.fullDescription;
            document.querySelector('.add-to-cart-btn-modal').setAttribute('data-id', product.id);

            document.getElementById('product-details-modal').style.display = 'block';
        }
    }

    // ৩. 'কার্ট আইকন' ক্লিক করলে
    if (event.target.id === 'cart-icon' || event.target.closest('#cart-icon')) {
        updateCart(); // নিশ্চিত করতে কার্ট আপডেটেড
        document.getElementById('cart-modal').style.display = 'block';
    }

    // ৪. Modal বন্ধ করার বাটন ক্লিক করলে
    if (event.target.classList.contains('close-btn')) {
        event.target.closest('.modal').style.display = 'none';
    }

    // ৫. বিস্তারিত পপআপ থেকে 'এখনই কিনুন' ক্লিক করলে
    if (event.target.classList.contains('add-to-cart-btn-modal')) {
        const productId = event.target.getAttribute('data-id');
        const product = productsData.find(p => p.id === productId);
        if (product) {
            cart.push({ id: product.id, name: product.name, price: product.price });
            updateCart();
            document.getElementById('product-details-modal').style.display = 'none';
            alert(`${product.name} সফলভাবে কার্টে যোগ করা হয়েছে!`);
        }
    }
    
    // ৬. কার্ট থেকে পণ্য সরানোর বাটন ক্লিক করলে
    if (event.target.classList.contains('remove-from-cart-btn') || event.target.closest('.remove-from-cart-btn')) {
        const removeButton = event.target.closest('.remove-from-cart-btn');
        const productId = removeButton.getAttribute('data-id');

        // প্রথম ম্যাচিং আইটেমটি সরানোর জন্য
        const indexToRemove = cart.findIndex(item => item.id === productId);
        if (indexToRemove > -1) {
            cart.splice(indexToRemove, 1);
            updateCart();
        }
    }
    
    // ৭. 'অর্ডার নিশ্চিত করুন' বাটন ক্লিক করলে (এটি এখন শুধুমাত্র একটি ডেমো)
    if (event.target.classList.contains('checkout-btn')) {
        if (cart.length > 0) {
            alert('অর্ডার নিশ্চিত করা হয়েছে! এই টেমপ্লেটটি ব্যাকএন্ড ইন্টিগ্রেশন ছাড়া অর্ডার প্রসেস করতে পারে না।');
        } else {
            alert('আপনার কার্ট খালি। অনুগ্রহ করে পণ্য যোগ করুন।');
        }
    }

});

// Modal-এর বাইরে ক্লিক করলে বন্ধ করার জন্য
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// প্রাথমিক লোড
updateCart();
