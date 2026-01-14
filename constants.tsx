
import { ProjectDetail, ChecklistItem, MentorDetail, LogoGroup, Offering, BlogPost, Product } from './types';

export const LONG_THOUGHTS_PARAGRAPHS = [
  "Long bắt đầu hành trình Làm <b>Marketing Chuyên Biệt Ngành Ăn Uống</b> không phải từ trường lớp bài bản, mà chỉ là một thằng nhóc lóc cóc tập bán cà phê cổng trường, rồi kinh qua đủ vị trí từ bưng bê, pha chế đến lần đầu được làm marketing với tháng lương <b>1 triệu</b>. Chính những năm tháng \"lấm lem\" đó đã cho Long nhiều trải nghiệm quý giá và góc nhìn sâu hơn trong ngành ăn uống nói chung và nghề marketing cho ngành ăn uống nói riêng.",
  "Long biết, ngoài kia có rất nhiều lời hứa hẹn về việc \"<b>bùng nổ doanh số</b>\" hay \"<b>vạn đơn mỗi ngày</b>\". Nhưng chúng ta hãy trung thực với nhau một chút, bởi vì FnB là ngành \"<b>nhặt bạc lẻ</b>\". Khoan nói đến những ông lớn hay vài mô hình ăn uống đặc thù có lợi nhuận cao. Đúng là vẫn tồn tại những mô hình như thế, nhưng nó không đại diện cho phần đông anh chị chủ quán đang vật lộn 12 tiếng mỗi ngày để giữ cho đứa con tinh thần của mình còn hoạt động. Lợi nhuận vốn đã mỏng, chúng ta không thể \"đốt tiền\" quảng cáo vô tội vạ như những ngành xa xỉ, mà phải chắt chiu từng đồng để <b>sao cho không lỗ</b>.",
  "Và một điều quan trọng không kém, Làm nghề ăn uống, marketing chưa bao giờ là chiếc gậy phép quyết định sự sống còn. Bên cạnh marketing, các cột trụ <b>Sản Phẩm</b>, <b>Dịch Vụ</b>, <b>Vận Hành</b>... cũng quan trọng không kém, và luôn là thứ Long phải trau dồi để có thêm phần nào kiến thức đồng hành cùng anh chị chủ quán.",
  "Long không ở đây để vẽ ra một viễn cảnh màu hồng. Long ở đây để cùng anh chị làm marketing một cách <b>Chân thực và Phù hợp</b>. Long hướng tới những giải pháp ngân sách thấp, bắt đầu từ việc tối ưu \"sự hiện diện\" của quán, để khách hàng nhìn thấy và cho họ lý do để <b>tới quán một lần đầu tiên</b>.",
  "<b>Sống cái đã, mọi chuyện khác tính sau!</b>"
];

export const STORY_TABS_CONTENT = {
  did: {
    label: 'Long đã làm gì?',
    preview: 'Một vài thứ nho nhỏ Long cùng những người bạn đã đạt được trên hành trình Làm Truyền Thông Ngành Ăn Uống',
    sections: [
      {
        id: 'events',
        title: 'CHIẾN DỊCH TIÊU BIỂU',
        description: 'Những sự kiện nổi bật Long đồng hành',
        items: [
          {
            title: 'Dagi Shark Coffee & Tea',
            videoUrl: 'https://www.youtube.com/embed/Qb2ek3S6kdA?rel=0',
            results: 'Chiến dịch trà sữa 9k bán được 1000 ly 1 ngày',
            image: 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe6?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Riko Cha ở Bản Tàm Xá',
            videoUrl: 'https://www.youtube.com/embed/Oc-z8XSGKcc?rel=0',
            results: 'Chiến dịch Mua 1 tặng 10 tạo hàng dài khách xếp hàng cả tối',
            image: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Bạch Dương Trà',
            videoUrl: 'https://www.youtube.com/embed/0HDYzeFaYOw?rel=0',
            results: 'Chiến dịch ra mắt món mới, đạt 66% khách hàng quay trở lại',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Khởi - Autoshop',
            brand: 'Chuỗi sự kiện ngành đồ uống quy tụ hàng ngàn chủ quán, đại lý và thương hiệu FnB tham dự.',
            videoUrl: 'https://www.youtube.com/embed/8JhWvZB89J0',
            results: '2024 - Đà Nẵng - 300 khách tham dự\n2025 - Hà Nội - 900 khách tham dự\n2025 - Tp.HCM - 1000 khách tham dự',
            image: 'https://i.ibb.co/HDfzQnJf/KHOI-2025-Backdrop-2-4x.png'
          }
        ] as ProjectDetail[]
      },
      {
        id: 'partnership',
        title: 'CÁC THƯƠNG HIỆU ĐÃ ĐỒNG HÀNH',
        description: 'Các công ty, thương hiệu Long đã và đang làm việc',
        logoGroups: [
          {
            company: 'MARKETINGNHAHANG.VN',
            roles: [
              { title: 'Content Marketing', time: 'Tháng 12/2022 - Tháng 6/2023' }
            ],
            logos: [
              { id: 'l1', name: 'Nhậu Châm', src: 'https://i.ibb.co/HTVtbMys/312150724-115670824660274-3953477521698005814-n.jpg', note: '', fill: true },
              { id: 'l2', name: 'Phở Gà Châm', src: 'https://i.ibb.co/nMyzkgwY/280101361-133528069268803-4820212031245662118-n.jpg', note: '', fill: true },
              { id: 'l3', name: 'Yên Gia Restaurant & Café', src: 'https://i.ibb.co/S71mszkR/ava-01.png', note: '', fill: true },
              { id: 'l4', name: 'Chuquancafe.com', src: 'https://i.ibb.co/vvYyGKNz/images.jpg', note: '', fill: true },
              { id: 'l5', name: 'Trendy - Nguyên Liệu pha chế', src: 'https://i.ibb.co/wr6r7Y2w/305804394-209820538052657-8548600830170770875-n.jpg', note: '', fill: true }
            ],
            featuredImage: 'https://i.ibb.co/h5Y4NBj/brandmktnh.png'
          },
          {
            company: 'AUTOSHOP\nVua Máy Pha Chế',
            roles: [
              { title: 'Content Marketing', time: 'Tháng 7/2023 - Tháng 3/2024' },
              { title: 'Marketing Team Leader', time: 'Tháng 4/2024 - Hiện tại' }
            ],
            logos: [
              { id: 'a1', name: 'Ceria', src: 'https://i.ibb.co/Ngw2Dx4H/CERIA-LOGO-02-4x.png', note: 'Triển khai chiến dịch truyền thông đa kênh', fill: true },
              { id: 'a2', name: 'Nuova Era', src: 'https://i.ibb.co/1YHmQrrY/NUOVA-ERA-TACH-NEN.png', note: 'Tăng trưởng nhận diện thương hiệu tại thị trường miền Bắc', fill: true },
              { id: 'a3', name: 'Promix', src: 'https://i.ibb.co/20VYh7L8/PROMIX-NEN-TRANG.png', note: 'Tổ chức chuỗi workshop chuyên sâu cho chủ quán', fill: true },
              { id: 'a4', name: 'Autoshop Setup', src: 'https://i.ibb.co/0StjnVt/Autoshop-Setup-7.png', note: 'Đạt cột mốc 10.000 khách hàng tiềm năng', fill: true },
              { id: 'a5', name: 'Lacilio', src: 'https://i.ibb.co/wrxqXL4P/Lacilio-Coffee-Machine-Logo-1.png', note: 'Tối ưu quy trình vận hành marketing nội bộ', fill: true }
            ],
            featuredImage: 'https://i.ibb.co/209Q6L2M/Untitled-design.png'
          },
          {
            company: 'MARKETING QUÁN ĐỒ UỐNG',
            roles: [{ title: 'Các thương hiệu nổi bật', time: 'Long đã và đang đồng hành' }],
            logos: [
              { id: 'f1', name: 'Đảo Matcha Hải Dương', src: 'https://i.ibb.co/gFttDqNm/3.png', note: 'Gói Content cho 2 chi nhánh nhượng quyền Đảo Matcha Hải Dương', fill: true },
              { id: 'f2', name: 'E-Coffee Ecorivers', src: 'https://i.ibb.co/mF65g9PH/1.png', note: 'Gói Content cho chi nhánh nhượng quyền E-Coffee Hải Dương', fill: true },
              { id: 'f3', name: 'An House Coffee & Tea', src: 'https://i.ibb.co/fVgVbBBG/2.png', note: 'Gói Marketing tổng thể thương hiệu', fill: true },
              { id: 'f4', name: 'Dagi Shark Coffee & Tea', src: 'https://i.ibb.co/5g8hcHvm/5.png', note: 'Gói tổ chức sự kiện kích hoạt điểm bán', fill: true },
              { id: 'f5', name: 'Riko Cha Ở Bản Tàm Xá', src: 'https://i.ibb.co/GQ22mYmG/4.png', note: 'Gói tổ chức sự kiện kích hoạt điểm bán', fill: true }
            ],
            featuredImage: 'https://i.ibb.co/N2PmnFmd/brand.png'
          }
        ] as LogoGroup[]
      },
      {
        id: 'other_activities',
        title: 'MỘT SỐ HOẠT ĐỘNG KHÁC',
        description: 'Các hoạt động liên quan đến marketing FnB',
        items: [
          {
            title: 'Xây Dựng Group Facebook',
            brand: 'Người Làm Quán',
            results: 'Đạt 10.000 thành viên sau 2 tháng',
            image: 'https://i.ibb.co/G30DzXPP/Screenshot-2025-12-25-at-11-17-09.png',
            videoUrl: ''
          },
          {
            title: 'Sản xuất tài liệu Marketing FnB',
            results: 'Sản xuất và hỗ trợ sản xuất 30+ sách, ebook, template ngành FnB, sử dụng làm quà tặng cho hàng ngàn chủ quán.',
            image: 'https://i.ibb.co/Rk9b9Fc0/Thie-t-ke-chu-a-co-te-n.png',
            videoUrl: ''
          },
          {
            title: 'Ứng dụng AI vào tạo Web, App và Tools cho ngành FnB',
            results: 'Vibe-coding và phát triển giao diện, nội dung cho App đào tạo ATS cho 100+ nhân sự, sản xuất 5+ Tools AI hỗ trợ làm marketing FnB',
            image: 'https://i.ibb.co/bR6R2jgb/ai.png',
            videoUrl: ''
          },
          {
            title: 'Xây kênh Tiktok',
            results: 'Đồng hành và hỗ trợ xây kênh Tiktok bán hàng',
            image: '',
            videoUrl: '',
            subItems: [
              { name: 'Long Mở Quán Cà Phê', image: 'https://i.ibb.co/KpdYkSHV/Screenshot-2025-12-25-at-16-20-24.png' },
              { name: 'Đức Máy Say', image: 'https://i.ibb.co/jvry3j7j/Screenshot-2025-12-25-at-16-21-42.png' },
              { name: 'Toàn Mở Quán Cà Phê', image: 'https://i.ibb.co/svfRYbSR/Screenshot-2025-12-25-at-16-20-50.png' },
              { name: 'Autoshop - Vuamayphache', image: 'https://i.ibb.co/5WgN8VGQ/Screenshot-2025-12-25-at-16-21-22.png' }
            ]
          }
        ] as ProjectDetail[]
      }
    ]
  },
  dont: {
    label: 'Long không làm gì?',
    preview: 'Cái khó nhất là biết mình sẽ KHÔNG LÀM GÌ để tập trung vào những giá trị thật sự cốt lõi cho khách hàng.',
    details: [
      {
        title: 'Không nhận việc ngoài ngành',
        reason: 'Yếu tố đầu tiên trong ngành marketing là khả năng định vị, và Long đã định vị bản thân là một "Marketing F&B Expert" - Người làm truyền thông chuyên biệt ngành ăn uống. Như vậy, những thứ Long học và làm sẽ được chuyên môn hoá sâu cho một ngành ăn uống mà thôi. (Vì nhận ngành khác cũng có biết gì đâu mà làm)'
      },
      {
        title: 'Không làm việc một mình',
        reason: 'Long luôn hoạt động theo đội nhóm để triển khai các hoạt động marketing. Và thường thì Long sẽ đứng ở vị trí quản lý dự án để điều phối đồng đội thực hiện từng đầu việc cụ thể như viết bài, chỉnh sửa ảnh, quay dựng video... Nên Long không làm hết tất cả, và làm việc với Long đồng nghĩa với làm việc cùng một phòng marketing nho nhỏ.'
      },
      {
        title: 'Không nhận quá 3 dự án cùng lúc',
        reason: 'Để đảm bảo chất lượng sản phẩm đầu ra cho chủ quán, Long chỉ nhận không quá 3 dự án Marketing Tổng Thể/tháng. Chủ quán vẫn có thể trò chuyện cùng Long để tự triển khai marketing cho quán. (Trò chuyện với Long miễn phí nên thoải mái nha)'
      },
      {
        title: 'Không nhận Marketing Tổng Thể cho các quán ngoài phạm vi Hà Nội - Hưng Yên - Hải Dương',
        reason: 'Long đang không đủ điều kiện để phụ trách các thương hiệu ở khu vực xa - nơi Long không thường xuyên lui tới quán để đảm bảo chăm chút được cho thương hiệu. Với những quán ở xa, Long có gói "Đóng Gói Thương hiệu" - Bàn giao một quy trình thương hiệu đầy đủ kèm hướng dẫn để chủ quán tự triển khai cho quán của mình.'
      }
    ] as ChecklistItem[]
  },
  learned: {
    label: 'Long đã học ai?',
    preview: 'Từ gia đình, bạn bè, xã hội, mỗi người Long tiếp xúc đều để lại những bài học khác nhau và thành thầy của Long ở khía cạnh nào đó. Nhưng nếu nói đến 3 người thầy giúp Long thay đổi nhiều nhất, đó chính là...',
    details: [
      {
        name: 'Thầy Thông Phan',
        role: 'CMO - Autoshop Vua Máy Pha Chế | Co-Founder Conan School - Trường đào tạo thu hút khách hàng',
        story: 'Anh Thông chính là người Long mang ơn nhiều nhất trên hành trình trưởng thành, cả về tư duy, kiến thức và năng lực hành động. Mình luôn thấy ở anh Thông một sức hút khó tả với năng lượng sáng tạo luôn sục sôi và máu phiêu lưu chả ngán "cha con ai cả". Một người thầy đầy nội lực có sẵn lời giải cho bất kỳ câu hỏi nào mình đưa ra, nhưng sẽ chỉ nói khi Long đã thử, sai và đứng dậy làm lại. Đúng như triết lý của anh: "Khi học trò sẵn sàng, người thầy sẽ xuất hiện"',
        image: 'https://i.ibb.co/s9ByZqW8/122022-052023.png'
      },
      {
        name: 'Bạch Ngọc Quân',
        role: 'Cựu Marketing Team Leader - Autoshop | Digital Leader - iPOS',
        story: 'Quân sinh cách mình 5 ngày thôi, nhưng về sự trưởng thành và tư duy làm nghề, mình luôn tự nhận chậm hơn Quân ít nhất hai năm. Trong Quân tỏ rõ khí chất của một người "làm được việc" - người sẽ gật đầu với bất cứ thử thách nào được giao cho. Và nếu chưa biết làm việc đó, Quân sẽ vừa làm vừa học từ vài người thầy hay ông anh Ấn Độ ngẫu nhiên trên Youtube. Dù phải thức trắng một hay nhiều đêm, nhất định Quân sẽ có lời giải cho bài toán đó. Với mình, Quân vừa là thầy, vừa là bạn, vừa là đối thủ để bản thân nỗ lực chạy đua.',
        image: 'https://i.ibb.co/Q7YKHqDD/quanngoc.png'
      },
      {
        name: 'Thu Trang',
        role: 'Content Marketing - Marketingnhahang.vn',
        story: 'Haha không biết có khi nào Trang đọc được dòng này không, nhưng thực sự em ấy là người đã "dắt" Long đi những buổi quay chụp "thực địa" đầu tiên, hướng dẫn Long cách viết sao cho hay, ngắt nghỉ câu sao cho đúng, và quan trọng nhất là dạy Long những kiến thức cơ bản nhất để trở thành một người làm truyền thông ngành ăn uống. Đi cùng Trang những ngày học việc, Long thấy mình đã nhận được thật nhiều thứ giá trị từ cô gái này. Từ nét chỉn chu trong từng câu chữ, sự cầu toàn cho mỗi tấm hình tới tinh thần trách nhiệm cao luôn hoàn thành KPI dù còn đang đi học. Đây đều là bài học vỡ lòng mãi không quên được.',
        image: '/thu_trang_avatar.png'
      }
    ] as MentorDetail[]
  },
  mentored: {
    label: 'Long đã hướng dẫn ai?',
    preview: 'Những người đi từ số 0, và Long đã đồng hành tới khi các bạn sở hữu một kỹ năng và thành tựu nhất định',
    details: [
      {
        name: 'Hoàng Thảo Vân',
        role: 'Sinh viên năm 2 ngành Marketing',
        story: 'Hehe, em ruột và cũng là "trợ thủ" của Long nè. Chưa vào học chuyên ngành, Vân đã "bị" Long ép vừa học vừa làm marketing cho 2 cơ sở nhượng quyền Đảo Matcha Hải Dương và E-Coffee Hải Dương. Và dù còn nhiều non nớt, mình tin em gái sẽ sớm phát triển và sẽ vượt qua Long khi cùng độ tuổi.',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Quang Minh',
        role: 'Sinh viên năm 4 ngành IT',
        story: 'Một thí sinh trái ngành chấp nhận đi làm không lương để học hỏi. Long khâm phục nhóc này ở khoản tư duy và tính thích ứng nhanh, đã "bòn rút" rất nhiều kiến thức mà Long phải mất nhiều thời gian mới tích cóp được.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Nguyễn Xuân Đức',
        role: 'Content - Autoshop',
        story: 'Là một người trẻ đầy cá tính và rap cũng rất ngầu, Long thấy ở Đức nhiều năng lượng cần được khai phá, và đã cùng Đức xây nên kênh Tiktok Đức Máy Say với những video 100k view đầu tiên.',
        image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Nguyễn Hiền',
        role: 'Content - Autoshop',
        story: 'Long rất nể chị Hiền về khoản thích nghi, chăm chỉ và dám bắt đầu khi đã nhanh chóng học hỏi, cải tiến không ngừng để biến những video 100-200 view đến hàng loạt video bán hàng 10.000 -20.000 view.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
      }
    ] as MentorDetail[]
  }
};

export const OFFERINGS: Offering[] = [
  {
    id: 'total-marketing',
    title: 'Marketing Tổng Thể',
    description: 'Thực hiện marketing tổng thể cho quán, bao gồm các hoạt động về định vị và tổ chức sự kiện.',
    icon: '⚡',
    details: [
      'Nghiên cứu thị trường và đối thủ cạnh tranh',
      'Xác định tệp khách hàng mục tiêu và Insight',
      'Xây dựng Concept và định vị thương hiệu',
      'Lên kế hoạch và triển khai các sự kiện bùng nổ (Grand Opening, Món mới...)',
      'Vận hành quảng cáo đa kênh (FB, Tiktok) tối ưu chi phí'
    ]
  },
  {
    id: 'brand-packaging',
    title: 'Đóng Gói Thương Hiệu',
    description: 'Bàn giao bộ định vị và kế hoạch truyền thông chạy được trong 3-6 tháng.',
    icon: '📦',
    details: [
      'Xây dựng bộ nhận diện cốt lõi (Core Identity)',
      'Thiết kế bộ Content Pillar (Xương sống nội dung)',
      'Hướng dẫn quản trị và chăm sóc Fanpage chuyên nghiệp',
      'Cung cấp quy trình truyền thông bài bản để chủ quán tự vận hành',
      'Bàn giao bộ Template hình ảnh/video mẫu'
    ]
  }
];

export const RESOURCES = [
  {
    id: 'c1',
    title: 'Mẫu Content Plan 1 tháng',
    price: '99k',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    category: 'Document',
    description: 'File Excel kế hoạch nội dung quán cà phê trong 1 tháng.'
  },
  {
    id: 'c2',
    title: 'Checklist Marketing Khai Trương',
    price: '2.490k',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    category: 'Document',
    description: 'Các đầu việc cần chuẩn bị để có một ngày khai trương bùng nổ.'
  },
  {
    id: 'c3',
    title: 'Ebook: Tối ưu Menu & Costing',
    price: '1.200k',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec41b505?auto=format&fit=crop&q=80&w=800',
    category: 'Document',
    description: 'Cách thiết kế menu tăng tỷ lệ upsell và kiểm soát chi phí nguyên liệu.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Trang 404 của bạn có đang làm mất khách hàng?',
    excerpt: '404 là gì? Có đáng để đổ tiền cho một campaign về trang 404 không?',
    date: '18/12/2025',
    readTime: '1 min',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Chọn ĐÚNG việc để làm!',
    excerpt: 'Một trong những kỹ năng sinh tồn, đặc biệt nếu bạn cực kỳ hạn chế về nguồn lực. Đó là chọn ĐÚNG việc để làm!',
    date: '17/12/2025',
    readTime: '1 min',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'ADS to ChatGPT (AI) Shopping?',
    excerpt: 'Cứ cái đà này mình nghĩ rồi khách hàng sẽ "lười" tới mức mà họ thấy quảng cáo của chúng ta trên các nền tảng: họ ko click, cũng chẳng...',
    date: '29/04/2025',
    readTime: '1 min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export const THOUGHTS_CAROUSEL_ITEMS = [
  {
    title: '3SIU KINHCONG COFFEE',
    date: '04/2019',
    description: 'Lần đầu khởi nghiệp bán cà phê dạo',
    image: 'https://i.ibb.co/ym2bpFqC/3siu.png'
  },
  {
    title: 'ĐI LÀM QUÁN',
    date: 'Nhiều khung thời gian',
    description: 'Đi làm thêm nhiều quán cà phê để tích luỹ kinh nghiệm',
    image: 'https://i.ibb.co/v4gg89ZF/3.png'
  },
  {
    title: 'The Bup - Hải Dương',
    date: '11/2021',
    description: 'Nhận job marketing đầu tiên cho một quán ở Hải Dương',
    image: 'https://i.ibb.co/rRQTTWhD/4.png'
  },
  {
    title: 'Marketingnhahang.vn',
    date: '12/2022',
    description: 'Lần đầu học làm marketing bài bản và làm content cho Chuquancafe.com, Trendy, Học Viện HQJ Hà Nội',
    image: 'https://i.ibb.co/qLv33xx3/6.png'
  },
  {
    title: 'Kênh Tiktok Marketingnhahang.vn',
    date: '3/2022',
    description: 'Được giao xây kênh Tiktok Marketingnhahang.vn và có video >100k view đầu tiên',
    image: 'https://i.ibb.co/4nnJx82c/5.png'
  },
  {
    title: 'Autoshop - Vua máy pha chế',
    date: '07/2023',
    description: 'Gia nhập Autoshop và đi theo anh Thông Phan, bắt đầu nghiêm túc theo định hướng Marketing FnB expert',
    image: 'https://i.ibb.co/2HPTFRF/7.png'
  },
  {
    title: 'Autoshop - Vua máy pha chế',
    date: '09/2023',
    description: 'Phụ trách Content cho 4/7 thương hiệu của Autoshop',
    image: 'https://i.ibb.co/B2t16gjN/phutrach.png'
  },
  {
    title: 'Autoshop - Vua máy pha chế',
    date: '02/2024',
    description: 'Được tin tưởng giao vị trí Marketing Team Leader',
    image: 'https://i.ibb.co/TCrDn6z/8.png'
  },
  {
    title: 'Tới hết 2025',
    date: '',
    description: 'Thực hiện thành công 7 chiến dịch lớn cùng nhiều chiến dịch vừa và nhỏ, nhiều tháng đạt 150 - 200% KPI doanh số',
    image: 'https://i.ibb.co/0NhmC6v/10.png'
  },
  {
    title: 'Định hướng 2026',
    date: '',
    description: 'Đang trên hành trình trở thành người đồng hành có khả năng đúc rút và chia sẻ lại những kinh nghiệm bản thân học hỏi được sau 4 năm làm nghề',
    image: 'https://i.ibb.co/cSRYzZ9T/11.png'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'goi-marketing-tong-the',
    title: 'MARKETING TỔNG THỂ',
    shortDescription: 'Thực hiện marketing tổng thể cho quán, bao gồm các hoạt động về định vị và tổ chức sự kiện.',
    description: `
      <h3>Tổng quan</h3>
      <p>Đây là giải pháp toàn diện nhất mà Long cung cấp, dành cho các chủ quán muốn xây dựng một hệ thống marketing bài bản ngay từ đầu hoặc muốn tái định vị thương hiệu mạnh mẽ.</p>
      
      <h3>Quyền lợi</h3>
      <ul>
        <li>Tư vấn chiến lược và định vị thương hiệu.</li>
        <li>Xác định tệp khách hàng mục tiêu và Insight.</li>
        <li>Xây dựng Concept và định vị thương hiệu.</li>
        <li>Lên kế hoạch và triển khai các sự kiện bùng nổ (Grand Opening, Món mới...).</li>
        <li>Sản xuất nội dung (Content, Hình ảnh, Video) cho Fanpage/Tiktok.</li>
        <li>Vận hành quảng cáo đa kênh tối ưu chi phí.</li>
      </ul>
      
      <h3>Quy trình làm việc</h3>
      <p>Khảo sát -> Lên kế hoạch -> Thống nhất -> Triển khai -> Báo cáo & Tối ưu.</p>
    `,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
    ],
    videos: [
      'https://www.youtube.com/embed/Oc-z8XSGKcc?rel=0',
    ],
    detailedServices: [
      {
        title: 'Xây dựng chiến lược thương hiệu',
        description: 'Chủ quán biết quán mình mạnh gì, yếu gì, nên truyền thông vào lợi điểm nào và bằng cách gì.',
        gallery: [
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        title: 'Thiết kế Bộ nhận diện',
        description: '• Thiết kế Logo & Brand Guidelines<br/>• Thiết kế Menu, Bao bì, Tem nhãn<br/>• Thiết kế ấn phẩm Social/POSM',
        gallery: [
          'https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        title: 'Kế hoạch Truyền thông',
        description: '• Xây dựng chương trình Promotion<br/>• Lựa chọn kênh truyền thông (Social/Local)<br/>• Phân bổ Ngân sách & KPI<br/>• Timeline chi tiết từng giai đoạn',
        gallery: [
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        title: 'Sản xuất Tư liệu Truyền thông',
        description: 'Hình ảnh & Video "thực tế", "cảm xúc" để chạm đến khách hàng:',
        subSections: [
          {
            title: 'Chụp ảnh chuyên nghiệp',
            description: '• Chụp ảnh sản phẩm (Food/Drink)<br/>• Chụp ảnh không gian & trải nghiệm<br/>• Chụp ảnh tương tác mẫu',
            gallery: [
              'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
            ]
          },
          {
            title: 'Quay dựng Video',
            description: '• Clip highlight không gian/sản phẩm<br/>• Clip TikTok/Reels bắt trend',
            videos: [
              { url: 'https://www.youtube.com/embed/shorts/8b1Jb8k0?feature=share', isVertical: true },
              { url: 'https://www.youtube.com/embed/Oc-z8XSGKcc?rel=0', isVertical: false }
            ]
          }
        ]
      },
      {
        title: 'Xây dựng & Quản trị kênh',
        description: '• Xây dựng Fanpage, Instagram, TikTok<br/>• Lập kế hoạch Content (Tone & Mood)<br/>• Thiết kế hình ảnh & Viết bài hàng ngày<br/>• Báo cáo hiệu quả định kỳ',
        gallery: [
          'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        title: 'Booking KOLs & Reviewer',
        description: '• Booking Micro Influencer/Food Reviewer<br/>• Seeding hội nhóm/Cộng đồng<br/>• Lan tỏa & Phủ sóng thương hiệu',
        gallery: [
          'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        title: 'Quảng cáo Đa nền tảng',
        description: '• Setup tài khoản Ads (FB/TikTok/Google)<br/>• Target đúng đối tượng tiềm năng<br/>• Tối ưu chi phí & Tăng chuyển đổi',
        gallery: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 'goi-dong-goi-thuong-hieu',
    title: 'ĐÓNG GÓI THƯƠNG HIỆU',
    shortDescription: 'Bàn giao bộ định vị và kế hoạch truyền thông chạy được trong 3-6 tháng',
    description: `
      <h3>Tổng quan</h3>
      <p>Giải pháp dành cho các chủ quán ở xa hoặc muốn tự vận hành marketing nhưng cần một nền tảng chuyên nghiệp ban đầu. Long sẽ xây dựng "móng nhà" marketing vững chắc để bạn tự tin phát triển.</p>
      
      <h3>Hạng mục bàn giao</h3>
      <ul>
        <li><b>Bộ nhận diện cốt lõi (Core Identity):</b> Logo, Slogan, Brand Voice, USP...</li>
        <li><b>Content Pillar:</b> Xương sống nội dung định hướng cho Fanpage/Tiktok.</li>
        <li><b>Quy trình vận hành:</b> Hướng dẫn quản trị và chăm sóc Fanpage chuyên nghiệp.</li>
        <li><b>Tài liệu mẫu:</b> Bàn giao bộ Template hình ảnh/video mẫu để dễ dàng chỉnh sửa.</li>
        <li><b>Kế hoạch hành động:</b> Plan truyền thông chi tiết để chạy trong 3-6 tháng đầu.</li>
      </ul>
    `,
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800'
    ],
    videos: []
  }
];
