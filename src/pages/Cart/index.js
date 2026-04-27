import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Aero Glide Pro 3",
            color: "Xanh Neon/Trắng",
            size: "US 10",
            price: 185.00,
            quantity: 1,
            image:  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Urban Stealth XT",
            color: "Đỏ Đô/Đen",
            size: "US 9.5",
            price: 160.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Urban Stealth XT",
            color: "Đỏ Đô/Đen",
            size: "US 9.5",
            price: 160.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Urban Stealth XT",
            color: "Đỏ Đô/Đen",
            size: "US 9.5",
            price: 160.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop"
        }
    ]);

    // Hàm tăng giảm số lượng
    const updateQty = (id, change) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        ));
    };

    // Hàm xóa sản phẩm
    const removeItem = (id) => {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?");
        if (isConfirmed) {
            setItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = items.length > 0 ? 25.00 : 0;
    const total = Math.max(0, subtotal - discount);

    return (
        <main className="cart-container">
            <header className="cart-header">
                <h1 className="display-xl">Giỏ hàng</h1>
                <p className="body-lg">Kiểm tra lại các sản phẩm bạn đã chọn trước khi thanh toán.</p>
            </header>

            <div className="cart-grid">
                <section className="cart-items">
                    {items.length > 0 ? items.map((item) => (
                        <article key={item.id} className="cart-item-card">
                            <div className="item-image">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Giay+The+Thao'; }}
                                />
                            </div>

                            <div className="item-details">
                                <div className="item-header">
                                    <div>
                                        <h3 className="item-title">{item.name}</h3>
                                        <p className="item-meta">Màu sắc: {item.color}</p>
                                        <p className="item-meta">Kích cỡ: {item.size}</p>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="remove-btn" aria-label="Xóa sản phẩm">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>

                                <div className="item-footer">
                                    <div className="quantity-control">
                                        <button onClick={() => updateQty(item.id, -1)} className="qty-btn">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <span className="qty-number">{item.quantity}</span>
                                        <button onClick={() => updateQty(item.id, 1)} className="qty-btn">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                    </div>
                                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </article>
                    )) : <p>Giỏ hàng của bạn đang trống.</p>}
                </section>

                <aside className="cart-summary">
                    <div className="summary-card">
                        <h2 className="summary-title">Tóm tắt đơn hàng</h2>
                        <div className="summary-rows">
                            <div className="summary-row">
                                <span>Tạm tính</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Vận chuyển</span>
                                <span className="text-free">Miễn phí</span>
                            </div>
                            <div className="summary-row discount">
                                <span>Giảm giá thành viên</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="summary-total">
                            <span>Tổng cộng</span>
                            <span className="total-amount">${total.toFixed(2)}</span>
                        </div>

                        <Link to="/checkout" className="checkout-btn">
                            Tiến hành thanh toán
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <p className="tax-note">Thuế sẽ được tính toán tại bước thanh toán.</p>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default Cart;