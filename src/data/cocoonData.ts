import { Product, Ingredient, Certification, RoutineNeed, ReviewItem } from '../types';

export const ANNOUNCEMENT_ITEMS = [
  {
    id: 'intro',
    text: 'Khám phá thế giới mỹ phẩm thuần chay 100% từ nông sản bản địa Việt Nam.',
    cta: 'Khám phá sản phẩm',
    target: '#products'
  },
  {
    id: 'award',
    text: 'Vinh danh: Nước tẩy trang bí đao Cocoon đạt giải thưởng ELLE Beauty Awards 2026 - 3 năm liên tiếp!',
    cta: 'Xem sản phẩm',
    target: '#products'
  },
  {
    id: 'policy',
    text: 'Chính sách chính hãng: Miễn phí vận chuyển toàn quốc cho đơn từ 249.000đ · Đổi trả trong 7 ngày.',
    cta: 'Xem ưu đãi',
    target: '#products'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'skincare',
    name: 'Chăm sóc da mặt',
    description: 'Nước tẩy trang bí đao, Gel rửa mặt cà phê, Nước sen Hậu Giang và Sữa chống nắng vô cơ SPF 50+.',
    itemCount: '4 sản phẩm'
  },
  {
    id: 'bodycare',
    name: 'Chăm sóc cơ thể',
    description: 'Cà phê Đắk Lắk làm sạch da chết toàn thân kết hợp bơ ca cao Tiền Giang mềm mịn.',
    itemCount: '1 sản phẩm'
  },
  {
    id: 'haircare',
    name: 'Chăm sóc tóc',
    description: 'Nước dưỡng tóc và Dầu xả bưởi giúp nuôi dưỡng nang tóc, giảm gãy rụng và làm mềm tóc.',
    itemCount: '2 sản phẩm'
  },
  {
    id: 'lipcare',
    name: 'Dưỡng môi',
    description: 'Son dưỡng dầu dừa Bến Tre và Tẩy da chết môi cà phê Đắk Lắk cho đôi môi mềm mọng.',
    itemCount: '2 sản phẩm'
  }
];

/**
 * 8 Official Cocoon products with 100% authentic real studio photos provided by user
 */
export const PRODUCTS_DATA: (Product & { visualType: 'bi-dao-cleanser' | 'coffee-body' | 'pomelo-hair' | 'turmeric-mask' | 'sen-cleanser' | 'coconut-lip' | 'coffee-lip' | 'coffee-refill' })[] = [
  // 1. Nước tẩy trang bí đao (ELLE Beauty Awards 2026 Winner)
  {
    id: 'nuoc-tay-trang-bi-dao',
    name: 'Nước tẩy trang bí đao Cocoon',
    vietnameseName: 'Nước tẩy trang bí đao',
    subtitle: 'Winter Melon Micellar Water',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da mặt',
    capacity: '500ml',
    capacities: ['140ml', '500ml'],
    price: 295000,
    originalPrice: 320000,
    ingredientKey: 'Bí đao',
    ingredientRegion: 'Đồng bằng sông Hồng & Nam Bộ',
    description: 'Sản phẩm chiến thắng giải thưởng ELLE Beauty Awards 2026 trong 3 năm liên tiếp cho hạng mục Sản phẩm làm sạch da tốt nhất. Với công nghệ Micellar kết hợp chiết xuất bí đao tự nhiên, rau má và tinh dầu tràm trà, nước tẩy trang giúp làm sạch sâu bụi mịn PM2.5, bã nhờn và lớp trang điểm bền màu mà không gây khô căng hay cay rát mắt.',
    benefits: [
      'Đạt giải thưởng danh giá ELLE Beauty Awards 2026 (3 năm liên tiếp)',
      'Làm sạch sâu bụi mịn PM2.5, bã nhờn và lớp trang điểm bền màu',
      'Kiểm soát lượng dầu thừa, làm dịu nhanh chóng các nốt mụn ửng đỏ',
      'Độ pH 5.5 cân bằng sinh học, không cồn, không paraben, không dầu khoáng'
    ],
    mainIngredients: [
      'Bí đao (Benincasa Cerifera): Kháng viêm, làm mát dịu và điều tiết bã nhờn',
      'Rau má (Centella Asiatica): Tăng sinh collagen, làm dịu da mẩn đỏ',
      'Tinh dầu tràm trà (Tea Tree): Kháng khuẩn tự nhiên, giảm mụn sưng',
      'Betaine từ củ cải đường: Cung cấp độ ẩm mượt mà'
    ],
    usage: 'Thấm đều sản phẩm lên bông tẩy trang rồi nhẹ nhàng lau khắp mặt và cổ theo chiều cấu tạo da. Không cần rửa lại với nước.',
    rating: 5.0,
    reviewCount: 8940,
    badge: 'ELLE Beauty Awards 2026',
    texture: 'Dạng nước trong suốt thanh khiết, thơm nhẹ hương thảo mộc tự nhiên',
    colorHex: '#3A5B47',
    visualType: 'bi-dao-cleanser',
    imageUrl: '/assets/aistudio/image_a1634f93.png'
  },
  // 2. Cà phê Đắk Lắk làm sạch da chết cơ thể
  {
    id: 'ca-phe-dak-lak-tay-da-chet-co-the',
    name: 'Cà phê Đắk Lắk làm sạch da chết cơ thể',
    vietnameseName: 'Cà phê Đắk Lắk Body Polish',
    subtitle: 'Dak Lak Coffee Body Polish',
    category: 'bodycare',
    categoryLabel: 'Chăm sóc cơ thể',
    capacity: '200ml',
    capacities: ['200ml'],
    price: 139000,
    originalPrice: 165000,
    ingredientKey: 'Cà phê Đắk Lắk',
    ingredientRegion: 'Đắk Lắk, Tây Nguyên',
    description: 'Hạt cà phê Đắk Lắk nguyên chất được xay nhuyễn và sàng lọc tỉ lệ chuẩn, hòa quyện cùng bơ ca cao Tiền Giang dồi dào chất béo thực vật giúp lấy đi lớp sừng già cỗi trên cơ thể, mang lại làn da mềm mịn, tươi sáng ngay sau lần tắm đầu tiên.',
    benefits: [
      'Làm sạch tế bào chết toàn thân mà không làm trầy xước biểu bì',
      'Cải thiện tình trạng thâm sạm vùng khuỷu tay, đầu gối và viêm nang lông',
      'Bơ ca cao Tiền Giang cấp ẩm sâu, không để lại cảm giác nhờn rít',
      'Mùi hương cà phê rang xay thơm nồng ấm kích thích cảm xúc sảng khoái'
    ],
    mainIngredients: [
      'Hạt cà phê Robusta Đắk Lắk: Giàu caffeine và chất chống oxy hóa giúp săn chắc da',
      'Bơ ca cao Tiền Giang thô: Chứa 50-60% axit béo dưỡng ẩm chuyên sâu',
      'Dầu đậu nành & Tocopherol (Vitamin E): Củng cố màng lipid tự nhiên của da'
    ],
    usage: 'Thoa một lượng vừa đủ lên da ướt. Mát-xa nhẹ nhàng từ cổ đến chân trong 5-10 phút rồi tắm sạch lại bằng nước ấm. Sử dụng 2-3 lần/tuần.',
    rating: 4.9,
    reviewCount: 5120,
    badge: 'Bán chạy số 1 Body',
    texture: 'Hạt cà phê nguyên chất xay nhuyễn hòa quyện trong kem bơ mịn mượt',
    colorHex: '#4C3B2C',
    visualType: 'coffee-body',
    imageUrl: '/assets/aistudio/images__4__b2a0833b.jfif'
  },
  // 3. Gel rửa mặt cà phê Đắk Lắk
  {
    id: 'gel-rua-mat-ca-phe-dak-lak',
    name: 'Gel rửa mặt cà phê Đắk Lắk Cocoon',
    vietnameseName: 'Gel rửa mặt cà phê Đắk Lắk',
    subtitle: 'Dak Lak Coffee Cleanser',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da mặt',
    capacity: '140ml',
    capacities: ['140ml', '310ml'],
    price: 195000,
    originalPrice: 215000,
    ingredientKey: 'Cà phê Đắk Lắk',
    ingredientRegion: 'Đắk Lắk, Tây Nguyên',
    description: 'Chứa chiết xuất dầu cà phê, caffeine tinh khiết cùng các axit amin làm sạch dịu nhẹ. Gel rửa mặt giúp lấy đi bụi bẩn, bã nhờn tận sâu lỗ chân lông, đồng thời đánh thức làn da mệt mỏi, mang lại vẻ tươi tắn, mềm mại và rạng rỡ.',
    benefits: [
      'Làm sạch sâu êm dịu, không gây cảm giác khô căng bề mặt da',
      'Caffeine và dầu cà phê kích thích vi tuần hoàn giúp da tươi tỉnh, hồng hào',
      'Cung cấp các axit amin thiết yếu bảo vệ màng ẩm sinh học của da',
      'Mùi hương cà phê nồng ấm mang lại cảm giác thư thái mỗi sớm mai'
    ],
    mainIngredients: [
      'Dầu cà phê Đắk Lắk nguyên chất: Giàu chất chống oxy hóa',
      'Caffeine tự nhiên: Giúp da săn chắc, rạng rỡ',
      'Hợp chất Axit Amin làm sạch: Êm dịu không xà phòng (soap-free)'
    ],
    usage: 'Lấy một lượng vừa đủ ra lòng bàn tay ướt, tạo bọt nhẹ và mát-xa đều lên mặt theo chuyển động tròn trong 60 giây, sau đó rửa sạch với nước mát.',
    rating: 4.9,
    reviewCount: 3120,
    badge: 'Mềm mại & Rạng rỡ',
    texture: 'Gel nâu trong sóng sánh tạo bọt mịn êm ái',
    colorHex: '#3D2817',
    visualType: 'coffee-body',
    imageUrl: '/assets/aistudio/image_ab928f90.png'
  },
  // 4. Sữa chống nắng vô cơ Sen Hậu Giang SPF 50+
  {
    id: 'sua-chong-nang-vo-co-sen-hau-giang',
    name: 'Sữa chống nắng vô cơ Sen Hậu Giang Cocoon SPF 50+',
    vietnameseName: 'Sữa chống nắng vô cơ Sen Hậu Giang',
    subtitle: 'Hau Giang Lotus Mineral Sun Fluid SPF 50+ PA++++',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da mặt',
    capacity: '50ml',
    capacities: ['50ml'],
    price: 449000,
    originalPrice: 489000,
    ingredientKey: 'Sen Hậu Giang',
    ingredientRegion: 'Hậu Giang, Đồng bằng sông Cửu Long',
    description: 'Kem chống nắng 100% màng lọc khoáng vô cơ (Zinc Oxide & Titanium Dioxide) quang phổ rộng Broad Spectrum bảo vệ da tối ưu trước tia UVA, UVB, ánh sáng nhìn thấy HEV và tia hồng ngoại IR. Kết cấu Tone-up Beige nâng tông tự nhiên tiệp màu da châu Á, đặc biệt dịu nhẹ cho làn da siêu nhạy cảm.',
    benefits: [
      'Chỉ số chống nắng rất cao SPF 50+ PA++++ bảo vệ da toàn diện',
      'Màng lọc 100% khoáng vô cơ an toàn tuyệt đối cho da nhạy cảm',
      'Tông màu Tone-up Beige làm đều màu da tự nhiên, không vệt trắng bợt',
      'Chiết xuất hoa sen Hậu Giang làm dịu kích ứng và chống oxy hóa mạnh'
    ],
    mainIngredients: [
      'Chiết xuất hoa sen Hậu Giang: Giàu flavonoid làm dịu da trước tác hại của tia UV',
      'Khoáng chất vô cơ Zinc Oxide & Titanium Dioxide kích thước vi hạt',
      'Vitamin B5 và chiết xuất rau má làm mát da dưới nắng gắt'
    ],
    usage: 'Lắc đều chai trước khi dùng. Thoa đều một lượng vừa đủ lên khắp mặt và cổ trước khi ra nắng 15-20 phút. Thoa lại sau mỗi 2-3 giờ nếu hoạt động nhiều ngoài trời.',
    rating: 4.9,
    reviewCount: 2680,
    badge: 'Màng lọc khoáng SPF 50+',
    texture: 'Dạng sữa lỏng mỏng nhẹ nâng tông Beige tự nhiên, kiềm dầu ráo mịn',
    colorHex: '#9E745A',
    visualType: 'sen-cleanser',
    imageUrl: '/assets/aistudio/image_826805ec.png'
  },
  // 5. Nước sen Hậu Giang làm dịu & cấp ẩm
  {
    id: 'nuoc-sen-hau-giang-soothing-toner',
    name: 'Nước sen Hậu Giang làm dịu & cấp ẩm Cocoon',
    vietnameseName: 'Nước sen Hậu Giang Soothing Toner',
    subtitle: 'Hau Giang Lotus Soothing Toner',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da mặt',
    capacity: '140ml',
    capacities: ['140ml', '310ml'],
    price: 195000,
    originalPrice: 225000,
    ingredientKey: 'Sen Hậu Giang',
    ingredientRegion: 'Hậu Giang, Đồng bằng sông Cửu Long',
    description: 'Nước sen Hậu Giang dịu mát kết hợp Madecassoside, Vitamin B5, Vitamin B12 và phức hợp Beta-Glucan & Sweetone® giúp bảo vệ hàng rào độ ẩm, làm dịu tức thì làn da đỏ rát, kích ứng và rất nhạy cảm.',
    benefits: [
      'Làm dịu làn da kích ứng, ửng đỏ và nhạy cảm ngay tức thì',
      'Củng cố hàng rào bảo vệ sinh học tự nhiên của làn da',
      'Cấp ẩm thanh mát mà không chứa cồn, không gây châm chích'
    ],
    mainIngredients: [
      'Chiết xuất hoa sen Hậu Giang dồi dào chất chống oxy hóa tự nhiên',
      'Madecassoside (từ rau má), Vitamin B5 và Vitamin B12',
      'Beta-Glucan & Sweetone® củng cố đề kháng da'
    ],
    usage: 'Sau khi rửa mặt, lấy một lượng vừa đủ vỗ nhẹ lên khắp mặt và cổ để dưỡng chất thẩm thấu sâu.',
    rating: 4.9,
    reviewCount: 2340,
    badge: 'Cho da rất nhạy cảm',
    texture: 'Nước hoa sen sắc hồng ngọc trong trẻo thẩm thấu tức thì',
    colorHex: '#C57E6B',
    visualType: 'sen-cleanser',
    imageUrl: '/assets/aistudio/images__1__9bbf7365.jfif'
  },
  // 6. Nước dưỡng tóc tinh dầu bưởi
  {
    id: 'nuoc-duong-toc-tinh-dau-buoi',
    name: 'Nước dưỡng tóc tinh dầu bưởi Cocoon',
    vietnameseName: 'Nước dưỡng tóc tinh dầu bưởi',
    subtitle: 'Pomelo Hair Tonic',
    category: 'haircare',
    categoryLabel: 'Chăm sóc tóc',
    capacity: '140ml',
    capacities: ['140ml'],
    price: 165000,
    originalPrice: 185000,
    ingredientKey: 'Bưởi',
    ingredientRegion: 'Vườn bưởi truyền thống Việt Nam',
    description: 'Sự kết hợp giữa tinh dầu vỏ bưởi truyền thống Việt Nam nguyên chất với hoạt chất dưỡng tóc hiện đại Xylishine™ và Vitamin B5 (Panthenol) nuôi dưỡng nang tóc chắc khỏe từ gốc, hỗ trợ giảm rụng tóc và cải thiện độ dày mượt tự nhiên.',
    benefits: [
      'Cung cấp dưỡng chất thiết yếu nuôi dưỡng nang tóc khỏe mạnh',
      'Hỗ trợ giảm đáng kể tình trạng gãy rụng và kích thích mọc tóc con',
      'Kết cấu 2 pha dầu - nước siêu nhẹ, thẩm thấu nhanh, hoàn toàn không gây bết dính',
      'Hương thơm tinh dầu bưởi tươi thanh khiết, thư giãn tinh thần sau ngày dài'
    ],
    mainIngredients: [
      'Tinh dầu vỏ bưởi nguyên chất (Citrus Grandis Peel Oil): Chứa hàm lượng cao Limonene kháng khuẩn và kích thích tuần hoàn chân tóc',
      'Xylishine™ (chiết xuất từ tảo nâu tự nhiên): Tăng cường độ bóng mượt và độ dày sợi tóc',
      'Vitamin B5 (Panthenol): Phục hồi cấu trúc hư tổn của thân tóc'
    ],
    usage: 'Lắc đều chai trước khi dùng để 2 pha dầu và nước hòa vào nhau. Xịt trực tiếp lên da đầu và chân tóc khi tóc sạch và khô ráo, dùng đầu ngón tay mát-xa nhẹ 2-3 phút.',
    rating: 4.8,
    reviewCount: 4210,
    badge: 'Giảm gãy rụng tóc',
    texture: 'Xịt phun sương mịn màng 2 pha thẩm thấu tức thì, không gây bóng dầu',
    colorHex: '#526A3A',
    visualType: 'pomelo-hair',
    imageUrl: '/assets/aistudio/images__3__a1126cce.jfif'
  },
  // 7. Dầu xả bưởi Cocoon
  {
    id: 'dau-xa-buoi-pomelo-hair-conditioner',
    name: 'Dầu xả bưởi Cocoon giảm gãy rụng & mềm tóc',
    vietnameseName: 'Dầu xả bưởi Cocoon',
    subtitle: 'Pomelo Hair Conditioner',
    category: 'haircare',
    categoryLabel: 'Chăm sóc tóc',
    capacity: '50ml',
    capacities: ['50ml', '310ml'],
    price: 65000,
    originalPrice: 75000,
    ingredientKey: 'Bưởi',
    ingredientRegion: 'Việt Nam',
    description: 'Chiết xuất từ tinh dầu vỏ bưởi Việt Nam kết hợp Vitamin B5, Xylishine™ và các axit amin thiết yếu giúp nuôi dưỡng sợi tóc suôn mượt, giảm thiểu xơ rối chẻ ngọn và tăng cường độ đàn hồi tự nhiên.',
    benefits: [
      'Làm mềm mượt sợi tóc ngay sau khi xả, không gây nặng bết chân tóc',
      'Bổ sung axit amin phục hồi các hư tổn bề mặt thân tóc',
      'Hương thơm thanh mát sảng khoái từ vỏ bưởi thiên nhiên'
    ],
    mainIngredients: [
      'Tinh dầu vỏ bưởi Việt Nam tự nhiên',
      'Xylishine™ và Panthenol (Vitamin B5)',
      'Hợp chất axit amin thực vật'
    ],
    usage: 'Sau khi gội đầu, thoa đều một lượng vừa đủ lên thân và ngọn tóc ướt, ủ nhẹ trong 2-3 phút rồi xả sạch với nước.',
    rating: 4.8,
    reviewCount: 1850,
    badge: 'Mềm mượt tự nhiên',
    texture: 'Kem xả xanh lá thanh mát mượt mà trên từng lọn tóc',
    colorHex: '#2E5536',
    visualType: 'pomelo-hair',
    imageUrl: '/assets/aistudio/images__2__b4823141.jfif'
  },
  // 8. Tẩy tế bào chết môi Cà phê Đắk Lắk
  {
    id: 'tay-te-bao-chet-moi-ca-phe-dak-lak',
    name: 'Tẩy tế bào chết môi Cà phê Đắk Lắk Cocoon',
    vietnameseName: 'Cà phê Đắk Lắk làm sạch da chết môi',
    subtitle: 'Dak Lak Coffee Lip Scrub',
    category: 'lipcare',
    categoryLabel: 'Dưỡng môi',
    capacity: '5g',
    capacities: ['5g'],
    price: 74000,
    originalPrice: 85000,
    ingredientKey: 'Cà phê Đắk Lắk',
    ingredientRegion: 'Đắk Lắk, Tây Nguyên',
    description: 'Hạt cà phê Đắk Lắk xay siêu nhuyễn mịn kết hợp cùng dầu mắc-ca và bơ hạt mỡ giúp nhẹ nhàng cuốn trôi đi lớp sừng khô ráp bong tróc trên môi, trả lại đôi môi hồng hào, mềm mại và căng mọng.',
    benefits: [
      'Hạt cà phê siêu mịn làm sạch tế bào chết êm dịu, không rát môi',
      'Dầu hạt mắc-ca và bơ hạt mỡ dưỡng ẩm chuyên sâu, chống thâm môi',
      'Giúp màu son lên chuẩn sắc và mịn mượt cả ngày'
    ],
    mainIngredients: [
      'Hạt cà phê Đắk Lắk xay siêu mịn',
      'Dầu hạt mắc-ca giàu chất béo Omega',
      'Bơ hạt mỡ và Vitamin E'
    ],
    usage: 'Thoa trực tiếp lên môi khô, dùng đầu ngón tay mát-xa nhẹ nhàng theo hình tròn trong 30 giây rồi dùng khăn ẩm lau sạch. Dùng 2-3 lần/tuần.',
    rating: 4.9,
    reviewCount: 3820,
    badge: 'Môi mịn mọng',
    texture: 'Thỏi sáp hạt cà phê xay mịn nồng nàn hương thơm ngọt',
    colorHex: '#3D2513',
    visualType: 'coffee-lip',
    imageUrl: '/assets/aistudio/image_aa41c95b.png'
  },
  // 9. Son dưỡng dầu dừa Bến Tre
  {
    id: 'son-duong-dau-dua-ben-tre',
    name: 'Son dưỡng dầu dừa Bến Tre Cocoon',
    vietnameseName: 'Son dưỡng dầu dừa Bến Tre',
    subtitle: 'Ben Tre Coconut Lip Balm',
    category: 'lipcare',
    categoryLabel: 'Dưỡng môi',
    capacity: '5g',
    capacities: ['5g'],
    price: 32000,
    originalPrice: 40000,
    ingredientKey: 'Dầu dừa Bến Tre',
    ingredientRegion: 'Bến Tre, Đồng bằng sông Cửu Long',
    description: 'Sự hòa quyện giữa dầu dừa Bến Tre nguyên chất, bơ hạt mỡ và vitamin E dồi dào chất béo thực vật lành tính giúp cung cấp độ ẩm tức thì, chữa lành đôi môi khô nứt nẻ và giữ cho môi luôn hồng hào, mềm mịn tự nhiên.',
    benefits: [
      'Cung cấp độ ẩm dồi dào và duy trì làn môi mềm mịn cả ngày dài',
      'Hỗ trợ làm lành các vết nứt nẻ bong tróc do thời tiết hanh khô',
      'Tạo lớp lót bảo vệ môi hoàn hảo trước khi thoa son màu',
      '100% thành phần thực vật tự nhiên, an toàn tuyệt đối khi sử dụng'
    ],
    mainIngredients: [
      'Dầu dừa Bến Tre nguyên chất: Giàu acid lauric dưỡng ẩm sâu',
      'Bơ hạt mỡ (Shea Butter): Giàu vitamin A và E bảo vệ da môi',
      'Tocopherol (Vitamin E tự nhiên)'
    ],
    usage: 'Thoa trực tiếp lên môi bất cứ khi nào cảm thấy môi khô hoặc làm lớp dưỡng lót trước khi dùng son màu.',
    rating: 4.9,
    reviewCount: 6320,
    badge: 'Giá tốt nhất - 32.000đ',
    texture: 'Chất sáp mướt mịn thoảng hương dừa thơm ngọt tự nhiên',
    colorHex: '#254B36',
    visualType: 'coconut-lip',
    imageUrl: '/assets/aistudio/image_b3865649.png'
  }
];

export const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 'bi-dao',
    name: 'Bí đao miền nhiệt đới',
    scientificName: 'Benincasa Cerifera',
    region: 'Đồng bằng sông Hồng & Nam Bộ',
    regionDetail: 'Được thu hoạch từ những vườn nông sản chuẩn sạch tại Việt Nam',
    highlight: 'Chiến thắng giải thưởng ELLE Beauty Awards 2026 trong 3 năm liên tiếp.',
    description: 'Trong y học cổ truyền Việt Nam, bí đao có tính hàn, vị ngọt thanh, có tác dụng thanh nhiệt làm mát. Khi ứng dụng vào mỹ phẩm, dịch chiết bí đao dồi dào axit amin, vitamin và chất chống oxy hóa tự nhiên giúp làm dịu nốt mụn sưng đỏ, làm sạch bã nhờn và phục hồi sự cân bằng tự nhiên cho da.',
    benefits: [
      'Kháng viêm và làm mát dịu bề mặt da dầu mụn',
      'Điều tiết lượng dầu thừa và ngăn ngừa mụn mới',
      'Làm thông thoáng lỗ chân lông bị bít tắc do khói bụi'
    ],
    associatedProducts: [
      'Nước tẩy trang bí đao Cocoon 500ml'
    ],
    color: '#345E44',
    iconType: 'melon'
  },
  {
    id: 'ca-phe-dak-lak',
    name: 'Cà phê Đắk Lắk',
    scientificName: 'Coffea Robusta (Dak Lak)',
    region: 'Đắk Lắk, Tây Nguyên',
    regionDetail: 'Vùng cao nguyên trù phú với đất đỏ bazan màu mỡ bậc nhất Việt Nam',
    highlight: 'Hạt cà phê nguyên chất đánh thức làn da tràn đầy năng lượng.',
    description: 'Đắk Lắk nổi tiếng là thủ phủ cà phê của Việt Nam. Những hạt cà phê Robusta chín mọng được tuyển chọn, phơi sấy và xay theo cỡ hạt tối ưu để loại bỏ lớp tế bào sừng già cỗi mà không làm trầy xước biểu bì da. Hàm lượng caffeine cao trong hạt cà phê kích thích vi tuần hoàn máu dưới da, đem lại bề mặt mịn màng và tươi sáng.',
    benefits: [
      'Lấy đi tế bào chết cơ thể êm dịu, tăng lưu thông máu',
      'Caffeine đánh thức vẻ tươi tắn, mềm mại của da mặt và môi',
      'Mùi hương cà phê nồng nàn đem lại năng lượng tích cực'
    ],
    associatedProducts: [
      'Cà phê Đắk Lắk làm sạch da chết cơ thể (200ml)',
      'Gel rửa mặt cà phê Đắk Lắk (140ml)',
      'Tẩy tế bào chết môi Cà phê Đắk Lắk (5g)'
    ],
    color: '#5A4331',
    iconType: 'coffee'
  },
  {
    id: 'sen-hau-giang',
    name: 'Sen Hậu Giang',
    scientificName: 'Nelumbo Nucifera (Hau Giang)',
    region: 'Hậu Giang, Đồng bằng sông Cửu Long',
    regionDetail: 'Những đầm sen bạt ngàn nuôi dưỡng bởi nguồn nước ngọt phù sa miền Tây',
    highlight: 'Giải pháp dưỡng ẩm làm dịu và chống nắng vô cơ cho da siêu nhạy cảm.',
    description: 'Hoa sen – biểu tượng thanh khiết của văn hóa Việt Nam. Tại Hậu Giang, những đóa sen được thu hái thủ công khi sương sớm còn đọng trên cánh hoa để bảo toàn hàm lượng Polyphenol, Flavonoid và Polysaccharide tự nhiên. Chiết xuất hoa sen mang lại khả năng làm dịu những làn da nhạy cảm nhất, cấp nước và củng cố màng ẩm tự nhiên.',
    benefits: [
      'Làm dịu tình trạng kích ứng, mẩn đỏ tức thì',
      'Bổ sung độ ẩm sâu và bảo vệ da trước tác hại tia cực tím',
      'Phục hồi màng ẩm sinh học tự nhiên của làn da'
    ],
    associatedProducts: [
      'Nước sen Hậu Giang làm dịu & cấp ẩm Cocoon 140ml',
      'Sữa chống nắng vô cơ Sen Hậu Giang SPF 50+ (50ml)'
    ],
    color: '#C57E6B',
    iconType: 'lotus'
  },
  {
    id: 'buoi',
    name: 'Bưởi Việt Nam',
    scientificName: 'Citrus Grandis Peel Oil',
    region: 'Vùng trồng bưởi truyền thống Việt Nam',
    regionDetail: 'Thu hoạch từ những vườn bưởi thanh trà và bưởi da xanh trĩu quả',
    highlight: 'Bí quyết dân gian nuôi dưỡng mái tóc suôn dày chắc khỏe.',
    description: 'Từ xưa, phụ nữ Việt Nam đã có thói quen đun vỏ bưởi để gội đầu nhằm giữ mái tóc bồng bềnh đen mượt. Tinh dầu vỏ bưởi nguyên chất thu được bằng phương pháp ép lạnh giữ trọn vẹn hợp chất Limonene và các vitamin quý giá, giúp củng cố chân tóc, kích thích tuần hoàn máu nuôi dưỡng nang tóc và hạn chế tình trạng gãy rụng.',
    benefits: [
      'Nuôi dưỡng nang tóc và sợi tóc chắc khỏe từ gốc',
      'Kháng khuẩn da đầu, giữ chân tóc thông thoáng',
      'Mùi hương tươi mát tự nhiên giúp sảng khoái tinh thần'
    ],
    associatedProducts: [
      'Nước dưỡng tóc tinh dầu bưởi Cocoon 140ml',
      'Dầu xả bưởi Cocoon giảm gãy rụng 50ml'
    ],
    color: '#4B6E32',
    iconType: 'pomelo'
  },
  {
    id: 'dau-dua-ben-tre',
    name: 'Dừa Bến Tre',
    scientificName: 'Cocos Nucifera (Ben Tre)',
    region: 'Bến Tre, Đồng bằng sông Cửu Long',
    regionDetail: 'Xứ sở dừa bạt ngàn với những cây dừa trĩu quả tích tụ axit béo tự nhiên',
    highlight: 'Dưỡng chất thực vật thuần khiết cho làn môi căng mọng.',
    description: 'Dầu dừa nguyên chất ép từ cơm dừa già Bến Tre chứa hàm lượng axit béo phong phú, đặc biệt là axit lauric giúp thẩm thấu nhanh và tạo màng ẩm tự nhiên bảo vệ môi trước sự khô nẻ.',
    benefits: [
      'Cung cấp độ ẩm dồi dào cho môi',
      'Làm mềm và chống nứt nẻ môi',
      'An toàn thuần chay 100%'
    ],
    associatedProducts: [
      'Son dưỡng dầu dừa Bến Tre Cocoon 5g'
    ],
    color: '#254B36',
    iconType: 'melon'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'leaping-bunny',
    title: 'Leaping Bunny',
    organization: 'Cruelty Free International',
    scope: 'Không thử nghiệm trên động vật trong toàn chuỗi cung ứng',
    description: 'Chứng nhận quốc tế nghiêm ngặt hàng đầu thế giới về không thử nghiệm trên động vật, áp dụng cho cả thành phần nguyên liệu lẫn thành phẩm cuối cùng.',
    badgeText: 'Cruelty-Free International'
  },
  {
    id: 'the-vegan-society',
    title: 'The Vegan Society',
    organization: 'The Vegan Society (Vương Quốc Anh)',
    scope: 'Sản phẩm 100% thuần chay, không dẫn xuất động vật',
    description: 'Tổ chức thuần chay uy tín và lâu đời nhất thế giới, xác nhận công thức mỹ phẩm không chứa bất kỳ thành phần hay dẫn xuất nào có nguồn gốc động vật.',
    badgeText: 'Vegan Certified'
  },
  {
    id: 'peta',
    title: 'PETA (Beauty Without Bunnies)',
    organization: 'People for the Ethical Treatment of Animals',
    scope: 'Thương hiệu nhân đạo và mỹ phẩm thuần chay',
    description: 'Chương trình toàn cầu của PETA chứng thực thương hiệu cam kết chấm dứt việc thử nghiệm trên động vật và theo đuổi đạo đức sản xuất nhân đạo.',
    badgeText: 'PETA Cruelty-Free & Vegan'
  }
];

export const ROUTINE_NEEDS_DATA: RoutineNeed[] = [
  {
    id: 'cleansing',
    title: 'Chu trình làm sạch & Bảo vệ chống nắng',
    tagline: 'Làm sạch sâu với Bí đao, Cà phê và bảo vệ da với Sữa chống nắng Sen Hậu Giang',
    description: 'Lựa chọn toàn diện cho làn da mặt hằng ngày cần được làm sạch sâu và chống nắng quang phổ rộng.',
    idealFor: 'Da dầu mụn, da hỗn hợp, da nhạy cảm ngoài trời',
    recommendedProductId: 'nuoc-tay-trang-bi-dao',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Tẩy trang sạch sâu',
        productName: 'Nước tẩy trang bí đao Cocoon 500ml',
        action: 'Lau sạch bụi mịn PM2.5, bã nhờn và cặn trang điểm',
        capacity: '500ml'
      },
      {
        stepNumber: 2,
        stepName: 'Rửa mặt tươi tỉnh',
        productName: 'Gel rửa mặt cà phê Đắk Lắk Cocoon',
        action: 'Rửa mặt dịu nhẹ, đánh thức làn da rạng rỡ',
        capacity: '140ml'
      },
      {
        stepNumber: 3,
        stepName: 'Cấp ẩm cân bằng',
        productName: 'Nước sen Hậu Giang Soothing Toner',
        action: 'Vỗ nhẹ để làm dịu da và củng cố màng ẩm',
        capacity: '140ml'
      },
      {
        stepNumber: 4,
        stepName: 'Bảo vệ chống nắng',
        productName: 'Sữa chống nắng vô cơ Sen Hậu Giang SPF 50+',
        action: 'Thoa đều bảo vệ da trước tia UV và ánh sáng xanh',
        capacity: '50ml'
      }
    ]
  },
  {
    id: 'bodycare',
    title: 'Chăm sóc cơ thể & Môi mềm mọng',
    tagline: 'Làm sạch sâu da chết toàn thân và dưỡng môi với nông sản Đắk Lắk & Bến Tre',
    description: 'Dành cho làn da cơ thể sần sùi và đôi môi khô ráp cần được tái sinh mềm mại.',
    idealFor: 'Mọi loại da body và môi cần cấp ẩm sâu',
    recommendedProductId: 'ca-phe-dak-lak-tay-da-chet-co-the',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Tẩy da chết toàn thân',
        productName: 'Cà phê Đắk Lắk làm sạch da chết cơ thể',
        action: 'Mát-xa 2-3 lần/tuần cho làn da trơn láng',
        capacity: '200ml'
      },
      {
        stepNumber: 2,
        stepName: 'Tẩy da chết môi',
        productName: 'Tẩy tế bào chết môi Cà phê Đắk Lắk',
        action: 'Loại bỏ tế bào sừng khô tróc trên môi',
        capacity: '5g'
      },
      {
        stepNumber: 3,
        stepName: 'Khóa ẩm môi mướt',
        productName: 'Son dưỡng dầu dừa Bến Tre',
        action: 'Khóa chặt độ ẩm cho môi căng mịn',
        capacity: '5g'
      }
    ]
  },
  {
    id: 'haircare',
    title: 'Chăm sóc tóc & giảm gãy rụng',
    tagline: 'Nuôi dưỡng nang tóc và kích thích mọc tóc với tinh dầu bưởi Việt Nam',
    description: 'Giải pháp cho mái tóc mỏng yếu, dễ gãy rụng và khô xơ.',
    idealFor: 'Tóc thưa rụng, tóc qua xử lý nhiệt và hóa chất',
    recommendedProductId: 'nuoc-duong-toc-tinh-dau-buoi',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Xả tóc mềm mượt',
        productName: 'Dầu xả bưởi Cocoon giảm gãy rụng',
        action: 'Ủ thân tóc 3 phút rồi xả sạch với nước',
        capacity: '50ml'
      },
      {
        stepNumber: 2,
        stepName: 'Sấy khô chân tóc',
        productName: 'Lau khô và sấy chế độ mát',
        action: 'Giữ chân tóc thông thoáng',
        capacity: 'Thường quy'
      },
      {
        stepNumber: 3,
        stepName: 'Xịt dưỡng nang tóc',
        productName: 'Nước dưỡng tóc tinh dầu bưởi Cocoon',
        action: 'Xịt sát chân tóc mỗi ngày và mát-xa nhẹ',
        capacity: '140ml'
      }
    ]
  }
];

export const SUSTAINABILITY_INITIATIVES = [
  {
    id: 'bottle-recycle',
    badge: 'Đổi vỏ chai cũ',
    title: 'Thu Hồi Vỏ Chai Cũ Nhận Sản Phẩm',
    tagline: 'Mỗi vỏ chai gửi lại là một cam kết cho hành tinh xanh',
    content: 'Chương trình thu hồi vỏ chai rỗng Cocoon đã làm sạch được diễn ra thường niên tại hơn 80 điểm thu gom tại TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và các chuỗi đối tác phân phối (Hasaki, Guardian, Watsons). Khách hàng gửi lại từ 5 vỏ chai rỗng sẽ nhận ngay Son dưỡng dầu dừa hoặc sản phẩm trải nghiệm thuần chay.'
  },
  {
    id: 'community-action',
    badge: 'Trách nhiệm xã hội',
    title: 'Bảo Tồn Động Vật & Trồng Rừng Bản Địa',
    tagline: 'Tôn trọng sự sống và thiên nhiên của dải đất Việt Nam',
    content: 'Cocoon trích một phần doanh thu phối hợp cùng Tổ chức Động vật Châu Á (Animals Asia Foundation - AAF) triển khai dự án cải thiện phúc lợi cho đàn voi nhà tại Đắk Lắk và cứu trợ gấu ngựa. Đồng thời, Cocoon đồng hành cùng các trung tâm bảo tồn thiên nhiên phủ xanh rừng đầu nguồn tại Việt Nam.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Nguyễn Thu Trang',
    city: 'Hà Nội',
    verified: true,
    productName: 'Nước tẩy trang bí đao Cocoon 500ml',
    date: '14/10/2026',
    content: 'Xứng đáng giải thưởng ELLE Beauty Awards 3 năm liên tiếp! Mình da dầu mụn dùng nhiều loại micellar water của Pháp hay bị khô căng ở cánh mũi. Đổi sang nước tẩy trang bí đao của Cocoon thấy sạch dịu, da mềm mà không hề bị châm chích.',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Trần Minh Hoàng',
    city: 'TP. Hồ Chí Minh',
    verified: true,
    productName: 'Cà phê Đắk Lắk làm sạch da chết cơ thể 200ml',
    date: '28/09/2026',
    content: 'Hạt cà phê xay cực kỳ đều và không bị sắc cạnh, mát-xa trên da êm mượt. Tắm xong da trơn mịn thơm phức mùi cà phê nguyên chất, vùng khủy tay và đầu gối mềm hơn hẳn sau 2 tuần.',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Lê Ngọc Ánh',
    city: 'Đà Nẵng',
    verified: true,
    productName: 'Nước dưỡng tóc tinh dầu bưởi Cocoon 140ml',
    date: '05/10/2026',
    content: 'Sau khi sinh tóc mình rụng rất nhiều. Kiên trì dùng chai xịt dưỡng bưởi này mỗi tối sau khi sấy tóc, sau 1 tháng thấy tóc con mọc lởm chởm ở vùng trán. Ưng nhất là không bị bết rít.',
    rating: 5
  },
  {
    id: 'rev-4',
    author: 'Hoàng Mai Chi',
    city: 'TP. Hồ Chí Minh',
    verified: true,
    productName: 'Sữa chống nắng vô cơ Sen Hậu Giang SPF 50+',
    date: '02/11/2026',
    content: 'Kem chống nắng vô cơ mà texture mịn xuất sắc, tông Beige tệp da tự nhiên không bị trắng bệch. Da mình treatment nhạy cảm dùng êm ru cả ngày không đổ dầu hay bít tắc mụn.',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    question: 'Cocoon có phải là thương hiệu mỹ phẩm thuần chay không?',
    answer: 'Cocoon định vị sản phẩm theo hướng thuần chay 100% (Vegan). Tất cả công thức sản phẩm của Cocoon cam kết không sử dụng bất kỳ nguyên liệu nào có nguồn gốc từ động vật (như sáp ong, mỡ cừu, dịch ốc sên, collagen động vật). Người mua nên xem thông tin sản phẩm chi tiết và phạm vi chứng nhận được công bố chính thức trên website Cocoon.'
  },
  {
    question: 'Làm sao để chọn sản phẩm phù hợp với da hoặc tóc?',
    answer: 'Bạn nên bắt đầu từ nhu cầu và tình trạng hiện tại của làn da hoặc mái tóc (ví dụ: da cần làm sạch sâu dầu nhờn, da cần chống nắng màng lọc khoáng, tóc gãy rụng, da cơ thể sần sùi). Đọc kỹ bảng mô tả, bảng thành phần đầy đủ và tuân theo hướng dẫn sử dụng của từng sản phẩm. Bạn cũng có thể dùng công cụ chọn lộ trình theo nhu cầu ngay trên trang này.'
  },
  {
    question: 'Sản phẩm có thử nghiệm trên động vật không?',
    answer: 'Tuyệt đối không. Cocoon cam kết nhân đạo và không thử nghiệm trên động vật trong bất kỳ giai đoạn phát triển nào. Thương hiệu được chứng nhận bởi Cruelty Free International (Leaping Bunny) và tổ chức PETA (Beauty Without Bunnies).'
  },
  {
    question: 'Làm thế nào để đặt hàng?',
    answer: 'Bạn chỉ cần chọn sản phẩm yêu thích, kiểm tra dung tích và giá niêm yết, nhấn nút "Thêm vào giỏ" hoặc "Mua ngay". Tiếp theo, mở giỏ hàng để kiểm tra số lượng và điền thông tin giao nhận để hoàn tất đặt hàng qua phương thức thanh toán thuận tiện nhất (COD nhận hàng thanh toán hoặc chuyển khoản VietQR).'
  },
  {
    question: 'Phí giao hàng và thời gian nhận hàng là bao lâu?',
    answer: 'Cocoon áp dụng chính sách miễn phí giao hàng toàn quốc cho đơn hàng có giá trị từ 249.000đ trở lên. Với đơn hàng dưới ngưỡng, phí vận chuyển tiêu chuẩn là 25.000đ - 35.000đ tùy khu vực. Thời gian giao hàng thông thường từ 1–2 ngày làm việc tại TP.HCM & Hà Nội, và 2–4 ngày tại các tỉnh thành khác.'
  },
  {
    question: 'Cocoon có chương trình thu hồi vỏ chai không?',
    answer: 'Có. Cocoon triển khai chương trình định kỳ thu hồi vỏ chai rỗng đã làm sạch tại hệ thống cửa hàng và điểm phân phối đối tác để tái chế, đổi lấy quà tặng tri ân son dưỡng dừa Bến Tre hoặc các quà tặng trải nghiệm thuần chay.'
  }
];

/**
 * Exact legal and corporate entity information from user's official legal image
 */
export const COMPANY_INFO = {
  brandName: 'Cocoon Việt Nam (The Cocoon Original Viet Nam)',
  ownerCompany: 'CÔNG TY CỔ PHẦN Y&B',
  ownerCert: 'GCNĐKKD: 0315803699 | Phòng Đăng ký kinh doanh - Sở Tài chính Thành phố Hồ Chí Minh cấp lần thứ 2 ngày 25/09/2025',
  ownerAddress: '14D1, Khu phố 1A, Đường Quốc lộ 1A, Phường Tân Thới Hiệp, TP. Hồ Chí Minh, Việt Nam',
  manufacturerCompany: 'CÔNG TY TNHH NATURE STORY',
  manufacturerCert: 'GCNĐKKD: 1101983767 | Phòng Đăng ký kinh doanh - Sở Tài chính Tỉnh Tây Ninh cấp lần thứ 4 ngày 15/09/2025',
  manufacturerAddress: 'Lô LF24A-LF25 Đường số 2, Khu công nghiệp Xuyên Á, Xã Đức Lập, Tỉnh Tây Ninh, Việt Nam',
  hotline: '19009300',
  email: 'we@cocoonvietnam.com',
  website: 'https://cocoonvietnam.com/'
};
