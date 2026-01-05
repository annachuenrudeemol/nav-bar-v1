document.addEventListener('DOMContentLoaded', function() {
    function initIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    initIcons();
    setTimeout(initIcons, 100);

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('active');
                const badge = t.querySelector('.tab-badge');
                if (badge) badge.classList.remove('active');
            });
            this.classList.add('active');
            const badge = this.querySelector('.tab-badge');
            if (badge) badge.classList.add('active');
        });
    });

    // Sidebar navigation icon buttons
    const navIconButtons = document.querySelectorAll('.nav-icon-btn');
    navIconButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('primary') || this.classList.contains('menu-toggle-btn')) {
                return;
            }
            const parent = this.closest('.sidebar-nav') || this.closest('.sidebar-bottom');
            if (parent) {
                const siblings = parent.querySelectorAll('.nav-icon-btn');
                siblings.forEach(btn => {
                    if (btn !== this && !btn.classList.contains('primary') && !btn.classList.contains('menu-toggle-btn')) {
                        btn.classList.remove('active');
                    }
                });
            }
            this.classList.toggle('active');
        });
    });

    // Tabs scrollable container fade indicators
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        function updateScrollIndicators() {
            const { scrollLeft, scrollWidth, clientWidth } = tabsContainer;
            tabsContainer.classList.remove('scrollable-left', 'scrollable-right');
            if (scrollWidth > clientWidth) {
                if (scrollLeft > 0) tabsContainer.classList.add('scrollable-left');
                if (scrollLeft < scrollWidth - clientWidth - 1) tabsContainer.classList.add('scrollable-right');
            }
        }
        updateScrollIndicators();
        tabsContainer.addEventListener('scroll', updateScrollIndicators);
        window.addEventListener('resize', updateScrollIndicators);
        setTimeout(updateScrollIndicators, 100);
    }

    // Hover card functionality
    function setupHoverCard(buttonSelector) {
        const button = document.querySelector(buttonSelector);
        if (!button) return;
        let showTimeout, hideTimeout;
        const hoverCard = button.querySelector('.hover-card');
        
        function showCard() {
            clearTimeout(hideTimeout);
            clearTimeout(showTimeout);
            showTimeout = setTimeout(() => button.classList.add('show-hover-card'), 500);
        }
        
        function scheduleHide() {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => button.classList.remove('show-hover-card'), 200);
        }
        
        function cancelHide() {
            clearTimeout(hideTimeout);
        }
        
        button.addEventListener('mouseenter', () => { cancelHide(); showCard(); });
        button.addEventListener('mouseleave', () => { clearTimeout(showTimeout); scheduleHide(); });
        
        if (hoverCard) {
            hoverCard.addEventListener('mouseenter', cancelHide);
            hoverCard.addEventListener('mouseleave', () => {
                clearTimeout(showTimeout);
                button.classList.remove('show-hover-card');
            });
        }
    }

    // Setup hover cards for all buttons with hover cards
    document.querySelectorAll('.nav-icon-btn').forEach(button => {
        if (button.querySelector('.hover-card')) {
            const classes = Array.from(button.classList);
            const btnClass = classes.find(cls => cls.endsWith('-btn') && cls !== 'nav-icon-btn');
            if (btnClass) setupHoverCard(`.${btnClass}`);
        }
    });

    // Hover card item clicks
    document.addEventListener('click', function(e) {
        const clickedItem = e.target.closest('.hover-card-item');
        if (clickedItem) {
            e.stopPropagation();
            const hoverCard = clickedItem.closest('.hover-card');
            const parentButton = hoverCard ? hoverCard.closest('.nav-icon-btn') : null;
            
            document.querySelectorAll('.hover-card-item').forEach(item => {
                item.classList.remove('active');
            });
            
            clickedItem.classList.add('active');
            
            if (parentButton && !parentButton.classList.contains('primary')) {
                parentButton.classList.add('active');
            }
        }
    });
});
