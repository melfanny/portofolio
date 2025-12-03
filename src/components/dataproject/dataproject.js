export const CATEGORY_NAMES = {
  "webdev": "Web Development",
  "game": "Game Development",
  "computer vision": "Computer Vision",
  "appdev": "App Development"
};

export const PROJECT_DATA = [
  {
    title: "Etreese - E-commerce Fashion Lokal",
    desc: "Platform e-commerce fashion lokal dengan misi pelestarian flora Nusantara. Sistem ini memiliki dua hak akses utama: Halaman User untuk pengalaman belanja interaktif & edukasi tanaman, serta Dashboard Admin untuk pengelolaan produk, stok, dan manajemen pesanan (CRUD). Aplikasi ini dibangun secara handal menggunakan framework Laravel & PostgreSQL, lengkap dengan fitur filter, keranjang, dan simulasi checkout.",
    image: [
      "/img/Etreese/Etreese1.jpeg", 
      "/img/Etreese/Etreese2.jpeg",
      "/img/Etreese/Etreese3.jpeg",
      "/img/Etreese/Etreese4.jpeg"   
    ], 
    category: "webdev",
    tech: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
    ],
    type: "repo",
    link: "https://github.com/melfanny/Etreese2",
  },
  {
    title: "PIMPAN - Forum Gamers Online",
    desc: "Pimpan adalah platform web untuk komunitas gamers yang memungkinkan pengguna berbagi informasi seputar game melalui postingan bergambar, berdiskusi lewat komentar, serta memberi penilaian dengan fitur like dan dislike. Platform ini juga mendukung pengelolaan akun yang aman, termasuk mengganti nama dan kata sandi kapan saja.",
    image: [
      "/img/Pimpan/pimpan1.jpeg", 
      "/img/Pimpan/pimpan2.jpeg",
      "/img/Pimpan/pimpan3.jpeg",
      "/img/Pimpan/pimpan4.jpeg"   
    ],
    category: "webdev",
    tech: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
    ],
    type: "repo",
    link: "https://github.com/pqmlw/UASFORUM",
  },
  {
    title: "Pomefiore - Simple Fashion Shop",
    desc: "Pomefiore adalah website fashion sederhana yang dibuat sebagai tugas akhir mata kuliah Front-End Programming. Website ini dirancang menggunakan HTML dan CSS, mencakup halaman beranda, katalog produk, dan tentang kami, dengan fokus pada tampilan yang bersih, rapi, dan mudah digunakan untuk menampilkan produk fashion.",
    image: [
      "/img/Pomefiore/pomefiore1.png", 
      "/img/Pomefiore/pomefiore2.png",
      "/img/Pomefiore/pomefiore3.png",
      "/img/Pomefiore/pomefiore4.png"   
    ],
    category: "webdev",
    tech: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ],
    type: "repo",
    link: "https://github.com/IreneCarlLewis/Simple-Fashion-Shop",
  },
  {
    title: "CleanBites - Wellness Food Community",
    desc: "CleanBites adalah website makanan sederhana yang dibuat sebagai proyek frontend. Website ini dirancang menggunakan HTML, CSS, dan JavaScript, mencakup halaman beranda, menu makanan, kalkulator kalori, dan tentang kami. Fokus website ini adalah pada tampilan yang bersih, rapi, dan mudah digunakan, sekaligus memberikan fitur kalkulator kalori untuk membantu pengguna memantau asupan makanan sehat mereka.",
    image: [
      "/img/Cleanbites/cb1.png", 
      "/img/Cleanbites/cb2.png",
      "/img/Cleanbites/cb3.png",
      "/img/Cleanbites/cb4.png"   
    ],
    category: "webdev",
    tech: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ],
    type: "repo",
    link: "https://github.com/melfanny/CleanBites",
  },
  {
    title: "Design a 2D level",
    desc: "Game ini adalah platformer 2D bergaya kartun yang dibuat sebagai proyek sederhana. Level menampilkan jalur tanah bertingkat dengan koin, musuh oranye, dan sungai kecil yang dilewati melalui kotak kayu. Pemain bergerak menuju area akhir yang berisi rintangan tambahan seperti es berduri. Desainnya fokus pada tampilan cerah, sederhana, dan mudah dimainkan.",
    image: [
      "/img/Game2d/2d1.jpeg", 
      "/img/Game2d/2d2.jpeg",
      "/img/Game2d/2d3.jpeg",
      "/img/Game2d/2d4.jpeg"   
    ],
    category: "game",
    tech: [
      { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    type: "apk",
    link: "https://drive.google.com/file/d/1OH_AC0hioeW7rMfk0DxsyA0NI5mH5RqA/view?usp=drivesdk",
  },
  {
    title: "Game Cutscene 3D Desa",
    desc: "Game 3D ini adalah proyek sederhana berbasis Unity dan C#. Fokus utama adalah cutscene interaktif dan desain lingkungan desa 3D. Pemain dapat melihat berbagai area desa yang dirancang detail, sambil menikmati cerita melalui adegan-adegan animasi tanpa banyak gameplay kompleks. Proyek ini menekankan visual storytelling dan desain lingkungan yang imersif.",
    image: [
      "/img/Game3d/3d1.jpeg", 
      "/img/Game3d/3d2.jpeg",
      "/img/Game3d/3d3.jpeg",
      "/img/Game3d/3d4.jpeg"   
    ],
    category: "game",
    tech: [
      { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    type: "apk",
    link: "https://drive.google.com/file/d/1cchtwT2M4SU10KdYqJEcN9kf3gMcfj6D/view?usp=drivesdk",
  },
  {
    title: "Project CV",
    desc: "Proyek ini menggunakan computer vision untuk mendeteksi tangan dan wajah secara real-time. Sistem dapat mengenali jumlah jari yang diangkat dan posisi tangan terhadap wajah. Jika satu jari terdeteksi, akan muncul gambar monyet pertama. Jika satu jari mendekati mulut, muncul gambar monyet kedua. Proyek ini menekankan interaktivitas visual dan penggunaan deteksi gesture untuk memicu respons animasi atau gambar.",
    image: [
      "/img/ProjectCV/cv1.png", 
      "/img/ProjectCV/cv2.png",
      "/img/ProjectCV/cv3.png",   
    ],
    category: "computer vision",
    tech: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" }
    ],
    type: "repo",
    link: "https://github.com/melfanny/Computer-Vision-meme",
  },
  {
    title: "Sumi Bank - Mobile Banking App",
    desc: "Proyek ini menggunakan computer vision untuk mendeteksi tangan dan wajah secara real-time. Sistem dapat mengenali jumlah jari yang diangkat dan posisi tangan terhadap wajah. Jika satu jari terdeteksi, akan muncul gambar monyet pertama. Jika satu jari mendekati mulut, muncul gambar monyet kedua. Proyek ini menekankan interaktivitas visual dan penggunaan deteksi gesture untuk memicu respons animasi atau gambar.",
    image: [
      "/img/Mbanking/MB1.png", 
      "/img/Mbanking/MB2.png",
      "/img/Mbanking/MB3.png",   
    ],
    category: "appdev",
    tech: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
    ],
    type: "repo",
    link: "https://github.com/melfanny/Computer-Vision-meme",
  }
];