import { Product, Ingredient, Certification, RoutineNeed, ReviewItem } from '../types';

export const ANNOUNCEMENT_ITEMS = [
  {
    id: 'intro',
    text: 'Khám phá thế giới mỹ phẩm thuần chay 100% từ nông sản bản địa Việt Nam.',
    cta: 'Khám phá sản phẩm',
    target: '#products'
  },
  {
    id: 'policy',
    text: 'Chính sách chính hãng: Miễn phí vận chuyển toàn quốc cho đơn hàng từ 249.000đ · Đổi trả trong 7 ngày.',
    cta: 'Xem ưu đãi',
    target: '#products'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'skincare',
    name: 'Chăm sóc da mặt',
    description: 'Nước sen Hậu Giang làm dịu và phục hồi hàng rào độ ẩm cho làn da rất nhạy cảm.',
    itemCount: 'Nước sen Hậu Giang'
  },
  {
    id: 'bodycare',
    name: 'Chăm sóc cơ thể',
    description: 'Cà phê Đắk Lắk làm sạch da chết toàn thân kết hợp bơ ca cao Tiền Giang béo mịn.',
    itemCount: 'Cà phê Đắk Lắk'
  },
  {
    id: 'haircare',
    name: 'Chăm sóc tóc',
    description: 'Nước dưỡng tóc và Dầu xả bưởi giúp nuôi dưỡng nang tóc, giảm gãy rụng và làm mềm tóc.',
    itemCount: 'Bưởi Việt Nam'
  },
  {
    id: 'lipcare',
    name: 'Dưỡng môi',
    description: 'Son dưỡng dầu dừa Bến Tre dồi dào chất béo tự nhiên cho đôi môi mềm mịn suốt cả ngày.',
    itemCount: 'Dừa Bến Tre'
  }
];

/**
 * Curated authentic Cocoon products with 100% real product photography uploaded by the user
 */
export const PRODUCTS_DATA: (Product & { visualType: 'bi-dao-cleanser' | 'coffee-body' | 'pomelo-hair' | 'turmeric-mask' | 'sen-cleanser' | 'coconut-lip' | 'coffee-lip' | 'coffee-refill' })[] = [
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
    badge: 'Bán chạy nhất',
    texture: 'Hạt cà phê nguyên chất xay nhuyễn hòa quyện trong kem bơ mịn mượt',
    colorHex: '#4C3B2C',
    visualType: 'coffee-body',
    imageUrl: '/assets/aistudio/images__4__b2a0833b.jfif'
  },
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
  {
    id: 'nuoc-sen-hau-giang-soothing-toner',
    name: 'Nước sen Hậu Giang làm dịu & cấp ẩm Cocoon',
    vietnameseName: 'Nước sen Hậu Giang Soothing Toner',
    subtitle: 'Hau Giang Lotus Soothing Toner',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da',
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
    id: 'ca-phe-dak-lak',
    name: 'Cà phê Đắk Lắk',
    scientificName: 'Coffea Robusta (Dak Lak)',
    region: 'Đắk Lắk, Tây Nguyên',
    regionDetail: 'Vùng cao nguyên trù phú với đất đỏ bazan màu mỡ bậc nhất Việt Nam',
    highlight: 'Câu chuyện về hạt cà phê và sản phẩm làm sạch da chết cơ thể.',
    description: 'Đắk Lắk nổi tiếng là thủ phủ cà phê của Việt Nam. Những hạt cà phê Robusta chín mọng được tuyển chọn, phơi sấy và xay theo cỡ hạt tối ưu để loại bỏ lớp tế bào sừng già cỗi mà không làm trầy xước biểu bì da. Hàm lượng caffeine cao trong hạt cà phê kích thích vi tuần hoàn máu dưới da, đem lại bề mặt mịn màng và tươi sáng.',
    benefits: [
      'Lấy đi tế bào chết cơ thể êm dịu, tăng lưu thông máu',
      'Giàu chất chống oxy hóa tự nhiên bảo vệ làn da',
      'Mùi hương cà phê nồng nàn đem lại năng lượng tích cực'
    ],
    associatedProducts: [
      'Cà phê Đắk Lắk làm sạch da chết cơ thể (200ml)'
    ],
    color: '#5A4331',
    iconType: 'coffee'
  },
  {
    id: 'buoi',
    name: 'Bưởi',
    scientificName: 'Citrus Grandis Peel Oil',
    region: 'Vùng trồng bưởi truyền thống Việt Nam',
    regionDetail: 'Thu hoạch từ những vườn bưởi thanh trà và bưởi da xanh trĩu quả',
    highlight: 'Cảm hứng cho các sản phẩm chăm sóc tóc.',
    description: 'Từ xưa, phụ nữ Việt Nam đã có thói quen đun vỏ bưởi để gội đầu nhằm giữ mái tóc bồng bềnh đen mượt. Tinh dầu vỏ bưởi nguyên chất thu được bằng phương pháp ép lạnh giữ trọn vẹn hợp chất Limonene và các vitamin quý giá, giúp củng cố chân tóc, kích thích tuần hoàn máu nuôi dưỡng nang tóc và hạn chế tình trạng gãy rụng.',
    benefits: [
      'Nuôi dưỡng nang tóc và sợi tóc chắc khỏe',
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
    id: 'sen-hau-giang',
    name: 'Sen Hậu Giang',
    scientificName: 'Nelumbo Nucifera (Hau Giang)',
    region: 'Hậu Giang, Đồng bằng sông Cửu Long',
    regionDetail: 'Những đầm sen bạt ngàn nuôi dưỡng bởi nguồn nước ngọt phù sa miền Tây',
    highlight: 'Nguyên liệu địa phương xuất hiện trong dòng sản phẩm chăm sóc da.',
    description: 'Hoa sen – biểu tượng thanh khiết của văn hóa Việt Nam. Tại Hậu Giang, những đóa sen được thu hái thủ công khi sương sớm còn đọng trên cánh hoa để bảo toàn hàm lượng Polyphenol, Flavonoid và Polysaccharide tự nhiên. Chiết xuất hoa sen mang lại khả năng làm dịu những làn da nhạy cảm nhất, cấp nước và củng cố màng ẩm tự nhiên.',
    benefits: [
      'Làm dịu tình trạng kích ứng, mẩn đỏ tức thì',
      'Bổ sung độ ẩm sâu cho làn da mềm mịn',
      'Bảo vệ da trước tác nhân gây hại từ môi trường'
    ],
    associatedProducts: [
      'Nước sen Hậu Giang làm dịu & cấp ẩm Cocoon 140ml'
    ],
    color: '#C57E6B',
    iconType: 'lotus'
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
    id: 'bodycare',
    title: 'Chăm sóc cơ thể mịn màng',
    tagline: 'Làm sạch sâu và lấy đi tế bào chết cơ thể với cà phê Đắk Lắk',
    description: 'Dành cho làn da cơ thể sần sùi, thâm sạm hoặc vùng da lưng dễ nổi mụn.',
    idealFor: 'Mọi loại da body, đặc biệt da sần vỏ cam và sạm màu',
    recommendedProductId: 'ca-phe-dak-lak-tay-da-chet-co-the',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Tắm sạch cơ thể',
        productName: 'Tắm nước ấm làm mềm da',
        action: 'Chuẩn bị bề mặt da ẩm sẵn sàng',
        capacity: 'Thường quy'
      },
      {
        stepNumber: 2,
        stepName: 'Tẩy tế bào chết định kỳ',
        productName: 'Cà phê Đắk Lắk làm sạch da chết cơ thể',
        action: 'Mát-xa 2-3 lần/tuần trong 10 phút cho da trơn mịn',
        capacity: '200ml'
      },
      {
        stepNumber: 3,
        stepName: 'Dưỡng ẩm môi',
        productName: 'Son dưỡng dầu dừa Bến Tre',
        action: 'Khóa ẩm cho đôi môi mềm mại',
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
        productName: 'Dầu xả bưởi Cocoon',
        action: 'Ủ thân tóc 3 phút rồi xả sạch',
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
  },
  {
    id: 'hydrating',
    title: 'Cấp ẩm dịu nhẹ cho da nhạy cảm',
    tagline: 'Làm dịu làn da mẩn đỏ với Nước sen Hậu Giang',
    description: 'Dành cho làn da nhạy cảm, dễ kích ứng cần làm dịu và phục hồi màng ẩm.',
    idealFor: 'Da rất nhạy cảm, da thiếu ẩm',
    recommendedProductId: 'nuoc-sen-hau-giang-soothing-toner',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Rửa mặt sạch',
        productName: 'Làm sạch mặt với nước mát',
        action: 'Lấy đi bụi bẩn bề mặt',
        capacity: 'Thường quy'
      },
      {
        stepNumber: 2,
        stepName: 'Làm dịu & Cấp ẩm',
        productName: 'Nước sen Hậu Giang Soothing Toner',
        action: 'Vỗ nhẹ để dưỡng chất hoa sen và Madecassoside thẩm thấu',
        capacity: '140ml'
      },
      {
        stepNumber: 3,
        stepName: 'Dưỡng môi',
        productName: 'Son dưỡng dầu dừa Bến Tre',
        action: 'Thoa đều bảo vệ đôi môi suốt cả ngày',
        capacity: '5g'
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
    author: 'Trần Minh Hoàng',
    city: 'TP. Hồ Chí Minh',
    verified: true,
    productName: 'Cà phê Đắk Lắk làm sạch da chết cơ thể 200ml',
    date: '28/09/2026',
    content: 'Hạt cà phê xay cực kỳ đều và không bị sắc cạnh, mát-xa trên da êm mượt. Tắm xong da trơn mịn thơm phức mùi cà phê nguyên chất, vùng khủy tay và đầu gối mềm hơn hẳn sau 2 tuần.',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Lê Ngọc Ánh',
    city: 'Đà Nẵng',
    verified: true,
    productName: 'Nước dưỡng tóc tinh dầu bưởi Cocoon 140ml',
    date: '05/10/2026',
    content: 'Sau khi sinh tóc mình rụng rất nhiều. Kiên trì dùng chai xịt dưỡng bưởi này mỗi tối sau khi sấy tóc, sau 1 tháng thấy tóc con mọc lởm chởm ở vùng trán. Ưng nhất là không bị bết rít.',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Nguyễn Thu Trang',
    city: 'Hà Nội',
    verified: true,
    productName: 'Nước sen Hậu Giang làm dịu & cấp ẩm Cocoon',
    date: '14/10/2026',
    content: 'Da mình cực kỳ nhạy cảm và dễ đỏ. Nước sen vỗ lên mát rượi, dịu ngay lập tức mà không hề bị châm chích hay bết dính. Mùi sen nhẹ thanh rất thư giãn.',
    rating: 5
  },
  {
    id: 'rev-4',
    author: 'Phạm Phương Thảo',
    city: 'Cần Thơ',
    verified: true,
    productName: 'Son dưỡng dầu dừa Bến Tre Cocoon 5g',
    date: '20/10/2026',
    content: 'Giá chỉ 32k mà dưỡng ẩm đỉnh thật sự! Tối thoa một lớp dày sáng dậy môi mềm mượt, đánh son kem lì không bị lộ vân môi chút nào.',
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
    answer: 'Bạn nên bắt đầu từ nhu cầu và tình trạng hiện tại của làn da hoặc mái tóc (ví dụ: da cần làm dịu nhạy cảm, tóc gãy rụng, da cơ thể sần sùi). Đọc kỹ bảng mô tả, bảng thành phần đầy đủ và tuân theo hướng dẫn sử dụng của từng sản phẩm. Bạn cũng có thể dùng công cụ chọn lộ trình theo nhu cầu ngay trên trang này.'
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

export const COMPANY_INFO = {
  legalName: 'Công ty TNHH Mỹ phẩm Nature Story',
  brandName: 'Cocoon Việt Nam (The Cocoon Original Viet Nam)',
  address: '38C - 39C Khu phố 1, Quốc Lộ 1A, Phường Tân Thới Hiệp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam',
  hotline: '1800 646487 (Miễn phí cước gọi)',
  email: 'cskh@cocoonvietnam.com',
  website: 'https://cocoonvietnam.com/',
  businessLicense: 'Số ĐKKD: 0315873994 do Sở Kế hoạch & Đầu tư TP.HCM cấp'
};
