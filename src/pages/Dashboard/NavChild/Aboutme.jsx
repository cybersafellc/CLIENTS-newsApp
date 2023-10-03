import { Card, Col, Container, Row } from "react-bootstrap";
const Aboutme = () => {
  return (
    <div className="border p-3 py-5 rounded-0 shadow container-news">
      <Container>
        <Row className="g-3">
          <Col xs="12" className="px-3">
            <span>
              Berikut ini adalah sebuah proyek sederhana yang telah saya
              kembangkan sebagai bagian dari latihan saya dalam mengembangkan
              kemampuan front-end dan back-end. Proyek ini memanfaatkan berbagai
              teknologi modern seperti React JS, Node JS, Bootstrap 5, serta
              berbagai pustaka pendukung lainnya. Dengan proyek ini, saya
              bertujuan untuk memperdalam pemahaman saya tentang pengembangan
              aplikasi web yang komprehensif dan responsif.
              <br />
              <br />
              Penggunaan React JS memberikan kemudahan dalam mengelola
              komponen-komponen UI yang dinamis, sementara Node JS digunakan
              untuk membangun backend yang kuat dan efisien. Bootstrap 5,
              sebagai salah satu kerangka kerja desain yang populer, membantu
              dalam menciptakan antarmuka pengguna yang estetis dan responsif.
              <br />
              <br />
              Selain teknologi utama yang disebutkan di atas, saya juga
              memanfaatkan berbagai pustaka dan perpustakaan lainnya yang
              mendukung proyek ini. Semua ini bertujuan untuk memastikan bahwa
              proyek ini tidak hanya berfungsi dengan baik, tetapi juga
              memberikan pengalaman pengguna yang optimal.
              <br />
              <br />
              Saya sangat senang dan bersemangat untuk terus mengembangkan
              kemampuan saya dalam pengembangan web melalui proyek-proyek
              seperti ini. Mereka tidak hanya memberikan saya peluang untuk
              belajar lebih banyak, tetapi juga memungkinkan saya untuk terus
              berinovasi dan menciptakan solusi yang lebih baik di masa depan.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Aboutme;
