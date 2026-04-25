import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import './Home.css';

const BRANDS = ['NIKE', 'ADIDAS', 'NEW BALANCE', 'ASICS', 'SALOMON'];

const CATEGORIES = [
    {
        id: 1,
        title: 'Chạy Bộ',
        subtitle: 'Kỹ thuật chuẩn xác kết hợp thẩm mỹ đường phố.',
        img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?q=80&w=800&auto=format&fit=crop',
        isLarge: true,
    },
    {
        id: 2,
        title: 'Thời Trang',
        img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop',
        isLarge: false,
    },
    {
        id: 3,
        title: 'Bóng Rổ',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
        isLarge: false,
    },
];

const LATEST_PRODUCTS = [
    { id: 1, category: 'Chạy Bộ', name: 'Velocity Pro', price: '$150', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop' },
    { id: 2, category: 'Thời Trang', name: 'City Drift', price: '$135', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'Tập Luyện', name: 'Nova Flex', price: '$145', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'Thời Trang', name: 'Element Retro', price: '$120', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop' },
];

const TECH_FEATURES = [
    { icon: 'speed', title: 'Thân Giày Aero-Mesh', desc: 'Thoáng khí tối đa mà vẫn giữ được sự hỗ trợ ôm sát chân hoàn hảo.' },
    { icon: 'water_drop', title: 'Lõi Hydro-Shield', desc: 'Lớp chống chịu thời tiết giúp bạn thoải mái di chuyển trong mọi điều kiện.' },
];

const CategoryCard = ({ data }) => {
    const { title, subtitle, img, isLarge } = data;
    return (
        <div className={`category-card ${isLarge ? 'category-card-large' : ''}`}>
            <img src={img} alt={title} className="category-img" />
            <div className="category-overlay">
                {isLarge ? (
                    <>
                        <h3 className="category-title-large">{title}</h3>
                        <p className="category-subtitle">{subtitle}</p>
                    </>
                ) : (
                    <h3 className="category-title-small">{title}</h3>
                )}
            </div>
        </div>
    );
};

function Home() {
    return (
        <div className="home-wrapper">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-bg-layer">
                    {/* Ảnh nền banner Hero */}
                    <img alt="Hero background" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop" className="hero-bg-img" />
                    <div className="hero-bg-gradient"></div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Thiết Kế Dành Cho<br />Hiệu Suất.
                    </h1>
                    <p className="hero-desc">
                        Khám phá đỉnh cao của thẩm mỹ thành thị. Bộ sưu tập Apex V2 mới đã ra mắt, định nghĩa lại mọi giới hạn trên đường phố.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary">
                            <span className="btn-text">Mua ngay</span>
                            <div className="btn-primary-hover"></div>
                        </button>
                        <button className="btn-secondary">
                            <span className="btn-text">Khám phá</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* BRANDS SECTION */}
            <section className="brands-section">
                <div className="container center-text">
                    <h2 className="section-subtitle">Được Tin Dùng Bởi Các Biểu Tượng Toàn Cầu</h2>
                    <div className="brands-list">
                        {BRANDS.map((brand, index) => (
                            <span key={index} className="brand-item">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Danh Mục Giày</h2>
                            <p className="section-desc">Khám phá các bộ sưu tập giày chuyên dụng của chúng tôi.</p>
                        </div>
                        <Link to="/categories" className="view-all-link">Xem Tất Cả</Link>
                    </div>
                    <div className="categories-grid">
                        {CATEGORIES.map(category => (
                            <CategoryCard key={category.id} data={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* LATEST PRODUCTS SECTION */}
            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Sản phẩm mới nhất</h2>
                            <p className="section-desc">Tuyển chọn kỹ lưỡng những mẫu giày mới nhất từ chúng tôi.</p>
                        </div>
                        <Link to="/products" className="view-all-link">Xem Tất Cả</Link>
                    </div>
                    <div className="products-grid">
                        {LATEST_PRODUCTS.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY SECTION */}
            <section className="tech-section">
                <div className="container">
                    <div className="tech-grid">
                        <div className="tech-content">
                            <span className="section-subtitle block-subtitle">Đổi Mới</span>
                            <h2 className="section-title tech-title">Công Nghệ Không Trọng Lực.</h2>
                            <p className="section-desc tech-desc">
                                Lớp đệm đế giữa độc quyền của chúng tôi mang lại khả năng hoàn trả năng lượng chưa từng có mà vẫn duy trì tính ổn định của cấu trúc. Được thiết kế trong phòng thí nghiệm, kiểm chứng trên đường phố.
                            </p>

                            <div className="tech-features-list">
                                {TECH_FEATURES.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            <span className="material-symbols-outlined feature-icon">{feature.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="feature-title">{feature.title}</h4>
                                            <p className="feature-desc">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tech-visual">
                            <div className="tech-visual-bg"></div>
                            {/* Ảnh Zoom cận cảnh chất liệu giày */}
                            <img alt="Công nghệ giày" src="https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1000&auto=format&fit=crop" className="tech-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;