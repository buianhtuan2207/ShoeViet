import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
    // 1. State quản lý thông tin giao hàng
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        province: '',
        district: '',
        ward: '',
        address: '',
        note: ''
    });

    // 2. State quản lý phương thức thanh toán
    const [paymentMethod, setPaymentMethod] = useState('cod');

    // Hàm xử lý thay đổi input
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Hàm xử lý khi nhấn Hoàn tất
    const handleCompletePurchase = () => {
        // Kiểm tra nhanh các trường bắt buộc
        if (!formData.fullName || !formData.phone || !formData.address) {
            alert("Vui lòng điền đầy đủ thông tin giao hàng!");
            return;
        }

        const orderData = {
            customer: formData,
            payment: paymentMethod,
            total: 400.00,
            date: new Date().toISOString()
        };

        console.log("Đơn hàng đã sẵn sàng gửi lên Server:", orderData);
        alert(`Chúc mừng ${formData.fullName}! Đơn hàng của bạn đã được đặt thành công.`);
    };

    return (
        <main className="checkout-main">
            <h1 className="checkout-title">Thanh toán</h1>

            <div className="checkout-grid">
                {/* Cột trái: Thông tin Form */}
                <div className="left-column">
                    <section className="form-section">
                        <h2 className="section-title">Thông tin giao hàng</h2>
                        <form className="shipping-form">
                            <div className="input-group">
                                <label htmlFor="fullName">Họ và tên</label>
                                <input
                                    type="text" id="fullName"
                                    placeholder="Nguyễn Văn A"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    type="tel" id="phone"
                                    placeholder="+84 900 000 000"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="grid-3-col">
                                <div className="input-group">
                                    <label htmlFor="province">Tỉnh / Thành phố</label>
                                    <div className="select-wrapper">
                                        <select id="province" defaultValue="" onChange={handleInputChange}>
                                            <option value="" disabled>Chọn Tỉnh/Thành</option>
                                            <option value="hcm">Hồ Chí Minh</option>
                                            <option value="hn">Hà Nội</option>
                                            <option value="dn">Đà Nẵng</option>
                                        </select>
                                        <span className="material-symbols-outlined dropdown-icon">expand_more</span>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="district">Quận / Huyện</label>
                                    <div className="select-wrapper">
                                        <select id="district" defaultValue="" onChange={handleInputChange}>
                                            <option value="" disabled>Chọn Quận/Huyện</option>
                                            <option value="q1">Quận 1</option>
                                            <option value="q2">Quận 2</option>
                                            <option value="q3">Quận 3</option>
                                        </select>
                                        <span className="material-symbols-outlined dropdown-icon">expand_more</span>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="ward">Phường / Xã</label>
                                    <div className="select-wrapper">
                                        <select id="ward" defaultValue="" onChange={handleInputChange}>
                                            <option value="" disabled>Chọn Phường/Xã</option>
                                            <option value="pbn">Phường Bến Nghé</option>
                                            <option value="pda">Phường Đa Kao</option>
                                        </select>
                                        <span className="material-symbols-outlined dropdown-icon">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="address">Địa chỉ chi tiết</label>
                                <input type="text" id="address" placeholder="Số nhà, tên đường..." onChange={handleInputChange} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="note">Ghi chú đơn hàng</label>
                                <textarea id="note" rows="3" placeholder="Lời nhắn cho shipper..." onChange={handleInputChange}></textarea>
                            </div>
                        </form>
                    </section>

                    <section className="form-section">
                        <h2 className="section-title">Phương thức thanh toán</h2>
                        <div className="payment-options">
                            <label className={`payment-label ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                <input
                                    type="radio" name="payment"
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                />
                                <div className="payment-info">
                                    <span>Thanh toán khi nhận hàng (COD)</span>
                                    <span className="material-symbols-outlined">local_shipping</span>
                                </div>
                            </label>

                            <label className={`payment-label ${paymentMethod === 'vnpay' ? 'active' : ''}`}>
                                <input
                                    type="radio" name="payment"
                                    checked={paymentMethod === 'vnpay'}
                                    onChange={() => setPaymentMethod('vnpay')}
                                />
                                <div className="payment-info">
                                    <span>Thanh toán qua VNPay</span>
                                    <span className="material-symbols-outlined">account_balance</span>
                                </div>
                            </label>
                        </div>
                    </section>
                </div>

                {/* Cột phải: Tóm tắt đơn hàng */}
                <aside className="right-column">
                    <div className="summary-sticky">
                        <h2 className="summary-title">Tóm tắt đơn hàng</h2>

                        <div className="items-preview">
                            <div className="preview-item">
                                <div className="img-box">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUojDYP7_JQ7RJQ5txb9AIxRXlzW-tG4ZvXFBHVSkSrrb6OSZ7efqxxqjLN3BDU_b3JO-VqWjEik2yjSRLlpIVL2FXZ5WM7b6D4FFWLggmYB68sbmDeliqi90dy_CB4mUil-KFYa9568oFeCl34EdWqR1JNBl1x6Cgo41MbEp4Kd10xp_AF4TjiMLGKubXO5MPqk5ar31fbLIR-rxXmzsccBSwQCMu-BmEQXmAWOe3ILtZnB43u7AlHoxw40RuCwFLfEozZsBnZjU" alt="Giày" />
                                </div>
                                <div className="item-text">
                                    <h4>Velocity Runner Pro</h4>
                                    <p>Size: M 10 | Màu: Crimson</p>
                                    <div className="price-row">
                                        <span>SL: 1</span>
                                        <span className="price">$180.00</span>
                                    </div>
                                </div>
                            </div>
                            {/* Thêm các sản phẩm khác tương tự ở đây */}
                        </div>

                        <div className="total-lines">
                            <div className="line"><span>Tạm tính</span><span>$400.00</span></div>
                            <div className="line"><span>Vận chuyển</span><span className="free">Miễn phí</span></div>
                            <div className="line total"><span>Tổng cộng</span><span>$400.00</span></div>
                        </div>

                        <button className="btn-complete" onClick={handleCompletePurchase}>
                            <span className="material-symbols-outlined">shopping_bag</span>
                            Hoàn tất đặt hàng
                        </button>
                        <p className="terms-text">Bằng việc hoàn tất, bạn đồng ý với Điều khoản dịch vụ.</p>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default Checkout;