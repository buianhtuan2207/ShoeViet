import React, { useState } from 'react';
import './ProductDetail.css';
import ProductCard from "../../components/ProductCard";

const relatedProductsData = [
    {
        id: 101,
        name: "AeroBounce Runner",
        category: "Chạy bộ",
        price: "$180",
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 102,
        name: "Cloud Walkers X",
        category: "Thời trang",
        price: "$150",
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 103,
        name: "Trail Blaze Pro",
        category: "Dã ngoại",
        price: "$210",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 104,
        name: "Sprint Elite V2",
        category: "Tốc độ",
        price: "$260",
        img: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop",
    }
];

const productImages = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop"
];

function ProductDetail() {
    // State lưu trữ index của ảnh đang được hiển thị
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Xử lý nút Next (Qua phải)
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Xử lý nút Prev (Qua trái)
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <main className="product-detail-container">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="breadcrumb">
                <ol className="breadcrumb-list">
                    <li><a href="#home">Home</a></li>
                    <li className="separator"><span className="material-symbols-outlined">chevron_right</span></li>
                    <li><a href="#men">Men</a></li>
                    <li className="separator"><span className="material-symbols-outlined">chevron_right</span></li>
                    <li><a href="#performance">Performance</a></li>
                    <li className="separator"><span className="material-symbols-outlined">chevron_right</span></li>
                    <li aria-current="page" className="current-page">AeroKnit Pro</li>
                </ol>
            </nav>

            {/* Product Hero Section */}
            <div className="product-hero">
                {/* Left Column: Gallery */}
                <div className="product-gallery">

                    {/* Main Image Container */}
                    <div className="main-image-wrapper group relative">
                        {/* Nút Prev */}
                        <button className="gallery-nav-btn prev" onClick={handlePrevImage}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>

                        <img
                            alt="Giày AeroKnit Pro"
                            src={productImages[currentImageIndex]}
                            className="main-image w-full h-full object-cover"
                        />

                        {/* Nút Next */}
                        <button className="gallery-nav-btn next" onClick={handleNextImage}>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>

                        <div className="badge new-release absolute top-4 left-4">Mới ra mắt</div>
                        <button className="btn-favorite absolute top-4 right-4" aria-label="Thêm vào mục yêu thích">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="thumbnail-grid">
                        {productImages.map((imgSrc, index) => (
                            <button
                                key={index}
                                className={`thumbnail-btn ${currentImageIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <img alt={`Hình thu nhỏ ${index + 1}`} src={imgSrc} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Product Info */}
                <div className="product-info-wrapper">
                    <div className="product-info-sticky">
                        <div className="title-price-group">
                            <h1 className="product-title">AeroKnit Pro</h1>
                            <div className="product-price">$240.00</div>
                        </div>

                        <p className="product-description">
                            Được thiết kế cho hiệu suất đỉnh cao. AeroKnit Pro sở hữu phần thân trên siêu thoáng khí và đế giữa bằng bọt xốp phản hồi độc quyền, mang lại khả năng hoàn trả năng lượng vượt trội cùng phong cách tối giản, tinh tế.
                        </p>

                        {/* Color Selection */}
                        <div className="selection-group">
                            <div className="selection-header">
                                <span className="selection-label">Màu sắc</span>
                                <span className="selection-value">Trắng / Dạ quang</span>
                            </div>
                            <div className="color-options">
                                <button className="color-btn active">
                                    <span className="color-indicator color-white-neon"></span>
                                </button>
                                <button className="color-btn">
                                    <span className="color-indicator color-black"></span>
                                </button>
                                <button className="color-btn">
                                    <span className="color-indicator color-stone"></span>
                                </button>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="selection-group">
                            <div className="selection-header">
                                <span className="selection-label">Kích cỡ (Nam)</span>
                                <button className="size-guide-link">Hướng dẫn chọn size</button>
                            </div>
                            <div className="size-grid">
                                <button className="size-btn" disabled>7</button>
                                <button className="size-btn">8</button>
                                <button className="size-btn">8.5</button>
                                <button className="size-btn">9</button>
                                <button className="size-btn active">9.5</button>
                                <button className="size-btn">10</button>
                                <button className="size-btn">10.5</button>
                                <button className="size-btn">11</button>
                            </div>
                        </div>

                        {/* Add to Cart CTA */}
                        <div className="cta-group">
                            <button className="btn-add-to-cart">
                                <span>Thêm vào giỏ hàng</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <div className="shipping-info">
                                <span className="material-symbols-outlined icon-small">local_shipping</span>
                                <span>Miễn phí vận chuyển cho đơn hàng trên $150</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <section className="reviews-section">
                <div className="reviews-header">
                    <div className="reviews-summary">
                        <h2 className="section-title">Đánh giá từ khách hàng</h2>
                        <div className="rating-summary">
                            <div className="stars">
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined half">star_half</span>
                            </div>
                            <span className="rating-score">4.8</span>
                            <span className="rating-count">(124 Đánh giá)</span>
                        </div>
                    </div>
                    <button className="btn-outline">Viết đánh giá</button>
                </div>

                <div className="reviews-grid">
                    {/* Review Card 1 */}
                    <div className="review-card">
                        <div className="review-card-header">
                            <div className="stars small">
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                            </div>
                            <span className="review-date">2 ngày trước</span>
                        </div>
                        <h3 className="review-title">Tuyệt vời cho chạy bộ đường dài</h3>
                        <p className="review-content">"Khả năng hoàn trả năng lượng thực sự đáng kinh ngạc. Tôi đã cải thiện được vài phút cho kỷ lục 10k của mình, và đôi giày cũng đủ đẹp để đi dạo phố sau đó."</p>
                        <div className="review-author">
                            <div className="author-avatar">JD</div>
                            <span className="author-name">James D. <span className="verified">Đã mua hàng</span></span>
                        </div>
                    </div>

                    {/* Review Card 2 */}
                    <div className="review-card">
                        <div className="review-card-header">
                            <div className="stars small">
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined outline">star_border</span>
                            </div>
                            <span className="review-date">1 tuần trước</span>
                        </div>
                        <h3 className="review-title">Form hơi ôm một chút</h3>
                        <p className="review-content">"Thiết kế đẹp và rất nhẹ. Bàn chân tôi khá bè nên lúc đầu hơi chật, nhưng giày đã giãn ra vừa vặn sau khi chạy được vài dặm."</p>
                        <div className="review-author">
                            <div className="author-avatar">MK</div>
                            <span className="author-name">Michael K. <span className="verified">Đã mua hàng</span></span>
                        </div>
                    </div>

                    {/* Review Card 3 */}
                    <div className="review-card highlight-card">
                        <div className="review-card-header">
                            <div className="stars small">
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                                <span className="material-symbols-outlined filled">star</span>
                            </div>
                            <span className="review-date">1 tháng trước</span>
                        </div>
                        <h3 className="review-title">Đôi giày mang hằng ngày của tôi</h3>
                        <p className="review-content">"Tôi là người sưu tập sneaker và đôi này lập tức trở thành mục yêu thích của tôi. Thẩm mỹ tối giản nên phối với đồ nào cũng hợp. Rất đáng mua."</p>
                        <div className="review-author">
                            <div className="author-avatar">AS</div>
                            <span className="author-name">Alex S. <span className="verified">Đã mua hàng</span></span>
                        </div>
                    </div>
                </div>
                <div className="reviews-footer">
                    <button className="link-btn">Xem tất cả đánh giá</button>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="related-section">
                <h2 className="section-title mb-large">Sản phẩm liên quan</h2>

                <div className="product-grid">
                    {relatedProductsData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;