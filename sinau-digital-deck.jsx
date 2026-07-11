import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  X,
  ExternalLink,
} from "lucide-react";
import logoImg from "./src/assets/logo.png";
import slide1Img from "./src/assets/slide_1.jpg";
import slide2Img from "./src/assets/slide_2.jpg";
import slide3Img from "./src/assets/slide_3.jpg";
import slide4_1Img from "./src/assets/slide_4_1.jpg";
import slide4_2Img from "./src/assets/slide_4_2.jpg";
import slide4_3Img from "./src/assets/slide_4_3.jpg";
import slide5Img from "./src/assets/slide_5.jpg";
import slide6Img from "./src/assets/slide_6.jpg";
import slide7Img from "./src/assets/slide_7.png";
import slide8Img from "./src/assets/slide_8.jpg";
import slide9Img from "./src/assets/slide_9.jpg";
import slide10Img from "./src/assets/slide_10.jpg";
import slide11Img from "./src/assets/slide_11.JPG";

// ---------------------------------------------------------------------------
// Canva-style Light Mode Accents
// ---------------------------------------------------------------------------
const ACCENTS = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border border-blue-200",
    dot: "bg-blue-600",
    gradientTitle: "from-blue-700 via-indigo-700 to-sky-600",
    blob: "bg-blue-200",
  },
  purple: {
    badge: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    dot: "bg-indigo-600",
    gradientTitle: "from-indigo-700 via-purple-700 to-pink-600",
    blob: "bg-purple-200",
  },
  pink: {
    badge: "bg-rose-50 text-rose-700 border border-rose-200",
    dot: "bg-rose-600",
    gradientTitle: "from-rose-700 via-pink-600 to-orange-600",
    blob: "bg-rose-200",
  },
  orange: {
    badge: "bg-amber-50 text-amber-800 border border-amber-200",
    dot: "bg-amber-600",
    gradientTitle: "from-amber-700 via-orange-600 to-red-600",
    blob: "bg-amber-200",
  },
  gold: {
    badge: "bg-yellow-50 text-yellow-800 border border-yellow-200",
    dot: "bg-amber-600",
    gradientTitle: "from-amber-700 via-yellow-600 to-orange-600",
    blob: "bg-yellow-200",
  },
};

const SLIDES = [
  // 1. HALAMAN JUDUL
  {
    tag: "Program Kerja KKN",
    accent: "blue",
    layout: "cover",
    title: "Sinau Digital: Kenalan Sama AI, Asisten Pintar Pelajar Masa Depan",
    subtitle: "Kuliah Kerja Nyata (KKN) — Literasi Digital untuk Pelajar SMP & SMA",
    points: [
      "Mengenal teknologi Kecerdasan Buatan (AI) dengan cara seru & mudah dipahami",
      "Panduan praktis memanfaatkan AI sebagai asisten belajar sehari-hari",
      "Menumbuhkan etika, kejujuran, dan cara berpikir kritis di era digital",
    ],
    image: slide1Img,
    imageAlt: "Ilustrasi utama Sinau Digital KKN",
    notes: `Selamat pagi/siang adik-adik SMP dan SMA serta bapak/ibu sekalian! Perkenalkan kami dari tim KKN. Hari ini kita akan belajar bersama lewat program 'Sinau Digital: Kenalan Sama AI, Asisten Pintar Pelajar Masa Depan'. Kita akan belajar dengan bahasa sehari-hari yang mudah dipahami serta penuh dengan contoh seru!`,
  },
  // 2. FENOMENA SEHARI-HARI
  {
    tag: "",
    accent: "blue",
    layout: "split",
    title: "Kenapa Video di HP Kamu Bisa Pas Sesuai Kesukaanmu?",
    subtitle: "Sistem AI di balik media sosial yang kamu tonton setiap hari",
    points: [
      "Setiap kali kamu menonton video atau media sosial, sistem pintar diam-diam mempelajari hal yang kamu sukai",
      "Itulah contoh kerja AI (Kecerdasan Buatan) yang sudah menempel di HP kita dari bangun sampai tidur",
      "Rekomendasi lagu yang cocok, terjemahan otomatis, hingga filter kamera — semuanya dibantu oleh AI",
    ],
    image: slide2Img,
    imageAlt: "Rekomendasi video pintar di HP",
    notes: `Adik-adik, coba perhatikan HP kalian saat menonton video pendek. Kenapa ya tontonannya bisa pas banget sama hobi kita? Misalnya yang suka bola muncul bola, yang suka musik muncul musik. Itu bukan kebetulan, tapi kerja sistem pintar bernama AI yang mempelajari kebiasaan kita sehari-hari.`,
  },
  // 3. APA ITU AI
  {
    tag: "Mengenal AI",
    accent: "purple",
    layout: "split",
    title: "AI: Asisten Pintar Pelajar, Bukan Robot Menakutkan",
    subtitle: "Memahami konsep Kecerdasan Buatan dalam kehidupan nyata",
    points: [
      "AI (Kecerdasan Buatan) adalah program komputer yang dirancang untuk belajar dan membantu pekerjaan manusia",
      "Bukan robot jahat di film fiksi, melainkan asisten digital yang siap membantu menjawab pertanyaanmu",
      "Siap membantu belajar kapan saja 24 jam, sabar, dan tidak pernah lelah",
    ],
    image: slide3Img,
    imageAlt: "Perbandingan AI robot vs asisten belajar",
    notes: `Jadi apa sebenarnya AI itu? AI adalah kepanjangan dari Artificial Intelligence atau Kecerdasan Buatan. Bayangkan AI ini seperti asisten pribadi di dalam komputer atau HP yang pintar dan sangat sabar membantu kita belajar materi sekolah kapan pun kita butuh.`,
  },
  // 4. JENIS-JENIS AI (3 Gambar)
  {
    tag: "Kemampuan AI",
    accent: "blue",
    layout: "split-multi",
    title: "3 Kemampuan Utama AI Masa Kini",
    subtitle: "Tiga cara AI membantu aktivitas kita sehari-hari",
    points: [
      "Menebak Kesukaan (Prediksi): Menyarankan lagu atau video edukasi yang cocok untukmu",
      "Mengenali Gambar & Wajah (Klasifikasi): Membuka kunci HP dengan wajah atau menyaring pesan penipuan",
      "Membuat Karya Baru (Generatif): Membantu merangkum pelajaran, membuat puisi, gambar, hingga musik",
    ],
    multiImages: [
      { src: slide4_1Img, label: "1. Prediksi" },
      { src: slide4_2Img, label: "2. Klasifikasi" },
      { src: slide4_3Img, label: "3. Generatif" },
    ],
    notes: `Ada 3 kemampuan utama AI yang paling sering kita temui. Pertama, menebak kesukaan kita. Kedua, mengenali wajah atau memilah pesan palsu. Dan ketiga yang paling seru: AI Generatif yang bisa membuat rangkuman teks, gambar, atau ide kreatif dari nol.`,
  },
  // 5. TIPS BELAJAR
  {
    tag: "Asisten Belajar",
    accent: "purple",
    layout: "split",
    title: "AI Sebagai Teman Belajar yang Paling Sabar",
    subtitle: "Cara cerdas memanfaatkan AI untuk pelajaran sekolah",
    points: [
      "Materi sekolah terasa sulit? Minta AI menjelaskannya dengan kalimat sederhana yang mudah dipahami",
      "Butuh contoh soal latihan? AI bisa membuatkan latihan soal matematika atau IPA dalam beberapa detik",
      "Belajar jadi lebih menyenangkan, paham lebih cepat, dan tugas sekolah lebih rapi",
    ],
    image: slide5Img,
    imageAlt: "Tips belajar dengan AI",
    notes: `Buat adik-adik SMP dan SMA, ini manfaat terbesarnya. Kalau ada pelajaran yang rumit, kamu bisa minta AI menjelaskannya dengan contoh sehari-hari. Kamu juga bisa minta latihan soal sebelum ujian agar semakin paham.`,
  },
  // 6. LIVE DEMO
  {
    tag: "Praktik Langsung",
    accent: "pink",
    layout: "split",
    title: "Mari Kita Coba Praktik Langsung!",
    subtitle: "Melihat langsung contoh pemanfaatan AI untuk tugas sekolah",
    points: [
      "Membuat Ringkasan Pelajaran: Mengubah teks materi atau bab buku yang panjang menjadi poin-poin ringkas yang mudah dimengerti",
      "Penjelasan Konsep & Rumus: Meminta penjelasan materi rumit dengan contoh analogi sederhana dalam hitungan detik",
      "Eksplorasi Ide Kreatif: Membantu merancang ide proyek sekolah, puisi, hingga kerangka karangan dengan cepat",
    ],
    image: slide6Img,
    imageAlt: "Praktik prompt AI interaktif",
    notes: `Belajar tidak lengkap kalau tidak kita coba langsung. Ayo, adik-adik siapa yang mau menyumbang ide pertanyaan atau perintah untuk AI? Kita coba ketik bersama-sama dan lihat hasil jawaban AI!`,
  },
  // 7. PERINGATAN / HALU
  {
    tag: "Perlu Diperhatikan",
    accent: "orange",
    layout: "split",
    title: "Hati-Hati, AI Kadang Bisa Salah Jawab!",
    subtitle: "Memahami batas kemampuan AI dan pentingnya cek fakta",
    points: [
      "AI bisa menjawab dengan sangat yakin padahal jawabannya keliru (disebut keliru atau salah informasi)",
      "Jangan langsung disalin mentah-mentah, selalu baca dan periksa kebenarannya di buku pelajaran",
      "Ingat: AI adalah alat bantu, bukan satu-satunya sumber kebenaran mutlak",
    ],
    image: slide7Img,
    imageAlt: "Pentingnya cek fakta dan membaca buku",
    notes: `Tapi ingat ya adik-adik, AI itu bukan dukun atau guru yang selalu benar 100%. Kadang AI bisa keliru atau salah informasi. Jadi setiap dapat jawaban dari AI, wajib kita baca lagi dan cocokkan dengan buku sekolah kita.`,
  },
  // 8. ETIKA & KEJUJURAN
  {
    tag: "Etika & Kejujuran",
    accent: "orange",
    layout: "split",
    title: "Belajar Bersama AI vs Menyontek Menggunakan AI",
    subtitle: "Menumbuhkan kejujuran akademik dan kewaspadaan digital",
    points: [
      "Belajar Benar: Menggunakan AI untuk memahami konsep dan mencari contoh. Menyontek: Menyalin tugas tanpa dibaca",
      "Waspada berita bohong (hoax) dan foto/video palsu buatan AI yang semakin mirip aslinya",
      "Jadilah pelajar cerdas: Selalu periksa fakta sebelum mempercayai atau membagikan berita",
    ],
    image: slide8Img,
    imageAlt: "Etika belajar dan kejujuran digital",
    notes: `Bagian ini sangat penting untuk masa depan kalian. Gunakan AI untuk membantu paham pelajaran, bukan untuk menyalin tugas sekolah tanpa dibaca. Selain itu, hati-hati terhadap berita palsu atau foto edit AI di media sosial.`,
  },
  // 9. LIVE GAME (Dengan tautan Game Gemini AI)
  {
    tag: "",
    accent: "pink",
    layout: "image-only",
    title: "",
    points: [],
    image: slide9Img,
    imageAlt: "Permainan sensor gerakan tangan AI",
    link: "https://gemini.google.com/share/55e63fde91fd",
    linkText: "Buka Game Gemini AI →",
    notes: `Sekarang waktunya kita bermain! Kita akan mencoba teknologi AI yang membaca gerakan tangan lewat kamera. Siapa adik-adik yang mau mencoba bermain di depan?`,
  },
  // 10. KAHOOT TIME
  {
    tag: "Kuis Berhadiah",
    accent: "gold",
    layout: "split",
    title: "Waktunya Kuis Interaktif Sinau Digital!",
    subtitle: "Ayo uji pemahamanmu dan rebut hadiah spesial dari Tim KKN",
    points: [],
    image: slide10Img,
    imageAlt: "Kuis interaktif berhadiah KKN",
    notes: `Sebagai akhir sesi seru kita, mari kita ikuti kuis singkat tentang materi AI yang baru saja kita pelajari. Siapkan diri kalian, karena ada hadiah menarik untuk para pemenang!`,
  },
  // 11. KESIMPULAN & PENUTUP
  {
    tag: "Kesimpulan & Penutup",
    accent: "gold",
    layout: "cover",
    title: "Jadilah Pelajar Desa Masa Depan yang Cerdas & Bijak Digital!",
    subtitle: "Tiga pesan utama untuk kesuksesan belajar di era teknologi",
    points: [
      "AI adalah Teman & Asisten Belajar — manfaatkan untuk memperluas wawasan dan berkarya",
      "Utamakan Kejujuran — jadikan AI alat bantu memahami pelajaran, bukan alat untuk malas berpikir",
      "Berpikir Kritis & Cek Fakta — selalu saring informasi sebelum percaya dan membagikan kabar",
    ],
    image: slide11Img,
    imageAlt: "Penutup dan kesimpulan Sinau Digital KKN",
    notes: `Kesimpulan dari pertemuan kita hari ini: AI adalah teknologi luar biasa yang siap membantu adik-adik berprestasi. Gunakanlah dengan jujur, bijak, dan tetap kritis. Terima kasih banyak atas antusiasme adik-adik SMP/SMA dan seluruh hadirin. Semoga ilmu hari ini bermanfaat untuk masa depan kita semua!`,
  },
];

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function SinauDigitalDeck() {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGridModal, setShowGridModal] = useState(false);

  const total = SLIDES.length;
  const slide = SLIDES[index];
  const accent = ACCENTS[slide.accent] || ACCENTS.blue;

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "g") {
        e.preventDefault();
        setShowGridModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, toggleFullscreen]);

  return (
    // FULLSCREEN RESPONSIVE TANPA SCROLL VERTICAL DI LAYAR UTAMA
    <div className="w-full h-screen max-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Decorative Light Mode Canva Blobs */}
      <div
        className={`absolute -top-32 -left-32 w-[450px] h-[450px] ${accent.blob} rounded-full opacity-35 blur-3xl pointer-events-none transition-colors duration-700`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-[450px] h-[450px] ${accent.blob} rounded-full opacity-35 blur-3xl pointer-events-none transition-colors duration-700`}
      />

      {/* Top Header Bar: MURNI LOGO BESAR TANPA BORDER SEBAGAI IDENTITAS */}
      <header className="relative z-20 w-full flex-shrink-0 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-2 sm:py-3 flex items-center justify-between shadow-2xs">
        {/* Kiri: Logo KKN Murni Beserta Identitas Program */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={logoImg}
            alt="Logo KKN Sinau Digital"
            className="h-11 sm:h-14 w-auto object-contain flex-shrink-0 select-none"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight">
                SINAU DIGITAL
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                PROGRAM KERJA KKN
              </span>
            </div>
            <span className="text-xs font-medium text-slate-500 hidden md:block">
              Kenalan Sama AI, Asisten Pintar Pelajar Masa Depan
            </span>
          </div>
        </div>

        {/* Kanan: Presenter Toolbar & Progress */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowGridModal(true)}
            title="Semua Slide [G]"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Semua Slide [G]</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title="Layar Penuh [F]"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">Layar Penuh</span>
          </button>

          <div className="text-slate-700 font-bold text-xs px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
            {pad(index + 1)} / {pad(total)}
          </div>
        </div>
      </header>

      {/* Progress Bar under header */}
      <div className="w-full h-1 bg-slate-200 flex-shrink-0 relative z-20">
        <div
          className={`h-full bg-gradient-to-r ${accent.gradientTitle} transition-all duration-500`}
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* MAIN FULLSCREEN CANVA SLIDE CANVAS */}
      <main className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 sm:px-10 lg:px-16 py-3 sm:py-4 overflow-hidden">
        <div className="w-full max-w-7xl h-full flex flex-col justify-center">
          {/* Tag badge (jika ada) */}
          {slide.tag && (
            <div className="mb-2 sm:mb-3 flex-shrink-0">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${accent.badge}`}
              >
                <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                {slide.tag}
              </span>
            </div>
          )}

          {/* LAYOUT IMAGE-ONLY (Slide 9: Hanya sisakan gambarnya di tengah halaman beserta tombol link game) */}
          {slide.layout === "image-only" ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              {slide.link ? (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Klik gambar untuk membuka Game Gemini AI"
                  className="inline-flex max-w-full max-h-[65vh] rounded-3xl bg-white border border-slate-200 shadow-xl p-2.5 sm:p-3 hover:shadow-2xl hover:border-pink-300 transition-all group"
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt || "Visual Slide"}
                    className="max-h-[58vh] w-auto max-w-full object-contain rounded-2xl block group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </a>
              ) : (
                <div className="inline-flex max-w-full max-h-[75vh] rounded-3xl bg-white border border-slate-200 shadow-xl p-2.5 sm:p-3">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt || "Visual Slide"}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl block"
                  />
                </div>
              )}

              {slide.link && (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>{slide.linkText || "Buka Game Gemini AI →"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ) : slide.layout === "cover" ? (
            /* LAYOUT COVER (Slide 1 & 11) */
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full max-h-full">
              {/* Kiri Cover: Judul & Poin */}
              <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
                <h1
                  className={`${
                    slide.points && slide.points.length > 0
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-3xl sm:text-4xl lg:text-5xl"
                  } font-extrabold tracking-tight bg-gradient-to-r ${accent.gradientTitle} bg-clip-text text-transparent leading-tight`}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p
                    className={`${
                      slide.points && slide.points.length > 0
                        ? "text-sm sm:text-base"
                        : "text-base sm:text-lg"
                    } text-slate-600 font-semibold leading-relaxed`}
                  >
                    {slide.subtitle}
                  </p>
                )}

                {slide.points && slide.points.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    {slide.points.map((p, i) => (
                      <div
                        key={i}
                        className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {slide.link && (
                  <div className="pt-2">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>{slide.linkText || "Buka Tautan →"}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Kanan Cover: Gambar Asli dengan Pembungkus Pas */}
              <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
                <div className="inline-flex max-w-full max-h-[380px] lg:max-h-[420px] rounded-3xl bg-white border border-slate-200 shadow-xl p-2 sm:p-2.5">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt || slide.title}
                    className="max-h-[360px] lg:max-h-[390px] w-auto max-w-full object-contain rounded-2xl block"
                  />
                </div>
              </div>
            </div>
          ) : slide.layout === "split-multi" ? (
            /* LAYOUT SPLIT DENGAN 3 GAMBAR (Slide 4) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full max-h-full">
              {/* Kolom Kiri: Judul & Poin */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${accent.gradientTitle} bg-clip-text text-transparent leading-tight`}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-sm sm:text-base text-slate-600 font-semibold">
                    {slide.subtitle}
                  </p>
                )}

                {slide.points && slide.points.length > 0 && (
                  <ul className="space-y-3">
                    {slide.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-800 text-sm sm:text-base font-medium leading-relaxed"
                      >
                        <span
                          className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${accent.dot}`}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Kolom Kanan: 3 Kartu Gambar Pilar AI */}
              <div className="lg:col-span-7 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full">
                  {slide.multiImages.map((mImg, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white border border-slate-200 rounded-2xl p-2 shadow-md flex flex-col items-center"
                    >
                      <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center mb-2">
                        <img
                          src={mImg.src}
                          alt={mImg.label}
                          className="max-h-full max-w-full object-contain block"
                        />
                      </div>
                      <div className="text-center font-bold text-xs text-slate-800 py-1">
                        {mImg.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* LAYOUT SPLIT WIDESCREEN STANDAR (Slide 2, 3, 5, 6, 7, 8, 10) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full max-h-full">
              {/* Kolom Kiri: Judul & Poin Materi */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-center">
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${accent.gradientTitle} bg-clip-text text-transparent leading-tight`}
                >
                  {slide.title}
                </h1>

                {slide.subtitle && (
                  <p className="text-sm sm:text-base text-slate-600 font-semibold">
                    {slide.subtitle}
                  </p>
                )}

                {slide.points && slide.points.length > 0 && (
                  <ul className="space-y-3 sm:space-y-3.5">
                    {slide.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-800 text-sm sm:text-base font-medium leading-relaxed"
                      >
                        <span
                          className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${accent.dot}`}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.link && (
                  <div className="pt-2">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>{slide.linkText || "Buka Tautan →"}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Kolom Kanan: Gambar Asli dengan Pembungkus Pas */}
              <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
                <div className="inline-flex max-w-full max-h-[380px] lg:max-h-[420px] rounded-3xl bg-white border border-slate-200 shadow-xl p-2 sm:p-2.5">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt || slide.title}
                    className="max-h-[360px] lg:max-h-[390px] w-auto max-w-full object-contain rounded-2xl block"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Footer Navigation Bar */}
      <footer className="relative z-20 w-full flex-shrink-0 px-4 sm:px-10 py-2.5 sm:py-3 bg-white/80 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-between shadow-2xs">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? `w-7 ${ACCENTS[s.accent]?.dot || "bg-blue-600"}`
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={index === total - 1}
          className="flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm shadow-blue-600/20"
        >
          <span>Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

      {/* Grid Modal for Quick Jump */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
                <LayoutGrid className="w-5 h-5 text-blue-600" />
                <span>Semua Slide Presentasi ({SLIDES.length} Slide)</span>
              </h2>
              <button
                onClick={() => setShowGridModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SLIDES.map((s, i) => {
                const sAccent = ACCENTS[s.accent] || ACCENTS.blue;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setIndex(i);
                      setShowGridModal(false);
                    }}
                    className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      i === index
                        ? "border-blue-600 bg-blue-50/60 ring-2 ring-blue-500 shadow-md"
                        : "border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${sAccent.badge}`}>
                          {i + 1}. {s.tag || "Fenomena"}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-800 line-clamp-2 mt-1">
                        {s.title}
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 mt-3 font-semibold">
                      Klik untuk buka slide →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
