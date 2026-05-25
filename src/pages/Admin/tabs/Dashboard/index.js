import React from 'react';
import styles from './Dashboard.module.scss';

const summaryData = [
    {
        title: 'Tổng doanh thu',
        value: '2.450M',
        subtext: 'So với tháng trước',
        icon: 'payments',
        iconTheme: 'primary',
        trend: '+12.5%',
        trendType: 'positive',
        trendIcon: 'trending_up',
    },
    {
        title: 'Tổng đơn hàng',
        value: '1,284',
        subtext: 'Đơn hàng đã hoàn tất',
        icon: 'local_shipping',
        iconTheme: 'secondary',
        trend: '+8.2%',
        trendType: 'positive',
        trendIcon: 'trending_up',
    },
    {
        title: 'Khách hàng mới',
        value: '312',
        subtext: 'Đăng ký trong 30 ngày qua',
        icon: 'person_add',
        iconTheme: 'tertiary',
        trend: '+5.4%',
        trendType: 'positive',
        trendIcon: 'trending_up',
    },
    {
        title: 'Chiến dịch đang chạy',
        value: '04',
        subtext: 'Chương trình khuyến mãi',
        icon: 'bolt',
        iconTheme: 'error',
        trend: 'Đang chạy',
        trendType: 'neutral',
        trendIcon: '',
    },
];

const mockChartBars = [
    { height: '40%', tooltip: '12M', theme: '' },
    { height: '60%', tooltip: '', theme: '' },
    { height: '55%', tooltip: '', theme: '' },
    { height: '85%', tooltip: '', theme: '' },
    { height: '45%', tooltip: '', theme: '' },
    { height: '70%', tooltip: '', theme: 'darker' },
    { height: '95%', tooltip: '', theme: '' },
    { height: '65%', tooltip: '', theme: 'darkest' },
    { height: '40%', tooltip: '', theme: '' },
    { height: '80%', tooltip: '', theme: '' },
    { height: '100%', tooltip: '', theme: 'darker' },
    { height: '50%', tooltip: '', theme: '' },
];

const topProducts = [
    { name: 'Nike Air Max Pro', sales: '248 đơn hàng', price: '3.200k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKgybPXptGV62BX3Q4m6KL2HCqGsxywkhPWV13r2HiGfnIGPs_BhOxYWu8wIuH9WEDwTSwJo9v4foIA1qGTVZTvQ0T_M_yXqMkNSa-Vfytw_YZfD8j9SJfQ0F2qLlJYi125Y75hUcg7ful0KI-tNrismwkeM666OYSndV1_eUWs_XTIdChvu62vXZ-ZLII_HgqJDK2ymv9rPvSRVBKgHlnXVR8u-m5tXuQGcRGEqL_bTVbB6LbazxI0FCJct4maFGNlc1nns8V7ls' },
    { name: 'Adidas Forum Low', sales: '192 đơn hàng', price: '2.850k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu_kW5Vx9wjn3V3H5PHVY_AhmlXZtBbbgdjmM2PSBunkaDurrHzBXjwR0sy5KpF-3m0I37QgEnD-tJZv8hO8r1DeztR1y9ELFH9mqYdgZEIZkaBjudSTEmujGG-YqIN6ItE9bX2OlvnZFr_i-TRhEiu7F3hje0JQ02Chf8JrmC1QWPOn6FVasSn0Ro0A-Qk8j4fJqAi9n2R6-JOqzHXluQyFnWaLxIVdQXDEDeacFybCPnVuWJLaSyTNZiZdcr2bxs4qvHAIKKFb8' },
    { name: 'Jordan 1 Retro High', sales: '156 đơn hàng', price: '5.500k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFHQkmFRwEG5GDF71sfYv2JMkItGVQx-P-RhMj6y-_p_JeihtBXu-i3mXrDijsfomZodUf3hc9iJ2L18A2TiVl3XEGfRjQ5r80XqJNmxVpHeWKDyzjnsuadbxIb2Yi7v4Q9glfCjrbUiK5J6uw0MEPiZu9DAXJQgL2D-q-NYwF0nIbLXBwk6nxKkqA0-eofMWKEMfZH8TgPBZCIdIvj4-0rFen5_WmNuKqyAKNeQXUKcw2jkwG1P_a5a5HdTkRJecgbeo-P0xxpKo' },
    { name: 'Vans Old Skool Classic', sales: '124 đơn hàng', price: '1.450k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvX0Ej2GllDCtNLWHnfqPtoCRMxbyi_XGPf13G_MHZJwDs9_DgfJ6GoXhuV0hVMyyIj8FFj_R7B6TCqUAWr-lUlXrELf9q-4I5TC5Pez_HWPDKIIAz8IR2bYLK-meQHQE2-JP9aSnovLmU7ISnX0rtNbL1TDMySoJFqUCCYPgbx6ClyJMVpucSvw1oubS4-6FJoLO5x6e4sfuHN_SrILzCy4XQO5Is_amDMUg77e2XR5_MgoBY9K2NeHkQiXONHEyFQlRU6YG3gFY' },
];

const recentOrders = [
    { id: '#SL-9832', customer: 'Nguyễn Văn An', product: 'Nike Air Max Pro (x1)', date: '02/11/2023', amount: '3.200.000đ', status: 'Đã giao hàng', statusTheme: 'delivered' },
    { id: '#SL-9831', customer: 'Trần Thị Bình', product: 'Adidas Forum Low (x1)', date: '02/11/2023', amount: '2.850.000đ', status: 'Đang xử lý', statusTheme: 'processing' },
    { id: '#SL-9830', customer: 'Lê Hoàng Nam', product: 'Jordan 1 Retro (x1)', date: '01/11/2023', amount: '5.500.000đ', status: 'Chờ thanh toán', statusTheme: 'pending' },
    { id: '#SL-9829', customer: 'Phạm Minh Đức', product: 'Vans Old Skool (x2)', date: '01/11/2023', amount: '2.900.000đ', status: 'Đã giao hàng', statusTheme: 'delivered' },
    { id: '#SL-9828', customer: 'Hoàng Thu Trang', product: 'Nike Air Max Pro (x1)', date: '31/10/2023', amount: '3.200.000đ', status: 'Đã hủy', statusTheme: 'cancelled' },
];

function Dashboard() {
    return (
        <main className={styles.main}>

            {/* Summary Cards Grid */}
            <div className={styles.summaryGrid}>
                {summaryData.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconWrapper} ${styles[card.iconTheme]}`}>
                                <span className="material-symbols-outlined">{card.icon}</span>
                            </div>
                            <span className={`${styles.trendInfo} ${styles[card.trendType]}`}>
                {card.trend}
                                {card.trendIcon && (
                                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    {card.trendIcon}
                  </span>
                                )}
              </span>
                        </div>
                        <p className={styles.cardLabel}>{card.title}</p>
                        <h3 className={styles.cardValue}>{card.value}</h3>
                        <p className={styles.cardSubtext}>{card.subtext}</p>
                    </div>
                ))}
            </div>

            {/* Charts and Secondary Data Section */}
            <div className={styles.middleGrid}>

                {/* Revenue Chart */}
                <div className={styles.chartSection}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <h4 className={styles.sectionTitle}>Xu hướng Doanh thu</h4>
                            <p className={styles.sectionSubtitle}>Thống kê chi tiết trong 30 ngày gần nhất</p>
                        </div>
                        <select className={styles.selectInput} defaultValue="30 ngày qua">
                            <option value="30">30 ngày qua</option>
                            <option value="7">7 ngày qua</option>
                            <option value="year">Năm nay</option>
                        </select>
                    </div>

                    <div className={styles.chartVisual}>
                        {mockChartBars.map((bar, index) => (
                            <div
                                key={index}
                                className={`${styles.barGroup} ${bar.theme ? styles[bar.theme] : ''}`}
                                style={{ height: bar.height }}
                            >
                                {bar.tooltip && <div className={styles.tooltip}>{bar.tooltip}</div>}
                            </div>
                        ))}
                    </div>

                    <div className={styles.chartLabels}>
                        <span>1 Thg 10</span>
                        <span>10 Thg 10</span>
                        <span>20 Thg 10</span>
                        <span>30 Thg 10</span>
                    </div>
                </div>

                {/* Top Selling Products */}
                <div className={styles.topProductsSection}>
                    <div className={styles.sectionHeader} style={{ marginBottom: '24px' }}>
                        <h4 className={styles.sectionTitle}>Sản phẩm bán chạy</h4>
                        <button className={styles.headerLink}>Xem tất cả</button>
                    </div>

                    <div className={styles.productList}>
                        {topProducts.map((product, index) => (
                            <div key={index} className={styles.productItem}>
                                <div className={styles.imgWrapper}>
                                    <img src={product.img} alt={product.name} className={styles.productImg} />
                                </div>
                                <div className={styles.productInfo}>
                                    <p className={styles.productName}>{product.name}</p>
                                    <p className={styles.productSales}>{product.sales}</p>
                                </div>
                                <p className={styles.productPrice}>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                    <div>
                        <h4 className={styles.sectionTitle}>Đơn hàng gần đây</h4>
                        <p className={styles.sectionSubtitle}>Cập nhật lúc 10:30 AM hôm nay</p>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button className={styles.btnSecondary}>Xuất file CSV</button>
                        <button className={styles.btnPrimary}>Tạo đơn mới</button>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th className={styles.th}>Mã đơn hàng</th>
                            <th className={styles.th}>Khách hàng</th>
                            <th className={styles.th}>Sản phẩm</th>
                            <th className={styles.th}>Ngày đặt</th>
                            <th className={styles.th}>Số tiền</th>
                            <th className={styles.th}>Trạng thái</th>
                            <th className={`${styles.th} ${styles.alignRight}`}>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentOrders.map((order, index) => (
                            <tr key={index} className={styles.tr}>
                                <td className={`${styles.td} ${styles.bold}`}>{order.id}</td>
                                <td className={styles.td}>{order.customer}</td>
                                <td className={styles.td}>{order.product}</td>
                                <td className={styles.td}>{order.date}</td>
                                <td className={`${styles.td} ${styles.bold}`}>{order.amount}</td>
                                <td className={styles.td}>
                    <span className={`${styles.badge} ${styles[order.statusTheme]}`}>
                      {order.status}
                    </span>
                                </td>
                                <td className={`${styles.td} ${styles.alignRight}`}>
                                    <button className={styles.actionBtn}>
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <p className={styles.pageInfo}>Hiển thị 5 trên tổng số 1,284 đơn hàng</p>
                    <div className={styles.pageButtons}>
                        <button className={styles.pageBtn} disabled>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                        </button>
                        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                        <button className={styles.pageBtn}>2</button>
                        <button className={styles.pageBtn}>3</button>
                        <button className={styles.pageBtn}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Dashboard;