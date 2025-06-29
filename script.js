document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const implementationsData = [
      { id: 1, title: "Next-Gen Fintech Platform", description: "Architected a scalable, secure fintech platform for real-time transaction processing using a microservices-based approach.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=Fintech+Platform", tags: ["C#", ".NET 8", "Azure", "React"], link: "#" },
      { id: 2, title: "AI-Powered Logistics Optimizer", description: "Developed an AI model to optimize global supply chain routes, reducing fuel costs by 15% and delivery times by 20%.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=AI+Logistics", tags: ["Python", "TensorFlow", "GCP", "Kubernetes"], link: "#" },
      { id: 3, title: "Decentralized Identity Solution", description: "Built a decentralized identity management system using blockchain, giving users full control over their personal data.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=Decentralized+ID", tags: ["Go", "Cosmos SDK", "Cryptography"], link: "#" },
      { id: 4, title: "Cloud Transformation for Healthcare", description: "Led a major cloud migration for a healthcare provider, ensuring HIPAA compliance and enhancing data interoperability with FHIR.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=Healthcare+Cloud", tags: [".NET", "Azure", "FHIR", "Security"], link: "#" },
      { id: 5, title: "Interactive E-Learning Portal", description: "Created a rich, interactive e-learning portal with adaptive learning paths and real-time collaboration features for students.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=E-Learning", tags: ["React", "Node.js", "WebSocket", "MongoDB"], link: "#" },
      { id: 6, title: "High-Frequency Trading Engine", description: "Engineered a low-latency trading engine capable of processing millions of transactions per second with minimal jitter.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=HFT+Engine", tags: ["C++", "Linux", "FPGA", "Networking"], link: "#" },
      { id: 7, title: "Predictive Maintenance for IoT", description: "An IoT solution that uses sensor data and ML to predict equipment failures, enabling proactive maintenance and reducing downtime.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=IoT+Maintenance", tags: ["Python", "AWS IoT", "TimescaleDB", "Grafana"], link: "#" },
      { id: 8, title: "Automated Code Analysis Tool", description: "A static analysis tool that integrates into CI/CD pipelines to detect security vulnerabilities and code quality issues automatically.", imageUrl: "https://placehold.co/600x400/121212/D4AF37?text=Code+Analyzer", tags: ["Java", "ANTLR", "Jenkins", "Docker"], link: "#" },
    ];
    const contributionsData = [
        { id: 1, title: "A Novel Framework for Self-Healing Microservices", description: "Published research on an autonomous framework that detects and recovers from service failures in distributed systems.", link: "#" },
        { id: 2, title: "Privacy-Preserving Machine Learning via Federated Averaging", description: "Investigating advanced techniques in federated learning to train models without compromising sensitive user data.", link: "#" },
        { id: 3, title: "Formal Verification of Smart Contract Security", description: "A methodology for mathematically proving the security and correctness of blockchain smart contracts to prevent exploits.", link: "#" },
        { id: 4, title: "Energy-Efficient Resource Allocation in Cloud Data Centers", description: "Research on algorithmic strategies to reduce the carbon footprint of large-scale data centers through intelligent workload scheduling.", link: "#" },
    ];
    const technologiesData = [ ".NET 8", "C#", "Java", "Spring Boot", "Go", "Python", "Node.js", "REST APIs", "gRPC", "Microservices", "React", "TypeScript", "JavaScript", "HTML5", "Tailwind CSS", "Next.js", "Vue.js", "Azure", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD", "Jenkins", "SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka", "Spark", "System Architecture", "Security", "Agile", "Scrum", "TDD"];
    
    // --- SVG ICONS ---
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    // --- DOM ELEMENTS ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const navProgressBar = document.getElementById('nav-progress-bar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const heroSection = document.getElementById('home');
    const stickyImage = document.getElementById('sticky-image');
    const heroImageContainer = document.getElementById('hero-image-container');

    // --- INJECT DYNAMIC CONTENT ---
    const createSectionHeader = (title) => `
        <div class="max-w-7xl mx-auto">
            <div class="reveal">
                <h2 class="font-heading text-4xl font-bold text-theme-text mb-4">${title}</h2>
                <div class="w-24 h-1 bg-theme-primary mb-12 origin-left transition-transform duration-700 ease-out scale-x-0"></div>
            </div>
        </div>`;

    // Implementations
    const implementationsSection = document.getElementById('implementations');
    if (implementationsSection) {
        implementationsSection.innerHTML = createSectionHeader('Featured Implementations') + `
            <div class="grid md:grid-cols-2 gap-8">
                ${implementationsData.map((project, index) => `
                    <div class="reveal bg-theme-surface rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-theme-primary/10 transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col" style="transition-delay: ${index * 100}ms;">
                        <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-56 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1E1E1E/ff0000?text=Image+Error';">
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="font-heading text-xl font-bold text-theme-text mb-2">${project.title}</h3>
                            <p class="text-theme-text-secondary mb-4 text-sm flex-grow">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.tags.map(tag => `<span class="bg-theme-primary/10 text-theme-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">${tag}</span>`).join('')}
                            </div>
                            <a href="${project.link}" class="inline-flex items-center font-semibold text-theme-primary group-hover:underline mt-auto">View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                        </div>
                    </div>`).join('')}
            </div>`;
    }
    
    // Contributions (with "View Archive" logic)
    const contributionsSection = document.getElementById('contributions');
    if (contributionsSection) {
        const contributionsContainer = document.createElement('div');
        contributionsContainer.innerHTML = createSectionHeader('Scholarly Contributions');

        const contributionsGrid = document.createElement('div');
        contributionsGrid.className = 'grid md:grid-cols-2 gap-6';

        const renderContributions = (expanded) => {
            const data = expanded ? contributionsData : contributionsData.slice(0, 4);
            contributionsGrid.innerHTML = data.map((work, index) => `
                <div class="reveal h-full" style="transition-delay: ${index * 100}ms;">
                  <div class="bg-theme-surface p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-theme-primary/10 transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-theme-primary/20 hover:border-theme-primary h-full flex flex-col">
                       <h3 class="font-heading text-lg font-bold text-theme-text mb-2">${work.title}</h3>
                       <p class="text-theme-text-secondary mb-4 text-sm flex-grow">${work.description}</p>
                       <a href="${work.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center font-semibold text-theme-primary group-hover:underline mt-auto">Read Publication <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
                  </div>
                </div>`).join('');
        };
        
        renderContributions(false);
        contributionsContainer.appendChild(contributionsGrid);

        if(contributionsData.length > 4) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'text-center mt-12';
            const archiveButton = document.createElement('button');
            archiveButton.className = 'bg-theme-surface text-theme-text font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg border border-theme-primary/20 hover:border-theme-primary';
            archiveButton.textContent = 'View Full Archive';
            let isExpanded = false;
            archiveButton.addEventListener('click', () => {
                isExpanded = !isExpanded;
                archiveButton.textContent = isExpanded ? 'Show Less' : 'View Full Archive';
                renderContributions(isExpanded);
            });
            buttonContainer.appendChild(archiveButton);
            contributionsContainer.appendChild(buttonContainer);
        }
        contributionsSection.appendChild(contributionsContainer);
    }
    
    // Technologies
    const technologiesSection = document.getElementById('technologies');
    if (technologiesSection) {
        technologiesSection.innerHTML = createSectionHeader('Technical Expertise') + `
            <div class="flex flex-wrap justify-center gap-3">
                ${technologiesData.map((tech, index) => `<div class="reveal bg-theme-surface border border-transparent hover:border-theme-primary text-theme-text-secondary hover:text-theme-primary px-4 py-2 rounded-lg transition-all cursor-default shadow-md" style="transition-delay: ${index * 25}ms;">${tech}</div>`).join('')}
            </div>`;
    }
            
    // Contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.innerHTML = createSectionHeader('Connect') + `
            <div class="reveal max-w-2xl mx-auto text-center">
                <p class="text-lg text-theme-text-secondary mb-8">I am currently available for consulting engagements and advisory roles. If you have a challenge that requires strategic technological leadership, I would be delighted to hear from you.</p>
                <div class="flex justify-center gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" class="p-4 bg-theme-surface rounded-full text-theme-text-secondary hover:text-theme-primary hover:scale-110 transition-all transform duration-300 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="p-4 bg-theme-surface rounded-full text-theme-text-secondary hover:text-theme-primary hover:scale-110 transition-all transform duration-300 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
            </div>`;
    }

    // --- THEME LOGIC ---
    let currentTheme = localStorage.getItem('theme') || 'dark';
    const html = document.documentElement;

    const applyTheme = (theme) => {
        html.classList.remove(theme === 'dark' ? 'light' : 'dark');
        html.classList.add(theme);
        if (themeToggleButton) {
            themeToggleButton.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
        }
    }
    applyTheme(currentTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            applyTheme(currentTheme);
        });
    }
    
    // --- SCROLL LOGIC & ANIMATIONS ---
    const navLinksOrder = ["home", "about", "implementations", "contributions", "technologies", "contact"];
    let visibleSections = {};

    const scrollObserver = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            // Update visibility status of each section
            visibleSections[entry.target.id] = entry.isIntersecting;
        });

        // Determine the currently active section
        let currentActiveSection = '';
        for (const sectionId of navLinksOrder) {
            if (visibleSections[sectionId]) {
                currentActiveSection = sectionId;
                break; // Use the first visible section from the top
            }
        }
        
        // Fallback to the last one if scrolling up from bottom
        if (!currentActiveSection) {
             for (let i = navLinksOrder.length - 1; i >= 0; i--) {
                const sectionId = navLinksOrder[i];
                const rect = document.getElementById(sectionId).getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    currentActiveSection = sectionId;
                    break;
                }
            }
        }

        // Update nav link styles
        navLinks.forEach(link => {
            const id = link.getAttribute('data-nav-id');
            if (id === currentActiveSection) {
                link.classList.add('text-theme-primary', 'font-semibold');
                link.classList.remove('text-theme-text-secondary');
            } else {
                link.classList.remove('text-theme-primary', 'font-semibold');
                link.classList.add('text-theme-text-secondary');
            }
        });

    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => scrollObserver.observe(section));

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate section underline
                const underline = entry.target.querySelector('.w-24.h-1');
                if (underline) {
                    underline.style.transform = 'scaleX(1)';
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    
    const staggerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stagger-word').forEach((word, i) => {
                   setTimeout(() => word.classList.add('visible'), i * 150);
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stagger-text').forEach(el => {
        el.innerHTML = el.textContent.split(' ').map(word => `<span class="stagger-word"><span>${word}</span></span>`).join(' ');
        staggerObserver.observe(el);
    });

    const heroObserver = new IntersectionObserver(([entry]) => {
        if (!stickyImage || !heroImageContainer) return;
        if (entry.isIntersecting) {
            stickyImage.classList.add('opacity-0', 'scale-75');
            stickyImage.classList.remove('opacity-100', 'scale-100');
            heroImageContainer.classList.add('opacity-100', 'scale-100');
            heroImageContainer.classList.remove('opacity-0', 'scale-50');
        } else {
            stickyImage.classList.remove('opacity-0', 'scale-75');
            stickyImage.classList.add('opacity-100', 'scale-100');
            heroImageContainer.classList.remove('opacity-100', 'scale-100');
            heroImageContainer.classList.add('opacity-0', 'scale-50');
        }
    }, { threshold: 0.1 });
    
    if (heroSection) heroObserver.observe(heroSection);

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = window.scrollY / totalHeight;
            if (navProgressBar) {
                 navProgressBar.style.height = `${progress * 100}%`;
            }
        }
    }, { passive: true });
});