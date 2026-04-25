import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav className="header-nav">
            <div className="header-container">

                {/* 1. Logo */}
                <a className="header-logo" href="/">
                    SHOEVIET
                </a>

                {/* 2. Menu Links (Sát cạnh Logo) */}
                <div className="header-links">
                    <a className="nav-link" href="#men">Men</a>
                    <a className="nav-link" href="#women">Women</a>
                    <a className="nav-link" href="#kid">Kid</a>
                    <a className="nav-link" href="#promotion">Promotion</a>
                </div>

                {/* 3. Thanh tìm kiếm (Chiếm trọn không gian giữa) */}
                <div className="search-container">
                    <span className="material-symbols-outlined search-icon">search</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Tìm kiếm..."
                    />
                </div>

                {/* 4. Các nút Icon (Nằm bên phải) */}
                <div className="header-icons">
                    <button className="action-button">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                    <button className="action-button">
                        <span className="material-symbols-outlined">favorite_border</span>
                    </button>
                    <button className="action-button">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Header;