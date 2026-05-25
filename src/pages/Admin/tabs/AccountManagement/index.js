import React from 'react';
import styles from './AccountManagement.module.scss';

const statsOverview = [
    {
        title: 'Tổng tài khoản',
        value: '1,284',
        icon: 'groups',
        theme: 'primary',
        trend: '+12% tháng này',
        trendType: 'positive',
        trendIcon: 'trending_up'
    },
    {
        title: 'Đang hoạt động',
        value: '1,240',
        icon: 'check_circle',
        theme: 'success',
        hasProgress: true,
        progressWidth: '96%'
    },
    {
        title: 'Tài khoản bị khóa',
        value: '44',
        icon: 'block',
        theme: 'error',
        trend: 'Giảm 2% so với tháng trước',
        trendType: 'neutral'
    },
    {
        title: 'Tỉ lệ chuyển đổi',
        value: '68%',
        icon: 'insights',
        theme: 'tertiary',
        trend: 'Trung bình đơn hàng/user',
        trendType: 'neutral'
    }
];

const usersData = [
    {
        id: '#SL-2024-001',
        name: 'Nguyễn Văn Hùng',
        email: 'hung.nv@sneakerlab.vn',
        joinDate: '12/01/2024',
        status: 'Hoạt động',
        statusKey: 'active'
    },
    {
        id: '#SL-2024-042',
        name: 'Trần Thị Minh Anh',
        email: 'minhanh.tt@gmail.com',
        joinDate: '15/02/2024',
        status: 'Hoạt động',
        statusKey: 'active'
    },
    {
        id: '#SL-2023-892',
        name: 'Lê Thành Tâm',
        email: 'tam.le@outlook.com',
        joinDate: '20/12/2023',
        status: 'Bị khóa',
        statusKey: 'blocked'
    },
    {
        id: '#SL-2024-115',
        name: 'Phạm Minh Đức',
        email: 'duc.pm@sneakerlab.vn',
        joinDate: '02/03/2024',
        status: 'Hoạt động',
        statusKey: 'active'
    }
];

function AccountManagement() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>

                {/* Header Section */}
                <div className={styles.headerSection}>
                    <div>
                        <h1 className={styles.pageTitle}>Người dùng hệ thống</h1>
                        <p className={styles.pageSubtitle}>Quản lý phân quyền và trạng thái hoạt động của khách hàng & nhân viên.</p>
                    </div>
                    <button className={styles.addBtn}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
                        Thêm người dùng mới
                    </button>
                </div>

                {/* Stats Overview Grid */}
                <div className={styles.statsGrid}>
                    {statsOverview.map((item, idx) => (
                        <div key={idx} className={styles.statCard}>
                            <div>
                                <div className={styles.statHeader}>
                                    <span className={styles.statTitle}>{item.title}</span>
                                    <span className={`${styles.statIcon} ${styles[item.theme]} material-symbols-outlined`}>
                                        {item.icon}
                                    </span>
                                </div>
                                <p className={styles.statValue}>{item.value}</p>
                            </div>

                            {item.hasProgress ? (
                                <div className={styles.progressContainer}>
                                    <div className={styles.progressBar} style={{ width: item.progressWidth }}></div>
                                </div>
                            ) : (
                                item.trend && (
                                    <p className={`${styles.statTrend} ${styles[item.trendType]}`}>
                                        {item.trendIcon && (
                                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                                                {item.trendIcon}
                                            </span>
                                        )}
                                        {item.trend}
                                    </p>
                                )
                            )}
                        </div>
                    ))}
                </div>

                {/* Filters Bar */}
                <div className={styles.filtersBar}>
                    <div className={styles.searchWrapper}>
                        <span className={`${styles.searchIcon} material-symbols-outlined`}>search</span>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Tìm theo tên, email, ID..."
                        />
                    </div>

                    <select className={styles.selectInput} defaultValue="Tất cả vai trò">
                        <option>Tất cả vai trò</option>
                        <option>Admin</option>
                        <option>Nhân viên</option>
                        <option>Khách hàng</option>
                    </select>

                    <select className={styles.selectInput} defaultValue="Tất cả trạng thái">
                        <option>Tất cả trạng thái</option>
                        <option>Hoạt động</option>
                        <option>Bị khóa</option>
                    </select>

                    <button className={styles.filterBtn}>
                        <span className="material-symbols-outlined">filter_list</span>
                        Lọc nâng cao
                    </button>

                    <button className={styles.exportBtn}>
                        <span className="material-symbols-outlined">download</span>
                        Xuất file
                    </button>
                </div>

                {/* User Table Card */}
                <div className={styles.tableCard}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th className={styles.th}>ID Người dùng</th>
                                <th className={styles.th}>Họ và Tên</th>
                                <th className={styles.th}>Email</th>
                                {/* Đã xóa cột Vai trò tại đây */}
                                <th className={styles.th}>Ngày tham gia</th>
                                <th className={styles.th}>Trạng thái</th>
                                <th className={`${styles.th} ${styles.alignRight}`}>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {usersData.map((user, index) => (
                                <tr key={index} className={styles.tr}>
                                    <td className={`${styles.td} ${styles.mono}`}>{user.id}</td>
                                    <td className={styles.td}>
                                        <div className={styles.userCell}>
                                            {/* Đã xóa phần thẻ img/avatar text, chỉ giữ lại Tên */}
                                            <span className={styles.userName}>{user.name}</span>
                                        </div>
                                    </td>
                                    <td className={`${styles.td} ${styles.subtext}`}>{user.email}</td>
                                    {/* Đã xóa td hiển thị Badge vai trò tại đây */}
                                    <td className={`${styles.td} ${styles.subtext}`}>{user.joinDate}</td>
                                    <td className={styles.td}>
                                            <span className={`${styles.statusBadge} ${styles[user.statusKey]}`}>
                                                <span className={styles.dot}></span>
                                                {user.status}
                                            </span>
                                    </td>
                                    <td className={`${styles.td} ${styles.alignRight}`}>
                                        <div className={styles.actionsWrapper}>
                                            {/* Đã sửa lỗi thiếu ${} ở các dòng dưới */}
                                            <button className={`${styles.actionBtn} ${styles.view}`} title="Xem chi tiết">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                                            </button>
                                            <button className={`${styles.actionBtn} ${styles.edit}`} title="Chỉnh sửa">
                                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                                            </button>

                                            {user.statusKey === 'blocked' ? (
                                                <button className={`${styles.actionBtn} ${styles.unlock}`} title="Mở khóa tài khoản">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock_open</span>
                                                </button>
                                            ) : (
                                                <button className={`${styles.actionBtn} ${styles.lock}`} title="Khóa tài khoản">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>block</span>
                                                </button>
                                            )}
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
                            Hiển thị <strong>1-10</strong> trong số <strong>1,284</strong> người dùng
                        </p>
                        <div className={styles.pageControls}>
                            <button className={`${styles.pageBtn} ${styles.border}`} disabled>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
                            </button>
                            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                            <button className={styles.pageBtn}>2</button>
                            <button className={styles.pageBtn}>3</button>
                            <span className={styles.ellipsis}>...</span>
                            <button className={styles.pageBtn}>128</button>
                            <button className={`${styles.pageBtn} ${styles.border}`}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default AccountManagement;