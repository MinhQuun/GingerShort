# Ginger Premium Landing Page

Trang demo: https://minhquun.github.io/GingerShort/

Dự án trang web tĩnh (HTML/CSS/JS) cho thương hiệu Ginger Premium. Trang web có nhiều trang phụ trợ như giới thiệu, sản phẩm, blog và liên hệ. Không cần build phức tạp; chỉ cần chạy thông qua một server tĩnh (static server) để tải các thành phần giao diện dùng chung (Header/Footer).

## Nội dung chính

- **Trang chủ:** Hero slider (trình chiếu sản phẩm 3D/ảnh), danh sách sản phẩm bán chạy (Best Sellers), nút kêu gọi hành động (CTA).
- **Giới thiệu:** Câu chuyện thương hiệu, giá trị cốt lõi của Ginger Premium.
- **Sản phẩm:** Danh mục các sản phẩm và các gói combo định kỳ.
- **Blog:** Danh sách các bài viết tối ưu SEO.
- **Tin tức:** Các bài báo PR và hoạt động truyền thông.
- **Tuyển dụng:** Thông tin các vị trí đang mở tuyển.
- **Liên hệ:** Form thu thập thông tin liên hệ và bản đồ vị trí.

## Cấu trúc thư mục

```text
.
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ img/
│  │  ├─ hero/
│  │  ├─ logo/
│  │  ├─ posts/
│  │  └─ products/
│  └─ js/
│     └─ main.js
├─ components/
│  ├─ header.html
│  └─ footer.html
├─ index.html
├─ gioi-thieu.html
├─ san-pham.html
├─ blog.html
├─ tin-tuc.html
├─ tuyen-dung.html
├─ lien-he.html
├─ deploy.bat
└─ deploy.sh
```

## Tính năng chính

- **Component Loading:** Tự động tải Header và Footer từ thư mục `components/` thông qua Fetch API.
- **Theme Toggle:** Chuyển đổi Sáng/Tối mượt mà; lưu trạng thái ở `localStorage` với key `gp-theme`.
- **Slider:** Tích hợp Swiper.js (CDN) cho Hero Slider.
- **Scroll Reveal:** Hiệu ứng xuất hiện cho các phần tử có class `.reveal`.
- **Countdown Timer:** Đồng hồ đếm ngược kích hoạt cho phần tử có thuộc tính `[data-countdown]`.
- **Sticky CTA:** Nút kêu gọi hành động bám dính dưới màn hình khi có class `.sticky-cta`.
- **Mobile Menu:** Menu responsive với nút toggle hamburger.

## Hướng dẫn chạy local

Vì dự án dùng Fetch API để gọi file HTML, bạn **bắt buộc** phải chạy qua server tĩnh (không mở trực tiếp bằng `file://`).

### Cách 1: VS Code Live Server (khuyên dùng)

1. Cài extension **Live Server** trong Visual Studio Code.
2. Mở `index.html`, click chuột phải và chọn **Open with Live Server**.

### Cách 2: Python (nếu máy đã cài sẵn)

1. Mở Terminal/Command Prompt tại thư mục gốc dự án và chạy:

```bash
python -m http.server
```

2. Mở trình duyệt và truy cập: http://localhost:8000

## Hướng dẫn deploy lên GitHub Pages

Dự án có sẵn script để tự động commit thay đổi và push lên nhánh hiện hành.

### Windows (CMD/PowerShell)

```bat
.\deploy.bat "deploy: cập nhật giao diện"
```

### macOS/Linux

```bash
./deploy.sh "deploy: cập nhật giao diện"
```

**Lưu ý quan trọng:**

- Cần khởi tạo git repo và kết nối `remote origin` trước khi chạy script.
- Trên Windows, nếu thông báo commit có khoảng trắng, hãy bọc bằng dấu ngoặc kép.
- Sau khi push, vào **Settings > Pages** trên GitHub và bật GitHub Pages cho nhánh hiện tại (chọn thư mục `root`).

## Hướng dẫn cập nhật nội dung

- **Menu / Footer:** sửa tại `components/header.html` và `components/footer.html`.
- **Thông tin liên hệ:** cập nhật trong `lien-he.html` và `components/footer.html`.
- **Hình ảnh sản phẩm:** thêm/đổi ảnh trong `assets/img/`.
- **Nội dung / Thông điệp:** chỉnh text trực tiếp trong `index.html`, `san-pham.html`, v.v.
- **Tracking:** chèn mã Google Analytics/Meta Pixel trong thẻ `<head>` của `index.html` (đã có `<!-- TODO -->`).

## Ghi chú kỹ thuật

- **Typography:** Playfair Display (tiêu đề) và Inter (nội dung) từ Google Fonts.
- **Thư viện bên thứ 3:** Swiper.js qua CDN (không cần cài đặt).
- **Quản lý màu sắc:** hệ màu Sáng/Tối dùng CSS Variables trong `assets/css/style.css`.
