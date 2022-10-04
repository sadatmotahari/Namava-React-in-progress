import "./style.css";
export default function Header(){
    return(
        <div className="container">
            <div className="main-header">
                <div className="container-content">
                    <div className="header">
                        <div className="right-header">
                <h1>نماوا</h1>
                <ul className="list">
                    <li>خانه</li>
                    <li>فیلم‌ها</li>
                    <li>سریال‌ها</li>
                    <li>دسته‌بندی</li>
                    <li>تازه‌ها</li>
                    <li>کودکان</li>
                    <li>نماوامگ</li>
                </ul>
                        </div>
                        <div className="left-header">
                <span>خرید اشتراک</span>
                <button className="log-in">ورود / ثبت نام</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}