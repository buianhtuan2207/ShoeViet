import React from 'react';
import styles from './OrderManagement.module.scss';

// Mảng cấu trúc dữ liệu cho khối Bento Thống kê tổng quan
const statsBentoData = [
    { id: 'pending', label: 'Đang chờ', value: '24', icon: 'pending_actions', trendText: '+12% hôm nay', trendType: 'positive' },
    { id: 'confirmed', label: 'Đã xác nhận', value: '156', icon: 'verified', trendText: 'Đã được duyệt', trendType: 'neutral' },
    { id: 'shipping', label: 'Đang giao', value: '89', icon: 'local_shipping', trendText: 'Vận chuyển nhanh', trendType: 'neutral' },
    { id: 'completed', label: 'Hoàn tất', value: '1,204', icon: 'check_circle', trendText: '+5% tuần này', trendType: 'positive' },
    { id: 'cancelled', label: 'Đã hủy', value: '12', icon: 'cancel', trendText: '-2% so với tháng trước', trendType: 'negative' }
];

// Mảng cấu trúc dữ liệu cho danh sách bảng đơn hàng
const ordersData = [
    {
        id: '#SK-9421',
        customerName: 'Nguyễn Văn An',
        customerEmail: 'an.nguyen@email.com',
        dateTime: '14/10/2023 09:24',
        totalPrice: '2.450.000₫',
        paymentMethod: 'Chuyển khoản',
        statusText: 'Đang chờ',
        statusKey: 'pending',
        isZebra: false
    },
    {
        id: '#SK-9420',
        customerName: 'Trần Thị Mai',
        customerEmail: 'mai.tran@gmail.com',
        dateTime: '13/10/2023 21:15',
        totalPrice: '4.890.000₫',
        paymentMethod: 'COD',
        statusText: 'Đã xác nhận',
        statusKey: 'confirmed',
        isZebra: true
    },
    {
        id: '#SK-9419',
        customerName: 'Lê Hoàng Nam',
        customerEmail: 'nam.lh@outlook.com',
        dateTime: '13/10/2023 18:30',
        totalPrice: '1.200.000₫',
        paymentMethod: 'Ví điện tử',
        statusText: 'Đang giao',
        statusKey: 'shipping',
        isZebra: false
    },
    {
        id: '#SK-9418',
        customerName: 'Phạm Minh Tuấn',
        customerEmail: 'tuantm@company.com',
        dateTime: '13/10/2023 16:02',
        totalPrice: '7.500.000₫',
        paymentMethod: 'Chuyển khoản',
        statusText: 'Hoàn tất',
        statusKey: 'completed',
        isZebra: true
    },
    {
        id: '#SK-9417',
        customerName: 'Đặng Bảo Ngọc',
        customerEmail: 'ngoc.db@domain.vn',
        dateTime: '13/10/2023 14:45',
        totalPrice: '3.150.000₫',
        paymentMethod: 'Ví điện tử',
        statusText: 'Đã hủy',
        statusKey: 'cancelled',
        isZebra: false
    }
];

function OrderManagement() {
    return (
        <main className={styles.main}>

            {/* 2. Page Content */}
            <div className={styles.pageContent}>
                <div className={styles.innerContainer}>

                    {/* Page Title & CTA */}
                    <div className={styles.pageTitleRow}>
                        <div>
                            <h2 className={styles.pageTitle}>Quản lý đơn hàng</h2>
                            <p className={styles.pageSubtitle}>Kiểm soát và xử lý tất cả các giao dịch từ khách hàng.</p>
                        </div>
                        <button className={styles.createOrderBtn}>
                            <span className="material-symbols-outlined">add</span>
                            Tạo đơn hàng mới
                        </button>
                    </div>

                    {/* 3. Stats Bento Grid */}
                    <div className={styles.statsBentoGrid}>
                        {statsBentoData.map((stat) => (
                            <div key={stat.id} className={styles.statCard}>
                                <div className={styles.statCardHeader}>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                    <span className={`material-symbols-outlined ${styles.statIcon} ${styles[stat.id]}`}>
                    {stat.icon}
                  </span>
                                </div>
                                <h3 className={styles.statValue}>{stat.value}</h3>
                                <div className={`${styles.statTrend} ${styles[stat.trendType]}`}>
                                    {stat.trendType === 'positive' && (
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                                    )}
                                    {stat.trendType === 'negative' && (
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_down</span>
                                    )}
                                    {stat.trendText}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 4. Filters and Table Area Container */}
                    <div className={styles.tableContainerCard}>

                        {/* Filters Header */}
                        <div className={styles.filtersHeader}>
                            <div className={styles.filterControlsLeft}>
                                <div className={styles.selectGroupBlock}>
                                    <span className={styles.filterMetaLabel}>Trạng thái:</span>
                                    <select className={styles.selectDropdown} defaultValue="Tất cả trạng thái">
                                        <option>Tất cả trạng thái</option>
                                        <option>Đang chờ</option>
                                        <option>Đã xác nhận</option>
                                        <option>Đang giao</option>
                                        <option>Hoàn tất</option>
                                        <option>Đã hủy</option>
                                    </select>
                                </div>

                                <div className={styles.dateGroupBlock}>
                                    <span className={styles.filterMetaLabel}>Ngày đặt:</span>
                                    <input className={styles.dateInput} type="date" />
                                </div>
                            </div>

                            <div className={styles.filterControlsRight}>
                                <button className={styles.actionUtilBtn}>
                                    <span className="material-symbols-outlined">filter_list</span>
                                    Lọc nâng cao
                                </button>
                                <button className={styles.actionUtilBtn}>
                                    <span className="material-symbols-outlined">download</span>
                                    Xuất báo cáo
                                </button>
                            </div>
                        </div>

                        {/* Table Area */}
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                <tr>
                                    <th className={styles.th}>Mã đơn hàng</th>
                                    <th className={styles.th}>Khách hàng</th>
                                    <th className={styles.th}>Ngày đặt</th>
                                    <th className={styles.th}>Tổng tiền</th>
                                    <th className={styles.th}>Thanh toán</th>
                                    <th className={styles.th}>Trạng thái</th>
                                    <th className={`${styles.th} ${styles.textRight}`}>Thao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ordersData.map((order, idx) => (
                                    <tr key={idx} className={`${styles.tr} ${order.isZebra ? styles.zebraRow : ''}`}>
                                        <td className={`${styles.td} ${styles.orderId}`}>{order.id}</td>
                                        <td className={styles.td}>
                                            <div className={styles.customerBox}>
                                                <span className={styles.customerName}>{order.customerName}</span>
                                                <span className={styles.customerEmail}>{order.customerEmail}</span>
                                            </div>
                                        </td>
                                        <td className={`${styles.td} ${styles.dateTimeText}`}>{order.dateTime}</td>
                                        <td className={`${styles.td} ${styles.totalPrice}`}>{order.totalPrice}</td>
                                        <td className={styles.td}>
                                            <span className={styles.paymentBadge}>{order.paymentMethod}</span>
                                        </td>
                                        <td className={styles.td}>
                        <span className={`${styles.statusBadge} ${styles[order.statusKey]}`}>
                          {order.statusText}
                        </span>
                                        </td>
                                        <td className={`${styles.td} ${styles.textRight}`}>
                                            <div className={styles.rowActions}>
                                                <button className={styles.actionRowBtn} title="Chi tiết">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                                                </button>
                                                <button className={`${styles.actionRowBtn} ${styles.moreBtn}`} title="Thêm">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
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
                            <span className={styles.paginationInfoText}>Hiển thị 1-10 trên 1,485 đơn hàng</span>
                            <div className={styles.paginationControls}>
                                <button className={styles.pageNavBtn} disabled>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className={`${styles.pageNumberBtn} ${styles.active}`}>1</button>
                                <button className={styles.pageNumberBtn}>2</button>
                                <button className={styles.pageNumberBtn}>3</button>
                                <span className={styles.ellipsis}>...</span>
                                <button className={styles.pageNumberBtn}>149</button>
                                <button className={styles.pageNavBtn}>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* 5. Footer Summary Info (Asymmetric Layout element) */}
                    <div className={styles.footerSummaryGrid}>
                        <div className={styles.performanceSummaryBox}>
                            <div className={styles.analyticsIconWrapper}>
                                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>analytics</span>
                            </div>
                            <div className={styles.perfContent}>
                                <h3 className={styles.perfTitle}>Tóm tắt hiệu suất hôm nay</h3>
                                <p className={styles.perfDescription}>
                                    Tỷ lệ chuyển đổi đơn hàng tăng 4.2% so với hôm qua. Thời gian xử lý trung bình hiện tại là 1.2 giờ/đơn.
                                </p>
                                <div className={styles.perfTagsGroup}>
                                    <div className={styles.perfTagItem}>
                                        <div className={`${styles.dotIndicator} ${styles.primary}`}></div>
                                        <span>Đã duyệt: 82%</span>
                                    </div>
                                    <div className={styles.perfTagItem}>
                                        <div className={`${styles.dotIndicator} ${styles.amber}`}></div>
                                        <span>Chờ xử lý: 18%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.alertNotificationCard}>
                            <h3 className={styles.alertCardTitle}>Thông báo mới</h3>
                            <p className={styles.alertCardText}>Có 5 đơn hàng giá trị cao đang chờ xác nhận thủ công.</p>
                            <button className={styles.checkNowBtn}>Kiểm tra ngay</button>
                            <span className={`${styles.bgDecorativeIcon} material-symbols-outlined`}>priority_high</span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default OrderManagement;