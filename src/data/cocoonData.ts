import { Product, Ingredient, Certification, RoutineNeed, ReviewItem } from '../types';

export const ANNOUNCEMENT_ITEMS = [
  {
    id: 'intro',
    text: 'Khám phá thế giới chăm sóc da và tóc thuần chay từ nguyên liệu Việt Nam.',
    cta: 'Khám phá sản phẩm',
    target: '#products'
  },
  {
    id: 'policy',
    text: 'Ưu đãi và chính sách giao hàng: Miễn phí vận chuyển cho đơn hàng từ 249.000đ · Tặng mẫu thử nguyên liệu bản địa.',
    cta: 'Xem ưu đãi',
    target: '#products'
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'skincare',
    name: 'Chăm sóc da',
    description: 'Làm sạch, dưỡng ẩm, cân bằng dầu thừa và chăm sóc chuyên sâu theo từng nhu cầu da.',
    itemCount: '18 sản phẩm'
  },
  {
    id: 'bodycare',
    name: 'Chăm sóc cơ thể',
    description: 'Làm sạch êm dịu, tẩy tế bào chết hạt cà phê Đắk Lắk và dưỡng thể mềm mượt.',
    itemCount: '12 sản phẩm'
  },
  {
    id: 'haircare',
    name: 'Chăm sóc tóc',
    description: 'Dầu gội, dầu xả và nước dưỡng tóc tinh dầu bưởi giúp giảm gãy rụng và phục hồi nang tóc.',
    itemCount: '9 sản phẩm'
  },
  {
    id: 'lipcare',
    name: 'Dưỡng môi',
    description: 'Tẩy tế bào chết môi và son dưỡng ẩm hằng ngày từ bơ hạt mỡ và cà phê Đắk Lắk.',
    itemCount: '6 sản phẩm'
  },
  {
    id: 'combo',
    name: 'Combo / Travel Kit',
    description: 'Lựa chọn phối hợp theo bộ chăm sóc toàn diện hoặc thuận tiện khi công tác, du lịch.',
    itemCount: '8 combo'
  },
  {
    id: 'refill',
    name: 'Túi refill',
    description: 'Lựa chọn nạp lại sản phẩm dung tích lớn, giúp giảm đến 80% rác thải nhựa bao bì.',
    itemCount: '5 phiên bản refill'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'nuoc-tay-trang-bi-dao',
    name: 'Nước tẩy trang bí đao',
    vietnameseName: 'Nước tẩy trang bí đao Cocoon',
    subtitle: 'Winter Melon Micellar Water',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da',
    capacity: '500ml',
    capacities: ['140ml', '500ml'],
    price: 295000,
    originalPrice: 320000,
    ingredientKey: 'Bí đao',
    ingredientRegion: 'Việt Nam',
    description: 'Với công nghệ Micellar hiện đại cùng chiết xuất bí đao tự nhiên, nước tẩy trang giúp làm sạch sâu lớp trang điểm, bụi bẩn và dầu thừa mà không làm khô căng hay cay mắt.',
    benefits: [
      'Làm sạch sâu bụi mịn PM2.5, bã nhờn và cặn trang điểm',
      'Kiểm soát lượng dầu thừa, hỗ trợ ngăn ngừa mụn hình thành',
      'Chiết xuất bí đao, rau má và tràm trà làm dịu làn da mẩn đỏ',
      'Độ pH chuẩn 5.5 cân bằng, không cồn, không paraben'
    ],
    mainIngredients: [
      'Bí đao (Benincasa Cerifera): Kháng viêm, làm mát và điều tiết bã nhờn',
      'Rau má (Centella Asiatica): Tăng sinh collagen, làm dịu da nhạy cảm',
      'Tinh dầu tràm trà (Tea Tree): Giảm khuẩn và làm xẹp nốt mụn sưng',
      'Betaine: Giữ ẩm từ củ cải đường tự nhiên'
    ],
    usage: 'Thấm đều sản phẩm lên bông tẩy trang rồi nhẹ nhàng lau khắp mặt và cổ theo chiều cấu tạo da. Không cần rửa lại với nước.',
    rating: 4.9,
    reviewCount: 3840,
    badge: 'Bán chạy nhất',
    texture: 'Dạng nước trong suốt thanh mát, hương thơm thảo mộc tự nhiên',
    colorHex: '#3A5B47'
  },
  {
    id: 'ca-phe-dak-lak-tay-da-chet-co-the',
    name: 'Cà phê Đắk Lắk làm sạch da chết cơ thể',
    vietnameseName: 'Cà phê Đắk Lắk Body Polish',
    subtitle: 'Dak Lak Coffee Body Polish',
    category: 'bodycare',
    categoryLabel: 'Chăm sóc cơ thể',
    capacity: '200ml',
    capacities: ['200ml', '600ml'],
    price: 165000,
    originalPrice: 185000,
    ingredientKey: 'Cà phê Đắk Lắk',
    ingredientRegion: 'Tây Nguyên, Đắk Lắk',
    description: 'Hạt cà phê Đắk Lắk nguyên chất được xay nhuyễn và sàng lọc tỉ lệ chuẩn, hòa quyện cùng bơ cacao Tiền Giang béo ngậy giúp nhẹ nhàng lấy đi lớp da chết sần sùi, mang lại làn da body sáng mịn, ẩm mượt.',
    benefits: [
      'Làm sạch tế bào chết toàn thân mà không gây xước hay rát da',
      'Cải thiện tình trạng viêm nang lông và da không đều màu',
      'Bơ cacao cấp ẩm sâu, không để lại cảm giác nhờn dính sau khi tắm',
      'Hương thơm cà phê rang xay nguyên bản tạo cảm giác thư giãn tuyệt đối'
    ],
    mainIngredients: [
      'Cà phê Đắk Lắk: Giàu chất chống oxy hóa và caffeine làm săn chắc da',
      'Bơ ca cao Tiền Giang: Giàu chất béo lành mạnh, dưỡng ẩm mượt mà',
      'Dầu đậu nành tự nhiên: Bảo vệ hàng rào lipid cho da'
    ],
    usage: 'Thoa một lượng sản phẩm lên da ướt. Mát-xa nhẹ nhàng từ cổ đến chân, sau đó tắm sạch lại với nước. Dùng 2–3 lần một tuần để đạt hiệu quả tốt nhất.',
    rating: 4.9,
    reviewCount: 5120,
    badge: 'Được yêu thích nhất',
    texture: 'Hạt cà phê xay mịn quyện trong kem bơ nâu ấm',
    colorHex: '#4C3B2C'
  },
  {
    id: 'nuoc-duong-toc-tinh-dau-buoi',
    name: 'Nước dưỡng tóc tinh dầu bưởi',
    vietnameseName: 'Nước dưỡng tóc tinh dầu bưởi Cocoon',
    subtitle: 'Pomelo Hair Tonic',
    category: 'haircare',
    categoryLabel: 'Chăm sóc tóc',
    capacity: '140ml',
    capacities: ['140ml', '310ml Refill'],
    price: 165000,
    originalPrice: 175000,
    ingredientKey: 'Bưởi',
    ingredientRegion: 'Việt Nam',
    description: 'Sự kết hợp giữa tinh dầu vỏ bưởi truyền thống Việt Nam cùng hoạt chất Xylishine và Vitamin B5 (Panthenol) giúp nuôi dưỡng nang tóc từ sâu bên trong, hạn chế gãy rụng và nuôi dưỡng mái tóc suôn mượt.',
    benefits: [
      'Giảm gãy rụng và hỗ trợ nuôi dưỡng sợi tóc dày khỏe',
      'Cung cấp dưỡng chất thiết yếu cho da đầu và chân tóc',
      'Kết cấu 2 pha dầu - nước mỏng nhẹ, không gây bết dính chân tóc',
      'Mùi hương vỏ bưởi thanh khiết, giải tỏa căng thẳng'
    ],
    mainIngredients: [
      'Tinh dầu vỏ bưởi nguyên chất: Giàu limonene giúp kháng khuẩn và kích thích nang tóc',
      'Xylishine (từ tảo nâu tự nhiên): Tăng cường độ bóng mượt và độ ẩm cho sợi tóc',
      'Vitamin B5 (Panthenol): Phục hồi cấu trúc hư tổn của thân tóc'
    ],
    usage: 'Lắc đều chai trước khi dùng để hòa tan 2 pha nước và dầu. Xịt trực tiếp lên chân tóc và thân tóc khi tóc sạch, mát-xa nhẹ nhàng 2-3 phút.',
    rating: 4.8,
    reviewCount: 4210,
    badge: 'Chăm sóc tóc bán chạy',
    texture: 'Dạng xịt sương 2 pha thẩm thấu tức thì không nhờn rít',
    colorHex: '#526A3A'
  },
  {
    id: 'mat-na-nghe-hung-yen',
    name: 'Mặt nạ nghệ Hưng Yên',
    vietnameseName: 'Mặt nạ nghệ Hưng Yên Cocoon',
    subtitle: 'Hung Yen Turmeric Mask',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da',
    capacity: '100ml',
    capacities: ['30ml', '100ml'],
    price: 345000,
    originalPrice: 375000,
    ingredientKey: 'Nghệ Hưng Yên',
    ingredientRegion: 'Hưng Yên',
    description: 'Mặt nạ chiết xuất từ tinh bột nghệ Hưng Yên dồi dào curcumin kết hợp chiết xuất yến mạch và vitamin B3 (Niacinamide), giúp cải thiện bề mặt da xỉn màu, mờ thâm mụn mà hoàn toàn không để lại vệt vàng sau khi rửa.',
    benefits: [
      'Cải thiện sắc tố da, làm mờ vết thâm sau mụn rõ rệt',
      'Bổ sung độ ẩm và chất chống oxy hóa tự nhiên cho làn da rạng rỡ',
      'Làm dịu làn da mệt mỏi do tác động môi trường khói bụi',
      'Dễ dàng rửa sạch bằng nước ấm, không gây ố vàng trên da'
    ],
    mainIngredients: [
      'Tinh bột nghệ Hưng Yên: Hàm lượng curcumin cao gấp 3 lần nghệ thông thường',
      'Chiết xuất yến mạch: Giảm kích ứng và nuôi dưỡng tế bào da',
      'Vitamin B3 (Niacinamide 4%): Làm sáng da đều màu và củng cố hàng rào lipid'
    ],
    usage: 'Thoa đều một lượng vừa đủ lên da mặt đã làm sạch, tránh vùng mắt. Để yên trong 20 phút rồi rửa sạch nhẹ nhàng bằng nước ấm.',
    rating: 4.8,
    reviewCount: 2980,
    badge: 'Làm sáng da tự nhiên',
    texture: 'Kem mịn màu vàng nghệ óng ả, êm dịu trên da',
    colorHex: '#9B7322'
  },
  {
    id: 'tay-te-bao-chet-moi-ca-phe',
    name: 'Tẩy tế bào chết môi cà phê Đắk Lắk',
    vietnameseName: 'Tẩy tế bào chết môi cà phê Đắk Lắk Cocoon',
    subtitle: 'Dak Lak Coffee Lip Scrub',
    category: 'lipcare',
    categoryLabel: 'Dưỡng môi',
    capacity: '5g',
    capacities: ['5g'],
    price: 75000,
    ingredientKey: 'Cà phê Đắk Lắk',
    ingredientRegion: 'Đắk Lắk',
    description: 'Hạt cà phê Đắk Lắk xay siêu nhuyễn quyện cùng bơ hạt mỡ và dầu mắc-ca giúp nhẹ nhàng loại bỏ lớp vảy sừng khô tróc trên môi, trả lại đôi môi hồng hào mềm mại.',
    benefits: [
      'Làm mềm và loại bỏ da chết trên môi nhẹ nhàng',
      'Giữ ẩm tự nhiên, giúp son môi lên màu chuẩn và mịn màng hơn',
      'Không chứa vi hạt nhựa (microbeads), 100% hạt thực vật tự nhiên'
    ],
    mainIngredients: [
      'Hạt cà phê Đắk Lắk siêu mịn',
      'Bơ hạt mỡ hữu cơ',
      'Dầu hạt mắc-ca giàu omega 7 dưỡng ẩm'
    ],
    usage: 'Lấy một lượng nhỏ thoa lên môi khô, mát-xa nhẹ theo hình xoắn ốc trong 30 giây rồi dùng khăn ướt hoặc nước ấm lau sạch.',
    rating: 4.9,
    reviewCount: 1890,
    texture: 'Sáp hạt mịn thoảng hương cà phê thơm ngọt',
    colorHex: '#644A32'
  },
  {
    id: 'gel-rua-mat-hoa-sen-hau-giang',
    name: 'Gel rửa mặt hoa sen Hậu Giang',
    vietnameseName: 'Gel rửa mặt hoa sen Hậu Giang Cocoon',
    subtitle: 'Hau Giang Lotus Cleanser',
    category: 'skincare',
    categoryLabel: 'Chăm sóc da',
    capacity: '140ml',
    capacities: ['140ml', '310ml Refill'],
    price: 175000,
    ingredientKey: 'Sen Hậu Giang',
    ingredientRegion: 'Hậu Giang, ĐBSCL',
    description: 'Chiết xuất từ hoa sen Hậu Giang cùng hợp chất làm sạch có nguồn gốc từ axit amin thực vật, giúp làm sạch sâu lỗ chân lông nhẹ nhàng mà vẫn giữ trọn màng ẩm sinh học.',
    benefits: [
      'Làm sạch dịu nhẹ không xà phòng (soap-free)',
      'Làm dịu làn da nhạy cảm và bảo vệ lớp màng bảo vệ da',
      'Cân bằng độ ẩm tự nhiên, da ẩm mượt sau khi rửa'
    ],
    mainIngredients: [
      'Chiết xuất hoa sen Hậu Giang giàu polyphenol chống oxy hóa',
      'Amino acid surfactants nguồn gốc dừa',
      'Chiết xuất hoa cúc xu xi làm dịu vết ửng đỏ'
    ],
    usage: 'Lấy lượng gel vừa đủ ra lòng bàn tay ướt, tạo bọt nhẹ và mát-xa đều lên mặt, sau đó rửa sạch với nước.',
    rating: 4.8,
    reviewCount: 1640,
    badge: 'Dành cho da nhạy cảm',
    texture: 'Gel trong suốt tạo bọt bông mịn màng',
    colorHex: '#4A6D58'
  },
  {
    id: 'tui-refill-nuoc-tay-trang-bi-dao',
    name: 'Túi Refill Nước tẩy trang bí đao 500ml',
    vietnameseName: 'Túi nạp lại nước tẩy trang bí đao',
    subtitle: 'Winter Melon Micellar Water Refill Pouch',
    category: 'refill',
    categoryLabel: 'Túi refill',
    capacity: '500ml',
    capacities: ['500ml'],
    price: 245000,
    originalPrice: 295000,
    ingredientKey: 'Bí đao',
    ingredientRegion: 'Việt Nam',
    description: 'Giải pháp nạp lại thông minh và tiết kiệm cho môi trường. Thiết kế túi vòi tiện lợi giúp bạn dễ dàng đổ đầy lại chai nước tẩy trang bí đao 500ml hiện có tại nhà.',
    benefits: [
      'Tiết kiệm đến 80% lượng rác thải nhựa so với việc mua chai mới',
      'Tiết kiệm 50.000đ trực tiếp vào giá thành sản phẩm',
      'Vòi rót kín chuẩn xác, thao tác nạp lại dễ dàng không đổ tràn'
    ],
    mainIngredients: [
      'Chiết xuất bí đao tự nhiên',
      'Rau má và tinh dầu tràm trà cân bằng da'
    ],
    usage: 'Mở nắp túi vòi và rót trực tiếp vào chai nước tẩy trang bí đao 500ml rỗng đã được vệ sinh sạch và để khô ráo.',
    rating: 4.9,
    reviewCount: 2150,
    badge: 'Tiết kiệm & Thân thiện',
    isRefill: true,
    texture: 'Nước tẩy trang dịu mát đựng trong túi nhôm sinh học',
    colorHex: '#2E583F'
  },
  {
    id: 'combo-cham-soc-da-dau-mun',
    name: 'Combo chăm sóc da dầu mụn Bí đao',
    vietnameseName: 'Bộ 3 Bí đao chăm sóc toàn diện',
    subtitle: 'Winter Melon Purifying Routine Set',
    category: 'combo',
    categoryLabel: 'Combo / Travel Kit',
    capacity: 'Bộ 3 sản phẩm',
    capacities: ['Full size bộ 3'],
    price: 615000,
    originalPrice: 720000,
    ingredientKey: 'Bí đao',
    ingredientRegion: 'Việt Nam',
    description: 'Bộ sản phẩm gồm: Nước tẩy trang bí đao 500ml, Gel rửa mặt bí đao 140ml và Tinh chất bí đao 7% Niacinamide 30ml tạo nên chu trình 3 bước thanh lọc làn da dầu mụn hiệu quả.',
    benefits: [
      'Chu trình khép kín: Làm sạch - Thanh lọc - Phục hồi',
      'Kiểm soát bóng nhờn suốt ngày dài',
      'Tiết kiệm hơn 15% khi mua theo bộ'
    ],
    mainIngredients: [
      'Bí đao Việt Nam, Niacinamide 7%, Tràm trà, Rau má'
    ],
    usage: 'Sử dụng theo thứ tự: Nước tẩy trang -> Gel rửa mặt -> Tinh chất bí đao vào mỗi sáng và tối.',
    rating: 4.9,
    reviewCount: 3100,
    badge: 'Combo bán chạy',
    texture: 'Trọn bộ chu trình chăm sóc chuẩn da liễu',
    colorHex: '#254B36'
  }
];

export const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 'bi-dao',
    name: 'Bí đao',
    scientificName: 'Benincasa Cerifera',
    region: 'Đồng bằng sông Hồng & Nam Bộ',
    regionDetail: 'Được thu hoạch từ những vườn nông sản chuẩn sạch tại Việt Nam',
    highlight: 'Nguyên liệu gắn với các sản phẩm chăm sóc da theo nhu cầu làm sạch và cân bằng dầu.',
    description: 'Trong y học cổ truyền Việt Nam, bí đao có tính hàn, vị ngọt thanh, có tác dụng thanh nhiệt làm mát. Khi ứng dụng vào mỹ phẩm, dịch chiết bí đao dồi dào axit amin, vitamin và chất chống oxy hóa tự nhiên giúp làm dịu nốt mụn sưng đỏ, làm sạch bã nhờn và phục hồi sự cân bằng tự nhiên cho da.',
    benefits: [
      'Kháng viêm và làm mát dịu bề mặt da',
      'Điều tiết lượng dầu thừa và ngăn ngừa mụn mới',
      'Làm thông thoáng lỗ chân lông bị bít tắc'
    ],
    associatedProducts: [
      'Nước tẩy trang bí đao 500ml',
      'Gel rửa mặt bí đao 140ml',
      'Tinh chất bí đao giảm dầu & mụn'
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
    highlight: 'Câu chuyện về hạt cà phê và sản phẩm làm sạch da chết cơ thể.',
    description: 'Đắk Lắk nổi tiếng là thủ phủ cà phê của Việt Nam. Những hạt cà phê Robusta chín mọng được tuyển chọn, phơi sấy và xay theo cỡ hạt tối ưu để loại bỏ lớp tế bào sừng già cỗi mà không làm trầy xước biểu bì da. Hàm lượng caffeine cao trong hạt cà phê kích thích vi tuần hoàn máu dưới da, đem lại bề mặt mịn màng và tươi sáng.',
    benefits: [
      'Lấy đi tế bào chết cơ thể êm dịu, tăng lưu thông máu',
      'Giàu chất chống oxy hóa tự nhiên bảo vệ làn da',
      'Mùi hương cà phê nồng nàn đem lại năng lượng tích cực'
    ],
    associatedProducts: [
      'Cà phê Đắk Lắk làm sạch da chết cơ thể',
      'Tẩy tế bào chết môi cà phê Đắk Lắk',
      'Sữa tắm cà phê Đắk Lắk'
    ],
    color: '#5A4331',
    iconType: 'coffee'
  },
  {
    id: 'nghe-hung-yen',
    name: 'Nghệ Hưng Yên',
    scientificName: 'Curcuma Longa (Hung Yen)',
    region: 'Chí Tân, Khoái Châu, Hưng Yên',
    regionDetail: 'Vùng đất phù sa sông Hồng tạo nên củ nghệ có hàm lượng curcumin vượt trội',
    highlight: 'Nguyên liệu quen thuộc được đưa vào sản phẩm chăm sóc da.',
    description: 'Nghệ là bài thuốc dân gian quen thuộc của người Việt từ ngàn xưa. Cocoon chọn nghệ trồng tại vùng Chí Tân (Hưng Yên) nổi danh nhờ lớp đất phù sa màu mỡ giúp củ nghệ tích tụ hàm lượng Curcuminoid cao gấp 3 lần bình thường. Công nghệ chiết tách hiện đại giữ trọn hoạt chất chống oxy hóa, làm mờ thâm mụn mà dễ dàng rửa sạch không để lại sắc vàng ố trên da.',
    benefits: [
      'Chống oxy hóa mạnh mẽ, ngăn ngừa lão hóa sớm',
      'Làm mờ vết thâm sạm và làm đều màu da',
      'Kháng viêm và củng cố hàng rào bảo vệ da'
    ],
    associatedProducts: [
      'Mặt nạ nghệ Hưng Yên',
      'Tinh chất nghệ Hưng Yên 22% Vitamin C',
      'Nước hoa hồng nghệ Hưng Yên'
    ],
    color: '#9C6E18',
    iconType: 'turmeric'
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
      'Nước dưỡng tóc tinh dầu bưởi',
      'Dầu gội bưởi không sulfate',
      'Dầu xả bưởi phục hồi tóc hư tổn'
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
      'Gel rửa mặt hoa sen Hậu Giang',
      'Nước hoa hồng hoa sen Hậu Giang',
      'Kem dưỡng ẩm làm dịu hoa sen'
    ],
    color: '#385F49',
    iconType: 'lotus'
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
    title: 'Da cần làm sạch & thanh lọc',
    tagline: 'Loại bỏ dầu thừa, cặn trang điểm và bụi bẩn cho lỗ chân lông thông thoáng',
    description: 'Lựa chọn tối ưu cho làn da dầu nhờn, có mụn hoặc thường xuyên tiếp xúc với khói bụi đô thị.',
    idealFor: 'Da dầu, da mụn, da hỗn hợp thiên dầu',
    recommendedProductId: 'nuoc-tay-trang-bi-dao',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Tẩy trang dịu nhẹ',
        productName: 'Nước tẩy trang bí đao 500ml',
        action: 'Thấm bông lau sạch bụi bẩn và dầu thừa',
        capacity: '500ml'
      },
      {
        stepNumber: 2,
        stepName: 'Rửa mặt tạo bọt',
        productName: 'Gel rửa mặt bí đao',
        action: 'Mát-xa 60 giây rửa sạch với nước mát',
        capacity: '140ml'
      },
      {
        stepNumber: 3,
        stepName: 'Cân bằng & làm dịu',
        productName: 'Nước bí đao cân bằng da',
        action: 'Vỗ nhẹ để da hấp thụ dưỡng chất thảo mộc',
        capacity: '140ml'
      }
    ]
  },
  {
    id: 'hydrating',
    title: 'Da cần dưỡng ẩm & phục hồi',
    tagline: 'Cấp nước sâu và làm dịu làn da khô ráp, nhạy cảm mẩn đỏ',
    description: 'Phù hợp cho làn da thiếu ẩm, hàng rào bảo vệ suy yếu cần được làm dịu và phục hồi tự nhiên.',
    idealFor: 'Da khô, da thiếu nước, da nhạy cảm',
    recommendedProductId: 'gel-rua-mat-hoa-sen-hau-giang',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Làm sạch êm dịu',
        productName: 'Gel rửa mặt hoa sen Hậu Giang',
        action: 'Làm sạch không xà phòng, bảo vệ màng ẩm',
        capacity: '140ml'
      },
      {
        stepNumber: 2,
        stepName: 'Dưỡng chất phục hồi',
        productName: 'Tinh chất hoa sen Hậu Giang',
        action: 'Cấp ẩm và củng cố hàng rào lipid cho da',
        capacity: '30ml'
      },
      {
        stepNumber: 3,
        stepName: 'Khóa ẩm bảo vệ',
        productName: 'Thạch bí đao dưỡng ẩm',
        action: 'Khóa chặt độ ẩm suốt 24 giờ liên tục',
        capacity: '30ml'
      }
    ]
  },
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
        stepName: 'Tắm sạch hằng ngày',
        productName: 'Sữa tắm cà phê Đắk Lắk',
        action: 'Làm sạch mồ hôi và bụi bẩn với bọt mịn',
        capacity: '500ml'
      },
      {
        stepNumber: 2,
        stepName: 'Tẩy tế bào chết định kỳ',
        productName: 'Cà phê Đắk Lắk làm sạch da chết',
        action: 'Mát-xa 2-3 lần/tuần cho làn da mịn mượt',
        capacity: '200ml'
      },
      {
        stepNumber: 3,
        stepName: 'Dưỡng thể mềm mại',
        productName: 'Bơ dưỡng thể cà phê Đắk Lắk',
        action: 'Cấp ẩm sâu và khóa dưỡng chất trên bề mặt da',
        capacity: '200ml'
      }
    ]
  },
  {
    id: 'haircare',
    title: 'Chăm sóc tóc & giảm gãy rụng',
    tagline: 'Nuôi dưỡng nang tóc và kích thích mọc tóc với tinh dầu bưởi Việt Nam',
    description: 'Giải pháp cho mái tóc mỏng yếu, dễ gãy rụng và da đầu dễ bị bết dính.',
    idealFor: 'Tóc thưa rụng, tóc qua xử lý nhiệt và hóa chất',
    recommendedProductId: 'nuoc-duong-toc-tinh-dau-buoi',
    steps: [
      {
        stepNumber: 1,
        stepName: 'Gội sạch dịu nhẹ',
        productName: 'Dầu gội bưởi không sulfate',
        action: 'Làm sạch chân tóc mà không làm khô ngọn',
        capacity: '310ml'
      },
      {
        stepNumber: 2,
        stepName: 'Xả tóc mượt mà',
        productName: 'Dầu xả bưởi phục hồi tóc',
        action: 'Ủ thân tóc 3 phút rồi xả sạch',
        capacity: '310ml'
      },
      {
        stepNumber: 3,
        stepName: 'Xịt dưỡng nang tóc',
        productName: 'Nước dưỡng tóc tinh dầu bưởi',
        action: 'Xịt sát da đầu mỗi ngày và mát-xa nhẹ',
        capacity: '140ml'
      }
    ]
  }
];

export const SUSTAINABILITY_INITIATIVES = [
  {
    id: 'refill-initiative',
    badge: 'Giảm 80% rác thải',
    title: 'Túi Refill Tiết Kiệm Bao Bì',
    tagline: 'Tái sử dụng chai cũ – Chung tay giảm rác thải nhựa',
    content: 'Cocoon cung cấp phiên bản túi refill dung tích lớn cho các sản phẩm thiết yếu như Nước tẩy trang bí đao 500ml, Dầu gội bưởi, Sữa tắm cà phê. Sử dụng túi refill giúp giảm tới 80% lượng nhựa so với việc sản xuất chai mới, đồng thời giúp bạn tiết kiệm chi phí mua sắm thông minh.'
  },
  {
    id: 'bottle-recycle',
    badge: 'Đổi vỏ chai cũ',
    title: 'Thu Hồi Vỏ Chai Cũ Nhận Sản Phẩm',
    tagline: 'Mỗi vỏ chai gửi lại là một cam kết cho hành tinh xanh',
    content: 'Chương trình thu hồi vỏ chai rỗng Cocoon đã làm sạch được diễn ra thường niên tại hơn 80 điểm thu gom tại TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và các chuỗi đối tác phân phối. Khách hàng gửi lại từ 5 vỏ chai rỗng sẽ nhận được các sản phẩm hoặc quà tặng trải nghiệm thuần chay.'
  },
  {
    id: 'community-action',
    badge: 'Trách nhiệm xã hội',
    title: 'Bảo Tồn Động Vật & Trồng Rừng Bản Địa',
    tagline: 'Tôn trọng sự sống và thiên nhiên của dải đất Việt Nam',
    content: 'Cocoon trích một phần doanh thu phối hợp cùng Tổ chức Động vật Châu Á (AAF) triển khai dự án cải thiện phúc lợi cho đàn voi nhà tại Đắk Lắk và cứu trợ gấu ngựa. Đồng thời, Cocoon đồng hành cùng các trung tâm bảo tồn thiên nhiên phủ xanh rừng đầu nguồn tại Việt Nam.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Nguyễn Thu Trang',
    city: 'Hà Nội',
    verified: true,
    productName: 'Nước tẩy trang bí đao 500ml',
    date: '14/10/2026',
    content: 'Mình da dầu mụn rất nhạy cảm, dùng nhiều loại micellar water của Pháp hay bị khô căng ở cánh mũi. Đổi sang nước tẩy trang bí đao của Cocoon thấy sạch dịu, da mềm mà không hề bị châm chích. Mùi tràm trà và bí đao rất dễ chịu.',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Trần Minh Hoàng',
    city: 'TP. Hồ Chí Minh',
    verified: true,
    productName: 'Cà phê Đắk Lắk làm sạch da chết cơ thể',
    date: '28/09/2026',
    content: 'Hạt cà phê xay cực kỳ đều và không bị sắc cạnh, mát-xa trên da êm mượt. Tắm xong da trơn mịn thơm phức mùi cà phê nguyên chất, vùng khủy tay và đầu gối mềm hơn hẳn sau 2 tuần.',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Lê Ngọc Ánh',
    city: 'Đà Nẵng',
    verified: true,
    productName: 'Nước dưỡng tóc tinh dầu bưởi 140ml',
    date: '05/10/2026',
    content: 'Sau khi sinh tóc mình rụng rất nhiều. Kiên trì dùng chai xịt dưỡng bưởi này mỗi tối sau khi sấy tóc, sau 1 tháng thấy tóc con mọc lởm chởm ở vùng trán. Ưng nhất là không bị bết rít như dầu dưỡng thông thường.',
    rating: 5
  },
  {
    id: 'rev-4',
    author: 'Vũ Hải Đăng',
    city: 'Cần Thơ',
    verified: true,
    productName: 'Mặt nạ nghệ Hưng Yên 100ml',
    date: '20/09/2026',
    content: 'Trước đây sợ đắp nghệ bị vàng mặt mấy ngày không hết, nhưng mặt nạ nghệ Cocoon rửa với nước ấm là sạch trơn. Vết thâm mụn mới mờ khá nhanh, da trông sáng khỏe tự nhiên.',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    question: 'Cocoon có phải là thương hiệu mỹ phẩm thuần chay không?',
    answer: 'Cocoon định vị sản phẩm theo hướng thuần chay (100% Vegan). Tất cả công thức sản phẩm của Cocoon cam kết không sử dụng bất kỳ nguyên liệu nào có nguồn gốc từ động vật (như sáp ong, mỡ cừu, dịch ốc sên, collagen động vật). Người mua nên xem thông tin sản phẩm chi tiết và phạm vi chứng nhận được công bố chính thức trên website Cocoon.'
  },
  {
    question: 'Làm sao để chọn sản phẩm phù hợp với da hoặc tóc?',
    answer: 'Bạn nên bắt đầu từ nhu cầu và tình trạng hiện tại của làn da hoặc mái tóc (ví dụ: da cần làm sạch dầu thừa, da cần cấp ẩm, tóc gãy rụng, da cơ thể sần sùi). Đọc kỹ bảng mô tả, bảng thành phần đầy đủ và tuân theo hướng dẫn sử dụng của từng sản phẩm. Bạn cũng có thể dùng công cụ chọn lộ trình theo nhu cầu ngay trên trang này.'
  },
  {
    question: 'Sản phẩm có thử nghiệm trên động vật không?',
    answer: 'Không. Cocoon cam kết nhân đạo và không thử nghiệm trên động vật trong bất kỳ giai đoạn phát triển nào. Thương hiệu được chứng nhận bởi Cruelty Free International (Leaping Bunny) và tổ chức PETA (Beauty Without Bunnies).'
  },
  {
    question: 'Làm thế nào để đặt hàng?',
    answer: 'Bạn chỉ cần chọn sản phẩm yêu thích, kiểm tra dung tích và giá niêm yết, nhấn nút "Thêm vào giỏ" hoặc "Mua ngay". Tiếp theo, mở giỏ hàng để kiểm tra số lượng và điền thông tin giao nhận để hoàn tất đặt hàng qua phương thức thanh toán thuận tiện nhất (COD nhận hàng thanh toán hoặc chuyển khoản).'
  },
  {
    question: 'Phí giao hàng và thời gian nhận hàng là bao lâu?',
    answer: 'Cocoon áp dụng chính sách miễn phí giao hàng toàn quốc cho đơn hàng có giá trị từ 249.000đ trở lên. Với đơn hàng dưới ngưỡng, phí vận chuyển tiêu chuẩn là 25.000đ - 35.000đ tùy khu vực. Thời gian giao hàng thông thường từ 1–2 ngày làm việc tại TP.HCM & Hà Nội, và 2–4 ngày tại các tỉnh thành khác.'
  },
  {
    question: 'Cocoon có chương trình thu hồi vỏ chai hoặc túi refill không?',
    answer: 'Có. Cocoon triển khai cả hai giải pháp bền vững: cung cấp các dòng Túi Refill dung tích lớn tiết kiệm đến 80% rác thải nhựa, và chương trình định kỳ thu hồi vỏ chai rỗng đã làm sạch tại hệ thống cửa hàng và điểm phân phối để tái chế, đổi lấy quà tặng tri ân.'
  }
];

export const COMPANY_INFO = {
  legalName: 'Công ty TNHH Mỹ phẩm Nature Story',
  brandName: 'Cocoon Việt Nam',
  address: '38C - 39C Khu phố 1, Quốc Lộ 1A, Phường Tân Thới Hiệp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam',
  hotline: '1800 646487 (Miễn phí cước gọi)',
  email: 'cskh@cocoonvietnam.com',
  website: 'https://cocoonvietnam.com/',
  businessLicense: 'Số ĐKKD: 0315873994 do Sở Kế hoạch & Đầu tư TP.HCM cấp'
};
