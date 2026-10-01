'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
  Star,
  ShieldCheck,
  Plus,
  Minus,
  X,
  Smartphone,
  Check,
  ChevronRight,
  QrCode,
  HelpCircle,
  Truck,
  CheckCircle2,
  Sparkles,
  Layers,
  Store,
  TrendingUp,
  Wallet,
  Scale,
  Sprout,
  Fish,
  Sun,
  ArrowUpRight,
  Sliders,
  Banknote,
  ArrowRight,
  LogIn,
  LogOut,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- CUSTOM MODERN MINIMALIST LOGO FOR PANENHUB ---
function PanenHubLogo({ size = 'md', showText = true }: { size?: 'sm' | 'md' | 'lg'; showText?: boolean }) {
  const iconDim = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-7 h-7 sm:w-8 sm:h-8';
  const textDim = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-base sm:text-xl';

  return (
    <div className="flex items-center gap-2 select-none group cursor-pointer">
      {/* Minimalist Geometric Sprout Badge */}
      <div className={`${iconDim} rounded-xl bg-gradient-to-br from-[#03ac0e] to-[#008f09] flex items-center justify-center p-1.5 shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Main Leaf */}
          <path
            d="M4.5 19.5C4.5 12 10.5 5 19.5 4.5C19.5 13.5 12.5 19.5 4.5 19.5Z"
            fill="white"
          />
          {/* Leaf Rib */}
          <path
            d="M4.5 19.5L12 12"
            stroke="#03ac0e"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Second Sprout */}
          <path
            d="M11 19.5C11 14.8 14.8 11 19.5 11C19.5 15.7 15.7 19.5 11 19.5Z"
            fill="white"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* Clean Startup Wordmark */}
      {showText && (
        <div className="flex items-baseline tracking-tight font-sans">
          <span className={`${textDim} font-bold text-[#1f2937] tracking-tight`}>
            Panen
          </span>
          <span className={`${textDim} font-bold text-[#03ac0e] tracking-tight`}>
            Hub
          </span>
        </div>
      )}
    </div>
  );
}

// --- DATA MODEL: COMMODITIES / PRODUCTS ---

interface Product {
  id: string;
  name: string;
  category: 'sayur' | 'bumbu' | 'seafood' | 'buah';
  categoryLabel: string;
  weightLabel: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  image: string;
  city: string;
  farmer: string;
  harvestTime: string;
  grade: string;
  batchId: string;
  temperature: string;
  rating: number;
  soldCount: string;
  description: string;
}

const CATEGORIES = [
  { id: 'for_you', label: 'Semua Produk', icon: '✨', count: '26 Produk' },
  { id: 'flash_sale', label: 'Panen Hari Ini', icon: '🔥', count: 'Flash Promo' },
  { id: 'sayur', label: 'Sayuran Segar', icon: '🥬', count: '10 Produk' },
  { id: 'seafood', label: 'Hasil Laut & Ikan', icon: '🐟', count: '7 Produk' },
  { id: 'buah', label: 'Buah & Tomat', icon: '🍎', count: '6 Produk' },
  { id: 'bumbu', label: 'Bumbu Dapur', icon: '🌶️', count: '3 Produk' },
];

const PRODUCTS: Product[] = [
  // --- BUMBU DAPUR (3) ---
  {
    id: 'p1',
    name: 'Cabai Rawit Merah Super Segar Petik Subuh',
    category: 'bumbu',
    categoryLabel: 'Bumbu Dapur',
    weightLabel: '250 gr',
    price: 9500,
    originalPrice: 14000,
    discountPercent: 32,
    image: '/products/cabai.jpg',
    city: 'Kota Batu',
    farmer: 'Pak Sugeng Widodo',
    harvestTime: 'Subuh 05:45 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-CBI01',
    temperature: '2.4°C',
    rating: 4.9,
    soldCount: '1.2rb+',
    description: 'Cabai rawit merah varietas Ori 212 kualitas ekspor. Dipetik saat subuh dan langsung disimpan dalam PanenPod 2.4°C agar tetap segar dan pedas maksimal.'
  },
  {
    id: 'p7',
    name: 'Bawang Merah Super Brebes Kering Sinar Matahari',
    category: 'bumbu',
    categoryLabel: 'Bumbu Dapur',
    weightLabel: '500 gr',
    price: 18500,
    originalPrice: 26000,
    discountPercent: 28,
    image: '/products/bawang_merah.jpg',
    city: 'Nganjuk',
    farmer: 'Pak H. Masduki',
    harvestTime: 'Kemarin Siang',
    grade: 'Grade A',
    batchId: 'PNH-2026-NGJ-BWG03',
    temperature: '22.0°C',
    rating: 4.9,
    soldCount: '1.5rb+',
    description: 'Bawang merah varietas Bauji Nganjuk berumbi besar, aroma harum menyengat, kering tuntas sehingga awet disimpan berminggu-minggu.'
  },
  {
    id: 'p12',
    name: 'Bawang Putih Tunggal Lanang Herbal Segar',
    category: 'bumbu',
    categoryLabel: 'Bumbu Dapur',
    weightLabel: '250 gr',
    price: 21000,
    originalPrice: 29000,
    discountPercent: 27,
    image: '/products/bawang_putih.jpg',
    city: 'Kota Batu',
    farmer: 'Ibu Siti Munawaroh',
    harvestTime: 'Kemarin Siang',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-BWP09',
    temperature: '20.0°C',
    rating: 4.9,
    soldCount: '390+',
    description: 'Bawang putih lanang tunggal pilihan herbal berkhasiat tinggi untuk kesehatan daya tahan tubuh dan kebugaran keluarga.'
  },

  // --- SAYURAN SEGAR (10) ---
  {
    id: 'p4',
    name: 'Selada Romaine Crispy Dataran Tinggi Bromo',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '250 gr',
    price: 7000,
    originalPrice: 11000,
    discountPercent: 36,
    image: '/products/selada.jpg',
    city: 'Probolinggo',
    farmer: 'Kang Joko Susilo',
    harvestTime: 'Subuh 05:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-PBG-SLD02',
    temperature: '2.0°C',
    rating: 4.8,
    soldCount: '630+',
    description: 'Selada Romaine renyah dataran tinggi lereng Bromo (1.800 mdpl). Sangat segar untuk salad dan lalapan sehat tanpa pengawet.'
  },
  {
    id: 'p6',
    name: 'Wortel Baby Manis Organik Panen Sore',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '500 gr',
    price: 9000,
    originalPrice: 13500,
    discountPercent: 33,
    image: '/products/wortel.jpg',
    city: 'Kota Batu',
    farmer: 'Pak Sugeng Widodo',
    harvestTime: 'Kemarin Sore',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-WRT08',
    temperature: '2.4°C',
    rating: 4.8,
    soldCount: '520+',
    description: 'Wortel baby tanpa serat kasar dengan rasa manis alami. Cocok untuk jus segar, sop sayur, dan makanan pendamping ASI.'
  },
  {
    id: 'p8',
    name: 'Brokoli Hijau Dataran Tinggi Pujon Bebas Pestisida',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '350 gr',
    price: 12000,
    originalPrice: 17500,
    discountPercent: 31,
    image: '/products/brokoli.jpg',
    city: 'Pujon Malang',
    farmer: 'Ibu Eni Triastuti',
    harvestTime: 'Subuh 05:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-PJN-BRK05',
    temperature: '2.1°C',
    rating: 4.8,
    soldCount: '780+',
    description: 'Kuntum brokoli padat hijau tua segar. Bebas ulat dan pestisida sintetis, langsung didinginkan di PanenPod desa.'
  },
  {
    id: 'p11',
    name: 'Jagung Manis Madu Kupas Bersih Siap Masak',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '3 pcs',
    price: 9500,
    originalPrice: 14000,
    discountPercent: 32,
    image: '/products/jagung.jpg',
    city: 'Kediri',
    farmer: 'Pak Supardi',
    harvestTime: 'Subuh 05:10 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-KDR-JGG06',
    temperature: '3.5°C',
    rating: 4.8,
    soldCount: '460+',
    description: 'Jagung manis madu dengan bulir penuh kuning keemasan. Dipetik saat kadar gula alami berada pada puncaknya.'
  },
  {
    id: 'p13',
    name: 'Kangkung Akar Lombok Segar Petik Pagi',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '300 gr',
    price: 4500,
    originalPrice: 7000,
    discountPercent: 35,
    image: '/products/kangkung.jpg',
    city: 'Lombok Barat',
    farmer: 'Kang Wahyu Pratama',
    harvestTime: 'Subuh 05:20 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-LBK-KKG13',
    temperature: '3.0°C',
    rating: 4.9,
    soldCount: '1.1rb+',
    description: 'Kangkung lombok berbatang besar renyah dengan daun hijau muda segar. Sangat lezat untuk plecing atau tumis terasi pedas.'
  },
  {
    id: 'p14',
    name: 'Bayam Hijau Hidroponik Bebas Pestisida',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '250 gr',
    price: 6000,
    originalPrice: 9000,
    discountPercent: 33,
    image: '/products/bayam.jpg',
    city: 'Malang',
    farmer: 'Ibu Sri Wahyuni',
    harvestTime: 'Subuh 05:40 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-MLG-BYM14',
    temperature: '2.5°C',
    rating: 4.9,
    soldCount: '890+',
    description: 'Bayam hijau hidroponik berdaun mulus dan tebal. Ditanam dengan air nutrisi steril tanpa pestisida kimia sintetis.'
  },
  {
    id: 'p15',
    name: 'Buncis Baby Kenia Super Renyah Pilihan',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '350 gr',
    price: 8000,
    originalPrice: 12000,
    discountPercent: 33,
    image: '/products/buncis.jpg',
    city: 'Kota Batu',
    farmer: 'Pak Bambang Irawan',
    harvestTime: 'Pagi 06:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-BCS15',
    temperature: '2.2°C',
    rating: 4.8,
    soldCount: '620+',
    description: 'Buncis baby muda bertekstur manis renyah tanpa serat keras. Sangat digemari untuk tumis daging atau rebusan sehat.'
  },
  {
    id: 'p16',
    name: 'Terong Ungu Segar Kebun Lereng Pegunungan',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '500 gr',
    price: 7500,
    originalPrice: 11000,
    discountPercent: 31,
    image: '/products/terong.jpg',
    city: 'Lumajang',
    farmer: 'Pak Subagyo',
    harvestTime: 'Subuh 05:15 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-LMJ-TRG16',
    temperature: '4.0°C',
    rating: 4.7,
    soldCount: '410+',
    description: 'Terong ungu mulus mengkilap tanpa cacat. Daging empuk manis bebas rasa pahit, nikmat untuk balado dan lodeh.'
  },
  {
    id: 'p17',
    name: 'Pakcoy Baby Hidroponik Batang Putih Renyah',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '300 gr',
    price: 7000,
    originalPrice: 10500,
    discountPercent: 33,
    image: '/products/pakcoy.jpg',
    city: 'Kota Batu',
    farmer: 'Kang Hendra Saputra',
    harvestTime: 'Subuh 05:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-PKC17',
    temperature: '2.0°C',
    rating: 4.9,
    soldCount: '730+',
    description: 'Pakcoy mini segar hidroponik dengan bonggol bersih dan batang tebal juicy. Sangat cocok untuk tumis dan kuah kaldu hangat.'
  },
  {
    id: 'p18',
    name: 'Kubis / Kol Bulat Segar Lereng Pujon',
    category: 'sayur',
    categoryLabel: 'Sayuran Segar',
    weightLabel: '800 gr',
    price: 9000,
    originalPrice: 13000,
    discountPercent: 30,
    image: '/products/kol.jpg',
    city: 'Pujon Malang',
    farmer: 'Ibu Sumarni',
    harvestTime: 'Pagi 06:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-PJN-KOL18',
    temperature: '3.0°C',
    rating: 4.8,
    soldCount: '540+',
    description: 'Kepala kubis bulat padat bersusun rapat dengan rasa manis alami khas dataran tinggi. Tahan segar lebih lama.'
  },

  // --- HASIL LAUT & IKAN (7) ---
  {
    id: 'p3',
    name: 'Fillet Ikan Tuna Sirip Kuning Yellowfin Sashimi',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '300 gr',
    price: 29000,
    originalPrice: 42000,
    discountPercent: 31,
    image: '/products/tuna.jpg',
    city: 'Banyuwangi',
    farmer: 'Pak H. Slamet Riyadi',
    harvestTime: 'Subuh 04:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BWI-TNA09',
    temperature: '-18.5°C',
    rating: 5.0,
    soldCount: '420+',
    description: 'Tuna Yellowfin hasil tangkapan pancing ramah lingkungan nelayan Muncar. Dibekukan seketika (blast-freezing) -18°C untuk mempertahankan tekstur sashimi.'
  },
  {
    id: 'p5',
    name: 'Udang Vaname Fresh Size 30 Tambak Pesisir',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '350 gr',
    price: 32000,
    originalPrice: 45000,
    discountPercent: 29,
    image: '/products/udang.jpg',
    city: 'Tuban',
    farmer: 'Pak Darsono Mulyo',
    harvestTime: 'Subuh 05:15 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-TBN-UDG07',
    temperature: '-18.2°C',
    rating: 4.9,
    soldCount: '310+',
    description: 'Udang Vaname tambak bioflok modern air payau. Daging kenyal manis alami, kepala dan kulit utuh terjaga dalam cold chain.'
  },
  {
    id: 'p9',
    name: 'Ikan Gurame Hidup Kolam Air Deras Pegunungan',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '700 gr',
    price: 36000,
    originalPrice: 48000,
    discountPercent: 25,
    image: '/products/gurame.jpg',
    city: 'Tulungagung',
    farmer: 'Pak Suyatno',
    harvestTime: 'Subuh 04:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-TLG-GRM11',
    temperature: '1.5°C',
    rating: 4.9,
    soldCount: '340+',
    description: 'Ikan gurame kolam air deras pegunungan bebas bau tanah. Dibersihkan dan divakum dingin segera setelah panen.'
  },
  {
    id: 'p19',
    name: 'Ikan Nila Merah Hidup Air Kolam Deras',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '600 gr',
    price: 24000,
    originalPrice: 32000,
    discountPercent: 25,
    image: '/products/nila.jpg',
    city: 'Blitar',
    farmer: 'Pak Joko Waluyo',
    harvestTime: 'Subuh 04:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BLT-NLA19',
    temperature: '1.8°C',
    rating: 4.9,
    soldCount: '610+',
    description: 'Nila merah segar dipelihara dalam kolam semen air mengalir. Daging tebal gurih dan manis alami tanpa bau lumpur.'
  },
  {
    id: 'p20',
    name: 'Ikan Bandeng Juwana Cabut Duri Segar Higienis',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '400 gr',
    price: 28000,
    originalPrice: 38000,
    discountPercent: 26,
    image: '/products/bandeng.jpg',
    city: 'Lamongan',
    farmer: 'Cak Mustofa',
    harvestTime: 'Subuh 05:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-LMG-BDG20',
    temperature: '-18.0°C',
    rating: 4.9,
    soldCount: '480+',
    description: 'Bandeng segar tambak pesisir utara, seluruh duri halus telah dicabut bersih secara teliti. Aman dikonsumsi anak-anak.'
  },
  {
    id: 'p21',
    name: 'Cumi-Cumi Seriti Segar Tangkapan Nelayan Pesisir',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '350 gr',
    price: 34000,
    originalPrice: 48000,
    discountPercent: 29,
    image: '/products/cumi.jpg',
    city: 'Probolinggo',
    farmer: 'Pak Salim Bahari',
    harvestTime: 'Dini Hari 03:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-PBG-CMI21',
    temperature: '-18.0°C',
    rating: 4.9,
    soldCount: '530+',
    description: 'Cumi seriti segar tangkapan perahu nelayan tradisional. Daging kenyal manis alami, kantung tinta utuh tidak pecah.'
  },
  {
    id: 'p22',
    name: 'Fillet Ikan Kakap Merah Segar Pilihan Restoran',
    category: 'seafood',
    categoryLabel: 'Hasil Laut & Ikan',
    weightLabel: '300 gr',
    price: 38000,
    originalPrice: 52000,
    discountPercent: 27,
    image: '/products/kakap.jpg',
    city: 'Banyuwangi',
    farmer: 'Pak Rusdianto',
    harvestTime: 'Subuh 04:15 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BWI-KKP22',
    temperature: '-18.4°C',
    rating: 4.9,
    soldCount: '370+',
    description: 'Fillet ikan kakap merah segar laut dalam tanpa tulang dan sisik. Tekstur daging padat kenyal dengan rasa gurih istimewa.'
  },

  // --- BUAH & TOMAT (6) ---
  {
    id: 'p2',
    name: 'Tomat Beef Hidroponik Segar Pilihan Restoran',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '500 gr',
    price: 8500,
    originalPrice: 13000,
    discountPercent: 35,
    image: '/products/tomat.jpg',
    city: 'Kab. Malang',
    farmer: 'Ibu Rahayu Lestari',
    harvestTime: 'Pagi 06:15 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-MLG-TMT04',
    temperature: '2.8°C',
    rating: 4.9,
    soldCount: '850+',
    description: 'Tomat berdaging tebal, kadar air padat, kaya likopen dan vitamin C. Ditanam secara hidroponik tanpa pestisida kimia sintetis.'
  },
  {
    id: 'p10',
    name: 'Apel Manalagi Batu Matang Pohon Manis Renyah',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '1 kg',
    price: 24000,
    originalPrice: 34000,
    discountPercent: 29,
    image: '/products/apel.jpg',
    city: 'Kota Batu',
    farmer: 'Pak Budi Santoso',
    harvestTime: 'Pagi 07:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BATU-APL02',
    temperature: '3.0°C',
    rating: 4.9,
    soldCount: '910+',
    description: 'Apel Manalagi khas pegunungan Batu dengan aroma harum manis dan tekstur renyah alami tanpa lilin pengkilap.'
  },
  {
    id: 'p24',
    name: 'Pisang Cavendish Sunpride Matang Alami',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '1 sisir (1.2 kg)',
    price: 23000,
    originalPrice: 32000,
    discountPercent: 28,
    image: '/products/pisang.jpg',
    city: 'Pasuruan',
    farmer: 'Kelompok Tani Makmur',
    harvestTime: 'Pagi 07:00 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-PSR-PSG24',
    temperature: '14.0°C',
    rating: 4.9,
    soldCount: '780+',
    description: 'Pisang Cavendish berkulit kuning cerah mulus dengan daging lembut manis beraroma harum. Kaya kalium dan serat alami.'
  },
  {
    id: 'p25',
    name: 'Alpukat Mentega Super Pulen Tanpa Serat',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '1 kg',
    price: 32000,
    originalPrice: 45000,
    discountPercent: 29,
    image: '/products/alpukat.jpg',
    city: 'Probolinggo',
    farmer: 'Pak Mulyono',
    harvestTime: 'Kemarin Sore',
    grade: 'Grade A',
    batchId: 'PNH-2026-PBG-ALP25',
    temperature: '16.0°C',
    rating: 4.9,
    soldCount: '650+',
    description: 'Alpukat mentega unggulan berdaging tebal kuning pekat. Tekstur sangat pulen legit tanpa rasa getir dan tanpa serat kasar.'
  },
  {
    id: 'p26',
    name: 'Jeruk Siam Madu Manis Segar Berair Banyuwangi',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '1 kg',
    price: 19500,
    originalPrice: 28000,
    discountPercent: 30,
    image: '/products/jeruk.jpg',
    city: 'Banyuwangi',
    farmer: 'Pak H. Ridwan',
    harvestTime: 'Pagi 06:30 WIB',
    grade: 'Grade A',
    batchId: 'PNH-2026-BWI-JRK26',
    temperature: '12.0°C',
    rating: 4.8,
    soldCount: '820+',
    description: 'Jeruk siam madu khas Banyuwangi dengan kulit tipis dan bulir air melimpah. Rasa manis segar menyegarkan tenggorokan.'
  },
  {
    id: 'p27',
    name: 'Semangka Merah Non-Biji Segar Manis Renyah',
    category: 'buah',
    categoryLabel: 'Buah & Tomat',
    weightLabel: '2.5 kg',
    price: 22000,
    originalPrice: 30000,
    discountPercent: 27,
    image: '/products/semangka.jpg',
    city: 'Bojonegoro',
    farmer: 'Cak Darman',
    harvestTime: 'Kemarin Siang',
    grade: 'Grade A',
    batchId: 'PNH-2026-BJN-SMG27',
    temperature: '10.0°C',
    rating: 4.8,
    soldCount: '490+',
    description: 'Semangka merah tanpa biji dengan daging buah merah menyala, berair banyak dan tekstur renyah manis alami.'
  },
];

export default function PanenHubTokopediaApp() {
  const [activeNavTab, setActiveNavTab] = useState<string>('for_you');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart State: { [productId]: quantity }
  const [cart, setCart] = useState<{ [id: string]: number }>({
    p1: 2,
    p2: 1
  });

  // UI Interactive Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedTraceProduct, setSelectedTraceProduct] = useState<Product | null>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isWarungModalOpen, setIsWarungModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [activeQrOrderId, setActiveQrOrderId] = useState<string | null>(null);
  const [notificationToast, setNotificationToast] = useState<string | null>(null);

  // Selected Warung Pickup Location
  const [selectedLocation, setSelectedLocation] = useState({
    name: 'Warung Bu Siti',
    address: 'Jl. Rungkut Asri Timur No. 12, Surabaya',
    distance: '120m dari rumah'
  });

  const [deliveryMethod, setDeliveryMethod] = useState<'click_collect' | 'direct_doorstep'>('click_collect');

  // Orders State (Digital Pick-up Passes)
  const [orders, setOrders] = useState([
    {
      id: 'PNH-INV-2026092801',
      date: 'Hari ini, 08:30 WIB',
      pin: '8921',
      status: 'ready', // 'ready' | 'collected'
      warung: 'Warung Bu Siti (Jl. Rungkut Asri Timur No. 12, Surabaya)',
      pickupTime: 'Besok Pagi, 07:30 - 18:00 WIB',
      total: 27500,
      items: [
        { name: 'Cabai Rawit Merah Super', qty: 2, price: 9500 },
        { name: 'Tomat Beef Hidroponik', qty: 1, price: 8500 }
      ]
    }
  ]);

  // Multi-POV State: 'login' (Role Selection / Gateway) | 'customer' | 'producer' | 'warung'
  const [activePov, setActivePov] = useState<'login' | 'customer' | 'producer' | 'warung'>('login');

  // Sync role from URL (?role=customer / producer / warung)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const role = params.get('role');
      if (role === 'customer' || role === 'producer' || role === 'warung') {
        setActivePov(role);
      } else {
        setActivePov('login');
      }
    }
  }, []);

  const handleSelectRole = (role: 'customer' | 'producer' | 'warung') => {
    setActivePov(role);
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}?role=${role}`;
      window.history.pushState(null, '', newUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoutToGateway = () => {
    setActivePov('login');
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Producer Portal State (Petani Sayur & Nelayan Pesisir)
  const [producerType, setProducerType] = useState<'petani' | 'nelayan'>('petani');
  const [producerTab, setProducerTab] = useState<'ringkasan' | 'kuota' | 'setor' | 'keuangan'>('ringkasan');
  const [farmerWalletBalance, setFarmerWalletBalance] = useState<number>(4860000);
  const [simWeightKg, setSimWeightKg] = useState<number>(50);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [depositCommodity, setDepositCommodity] = useState('Cabai Rawit Merah Super');
  const [depositKg, setDepositKg] = useState<number>(30);

  // Mitra Warung Portal State
  const [warungTab, setWarungTab] = useState<'dashboard' | 'validasi' | 'rak' | 'komisi'>('dashboard');
  const [warungRakFilter, setWarungRakFilter] = useState<'all' | 'ready' | 'collected'>('all');
  const [warungBalance, setWarungBalance] = useState<number>(186000);
  const [inputWarungPin, setInputWarungPin] = useState<string>('');
  const [warungFeedback, setWarungFeedback] = useState<string | null>(null);

  // Toast helper
  const showToast = (msg: string) => {
    setNotificationToast(msg);
    setTimeout(() => {
      setNotificationToast(null);
    }, 3500);
  };

  const handleFarmerWithdraw = () => {
    if (farmerWalletBalance <= 0) {
      showToast('⚠️ Saldo dompet sudah kosong atau telah ditarik.');
      return;
    }
    const amount = farmerWalletBalance;
    setFarmerWalletBalance(0);
    try {
      confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
    } catch {}
    showToast(`💰 Payout Instan T+0 Berhasil! Rp ${amount.toLocaleString('id-ID')} cair seketika ke Rekening Bank Petani.`);
  };

  const handleDepositHarvest = () => {
    const earned = depositKg * (producerType === 'petani' ? 24500 : 38000);
    setFarmerWalletBalance(prev => prev + earned);
    setIsDepositModalOpen(false);
    try {
      confetti({ particleCount: 50, spread: 70 });
    } catch {}
    showToast(`🌱 Setoran ${depositKg} kg "${depositCommodity}" tercatat di Cold Pod! Saldo bertambah +Rp ${earned.toLocaleString('id-ID')}`);
  };

  const handleWarungWithdraw = () => {
    if (warungBalance <= 0) {
      showToast('⚠️ Saldo komisi saat ini Rp 0 atau telah ditarik.');
      return;
    }
    const amount = warungBalance;
    setWarungBalance(0);
    try {
      confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
    } catch {}
    showToast(`💰 Penarikan Komisi Berhasil! Rp ${amount.toLocaleString('id-ID')} ditransfer ke Rekening BCA Bu Siti.`);
  };

  const handleValidateWarungPin = (customPin?: string) => {
    const pinToUse = (customPin || inputWarungPin).trim();
    if (!pinToUse) {
      setWarungFeedback('⚠️ Mohon masukkan 4 digit PIN konsumen.');
      return;
    }
    const targetOrder = orders.find(o => o.pin === pinToUse);
    if (targetOrder) {
      if (targetOrder.status === 'collected') {
        setWarungFeedback(`ℹ️ Paket ${targetOrder.id} sudah pernah diambil sebelumnya.`);
        showToast(`ℹ️ Paket ${targetOrder.id} sudah selesai diserahkan.`);
        return;
      }
      setWarungBalance(prev => prev + 2000);
      setOrders(prev => prev.map(o => o.pin === pinToUse ? { ...o, status: 'collected' } : o));
      setInputWarungPin('');
      setWarungFeedback(`✅ PIN ${pinToUse} VALID! Paket ${targetOrder.id} diserahkan ke pelanggan. Komisi +Rp 2.000 masuk ke saldo.`);
      try {
        confetti({ particleCount: 50 });
      } catch {}
      showToast('🎉 Validasi PIN sukses! Komisi warung +Rp 2.000');
    } else {
      setWarungFeedback('❌ PIN tidak ditemukan. Pastikan 4 digit nomor PIN benar.');
    }
  };

  // Navigation & Drawer Transition Handlers (Anti-Tumpuk & Perpindahan Halus)
  const handleSelectCategory = (categoryId: string) => {
    setActiveNavTab(categoryId);
    setIsCategoryMenuOpen(false);
    setIsCartOpen(false);
    
    // Smooth scroll to catalog section
    setTimeout(() => {
      const catalogEl = document.getElementById('katalog-section');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const toggleCart = () => {
    setIsCategoryMenuOpen(false);
    setIsCartOpen(prev => !prev);
  };

  const toggleCategoryMenu = () => {
    setIsCartOpen(false);
    setIsCategoryMenuOpen(prev => !prev);
  };

  const getCategoryTitle = () => {
    if (searchQuery) return `Hasil Pencarian "${searchQuery}"`;
    switch (activeNavTab) {
      case 'for_you':
        return 'Rekomendasi Panen Untukmu';
      case 'flash_sale':
        return '🔥 Promo Panen Hari Ini';
      case 'sayur':
        return '🥬 Sayuran Segar Petik Subuh';
      case 'bumbu':
        return '🌶️ Bumbu Dapur Pilihan';
      case 'seafood':
        return '🐟 Hasil Laut & Ikan Segar';
      case 'buah':
        return '🍅 Buah Segar & Tomat Hidroponik';
      default:
        return 'Katalog Panen Pilihan';
    }
  };

  // Cart calculations
  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const calculateSubtotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const prod = PRODUCTS.find(p => p.id === id);
      return total + (prod ? prod.price * qty : 0);
    }, 0);
  };

  const handleAddToCart = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    const product = PRODUCTS.find(p => p.id === id);
    if (product) {
      showToast(`🛒 "${product.name.slice(0, 24)}..." ditambahkan ke keranjang`);
    }
  };

  const handleRemoveFromCart = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCategory =
      activeNavTab === 'for_you' ||
      activeNavTab === 'flash_sale' ||
      (activeNavTab === 'sayur' && p.category === 'sayur') ||
      (activeNavTab === 'bumbu' && p.category === 'bumbu') ||
      (activeNavTab === 'seafood' && p.category === 'seafood') ||
      (activeNavTab === 'buah' && p.category === 'buah');

    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.farmer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleCheckout = () => {
    const subtotal = calculateSubtotal();
    if (deliveryMethod === 'direct_doorstep' && subtotal < 100000) {
      alert('Minimum Order Quantity (MOQ) untuk antar ke rumah adalah Rp 100.000. Silakan pilih opsi Ambil di Mitra Warung untuk Bebas Ongkir Rp 0 tanpa minimum belanja.');
      return;
    }

    const newPin = Math.floor(1000 + Math.random() * 9000).toString();
    const newOrderId = `PNH-INV-${Date.now().toString().slice(-8)}`;

    const orderItems = Object.entries(cart).map(([id, qty]) => {
      const p = PRODUCTS.find(prod => prod.id === id)!;
      return { name: p.name, qty, price: p.price };
    });

    const newOrder = {
      id: newOrderId,
      date: 'Hari ini (Baru Saja)',
      pin: newPin,
      status: 'ready',
      warung: deliveryMethod === 'click_collect' ? `${selectedLocation.name} (${selectedLocation.address})` : 'Alamat Rumah: Jl. Rungkut Asri Barat No. 44, Surabaya',
      pickupTime: 'Besok Pagi, 07:30 - 18:00 WIB',
      total: subtotal + (deliveryMethod === 'direct_doorstep' ? 10000 : 0),
      items: orderItems
    };

    setOrders([newOrder, ...orders]);
    setCart({});
    setIsCartOpen(false);
    setActiveNavTab('pesanan');

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {}

    showToast(`🎉 Pesanan berhasil! Tiket ambil dengan PIN ${newPin} telah terbit.`);
  };

  const simulateCollectOrder = (orderId: string, pin: string) => {
    setOrders(prev =>
      prev.map(o => (o.id === orderId ? { ...o, status: 'collected' } : o))
    );
    try {
      confetti({ particleCount: 50, spread: 70 });
    } catch {}
    showToast(`✅ Tiket ${pin} berhasil divalidasi! Pesanan siap diambil.`);
  };

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
      className="min-h-screen bg-[#f3f4f5] text-[#212121] flex flex-col text-sm antialiased pb-20 md:pb-0"
    >
      
      {/* ── TOAST NOTIFICATION ── */}
      {notificationToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-60 bg-[#212121] text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{notificationToast}</span>
        </div>
      )}

      {/* ── 0. GATEWAY / LOGIN HEADER ── */}
      {activePov === 'login' && (
        <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7e9] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div onClick={() => setActivePov('login')} className="flex items-center gap-3 cursor-pointer">
              <PanenHubLogo size="md" />
              <div className="hidden sm:block h-6 w-px bg-slate-200" />
              <span className="hidden sm:inline text-xs text-[#6d7588]">
                Platform Ekosistem Rantai Pasok Pangan Segar Nusantara
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="text-[#6d7588] hover:text-[#03ac0e] transition outline-none cursor-pointer"
              >
                Tentang PanenHub
              </button>
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="text-[#03ac0e] font-medium flex items-center gap-1 hover:underline outline-none cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Pusat Bantuan</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ── 1. CUSTOMER MODE HEADER (TOKOPEDIA-STYLE STOREFRONT) ── */}
      {activePov === 'customer' && (
        <>
          {/* Clean Top Utility Bar */}
          <div className="bg-[#f3f4f5] border-b border-[#e5e7e9] text-[12px] text-[#6d7588] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
            <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setIsAppModalOpen(true)}
                  className="flex items-center gap-1.5 text-[#212121] font-normal hover:text-[#03ac0e] transition outline-none cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#03ac0e]" />
                  <span>Download PanenHub App</span>
                </button>
                <span className="text-[#e5e7e9]">|</span>
                <span className="text-[#03ac0e] font-medium flex items-center gap-1">
                  <span>🏪 Jaringan Mitra Warung Terverifikasi</span>
                </span>
              </div>

              <div className="flex items-center gap-4 text-[12px]">
                <div className="flex items-center gap-1.5 text-[#212121] font-medium">
                  <User className="w-3.5 h-3.5 text-[#03ac0e]" />
                  <span>Konsumen: Budi Santoso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Storefront Header */}
          <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7e9] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
              
              <div className="flex items-center justify-between gap-2.5 sm:gap-6">
                
                {/* Custom Modern PanenHub Logo (Click to Return to Gateway) */}
                <div
                  onClick={handleLogoutToGateway}
                  className="cursor-pointer shrink-0"
                  title="Kembali ke Beranda PanenHub"
                >
                  <PanenHubLogo size="md" />
                </div>

                {/* "Kategori" Dropdown Interactive Menu */}
                <div className="relative hidden lg:block">
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCategoryMenuOpen(!isCategoryMenuOpen);
                    }}
                    className={`flex items-center gap-1.5 text-[13px] font-medium transition px-3 py-1.5 rounded-lg outline-none cursor-pointer ${
                      isCategoryMenuOpen ? 'text-[#03ac0e] bg-emerald-50' : 'text-[#212121] hover:text-[#03ac0e] hover:bg-slate-50'
                    }`}
                  >
                    <span>Kategori</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryMenuOpen ? 'rotate-180 text-[#03ac0e]' : 'text-[#6d7588]'}`} />
                  </button>

                  {/* Dropdown Popover */}
                  {isCategoryMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsCategoryMenuOpen(false)}
                      />
                      <div className="absolute top-full left-0 mt-1.5 w-60 bg-white border border-[#e5e7e9] rounded-2xl shadow-xl py-2 z-40 animate-fadeIn">
                        <div className="px-3.5 py-1 text-[11px] font-semibold text-[#8d96aa] uppercase tracking-wider">
                          Pilih Kategori Panen
                        </div>
                        {CATEGORIES.map(cat => {
                          const isActive = activeNavTab === cat.id;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => handleSelectCategory(cat.id)}
                              className={`w-full text-left px-3.5 py-2 text-xs transition flex items-center justify-between outline-none cursor-pointer ${
                                isActive
                                  ? 'bg-[#ebf5e9] text-[#03ac0e] font-semibold'
                                  : 'text-[#212121] hover:bg-slate-50 hover:text-[#03ac0e]'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#03ac0e]' : 'text-slate-300'}`} />
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                {/* Clean Rounded Search Bar OR Ticket View Header */}
                {activeNavTab === 'pesanan' ? (
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <button
                      onClick={() => setActiveNavTab('for_you')}
                      className="px-3 py-1.5 rounded-lg border border-[#03ac0e] text-[#03ac0e] hover:bg-[#ebf5e9] text-xs font-semibold transition flex items-center gap-1.5 outline-none cursor-pointer shrink-0"
                    >
                      <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                      <span>Kembali Belanja</span>
                    </button>
                    <span className="text-xs sm:text-sm font-bold text-[#212121] truncate ml-2">
                      Tiket Ambil Saya ({orders.length})
                    </span>
                  </div>
                ) : (
                  <div className="flex-1 max-w-4xl min-w-0">
                    <div className="relative flex items-center">
                      <Search className="w-4 h-4 absolute left-3 text-[#8d96aa]" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari sayur, ikan, buah, bumbu..."
                        className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#f3f4f5]/60 hover:bg-[#f3f4f5] focus:bg-white border border-[#e5e7e9] text-[13px] text-[#212121] placeholder:text-[#8d96aa] font-normal focus:outline-none focus:border-[#03ac0e] transition"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-2.5 text-[#8d96aa] hover:text-[#212121] outline-none cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Shopping Cart Icon with Badge */}
                <div
                  onClick={toggleCart}
                  className="relative p-2 rounded-md hover:bg-slate-50 text-[#212121] hover:text-[#03ac0e] cursor-pointer shrink-0 transition"
                  title="Keranjang Belanja"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[#ef144a] text-white text-[10px] font-medium flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </div>

                <div className="hidden sm:block h-6 w-px bg-[#e5e7e9]"></div>

                {/* Header Action Buttons */}
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setIsCategoryMenuOpen(false);
                      setIsCartOpen(false);
                      setActiveNavTab('pesanan');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg border text-xs font-medium transition flex items-center gap-1.5 outline-none cursor-pointer ${
                      activeNavTab === 'pesanan'
                        ? 'bg-[#03ac0e] text-white border-[#03ac0e]'
                        : 'border-[#03ac0e] text-[#03ac0e] hover:bg-[#ebf5e9]'
                    }`}
                  >
                    <span>Tiket Ambil</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      activeNavTab === 'pesanan' ? 'bg-white text-[#03ac0e]' : 'bg-[#03ac0e] text-white'
                    }`}>
                      {orders.length}
                    </span>
                  </button>

                  <button
                    onClick={toggleCart}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-medium transition shadow-xs outline-none cursor-pointer"
                  >
                    <span>Beli Sekarang</span>
                  </button>
                </div>

              </div>

              {/* Simple Clean Delivery Location Bar - Only visible in catalog mode */}
              {activeNavTab !== 'pesanan' && (
                <div className="flex items-center justify-between gap-2.5 pt-2 text-[11px] sm:text-[12px] text-[#6d7588]">
                  <div
                    onClick={() => setIsWarungModalOpen(true)}
                    className="flex items-center gap-1.5 text-[#4b5563] hover:text-[#03ac0e] cursor-pointer font-normal truncate min-w-0 group"
                    title="Klik untuk memilih titik ambil"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#03ac0e] shrink-0" />
                    <span className="truncate">
                      Titik Ambil: <strong className="font-semibold text-[#212121]">{selectedLocation.name}</strong> <span className="hidden sm:inline text-[#6d7588]">({selectedLocation.address.split(',')[0]})</span>
                    </span>
                    <ChevronDown className="w-3 h-3 text-[#8d96aa] shrink-0 group-hover:text-[#03ac0e]" />
                  </div>

                  <div className="flex items-center shrink-0">
                    <button
                      onClick={() => setIsWarungModalOpen(true)}
                      className="px-2.5 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#03ac0e] font-semibold text-[11px] sm:text-xs border border-emerald-200 transition outline-none cursor-pointer shadow-2xs"
                    >
                      Ubah Titik
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Horizontal Category Navigation Bar - ONLY ON CATALOG VIEWS */}
            {activeNavTab !== 'pesanan' && (
              <div className="border-t border-[#e5e7e9] bg-white px-4 sm:px-6 lg:px-8 py-2">
                <div className="w-full max-w-[1720px] mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none text-[13px] py-0.5">
                  {[
                    { id: 'for_you', label: 'Semua Panen', icon: '✨' },
                    { id: 'flash_sale', label: 'Panen Hari Ini', icon: '🔥' },
                    { id: 'sayur', label: 'Sayuran Segar', icon: '🥬' },
                    { id: 'seafood', label: 'Hasil Laut & Ikan', icon: '🐟' },
                    { id: 'buah', label: 'Buah & Tomat', icon: '🍎' },
                    { id: 'bumbu', label: 'Bumbu Dapur', icon: '🌶️' },
                  ].map(tab => {
                    const isActive = activeNavTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleSelectCategory(tab.id)}
                        className={`px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap text-xs flex items-center gap-1.5 select-none outline-none cursor-pointer ${
                          isActive
                            ? 'bg-[#03ac0e] text-white font-semibold shadow-xs scale-[1.02]'
                            : 'bg-[#f8f9fa] border border-[#e5e7e9] text-[#6d7588] font-normal hover:border-[#03ac0e]/50 hover:text-[#03ac0e] hover:bg-emerald-50/50'
                        }`}
                      >
                        <span className="text-sm">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </header>
        </>
      )}

      {/* ── 2. PRODUCER MODE HEADER (PORTAL MITRA TANI & NELAYAN) ── */}
      {activePov === 'producer' && (
        <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7e9] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              
              {/* Row 1: Logo & Role Badge */}
              <div className="flex items-center gap-2.5">
                <div
                  onClick={handleLogoutToGateway}
                  className="cursor-pointer shrink-0"
                  title="Kembali ke Portal PanenHub"
                >
                  <PanenHubLogo size="md" />
                </div>
                <div className="h-5 w-px bg-[#e5e7e9]" />
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ebf5e9] text-[#03ac0e] text-[11px] font-semibold border border-[#03ac0e]/20 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Mitra Produsen</span>
                </span>
              </div>

              {/* Persona Segmented Switch (Petani Kebun / Nelayan Laut) */}
              <div className="flex items-center p-1 bg-[#f3f4f5] rounded-xl border border-[#e5e7e9] text-xs w-full sm:w-auto">
                <button
                  onClick={() => setProducerType('petani')}
                  className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition cursor-pointer outline-none flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    producerType === 'petani'
                      ? 'bg-white text-[#03ac0e] shadow-2xs font-bold'
                      : 'text-[#6d7588] hover:text-[#212121] font-medium'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Petani Kebun</span>
                </button>
                <button
                  onClick={() => setProducerType('nelayan')}
                  className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition cursor-pointer outline-none flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    producerType === 'nelayan'
                      ? 'bg-white text-[#03ac0e] shadow-2xs font-bold'
                      : 'text-[#6d7588] hover:text-[#212121] font-medium'
                  }`}
                >
                  <Fish className="w-3.5 h-3.5" />
                  <span>Nelayan Laut</span>
                </button>
              </div>

              {/* Desktop Subpage Tabs Navigation */}
              <div className="hidden lg:flex items-center gap-1 bg-[#f3f4f5] p-1 rounded-xl border border-[#e5e7e9] text-xs">
                {[
                  { id: 'ringkasan', label: 'Ringkasan', icon: TrendingUp },
                  { id: 'kuota', label: 'Kuota Order', icon: Layers },
                  { id: 'setor', label: 'Setoran & QC', icon: Plus },
                  { id: 'keuangan', label: 'Keuangan & Nilai Tambah', icon: Wallet },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setProducerTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer outline-none flex items-center gap-1.5 ${
                      producerTab === tab.id
                        ? 'bg-white text-[#03ac0e] shadow-2xs font-bold'
                        : 'text-[#6d7588] hover:text-[#212121]'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </header>
      )}

      {/* ── 3. MITRA WARUNG MODE HEADER ── */}
      {activePov === 'warung' && (
        <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7e9] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center justify-between gap-3">
              {/* Left: Logo & Role Badge */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div
                  onClick={handleLogoutToGateway}
                  className="cursor-pointer shrink-0"
                  title="Kembali ke Beranda PanenHub"
                >
                  <PanenHubLogo size="md" />
                </div>
                <div className="h-5 w-px bg-slate-200" />
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ebf5e9] text-[#03ac0e] text-[11px] font-semibold border border-[#03ac0e]/20 shrink-0">
                  <Store className="w-3.5 h-3.5" />
                  <span>Mitra Warung</span>
                </span>
              </div>

              {/* Desktop Subpage Tabs Navigation */}
              <div className="hidden lg:flex items-center gap-1 bg-[#f3f4f5] p-1 rounded-xl border border-[#e5e7e9] text-xs">
                {[
                  { id: 'dashboard', label: 'Ringkasan Warung', icon: Store },
                  { id: 'validasi', label: 'Validasi PIN', icon: QrCode },
                  { id: 'rak', label: `Rak Paket (${orders.length})`, icon: Layers },
                  { id: 'komisi', label: 'Saldo Komisi', icon: Wallet },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setWarungTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer outline-none flex items-center gap-1.5 ${
                      warungTab === tab.id
                        ? 'bg-white text-[#03ac0e] shadow-2xs font-bold'
                        : 'text-[#6d7588] hover:text-[#212121]'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* ── MAIN CONTENT WORKSPACE (LEBAR PENUH & LAPANG) ── */}
      <main className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex-1 space-y-5">

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* POV 0: GATEWAY / LOGIN / PILIH PERAN PORTAL MASUK             */}
        {/* ══════════════════════════════════════════════════════════════ */}
        {activePov === 'login' && (
          <div className="py-6 sm:py-12 max-w-6xl mx-auto space-y-8 animate-fadeIn">
            {/* Clean Enterprise Hero Heading */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebf5e9] text-[#03ac0e] text-xs font-semibold border border-[#03ac0e]/20">
                <span className="w-2 h-2 rounded-full bg-[#03ac0e] animate-pulse" />
                <span>Ekosistem Rantai Pasok Pangan Segar Nusantara</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#212121] tracking-tight">
                Selamat Datang di PanenHub
              </h1>
              <p className="text-xs sm:text-sm text-[#6d7588] leading-relaxed">
                Platform digital rantai dingin terintegrasi yang menghubungkan petani kebun dan nelayan pesisir langsung dengan warung tetangga dan konsumen nusantara.
              </p>
            </div>

            {/* 3 Balanced Portal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Card 1: Konsumen */}
              <div className="bg-white rounded-2xl border border-[#e5e7e9] hover:border-[#03ac0e] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#ebf5e9] text-[#03ac0e] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      🛒
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-[#03ac0e] border border-emerald-200">
                      Bebas Biaya Kirim
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#212121] group-hover:text-[#03ac0e] transition-colors">
                      Konsumen & Rumah Tangga
                    </h3>
                    <p className="text-xs text-[#6d7588] mt-1.5 leading-relaxed">
                      Belanja sayur petik subuh, buah hidroponik, bumbu dapur, dan hasil laut segar langsung dari sumbernya. Ambil di warung tetangga tanpa biaya kirim.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-[#4b5563]">
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Dipetik subuh & rantai dingin terjaga 0–4°C</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Ambil di Mitra Warung tetangga (Rp 0 ongkir)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Pengambilan instan dengan tiket digital 4 digit PIN</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleSelectRole('customer')}
                    className="w-full py-3 rounded-xl bg-[#03ac0e] hover:bg-[#02980c] text-white font-semibold text-xs transition shadow-xs flex items-center justify-center gap-2 cursor-pointer outline-none"
                  >
                    <span>Masuk sebagai Konsumen</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 2: Petani & Nelayan */}
              <div className="bg-white rounded-2xl border border-[#e5e7e9] hover:border-[#03ac0e] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      🌱
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                      Anti-Ijon • Pencairan T+0
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#212121] group-hover:text-[#03ac0e] transition-colors">
                      Mitra Petani & Nelayan
                    </h3>
                    <p className="text-xs text-[#6d7588] mt-1.5 leading-relaxed">
                      Akses kuota permintaan konsumen kota, fasilitas pendingin Cold Pod desa 0–4°C, timbangan digital akurat tanpa potongan, dan jaminan pencairan T+0.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-[#4b5563]">
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Fasilitas Cold Pod desa & Slurry Ice tenaga surya</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Timbangan digital 0% potongan susut sepihak</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-[#03ac0e] shrink-0" />
                      <span>Pencairan hasil penjualan seketika T+0 ke rekening</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleSelectRole('producer')}
                    className="w-full py-3 rounded-xl bg-[#03ac0e] hover:bg-[#02980c] text-white font-semibold text-xs transition shadow-xs flex items-center justify-center gap-2 cursor-pointer outline-none"
                  >
                    <span>Masuk Portal Mitra Produsen</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 3: Mitra Warung */}
              <div className="bg-white rounded-2xl border border-[#e5e7e9] hover:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      🏪
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-[#03ac0e] border border-emerald-200">
                      +Rp 2.000 / Paket
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#212121] group-hover:text-slate-900 transition-colors">
                      Mitra Warung Tetangga
                    </h3>
                    <p className="text-xs text-[#6d7588] mt-1.5 leading-relaxed">
                      Titik ambil paket resmi warga sekitar. Hasilkan komisi tunai setiap penyerahan paket tanpa modal belanja stok dan tanpa risiko barang basi.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-[#4b5563]">
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>Nol modal belanja & nol risiko barang basi</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>Komisi Rp 2.000 per paket selesai divalidasi</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Check className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>Mesin kasir validasi PIN praktis via smartphone</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleSelectRole('warung')}
                    className="w-full py-3 rounded-xl bg-[#212121] hover:bg-black text-white font-semibold text-xs transition shadow-xs flex items-center justify-center gap-2 cursor-pointer outline-none"
                  >
                    <span>Masuk Kasir Mitra Warung</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

            {/* Platform Credibility & Assurance Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e5e7e9]">
              <div className="p-4 rounded-xl bg-white border border-[#e5e7e9] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 text-lg shrink-0">
                  ❄️
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#212121]">Rantai Dingin 0–4°C Terjamin</h4>
                  <p className="text-[11px] text-[#6d7588] mt-0.5 leading-normal">
                    Kualitas sayur petik subuh & tangkapan laut segar tahan hingga 14 hari lebih lama.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5e7e9] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#03ac0e] text-lg shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#212121]">Proteksi Fair Trade Anti-Ijon</h4>
                  <p className="text-[11px] text-[#6d7588] mt-0.5 leading-normal">
                    1.200+ petani & nelayan mandiri dengan timbangan IoT terkalibrasi dan pencairan T+0.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5e7e9] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 text-lg shrink-0">
                  🏪
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#212121]">450+ Titik Ambil Warung</h4>
                  <p className="text-[11px] text-[#6d7588] mt-0.5 leading-normal">
                    Jaringan warung tetangga sebagai drop-point resmi bebas biaya kirim radius jalan kaki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* POV 1: KONSUMEN STOREFRONT & CLICK-AND-COLLECT                */}
        {/* ══════════════════════════════════════════════════════════════ */}
        {activePov === 'customer' && (
          <>
            {(activeNavTab === 'for_you' || activeNavTab === 'flash_sale' || activeNavTab === 'sayur' || activeNavTab === 'bumbu' || activeNavTab === 'seafood' || activeNavTab === 'buah') && (
          <div className="space-y-4 sm:space-y-5">
            
            {/* Tokopedia Clean Promo Banner (Bahasa Ramah, Alami & Proporsional) */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#008f09] via-[#03ac0e] to-[#0eb519] rounded-2xl p-4 sm:p-5 md:py-4.5 md:px-6 text-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-1 max-w-xl">
                <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white leading-snug">
                  Belanja Sayur, Ikan & Buah Segar, Ambil di Warung Tetangga
                </h1>
                <p className="text-[11px] sm:text-xs text-emerald-50/90 font-normal leading-relaxed">
                  Langsung dari petani kebun dan nelayan pesisir lokal. Dipanen segar setiap pagi dengan jaminan harga hemat dan Rp 0 ongkos kirim.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-xs text-xs font-semibold text-white border border-white/25 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                  Rp 0 Bebas Ongkir
                </span>
              </div>
            </div>

            {/* Section Header */}
            <div id="katalog-section" className="flex items-center justify-between pt-2 pb-0.5 scroll-mt-36">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-semibold text-[#212121]">
                  {getCategoryTitle()}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200/70 text-[#6d7588] font-medium">
                  {filteredProducts.length} produk
                </span>
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#03ac0e] font-medium hover:underline outline-none cursor-pointer"
                >
                  Reset Pencarian
                </button>
              )}
            </div>

            {/* Empty State if search finds nothing */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-xl p-8 border border-[#e5e7e9] text-center space-y-3">
                <div className="text-4xl">🔍</div>
                <h3 className="font-semibold text-sm text-[#212121]">Produk Tidak Ditemukan</h3>
                <p className="text-xs text-[#6d7588]">Coba cari dengan kata kunci lain seperti cabai, sayur, ikan, atau buah.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-[#03ac0e] text-white text-xs font-medium rounded-lg outline-none cursor-pointer"
                >
                  Tampilkan Semua Produk
                </button>
              </div>
            )}

            {/* ── TOKOPEDIA 6-COLUMN GRID (MINIMALIST & CLEAN WITH SMOOTH FADE) ── */}
            <div key={activeNavTab + searchQuery} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3.5 animate-fadeIn">
              {filteredProducts.map((p) => {
                const qtyInCart = cart[p.id] || 0;
                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg border border-[#e5e7e9] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#03ac0e]/50 transition-all flex flex-col justify-between group cursor-pointer"
                    onClick={() => setSelectedTraceProduct(p)}
                  >
                    {/* Square Image Container with Real Photo */}
                    <div className="relative aspect-square bg-[#f8f9fa] overflow-hidden select-none">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/products/cabai.jpg';
                        }}
                      />

                      {/* Red Discount Tag Top-Left */}
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-xs bg-[#ff5722] text-white text-[10px] font-semibold shadow-xs">
                        {p.discountPercent}%
                      </span>

                      {/* Grade Pill Top-Right */}
                      <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-xs bg-emerald-100/90 backdrop-blur-2xs text-emerald-800 text-[9px] font-medium shadow-xs">
                        {p.grade}
                      </span>
                    </div>

                    {/* Details Area */}
                    <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1">
                      <div>
                        {/* Title 2-lines */}
                        <h3 className="text-xs text-[#212121] leading-snug line-clamp-2 font-normal group-hover:text-[#03ac0e] transition-colors">
                          {p.name}
                        </h3>

                        {/* Price */}
                        <div className="mt-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#212121] block leading-tight">
                            Rp{p.price.toLocaleString('id-ID')}
                          </span>
                          <div className="flex items-center gap-1 text-[10px]">
                            <span className="text-[#8d96aa] line-through font-normal">
                              Rp{p.originalPrice.toLocaleString('id-ID')}
                            </span>
                            <span className="text-[#ff5722] font-medium">
                              Hemat {p.discountPercent}%
                            </span>
                          </div>
                        </div>

                        {/* Rating & Sold */}
                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#6d7588] mt-1 font-normal">
                          <Star className="w-3 h-3 text-[#ffc400] fill-[#ffc400]" />
                          <span className="font-medium text-[#212121]">{p.rating}</span>
                          <span>•</span>
                          <span>{p.soldCount} terjual</span>
                        </div>

                        {/* City Location */}
                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#6d7588] mt-0.5 font-normal">
                          <ShieldCheck className="w-3 h-3 text-[#03ac0e] shrink-0" />
                          <span className="truncate">{p.city}</span>
                        </div>
                      </div>

                      {/* Add Button */}
                      <div className="pt-2 border-t border-[#f3f4f5]" onClick={(e) => e.stopPropagation()}>
                        {qtyInCart === 0 ? (
                          <button
                            onClick={(e) => handleAddToCart(p.id, e)}
                            className="w-full py-1.5 rounded-md border border-[#03ac0e] text-[#03ac0e] hover:bg-[#03ac0e] hover:text-white text-xs font-medium transition flex items-center justify-center gap-1 shadow-2xs outline-none"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            + Keranjang
                          </button>
                        ) : (
                          <div className="flex items-center justify-between bg-[#ebf5e9] p-1 rounded-md border border-[#03ac0e]/30">
                            <button
                              onClick={(e) => handleRemoveFromCart(p.id, e)}
                              className="w-6 h-6 rounded bg-white text-[#212121] hover:bg-slate-100 flex items-center justify-center font-medium text-xs outline-none"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-[#03ac0e]">{qtyInCart}</span>
                            <button
                              onClick={(e) => handleAddToCart(p.id, e)}
                              className="w-6 h-6 rounded bg-[#03ac0e] text-white hover:bg-[#02980c] flex items-center justify-center font-medium text-xs outline-none"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* VIEW 2: PESANAN SAYA & TIKET AMBIL (DIGITAL PASS)             */}
        {/* ══════════════════════════════════════════════════════════════ */}
        {activeNavTab === 'pesanan' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 border border-[#e5e7e9] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-base font-semibold text-[#212121]">
                  Tiket Pengambilan di Mitra Warung
                </h1>
                <p className="text-xs text-[#6d7588] mt-0.5 font-normal">
                  Tunjukkan 4-digit PIN atau Barcode ini kepada pemilik warung saat mengambil pesanan Anda.
                </p>
              </div>
              <button
                onClick={() => setActiveNavTab('for_you')}
                className="px-3.5 py-1.5 rounded-lg border border-[#03ac0e] text-[#03ac0e] text-xs font-medium hover:bg-[#ebf5e9] transition self-start sm:self-center outline-none"
              >
                ← Belanja Lagi
              </button>
            </div>

            <div className="space-y-3">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg border border-[#e5e7e9] shadow-xs overflow-hidden">
                  <div className="bg-[#f8f9fa] px-4 py-2 border-b border-[#e5e7e9] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#212121]">{order.id} • {order.date}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                      order.status === 'ready'
                        ? 'bg-[#ebf5e9] text-[#03ac0e] border-[#03ac0e]/30'
                        : 'bg-slate-100 text-slate-600 border-slate-300'
                    }`}>
                      {order.status === 'ready' ? 'Siap Diambil di Warung' : '✅ Selesai Diambil'}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2 flex-1 text-xs">
                      <span className="text-[11px] font-medium text-[#8d96aa] uppercase">Rincian Komoditas:</span>
                      {order.items.map((it: any, i: number) => (
                        <div key={i} className="flex justify-between text-slate-800 font-normal">
                          <span>{it.name} x{it.qty}</span>
                          <span className="font-semibold">Rp{(it.price * it.qty).toLocaleString('id-ID')}</span>
                        </div>
                      ))}
                      <div className="pt-2 border-t border-[#f3f4f5] text-[#6d7588]">
                        Titik Pengambilan: <span className="font-semibold text-[#212121]">{order.warung}</span>
                      </div>
                      <div className="text-[#6d7588]">
                        Jadwal Ambil: <span className="font-semibold text-[#03ac0e]">{order.pickupTime}</span>
                      </div>
                    </div>

                    <div className="w-full md:w-64 bg-[#ebf5e9] p-3.5 rounded-lg border border-[#03ac0e]/30 text-center flex flex-col justify-between shrink-0 space-y-2">
                      <div>
                        <span className="text-[10px] font-medium text-[#03ac0e] uppercase block">PIN PENGAMBILAN</span>
                        <span className="text-3xl font-mono font-bold text-[#03ac0e] tracking-widest block my-1">
                          {order.pin}
                        </span>
                      </div>

                      {/* Interactive QR / Barcode toggle */}
                      {activeQrOrderId === order.id ? (
                        <div className="bg-white p-2.5 rounded border border-[#03ac0e]/20 space-y-1">
                          <div className="w-24 h-24 mx-auto bg-slate-900 flex items-center justify-center text-white text-xs font-mono rounded">
                            [QR-{order.pin}]
                          </div>
                          <span className="text-[9px] text-slate-500 block">Pindai oleh Pemilik Warung</span>
                        </div>
                      ) : null}

                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setActiveQrOrderId(activeQrOrderId === order.id ? null : order.id)}
                          className="flex-1 py-1 rounded bg-white text-[#03ac0e] text-[11px] font-medium border border-[#03ac0e]/30 hover:bg-slate-50 outline-none"
                        >
                          {activeQrOrderId === order.id ? 'Tutup QR' : 'Tampilkan QR'}
                        </button>

                        {order.status === 'ready' && (
                          <button
                            onClick={() => simulateCollectOrder(order.id, order.pin)}
                            className="flex-1 py-1 rounded bg-[#03ac0e] text-white text-[11px] font-medium hover:bg-[#02980c] outline-none"
                          >
                            Simulasi Ambil
                          </button>
                        )}
                      </div>

                      <div className="pt-2 border-t border-[#03ac0e]/20 flex justify-between font-medium text-xs">
                        <span>Total:</span>
                        <span className="text-[#03ac0e] font-semibold">Rp{order.total.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )}

    {/* ══════════════════════════════════════════════════════════════ */}
    {/* POV 2: MITRA PETANI & NELAYAN (ANTI-IJON & COLD POD DESA)     */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {/* POV 2: MITRA PETANI & NELAYAN (ANTI-IJON & COLD POD DESA)     */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {activePov === 'producer' && (
      <div className="space-y-4 sm:space-y-5 animate-fadeIn">
        
        {/* SUBPAGE 1: RINGKASAN OPERASIONAL */}
        {producerTab === 'ringkasan' && (
          <div className="space-y-4 sm:space-y-5 animate-fadeIn">
            {/* Tokopedia Seller Profile Card */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border ${
                    producerType === 'petani' 
                      ? 'bg-[#ebf5e9] text-[#03ac0e] border-[#03ac0e]/20' 
                      : 'bg-blue-50 text-blue-600 border-blue-200'
                  }`}>
                    {producerType === 'petani' ? '🌱' : '🐟'}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-base sm:text-lg font-bold text-[#212121] leading-tight">
                        {producerType === 'petani' ? 'Pak Sugeng Widodo' : 'Pak H. Slamet Riyadi'}
                      </h1>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-[#03ac0e] inline-flex items-center gap-1 border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                      </span>
                    </div>
                    <p className="text-xs text-[#6d7588] mt-0.5 truncate">
                      {producerType === 'petani'
                        ? 'Kelompok Tani Makmur • Bumiaji, Batu'
                        : 'KUB Mina Barokah • Pesisir Muncar, Banyuwangi'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <button
                    onClick={() => setIsDepositModalOpen(true)}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer outline-none"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Setor Panen</span>
                  </button>
                  <button
                    onClick={handleFarmerWithdraw}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-white border border-[#03ac0e] text-[#03ac0e] hover:bg-[#ebf5e9] text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer outline-none"
                  >
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Tarik Saldo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Ringkasan Operasional Hari Ini */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#f3f4f5]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#03ac0e]" />
                  <h2 className="text-xs sm:text-sm font-bold text-[#212121]">Ringkasan Operasional Hari Ini</h2>
                </div>
                <span className="text-[11px] text-[#6d7588] hidden sm:inline">Sensor Timbangan & Cold Chain Aktif</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
                {/* Col 1 */}
                <div className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1">
                  <span className="text-[11px] text-[#6d7588] block">Setoran Hari Ini</span>
                  <span className="text-xl font-bold text-[#212121] block">
                    {producerType === 'petani' ? '120 Kg' : '95 Kg'}
                  </span>
                  <span className="text-[10px] text-[#03ac0e] font-semibold block">
                    {producerType === 'petani' ? '✓ Lolos Sensor QC Grade A' : '✓ Standar Ekspor Sashimi'}
                  </span>
                </div>

                {/* Col 2 */}
                <div className="p-3 rounded-lg bg-[#ebf5e9]/70 border border-[#03ac0e]/20 space-y-1">
                  <span className="text-[11px] text-[#6d7588] block">Saldo Siap Tarik (T+0)</span>
                  <span className="text-xl font-bold text-[#03ac0e] block">
                    Rp {farmerWalletBalance.toLocaleString('id-ID')}
                  </span>
                  <button
                    onClick={handleFarmerWithdraw}
                    className="text-[10px] text-[#03ac0e] font-bold hover:underline block cursor-pointer outline-none"
                  >
                    Tarik ke Rekening →
                  </button>
                </div>

                {/* Col 3 */}
                <div className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1">
                  <span className="text-[11px] text-[#6d7588] block">
                    {producerType === 'petani' ? 'Suhu Cold Pod' : 'Suhu Slurry Ice'}
                  </span>
                  <span className="text-xl font-bold text-[#212121] block">
                    {producerType === 'petani' ? '2.4°C' : '0.8°C'}
                  </span>
                  <span className="text-[10px] text-[#03ac0e] font-semibold block">
                    {producerType === 'petani' ? 'Optimal Bertenaga Surya' : 'Super Chilled Dermaga'}
                  </span>
                </div>

                {/* Col 4 */}
                <div className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1">
                  <span className="text-[11px] text-[#6d7588] block">Kapasitas Pod</span>
                  <span className="text-xl font-bold text-[#212121] block">
                    {producerType === 'petani' ? '84%' : '76%'}
                  </span>
                  <span className="text-[10px] text-[#6d7588] block">
                    {producerType === 'petani' ? 'Slot sisa 35 kg' : 'Slot sisa 45 kg'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Access Menu Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div
                onClick={() => {
                  setProducerTab('kuota');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#ebf5e9] text-[#03ac0e] flex items-center justify-center text-lg">
                    🎯
                  </div>
                  <span className="text-xs font-semibold text-[#03ac0e] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Buka <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Kuota Permintaan Masuk</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    {producerType === 'petani'
                      ? '4 komoditas sayur siap setor dengan jaminan kuota pesanan konsumen.'
                      : '4 komoditas ikan segar siap setor dengan standar harga pasti.'}
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  setProducerTab('setor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                    📦
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Buka <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Setoran & Riwayat Lot QC</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    Input hasil timbangan digital dan cek status suhu sensor cold chain pasca-panen.
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  setProducerTab('keuangan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-lg">
                    💰
                  </div>
                  <span className="text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Buka <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Keuangan & Simulasi Margin</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    Kalkulator transparansi pendapatan bersih tanpa potongan sepihak ijon.
                  </p>
                </div>
              </div>
            </div>

            {/* Cold Pod Telemetry Details */}
            <div className="p-4 rounded-xl bg-slate-50 border border-[#e5e7e9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6d7588]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  Lokasi Hub: <strong className="text-[#212121]">{producerType === 'petani' ? 'Cold Pod Desa Bumiaji #01' : 'Slurry Ice Hub Muncar #02'}</strong>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Jadwal Angkut Cold Van: <strong className="text-[#212121]">05:30 WIB Subuh</strong></span>
              </div>
              <div className="text-[#03ac0e] font-semibold">
                ✓ IoT Telemetri Berjalan Normal
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: KUOTA PERMINTAAN MASUK */}
        {producerTab === 'kuota' && (
          <div id="kuota-section" className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5e7e9]">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-[#212121]">
                    🎯 Alokasi Kuota Permintaan Masuk
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#03ac0e] text-[10px] font-bold">
                    Sinkron Pesanan Konsumen
                  </span>
                </div>
                <p className="text-xs text-[#6d7588] mt-0.5">
                  Kebutuhan panen segar dari ribuan konsumen PanenHub yang siap Anda setor langsung hari ini.
                </p>
              </div>

              <button
                onClick={() => setIsDepositModalOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-semibold transition self-start sm:self-center cursor-pointer outline-none flex items-center gap-1.5 shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Setor Komoditas</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {(producerType === 'petani'
                ? [
                    {
                      name: 'Cabai Rawit Merah Super',
                      origin: 'Bumiaji, Batu',
                      quota: 150,
                      fulfilled: 115,
                      panenHubPrice: 24500,
                      tengkulakPrice: 16000,
                      unit: 'kg',
                      icon: '🌶️',
                      status: 'Butuh 35 kg lagi'
                    },
                    {
                      name: 'Tomat Beef Hidroponik',
                      origin: 'Pujon, Malang',
                      quota: 200,
                      fulfilled: 180,
                      panenHubPrice: 14000,
                      tengkulakPrice: 8000,
                      unit: 'kg',
                      icon: '🍅',
                      status: 'Butuh 20 kg lagi'
                    },
                    {
                      name: 'Selada Romaine Bromo',
                      origin: 'Batu (1.100 mdpl)',
                      quota: 80,
                      fulfilled: 80,
                      panenHubPrice: 18000,
                      tengkulakPrice: 11000,
                      unit: 'kg',
                      icon: '🥬',
                      status: '✅ 100% Kuota Terpenuhi'
                    },
                    {
                      name: 'Wortel Baby Organik',
                      origin: 'Bumiaji, Batu',
                      quota: 120,
                      fulfilled: 95,
                      panenHubPrice: 16000,
                      tengkulakPrice: 9500,
                      unit: 'kg',
                      icon: '🥕',
                      status: 'Butuh 25 kg lagi'
                    }
                  ]
                : [
                    {
                      name: 'Ikan Tuna Sirip Kuning',
                      origin: 'Perairan Selat Bali',
                      quota: 120,
                      fulfilled: 85,
                      panenHubPrice: 38000,
                      tengkulakPrice: 25000,
                      unit: 'kg',
                      icon: '🐟',
                      status: 'Butuh 35 kg lagi'
                    },
                    {
                      name: 'Udang Vaname Pesisir Super',
                      origin: 'Tambak Muncar, Banyuwangi',
                      quota: 100,
                      fulfilled: 90,
                      panenHubPrice: 45000,
                      tengkulakPrice: 30000,
                      unit: 'kg',
                      icon: '🦐',
                      status: 'Butuh 10 kg lagi'
                    },
                    {
                      name: 'Ikan Cakalang Segar Muncar',
                      origin: 'Teluk Pangpang',
                      quota: 150,
                      fulfilled: 120,
                      panenHubPrice: 28000,
                      tengkulakPrice: 18000,
                      unit: 'kg',
                      icon: '🐟',
                      status: 'Butuh 30 kg lagi'
                    },
                    {
                      name: 'Fillet Kakap Merah Segar',
                      origin: 'Pesisir Grajagan',
                      quota: 80,
                      fulfilled: 80,
                      panenHubPrice: 52000,
                      tengkulakPrice: 35000,
                      unit: 'kg',
                      icon: '🐠',
                      status: '✅ 100% Kuota Terpenuhi'
                    }
                  ]
              ).map((item, idx) => {
                const pct = Math.min(100, Math.round((item.fulfilled / item.quota) * 100));
                const isFull = pct === 100;
                return (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9] space-y-3 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{item.icon}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isFull ? 'bg-emerald-100 text-[#03ac0e]' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-[#212121] leading-tight">{item.name}</h4>
                        <span className="text-[10px] text-[#8d96aa] block mt-0.5">{item.origin}</span>
                      </div>
                      
                      <div className="space-y-1 pt-1">
                        <div className="flex justify-between text-[11px] text-[#6d7588]">
                          <span>Terkumpul: <strong>{item.fulfilled} {item.unit}</strong></span>
                          <span>Target: {item.quota} {item.unit}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500 bg-[#03ac0e]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#e5e7e9] text-xs space-y-1">
                      <div className="flex justify-between text-[#212121]">
                        <span className="text-[#6d7588]">Harga PanenHub:</span>
                        <strong className="text-[#03ac0e]">Rp{item.panenHubPrice.toLocaleString('id-ID')}</strong>
                      </div>
                      <div className="flex justify-between text-[11px] text-[#8d96aa]">
                        <span>Harga Tengkulak:</span>
                        <span className="line-through">Rp{item.tengkulakPrice.toLocaleString('id-ID')}</span>
                      </div>
                      <button
                        onClick={() => {
                          setDepositCommodity(item.name);
                          setIsDepositModalOpen(true);
                        }}
                        className="w-full mt-1 py-1.5 rounded-md bg-white hover:bg-slate-100 border border-[#e5e7e9] text-xs font-medium text-[#212121] transition outline-none cursor-pointer"
                      >
                        + Setor Batch
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SUBPAGE 3: SETORAN & QC RIWAYAT */}
        {producerTab === 'setor' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#212121]">
                  📦 Setoran Komoditas & Timbangan IoT
                </h2>
                <p className="text-xs text-[#6d7588] mt-0.5">
                  Timbang komoditas di hub terdekat, sensor digital akan otomatis mencatat berat dan suhu masuk.
                </p>
              </div>
              <button
                onClick={() => setIsDepositModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer outline-none"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Setor Hasil Panen Baru</span>
              </button>
            </div>

            {/* Riwayat Penerimaan di Cold Pod Desa */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
                <h3 className="font-semibold text-xs sm:text-sm text-[#212121]">
                  {producerType === 'petani'
                    ? 'Riwayat Setoran Masuk Cold Pod Desa (Timbangan Digital Hari Ini)'
                    : 'Riwayat Setoran Masuk Slurry IcePod Muncar (Timbangan Digital Hari Ini)'}
                </h3>
                <span className="text-[11px] text-[#6d7588]">Tersinkronisasi Sensor Timbangan IoT</span>
              </div>

              <div className="overflow-x-auto rounded-lg border border-[#e5e7e9]">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#f8f9fa] border-b border-[#e5e7e9] text-[#6d7588]">
                      <th className="py-2.5 px-3 font-medium">No. Lot</th>
                      <th className="py-2.5 px-3 font-medium">Komoditas</th>
                      <th className="py-2.5 px-3 font-medium">Waktu Timbang</th>
                      <th className="py-2.5 px-3 font-medium">Berat (Kg)</th>
                      <th className="py-2.5 px-3 font-medium">Suhu Masuk</th>
                      <th className="py-2.5 px-3 font-medium">Status QC</th>
                      <th className="py-2.5 px-3 font-medium text-right">Nilai Diterima (T+0)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3f4f5]">
                    {producerType === 'petani' ? (
                      <>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-8821</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Cabai Rawit Merah Super</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">06:15 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">50.0 kg</td>
                          <td className="py-2.5 px-3 text-[#03ac0e] font-medium">2.6°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-[#03ac0e] text-[10px] font-semibold">Grade A</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 1.225.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-8820</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Tomat Beef Hidroponik</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">05:40 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">70.0 kg</td>
                          <td className="py-2.5 px-3 text-[#03ac0e] font-medium">3.1°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-[#03ac0e] text-[10px] font-semibold">Grade A</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 980.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-8818</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Selada Romaine Bromo</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">05:15 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">30.0 kg</td>
                          <td className="py-2.5 px-3 text-[#03ac0e] font-medium">2.8°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-[#03ac0e] text-[10px] font-semibold">Grade A Super</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 540.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-8816</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Wortel Baby Organik</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">Kemarin 17:30 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">45.0 kg</td>
                          <td className="py-2.5 px-3 text-[#03ac0e] font-medium">2.5°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-[#03ac0e] text-[10px] font-semibold">Grade A</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 720.000</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-9932</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Ikan Tuna Sirip Kuning</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">05:10 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">40.0 kg</td>
                          <td className="py-2.5 px-3 text-blue-600 font-medium">0.8°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-semibold">Sashimi Grade A</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 1.520.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-9931</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Udang Vaname Pesisir Super</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">04:45 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">25.0 kg</td>
                          <td className="py-2.5 px-3 text-blue-600 font-medium">0.6°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-semibold">Grade Ekspor</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 1.125.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-9929</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Ikan Cakalang Segar Muncar</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">04:15 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">50.0 kg</td>
                          <td className="py-2.5 px-3 text-blue-600 font-medium">0.7°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-[#03ac0e] text-[10px] font-semibold">Grade A</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 1.400.000</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[#6d7588]">#LOT-9927</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">Fillet Kakap Merah Segar</td>
                          <td className="py-2.5 px-3 text-[#6d7588]">Kemarin 18:20 WIB</td>
                          <td className="py-2.5 px-3 font-semibold text-[#212121]">20.0 kg</td>
                          <td className="py-2.5 px-3 text-blue-600 font-medium">0.5°C</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-semibold">Grade A+</span></td>
                          <td className="py-2.5 px-3 font-bold text-right text-[#03ac0e]">Rp 1.040.000</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 4: KEUANGAN & SIMULASI MARGIN */}
        {producerTab === 'keuangan' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Wallet Balance Card */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-[#6d7588] font-medium">Saldo Dompet T+0 (Siap Tarik)</span>
                <span className="text-2xl sm:text-3xl font-black text-[#03ac0e] block">
                  Rp {farmerWalletBalance.toLocaleString('id-ID')}
                </span>
                <p className="text-xs text-[#6d7588]">
                  Pencairan instan tanpa potongan ijon. Rekening tujuan: BRI (••••7812) a.n {producerType === 'petani' ? 'Sugeng Widodo' : 'H. Slamet'}
                </p>
              </div>
              <button
                onClick={handleFarmerWithdraw}
                className="px-5 py-2.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white font-semibold text-xs transition shadow-2xs cursor-pointer outline-none flex items-center justify-center gap-2 self-start sm:self-center"
              >
                <Wallet className="w-4 h-4" />
                <span>Tarik Saldo ke Rekening</span>
              </button>
            </div>

            {/* Financial Comparison: Kalkulator Nilai Tambah vs Sistem Ijon */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5e7e9]">
                <div>
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#03ac0e]" />
                    <h3 className="text-sm sm:text-base font-bold text-[#212121]">
                      {producerType === 'petani'
                        ? 'Kalkulator Transparansi & Nilai Tambah vs Sistem Ijon Desa'
                        : 'Kalkulator Transparansi & Nilai Tambah vs Pengepul Dermaga'}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    {producerType === 'petani'
                      ? 'Simulasi perbandingan pendapatan bersih panen cabai/sayur di PanenHub vs tengkulak keliling desa.'
                      : 'Simulasi perbandingan pendapatan bersih hasil tangkapan ikan di PanenHub vs tengkulak dermaga pelabuhan.'}
                  </p>
                </div>

                {/* Quick Weight Chips */}
                <div className="flex items-center gap-1.5 self-start sm:self-center">
                  <span className="text-xs text-[#6d7588] mr-1 hidden sm:inline">Pilih Bobot:</span>
                  {[25, 50, 100, 200].map((w) => (
                    <button
                      key={w}
                      onClick={() => setSimWeightKg(w)}
                      className={`px-2.5 py-1 rounded-md text-xs transition cursor-pointer outline-none ${
                        simWeightKg === w
                          ? 'bg-[#03ac0e] text-white shadow-2xs font-semibold'
                          : 'bg-[#f3f4f5] text-[#6d7588] hover:bg-slate-200'
                      }`}
                    >
                      {w} kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider */}
              <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e5e7e9] flex items-center gap-4">
                <span className="text-xs text-[#6d7588] whitespace-nowrap">Geser Bobot:</span>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={simWeightKg}
                  onChange={(e) => setSimWeightKg(Number(e.target.value))}
                  className="w-full accent-[#03ac0e] cursor-pointer"
                />
                <span className="text-xs font-bold text-[#03ac0e] bg-white px-2.5 py-1 rounded border border-[#03ac0e]/30 whitespace-nowrap shadow-2xs">
                  {simWeightKg} Kg
                </span>
              </div>

              {/* Clean Side-by-Side Financial Comparison Table */}
              <div className="overflow-x-auto rounded-lg border border-[#e5e7e9]">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#f8f9fa] border-b border-[#e5e7e9] text-[#212121]">
                      <th className="py-2.5 px-3.5 font-semibold">Indikator Transaksi</th>
                      <th className="py-2.5 px-3.5 font-semibold text-slate-700">
                        {producerType === 'petani' ? 'Tengkulak / Sistem Ijon' : 'Tengkulak Pengepul Dermaga'}
                      </th>
                      <th className="py-2.5 px-3.5 font-semibold text-[#03ac0e] bg-emerald-50/50">
                        {producerType === 'petani' ? 'PanenHub Fair Trade & Cold Pod' : 'PanenHub Fair Trade & Ice Pod'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7e9]">
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-[#212121]">Harga Beli Komoditas</td>
                      <td className="py-2.5 px-3.5 text-[#6d7588]">
                        {producerType === 'petani' ? 'Rp 16.000 / kg' : 'Rp 25.000 / kg'}
                      </td>
                      <td className="py-2.5 px-3.5 font-semibold text-[#03ac0e] bg-emerald-50/20">
                        {producerType === 'petani'
                          ? 'Rp 24.500 / kg (+53.1%)'
                          : 'Rp 38.000 / kg (+52.0%)'}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-[#212121]">Potongan Tara / Susut</td>
                      <td className="py-2.5 px-3.5 text-red-600">
                        {producerType === 'petani' ? 'Dipotong sepihak 10% – 15%' : 'Dipotong air/es 15% – 20% sepihak'}
                      </td>
                      <td className="py-2.5 px-3.5 font-semibold text-[#03ac0e] bg-emerald-50/20">
                        {producerType === 'petani'
                          ? '0% Potongan (Timbangan IoT Presisi)'
                          : '0% Potongan (Timbangan Slurry Digital IoT)'}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-[#212121]">Tempo Pembayaran</td>
                      <td className="py-2.5 px-3.5 text-[#6d7588]">
                        {producerType === 'petani' ? 'Tertahan 14 – 30 hari (nota kasbon)' : 'Tertahan berhari-hari menunggu lelang'}
                      </td>
                      <td className="py-2.5 px-3.5 font-semibold text-[#03ac0e] bg-emerald-50/20">
                        {producerType === 'petani' ? 'Cair Instan T+0 Hari Ini Juga' : 'Cair Instan T+0 saat kapal merapat'}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-[#212121]">Penyimpanan Pasca Panen</td>
                      <td className="py-2.5 px-3.5 text-[#6d7588]">
                        {producerType === 'petani'
                          ? 'Suhu ruang (risiko busuk ditanggung petani)'
                          : 'Es balok hancur (mudah susut & meleleh)'}
                      </td>
                      <td className="py-2.5 px-3.5 font-semibold text-[#03ac0e] bg-emerald-50/20">
                        {producerType === 'petani'
                          ? 'Cold Pod Desa 0–4°C Bertenaga Surya'
                          : 'Slurry IcePod Muncar 0.8°C Standar Sashimi'}
                      </td>
                    </tr>
                    <tr className="bg-[#f8f9fa] font-bold">
                      <td className="py-3 px-3.5 text-[#212121]">Total Pendapatan Bersih</td>
                      <td className="py-3 px-3.5 text-slate-700">
                        Rp {(simWeightKg * (producerType === 'petani' ? 16000 : 25000)).toLocaleString('id-ID')}
                      </td>
                      <td className="py-3 px-3.5 text-[#03ac0e] text-sm bg-emerald-100/60">
                        Rp {(simWeightKg * (producerType === 'petani' ? 24500 : 38000)).toLocaleString('id-ID')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Single Elegant Green Summary Banner */}
              <div className="p-3.5 rounded-xl bg-[#ebf5e9] border border-[#03ac0e]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#03ac0e] flex items-center gap-1.5">
                    <Banknote className="w-4 h-4" />
                    {producerType === 'petani'
                      ? 'Nilai Tambah Bersih yang Masuk ke Kantong Petani:'
                      : 'Nilai Tambah Bersih yang Masuk ke Kantong Nelayan:'}
                  </span>
                  <p className="text-[11px] text-[#4b5563]">
                    {producerType === 'petani'
                      ? 'Selisih margin Rp 8.500/kg sepenuhnya dinikmati petani lokal tanpa perantara ijon.'
                      : 'Selisih margin Rp 13.000/kg sepenuhnya dinikmati nelayan lokal tanpa potongan sepihak.'}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-lg font-black text-[#03ac0e] block">
                    +Rp {(simWeightKg * (producerType === 'petani' ? (24500 - 16000) : (38000 - 25000))).toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#03ac0e] text-white inline-block">
                    {producerType === 'petani' ? '+53.1% Lebih Menguntungkan' : '+52.0% Lebih Menguntungkan'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    )}

    {/* ══════════════════════════════════════════════════════════════ */}
    {/* POV 3: MITRA WARUNG (TITIK AMBIL TETANGGA & KOMISI TUNAI)      */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {/* POV 3: MITRA WARUNG (TITIK AMBIL TETANGGA & KOMISI TUNAI)      */}
    {/* ══════════════════════════════════════════════════════════════ */}
    {activePov === 'warung' && (
      <div className="space-y-4 sm:space-y-5 animate-fadeIn">
        
        {/* SUBPAGE 1: DASHBOARD / RINGKASAN WARUNG */}
        {warungTab === 'dashboard' && (
          <div className="space-y-4 sm:space-y-5 animate-fadeIn">
            {/* Tokopedia Mitra Store Overview Card */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ebf5e9] text-[#03ac0e] flex items-center justify-center text-xl shrink-0 border border-[#03ac0e]/20">
                    🏪
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-base sm:text-lg font-bold text-[#212121] leading-tight">
                        Warung Bu Siti
                      </h1>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-[#03ac0e] inline-flex items-center gap-1 border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3" /> Mitra Resmi #042
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-medium">
                        Aktif
                      </span>
                    </div>
                    <p className="text-xs text-[#6d7588] mt-0.5 truncate">
                      Tebet Timur Raya No. 14, Jaksel • Cold Van Drop 06:45 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <button
                    onClick={() => {
                      setWarungTab('validasi');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer outline-none"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Validasi PIN</span>
                  </button>
                  <button
                    onClick={() => {
                      setWarungTab('komisi');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-white border border-[#03ac0e] text-[#03ac0e] hover:bg-[#ebf5e9] text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer outline-none"
                  >
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Saldo Komisi</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Stat Columns Tokopedia Mitra */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#f3f4f5]">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#03ac0e]" />
                  <h2 className="text-xs sm:text-sm font-bold text-[#212121]">Status Operasional Drop-Point</h2>
                </div>
                <span className="text-[11px] text-[#6d7588] hidden sm:inline">Update Real-time</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
                <div
                  onClick={() => {
                    setWarungTab('rak');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1 hover:border-[#03ac0e] transition cursor-pointer"
                >
                  <span className="text-[11px] text-[#6d7588] block">Paket Siap di Rak</span>
                  <span className="text-xl font-bold text-[#212121] block">
                    {orders.filter(o => o.status === 'ready').length} Paket
                  </span>
                  <span className="text-[10px] text-[#03ac0e] font-semibold block">Menunggu diambil warga →</span>
                </div>

                <div
                  onClick={() => {
                    setWarungTab('rak');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1 hover:border-[#03ac0e] transition cursor-pointer"
                >
                  <span className="text-[11px] text-[#6d7588] block">Paket Selesai</span>
                  <span className="text-xl font-bold text-[#03ac0e] block">
                    {orders.filter(o => o.status === 'collected').length} Paket
                  </span>
                  <span className="text-[10px] text-[#6d7588] block">Hari ini oleh warga sekitar</span>
                </div>

                <div
                  onClick={() => {
                    setWarungTab('komisi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 rounded-lg bg-[#ebf5e9]/70 border border-[#03ac0e]/20 space-y-1 hover:border-[#03ac0e] transition cursor-pointer"
                >
                  <span className="text-[11px] text-[#6d7588] block">Saldo Komisi</span>
                  <span className="text-xl font-bold text-[#03ac0e] block">
                    Rp {warungBalance.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] text-[#03ac0e] font-semibold block">+Rp 2.000 / paket selesai →</span>
                </div>

                <div className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9]/60 space-y-1">
                  <span className="text-[11px] text-[#6d7588] block">Rating Pelayanan</span>
                  <span className="text-xl font-bold text-amber-500 block">4.9 / 5.0 ⭐</span>
                  <span className="text-[10px] text-[#6d7588] block">Sangat ramah & tepat waktu</span>
                </div>
              </div>
            </div>

            {/* Quick Access Menu Cards for Warung */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div
                onClick={() => {
                  setWarungTab('validasi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#ebf5e9] text-[#03ac0e] flex items-center justify-center text-lg">
                    🏷️
                  </div>
                  <span className="text-xs font-semibold text-[#03ac0e] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Buka Kasir <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Mesin Kasir: Validasi PIN</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    Minta 4 digit PIN dari konsumen saat serah terima paket sayur dan ikan segar.
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  setWarungTab('rak');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                    📦
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Cek Rak ({orders.filter(o => o.status === 'ready').length}) <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Inventori Rak Paket</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    Lihat daftar seluruh paket pesanan yang tersimpan di rak dingin warung.
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  setWarungTab('komisi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-white border border-[#e5e7e9] hover:border-[#03ac0e] hover:shadow-xs transition cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#03ac0e] flex items-center justify-center text-lg">
                    💰
                  </div>
                  <span className="text-xs font-semibold text-[#03ac0e] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Rincian Saldo <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212121]">Komisi & Tarik Saldo</h3>
                  <p className="text-xs text-[#6d7588] mt-0.5">
                    Saldo komisi Rp {warungBalance.toLocaleString('id-ID')} siap cair ke rekening bank Anda kapan saja.
                  </p>
                </div>
              </div>
            </div>

            {/* Drop-Point Workflow Guide */}
            <div className="p-4 rounded-xl bg-slate-50 border border-[#e5e7e9] space-y-2">
              <h4 className="text-xs font-bold text-[#212121] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#03ac0e]" />
                <span>Alur Kerja Drop-Point Harian:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#6d7588]">
                <div className="p-2.5 rounded-lg bg-white border border-[#e5e7e9]/60">
                  <span className="font-bold text-[#212121] block">1. Drop Subuh (06:45)</span>
                  <span>Armada Cold Van mengantar paket titipan warga ke warung Anda.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#e5e7e9]/60">
                  <span className="font-bold text-[#212121] block">2. Input PIN Pembeli</span>
                  <span>Minta 4 digit PIN di aplikasi pembeli dan tekan tombol validasi.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#e5e7e9]/60">
                  <span className="font-bold text-[#03ac0e] block">3. Komisi Masuk Instan</span>
                  <span>Rp 2.000 tunai langsung bertambah ke saldo dompet warung Anda.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: MESIN KASIR & VALIDASI PIN */}
        {warungTab === 'validasi' && (
          <div className="space-y-4 animate-fadeIn">
            <div id="pin-input-section" className="bg-white rounded-xl p-4 sm:p-6 border border-[#e5e7e9] shadow-2xs space-y-5">
              <div className="space-y-1 pb-3 border-b border-[#e5e7e9]">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-[#03ac0e]" />
                  <h2 className="font-bold text-base sm:text-lg text-[#212121]">
                    Mesin Kasir: Validasi PIN Pengambilan Konsumen
                  </h2>
                </div>
                <p className="text-xs text-[#6d7588]">
                  Minta 4 digit PIN yang tertera pada aplikasi PanenHub konsumen saat mengambil belanjaan di warung.
                </p>
              </div>

              {/* PIN Screen & Input */}
              <div className="max-w-md mx-auto space-y-4 text-center">
                <div className="space-y-2">
                  <span className="text-xs text-[#6d7588] font-medium block">Nomor PIN Pembeli</span>
                  <div className="flex items-center justify-center gap-2">
                    {[0, 1, 2, 3].map((idx) => {
                      const digit = inputWarungPin[idx] || '';
                      return (
                        <div
                          key={idx}
                          className={`w-14 h-16 rounded-xl border-2 flex items-center justify-center text-3xl font-mono font-black transition-all ${
                            digit
                              ? 'border-[#03ac0e] bg-emerald-50 text-[#03ac0e] shadow-xs'
                              : 'border-slate-200 bg-[#f8f9fa] text-slate-400'
                          }`}
                        >
                          {digit || '•'}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Touch Numpad */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 max-w-xs mx-auto">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((k) => (
                    <button
                      key={k}
                      onClick={() => {
                        if (k === 'C') {
                          setInputWarungPin('');
                        } else if (k === '⌫') {
                          setInputWarungPin(prev => prev.slice(0, -1));
                        } else {
                          setInputWarungPin(prev => (prev.length < 4 ? prev + k : prev));
                        }
                      }}
                      className={`h-12 rounded-xl text-base sm:text-lg font-bold transition flex items-center justify-center cursor-pointer outline-none select-none shadow-2xs ${
                        k === 'C'
                          ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                          : k === '⌫'
                          ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                          : 'bg-white hover:bg-slate-50 text-[#212121] border border-[#e5e7e9]'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleValidateWarungPin()}
                  disabled={inputWarungPin.length < 4}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition shadow-2xs flex items-center justify-center gap-2 cursor-pointer outline-none ${
                    inputWarungPin.length === 4
                      ? 'bg-[#03ac0e] hover:bg-[#02980c] text-white shadow-xs'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Verifikasi & Serahkan Paket (+Rp 2.000)</span>
                </button>

                {/* Quick Helper Button to test auto-fill */}
                {orders.find(o => o.status === 'ready') && (
                  <button
                    onClick={() => {
                      const samplePin = orders.find(o => o.status === 'ready')?.pin || '';
                      setInputWarungPin(samplePin);
                    }}
                    className="w-full py-2 rounded-lg bg-[#f3f4f5] hover:bg-slate-200 text-[#6d7588] text-xs font-medium transition cursor-pointer outline-none"
                  >
                    💡 Test Auto-fill PIN: <strong>{orders.find(o => o.status === 'ready')?.pin}</strong>
                  </button>
                )}

                {/* Feedback Banner */}
                {warungFeedback && (
                  <div className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2 text-left animate-fadeIn ${
                    warungFeedback.includes('VALID')
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-red-50 text-red-800 border border-red-300'
                  }`}>
                    <span>{warungFeedback}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 3: INVENTORI RAK PAKET */}
        {warungTab === 'rak' && (
          <div id="rak-paket-section" className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#e5e7e9]">
              <div>
                <h2 className="font-bold text-sm sm:text-base text-[#212121]">
                  Daftar Rak Paket Pesanan Konsumen
                </h2>
                <p className="text-[11px] text-[#6d7588]">Tersimpan di rak pendingin warung, siap diserahkan ke pembeli</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[#f3f4f5] rounded-lg border border-[#e5e7e9] text-xs self-start sm:self-center">
                <button
                  onClick={() => setWarungRakFilter('all')}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer outline-none ${
                    warungRakFilter === 'all' ? 'bg-white text-[#212121] font-bold shadow-2xs' : 'text-[#6d7588]'
                  }`}
                >
                  Semua ({orders.length})
                </button>
                <button
                  onClick={() => setWarungRakFilter('ready')}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer outline-none ${
                    warungRakFilter === 'ready' ? 'bg-white text-[#03ac0e] font-bold shadow-2xs' : 'text-[#6d7588]'
                  }`}
                >
                  Siap Diambil ({orders.filter(o => o.status === 'ready').length})
                </button>
                <button
                  onClick={() => setWarungRakFilter('collected')}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer outline-none ${
                    warungRakFilter === 'collected' ? 'bg-white text-slate-700 font-bold shadow-2xs' : 'text-[#6d7588]'
                  }`}
                >
                  Selesai ({orders.filter(o => o.status === 'collected').length})
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              {orders
                .filter(o => {
                  if (warungRakFilter === 'ready') return o.status === 'ready';
                  if (warungRakFilter === 'collected') return o.status === 'collected';
                  return true;
                })
                .map((o) => (
                  <div
                    key={o.id}
                    className={`p-3.5 rounded-lg border transition flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      o.status === 'ready'
                        ? 'bg-white border-[#e5e7e9] hover:border-[#03ac0e]'
                        : 'bg-slate-50 border-slate-200 opacity-75'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#212121]">{o.id}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          o.status === 'ready'
                            ? 'bg-emerald-100 text-[#03ac0e]'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {o.status === 'ready' ? 'Siap di Rak Ambil' : '✅ Selesai Diambil'}
                        </span>
                      </div>
                      <p className="text-xs text-[#6d7588]">
                        Isi Paket: {o.items.map((it: any) => `${it.name} (${it.qty})`).join(', ')}
                      </p>
                      <span className="text-[11px] text-[#8d96aa]">
                        Jadwal Pengambilan: {o.pickupTime} • Titik: {o.warung}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <span className="text-[10px] text-[#8d96aa] block uppercase">PIN Pelanggan</span>
                        <span className="font-mono font-bold text-sm sm:text-base text-[#212121]">{o.pin}</span>
                      </div>

                      {o.status === 'ready' && (
                        <button
                          onClick={() => {
                            handleValidateWarungPin(o.pin);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white text-xs font-semibold transition cursor-pointer outline-none"
                        >
                          Serahkan Paket
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 4: KOMISI & PENARIKAN SALDO */}
        {warungTab === 'komisi' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Commission Balance Card */}
            <div className="bg-white rounded-xl border border-[#e5e7e9] p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-[#6d7588] font-medium">Total Saldo Komisi Warung (Siap Cair)</span>
                <span className="text-2xl sm:text-3xl font-black text-[#03ac0e] block">
                  Rp {warungBalance.toLocaleString('id-ID')}
                </span>
                <p className="text-xs text-[#6d7588]">
                  +Rp 2.000 untuk setiap paket yang berhasil diserahkan • Rekening: BCA (••••8920) a.n Siti Aminah
                </p>
              </div>
              <button
                onClick={handleWarungWithdraw}
                className="px-5 py-2.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white font-semibold text-xs transition shadow-2xs cursor-pointer outline-none flex items-center justify-center gap-2 self-start sm:self-center"
              >
                <Wallet className="w-4 h-4" />
                <span>Tarik Komisi ke Rekening</span>
              </button>
            </div>

            {/* Riwayat Penerimaan Komisi */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e5e7e9] shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
                <h3 className="font-semibold text-xs sm:text-sm text-[#212121]">
                  Riwayat Komisi Masuk
                </h3>
                <span className="text-[11px] text-[#6d7588]">Rp 2.000 / paket selesai</span>
              </div>

              <div className="divide-y divide-[#f3f4f5] text-xs">
                {orders.filter(o => o.status === 'collected').map(o => (
                  <div key={o.id} className="py-3 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#212121]">Penyerahan Paket {o.id}</span>
                      <p className="text-[11px] text-[#6d7588]">PIN: {o.pin} • Pelanggan telah mengambil belanjaan</p>
                    </div>
                    <span className="font-bold text-[#03ac0e] text-sm">+Rp 2.000</span>
                  </div>
                ))}
                <div className="py-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#212121]">Penyerahan Paket #PNH-INV-2026092789</span>
                    <p className="text-[11px] text-[#6d7588]">Kemarin 17:15 WIB • Pelanggan telah mengambil belanjaan</p>
                  </div>
                  <span className="font-bold text-[#03ac0e] text-sm">+Rp 2.000</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#212121]">Penyerahan Paket #PNH-INV-2026092742</span>
                    <p className="text-[11px] text-[#6d7588]">Kemarin 12:40 WIB • Pelanggan telah mengambil belanjaan</p>
                  </div>
                  <span className="font-bold text-[#03ac0e] text-sm">+Rp 2.000</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#212121]">Penyerahan Paket #PNH-INV-2026092611</span>
                    <p className="text-[11px] text-[#6d7588]">26 Sept 2026 • Pelanggan telah mengambil belanjaan</p>
                  </div>
                  <span className="font-bold text-[#03ac0e] text-sm">+Rp 2.000</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    )}

  </main>

      {/* ── TOKOPEDIA CART DRAWER ── */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-60 flex items-end sm:items-stretch sm:justify-end bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-none h-[88vh] sm:h-full shadow-2xl flex flex-col justify-between p-4 sm:p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e7e9]">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#03ac0e]" />
                  <h3 className="font-semibold text-base text-[#212121]">Keranjang Belanja</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#f3f4f5] text-[#6d7588] flex items-center justify-center hover:bg-slate-200 transition outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-3 space-y-2.5 max-h-64 overflow-y-auto">
                {Object.keys(cart).length === 0 ? (
                  <div className="text-center py-10 text-xs text-[#6d7588] space-y-2">
                    <div className="text-3xl">🧺</div>
                    <p>Keranjang Anda masih kosong.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-3 py-1.5 rounded-lg bg-[#03ac0e] text-white font-medium outline-none"
                    >
                      Mulai Belanja
                    </button>
                  </div>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const item = PRODUCTS.find(p => p.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="p-2.5 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-[#e5e7e9]">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-[#212121] leading-tight">{item.name}</h4>
                            <span className="text-xs font-semibold text-[#03ac0e]">Rp{item.price.toLocaleString('id-ID')}</span>
                            <span className="text-[10px] text-[#8d96aa] block">/ {item.weightLabel}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border border-[#e5e7e9]">
                          <button onClick={(e) => handleRemoveFromCart(id, e)} className="text-[#6d7588] font-medium text-xs p-1 outline-none">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold text-[#212121] w-4 text-center">{qty}</span>
                          <button onClick={(e) => handleAddToCart(id, e)} className="text-[#03ac0e] font-medium text-xs p-1 outline-none">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {Object.keys(cart).length > 0 && (
                <div className="space-y-2 pt-3 border-t border-[#e5e7e9]">
                  <label className="block text-xs font-semibold text-[#212121]">Pilihan Metode Pengambilan:</label>
                  
                  <div
                    onClick={() => setDeliveryMethod('click_collect')}
                    className={`p-2.5 rounded-lg border cursor-pointer transition ${
                      deliveryMethod === 'click_collect' ? 'bg-[#ebf5e9] border-[#03ac0e]' : 'bg-[#f8f9fa] border-[#e5e7e9]'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <strong className="text-[#212121] font-semibold block">Ambil di Mitra Warung</strong>
                        <span className="text-[11px] text-[#6d7588]">{selectedLocation.name}</span>
                      </div>
                      <span className="text-[10px] font-semibold bg-[#03ac0e] text-white px-2 py-0.5 rounded">GRATIS ONGKIR</span>
                    </div>
                  </div>

                  <div
                    onClick={() => setDeliveryMethod('direct_doorstep')}
                    className={`p-2.5 rounded-lg border cursor-pointer transition ${
                      deliveryMethod === 'direct_doorstep' ? 'bg-[#fff4e5] border-[#ff9800]' : 'bg-[#f8f9fa] border-[#e5e7e9]'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <strong className="text-[#212121] font-semibold block">Antar ke Rumah</strong>
                        <span className="text-[11px] text-[#6d7588]">Armada Cold Van</span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#ff9800] bg-orange-100 px-2 py-0.5 rounded">MOQ Rp 100rb</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {Object.keys(cart).length > 0 && (
              <div className="pt-3 border-t border-[#e5e7e9] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-normal text-[#6d7588]">Total Tagihan:</span>
                  <span className="text-[#03ac0e] text-base font-semibold">
                    Rp{(calculateSubtotal() + (deliveryMethod === 'direct_doorstep' ? 10000 : 0)).toLocaleString('id-ID')}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-2.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white font-medium text-xs transition shadow-xs outline-none"
                >
                  Beli & Terbitkan Tiket Ambil
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL 1: PRODUCT TRACEABILITY & DETAIL ── */}
      {selectedTraceProduct && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setSelectedTraceProduct(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-4 sm:p-5 shadow-2xl border border-[#e5e7e9] space-y-3.5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-[#e5e7e9] shadow-xs">
                  <img src={selectedTraceProduct.image} alt={selectedTraceProduct.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#212121] leading-tight">{selectedTraceProduct.name}</h3>
                  <span className="text-[10px] text-[#03ac0e] font-mono">{selectedTraceProduct.batchId}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTraceProduct(null)}
                className="w-7 h-7 rounded-full bg-[#f3f4f5] text-[#6d7588] flex items-center justify-center hover:bg-slate-200 outline-none"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#6d7588] leading-relaxed font-normal">
              {selectedTraceProduct.description}
            </p>

            <div className="p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e7e9] grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#8d96aa] block text-[10px] font-medium">PETANI & DESA</span>
                <strong className="text-[#212121] font-semibold block">{selectedTraceProduct.farmer}</strong>
                <span className="text-[#6d7588] text-[10px] font-normal">{selectedTraceProduct.city}</span>
              </div>
              <div>
                <span className="text-[#8d96aa] block text-[10px] font-medium">WAKTU PANEN</span>
                <strong className="text-[#212121] font-semibold block">{selectedTraceProduct.harvestTime}</strong>
                <span className="text-[#03ac0e] text-[10px] font-medium">Cold Storage {selectedTraceProduct.temperature}</span>
              </div>
            </div>

            {/* Cold Chain Pipeline Timeline */}
            <div className="space-y-1.5 bg-[#ebf5e9]/50 p-3 rounded-lg border border-[#03ac0e]/20 text-[11px]">
              <span className="font-semibold text-[#03ac0e] block">Rantai Dingin Farm-to-Fork Terverifikasi:</span>
              <div className="flex items-center justify-between text-slate-700 pt-1 font-normal">
                <span>🌱 Panen Subuh</span>
                <span>➔</span>
                <span>❄️ Pod (2.4°C)</span>
                <span>➔</span>
                <span>🚚 Cold Van</span>
                <span>➔</span>
                <span>🏠 Warung</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e5e7e9] flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#8d96aa] block">Harga:</span>
                <strong className="text-base font-semibold text-[#03ac0e]">
                  Rp{selectedTraceProduct.price.toLocaleString('id-ID')}
                </strong>
                <span className="text-[10px] text-[#8d96aa]"> / {selectedTraceProduct.weightLabel}</span>
              </div>

              <button
                onClick={() => {
                  handleAddToCart(selectedTraceProduct.id);
                  setSelectedTraceProduct(null);
                }}
                className="px-4 py-2 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white font-medium text-xs flex items-center gap-1.5 transition outline-none"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 2: WARUNG PICKUP LOCATION SELECTOR ── */}
      {isLocationModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsLocationModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-xl p-4 sm:p-5 shadow-2xl border border-[#e5e7e9] space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
              <div>
                <h3 className="font-semibold text-sm text-[#212121]">Pilih Titik Mitra Warung</h3>
                <span className="text-[11px] text-[#6d7588]">Ambil belanjaan bebas ongkir di warung tetangga</span>
              </div>
              <button onClick={() => setIsLocationModalOpen(false)} className="outline-none cursor-pointer">
                <X className="w-4 h-4 text-[#6d7588]" />
              </button>
            </div>

            <div className="space-y-2 text-xs max-h-72 overflow-y-auto">
              {[
                { name: 'Warung Bu Siti', address: 'Jl. Rungkut Asri Timur No. 12, Surabaya', distance: '120m dari rumah' },
                { name: 'Warung Madura Berkah', address: 'Jl. Pandugo II No. 8, Surabaya', distance: '350m dari rumah' },
                { name: 'Warung Barokah Bu Ani', address: 'Jl. Raya Rungkut Harapan No. 4, Surabaya', distance: '500m dari rumah' },
                { name: 'Warung Pak Slamet', address: 'Jl. Medokan Asri Barat No. 21, Surabaya', distance: '800m dari rumah' },
                { name: 'Warung Kelontong Pojok', address: 'Jl. Wonorejo Indah No. 15, Surabaya', distance: '1.1km dari rumah' }
              ].map((loc, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsLocationModalOpen(false);
                    showToast(`📍 Titik ambil diganti ke "${loc.name}"`);
                  }}
                  className={`p-3 rounded-lg border cursor-pointer transition ${
                    selectedLocation.name === loc.name ? 'bg-[#ebf5e9] border-[#03ac0e]' : 'bg-[#f8f9fa] border-[#e5e7e9] hover:bg-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <strong className="text-[#212121] font-semibold block">{loc.name}</strong>
                    {selectedLocation.name === loc.name && (
                      <Check className="w-3.5 h-3.5 text-[#03ac0e]" />
                    )}
                  </div>
                  <p className="text-[#6d7588] text-[11px] font-normal">{loc.address}</p>
                  <span className="text-[#03ac0e] font-medium text-[10px] block mt-0.5">{loc.distance} • Gratis Ongkir</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 3: DOWNLOAD APP (PWA INSTALLER) ── */}
      {isAppModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsAppModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-xl p-5 shadow-2xl border border-[#e5e7e9] space-y-3.5 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={() => setIsAppModalOpen(false)} className="outline-none">
                <X className="w-4 h-4 text-[#6d7588]" />
              </button>
            </div>
            
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-[#02980c] to-[#10b981] flex items-center justify-center text-white text-2xl shadow-md p-2">
              <PanenHubLogo size="lg" showText={false} />
            </div>

            <h3 className="font-semibold text-base text-[#212121]">Aplikasi Mobile PanenHub</h3>
            <p className="text-xs text-[#6d7588] font-normal">
              Pesan bahan pangan segar langsung petik subuh lebih cepat lewat smartphone Anda tanpa biaya ongkir.
            </p>

            <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e5e7e9] text-left text-xs space-y-1.5 font-normal">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#03ac0e]" />
                <span>Notifikasi otomatis saat panen tiba di warung</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#03ac0e]" />
                <span>Buka Barcode & PIN tanpa koneksi internet</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#03ac0e]" />
                <span>Promo eksklusif Flash Sale Panen Pagi</span>
              </div>
            </div>

            <button
              onClick={() => {
                showToast('📱 Aplikasi PanenHub PWA berhasil dipasang di layar utama!');
                setIsAppModalOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-[#03ac0e] hover:bg-[#02980c] text-white font-medium text-xs transition outline-none"
            >
              Pasang Shortcut Web App (Gratis)
            </button>
          </div>
        </div>
      )}

      {/* ── MODAL 4: MITRA WARUNG NETWORK ── */}
      {isWarungModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsWarungModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl border border-[#e5e7e9] space-y-3.5 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-[#03ac0e]" />
                <h3 className="font-semibold text-sm text-[#212121]">Jaringan Mitra Warung PanenHub</h3>
              </div>
              <button onClick={() => setIsWarungModalOpen(false)} className="outline-none cursor-pointer">
                <X className="w-4 h-4 text-[#6d7588]" />
              </button>
            </div>

            <p className="text-xs text-[#6d7588] font-normal leading-relaxed">
              PanenHub memberdayakan warung kelontong tradisional menjadi <em>Hyper-Local Pick-up Hub</em>. Warung memperoleh komisi paket dan peningkatan traffic pembeli.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-[#ebf5e9] border border-[#03ac0e]/20 text-center">
                <strong className="text-[#03ac0e] text-base font-semibold block">+Rp 2.000</strong>
                <span className="text-[10px] text-slate-600 font-normal">Komisi per paket yang diambil</span>
              </div>
              <div className="p-3 rounded-lg bg-[#ebf5e9] border border-[#03ac0e]/20 text-center">
                <strong className="text-[#03ac0e] text-base font-semibold block">+35% Omzet</strong>
                <span className="text-[10px] text-slate-600 font-normal">Cross-selling sembako di warung</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-medium text-[#8d96aa] uppercase block">Daftarkan Warung Anda:</span>
              <input
                type="text"
                placeholder="Nama Warung Anda (Contoh: Warung Barokah)"
                className="w-full px-3 py-2 text-xs border border-[#e5e7e9] rounded-lg focus:outline-none focus:border-[#03ac0e] font-normal"
              />
              <button
                onClick={() => {
                  showToast('📝 Pendaftaran warung terkirim! Tim PanenHub akan survei lokasi.');
                  setIsWarungModalOpen(false);
                }}
                className="w-full py-2 rounded-lg bg-[#03ac0e] text-white text-xs font-medium hover:bg-[#02980c] outline-none cursor-pointer"
              >
                Kirim Pengajuan Jadi Mitra
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 5: ABOUT PANENHUB ── */}
      {isAboutModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl border border-[#e5e7e9] space-y-3.5 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
              <div>
                <span className="text-[10px] font-medium text-[#03ac0e] uppercase">Startup Komoditas Pangan Segar</span>
                <h3 className="font-semibold text-base text-[#212121]">Tentang PanenHub</h3>
              </div>
              <button onClick={() => setIsAboutModalOpen(false)} className="outline-none cursor-pointer">
                <X className="w-4 h-4 text-[#6d7588]" />
              </button>
            </div>

            <div className="text-xs text-[#4b5563] space-y-3 font-normal leading-relaxed">
              <p>
                <strong>PanenHub</strong> adalah platform e-grocery komunitas yang menghubungkan petani desa dan nelayan lokal langsung dengan keluarga di perkotaan melalui jaringan Mitra Warung tetangga.
              </p>

              <div className="space-y-2.5 bg-[#f8f9fa] p-3 rounded-lg border border-[#e5e7e9]">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">🌱</span>
                  <div>
                    <strong className="text-[#212121] block">Petani & Nelayan Lokal</strong>
                    <span>Komoditas dibeli langsung dengan harga adil dan transparan tanpa perantara tengkulak berlapis.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">❄️</span>
                  <div>
                    <strong className="text-[#212121] block">Rantai Dingin 0-4°C</strong>
                    <span>Penyimpanan cold storage langsung di sentra panen menjaga kesegaran sayur dan seafood tetap optimal sampai ke tangan konsumen.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">🏪</span>
                  <div>
                    <strong className="text-[#212121] block">Bebas Ongkir di Warung Tetangga</strong>
                    <span>Pelanggan mengambil pesanan di warung sekitar rumah tanpa biaya kirim, sekaligus mendorong perputaran ekonomi warung lokal.</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#6b7280]">
                Misi kami adalah mewujudkan rantai pasok pangan yang adil, mengurangi sampah makanan (food waste), dan menghadirkan pangan segar berkualitas tinggi bagi semua keluarga Indonesia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 6: HELP & FAQ ── */}
      {isHelpModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsHelpModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl p-5 shadow-2xl border border-[#e5e7e9] space-y-3 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e7e9]">
              <h3 className="font-semibold text-sm text-[#212121]">Pusat Bantuan & FAQ</h3>
              <button onClick={() => setIsHelpModalOpen(false)} className="outline-none cursor-pointer">
                <X className="w-4 h-4 text-[#6d7588]" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs font-normal">
              <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e5e7e9]">
                <strong className="text-[#212121] font-semibold block">1. Kapan pesanan saya bisa diambil di warung?</strong>
                <p className="text-[#6d7588] mt-1">Pesanan yang dipesan hari ini dipanen pada subuh besok dan tiba di Mitra Warung pilihan Anda pukul 07:30 WIB pagi.</p>
              </div>

              <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e5e7e9]">
                <strong className="text-[#212121] font-semibold block">2. Apakah benar gratis ongkir tanpa minimum belanja?</strong>
                <p className="text-[#6d7588] mt-1">Ya! Opsi "Ambil di Mitra Warung" selalu Rp 0 bebas biaya pengiriman karena diantar sekaligus menggunakan sistem batching.</p>
              </div>

              <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e5e7e9]">
                <strong className="text-[#212121] font-semibold block">3. Bagaimana jika kualitas sayur atau ikan tidak segar?</strong>
                <p className="text-[#6d7588] mt-1">Kami memberikan garansi 100% ganti baru atau uang kembali jika suhu cold chain rusak atau komoditas tidak segar saat diterima.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 7: SETOR HASIL PANEN KE COLD POD DESA ── */}
      {isDepositModalOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsDepositModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl p-5 shadow-2xl border border-[#e5e7e9] space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e7e9]">
              <div>
                <span className="text-[10px] font-bold text-[#03ac0e] uppercase tracking-wider block">
                  First-Mile Cold Pod Desa
                </span>
                <h3 className="font-bold text-base text-[#212121]">
                  {producerType === 'petani' ? 'Setor Komoditas Hasil Panen' : 'Setor Hasil Tangkapan Laut'}
                </h3>
              </div>
              <button
                onClick={() => setIsDepositModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f3f4f5] text-[#6d7588] flex items-center justify-center hover:bg-slate-200 transition outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Commodity Selector */}
              <div className="space-y-1.5">
                <label className="font-semibold text-[#212121] block">Pilih Komoditas yang Disetor:</label>
                <select
                  value={depositCommodity}
                  onChange={(e) => setDepositCommodity(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-medium text-[#212121] focus:border-[#03ac0e] focus:outline-none"
                >
                  {producerType === 'petani' ? (
                    <>
                      <option value="Cabai Rawit Merah Super">🌶️ Cabai Rawit Merah Super (Rp 24.500/kg)</option>
                      <option value="Tomat Beef Hidroponik">🍅 Tomat Beef Hidroponik (Rp 14.000/kg)</option>
                      <option value="Selada Romaine Bromo">🥬 Selada Romaine Bromo (Rp 18.000/kg)</option>
                      <option value="Bawang Merah Brebes">🧅 Bawang Merah Brebes (Rp 26.000/kg)</option>
                    </>
                  ) : (
                    <>
                      <option value="Ikan Tuna Sirip Kuning">🐟 Ikan Tuna Sirip Kuning Segar (Rp 38.000/kg)</option>
                      <option value="Udang Vaname Laut">🦐 Udang Vaname Laut Segar (Rp 45.000/kg)</option>
                      <option value="Ikan Kembung Segar">🐟 Ikan Kembung Banjar (Rp 28.000/kg)</option>
                    </>
                  )}
                </select>
              </div>

              {/* Weight in Kg */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label className="font-semibold text-[#212121]">Berat Timbangan Digital (Kg):</label>
                  <span className="text-[#03ac0e] font-bold">{depositKg} Kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="5"
                    max="500"
                    value={depositKg}
                    onChange={(e) => setDepositKg(Math.max(1, Number(e.target.value)))}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-center text-sm focus:border-[#03ac0e] focus:outline-none"
                  />
                  <span className="text-slate-500 font-medium">Kg</span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  {[10, 25, 50, 100].map((quickKg) => (
                    <button
                      key={quickKg}
                      onClick={() => setDepositKg(quickKg)}
                      className={`flex-1 py-1 rounded-lg border text-[11px] font-medium transition cursor-pointer outline-none ${
                        depositKg === quickKg
                          ? 'bg-[#ebf5e9] border-[#03ac0e] text-[#03ac0e]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      +{quickKg} kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination Cold Pod Unit */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] text-[#6d7588] block">Fasilitas Cold Pod Penerima:</span>
                <div className="flex items-center justify-between font-semibold text-[#212121]">
                  <span>{producerType === 'petani' ? '❄️ PanenPod Solar Desa Batu #01' : '❄️ IcePod Pelabuhan Muncar #02'}</span>
                  <span className="text-[#03ac0e] text-xs">Suhu {producerType === 'petani' ? '2.4°C' : '0.8°C'}</span>
                </div>
                <span className="text-[10px] text-slate-500 block">
                  Sensor QC Digital aktif • Standar Farm-to-Fork
                </span>
              </div>

              {/* Total Payout Calculation */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-emerald-800 font-medium block">
                    Estimasi Payout Masuk Dompet T+0:
                  </span>
                  <strong className="text-xl font-bold text-[#03ac0e]">
                    Rp {(depositKg * (producerType === 'petani' ? 24500 : 38000)).toLocaleString('id-ID')}
                  </strong>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#03ac0e] text-white font-bold">
                  Langsung Cair
                </span>
              </div>

              {/* Confirmation Button */}
              <button
                onClick={handleDepositHarvest}
                className="w-full py-2.5 rounded-xl bg-[#03ac0e] hover:bg-[#02980c] text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer outline-none"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Konfirmasi Masuk Cold Pod & Tambah Saldo</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE CATEGORY BOTTOM SHEET (MODERN, ANTI-TUMPUK, Z-60 OVERLAY) ── */}
      {isCategoryMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-60 flex items-end justify-center bg-black/60 backdrop-blur-2xs animate-fadeIn"
          onClick={() => setIsCategoryMenuOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-3xl p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle Indicator */}
            <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto -mt-1 mb-1" />

            <div className="flex items-center justify-between pb-3 border-b border-[#e5e7e9]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#03ac0e]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#212121]">Pilih Kategori Komoditas</h3>
                  <p className="text-[11px] text-[#8d96aa]">Sentuh kategori untuk berpindah cepat</p>
                </div>
              </div>
              <button
                onClick={() => setIsCategoryMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f3f4f5] hover:bg-slate-200 text-[#6d7588] flex items-center justify-center outline-none cursor-pointer transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {CATEGORIES.map(cat => {
                const isActive = activeNavTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 outline-none flex flex-col justify-between cursor-pointer active:scale-95 ${
                      isActive
                        ? 'bg-[#ebf5e9] border-[#03ac0e] text-[#03ac0e] ring-1 ring-[#03ac0e] shadow-xs'
                        : 'bg-[#f8f9fa] border-[#e5e7e9] text-[#212121] hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{cat.icon}</span>
                      {isActive && (
                        <span className="w-5 h-5 rounded-full bg-[#03ac0e] text-white flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="mt-2.5">
                      <span className="block font-semibold text-xs text-[#212121]">{cat.label}</span>
                      <span className={`text-[10px] block mt-0.5 ${isActive ? 'text-[#03ac0e] font-medium' : 'text-[#8d96aa]'}`}>
                        {cat.count}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── SIMPLE CLEAN FOOTER ── */}
      <footer className="mt-12 border-t border-[#e5e7e9] bg-white py-6 text-xs text-[#6d7588] hidden md:block">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PanenHubLogo size="sm" />
            <p className="text-[11px] text-[#8d96aa] font-normal">Platform Rantai Pasok Pangan Segar Lokal & Jaringan Komunitas Mitra Warung</p>
          </div>
          <div className="text-[11px] font-normal text-[#8d96aa]">
            © 2026 PanenHub Indonesia. Semua Hak Dilindungi.
          </div>
        </div>
      </footer>

      {/* ── 4. FIXED BOTTOM NAVIGATION BAR FOR MOBILE (DYNAMIC MULTI-POV) ── */}
      {activePov !== 'login' && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e5e7e9] shadow-[0_-2px_10px_rgba(0,0,0,0.06)] px-2 py-1.5 flex items-center justify-around text-[10px] font-normal text-[#6d7588]">
          {activePov === 'customer' && (
            <>
              <button
                onClick={() => {
                  setIsCategoryMenuOpen(false);
                  setIsCartOpen(false);
                  setActiveNavTab('for_you');
                  setSearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  activeNavTab === 'for_you' && !isCategoryMenuOpen && !isCartOpen ? 'text-[#03ac0e] font-semibold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Beranda</span>
              </button>

              <button
                onClick={toggleCategoryMenu}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  isCategoryMenuOpen ? 'text-[#03ac0e] font-semibold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Kategori</span>
              </button>

              <button
                onClick={toggleCart}
                className={`relative flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  isCartOpen ? 'text-[#03ac0e] font-semibold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Keranjang</span>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-2 min-w-3.5 h-3.5 px-0.5 rounded-full bg-[#ef144a] text-white text-[9px] font-medium flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setIsCategoryMenuOpen(false);
                  setIsCartOpen(false);
                  setActiveNavTab('pesanan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  activeNavTab === 'pesanan' && !isCategoryMenuOpen && !isCartOpen ? 'text-[#03ac0e] font-semibold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>Tiket</span>
                {orders.length > 0 && (
                  <span className="absolute top-0 right-1 min-w-3.5 h-3.5 px-0.5 rounded-full bg-[#03ac0e] text-white text-[9px] font-medium flex items-center justify-center">
                    {orders.length}
                  </span>
                )}
              </button>
            </>
          )}

          {activePov === 'producer' && (
            <>
              <button
                onClick={() => {
                  setProducerTab('ringkasan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  producerTab === 'ringkasan' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Ringkasan</span>
              </button>

              <button
                onClick={() => {
                  setProducerTab('kuota');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  producerTab === 'kuota' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Kuota</span>
              </button>

              <button
                onClick={() => {
                  setProducerTab('setor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  producerTab === 'setor' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Setoran QC</span>
              </button>

              <button
                onClick={() => {
                  setProducerTab('keuangan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  producerTab === 'keuangan' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Wallet className="w-4 h-4" />
                <span>Keuangan</span>
              </button>
            </>
          )}

          {activePov === 'warung' && (
            <>
              <button
                onClick={() => {
                  setWarungTab('dashboard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  warungTab === 'dashboard' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Warung</span>
              </button>

              <button
                onClick={() => {
                  setWarungTab('validasi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  warungTab === 'validasi' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>Validasi PIN</span>
              </button>

              <button
                onClick={() => {
                  setWarungTab('rak');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  warungTab === 'rak' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Rak Paket</span>
                {orders.filter(o => o.status === 'ready').length > 0 && (
                  <span className="absolute top-0 right-1 min-w-3.5 h-3.5 px-0.5 rounded-full bg-[#03ac0e] text-white text-[9px] font-medium flex items-center justify-center">
                    {orders.filter(o => o.status === 'ready').length}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setWarungTab('komisi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-0.5 p-1 transition outline-none cursor-pointer ${
                  warungTab === 'komisi' ? 'text-[#03ac0e] font-bold' : 'hover:text-[#03ac0e]'
                }`}
              >
                <Wallet className="w-4 h-4" />
                <span>Komisi</span>
              </button>
            </>
          )}
        </nav>
      )}

    </div>
  );
}
