import React from 'react';
import styles from './CouponManagement.module.scss';

// Cấu trúc dữ liệu danh sách mã khuyến mãi
const couponsData = [
    {
        id: 1,
        code: 'SNEAKER2024',
        description: 'Ưu đãi chào năm mới',
        type: 'Phần trăm (%)',
        valueDisplay: '15%',
        iconType: 'percentage',
        iconName: 'confirmation_number',
        startDate: '01/01/2024',
        endDate: 'Đến 31/01/2024',
        usedCount: 450,
        totalLimit: 500,
        limitType: 'finite',
        progressPercentage: 90,
        progressTheme: 'primary',
        statusText: 'Đang chạy',
        statusClass: 'running'
    },
    {
        id: 2,
        code: 'WELCOME50K',
        description: 'Khách hàng mới',
        type: 'Cố định (₫)',
        valueDisplay: '50,000 ₫',
        iconType: 'fixed',
        iconName: 'attach_money',
        startDate: '15/12/2023',
        endDate: 'Không thời hạn',
        usedCount: 1200,
        totalLimit: '∞',
        limitType: 'infinite',
        progressPercentage: 60,
        progressTheme: 'secondary',
        statusText: 'Đang chạy',
        statusClass: 'running'
    },
    {
        id: 3,
        code: 'BFCM2023',
        description: 'Black Friday 2023',
        type: 'Phần trăm (%)',
        valueDisplay: '30%',
        iconType: 'history',
        iconName: 'history',
        startDate: '20/11/2023',
        endDate: 'Đã kết thúc',
        usedCount: 1000,
        totalLimit: 1000,
        limitType: 'finite',
        progressPercentage: 100,
        progressTheme: 'muted',
        statusText: 'Đã kết thúc',
        statusClass: 'ended',
        isRowMuted: true
    }
];

// Cấu trúc dữ liệu biểu đồ cột hiệu suất 7 ngày qua
const chartColumnsData = [
    { label: 'T2', height: '40%', value: '120' },
    { label: 'T3', height: '55%', value: '185' },
    { label: 'T4', height: '45%', value: '140' },
    { label: 'T5', height: '85%', value: '312' },
    { label: 'T6', height: '95%', value: '420' },
    { label: 'T7', height: '100%', value: '500+', isPeak: true },
    { label: 'CN', height: '70%', value: '240' }
];

// Cấu trúc dữ liệu nhật ký hoạt động gần đây
const recentActivities = [
    { id: 1, text: 'Mã <span>FLASH20</span> vừa được tạo bởi Admin.', time: '10 phút trước', dotTheme: 'emerald' },
    { id: 2, text: 'Mã <span>SNEAKER2024</span> đạt 90% giới hạn.', time: '1 giờ trước', dotTheme: 'indigo' },
    { id: 3, text: 'Vô hiệu hóa mã <span>SALE_OFF</span>.', time: '3 giờ trước', dotTheme: 'rose' }
];

function CouponManagement() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>

                {/* Page Header Section */}
                <div className={styles.headerSection}>
                    <div>
                        <h3 className={styles.pageTitle}>Quản lý mã giảm giá</h3>
                        <p className={styles.pageSubtitle}>Thiết lập và theo dõi các chương trình khuyến mãi của hệ thống.</p>
                    </div>
                    <button className={styles.addBtn}>
                        <span className="material-symbols-outlined">add</span>
                        <span className={styles.addBtnLabel}>Tạo mã giảm giá mới</span>
                    </button>
                </div>

                {/* Stats Overview Section (Asymmetric Layout) */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
              <span className={`${styles.statIconWrapper} ${styles.secondary}`}>
                <span className="material-symbols-outlined">local_activity</span>
              </span>
                            <span className={`${styles.trendTag} ${styles.positive}`}>
                +12% <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
              </span>
                        </div>
                        <div className={styles.statCardContent}>
                            <p className={styles.statLabel}>Đang hoạt động</p>
                            <h4 className={styles.statValue}>24</h4>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
              <span className={`${styles.statIconWrapper} ${styles.primary}`}>
                <span className="material-symbols-outlined">redeem</span>
              </span>
                            <span className={`${styles.trendTag} ${styles.positive}`}>
                +5.4% <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
              </span>
                        </div>
                        <div className={styles.statCardContent}>
                            <p className={styles.statLabel}>Tổng lượt sử dụng</p>
                            <h4 className={styles.statValue}>1,284</h4>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
              <span className={`${styles.statIconWrapper} ${styles.tertiary}`}>
                <span className="material-symbols-outlined">savings</span>
              </span>
                            <span className={`${styles.trendTag} ${styles.neutral}`}>Tháng này</span>
                        </div>
                        <div className={styles.statCardContent}>
                            <p className={styles.statLabel}>Tiết kiệm cho khách</p>
                            <h4 className={styles.statValue}>
                                45.2M <span className={styles.currencyUnit}>₫</span>
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className={styles.filtersBar}>
                    <div className={styles.filterTabs}>
                        <button className={`${styles.tabBtn} ${styles.active}`}>Tất cả</button>
                        <button className={styles.tabBtn}>Đang chạy</button>
                        <button className={styles.tabBtn}>Đã kết thúc</button>
                        <button className={styles.tabBtn}>Bản nháp</button>
                    </div>
                    <div className={styles.actionButtonGroup}>
                        <button className={styles.utilBtn}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
                            Bộ lọc
                        </button>
                        <button className={styles.utilBtn}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>file_download</span>
                            Xuất file
                        </button>
                    </div>
                </div>

                {/* Coupon Data Table Container */}
                <div className={styles.tableCard}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th className={styles.th}>Mã / Tên</th>
                                <th className={styles.th}>Loại</th>
                                <th className={styles.th}>Giá trị</th>
                                <th className={styles.th}>Thời gian</th>
                                <th className={styles.th}>Sử dụng</th>
                                <th className={styles.th}>Trạng thái</th>
                                <th className={`${styles.th} ${styles.textRight}`}>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {couponsData.map((coupon) => (
                                <tr
                                    key={coupon.id}
                                    className={`${styles.tr} ${coupon.isRowMuted ? styles.pastEventRow : ''}`}
                                >
                                    <td className={styles.td}>
                                        <div className={styles.couponMetaWrapper}>
                                            <div className={`${styles.couponIcon} ${styles[coupon.iconType]}`}>
                                                <span className="material-symbols-outlined">{coupon.iconName}</span>
                                            </div>
                                            <div>
                                                <p className={styles.couponCodeName}>{coupon.code}</p>
                                                <p className={styles.couponSubtitle}>{coupon.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.couponTypeCell}>{coupon.type}</span>
                                    </td>
                                    <td className={styles.td}>
                      <span className={`${styles.valueHighlight} ${coupon.id === 1 ? styles.primaryColor : coupon.isRowMuted ? styles.mutedColor : styles.normalColor}`}>
                        {coupon.valueDisplay}
                      </span>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.timeCellLayout}>
                                            <span className={styles.primaryTime}>{coupon.startDate}</span>
                                            <span className={styles.secondaryTime}>{coupon.endDate}</span>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.progressContainer}>
                                            <div className={styles.progressLabelText}>
                                                <span className={styles.usedCount}>{coupon.usedCount}</span>
                                                <span className={styles.totalLimit}>/ {coupon.totalLimit}</span>
                                            </div>
                                            <div className={styles.progressBarTrack}>
                                                <div
                                                    className={`${styles.progressBarFill} ${styles[coupon.progressTheme]}`}
                                                    style={{ width: `${coupon.progressPercentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                      <span className={`${styles.statusBadge} ${styles[coupon.statusClass]}`}>
                        {coupon.statusText}
                      </span>
                                    </td>
                                    <td className={`${styles.td} ${styles.textRight}`}>
                                        <div className={styles.actionsWrapper}>
                                            <button className={styles.actionBtn} title="Xem chi tiết">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                                            </button>
                                            {coupon.statusClass === 'ended' ? (
                                                <button className={styles.actionBtn} title="Nhân bản">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>content_copy</span>
                                                </button>
                                            ) : (
                                                <>
                                                    <button className={styles.actionBtn} title="Sửa">
                                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                                                    </button>
                                                    <button className={`${styles.actionBtn} ${styles.blockBtn}`} title="Vô hiệu hóa">
                                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>block</span>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className={styles.pagination}>
                        <p className={styles.paginationText}>Hiển thị 1-10 của 48 mã</p>
                        <div className={styles.paginationControls}>
                            <button className={styles.pageBtn} disabled>
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                            <button className={styles.pageBtn}>2</button>
                            <button className={styles.pageBtn}>3</button>
                            <span className={styles.ellipsis}>...</span>
                            <button className={styles.pageBtn}>5</button>
                            <button className={styles.pageBtn}>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Promotion Visualization Section (Professional Bento Style) */}
                <div className={styles.bentoSectionGrid}>
                    {/* Đồ thị hiệu năng sử dụng bên trái */}
                    <div className={styles.bentoLeftChart}>
                        <h5 className={styles.chartTitle}>
                            <span className={`material-symbols-outlined ${styles.chartTitleIcon}`}>insights</span>
                            Hiệu quả sử dụng mã (7 ngày qua)
                        </h5>

                        <div className={styles.chartCanvasMock}>
                            <div className={styles.chartGridLines}>
                                <div className={styles.gridLine}></div>
                                <div className={styles.gridLine}></div>
                                <div className={styles.gridLine}></div>
                            </div>

                            {chartColumnsData.map((col, idx) => (
                                <div key={idx} className={styles.chartColumnGroup}>
                                    <div className={styles.columnBarWrapper}>
                                        <div
                                            className={`${styles.columnBar} ${col.isPeak ? styles.peakBar : ''}`}
                                            style={{ height: col.height }}
                                        >
                                            <div className={styles.chartTooltip}>{col.value}</div>
                                        </div>
                                    </div>
                                    <span className={styles.axisLabel}>{col.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cột thông tin phụ bên phải */}
                    <div className={styles.bentoRightStack}>
                        <div className={styles.tipBannerCard}>
                            <span className={`${styles.bgDecorativeIcon} material-symbols-outlined`}>auto_awesome</span>
                            <h6 className={styles.tipLabel}>Mẹo quản trị</h6>
                            <p className={styles.tipHeadline}>Sử dụng mã cố định cho khách hàng quay lại để tăng tỷ lệ chuyển đổi thêm 15%.</p>
                            <a className={styles.tipLink} href="#learn-more">
                                Tìm hiểu thêm
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                            </a>
                        </div>

                        <div className={styles.recentActivitiesCard}>
                            <h6 className={styles.activitiesTitle}>Hoạt động gần đây</h6>
                            <ul className={styles.activityList}>
                                {recentActivities.map((activity) => (
                                    <li key={activity.id} className={styles.activityItem}>
                                        <div className={`${styles.activityIndicatorDot} ${styles[activity.dotTheme]}`}></div>
                                        <div className={styles.activityContentBox}>
                                            <p
                                                className={styles.activityText}
                                                dangerouslySetInnerHTML={{ __html: activity.text }}
                                            />
                                            <span className={styles.activityTime}>{activity.time}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default CouponManagement;