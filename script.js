// Wait for the HTML layout to load completely before running scripts
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. HOME SLIDER LOGIC (Safely checks for elements first)
    // ==========================================
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // This "if" statement stops the code from crashing on your About page!
    if (slides.length > 0 && nextBtn && prevBtn) {
        let current = 0;

        function showSlide(index){
            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            slides[index].classList.add("active");
            if(dots[index]) dots[index].classList.add("active");
            current = index;
        }

        function nextSlide(){
            current++;
            if(current >= slides.length){ current = 0; }
            showSlide(current);
        }

        function prevSlide(){
            current--;
            if(current < 0){ current = slides.length - 1; }
            showSlide(current);
        }

        nextBtn.onclick = nextSlide;
        prevBtn.onclick = prevSlide;

        dots.forEach((dot, index) => {
            dot.onclick = () => showSlide(index);
        });

        setInterval(nextSlide, 6000);
    }

    // ==========================================
    // 2. MOBILE NAVIGATION MENU TOGGLE LOGIC
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });

        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
            }
        });
    }

    // ==========================================
    // 3. INTERACTIVE IMAGE SWAPPER (About Page)
    // ==========================================
    const frontImage = document.querySelector(".main-frame img");
    const backImage = document.querySelector(".secondary-frame img");
    
    if (frontImage && backImage) {
        const frames = document.querySelectorAll(".about-img-frame");
        
        frames.forEach(frame => {
            frame.addEventListener("click", (e) => {
                e.stopPropagation();
                
                // Read the current image links
                const path1 = frontImage.src;
                const path2 = backImage.src;
                
                // Swap the paths directly inside the elements
                frontImage.src = path2;
                backImage.src = path1;
            });
        });
    }
});

    // =======================================================
    // 5. TRAILS PAGE SEARCH & FILTER LOGIC
    // =======================================================
    const trailSearch = document.getElementById("trailSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const trailCards = document.querySelectorAll(".trail-card");

    if (trailCards.length > 0) {
        let activeCategory = "all";
        let searchQuery = "";

        // Core filter engine
        function filterTrails() {
            trailCards.forEach(card => {
                const trailName = card.querySelector("h3").textContent.toLowerCase();
                const difficultyTag = card.querySelector(".difficulty-tag").textContent.toLowerCase();
                
                // Condition checks
                const matchesSearch = trailName.includes(searchQuery);
                const matchesCategory = (activeCategory === "all" || difficultyTag === activeCategory);

                // Show or hide card based on results
                if (matchesSearch && matchesCategory) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        }

        // Listen for typing inside the Search input field
        if (trailSearch) {
            trailSearch.addEventListener("input", (e) => {
                searchQuery = e.target.value.toLowerCase();
                filterTrails();
            });
        }

        // Listen for clicks on the Filter category buttons
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active styling color from old button, add to clicked button
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update category target state and filter
                activeCategory = button.textContent.toLowerCase();
                filterTrails();
            });
        });
    }

       // =======================================================
    // 6. MULTI-PEAK ACCORDION BROWSER FILTER
    // =======================================================
    const profileBlocks = document.querySelectorAll(".mountain-profile-block");

    if (profileBlocks.length > 0) {
        profileBlocks.forEach(block => {
            const headers = block.querySelectorAll(".accordion-header");
            
            headers.forEach(header => {
                header.addEventListener("click", () => {
                    const currentItem = header.parentElement;
                    
                    // Toggle the clicked folder frame state
                    currentItem.classList.toggle("active");

                    // Close only the OTHER folders within this specific mountain profile block
                    const localItems = block.querySelectorAll(".accordion-item");
                    localItems.forEach(item => {
                        if (item !== currentItem) {
                            item.classList.remove("active");
                        }
                    });
                });
            });
        });
    }

        // =======================================================
    // 7. HIGH-PERFORMANCE GALLERY SCROLL REVEAL EFFECT
    // =======================================================
    const revealItems = document.querySelectorAll(".scroll-reveal");

    if (revealItems.length > 0) {
        // Observer runtime configuration rules
        const revealOptions = {
            root: null, // Scans within the global viewport boundary box
            threshold: 0.15, // Triggers immediately once 15% of the item cards enter view
            rootMargin: "0px 0px -20px 0px" // Slight bottom offset buffer padding
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Inject active ending styles rule class
                    entry.target.classList.add("reveal-active");
                    
                    // Stop watching once animated to save processing memory loops
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        // Bind intersection sensor to each individual gallery card element
        revealItems.forEach(item => {
            revealObserver.observe(item);
        });
    }
