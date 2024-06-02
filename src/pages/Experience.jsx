import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaHelmetSafety } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";



import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
function Experience() {
  return (
    <>
      <Navbar/>
<div className="wrapper">
    <h1>Pengalaman</h1>

    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2017 - 2018"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<FaUniversity />}
  >
    <h3 className="vertical-timeline-element-title">Ketua Badan Eksekutif Mahasiswa (BEM)</h3>
    <h4 className="vertical-timeline-element-subtitle">Fakultas Ilmu Sosial dan Ilmu Politik, Universitas Muhammadiyah Bengkulu</h4>
    <p>
    Sebagai Ketua BEM, saya memimpin organisasi mahasiswa terbesar di kampus dengan tanggung jawab utama sebagai berikut: 
    <li>Mengelola dan mengkoordinasikan berbagai proyek dan acara kampus.
</li>
    <li>Memimpin tim yang terdiri dari berbagai divisi, memastikan kolaborasi yang efektif dan pencapaian tujuan organisasi.
</li>
    <li>Membangun hubungan yang baik dengan pihak internal dan eksternal universitas, termasuk dosen, staf, dan sponsor.
</li>
    <li>Merancang dan melaksanakan strategi untuk meningkatkan partisipasi mahasiswa dalam kegiatan kampus.
</li>

    </p>
      
      
      </VerticalTimelineElement>
   
        
    
      <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2018 - 2021"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<GiHumanPyramid />}
  >
    <h3 className="vertical-timeline-element-title">Pendiri</h3>
    <h4 className="vertical-timeline-element-subtitle">Gerakan Membaca Pintar(GENCAR)</h4>
    <p>
    Sebagai anggota aktif dalam Gerakan Membaca Pintar, saya berkontribusi pada kegiatan yang bertujuan untuk meningkatkan minat baca di kalangan anak-anak dan remaja: 
    <li>Menyusun dan mengimplementasikan program membaca yang menarik dan interaktif.</li>
    <li>Mengorganisir acara-acara literasi seperti klub buku, workshop menulis, dan sesi bercerita.</li>
    <li>Berkolaborasi dengan sekolah-sekolah dan perpustakaan untuk memperluas jangkauan program.</li>
    <li>Menggalang dana dan donasi buku untuk mendukung kegiatan komunitas.</li>

    </p>
      
      
      </VerticalTimelineElement>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2021 - 2023"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<FaHelmetSafety />
    }
  >
    <h3 className="vertical-timeline-element-title">Safety Officer</h3>
    <h4 className="vertical-timeline-element-subtitle">PT. Karya terang Utama</h4>
    <h4 className="vertical-timeline-element-subtitle">PT. AROJA</h4>
    <p>
    Sebagai Safety Officer, saya bertanggung jawab untuk memastikan lingkungan kerja yang aman dan sehat:   
    <li>Mengembangkan dan mengimplementasikan kebijakan dan prosedur keselamatan.</li>
    <li>Melakukan inspeksi rutin untuk mengidentifikasi potensi bahaya dan risiko.</li>
    <li>Menyediakan pelatihan keselamatan untuk karyawan, memastikan kepatuhan terhadap standar keselamatan.</li>
    <li>Menyusun laporan dan dokumentasi terkait insiden dan keselamatan kerja.</li>

    </p>
      
      
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2023 - 2024"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<HiOutlineOfficeBuilding />
  }
  >
    <h3 className="vertical-timeline-element-title">Salesman</h3>
    <h4 className="vertical-timeline-element-subtitle">PT. Tirta Kencana Tatawarna</h4>
    <h4 className="vertical-timeline-element-subtitle">PT. Nipsea Paint and Chemicals</h4>
    <p>
    Sebagai Salesman, saya bertanggung jawab untuk mencapai target penjualan dan membangun hubungan yang baik dengan pelanggan:
    <li>Mengidentifikasi dan mengembangkan peluang penjualan baru.
</li>
    <li>Menyusun strategi penjualan yang efektif untuk meningkatkan volume penjualan.
</li>
    <li>Menyediakan layanan pelanggan yang berkualitas tinggi, menjawab pertanyaan, dan menyelesaikan keluhan.
</li>
    <li>Melakukan analisis pasar untuk mengidentifikasi tren dan kebutuhan pelanggan.
</li>

    </p>
      
      
      </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"

    date="2024 - sekarang"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<FaRobot />
  }
  > 
    <h3 className="vertical-timeline-element-title">Fullstack Javascript Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Purwhadika Digital School</h4>
    <p>
    Saat ini, saya sedang mendalami dasar-dasar pengembangan web dengan fokus pada fullstack JavaScript. Beberapa proyek yang telah saya kerjakan untuk mengasah keterampilan saya meliputi:
    <li>Situs Web Portofolio Pribadi: Sebuah situs web sederhana yang menampilkan informasi tentang diri saya, keterampilan, dan proyek-proyek yang telah saya kerjakan menggunakan HTML, CSS, dan JavaScript.

</li>
    
    </p>
      
      
      </VerticalTimelineElement>


    </VerticalTimeline>



</div>
<Footer/>
<ScrollToTop/>
    </>
  )
}

export default Experience
