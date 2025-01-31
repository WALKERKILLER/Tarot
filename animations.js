// 动画管理器
class AnimationManager {
    static init() {
        this.setupParticles();
        this.setupCardHoverEffects();
        this.setupGlowEffects();
    }

    // 设置粒子背景
    static setupParticles() {
        const particles = document.getElementById('particles');
        if (!particles) return;

        // 创建涟漪环背景
        for (let i = 0; i < 20; i++) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = `${Math.random() * 100}%`;
            ripple.style.top = `${Math.random() * 100}%`;
            ripple.style.animationDelay = `${Math.random() * 4}s`;
            particles.appendChild(ripple);
        }

        // 添加鼠标跟随闪烁粒子效果
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.7) { // 调整生成频率
                this.createMouseSparkle(e);
            }
        });
    }

    // 创建鼠标跟随闪烁粒子
    static createMouseSparkle(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'mouse-sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);

        // 自动删除元素
        setTimeout(() => sparkle.remove(), 1000);
    }

    // 卡牌展开动画
    static spreadCards() {
        const cards = document.querySelectorAll('.card-slot');
        
        // 重置卡牌状态
        gsap.set(cards, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotation: -15
        });

        // 创建展开动画
        gsap.to(cards, {
            duration: 1.2,
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            stagger: {
                each: 0.2,
                from: "center",
                ease: "power2.out"
            },
            ease: "elastic.out(0.6, 0.5)",
            onComplete: () => {
                // 添加悬浮效果
                cards.forEach(card => {
                    gsap.to(card, {
                        y: -5,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut"
                    });
                });
            }
        });
    }

    // 卡牌翻转动画
    static enhancedFlipCard(card) {
        gsap.to(card, {
            duration: 0.6,
            rotationY: 180,
            ease: "power2.inOut"
        });
    }

    // 内容淡入动画
    static fadeInContent(element) {
        gsap.from(element, {
            duration: 0.8,
            opacity: 0,
            y: 20,
            ease: "power2.out"
        });
    }

    // 显示解读效果
    static showReadingEffects(container) {
        const elements = container.querySelectorAll('.reading-section, .synthesis-section, .fun-fact');
        gsap.from(elements, {
            duration: 0.8,
            opacity: 0,
            y: 30,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // 重置效果
    static resetEffects() {
        gsap.set('.card-slot', { clearProps: "all" });
        gsap.set('#reading-container > *', { clearProps: "all" });
    }

    // 添加卡牌悬停效果
    static setupCardHoverEffects() {
        const cards = document.querySelectorAll('.card-slot');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (!card.classList.contains('flipped')) {
                    gsap.to(card, {
                        duration: 0.3,
                        y: -15,
                        scale: 1.05,
                        rotation: 0,
                        ease: "back.out(1.7)",
                        boxShadow: "0 10px 20px rgba(212, 175, 55, 0.2)"
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('flipped')) {
                    gsap.to(card, {
                        duration: 0.5,
                        y: -5,
                        scale: 1,
                        rotation: 0,
                        ease: "power2.out",
                        boxShadow: "none"
                    });
                }
            });
        });
    }
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', () => {
    AnimationManager.init();
});

// 导出动画管理器
window.AnimationManager = AnimationManager; 