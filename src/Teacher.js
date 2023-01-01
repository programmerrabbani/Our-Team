// import NewYear from "./NewYear";
import photo from "./sir.jpg";
import Team from "./Team";

function Teacher(params) {
  return (
    <div className="team">
      <div className="box">
        <b></b>
        <img src={photo} alt="" />
        <div className="content">
          <h2>Asraful Haq</h2>
          <br />
          <ul className="sci">
            <li>
              <a href="#">
                <i class="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <NewYear /> */}
      <Team />
    </div>
  );
}

export default Teacher;
