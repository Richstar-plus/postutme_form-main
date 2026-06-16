import image from "../images/image1.jpg";

export function Ads() {
  return (
    <section className="card">
      <div className="ads-container">
        <img src={image} alt="" />
        <div className="ads-text">
          <h3>Admissions 2026/2027</h3>
          <p>Excellence in Learning</p>
        </div>
      </div>
    </section>
  );
}
