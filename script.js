// Project Data
const projects = {
    'ai-shopping': {
        title: 'AI Shopping Assistant',
        icon: 'fas fa-robot',
        description: 'An intelligent AI-powered personal shopping assistant that uses machine learning algorithms to understand customer preferences and provide personalized product recommendations.',
        features: [
            'Natural Language Processing for conversational interface',
            'Machine Learning-based recommendation engine',
            'Integration with existing e-commerce platforms',
            'Real-time inventory checking',
            'Multi-language support',
            'Personalized shopping lists and reminders'
        ],
        timeline: 'Q3 2024 - Q1 2025',
        budget: '$150,000',
        team: '8 members (4 Developers, 2 Data Scientists, 1 UX Designer, 1 Project Manager)',
        technologies: ['Python', 'TensorFlow', 'React Native', 'Node.js', 'MongoDB']
    },
    'blockchain': {
        title: 'Blockchain Payment System',
        icon: 'fas fa-link',
        description: 'A secure, decentralized payment gateway using blockchain technology to provide transparent and fraud-resistant transactions for e-commerce businesses.',
        features: [
            'Smart contract-based payments',
            'Multi-currency support including cryptocurrency',
            'Real-time transaction tracking',
            'Lower transaction fees (0.5% vs traditional 2.9%)',
            'Enhanced security with blockchain verification',
            'Seamless integration with existing payment systems'
        ],
        timeline: 'Q4 2024 - Q2 2025',
        budget: '$200,000',
        team: '10 members (5 Blockchain Developers, 2 Security Experts, 2 Backend Developers, 1 Business Analyst)',
        technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'PostgreSQL']
    },
    'ar-shopping': {
        title: 'AR Shopping Experience',
        icon: 'fas fa-vr-cardboard',
        description: 'Augmented Reality mobile application that allows customers to virtually try products before purchasing, enhancing the online shopping experience.',
        features: [
            'Virtual try-on for clothing, accessories, and home decor',
            '3D product visualization',
            'Room measurement and product fitting',
            'Social sharing of AR experiences',
            'Integration with product catalogs',
            'Offline AR capabilities'
        ],
        timeline: 'Q1 2025 - Q3 2025',
        budget: '$120,000',
        team: '7 members (3 AR Developers, 2 3D Designers, 1 Mobile Developer, 1 UX Designer)',
        technologies: ['ARKit', 'ARCore', 'Unity', 'Swift', 'Kotlin', 'Firebase']
    },
    'eco-delivery': {
        title: 'Eco-Friendly Delivery System',
        icon: 'fas fa-leaf',
        description: 'Sustainable logistics solution using electric vehicles and optimized routing to reduce carbon footprint while maintaining delivery efficiency.',
        features: [
            'Electric vehicle fleet management',
            'AI-powered route optimization',
            'Carbon footprint tracking for each delivery',
            'Green packaging options',
            'Real-time delivery tracking',
            'Partnership with recycling centers'
        ],
        timeline: 'Q2 2024 - Q4 2024',
        budget: '$80,000',
        team: '6 members (2 Logistics Experts, 2 Software Developers, 1 Operations Manager, 1 Environmental Consultant)',
        technologies: ['Python', 'Google Maps API', 'IoT Sensors', 'React', 'Django']
    },
    'smart-inventory': {
        title: 'Smart Inventory Management',
        icon: 'fas fa-boxes',
        description: 'IoT-based real-time inventory tracking system that uses sensors and AI to optimize stock levels and prevent shortages or overstocking.',
        features: [
            'RFID and IoT sensor integration',
            'Real-time inventory tracking',
            'Automated restocking alerts',
            'Demand forecasting using AI',
            'Multi-warehouse management',
            'Mobile app for inventory control'
        ],
        timeline: 'Q3 2024 - Q1 2025',
        budget: '$100,000',
        team: '8 members (3 IoT Engineers, 3 Backend Developers, 1 Data Analyst, 1 Project Manager)',
        technologies: ['IoT Sensors', 'Python', 'Node.js', 'React', 'AWS IoT Core']
    },
    'global-expansion': {
        title: 'Global Market Expansion',
        icon: 'fas fa-globe-asia',
        description: 'Strategic initiative to expand SelfShop and ElightMart into international markets with localized offerings and multi-language support.',
        features: [
            'Market analysis for 5 target countries',
            'Localized websites and mobile apps',
            'Multi-currency payment processing',
            'International shipping partnerships',
            'Local customer support teams',
            'Cultural adaptation of product offerings'
        ],
        timeline: '2024-2026',
        budget: '$500,000',
        team: '15 members (4 Market Analysts, 5 Localization Experts, 3 Business Developers, 3 Legal Advisors)',
        technologies: ['Multi-language CMS', 'Payment Gateways', 'Analytics Tools', 'CRM Systems']
    }
};

// Show Project Details
function showProject(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="project-modal-header">
            <div class="project-modal-icon">
                <i class="${project.icon}"></i>
            </div>
            <div>
                <h2>${project.title}</h2>
                <p class="project-modal-description">${project.description}</p>
            </div>
        </div>
        
        <div class="project-details-grid">
            <div class="detail-card">
                <h3><i class="fas fa-list-check"></i> Key Features</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-card">
                <h3><i class="fas fa-calendar-alt"></i> Timeline</h3>
                <p>${project.timeline}</p>
                
                <h3><i class="fas fa-money-bill-wave"></i> Budget</h3>
                <p>${project.budget}</p>
                
                <h3><i class="fas fa-users"></i> Team Size</h3>
                <p>${project.team}</p>
            </div>
            
            <div class="detail-card">
                <h3><i class="fas fa-code"></i> Technologies</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h3><i class="fas fa-chart-line"></i> Expected Impact</h3>
                <p>Increased customer satisfaction by 40%, reduced operational costs by 25%, and projected revenue growth of 35%.</p>
            </div>
        </div>
        
        <div class="project-action">
            <button class="btn-primary" onclick="interestInProject('${projectId}')">
                <i class="fas fa-handshake"></i> Express Interest in Partnership
            </button>
            <button class="btn-secondary" onclick="downloadProjectBrief('${projectId}')">
                <i class="fas fa-download"></i> Download Project Brief
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Express Interest Function
function interestInProject(projectId) {
    alert(`Thank you for your interest in "${projects[projectId].title}"! We will contact you shortly to discuss partnership opportunities.`);
    closeModal();
}

// Download Project Brief (Simulated)
function downloadProjectBrief(projectId) {
    alert(`Downloading project brief for "${projects[projectId].title}"...`);
    // In real implementation, this would trigger a file download
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || 'User';
    
    // Show success message
    alert(`Thank you for your message, ${name}! I will get back to you within 24 hours.`);
    
    // Reset form
    this.reset();
    
    // In real implementation, you would send data to a server
    // Example: fetch('/send-message', { method: 'POST', body: formData })
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ahmed Subel Portfolio Website Loaded Successfully!');
    
    // Add CSS for modal content
    const style = document.createElement('style');
    style.textContent = `
        .project-modal-header {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .project-modal-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .project-modal-icon i {
            font-size: 2rem;
            color: white;
        }
        
        .project-modal-description {
            color: #666;
            margin-top: 0.5rem;
            line-height: 1.6;
        }
        
        .project-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .detail-card {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 12px;
        }
        
        .detail-card h3 {
            color: #2d3748;
            margin: 1rem 0 0.5rem;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .detail-card h3:first-child {
            margin-top: 0;
        }
        
        .detail-card ul {
            list-style: none;
            padding-left: 0;
        }
        
        .detail-card li {
            margin-bottom: 0.5rem;
            padding-left: 1.2rem;
            position: relative;
        }
        
        .detail-card li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #48bb78;
            font-weight: bold;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        
        .tech-tag {
            background: #e2e8f0;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            color: #4a5568;
        }
        
        .project-action {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            .project-action {
                flex-direction: column;
            }
            
            .project-modal-header {
                flex-direction: column;
                text-align: center;
            }
            
            .project-modal-icon {
                margin: 0 auto;
            }
        }
    `;
    document.head.appendChild(style);
});
// FAQ Functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on question
            question.classList.toggle('active');
            
            // Get the answer element
            const answer = question.nextElementSibling;
            
            // Toggle answer visibility
            if (question.classList.contains('active')) {
                answer.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.classList.remove('active');
                answer.style.maxHeight = null;
            }
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.classList.remove('active');
                    otherAnswer.style.maxHeight = null;
                }
            });
        });
    });
    
    // Open first FAQ by default
    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        const firstAnswer = faqQuestions[0].nextElementSibling;
        firstAnswer.classList.add('active');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
    }
}

// Initialize FAQ when page loads
document.addEventListener('DOMContentLoaded', initializeFAQ);
