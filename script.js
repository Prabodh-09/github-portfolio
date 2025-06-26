document.addEventListener("DOMContentLoaded", function() {
    const words = [
        "Prabodh", "Engineering", "AI", "ML", "Python", "C", "9.1", "8.6", 
        "Developer", "Blockchain", "Data", "Analytics", "Web", "Django", 
        "NodeJS", "JavaScript", "HTML", "CSS", "Figma", "GitHub", "IBM", 
        "SAP", "KG Reddy", "Don Bosco", "Hyderabad", "India", "Leadership", 
        "Innovation", "Technology", "Code", "Algorithm", "Database", "SQL", 
        "NoSQL", "React", "Vue", "Angular", "TensorFlow", "PyTorch", "KNN", 
        "NLP", "Deep Learning", "Neural Networks", "Computer Vision", 
        "E-commerce", "ReviveCart", "Iris", "Classification", "Recipe", 
        "Generator", "Background", "Removal", "Internship", "Generator", "Background", "Removal", "Internship", "Workshop", 
        "Technical", "Fest", "IKARUS", "Marathon", "Certificate", "Skills", 
        "Learning", "Problem", "Solving", "Communication", "Management","Learning", "Problem", "Solving", "Communication", "Management"
    ];
    
    const backgroundWordsContainer = document.getElementById('backgroundWords');
    const cleanButton = document.getElementById('cleanButton');
    const lightTransition = document.getElementById('lightTransition');
    const mainContent = document.getElementById('main-content');
    const heroSection = document.querySelector('.hero');
    
    // Create floating words
    function createFloatingWords() {
        for (let i = 0; i < 60; i++) {
            const span = document.createElement('span');
            span.textContent = words[Math.floor(Math.random() * words.length)];
            
            // Random position
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            
            // Random animation duration and delay
            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5;
            opacity = 0.5 + Math.random() * 0.5; // Random opacity between 0.5 and 1
            
            span.style.left = startX + 'vw';
            span.style.position = 'absolute';
            span.style.top = startY + 'vh';
            span.style.left = startX + 'vw';
            span.style.animation = `float ${duration}s linear ${delay}s infinite`;
            span.style.opacity = opacity;

            backgroundWordsContainer.appendChild(span);
        }
    }
    
    createFloatingWords();
    
    // Clean button functionality
    cleanButton.addEventListener('click', function() {
        // Show bright light transition
        lightTransition.style.opacity = '1';
        
        // After transition completes
        setTimeout(() => {
            // Hide hero section
            heroSection.style.display = 'none';
            
            // Show main content
            mainContent.style.display = 'block';
            
            // Fade in the content
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
            
            // Fade out the light
            lightTransition.style.opacity = '0';
        }, 500);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add this to your existing main.js file
function animateEducationSection() {
    // Animate progress circles
    const circles = document.querySelectorAll('.progress-circle-fill');
    circles.forEach(circle => {
        const percent = circle.parentElement.getAttribute('data-percent');
        const dashOffset = 283 - (283 * percent / 100);
        circle.style.setProperty('--dash-offset', dashOffset);
    });

    // Animate progress bars
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.setProperty('--final-width', width);
        bar.style.width = '0';
    });
}

// Call this function when the education section comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateEducationSection();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const educationSection = document.querySelector('#education');
if (educationSection) {
    observer.observe(educationSection);
}

// Add this to your existing main.js file

function initSkillsAnimations() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                animateSoftSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillsObserver.observe(skillsSection);

    function animateSkillBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.width = `${level}%`;
            
            // Add glowing effect at the end of animation
            setTimeout(() => {
                bar.style.boxShadow = `0 0 15px rgba(100, 255, 218, 0.5)`;
                setTimeout(() => {
                    bar.style.boxShadow = 'none';
                }, 300);
            }, 1500);
        });
    }

    function animateSoftSkills() {
        const softSkillItems = document.querySelectorAll('.soft-skill-item');
        
        softSkillItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
}

// Initialize skills animations after page load
setTimeout(initSkillsAnimations, 500);
// Project Card Interactions
function initProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Click event for project cards
        card.addEventListener('click', function(e) {
            // Only trigger if not clicking on the button
            if (!e.target.classList.contains('project-btn')) {
                // Add your project modal or expansion logic here
                console.log('Project clicked:', this.querySelector('h3').textContent);
            }
        });
        
        // Touch devices hover effect
        card.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover-effect');
            }, 500);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjectInteractions();
    
    // Add intersection observer for scroll animations
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        projectObserver.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Experience Timeline
    initExperienceTimeline();
    
    function initExperienceTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timeline = document.querySelector('.simple-timeline');
        
        if (!timelineItems.length) return;
        
        // Create Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateTimelineItem(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        );

        // Observe each timeline item
        timelineItems.forEach((item, index) => {
            // Set initial state
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `all 0.6s ease ${index * 0.15}s`;
            
            // Start observing
            observer.observe(item);
        });

        // Add hover effects
        addTimelineHoverEffects();
    }

    function animateTimelineItem(item) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        
        // Animate the marker
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
            marker.style.transform = 'scale(0)';
            marker.style.transition = 'transform 0.4s ease 0.3s';
            setTimeout(() => {
                marker.style.transform = 'scale(1)';
            }, 10);
        }
    }

    function addTimelineHoverEffects() {
        const timelineContents = document.querySelectorAll('.timeline-content');
        
        timelineContents.forEach(content => {
            content.addEventListener('mouseenter', () => {
                content.style.transform = 'translateX(5px)';
                content.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.1)';
                content.style.borderLeftColor = '#64ffda';
            });
            
            content.addEventListener('mouseleave', () => {
                content.style.transform = 'translateX(0)';
                content.style.boxShadow = 'none';
                content.style.borderLeftColor = 'rgba(100, 255, 218, 0.5)';
            });
        });
    }

    // Handle window resize for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            adjustTimelineForMobile();
        }, 250);
    });

    function adjustTimelineForMobile() {
        if (window.innerWidth < 768) {
            // Mobile-specific adjustments
            const timelineMarkers = document.querySelectorAll('.timeline-marker');
            timelineMarkers.forEach(marker => {
                marker.style.left = '-28px';
            });
        }
    }

    // Initialize mobile adjustments
    adjustTimelineForMobile();
});

// Add this to your existing main.js
function initAchievementsAnimation() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    achievementCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(card);
    });

    // Medal hover effects
    achievementCards.forEach(card => {
        const medal = card.querySelector('.medal');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
            medal.style.transform = `rotate(${-angle/10}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            medal.style.transform = 'rotate(0) scale(1)';
        });
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initAchievementsAnimation);


