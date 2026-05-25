import React, { useState } from 'react';
import styles from './ProductManagement.module.scss';

const productsData = [
    {
        id: 1,
        name: 'Nike Air Max Pre-Day',
        type: 'Giày chạy bộ',
        brand: 'Nike',
        sku: 'NK-MAX-2024',
        stock: 42,
        price: '3,450,000₫',
        status: 'Còn hàng',
        statusKey: 'inStock',
        imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbvkkxa-D18gyoIv73Xr63aDtF6spjRFHDs5k6CryiW4ZdRiZqmIrhuWW2T7E80H_SxJOHujyBUk7lUKSCWaSegufA_1LiY3MZf3ByR2YL9ZFE353LnehaMQnel6vyOaSPVKZw7Li7gNcMVjBzoO_1nbMqywX9igDZQ7n84TdZkihv1KRGkE5xsNFMDdoOzfSTRAqmxGSEgESxLzv2LhjakIvt5XhllOfGl0VlHL92FE0HckhjnEqHGn6OAEfP0SpjiMvrsaaTSY'
    },
    {
        id: 2,
        name: 'Nike Dunk High Pastel',
        type: 'Giày thời trang',
        brand: 'Nike',
        sku: 'NK-DUNK-092',
        stock: 0,
        price: '2,890,000₫',
        status: 'Hết hàng',
        statusKey: 'outOfStock',
        imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsRk26-oyQQ4YiIgskIhE6mSp5mYdl-_PCJuXVT7KhLm36lATt473Ru3vzwNZNBdwDrhU3aqp96neqPS6nCGOabj_drAVUegIMZwjogQPdJgoY-hP858ZXpegDHTuKO3xk-2F9fmq90op7SQYvb-8LO23bS9XNX2Tb2Kweypn9dteAhkTSh0FVEzdUp-NFZVr-bTqOIop0-bEGA2W1l1ctLQGw00vPwr9stpZPFoCOiIk3G09JAxGuVxs6prAa8bwI5sNm28_-0Sk'
    },
    {
        id: 3,
        name: 'Adidas Ultraboost 22',
        type: 'Giày thể thao',
        brand: 'Adidas',
        sku: 'AD-UB-22-NV',
        stock: 115,
        price: '4,200,000₫',
        status: 'Còn hàng',
        statusKey: 'inStock',
        imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgoC63-dXO1_KMrE7RdHTB94sOq_YO1rCtl1KBg3c_qPheXgPvGhx7tP7jTYv9ZP8NbpHCcOT4KI8i_lH_Iq4XgCjjynMKNgqAbPujCF8Cc3S8oJ8QedrAwXLaEPjPuoWscxBXLjYwaTZc94XnlKEWPO9dVRfEE_9dCMRZa5EsDa-5Ni7g7-GwFC5ljX5MZVLhPOr3URirJujp0svckdpfNVh9TwmImln_kg-dCPq6vdrFo-vKx7Vq0NaZ9bWnxcG0rsK6eGPnrkM'
    },
    {
        id: 4,
        name: 'Jordan 1 Retro High',
        type: 'Bóng rổ',
        brand: 'Jordan',
        sku: 'JD-1-RET-01',
        stock: 12,
        price: '12,500,000₫',
        status: 'Còn hàng',
        statusKey: 'inStock',
        imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK1Vsf3rrKn0sFHGtvv1FCh_N2JDSjDOsaEAZwlj4lY16e5vT2xICMVeQPwSDsocCKiL5pj4zNJIJReX-pn2ph-h9OKXoVd2VHv1fpZprYSYhpTU4Vp1kdufG5Z_-xL7V_P0IxMKNlhfzy1x8IuXaogDugTsDYR5-CGTq6TYZrGOEuO6YSGHcEp6u2_c_ti85t9ozhAEh3KTTpSkg4AEbsZ5Y5MLA3O_7zNmUpaV0G0FukS4OkZdYoO0MCg19bI2RrJaZO9qwfatk'
    }
];

const statsBentoData = [
    {
        label: 'Tổng sản phẩm',
        value: '1,284',
        icon: 'package_2',
        themeClass: 'primaryCard',
        iconTheme: 'primary',
        trendText: '+12%',
        trendClass: 'positive',
        trendIcon: 'trending_up'
    },
    {
        label: 'Sắp hết hàng',
        value: '18',
        icon: 'running_with_errors',
        themeClass: 'errorCard',
        iconTheme: 'error',
        trendText: 'Cần nhập',
        trendClass: 'warning',
        trendIcon: 'warning'
    },
    {
        label: 'Tỷ lệ xoay vòng',
        value: '4.2x',
        icon: 'avg_pace',
        themeClass: 'primaryCard',
        iconTheme: 'secondary',
        trendText: 'Chu kỳ: 30 ngày',
        trendClass: 'neutral'
    }
];

function ProductManagement() {
    // State quản lý trạng thái ẩn/hiện của Popup Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hàm xử lý khi gửi form (Submit)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Xử lý thêm logic thêm sản phẩm ở đây (gọi API...)
        alert('Gửi thông tin sản phẩm thành công!');
        setIsModalOpen(false); // Đóng modal sau khi hoàn tất
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>

                {/* Page Header Section */}
                <div className={styles.headerSection}>
                    <div>
                        <h2 className={styles.pageTitle}>Quản lý sản phẩm</h2>
                        <p className={styles.pageSubtitle}>Danh sách tất cả giày và phụ kiện hiện có trong hệ thống.</p>
                    </div>
                    <button className={styles.addBtn} onClick={() => setIsModalOpen(true)}>
                        <span className="material-symbols-outlined">add</span>
                        Thêm sản phẩm mới
                    </button>
                </div>

                {/* Contextual Stats Cards (Bento Style) */}
                <div className={styles.statsGrid}>
                    {statsBentoData.map((card, idx) => (
                        <div key={idx} className={`${styles.statCard} ${styles[card.themeClass]}`}>
                            <div className={styles.statCardHeader}>
                                <div className={`${styles.statIconWrapper} ${styles[card.iconTheme]}`}>
                                    <span className="material-symbols-outlined">{card.icon}</span>
                                </div>
                                <span className={`${styles.trendTag} ${styles[card.trendClass]}`}>
                                    {card.trendIcon && <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{card.trendIcon}</span>}
                                    {card.trendText}
                                </span>
                            </div>
                            <p className={styles.statLabel}>{card.label}</p>
                            <h3 className={styles.statValue}>{card.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Filters Section */}
                <div className={styles.filtersBar}>
                    <div className={styles.selectWrapper}>
                        <span className={`${styles.filterIcon} material-symbols-outlined`}>category</span>
                        <select className={styles.selectInput} defaultValue="Tất cả danh mục">
                            <option>Tất cả danh mục</option>
                            <option>Sneakers</option>
                            <option>Running</option>
                            <option>Basketball</option>
                            <option>Casual</option>
                        </select>
                    </div>

                    <div className={styles.selectWrapper}>
                        <span className={`${styles.filterIcon} material-symbols-outlined`}>brand_family</span>
                        <select className={styles.selectInput} defaultValue="Tất cả thương hiệu">
                            <option>Tất cả thương hiệu</option>
                            <option>Nike</option>
                            <option>Adidas</option>
                            <option>Jordan</option>
                            <option>Yeezy</option>
                        </select>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.sortGroup}>
                        <span className={styles.sortLabel}>Sắp xếp:</span>
                        <button className={styles.sortBtn}>Mới nhất</button>
                    </div>

                    <button className={styles.advancedFilterBtn}>
                        <span className="material-symbols-outlined">filter_list</span>
                        Lọc nâng cao
                    </button>
                </div>

                {/* Product Table Area */}
                <div className={styles.tableCard}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th className={styles.th}>Hình ảnh</th>
                                <th className={styles.th}>Sản phẩm</th>
                                <th className={styles.th}>SKU</th>
                                <th className={`${styles.th} ${styles.textCenter}`}>Tồn kho</th>
                                <th className={styles.th}>Giá bán</th>
                                <th className={styles.th}>Trạng thái</th>
                                <th className={`${styles.th} ${styles.textRight}`}>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                            {productsData.map((product) => (
                                <tr key={product.id} className={styles.tr}>
                                    <td className={styles.td}>
                                        <div className={styles.imgCellWrapper}>
                                            <img
                                                src={product.imgUrl}
                                                alt={product.name}
                                                className={styles.productImg}
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <p className={styles.productName}>{product.name}</p>
                                        <p className={styles.productMeta}>{product.type} • {product.brand}</p>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.skuBadge}>{product.sku}</span>
                                    </td>
                                    <td className={`${styles.td} ${styles.textCenter}`}>
                                        <p className={`${styles.stockCount} ${product.stock === 0 ? styles.outOfStock : ''}`}>
                                            {product.stock}
                                        </p>
                                        <p className={styles.stockUnit}>Chiếc</p>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.priceText}>{product.price}</span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={`${styles.statusBadge} ${styles[product.statusKey]}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className={`${styles.td} ${styles.textRight}`}>
                                        <div className={styles.actionsWrapper}>
                                            <button className={styles.actionBtn} title="Cập nhật kho">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>inventory</span>
                                            </button>
                                            <button className={styles.actionBtn} title="Chỉnh sửa">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                                            </button>
                                            <button className={`${styles.actionBtn} ${styles.deleteBtn}`} title="Xóa">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Footer */}
                    <div className={styles.pagination}>
                        <p className={styles.pageText}>
                            Hiển thị <span>1 - 10</span> trong số <span>245</span> sản phẩm
                        </p>
                        <div className={styles.pageControls}>
                            <button className={styles.pageBtn} disabled>
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                            <button className={styles.pageBtn}>2</button>
                            <button className={styles.pageBtn}>3</button>
                            <span className={styles.ellipsis}>...</span>
                            <button className={styles.pageBtn}>25</button>
                            <button className={styles.pageBtn}>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* POPUP MODAL SECTION */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                        {/* Modal Header */}
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Thêm sản phẩm mới</h3>
                            <button className={styles.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Form Content */}
                        <form onSubmit={handleFormSubmit}>
                            <div className={styles.modalBody}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Tên sản phẩm *</label>
                                    <input type="text" className={styles.formInput} placeholder="Ví dụ: Nike Air Force 1" required />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Danh mục *</label>
                                        <select className={styles.formSelect} required>
                                            <option value="">Chọn danh mục</option>
                                            <option value="Sneakers">Giày thời trang (Sneakers)</option>
                                            <option value="Running">Giày chạy bộ</option>
                                            <option value="Basketball">Giày bóng rổ</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Thương hiệu *</label>
                                        <select className={styles.formSelect} required>
                                            <option value="">Chọn thương hiệu</option>
                                            <option value="Nike">Nike</option>
                                            <option value="Adidas">Adidas</option>
                                            <option value="Jordan">Jordan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Mã sản phẩm (SKU) *</label>
                                        <input type="text" className={styles.formInput} placeholder="NK-AF1-001" required />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Số lượng tồn kho *</label>
                                        <input type="number" min="0" className={styles.formInput} placeholder="0" required />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Giá bán (₫) *</label>
                                        <input type="text" className={styles.formInput} placeholder="3,500,000" required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Đường dẫn hình ảnh (URL)</label>
                                    <input type="url" className={styles.formInput} placeholder="https://example.com/image.png" />
                                </div>
                            </div>

                            {/* Modal Footer Actions */}
                            <div className={styles.modalFooter}>
                                <button type="button" className={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>
                                    Hủy bỏ
                                </button>
                                <button type="submit" className={styles.submitBtn}>
                                    Xác nhận lưu
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </main>
    );
}

export default ProductManagement;