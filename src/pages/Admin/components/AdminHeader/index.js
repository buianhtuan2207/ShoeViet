import React from 'react';
import styles from './AdminHeader.module.scss';

function AdminHeader({ title = "Bảng điều khiển" }) {
    return (
        <header className={styles.header}>

            {/* Left Section: Tiêu đề và Thanh tìm kiếm */}
            <div className={styles.leftSection}>
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.searchContainer}>
          <span
              className={`material-symbols-outlined ${styles.searchIcon}`}
              data-icon="search"
          >
            search
          </span>
                    <input
                        className={styles.searchInput}
                        placeholder="Tìm kiếm dữ liệu..."
                        type="text"
                    />
                </div>
            </div>

            {/* Right Section: Nút chức năng và Hồ sơ */}
            <div className={styles.rightSection}>
                <button className={styles.iconButton}>
          <span
              className={`material-symbols-outlined ${styles.icon}`}
              data-icon="notifications"
          >
            notifications
          </span>
                    {/* Chấm đỏ thông báo */}
                    <span className={styles.notificationBadge}></span>
                </button>

                <button className={styles.iconButton}>
          <span
              className={`material-symbols-outlined ${styles.icon}`}
              data-icon="settings"
          >
            settings
          </span>
                </button>

                {/* Vạch kẻ phân cách */}
                <div className={styles.divider}></div>

                {/* Thông tin Admin */}
                <div className={styles.profileSection}>
                    <div className={styles.profileInfo}>
                        <p className={styles.profileName}>Admin Lab</p>
                        <p className={styles.profileRole}>Quản trị viên</p>
                    </div>
                    <div className={styles.avatarWrapper}>
                        <img
                            alt="Admin Avatar"
                            className={styles.avatar}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_LqJp3DqKl3W9-mvf9tWiFjb7E-ldd7AQZiG_edm8CvNR-XGb3uFmI4wLcuaY7V0iZyKRZuu3FLoaMUNxV1C2yU3sLQOacFo9l1xARKvwQeQ38zMakFIJ3JLEUDFfejyOktyuk0ntAq8ajt414AzSi6BxIvGT0i2FYbFIobGTjf20MrOlyegJP_kRGFPbe0Umr78T_4L-I6d6scKsWIXNbzEbtm0RZuNboMJ_77ESD32lj12DNUXFh6Qbb4sIxNO3RrXWEJfb4W4"
                        />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default AdminHeader;