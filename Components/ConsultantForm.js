export default function ConsultantForm(props) {
  const category = props.category;
  return (
    <div className="form">
      <div className="title">
        <h2>برای مشاوره {category} این فرم رو پر کنید</h2>
      </div>
      <form>
        <div className="inputs name">
          <label>نام</label>
          <input type="text" required placeholder="نام و نام خانوادگی" />
        </div>
        <div className="inputs phone">
          <label>شماره تماس</label>
          <input type="tel" required placeholder="+۹۸" />
        </div>
        <div className="inputs dexcription">
          <textarea placeholder="اگر اطلاعاتی دوست داری اینجا بنویس" />
        </div>
        <div className="terms">
          <input type="checkbox" required />
          <p>
          شرایط و مقررات را خوانده ام و با آن موافقت میکنم
          </p>
        </div>
        <div className="buttons">
          <button type="submit">ارسال</button>
        </div>
      </form>
    </div>
  );
}
