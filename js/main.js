// Main JavaScript functionality for the PLS120 Statistics Lab Materials website

class PLS120Website {
    constructor() {
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTheme();
        this.handleInitialRoute();
    }

    setupEventListeners() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');
        
        sidebarToggle?.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Mobile behavior - simple overlay
                sidebar.classList.toggle('active');
            } else {
                // Desktop behavior
                sidebar.classList.toggle('collapsed');
                const footer = document.getElementById('footer');
                if (sidebar.classList.contains('collapsed')) {
                    footer.style.marginLeft = '0';
                } else {
                    footer.style.marginLeft = '280px';
                }
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        
        menuToggle?.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Mobile dropdown menu
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileDropdown = document.getElementById('mobile-dropdown');
        
        mobileMenuButton?.addEventListener('click', () => {
            mobileDropdown.classList.toggle('active');
        });

        // Close mobile dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenuButton && mobileDropdown && 
                !mobileMenuButton.contains(e.target) && 
                !mobileDropdown.contains(e.target)) {
                mobileDropdown.classList.remove('active');
            }
        });

        // Theme toggle
        this.setupThemeToggle();



        // Download handlers
        this.setupDownloadHandlers();

        // GitHub integration
        this.setupGitHubIntegration();

        // Navigation
        this.setupNavigation();

        // Window resize handler
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar?.classList.remove('active');
                mobileDropdown?.classList.remove('active');
            }
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle?.querySelector('i');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        
        themeToggle?.addEventListener('click', () => {
            this.toggleTheme(themeIcon, mobileThemeToggle);
        });
        
        mobileThemeToggle?.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme(themeIcon, mobileThemeToggle);
        });
    }

    toggleTheme(themeIcon, mobileThemeToggle) {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon?.classList.remove('fa-moon');
            themeIcon?.classList.add('fa-sun');
            if (mobileThemeToggle) {
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Theme';
            }
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon?.classList.remove('fa-sun');
            themeIcon?.classList.add('fa-moon');
            if (mobileThemeToggle) {
                mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Theme';
            }
            localStorage.setItem('theme', 'light');
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const themeIcon = document.querySelector('#theme-toggle i');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon?.classList.remove('fa-moon');
            themeIcon?.classList.add('fa-sun');
            if (mobileThemeToggle) {
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Theme';
            }
        }
    }



    setupDownloadHandlers() {
        document.getElementById('download-pdf')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.generatePDF();
        });
        
        document.getElementById('download-md')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.generateMarkdown();
        });
        
        document.getElementById('mobile-download-pdf')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.generatePDF();
        });
        
        document.getElementById('mobile-download-md')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.generateMarkdown();
        });
    }

    setupGitHubIntegration() {
        const openIssueBtn = document.getElementById('open-issue-btn');
        const mobileOpenIssue = document.getElementById('mobile-open-issue');
        
        const openGitHubIssue = (e) => {
            e?.preventDefault();
            window.open('https://github.com/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/issues/new', '_blank');
        };
        
        openIssueBtn?.addEventListener('click', openGitHubIssue);
        mobileOpenIssue?.addEventListener('click', openGitHubIssue);
    }

    setupNavigation() {
        const sections = document.querySelectorAll('#main-content > .section');
        const navLinks = document.querySelectorAll('.sidebar-nav-link');
        const labCardLinks = document.querySelectorAll('.lab-card-link');
        
        // Add click event listeners to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                this.showSection(sectionId);
                
                // Update URL hash without scrolling
                history.pushState(null, null, `#${sectionId}`);
            });
        });
        
        // Add click event listeners to lab card links
        labCardLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                this.showSection(sectionId);
                
                // Update URL hash without scrolling
                history.pushState(null, null, `#${sectionId}`);
            });
        });
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.substring(1);
            this.showSection(hash || 'home');
        });
    }

    showSection(sectionId) {
        const sections = document.querySelectorAll('#main-content > .section');
        const navLinks = document.querySelectorAll('.sidebar-nav-link');
        const sidebar = document.getElementById('sidebar');
        const mobileDropdown = document.getElementById('mobile-dropdown');
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected section or load it if it doesn't exist
        let selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        } else {
            // Load the section dynamically
            this.loadSection(sectionId);
        }
        
        // Update active state in navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            sidebar?.classList.remove('active');
            mobileDropdown?.classList.remove('active');
        }
        
        // Update footer margin in fullscreen mode
        if (document.body.classList.contains('fullscreen-mode')) {
            const footer = document.getElementById('footer');
            if (footer) footer.style.marginLeft = '0';
        }
        
        // Scroll to top when switching sections
        window.scrollTo(0, 0);
        
        this.currentSection = sectionId;
    }

    async loadSection(sectionId) {
        try {
            const response = await fetch(`pages/${sectionId}.html`);
            if (response.ok) {
                const content = await response.text();
                const mainContent = document.getElementById('main-content');
                
                // Create new section element
                const sectionElement = document.createElement('div');
                sectionElement.id = sectionId;
                sectionElement.className = 'section';
                sectionElement.innerHTML = content;
                
                mainContent.appendChild(sectionElement);
                sectionElement.style.display = 'block';
            } else {
                // Show placeholder if file doesn't exist
                this.showPlaceholder(sectionId);
            }
        } catch (error) {
            console.error(`Error loading section ${sectionId}:`, error);
            this.showPlaceholder(sectionId);
        }
    }

    showPlaceholder(sectionId) {
        const mainContent = document.getElementById('main-content');
        const sectionElement = document.createElement('div');
        sectionElement.id = sectionId;
        sectionElement.className = 'section';
        sectionElement.innerHTML = `
            <h1 class="page-title">${this.getSectionTitle(sectionId)}</h1>
            <div class="card">
                <p>This content is under development. Check back soon for the complete tutorial.</p>
            </div>
        `;
        
        mainContent.appendChild(sectionElement);
        sectionElement.style.display = 'block';
    }

    getSectionTitle(sectionId) {
        const titles = {
            'week1': 'Week 1: Introduction to Statistics',
            'week2': 'Week 2: Descriptive Statistics',
            'week3': 'Week 3: Probability Distributions',
            'week4': 'Week 4: Hypothesis Testing',
            'week5': 'Week 5: t-Tests',
            'week6': 'Week 6: ANOVA',
            'week7': 'Week 7: Regression Analysis',
            'week8': 'Week 8: Correlation Analysis',
            'week9': 'Week 9: Non-parametric Tests',
            'week10': 'Week 10: Final Project',
            'syllabus': 'Course Syllabus',
            'resources': 'Resources',
            'faq': 'Frequently Asked Questions'
        };
        return titles[sectionId] || 'Page Not Found';
    }

    handleInitialRoute() {
        const hash = window.location.hash.substring(1);
        this.showSection(hash || 'home');
    }

    generatePDF() {
        // Find the currently visible section
        const activeSection = document.querySelector('#main-content .section:not([style*="display: none"])');
        
        if (!activeSection) {
            alert('No content to download.');
            return;
        }
        
        // Create a new window with only the content
        const printWindow = window.open('', '_blank');
        const pageTitle = activeSection.querySelector('.page-title')?.textContent || 'Content';
        
        // Clone the section and remove any unwanted elements
        const contentClone = activeSection.cloneNode(true);
        const toggleButton = contentClone.querySelector('.sidebar-toggle');
        if (toggleButton) toggleButton.remove();
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${pageTitle}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                    h1 { color: #002855; border-bottom: 2px solid #FFD100; padding-bottom: 8px; }
                    h2 { color: #002855; margin-top: 30px; }
                    h3 { color: #002855; }
                    .card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 4px; }
                    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    ul, ol { margin: 10px 0 10px 20px; }
                    .sidebar-toggle { display: none !important; }
                </style>
            </head>
            <body>
                ${contentClone.innerHTML}
            </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }

    generateMarkdown() {
        const activeSection = document.querySelector('.section[style*="block"]') || 
                            document.querySelector('.section:not([style*="none"])');
        
        if (!activeSection) {
            alert('No content to download.');
            return;
        }
        
        const pageTitle = activeSection.querySelector('.page-title')?.textContent || 'Content';
        const pageSubtitle = activeSection.querySelector('.page-subtitle')?.textContent || '';
        
        let markdown = `# ${pageTitle}\n\n`;
        if (pageSubtitle) {
            markdown += `*${pageSubtitle}*\n\n`;
        }
        
        // Process content sections
        const contentSections = activeSection.querySelectorAll('.section-title, .lab-section-title');
        contentSections.forEach(sectionTitle => {
            markdown += `## ${sectionTitle.textContent}\n\n`;
            
            let nextElement = sectionTitle.nextElementSibling;
            while (nextElement && !nextElement.matches('.section-title, .lab-section-title')) {
                if (nextElement.classList.contains('card')) {
                    markdown += this.processCardContent(nextElement);
                }
                nextElement = nextElement.nextElementSibling;
            }
        });
        
        // Download the markdown file
        const filename = pageTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.md';
        this.downloadFile(markdown, filename, 'text/markdown');
    }

    processCardContent(card) {
        let content = '';
        
        // Process paragraphs
        const paragraphs = card.querySelectorAll('p');
        paragraphs.forEach(p => {
            content += `${p.textContent}\n\n`;
        });
        
        // Process lists
        const lists = card.querySelectorAll('ul, ol');
        lists.forEach(list => {
            const isOrdered = list.tagName.toLowerCase() === 'ol';
            const items = list.querySelectorAll('li');
            items.forEach((item, index) => {
                if (isOrdered) {
                    content += `${index + 1}. ${item.textContent}\n`;
                } else {
                    content += `* ${item.textContent}\n`;
                }
            });
            content += '\n';
        });
        
        return content;
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Global function for loading pages
window.loadPage = function(pageId) {
    const website = window.pls120Website;
    if (website) {
        website.showSection(pageId);
        history.pushState(null, null, `#${pageId}`);
    }
};

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pls120Website = new PLS120Website();
});